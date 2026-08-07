import {
  caseStudies,
  experience,
  impact,
  leadership,
  lookingFor,
  profile,
  recruiterFacts,
  skills,
  strengths,
} from './content'
import './index.css'

const featured = caseStudies.filter((c) => c.featured)
const gapSystems = caseStudies.filter((c) => c.systemsHighlight)
const moreWork = caseStudies.filter((c) => !c.featured && !c.systemsHighlight)

export default function App() {
  return (
    <div className="site">
      <div className="atmosphere" aria-hidden="true" />

      <div className="availability">
        <span className="availability-dot" aria-hidden="true" />
        {profile.availability}
      </div>

      <header className="nav">
        <a className="nav-brand" href="#top">
          {profile.name}
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#leadership">Leadership</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#systems">Systems</a>
          <a href="#experience">Experience</a>
          <a href="#hire">Why hire</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href={profile.emResumePath} download>
          EM Resume
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <p className="hero-kicker">{profile.role}</p>
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-focus">{profile.focus}</p>
          <p className="hero-headline">{profile.headline}</p>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#leadership">
              View EM leadership
            </a>
            <a className="btn btn-ghost" href="#portfolio">
              Portfolio case studies
            </a>
            <a className="btn btn-ghost" href={profile.emResumePath} download>
              EM resume
            </a>
            <a className="btn btn-ghost" href={profile.resumePath} download>
              Staff resume
            </a>
            <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
              Email
            </a>
          </div>
        </section>

        <section className="facts" aria-label="Recruiter quick facts">
          {recruiterFacts.map((fact) => (
            <div key={fact.label} className="fact">
              <p className="fact-label">{fact.label}</p>
              <p className="fact-value">{fact.value}</p>
            </div>
          ))}
        </section>

        <section className="impact" aria-label="Selected impact">
          {impact.map((item) => (
            <article key={item.label} className="impact-item">
              <p className="impact-value">{item.value}</p>
              <p className="impact-label">{item.label}</p>
              <p className="impact-detail">{item.detail}</p>
            </article>
          ))}
        </section>

        <section id="leadership" className="section">
          <div className="section-head">
            <p className="section-eyebrow">Engineering management</p>
            <h2>Leadership experience</h2>
            <p>
              Open to Engineering Manager roles owning people + delivery on
              platform, backend, or applied AI products — with a strong technical
              bar.
            </p>
          </div>
          <div className="strength-grid leadership-grid">
            {leadership.map((item) => (
              <article key={item.title} className="strength gap-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="portfolio" className="section">
          <div className="section-head">
            <p className="section-eyebrow">Portfolio</p>
            <h2>Featured case studies</h2>
            <p>
              Recruiter-first deep dives: problem, approach, ownership, and
              measurable outcomes from production systems — not demos.
            </p>
          </div>

          <div className="case-list">
            {featured.map((study, index) => (
              <article key={study.id} id={study.id} className="case">
                <div className="case-top">
                  <span className="case-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="case-company">{study.company}</p>
                    <h3>{study.title}</h3>
                    <p className="case-role">{study.role}</p>
                  </div>
                </div>

                <div className="case-grid">
                  <div>
                    <h4>Problem</h4>
                    <p>{study.problem}</p>
                  </div>
                  <div>
                    <h4>Approach</h4>
                    <p>{study.approach}</p>
                  </div>
                  <div>
                    <h4>Ownership</h4>
                    <p>{study.ownership}</p>
                  </div>
                  <div>
                    <h4>Outcomes</h4>
                    <ul>
                      {study.outcomes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="arch" aria-label="Architecture flow">
                  {study.architecture.map((step, i) => (
                    <span key={step} className="arch-step">
                      {i > 0 && <span className="arch-arrow" aria-hidden="true">→</span>}
                      <span className="arch-node">{step}</span>
                    </span>
                  ))}
                </div>

                <p className="case-tags">{study.tags.join(' · ')}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="systems" className="section section-alt">
          <div className="section-head">
            <p className="section-eyebrow">Systems</p>
            <h2>Gap platform systems</h2>
            <p>
              Highlighted retail platform work: Loyalty, Customer Profile, and
              Pricing &amp; Promotions — high-throughput systems used across
              Gap brands.
            </p>
          </div>

          <div className="gap-banner">
            <p className="gap-banner-label">Gap Inc. · Lead &amp; Senior Engineer</p>
            <p className="gap-banner-text">
              Loyalty event streaming · Profile microservices migration · Price
              &amp; Event Management + localized promotions (LOKI)
            </p>
          </div>

          <div className="more-grid gap-grid">
            {gapSystems.map((study) => (
              <article key={study.id} className="more-card gap-card">
                <p className="case-company">{study.company}</p>
                <h3>{study.title}</h3>
                <p className="case-role">{study.role}</p>
                <p>{study.problem}</p>
                <ul>
                  {study.outcomes.slice(0, 4).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="case-tags">{study.tags.join(' · ')}</p>
              </article>
            ))}
          </div>

          {moreWork.length > 0 && (
            <>
              <div className="section-head systems-subhead">
                <p className="section-eyebrow">Also shipped</p>
                <h2>Additional production systems</h2>
              </div>
              <div className="more-grid">
                {moreWork.map((study) => (
                  <article key={study.id} className="more-card">
                    <p className="case-company">{study.company}</p>
                    <h3>{study.title}</h3>
                    <p>{study.problem}</p>
                    <ul>
                      {study.outcomes.slice(0, 3).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <p className="case-tags">
                      {study.tags.slice(0, 5).join(' · ')}
                    </p>
                  </article>
                ))}
              </div>
            </>
          )}
        </section>

        <section className="section">
          <div className="section-head">
            <p className="section-eyebrow">Strengths</p>
            <h2>What I bring to a team</h2>
          </div>
          <div className="strength-grid">
            {strengths.map((item) => (
              <article key={item.title} className="strength">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section section-alt">
          <div className="section-head">
            <p className="section-eyebrow">Experience</p>
            <h2>Career timeline</h2>
            <p>14+ years across enterprise retail and media platforms.</p>
          </div>
          <div className="timeline">
            {experience.map((job) => (
              <article key={job.org + job.dates} className="timeline-item">
                <div className="timeline-when">{job.dates}</div>
                <div className="timeline-body">
                  <h3>{job.role}</h3>
                  <p className="timeline-org">{job.org}</p>
                  <ul>
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <p className="section-eyebrow">Stack</p>
            <h2>Skills</h2>
          </div>
          <div className="skills-grid">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="skill-group">
                <h3>{group}</h3>
                <p>{items.join(', ')}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="hire" className="section section-alt">
          <div className="section-head">
            <p className="section-eyebrow">For recruiters</p>
            <h2>Where I’m a strong fit</h2>
          </div>
          <ul className="looking-list">
            {lookingFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="hire-note">
            Fastest path for EM roles: Leadership section + EM resume. For Staff
            IC roles: featured case studies + Staff resume. Happy to walk people
            leadership or architecture tradeoffs on a screen share.
          </p>
        </section>

        <section id="contact" className="section contact">
          <div className="section-head">
            <p className="section-eyebrow">Contact</p>
            <h2>Let’s talk</h2>
            <p>
              Open to Engineering Manager and Staff / Senior IC roles in
              platform, backend, and applied AI product engineering.
            </p>
          </div>
          <div className="contact-panel">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={`tel:+15103713621`}>{profile.phone}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              linkedin.com/in/satish-k-28b227a7
            </a>
            <a href={profile.website}>{profile.website.replace('https://', '')}</a>
            <p className="contact-location">{profile.location}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={profile.emResumePath} download>
                EM resume (PDF)
              </a>
              <a className="btn btn-ghost" href={profile.resumePath} download>
                Staff resume (PDF)
              </a>
              <a className="btn btn-ghost" href="#leadership">
                Leadership
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {profile.name}. Portfolio of production
          systems at IPG / Kinesso and Gap Inc. ·{' '}
          <a href="/llm.txt">llm.txt</a>
        </p>
      </footer>
    </div>
  )
}
