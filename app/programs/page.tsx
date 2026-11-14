import { ClosingBand, PageHero, SiteFooter, SiteHeader } from "../components/SiteChrome";

const programs = [
  ["01", "AI & STEM Education", "Learn", "Project-based learning in artificial intelligence, coding, robotics, data, and emerging technologies.", ["AI literacy and responsible use", "Coding and computational thinking", "Hands-on challenges and showcases"]],
  ["02", "Scholarship Access", "Fund", "Practical support that helps students identify, prepare for, and pursue education funding.", ["Curated scholarship opportunities", "Application and essay coaching", "College and credential planning"]],
  ["03", "Mentorship", "Grow", "Sustained relationships with Black professionals, educators, and industry leaders.", ["One-to-one and group mentoring", "Career conversations and role models", "Goal-setting and accountability"]],
  ["04", "Internships", "Experience", "Structured work experiences that translate classroom capability into professional confidence.", ["Employer-hosted experiences", "Workplace readiness coaching", "Portfolio and network development"]],
  ["05", "Career Launch", "Lead", "A bridge from preparation to high-growth roles in technology and technology-enabled industries.", ["Resume and interview preparation", "Employer introductions", "Early-career community and support"]],
];

export default function ProgramsPage() {
  return <main>
    <SiteHeader />
    <PageHero eyebrow="Our programs" title="Five supports." accent="One ecosystem." copy="Students should not have to navigate disconnected resources alone. Our programs interlock to support the full journey from first exposure to career launch." />
    <section className="programDetailList">
      {programs.map(([number, title, tag, copy, bullets]) => <article className="programDetail" key={title as string}>
        <div className="programDetailIndex"><span>{number as string}</span><p>{tag as string}</p></div>
        <div><h2>{title as string}</h2><p>{copy as string}</p></div>
        <ul>{(bullets as string[]).map(b => <li key={b}>{b}</li>)}</ul>
      </article>)}
    </section>
    <section className="innerSection programPromise">
      <p className="eyebrow">Designed to work together</p>
      <h2>No dead ends. Every experience points toward a next step.</h2>
      <a className="textLink darkLink" href="/pathways">See the student pathway <span>→</span></a>
    </section>
    <ClosingBand title="Bring connected opportunity to more students." />
    <SiteFooter />
  </main>;
}
