import { experience } from '../data/portfolioData';
import Icon from './Icon';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Experience"
          title="Hands-on work in product modernization and systems support"
          description="Practical professional experience spanning legacy platform upgrades, full-stack implementation, developer tooling, and operational support."
        />

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-white/10 sm:block" />
          <div className="space-y-8">
            {experience.map((item) => (
              <Reveal key={`${item.company}-${item.role}`}>
                <article className="card-base relative p-8 sm:ml-12">
                  <div className="absolute -left-[3.35rem] top-9 hidden h-8 w-8 items-center justify-center rounded-full border border-accent/30 bg-slatebase text-accent sm:flex">
                    <Icon name="briefcase" className="h-4 w-4" />
                  </div>

                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                        {item.period}
                      </p>
                      <h3 className="mt-3 text-2xl font-bold text-white">{item.role}</h3>
                      <p className="mt-2 text-lg text-textSoft">
                        {item.company} <span className="text-white/30">|</span> {item.location}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-textSoft">
                      Current professional role
                    </div>
                  </div>

                  <ul className="mt-8 grid gap-4 text-sm leading-7 text-textSoft">
                    {item.highlights.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
