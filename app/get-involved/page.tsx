import { PageHero, SiteFooter, SiteHeader } from "../components/SiteChrome";

const ways = [
  ["students", "For students & families", "Find your pathway", "Get updates about workshops, mentoring, scholarships, internships, and career opportunities.", "Join the interest list", "Student Interest"],
  ["mentors", "For professionals", "Open a door", "Share your experience as a mentor, speaker, project coach, or career connector.", "Become a mentor", "Mentor Interest"],
  ["partners", "For organizations", "Build the bridge", "Fund learning, sponsor scholarships, host interns, provide mentors, or create employment pathways.", "Explore partnership", "Partnership Interest"],
  ["supporters", "For supporters", "Fuel the mission", "Help expand access to future-ready education and the networks that turn preparation into progress.", "Support Project Interlock", "Support Interest"],
];

export default function GetInvolvedPage() {
  return <main>
    <SiteHeader />
    <PageHero eyebrow="Get involved" title="Your connection can" accent="change a trajectory." copy="Students, families, mentors, educators, employers, funders, and community leaders all have a place in the Project Interlock ecosystem." />
    <section className="involveDetailGrid">
      {ways.map(([id, eyebrow, title, copy, cta, subject], i) => <article id={id} key={id}>
        <span className="cardIndex">0{i + 1}</span>
        <p className="eyebrow blueText">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{copy}</p>
        <a className="button buttonGold" href={`mailto:info@projectinterlock.org?subject=${encodeURIComponent(subject + " - Project Interlock")}`}>{cta} <span>→</span></a>
      </article>)}
    </section>
    <section className="contactBand">
      <div><p className="eyebrow goldText">Not sure where you fit?</p><h2>Start a conversation.</h2></div>
      <div><p>Tell us a little about yourself and how you would like to connect. We’ll help identify the right next step.</p><a href="mailto:info@projectinterlock.org">info@projectinterlock.org ↗</a></div>
    </section>
    <SiteFooter />
  </main>;
}
