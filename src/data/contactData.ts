export const CONTACT_INFO = {
  owner: 'Muhammad Taki Ahmed',
  email: 'muhammadtakiahmed@icloud.com',
  phone: '+880 1873-691022',
  address: 'Dhaka-1230, Bangladesh',
  usBankAddress: 'JPMorgan Chase Bank N.A., 270 Park Avenue, New York, NY 10017, USA',
  hours: 'Mon – Fri: 8:00 AM – 6:00 PM EST / BST',
  responseTime: '< 48 Hours',
  whopStore: 'https://whop.com/raydrim',
};

export const SERVICE_OPTIONS = [
  'Web Applications',
  'Mobile Apps (iOS & Google Play Store)',
  'E-Commerce Platforms',
  'Cloud Architecture',
  'Brand Identity & UI/UX',
  'AI Solutions & Automation',
  'Digital E-Books & Technical Guides',
  'Custom Enterprise Consulting',
] as const;

export const BUDGET_RANGES = [
  '$2.5k – $5k',
  '$5k – $15k',
  '$15k – $30k',
  '$30k+',
] as const;

export const CONSULTATION_SLOTS: { time: string; label: string }[] = [];

export const QUICK_CONTACT_FAQS = [
  {
    question: 'How fast will I hear back after submitting?',
    answer: 'I monitor inquiries continuously and will respond within 24–48 hours with a preliminary assessment or next steps.',
  },
  {
    question: 'Can we sign an NDA before sharing sensitive details?',
    answer: 'Yes! I respect your confidentiality. Simply request an NDA in the form message or contact me directly at muhammadtakiahmed@icloud.com and I will issue a standard NDA immediately.',
  },
  {
    question: 'Do you work with non-technical founders?',
    answer: 'Absolutely. I specialize in translating complex business visions into elegant technical architecture and intuitive digital products.',
  },
];
