import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { guides } from '@/lib/guides';

export const dynamicParams = false;
export function generateStaticParams() { return guides.map((guide) => ({ slug: guide.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const guide = guides.find((item) => item.slug === slug);
  return guide ? { title: guide.title, description: guide.description } : {};
}
export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const guide = guides.find((item) => item.slug === slug); if (!guide) notFound();
  return <><section className="page-hero"><div className="wrap"><div className="eyebrow">{guide.category} · THAT REDLINER GUIDE</div><h1>{guide.title}.</h1><p>{guide.intro}</p></div></section><article className="wrap content">{guide.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}<div className="notice">Editorial note: this is general information, not model-specific repair instruction. Verify current prices and technical details with the vehicle manufacturer or an authorised professional.</div><p><Link href="/tools/">Try our free vehicle calculators →</Link></p></article></>;
}
