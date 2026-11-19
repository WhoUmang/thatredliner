import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'That Redliner | Beyond the Ride', template: '%s | That Redliner' },
  description: site.description,
  openGraph: { title: 'That Redliner', description: site.description, url: site.url, siteName: site.name, type: 'website' },
  icons: { icon: '/favicon.svg' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN"><body><Header/><main>{children}</main><Footer/></body></html>;
}
