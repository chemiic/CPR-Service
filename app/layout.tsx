import '@/app/globals.css';
import type { Metadata } from 'next';
import Menu from '@/components/menu/Menu';
import Footer from '@/components/Footer';
import { siteConfig } from '@/lib/site-content';

export const metadata: Metadata = {
  title: `${siteConfig.shortName} — ${siteConfig.tagline}`,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="page">
        <Menu />
        <div className="page__main">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
