import { ClosingBand, SiteFooter, SiteHeader } from "../components/SiteChrome";

const stakes = [
  {
    number: "01",
    title: "Safer, fairer technology",
    copy: "AI reflects the data, assumptions, and priorities behind it. Black technologists bring essential lived experience to the teams deciding what gets built, how it is tested, and whose risks are taken seriously.",
  },
  {
    number: "02",
    title: "Stronger innovation",
    copy: "Different perspectives reveal different problems. More Black scientists, engineers, and founders means more ideas rooted in the needs of communities and markets that technology has too often overlooked.",
  },
  {
    number: "03",
    title: "Economic mobility",
    copy: "STEM and AI pathways connect students to growing, high-skill careers, entrepreneurship, and the networks that help income become lasting opportunity for families and communities.",
  },
];

const sources = [
  ["Pew Research Center", "6 facts about America’s STEM workforce and those training for it", "https://www.pewresearch.org/short-reads/2021/04/14/6-facts-about-americas-stem-workforce-and-those-training-for-it/"],
  ["Pew Research Center", "STEM Jobs See Uneven Progress in Increasing Gender, Racial and Ethnic Diversity", "https://www.pewresearch.org/science/2021/04/01/stem-jobs-see-uneven-progress-in-increasing-gender-racial-and-ethnic-diversity/"],
  ["Gender Shades", "Intersectional Accuracy Disparities in Commercial Gender Classification", "https://proceedings.mlr.press/v81/buolamwini18a.html"],
  ["Science", "Dissecting racial bias in an algorithm used to manage the health of populations", "https://www.science.org/doi/10.1126/science.aax2342"],
  ["NIST", "Study Evaluates Effects of Race, Age, Sex on Face Recognition Software", "https://www.nist.gov/news-events/news/2019/12/nist-study-evaluates-effects-race-age-sex-face-recognition-software"],
];

