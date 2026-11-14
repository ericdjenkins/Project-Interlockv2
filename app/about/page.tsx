import { ClosingBand, PageHero, SiteFooter, SiteHeader } from "../components/SiteChrome";

const values = [
  ["Access", "Opportunity should not depend on ZIP code, wealth, or who a student already knows."],
  ["Belonging", "Students thrive when they can see themselves as builders, researchers, founders, and leaders."],
  ["Connection", "Education, mentorship, funding, and employment work best as one connected system."],
  ["Agency", "Young people should be equipped not only to use AI, but to question, shape, and lead it."],
];

export default function AboutPage() {
  return <main>
    <SiteHeader />
    <PageHero eyebrow="About Project Interlock" title="Potential is universal." accent="Access is not." copy="Project Interlock is building a connected AI and STEM opportunity network for African American students—linking learning, guidance, financial support, work experience, and careers." />
    <section className="innerSection splitStory">
      <div>
        <p className="eyebrow blueText">Why we exist</p>
        <h2>Closing the distance between talent and opportunity.</h2>
      </div>
      <div className="storyCopy">
        <p>Artificial intelligence is changing how people learn, work, create, and lead. Yet the communities with the most to gain are too often the least connected to early exposure, trusted guidance, and career-building networks.</p>
        <p>Project Interlock responds by bringing the essential pieces together. Students gain practical skills, mentors who understand their journey, pathways to pay for education, real workplace experience, and direct connections to employers.</p>
        <p>Our north star is simple: African American students should participate fully in the AI economy—not only as users, but as designers, decision-makers, entrepreneurs, and owners.</p>
      </div>
    </section>
    <section className="innerSection navyPanel">
      <p className="eyebrow goldText">What guides us</p>
      <div className="valueGrid">
        {values.map(([title, copy], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}
      </div>
    </section>
    <section className="innerSection visionGrid">
      <div><p className="eyebrow blueText">Our vision</p><h2>A generation that shapes what comes next.</h2></div>
      <blockquote>“The future of technology should be built by the full range of talent it will serve.”</blockquote>
    </section>
    <ClosingBand />
    <SiteFooter />
  </main>;
}
