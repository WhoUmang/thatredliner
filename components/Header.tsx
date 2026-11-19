import Link from 'next/link';

const nav = [
  ['Bikes', '/bikes/'], ['Cars', '/cars/'], ['EVs', '/evs/'],
  ['Maintenance', '/maintenance/'], ['Comparisons', '/comparisons/'], ['Tools', '/tools/'],
];

export function Header() {
  return <header className="header"><div className="wrap nav-wrap">
    <Link className="brand" href="/" aria-label="That Redliner home"><span className="brand-mark">TR</span><span>THAT<span className="red">REDLINER</span><small>BEYOND THE RIDE.</small></span></Link>
    <nav aria-label="Main navigation">{nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
    <Link className="nav-cta" href="/about/">Our story <span>↗</span></Link>
  </div></header>;
}
