const navItems = [
  ["Why", "/why"],
  ["About", "/about"],
  ["Programs", "/programs"],
  ["Pathways", "/pathways"],
  ["Get involved", "/get-involved"],
];

export function SiteHeader() {
  return (
    <header className="siteHeader">
      <a className="brand" href="/" aria-label="Project Interlock home">
        <img src="/assets/project-interlock-logo.png" alt="Project Interlock — AI Education and Pathways" />
      </a>
      <nav className="desktopNav" aria-label="Primary navigation">
        {navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
      </nav>
      <a className="button buttonSmall buttonGold desktopCta" href="/get-involved">
        Connect with us <span aria-hidden="true">↗</span>
      </a>
      <details className="mobileMenu">
        <summary aria-label="Open navigation"><span /><span /><span /></summary>
        <nav aria-label="Mobile navigation">
          {navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        </nav>
      </details>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="footerBrand">
        <img src="/assets/project-interlock-logo.png" alt="Project Interlock" />
        <p>Connecting Black talent, technology, and opportunity for an AI-powered future.</p>
      </div>
      <div className="footerLinks">
        <div>
          <p>Explore</p>
          <a href="/why">Why it matters</a>
          <a href="/about">About</a>
          <a href="/programs">Programs</a>
          <a href="/pathways">Pathways</a>
        </div>
        <div>
          <p>Connect</p>
          <a href="/get-involved#students">Students</a>
          <a href="/get-involved#mentors">Mentors</a>
          <a href="/get-involved#partners">Partners</a>
        </div>
      </div>
      <div className="footerBottom">
        <p>© 2026 Project Interlock. AI Education &amp; Pathways.</p>
        <a href="/">Home ↑</a>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, accent, copy }: { eyebrow: string; title: string; accent: string; copy: string }) {
  return (
    <section className="pageHero">
      <div className="pageHeroGrid" aria-hidden="true" />
      <p className="kicker">{eyebrow}</p>
      <h1>{title} <span>{accent}</span></h1>
      <p>{copy}</p>
    </section>
  );
}

export function ClosingBand({ title = "Help build the bridge to an AI-powered future." }: { title?: string }) {
  return (
    <section className="innerClosing">
      <p className="eyebrow">Talent is ready. Let’s connect the opportunity.</p>
      <h2>{title}</h2>
      <a className="button buttonGold" href="/get-involved">Get involved <span aria-hidden="true">→</span></a>
    </section>
  );
}
