export const navigationLinks = [
  { href: '#features', label: 'Features' },
  { href: '#about', label: 'About' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
] as const;

export const featurePreviewItems = [
  {
    title: 'Daily Word',
    text: 'Start the day with one focused verse and challenge.',
  },
  {
    title: 'Topics',
    text: 'Browse fear, anger, purpose, courage, leadership, and more.',
  },
  {
    title: 'Save & Share',
    text: 'Bookmark verses and share polished verse cards in a few taps.',
  },
] as const;

export const featureCards = [
  {
    title: 'Daily Verse + Challenge',
    text: 'Open the app and get one verse with a practical challenge you can apply immediately.',
  },
  {
    title: 'Browse by Topic',
    text: 'Explore Scripture by courage, anger, fear, purpose, leadership, discipline, and faith.',
  },
  {
    title: 'Save, Share, Return',
    text: 'Bookmark powerful verses and share designed verse cards with friends and family.',
  },
] as const;

export const footerLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Use' },
  { href: 'mailto:quoteverseapps@gmail.com', label: 'Contact Support' },
] as const;

export const dailyWord = {
  label: 'Daily Word',
  badge: 'Daily',
  quote:
    '“Be strong and courageous. Do not be frightened, and do not be dismayed, for the Lord your God is with you wherever you go.”',
  reference: 'Joshua 1:9 • ESV',
  challengeTitle: 'Today’s Challenge',
  challengeText: 'Take one hard step today that requires courage instead of comfort.',
} as const;

export const policyContent = {
  privacy: {
    title: 'Privacy Policy',
    updated: 'Last updated: April 1, 2026',
    sections: [
      {
        title: 'Information We Collect',
        body:
          'Iron & Proverbs may collect basic information needed to operate the app, improve performance, and provide support. This can include anonymous usage information, device data, and any information you choose to send when contacting support.',
      },
      {
        title: 'How Information Is Used',
        body:
          'Information is used to maintain app functionality, understand general usage patterns, improve the product, and respond to support requests. We do not sell your personal information.',
      },
      {
        title: 'Third-Party Services',
        body:
          'The app store, hosting providers, analytics tools, or other service providers may process limited technical data required for delivery and performance. Their handling of data is governed by their own policies.',
      },
      {
        title: 'Your Choices',
        body:
          'If you have privacy questions or would like help regarding your data, contact support using the email listed on this site.',
      },
    ],
  },
  terms: {
    title: 'Terms of Use',
    updated: 'Last updated: April 1, 2026',
    sections: [
      {
        title: 'Use of the App',
        body:
          'Iron & Proverbs is provided for personal, non-commercial use unless otherwise stated. You agree to use the app lawfully and in a way that does not interfere with the experience of others.',
      },
      {
        title: 'Content Disclaimer',
        body:
          'The app is intended for encouragement and informational purposes. It is not a substitute for pastoral, legal, medical, or professional advice.',
      },
      {
        title: 'Availability',
        body:
          'Features, content, and availability may change over time. We may update, improve, or discontinue parts of the service when needed.',
      },
      {
        title: 'Contact',
        body:
          'For questions about these terms, reach out using the support email listed on this site.',
      },
    ],
  },
} as const;
