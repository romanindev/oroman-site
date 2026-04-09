import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import { ThemeProvider } from '@/design-system/theme';
import styles from './layout.module.css'

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
    <html lang="en" suppressHydrationWarning>
    <body>
    <ThemeProvider>
      <div className={styles.shell}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
    </body>
    </html>
  );
}
