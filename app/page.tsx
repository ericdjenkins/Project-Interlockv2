import { SiteFooter, SiteHeader } from "./components/site-chrome";

const supports = [
  ["01", "Learn", "AI and engineering learning", "Build skills through responsible AI, coding, robotics, data, and hands-on projects."],
  ["02", "Support", "Completion support", "Navigate technology, transportation, emergency needs, advising, and resources beyond tuition."],
  ["03", "Mentor", "Trusted mentorship", "Build sustained relationships with professionals, educators, and near peers."],
  ["04", "Experience", "Paid experience", "Apply skills through projects, job shadows, research, and internships."],
  ["05", "Launch", "Transfer and career launch", "Navigate transfer, credentials, career preparation, and employer connections."],
];

const audiences = [
  ["Students & families", "Learn about the proposed pathway and tell us what support would make the biggest difference.", "Join the interest list", "/get-involved#interest-form"],
  ["Educators & colleges", "Help align recruitment, advising, transfer, curriculum, and student-support systems.", "Start a partnership conversation", "/get-involved#partners"],
  ["Employers & funders", "Shape paid experiences, mentoring, career exposure, and the launch investment for the pilot.", "Partner for the 2027 pilot", "/get-involved#pilot-brief"],
];

export default function Home() {
  return <main id="top"><SiteHeader />
    <section className="hero"><img className="heroImage" src="/assets/project-interlock-hero.png" alt="Black and Latino students collaborating with technology in a learning lab" /><div className="heroShade" /><div className="network networkOne" aria-hidden="true" /><div className="network networkTwo" aria-hidden="true" /><div className="heroContent"><p className="kicker">Greater Boston <span>•</span> Engineering <span>•</span> AI pathways</p><h1>Talent is everywhere.<span>Opportunity should be too.</span></h1><p className="heroLead">Project Interlock is building a connected pathway for Black and Latino students within 20 miles of Boston—from tuition-free community college access to public engineering programs, mentors, paid experience, and high-impact careers.</p><p className="pilotLead">Help shape the 2027 pilot. Students, families, educators, employers, and funders can join the interest list now; cohort enrollment has not opened.</p><div className="heroActions"><a className="button buttonGold" href="/get-involved#interest-form">Join the interest list <span aria-hidden="true">→</span></a><a className="textLink" href="/about#roadmap">See the 2026–2027 roadmap <span aria-hidden="true">↓</span></a></div></div><div className="heroSignal" aria-label="Project Interlock model"><span className="signalLabel">One connected ecosystem</span><div className="signalItems"><span>Learn</span><i /><span>Support</span><i /><span>Mentor</span><i /><span>Experience</span><i /><span>Launch</span></div></div></section>

    <section className="statusSection" aria-labelledby="where-now-home"><div><p className="eyebrow">Where we are now</p><h2 id="where-now-home">Building toward a 2027 pilot.</h2></div><dl className="statusList"><div><dt>Status</dt><dd>Pilot design phase</dd></div><div><dt>Target launch</dt><dd>2027</dd></div><div><dt>Current focus</dt><dd>Partner recruitment, pathway design, and pilot cohort planning</dd></div></dl></section>

    <section className="statement" id="mission"><div className="sectionLabel"><span>01</span><p>Our mission</p></div><div className="statementBody"><p className="statementIntro">We are building a future where Black and Latino students don’t just adapt to new technology—</p><h2>they shape it.</h2><div className="missionGrid"><p>Project Interlock closes the distance between potential and access. The pathway combines future-ready skills, trusted guidance, completion support, transfer navigation, and direct exposure to paid experience.</p><p>We are co-designing the pilot with colleges, employers, community-based organizations, students, families, and funders. Feedback before launch will help make the pathway practical, inclusive, and responsive.</p></div></div></section>

    <section className="programSection" id="supports"><div className="programIntro"><div className="sectionLabel light"><span>02</span><p>What we’re building</p></div><div><p className="eyebrow">Five supports. One Boston pathway.</p><h2>From first spark<br />to first opportunity.</h2></div><p className="programSummary">Learn, Support, Mentor, Experience, and Launch are both the five supports and the steps of the Pathway. Full delivery begins with the 2027 pilot cohort; we are currently recruiting partners and refining the model.</p></div><div className="programList">{supports.map(([number, tag, title, description]) => <article className="programCard" key={title}><span className="programNumber">{number}</span><div className="programTitle"><span>{tag}</span><h3>{title}</h3></div><p>{description}</p><span className="programArrow" aria-hidden="true">↗</span></article>)}</div></section>

    <section className="pathwaySection" id="pathway"><div className="sectionLabel"><span>03</span><p>The Pathway</p></div><div className="pathwayHeader"><p className="eyebrow">One sequence, five connected supports</p><h2>See how the <span>Pathway works.</span></h2><a className="button buttonGold" href="/the-pathway">Explore the Pathway</a></div></section>

    <section className="audienceEntry" aria-labelledby="choose-entry"><div><p className="eyebrow">Help shape the pathway</p><h2 id="choose-entry">Choose your starting point.</h2></div><div className="audienceEntryGrid">{audiences.map(([title, copy, cta, href]) => <article key={title}><h3>{title}</h3><p>{copy}</p><a href={href}>{cta} <span aria-hidden="true">→</span></a></article>)}</div></section>
    <section className="beliefSection"><div className="beliefMark" aria-hidden="true">“</div><blockquote>The next generation of AI builders, problem-solvers, and leaders is already here.<span>We’re building the pathway with the community—not for it.</span></blockquote><div className="beliefTag"><span /><p>Our belief</p></div></section>
    <section className="closingCta"><div className="closingGlow" aria-hidden="true" /><p className="eyebrow">The 2027 pilot starts with listening now.</p><h2>Help shape<br /><span>what comes next.</span></h2><a className="button buttonGold" href="/get-involved#interest-form">Join the interest list <span aria-hidden="true">↗</span></a></section>
    <SiteFooter />
  </main>;
}
