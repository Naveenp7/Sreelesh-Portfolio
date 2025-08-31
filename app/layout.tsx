import '@coreui/coreui/dist/css/coreui.min.css';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sreelesh C. - AI Engineer & Content Creator',
  description: 'Portfolio of Sreelesh C. - Where artificial intelligence meets artistic vision. Showcasing expertise in AI & Data Science alongside creative videography and photography.',
  keywords: ['AI Engineer', 'Data Science', 'Videographer', 'Photographer', 'Creative Director'],
  authors: [{ name: 'Sreelesh C.' }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  openGraph: {
    title: 'Sreelesh C. - AI Engineer & Content Creator',
    description: 'Where artificial intelligence meets artistic vision',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#8B5CF6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="antialiased overflow-x-hidden">
        <div className="relative z-10 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
