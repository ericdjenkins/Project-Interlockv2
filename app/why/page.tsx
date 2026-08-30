import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/site-chrome";

export const metadata: Metadata = {
  title: "Why Representation Matters | Project Interlock",
  description:
    "Why Project Interlock is building a connected Greater Boston engineering and AI pathway for Black and Latino students.",
};

const stakes = [
  {
    number: "01",
    title: "Safer, fairer technology",
    copy: "AI reflects the data, assumptions, and priorities behind it. Black and Latino technologists bring essential perspectives to the teams deciding what gets built, how it is tested, and whose risks are taken seriously.",
  },
  {
    number: "02",
    title: "Stronger innovation",
    copy: "Different perspectives reveal different problems. More Black and Latino scientists, engineers, and founders means more ideas rooted in the needs of communities and markets that technology has too often overlooked.",
  },
  {
    number: "03",
    title: "Economic mobility",
    copy: "Engineering and AI pathways connect students to high-skill careers, entrepreneurship, and professional networks that can create lasting opportunity for families and communities.",
  },
];

const sources = [
  [
    "National Science Board, 2026",
    "STEM Talent: Education, Training, and Workforce",
    "https://ncses.nsf.gov/pubs/nsbsep20261/stem-talent-education-training-and-workforce-2",
  ],
  [
    "National Science Board, 2024",
    "Representation of Demographic Groups in STEM",
    "https://ncses.nsf.gov/pubs/nsb20245/representation-of-demographic-groups-in-stem",
  ],
  [
    "Massachusetts DHE",
    "MassEducate: Free Community College",
    "https://www.mass.edu/osfa/programs/masseducate.asp",
  ],
  [
    "Massachusetts DHE",
    "MassTransfer",
    "https://www.mass.edu/masstransfer/",
  ],
];

