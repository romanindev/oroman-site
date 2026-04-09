import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Roman | Senior Software Engineer',
  description:
    'Personal portfolio of a Senior Software Engineer focused on React, TypeScript, Node.js, full-stack engineering, and open-source.',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
    <body>
    <div className="site-shell">
      <Header />
      <main className="site-main">{children}</main>
      <Footer />
    </div>
    </body>
    </html>
  );
}
