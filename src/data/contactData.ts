export const CONTACT_INFO = {
  owner: 'Muhammad Taki Ahmed',
  email: 'muhammadtakiahmed@icloud.com',
  emailAlt: 'muhtakiahmed2004@gmail.com',
  phone: '+880 1873-691022',
  address: 'Dhaka-1230, Bangladesh',
  paymentOptions: 'Payoneer, Wise, Direct Bank Transfer & bKash',
  hours: 'Mon – Fri: 8:00 AM – 6:00 PM EST / BST',
  responseTime: '< 24 Hours',
  whopStore: 'https://whop.com/raydrim',
};

export const SERVICE_OPTIONS = [
  'Starter Site ($149)',
  'Business Website ($449)',
  'Shopify Store Build ($249 – $1,295)',
  'Website to App / WebView ($299)',
  'Cross-Platform Mobile App ($999)',
  'Custom Web App (from $2,499)',
  'Monthly Care Plan',
  'Something Else / Not Sure Yet',
] as const;

export const BUDGET_RANGES = [
  '$149 – $449',
  '$449 – $999',
  '$999 – $2,499',
  '$2,499+',
] as const;

export const CONSULTATION_SLOTS: { time: string; label: string }[] = [];

export const QUICK_CONTACT_FAQS = [
  {
    question: 'How fast will I hear back after submitting?',
    answer: 'I monitor inquiries continuously and will respond within 24 hours with a preliminary assessment or next steps.',
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
