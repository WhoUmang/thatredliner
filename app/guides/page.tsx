import Link from 'next/link';
import { guides } from '@/lib/guides';

export const metadata = {
  title: 'Automotive Guides',
  description: 'Practical motorcycle, car and vehicle ownership guides for Indian roads.',
};

export default function GuidesPage() {
  return <>
    <section className="page-hero"><div className="wrap"><div className="section-kicker">THE REDLINER EDIT</div><h1>Knowledge for the road ahead.</h1><p>Practical explainers for buying, maintaining and owning vehicles in India. Clear starting points, useful checklists and no unnecessary jargon.</p></div></section>
    <section className="section"><div className="wrap"><div className="article-grid">{guides.map((guide, index) => <article className="article-card" key={guide.slug}><span className="tag">{guide.category}</span><h3>{guide.title}</h3><p>{guide.description}</p><Link className="read" href={`/guides/${guide.slug}/`}>Read the guide ↗</Link></article>)}</div></div></section>
  </>;
}