export default function WhyPage() {
  return (
    <main>
      <SiteHeader />

      <section className="whyHero">
        <div className="whyHeroGrid" aria-hidden="true" />
        <p className="kicker">Why representation matters</p>
        <h1>
          The people shaping technology
          <span> shape who benefits from it.</span>
        </h1>
        <p>
          Increasing Black representation in STEM and AI is not simply about
          inclusion. It is essential to building safer technology, expanding
          innovation, and making the economy of the future more equitable.
        </p>
        <a className="whyScroll" href="#evidence">Explore the evidence <span aria-hidden="true">↓</span></a>
      </section>

      <section className="whySnapshot" id="evidence">
        <div>
          <p className="eyebrow blueText">The representation gap</p>
          <h2>Black talent remains missing from too many rooms where the future is built.</h2>
        </div>
        <div className="snapshotStats">
          <article>
            <strong>9%</strong>
            <p>of the U.S. STEM workforce was Black, compared with 11% of all employed adults.</p>
          </article>
          <article>
            <strong>5%</strong>
            <p>of engineering and architecture workers were Black.</p>
          </article>
          <article>
            <strong>7%</strong>
            <p>of workers in computer occupations were Black.</p>
          </article>
        </div>
        <p className="sourceNote">
          Workforce figures: <a href="https://www.pewresearch.org/science/2021/04/01/stem-jobs-see-uneven-progress-in-increasing-gender-racial-and-ethnic-diversity/" target="_blank" rel="noreferrer">Pew Research Center analysis of U.S. government data (2021) ↗</a>
        </p>
      </section>

      <section className="whyPeople" aria-labelledby="why-people-title">
        <div className="whyPeopleIntro">
          <p className="eyebrow blueText">A lifetime of possibility</p>
          <h2 id="why-people-title">
            From first exposure to industry leadership.
          </h2>
          <p>
            Representation grows when Black learners can see a place for
            themselves at every stage—and receive the education, relationships,
            and opportunities to keep moving forward.
          </p>
        </div>

        <div className="peopleJourney">
          <article>
            <div className="peopleImage">
              <img
                src="/assets/why-young-students.png"
                alt="Young Black students building a robotics project together in a STEM learning lab"
              />
              <span aria-hidden="true">01</span>
            </div>
            <div className="peopleCopy">
              <p className="eyebrow">Discover</p>
              <h3>Young students see what is possible.</h3>
              <p>
                Early, culturally affirming experiences turn curiosity into
                confidence and help students imagine themselves as creators of
                technology.
              </p>
            </div>
          </article>

          <article>
            <div className="peopleImage">
              <img
                src="/assets/why-older-students.png"
                alt="Black college-age and adult students collaborating on AI, coding, and robotics projects"
              />
              <span aria-hidden="true">02</span>
            </div>
            <div className="peopleCopy">
              <p className="eyebrow">Develop</p>
              <h3>Older students deepen skill and direction.</h3>
              <p>
                Advanced learning, scholarships, mentors, and hands-on
                experience transform interest into technical fluency and a
                clear route to opportunity.
              </p>
            </div>
          </article>

          <article>
            <div className="peopleImage">
              <img
                src="/assets/why-working-professionals.png"
                alt="Black STEM and AI professionals collaborating around a robotics prototype"
              />
              <span aria-hidden="true">03</span>
            </div>
            <div className="peopleCopy">
              <p className="eyebrow">Lead</p>
              <h3>Professionals shape what gets built next.</h3>
              <p>
                Black technologists, founders, and leaders expand innovation,
                reduce blind spots, and create visible pathways for the
                generation coming behind them.
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
          <p className="eyebrow blueText">When representation is absent</p>
          <h2>Blind spots become real-world harm.</h2>
          <p>These documented cases show why communities affected by technology must also help design, test, govern, and lead it.</p>
        </div>
        <div className="evidenceList">
          <article>
            <span>01 / Facial analysis</span>
            <h3>A 34-point accuracy gap</h3>
            <p>The landmark Gender Shades study found error rates as high as 34.7% for darker-skinned women in commercial gender-classification systems, versus no more than 0.8% for lighter-skinned men.</p>
            <a href="https://proceedings.mlr.press/v81/buolamwini18a.html" target="_blank" rel="noreferrer">Read the study ↗</a>
          </article>
          <article>
            <span>02 / Health care</span>
            <h3>Need hidden by a flawed proxy</h3>
            <p>A widely used care-management algorithm used health spending as a proxy for health need. At the same risk score, Black patients were considerably sicker; correcting the bias would have increased Black patients receiving extra help from 17.7% to 46.5%.</p>
            <a href="https://www.science.org/doi/10.1126/science.aax2342" target="_blank" rel="noreferrer">Read the research ↗</a>
          </article>
          <article>
            <span>03 / Face recognition</span>
            <h3>Unequal false-positive rates</h3>
            <p>NIST found that many face-recognition algorithms produced higher false-positive rates for African American faces than for Caucasian faces—often by factors of 10 to 100 in one-to-one matching tests.</p>
            <a href="https://www.nist.gov/news-events/news/2019/12/nist-study-evaluates-effects-race-age-sex-face-recognition-software" target="_blank" rel="noreferrer">View the NIST findings ↗</a>
          </article>
        </div>
      </section>

      <section className="interlockAnswer">
        <p className="eyebrow">Why Project Interlock</p>
        <h2>Representation does not happen by accident. It requires a connected pathway.</h2>
        <p>Project Interlock links five essentials that are too often fragmented: AI and STEM education, scholarship access, trusted mentorship, paid experience, and career connections. Together, they help Black students move from first exposure to leadership, ownership, and impact.</p>
        <div className="answerPath" aria-label="Project Interlock connected pathway">
          <span>Learn</span><i /><span>Fund</span><i /><span>Mentor</span><i /><span>Experience</span><i /><span>Launch</span>
        </div>
        <a className="button buttonGold" href="/programs">Explore the programs <span aria-hidden="true">→</span></a>
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
              <a href={href} target="_blank" rel="noreferrer">{title} <b aria-hidden="true">↗</b></a>
            </li>
          ))}
        </ol>
      </section>

      <ClosingBand title="Help put more Black talent in the rooms where our future is being built." />
      <SiteFooter />
    </main>
  );
}
