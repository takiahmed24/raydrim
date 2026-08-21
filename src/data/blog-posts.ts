import { BlogPost } from '@/types';

const AUTHOR = {
  name: 'Muhammad Taki Ahmed',
  role: 'Founder & Software Developer at Raydrim',
  avatar: '/logo.svg',
  bio: 'Muhammad Taki Ahmed is a full-stack developer based in Dhaka, Bangladesh. He builds production web applications with Next.js, React and TypeScript, and writes about what actually broke while shipping them.',
};

export const blogPosts: BlogPost[] = [
  {
    id: 'static-html-lied-about-my-numbers',
    slug: 'static-html-animated-counters-ssg-bug',
    category: 'Web Development',
    readTime: '6 min read',
    image: '/images/hero_preview.jpg',
    title: 'My Site Shipped Zeros to Google: An Animated Counter SSG Bug',
    date: '2026-08-19',
    featured: true,
    tags: ['Next.js', 'SSG', 'React', 'Debugging'],
    author: AUTHOR,
    excerpt:
      'My homepage showed "2+ Projects Shipped" in the browser and "0+ Projects Shipped" to every crawler that fetched it. Here is how a standard animated counter pattern silently poisoned my static HTML, and the two-line fix.',
    tableOfContents: [
      { id: 'symptom', title: 'The symptom: a number only humans could see', level: 2 },
      { id: 'cause', title: 'Why useState(0) is a trap in SSG', level: 2 },
      { id: 'fix', title: 'The fix: render the truth, then animate', level: 2 },
      { id: 'scrollreveal', title: 'The same bug wearing a different hat', level: 2 },
      { id: 'checking', title: 'How to check your own build output', level: 2 },
    ],
    content: `<h2 id="symptom">The symptom: a number only humans could see</h2>
<p>I have a stats strip on the raydrim.com homepage. Four numbers: projects shipped, code ownership, service areas, response time. In a browser they read <strong>2+, 100%, 6, &lt;24hr</strong>. They count up as you scroll past. Nice little touch.</p>
<p>Then I fetched my own homepage with a tool that does not execute JavaScript, and got this:</p>
<pre><code class="language-text">0+  Projects Shipped
0%  Code Ownership
0   Service Areas
&lt;0hr Response Time</code></pre>
<p>"Less than zero hours response time" is a funny thing to promise. It is a much less funny thing to discover has been sitting in your served HTML for weeks, because that is the version a crawler reads, the version a link preview scrapes, and the version a human reviewer sees if their fetch does not run scripts.</p>

<h2 id="cause">Why useState(0) is a trap in SSG</h2>
<p>Here is the counter component, and it is the same one you will find in a hundred tutorials:</p>
<pre><code class="language-tsx">export default function AnimatedCounter({ value, duration = 2 }: Props) {
  const [count, setCount] = useState(0);          // <-- the bug
  const ref = useRef&lt;HTMLSpanElement&gt;(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() =&gt; {
    if (!isInView) return;
    // ...requestAnimationFrame ramp from 0 to value
  }, [isInView, value, duration]);

  return &lt;span ref={ref}&gt;{Math.round(count)}&lt;/span&gt;;
}</code></pre>
<p>Read it as a static site generator would. At build time there is no browser, no viewport, no IntersectionObserver. React renders the component exactly once to a string. <code>count</code> is whatever <code>useState</code> was initialised with, and <code>useEffect</code> never runs — effects are a client-only concept.</p>
<p>So the generated HTML contains <code>&lt;span&gt;0&lt;/span&gt;</code>. Always. The real value only appears after JavaScript loads, hydration completes, the element scrolls into view, and the animation finishes.</p>
<p>The insidious part is that it looks perfect in development and perfect in production, because you are looking at it in a browser. The broken output is only visible if you read the file on disk or fetch without JS.</p>

<h2 id="fix">The fix: render the truth, then animate</h2>
<p>Initialise state with the real value, then knock it back to zero on mount — client-side only — before animating up:</p>
<pre><code class="language-tsx">export default function AnimatedCounter({ value, duration = 2 }: Props) {
  const [count, setCount] = useState(value);      // SSG emits the real number
  const ref = useRef&lt;HTMLSpanElement&gt;(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const hasAnimated = useRef(false);

  useEffect(() =&gt; {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;
    setCount(0);
    // ...requestAnimationFrame ramp from 0 to value
  }, [isInView, value, duration]);

  return &lt;span ref={ref}&gt;{Math.round(count)}&lt;/span&gt;;
}</code></pre>
<p>Now the static file says <code>2</code>. A visitor with JavaScript sees it drop to zero and count back up, which is the effect I wanted anyway. A visitor without JavaScript, or a crawler, sees <code>2</code> and moves on.</p>
<p>The principle generalises: <strong>the server-rendered state should be the finished state, not the starting frame of an animation.</strong> Animation is a client-side enhancement. If your prerendered HTML represents frame zero, you have shipped frame zero to everyone who does not run your JavaScript.</p>

<h2 id="scrollreveal">The same bug wearing a different hat</h2>
<p>Once I knew what to look for, I found it again. My scroll-reveal wrapper used Framer Motion like this:</p>
<pre><code class="language-tsx">&lt;motion.div initial="hidden" whileInView="visible" variants={variants}&gt;</code></pre>
<p>with <code>hidden</code> defined as <code>{ opacity: 0, y: 40 }</code>. At build time Framer Motion serialises the initial variant into an inline style, so the HTML shipped <code>style="opacity:0;transform:translateY(40px)"</code>.</p>
<p>I counted the occurrences in my own build output. The services page had 23 of them. Pricing had 20. About had 17. The homepage had 15. Most of the visible content on every marketing page was invisible in the raw document, waiting on an IntersectionObserver to rescue it.</p>
<p>Same fix, same shape — render plain and unstyled until mounted:</p>
<pre><code class="language-tsx">const [isMounted, setIsMounted] = useState(false);
useEffect(() =&gt; setIsMounted(true), []);

if (!isMounted) {
  return &lt;div className={className}&gt;{children}&lt;/div&gt;;
}

return (
  &lt;motion.div initial="hidden" whileInView="visible" variants={variants} className={className}&gt;
    {children}
  &lt;/motion.div&gt;
);</code></pre>
<p>One caveat worth knowing before you copy this: content that is already inside the viewport on first paint will flash visible, then hidden, then animate back in, because the swap to <code>motion.div</code> happens after mount. For above-the-fold sections I now skip the reveal entirely rather than animate them.</p>

<h2 id="checking">How to check your own build output</h2>
<p>You do not need a tool for this. After <code>next build</code>, the prerendered files sit in <code>.next/server/app/</code>. Read them directly:</p>
<pre><code class="language-bash"># Are you shipping zeros?
grep -o '&gt;0&lt;' .next/server/app/index.html | wc -l

# How much of the page is invisible in the raw HTML?
for f in .next/server/app/*.html; do
  echo "$f: $(grep -o 'opacity:0' "$f" | wc -l)"
done</code></pre>
<p>Both commands should return zero, or something you can explain. Mine returned four and ninety-eight respectively.</p>
<p>The wider lesson I took from this: in a statically generated app, the browser is the friendliest possible reader of your site. Everything else — crawlers, scrapers, previews, reviewers, people on flaky connections where a script fails — sees the file, not the app. Read the file occasionally.</p>`,
  },
  {
    id: 'campus-dude-no-build-step',
    slug: 'building-22-browser-games-without-a-framework',
    category: 'Web Development',
    readTime: '7 min read',
    image: '/images/hero_preview.jpg',
    title: 'I Built 22 Browser Games With No Framework and No Build Step',
    date: '2026-08-06',
    featured: false,
    tags: ['HTML5 Canvas', 'JavaScript', 'Performance', 'Game Dev'],
    author: AUTHOR,
    excerpt:
      'Campus Dude is 22 games that run instantly with no login and no install. Choosing vanilla JavaScript and HTML5 Canvas over a framework was the decision that made every other constraint achievable.',
    tableOfContents: [
      { id: 'constraint', title: 'The constraint that shaped everything', level: 2 },
      { id: 'no-framework', title: 'Why no framework', level: 2 },
      { id: 'loop', title: 'One game loop, twenty-two games', level: 2 },
      { id: 'no-login', title: 'Scores without accounts', level: 2 },
      { id: 'tradeoffs', title: 'What this approach costs', level: 2 },
    ],
    content: `<h2 id="constraint">The constraint that shaped everything</h2>
<p>Campus Dude exists for a specific moment: a student has ten minutes between classes, on campus wifi, on a phone or a shared library desktop. They want to play something. They do not want to make an account, install anything, or wait.</p>
<p>That is the whole brief, and it turns out to be a demanding one. Ten minutes means the game has to be playable in under three seconds from tapping the link. Shared library desktop means no installs and no assumptions about the machine. Campus wifi means the payload has to be small. And "does not want to make an account" rules out most of the conventional scaffolding around a games site.</p>
<p>Every technical decision below falls out of those four sentences.</p>

<h2 id="no-framework">Why no framework</h2>
<p>My day job is Next.js. My instinct was to reach for it here too. I did not, and the reason is the three-second budget.</p>
<p>A framework-based game page has to ship the framework runtime, hydrate, and then start the game. For a content site that cost is well worth paying — you get routing, data fetching, and a component model. For a Canvas game, almost none of that is useful. The game is a single <code>&lt;canvas&gt;</code> element and a loop. Everything the framework provides sits between the user and the thing they came for.</p>
<p>So each game is a plain HTML document, a stylesheet, and a JavaScript file. No bundler, no transpiler, no build step. The browser parses the HTML, runs the script, and the game starts. Deployment is copying files.</p>
<p>The unglamorous benefit is that this has not broken once. There is no dependency tree to audit, no build that can fail, no framework major version to migrate across. A game I wrote in week one still runs identically today because nothing underneath it moved.</p>
<p>Shared styling comes from CSS custom properties in a single file each game imports:</p>
<pre><code class="language-css">:root {
  --bg: #f4f1ec;
  --ink: #16150f;
  --accent: #ff4d2e;
  --radius: 12px;
  --font-display: 'Space Grotesk', system-ui, sans-serif;
}</code></pre>
<p>That gives twenty-two games one visual identity without a component library. When I changed the accent colour, I changed one line.</p>

<h2 id="loop">One game loop, twenty-two games</h2>
<p>The games differ enormously — Carrom Board is physics on a board, Neon Rush is an endless runner, Campus 2048 is a grid puzzle. What they share is the loop, and I wrote it once:</p>
<pre><code class="language-javascript">function createLoop(update, render) {
  let last = 0;
  let rafId = null;

  function frame(now) {
    const dt = Math.min((now - last) / 1000, 0.05); // clamp tab-switch spikes
    last = now;
    update(dt);
    render();
    rafId = requestAnimationFrame(frame);
  }

  return {
    start() { last = performance.now(); rafId = requestAnimationFrame(frame); },
    stop() { cancelAnimationFrame(rafId); },
  };
}</code></pre>
<p>Two details in there earned their place the hard way. Passing delta time to <code>update</code> rather than assuming a fixed step means the game runs at the same speed on a 60Hz laptop and a 120Hz phone. And clamping <code>dt</code> to 50ms stops the physics exploding when someone switches tabs for a minute and <code>requestAnimationFrame</code> resumes with an enormous gap — without the clamp, a carrom striker teleports through the board.</p>
<p>Pairing <code>stop()</code> with the Page Visibility API also stops a backgrounded tab burning battery, which matters when the audience is on phones all day.</p>

<h2 id="no-login">Scores without accounts</h2>
<p>No login was a product decision, not a technical one, but it forced a technical answer: where do scores live?</p>
<p>They live in <code>localStorage</code>, keyed per game. A player gets a generated handle on first visit — <em>Player_2185</em> and similar — which persists in the same store. It is not an identity, it is a label on a high score.</p>
<p>The honest trade-off: clear your browser data and your scores are gone, and your scores do not follow you to another device. For a study-break games site that is an acceptable loss, and it buys something valuable — there is no account system, no password reset, no personal data to protect, and no signup screen between the link and the game.</p>
<p>Anything that reads storage is wrapped, because storage throws rather than returning null in private-browsing contexts and when a browser blocks site data:</p>
<pre><code class="language-javascript">function readScore(gameId) {
  try {
    return Number(localStorage.getItem('cd:score:' + gameId)) || 0;
  } catch {
    return 0; // private mode, blocked storage — just play without a high score
  }
}</code></pre>

<h2 id="tradeoffs">What this approach costs</h2>
<p>I am not going to pretend this is free. Three things are genuinely worse without a framework.</p>
<p><strong>There is real duplication.</strong> Every game page repeats its own header markup and script tags. With twenty-two games, changing the site header means changing twenty-two files. I use a small script for that, which is a build step in everything but name.</p>
<p><strong>State-heavy UI is tedious.</strong> The Canvas rendering is fine — you are drawing every frame anyway. But the surrounding UI, menus and settings and score panels, is manual DOM work that a component model would have made shorter.</p>
<p><strong>No type safety.</strong> On a codebase this size I feel it. Refactoring a shared helper means grepping and hoping rather than letting the compiler find the callers.</p>
<p>Would I choose it again? For this site, yes. The constraint was time-to-playable on a bad connection, and nothing beats a document that starts working the moment it arrives. If Campus Dude grows features that need real state — accounts, multiplayer, a persistent profile — the calculation changes, and I will happily pay the framework cost then.</p>
<p>Pick the constraint that actually matters first. The stack falls out of it.</p>`,
  },
];

export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedBlogPosts(
  currentSlug: string,
  category: string,
  limit = 3
): BlogPost[] {
  const others = blogPosts.filter((post) => post.slug !== currentSlug);
  const sameCategory = others.filter((post) => post.category === category);
  const rest = others.filter((post) => post.category !== category);
  return [...sameCategory, ...rest].slice(0, limit);
}

export function getAllCategories(): string[] {
  return ['All', ...Array.from(new Set(blogPosts.map((post) => post.category)))];
}
