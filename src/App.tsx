import {
  approach,
  experience,
  impact,
  profile,
  projects,
  skills,
} from './content'
import './index.css'

export default function App() {
  return (
    <div className="site">
      <div className="atmosphere" aria-hidden="true" />

      <header className="nav">
        <a className="nav-brand" href="#top">
          {profile.name}
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#approach">Approach</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <p className="hero-kicker">{profile.role}</p>
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-focus">{profile.focus}</p>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={profile.resumePath} download>
              Download resume
            </a>
            <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
              Email me
            </a>
            <a
              className="btn btn-ghost"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
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

        <section id="work" className="section">
          <div className="section-head">
            <h2>Selected work</h2>
            <p>
              Production systems with measurable scale — AI platforms, data
              movement, and high-throughput backends.
            </p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article key={project.title} className="project">
                <div className="project-meta">
                  <span className="project-company">{project.company}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-blurb">{project.blurb}</p>
                <ul className="project-metrics">
                  {project.metrics.map((metric) => (
                    <li key={metric}>{metric}</li>
                  ))}
                </ul>
                <p className="project-tags">{project.tags.join(' · ')}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section section-alt">
          <div className="section-head">
            <h2>Experience</h2>
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
            <h2>Skills</h2>
            <p>Tools I use to design, ship, and operate production systems.</p>
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

        <section id="approach" className="section section-alt">
          <div className="section-head">
            <h2>How I work</h2>
            <p>What you can expect when we build together.</p>
          </div>
          <div className="approach-grid">
            {approach.map((item) => (
              <article key={item.title} className="approach-item">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="section-head">
            <h2>Let’s talk</h2>
            <p>
              Open to Staff / Senior roles in distributed systems, AI platforms,
              and high-ownership backend product engineering.
            </p>
          </div>
          <div className="contact-panel">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={`tel:+15103713621`}>{profile.phone}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              linkedin.com/in/satish-k-28b227a7
            </a>
            <p className="contact-location">{profile.location}</p>
            <a className="btn btn-primary" href={profile.resumePath} download>
              Download resume (PDF)
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built for interviews —
          projects reflect production work at IPG / Kinesso and Gap Inc.
        </p>
      </footer>
    </div>
  )
}
