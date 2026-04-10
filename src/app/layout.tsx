import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import { ThemeProvider } from '@/design-system/theme';
import { AnalyticsProvider } from '@/providers/AnalyticsProvider';
import './globals.css';
import styles from './layout.module.css';

export const metadata: Metadata = {
  title: 'Roman | Senior Software Engineer',
  description:
    'Personal portfolio of a Senior Software Engineer focused on React, TypeScript, Node.js, full-stack engineering, and open-source.',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? '';

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        <AnalyticsProvider>
          <ThemeProvider>
            <div className={styles.shell}>
              <Header />
              <main className={styles.main}>{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </AnalyticsProvider>

        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga-script" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
