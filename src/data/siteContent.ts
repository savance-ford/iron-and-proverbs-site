export type NavLink = {
  href: string;
  label: string;
};

export type ContentCard = {
  title: string;
  text: string;
};

export type LegalSection = {
  title: string;
  body: string;
  bullets?: string[];
};

export type LegalDocument = {
  title: string;
  effectiveDate: string;
  intro: string;
  sections: LegalSection[];
};

export const appStoreUrl =
  'https://play.google.com/store/apps/details?id=com.ironandproverbs.app';

export const navigationLinks: readonly NavLink[] = [
  { href: '#features', label: 'Features' },
  { href: '#about', label: 'About' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
] as const;

export const footerLinks: readonly NavLink[] = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: 'mailto:quoteverseapps@gmail.com', label: 'Contact Support' },
] as const;

export const featurePreviewItems: readonly ContentCard[] = [
  {
    title: 'Daily Word',
    text: 'Start each day with one focused verse and one practical challenge.',
  },
  {
    title: 'Topic-Based Reading',
    text: 'Browse verses around courage, anger, purpose, fear, leadership, and faith.',
  },
  {
    title: 'Save & Share',
    text: 'Bookmark powerful passages and share polished verse cards in a few taps.',
  },
] as const;

export const featureCards: readonly ContentCard[] = [
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
    text: 'Bookmark meaningful verses and share designed verse cards with friends and family.',
  },
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

export const homePageContent = {
  title: 'Build strength through Scripture.',
  subtitle:
    'Iron & Proverbs is a focused Bible app for men who want daily verses, practical challenges, and encouragement rooted in courage, discipline, leadership, and faith.',
  aboutTitle: 'Built for discipline, courage, and purpose.',
  aboutText:
    'Iron & Proverbs was created for men who want daily encouragement rooted in Scripture and practical application. It is built to help you return to the Word consistently and apply it in real life.',
  missionQuote: '“As iron sharpens iron, so one man sharpens another.”',
  missionReference: 'Proverbs 27:17',
} as const;

export const legalDocuments: Record<'privacy' | 'terms', LegalDocument> = {
  privacy: {
    title: 'Privacy Policy',
    effectiveDate: 'March 5, 2026',
    intro:
      'Iron & Proverbs (“the App”) is a Bible-based daily discipline app. Your privacy matters. This Privacy Policy explains what information the App collects and how it is used.',
    sections: [
      {
        title: '1) Information You Provide',
        body:
          'The App does not require you to create an account and does not ask you to submit personal information such as your name, email address, or phone number.',
      },
      {
        title: '2) Information Stored on Your Device',
        body:
          'To provide core features, the App stores certain information locally on your device. This information remains on your device and is not transmitted to us.',
        bullets: [
          'Saved or bookmarked verses',
          'App usage preferences, if any',
          'Streak and last-opened date data',
        ],
      },
      {
        title: '3) Automatically Collected Information',
        body:
          'The App does not collect analytics, advertising identifiers, precise location, contacts, or device identifiers for tracking purposes.',
      },
      {
        title: 'How We Use Information',
        body: 'Local on-device data is used only to support core app functionality.',
        bullets: [
          'Show your saved verses',
          'Track streaks and progress',
          'Maintain your app preferences',
        ],
      },
      {
        title: 'Data Sharing',
        body:
          'We do not sell, trade, rent, or share your personal information. The App does not transmit your saved verses or streak data to our servers.',
      },
      {
        title: 'Third-Party Services',
        body:
          'The App may use standard platform services such as the Google Play Store to distribute the App. Those services may collect information as described in their own privacy policies. If the App includes optional features like sharing a verse image, that content is shared only when you choose to share it using your device’s sharing options.',
      },
      {
        title: 'Data Retention',
        body:
          'Because your saved verses and streak data are stored locally on your device, you control it. You can remove this data by clearing the App’s storage or data in your device settings, or by uninstalling the App.',
      },
      {
        title: 'Children’s Privacy',
        body:
          'The App is not directed to children under 13. We do not knowingly collect personal information from children.',
      },
      {
        title: 'Security',
        body:
          'We take reasonable steps to minimize data collection. Because data is stored locally on your device, protecting your device helps protect your information.',
      },
      {
        title: 'Changes to This Policy',
        body:
          'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.',
      },
      {
        title: 'Contact Us',
        body: 'If you have questions about this Privacy Policy, contact us at quoteverseapps@gmail.com.',
      },
    ],
  },
  terms: {
    title: 'Terms of Service',
    effectiveDate: 'March 5, 2026',
    intro:
      'By downloading or using Iron & Proverbs (“the App”), you agree to these Terms of Service.',
    sections: [
      {
        title: '1) Use of the App',
        body:
          'The App provides Bible verses, devotional-style content, and encouragement for personal use. You agree to use the App lawfully and not to misuse or interfere with the App.',
      },
      {
        title: '2) No Professional Advice',
        body:
          'Content in the App is provided for inspirational and informational purposes only and is not a substitute for pastoral counseling, medical, mental health, legal, or professional advice.',
      },
      {
        title: '3) User Content & Sharing',
        body:
          'If you share verse cards or text from the App, you are responsible for what you share and where you share it.',
      },
      {
        title: '4) Intellectual Property',
        body:
          'The App’s design, layout, and original content, such as category organization and application text, are owned by the developer. Bible verse text may be subject to the terms of the applicable translation.',
      },
      {
        title: '5) Availability and Changes',
        body:
          'We may update or change the App over time, including adding, removing, or modifying features.',
      },
      {
        title: '6) Disclaimer of Warranties',
        body:
          'The App is provided “as is” without warranties of any kind. We do not guarantee that the App will always be available or error-free.',
      },
      {
        title: '7) Limitation of Liability',
        body:
          'To the maximum extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from your use of the App.',
      },
      {
        title: '8) Termination',
        body:
          'We may suspend or terminate access to the App if required for legal or safety reasons.',
      },
      {
        title: '9) Contact',
        body: 'If you have questions about these Terms, contact quoteverseapps@gmail.com.',
      },
    ],
  },
};
