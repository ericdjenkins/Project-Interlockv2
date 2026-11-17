import { ClosingBand, PageHero, SiteFooter, SiteHeader } from "../components/SiteChrome";

const stages = [
  ["Discover", "See yourself in the future", "Welcoming introductions to AI and STEM make technology relevant, creative, and possible.", "Explore workshops, talks, demonstrations, and community events."],
  ["Build", "Turn curiosity into capability", "Students develop practical skills through projects, coaching, and collaborative learning.", "Create a portfolio, strengthen technical fluency, and practice responsible AI."],
  ["Connect", "Grow a trusted network", "Mentors, peers, colleges, and employers make ambition visible and opportunity easier to navigate.", "Gain guidance, feedback, professional relationships, and a sense of belonging."],
  ["Launch", "Move into opportunity", "Preparation becomes progress through scholarships, internships, credentials, and career connections.", "Apply with confidence, gain experience, and step into the AI-powered workforce."],
];

export default function PathwaysPage() {
  return <main>
    <SiteHeader />
    <PageHero eyebrow="Student pathways" title="A journey built to" accent="move with you." copy="Students can enter at different stages and move at their own pace. Every step builds the knowledge, relationships, and confidence needed for the next." />
    <section className="journey">
      {stages.map(([stage, title, copy, outcome], i) => <article key={stage}>
        <div className="journeyNumber">{String(i + 1).padStart(2, "0")}</div>
        <div><p className="eyebrow blueText">{stage}</p><h2>{title}</h2><p>{copy}</p></div>
        <aside><span>What this unlocks</span><p>{outcome}</p></aside>
      </article>)}
    </section>
    <section className="innerSection routeMap">
      <p className="eyebrow goldText">The interlock advantage</p>
      <h2>Learning opens a connection. A connection opens an opportunity.</h2>
      <div className="routeLine"><span>Learn</span><i /><span>Build</span><i /><span>Connect</span><i /><span>Launch</span></div>
    </section>
    <ClosingBand title="Start where you are. Build toward what’s next." />
    <section className="innerSection splitStory" id="reciprocity-pathway" aria-labelledby="reciprocity-pathway-title"><div><p className="eyebrow blueText">Reciprocity and Community</p><h2 id="reciprocity-pathway-title">Reach Forward. Reach Back.</h2></div><div className="storyCopy"><p>For the planned 2027 pilot, we are designing opportunities for peer support and knowledge sharing. As participants progress, we plan to invite them back as mentors, speakers, and connections to education and career opportunities.</p><p>Contributions can grow with each person’s experience and capacity, from encouraging a peer to mentoring a student or making an introduction. Receiving support does not depend on giving back.</p><a className="textLink darkLink" href="/about#reach-back">Explore our guiding principle →</a></div></section>
    <SiteFooter />
  </main>;
}
