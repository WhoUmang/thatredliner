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
        <div className="hero-art hero-machine" aria-label="Three-dimensional styled illustration of a sport motorcycle">
          <div className="art-topline"><span>TR / BUILT FOR THE ROAD</span><span>01—06</span></div>
          <div className="machine-stage">
            <div className="stage-orbit orbit-a" /><div className="stage-orbit orbit-b" />
            <div className="stage-floor" />
            <div className="machine-glow" />
            <div className="bike-3d">
              <svg viewBox="0 0 720 390" role="img" aria-label="Sport motorcycle illustration" className="bike-svg">
                <defs><linearGradient id="fairing" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#ff7168"/><stop offset=".42" stopColor="#e6322d"/><stop offset="1" stopColor="#681b1c"/></linearGradient><linearGradient id="metal" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#aeb8bf"/><stop offset=".5" stopColor="#38434b"/><stop offset="1" stopColor="#11161a"/></linearGradient></defs>
                <ellipse cx="350" cy="333" rx="275" ry="23" fill="#000" opacity=".55"/>
                <g fill="none" stroke="#11161a" strokeWidth="18"><circle cx="190" cy="270" r="83"/><circle cx="548" cy="270" r="83"/></g>
                <g fill="none" stroke="#77828a" strokeWidth="3" opacity=".75"><circle cx="190" cy="270" r="69"/><circle cx="548" cy="270" r="69"/><circle cx="190" cy="270" r="15"/><circle cx="548" cy="270" r="15"/><path d="M190 201V339M121 270H259M141 221l98 98m0-98-98 98M548 201V339M479 270h138m-118-49 98 98m0-98-98 98"/></g>
                <path d="M190 270 300 180l106 91 142-1M300 180l-34 90m34-90 91-39 69 18 36 80" fill="none" stroke="url(#metal)" strokeWidth="13" strokeLinejoin="round"/>
                <path d="m275 176 38-54 107-14 76 33-33 32-82 8-50 42z" fill="url(#fairing)" stroke="#ff8a7e" strokeWidth="3"/>
                <path d="m382 140 57-31 66 27-30 24-82 7z" fill="#171d22" stroke="#64717a" strokeWidth="3"/>
                <path d="m450 137 46-9 38 19-33 12-43-7z" fill="#dce5e9" opacity=".85"/>
                <path d="m274 176-70 32-17 44 42 16 74-52z" fill="url(#fairing)" stroke="#a52b2b" strokeWidth="3"/>
                <path d="m208 211-48 21-16 37 49-7 43-37z" fill="#151b20" stroke="#737d84" strokeWidth="3"/>
                <path d="m313 122-31-35 71-4 42 18-7 12z" fill="#171c21" stroke="#69747c" strokeWidth="4"/>
                <path d="m282 88-29-13-24 4 15 13 38 8m126 1 39-35 16 4-26 43" fill="none" stroke="#9aa5ac" strokeWidth="7" strokeLinecap="round"/>
                <path d="m356 178 71 0 31 40-62 15-45-27z" fill="#252d33" stroke="#69747c" strokeWidth="4"/>
                <path d="m420 232 68 0 42 38-84 0z" fill="#11171b" stroke="#515d65" strokeWidth="5"/>
                <path d="m482 156 63 15 25 42-36 13-39-36z" fill="#c92d2a" stroke="#ff655e" strokeWidth="3"/>
                <path d="m533 175 45 22 14 25-35-4-28-22z" fill="#e8edf0" opacity=".85"/>
                <path d="m280 213-52 57m166-2 68-65" stroke="#9ba7ae" strokeWidth="8" strokeLinecap="round"/>
                <path d="m260 269 54 0m161 0 73 0" stroke="#b5bec4" strokeWidth="7" strokeLinecap="round"/>
                <path d="m327 179 25-28 48 0 22 26-47 19z" fill="#101519" stroke="#68747c" strokeWidth="4"/>
                <path d="m342 146 43-4" stroke="#f1f4f5" strokeWidth="5" strokeLinecap="round"/>
                <path d="m248 193 35-13 22 7-34 24z" fill="#f4f5f5" opacity=".75"/>
                <path d="m480 162 25 5" stroke="#fff" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="machine-caption"><span>01 / THE MACHINE</span><b>FEEL THE ROAD.</b></div>
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