export default function WhyPage() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="whyHero">
        <div className="whyHeroGrid" aria-hidden="true" />
        <p className="kicker">Why representation matters</p>
        <h1>
          The people shaping technology
          <span> shape who benefits from it.</span>
        </h1>
        <p>
          Expanding Black and Latino representation in engineering and AI is
          essential to building fairer technology, stronger innovation, and a
          more inclusive economy.
        </p>
        <a className="whyScroll" href="#evidence">
          Explore the evidence <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="whySnapshot" id="evidence">
        <div>
          <p className="eyebrow blueText">The opportunity gap</p>
          <h2>
            The gap appears across the path from classroom access to STEM
            careers.
          </h2>
        </div>
        <div className="snapshotStats">
          <article>
            <strong>47%</strong>
            <p>
              of Black public high school students attended schools offering a
              full range of mathematics, science, and computer science courses
              in 2020–21.
            </p>
          </article>
          <article>
            <strong>51%</strong>
            <p>
              of Hispanic public high school students attended schools
              offering that full range of STEM courses in 2020–21.
            </p>
          </article>
          <article>
            <strong>3 pts</strong>
            <p>
              Both groups’ 2021 STEM-workforce shares trailed their total
              workforce shares: Black workers were 8% versus 11%; Hispanic
              workers were 15% versus 18%.
            </p>
          </article>
        </div>
        <p className="sourceNote">
          Figures are national context—not Project Interlock outcomes. Sources:
          {" "}
          <a
            href="https://ncses.nsf.gov/pubs/nsbsep20261/stem-talent-education-training-and-workforce-2"
            target="_blank"
            rel="noreferrer"
          >
            National Science Board education indicators (2026)
          </a>
          {" "}and{" "}
          <a
            href="https://ncses.nsf.gov/pubs/nsb20245/representation-of-demographic-groups-in-stem"
            target="_blank"
            rel="noreferrer"
          >
            workforce indicators (2024) ↗
          </a>
        </p>
      </section>

      <section className="whyPeople" aria-labelledby="why-people-title">
        <div className="whyPeopleIntro">
          <p className="eyebrow blueText">A lifetime of possibility</p>
          <h2 id="why-people-title">
            From first exposure to industry leadership.
          </h2>
          <p>
            Representation grows when Black and Latino learners can see a
            place for themselves at every stage—and receive the education,
            relationships, and opportunities to keep moving forward.
          </p>
        </div>

        <div className="peopleJourney">
          <article>
            <div className="peopleImage">
              <img
                src="/assets/why-young-students-black-latino.png"
                alt="Black and Latino high school students building a robotics project together in a STEM learning lab"
              />
              <span aria-hidden="true">01</span>
            </div>
            <div className="peopleCopy">
              <p className="eyebrow">Discover</p>
              <h3>Students see what is possible.</h3>
              <p>
                Early, culturally responsive experiences turn curiosity into
                confidence and help students imagine themselves as creators of
                technology.
              </p>
            </div>
          </article>

          <article>
            <div className="peopleImage">
              <img
                src="/assets/why-college-students-black-latino.png"
                alt="Black and Latino college-age students collaborating on AI, coding, and engineering prototypes"
              />
              <span aria-hidden="true">02</span>
            </div>
            <div className="peopleCopy">
              <p className="eyebrow">Develop</p>
              <h3>Learners deepen skill and direction.</h3>
              <p>
                Project-based learning, completion support, mentors, and paid
                experience can turn interest into technical fluency and a
                clearer route to opportunity.
              </p>
            </div>
          </article>

          <article>
            <div className="peopleImage">
              <img
                src="/assets/why-professionals-black-latino.png"
                alt="Black and Latino STEM and AI professionals collaborating around an engineering prototype"
              />
              <span aria-hidden="true">03</span>
            </div>
            <div className="peopleCopy">
              <p className="eyebrow">Lead</p>
              <h3>Professionals shape what gets built next.</h3>
              <p>
                Black and Latino technologists, founders, and leaders expand
                innovation and create visible pathways for the generation
                coming behind them.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="whyStakes">
        <p className="eyebrow goldText">What is at stake</p>
        <div className="stakeGrid">
          {stakes.map((stake) => (
            <article key={stake.title}>
              <span>{stake.number}</span>
              <h2>{stake.title}</h2>
              <p>{stake.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="whyEvidence">
        <div className="evidenceIntro">
          <p className="eyebrow blueText">What the evidence shows</p>
          <h2>Talent is present. Access and continuity are uneven.</h2>
          <p>
            The latest federal indicators show gaps at multiple handoffs. A
            connected pathway can help students move from exposure to learning,
            paid experience, transfer, and career launch.
          </p>
        </div>
        <div className="evidenceList">
          <article>
            <span>01 / Course access</span>
            <h3>Advanced opportunity begins with what schools can offer.</h3>
            <p>
              National Science Board data show that 47% of Black students and
              51% of Hispanic students attended public high schools offering a
              full range of mathematics, science, and computer science courses
              in 2020–21.
            </p>
            <a
              href="https://ncses.nsf.gov/pubs/nsbsep20261/stem-talent-education-training-and-workforce-2"
              target="_blank"
              rel="noreferrer"
            >
              View the education indicators ↗
            </a>
          </article>
          <article>
            <span>02 / Workforce representation</span>
            <h3>Black and Hispanic workers remain underrepresented.</h3>
            <p>
              In 2021, Black or African American workers were 8% of STEM workers
              but 11% of the total workforce. Hispanic workers were 15% of STEM
              workers but 18% of the total workforce.
            </p>
            <a
              href="https://ncses.nsf.gov/pubs/nsb20245/representation-of-demographic-groups-in-stem"
              target="_blank"
              rel="noreferrer"
            >
              View the workforce indicators ↗
            </a>
          </article>
          <article>
            <span>03 / Degree-to-career continuity</span>
            <h3>A STEM degree does not guarantee a STEM career.</h3>
            <p>
              Among workers whose highest degree was in science and engineering,
              25.3% of Black or African American workers and 31.5% of Hispanic
              workers held science and engineering occupations in 2021.
            </p>
            <a
              href="https://ncses.nsf.gov/pubs/nsb20245/representation-of-demographic-groups-in-stem"
              target="_blank"
              rel="noreferrer"
            >
              Explore the pathway data ↗
            </a>
          </article>
        </div>
      </section>

      <section className="interlockAnswer">
        <p className="eyebrow">Why Project Interlock</p>
        <h2>
          Representation requires a connected pathway—not one isolated
          program.
        </h2>
        <p>
          Project Interlock is designing five coordinated supports for Black
          and Latino students across Greater Boston: AI and engineering
          education, completion support, mentorship, paid experience, and
          transfer and career launch. Full delivery is projected to begin with
          the 2027 pilot, subject to funding, partners, safeguards, and
          readiness.
        </p>
        <div
          className="answerPath"
          aria-label="Project Interlock connected pathway"
        >
          <span>Learn</span>
          <i />
          <span>Support</span>
          <i />
          <span>Mentor</span>
          <i />
          <span>Experience</span>
          <i />
          <span>Launch</span>
        </div>
        <a className="button buttonGold" href="/programs">
          Explore the five supports <span aria-hidden="true">→</span>
        </a>
      </section>

      <section className="whySources">
        <div>
          <p className="eyebrow blueText">Sources and further reading</p>
          <h2>Evidence behind the mission.</h2>
        </div>
        <ol>
          {sources.map(([publisher, title, href]) => (
            <li key={title}>
              <span>{publisher}</span>
              <a href={href} target="_blank" rel="noreferrer">
                {title} <b aria-hidden="true">↗</b>
              </a>
            </li>
          ))}
        </ol>
      </section>

      <section className="closingCta">
        <div className="closingGlow" aria-hidden="true" />
        <p className="eyebrow">The 2027 pilot starts with listening now.</p>
        <h2>
          Help build a pathway where Black and Latino students can
          <span> see, enter, and lead the future.</span>
        </h2>
        <a className="button buttonGold" href="/get-involved#interest-form">
          Join the interest list <span aria-hidden="true">↗</span>
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}
