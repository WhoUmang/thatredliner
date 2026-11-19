import Link from 'next/link';
export function Footer() {
  return <footer className="footer"><div className="wrap footer-grid">
    <div><Link className="brand footer-brand" href="/"><span className="brand-mark">TR</span><span>THAT<span className="red">REDLINER</span><small>BEYOND THE RIDE.</small></span></Link><p>Automotive knowledge for Indian riders, drivers and vehicle owners.</p></div>
    <div><b>Explore</b><Link href="/bikes/">Bikes</Link><Link href="/cars/">Cars</Link><Link href="/evs/">Electric vehicles</Link><Link href="/maintenance/">Maintenance</Link><Link href="/tools/">Calculators</Link></div>
    <div><b>That Redliner</b><Link href="/about/">About</Link><Link href="/contact/">Contact</Link><Link href="/privacy/">Privacy policy</Link><Link href="/disclaimer/">Disclaimer</Link></div>
  </div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} That Redliner</span><span>Built for the road ahead.</span></div></footer>;
}
