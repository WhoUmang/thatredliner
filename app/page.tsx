import Link from 'next/link';
import { articles, categories } from '@/lib/site';

export default function Home() {
  return <>
    <section className="hero hero-refresh">
      <div className="wrap hero-layout">
        <div className="hero-copy">
          <div className="eyebrow"><span className="live-dot" /> INDIA'S AUTOMOTIVE KNOWLEDGE HUB</div>
          <h1>THE ROAD<br/>IS <em>YOURS.</em></h1>
          <p>Not just specs. Not just showroom talk. Get real-world advice for buying, riding, driving and keeping your machine running on Indian roads.</p>
          <div className="hero-actions">
            <Link className="button" href="/bikes/">Find your machine <span aria-hidden="true">↗</span></Link>
            <Link className="button secondary" href="/tools/">Run the numbers</Link>
          </div>
          <div className="hero-proof"><span>BUILT FOR INDIAN ROADS</span><i /> <span>MADE FOR REAL OWNERS</span><i /> <span>NO-NONSENSE GUIDES</span></div>
        </div>
        <div className="hero-art" aria-label="Graphic illustration of a tachometer and road lines">
          <div className="art-topline"><span>TR / FIELD NOTES</span><span>01—06</span></div>
          <div className="gauge">
            <div className="gauge-ring"><div className="gauge-inner"><span className="gauge-label">REDLINE</span><strong>RIDE</strong><span className="gauge-sub">BEYOND THE ORDINARY</span></div></div>
            <span className="gauge-tick tick-one" /><span className="gauge-tick tick-two" /><span className="gauge-tick tick-three" />
            <span className="gauge-needle" />
          </div>
          <div className="art-bottom"><span>KNOW MORE. RIDE BETTER.</span><b>TR<span>.</span></b></div>
          <div className="art-index">THAT REDLINER <span>— EST. FOR THE ROAD AHEAD</span></div>
        </div>
      </div>
      <div className="hero-bottom wrap"><span>BIKES</span><b>×</b><span>CARS</span><b>×</b><span>ELECTRIC</span><b>×</b><span>OWNERSHIP</span><b>×</b><span>MAINTENANCE</span><span className="scroll-cue">SCROLL TO EXPLORE ↓</span></div>
    </section>

    <div className="ticker" aria-label="That Redliner topics"><div className="ticker-track"><span>RIDE SMARTER</span><b>✳</b><span>DRIVE FURTHER</span><b>✳</b><span>OWN IT BETTER</span><b>✳</b><span>KNOW YOUR MACHINE</span><b>✳</b><span>RIDE SMARTER</span><b>✳</b><span>DRIVE FURTHER</span><b>✳</b><span>OWN IT BETTER</span><b>✳</b><span>KNOW YOUR MACHINE</span><b>✳</b></div></div>

    <section className="section section-refresh">
      <div className="wrap">
        <div className="section-head"><div><div className="section-kicker">PICK YOUR LANE</div><h2>Whatever you drive.<br/><span className="muted-heading">We've got your back.</span></h2></div><p>From the first key turn to the tenth service visit, find the information that helps you make a better call.</p></div>
        <div className="category-grid category-grid-refresh">{categories.map((c,i)=><Link className="category-card category-card-refresh" href={c.href} key={c.href}><div className="card-top"><span className="category-number">0{i+1} / 06</span><span className="card-arrow">↗</span></div><h3>{c.title}</h3><p>{c.detail}</p><span className="card-underline" /></Link>)}</div>
      </div>
    </section>

    <section className="editorial-section">
      <div className="wrap">
        <div className="editorial-heading"><div><div className="section-kicker">THE REDLINER EDIT</div><h2>Good decisions<br/>start <em>here.</em></h2></div><p>Useful reads for the questions every owner eventually asks. Straightforward, practical and built around real-world use.</p><Link className="text-link" href="/guides/">Explore all guides ↗</Link></div>
        <div className="article-grid article-grid-refresh">{articles.map((a,i)=><article className="article-card article-card-refresh" key={a.href}><div className="article-meta"><span className="tag">{a.category}</span><span>0{i+1}</span></div><h3>{a.title}</h3><p>{a.excerpt}</p><Link className="read" href={a.href}>Read the guide <span>↗</span><small>{a.read}</small></Link></article>)}</div>
      </div>
    </section>

    <section className="tools-feature">
      <div className="wrap tools-feature-inner"><div className="tools-copy"><div className="section-kicker">LESS GUESSWORK. MORE CLARITY.</div><h2>Before you hit the road,<br/><em>do the math.</em></h2><p>Fuel bills, mileage and EMIs shouldn't be a mystery. Use simple calculators to understand what your next ride really costs.</p><Link className="button" href="/tools/">Explore free calculators ↗</Link></div><div className="tool-visual"><div className="tool-visual-head"><span>OWNERSHIP / QUICK CHECK</span><span>TR—TOOLS</span></div><div className="tool-stat"><small>YOUR NEXT DECISION</small><strong>MAKE IT<br/><em>INFORMED.</em></strong></div><div className="tool-lines"><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /></div><div className="tool-visual-foot"><span>FUEL / MILEAGE / EMI</span><b>↗</b></div></div></div>
    </section>

    <section className="promise-section"><div className="wrap promise-inner"><div><div className="section-kicker">OUR WAY OF DOING THINGS</div><h2>Enthusiast heart.<br/><em>Owner-first thinking.</em></h2></div><p>We believe automotive information should help you beyond the test ride and the delivery day. Clear explanations, useful tools and practical ownership knowledge—so you can spend less time guessing and more time enjoying the drive.</p><Link className="text-link" href="/about/">Get to know us ↗</Link></div></section>
  </>;
}
