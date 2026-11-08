import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { FC, ReactNode } from 'react';
import Footer from '@/components/molecules/Footer';
import Navbar from '@/components/molecules/Navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const GITHUB = 'https://github.com/hieudoanm/neuro.imagers';
const LOGO =
  process.env.NODE_ENV === 'production' ? '/neuro.imagers/logo.svg' : '/logo.svg';

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Demo', href: '#demo' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Install', href: '#install' },
  { label: 'Docs', href: '/docs/' },
];

const DESCRIPTION =
  'Neuro Imagers is a local-first neuroimaging desktop app for EEG, MEG, and MRI. Rust processing crates behind a Tauri interface — recordings never leave your machine.';

export const metadata: Metadata = {
  metadataBase: new URL('https://hieudoanm.github.io/neuro.imagers/'),
  title: {
    default: 'Neuro Imagers — Local EEG, MEG, and MRI workbench',
    template: '%s — Neuro Imagers',
  },
  description: DESCRIPTION,
  keywords: [
    'EEG',
    'MEG',
    'MRI',
    'neuroscience',
    'brain data analysis',
    'desktop app',
    'Rust',
    'MCP server',
  ],
  authors: [{ name: 'hieudoan', url: 'https://github.com/hieudoanm/neuro.imagers' }],
  category: 'software',
  openGraph: {
    siteName: 'Neuro Imagers',
    type: 'website',
    title: 'Neuro Imagers — Local EEG, MEG, and MRI workbench',
    description: DESCRIPTION,
    url: 'https://hieudoanm.github.io/neuro.imagers/',
    images: ['/og.png'],
  },
  twitter: { card: 'summary_large_image', images: ['/og.png'] },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
};


const JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      name: 'Neuro Imagers',
      url: 'https://hieudoanm.github.io/neuro.imagers/',
      description: 'Neuro Imagers is a local-first neuroimaging desktop app for EEG, MEG, and MRI. Rust processing crates behind a Tauri interface — recordings never leave your machine.',
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Neuro Imagers',
      applicationCategory: 'MultimediaApplication',
      description: 'Neuro Imagers is a local-first neuroimaging desktop app for EEG, MEG, and MRI. Rust processing crates behind a Tauri interface — recordings never leave your machine.',
      url: 'https://hieudoanm.github.io/neuro.imagers/',
      codeRepository: 'https://github.com/hieudoanm/neuro.imagers',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  ]
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => (
  <html
    lang="en"
    data-theme="neuroimagers"
    className={`scroll-smooth antialiased motion-reduce:scroll-auto ${inter.className}`}>
    <body className="bg-base-100 text-base-content m-0 leading-relaxed">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <Navbar
        name="Neuro Imagers"
        logoSrc={LOGO}
        links={NAV_LINKS}
        githubUrl={GITHUB}
      />
      {children}
      <Footer
        name="neuro.imagers"
        tagline="Local-first EEG, MEG, and MRI processing · MIT licensed"
        githubUrl={GITHUB}
      />
    </body>
  </html>
);

export default RootLayout;
