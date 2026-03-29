import { about } from '../data/portfolioData';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

function About() {
  return (
    <section id="about" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          eyebrow="About"
          title="Serious engineering, grounded in practical delivery"
          description="A portfolio built to present depth, professionalism, and a clear trajectory across software engineering and cybersecurity."
        />

        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="card-base p-8">
              <p className="text-lg leading-8 text-textMain">{about.summary}</p>
              <div className="mt-8 space-y-5">
                {about.details.map((item) => (
                  <p key={item} className="leading-8 text-textSoft">
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <div className="card-base p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-accent">What I bring</p>
                <ul className="mt-5 space-y-4 text-sm leading-7 text-textSoft">
                  <li>Modernization of existing systems without losing reliability.</li>
                  <li>Balanced focus on engineering quality, UX, and secure implementation.</li>
                  <li>Comfort across application code, tooling, and supporting infrastructure.</li>
                </ul>
              </div>
              <div className="card-base p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-accent">Career direction</p>
                <p className="mt-5 leading-8 text-textSoft">
                  I am seeking internships, graduate roles, and early-career opportunities where I can contribute strongly as a software engineer while continuing to deepen my cybersecurity expertise.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
