import { skillGroups } from '../data/portfolioData';
import Icon from './Icon';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Skills"
          title="A balanced toolkit across software, platforms, and delivery"
          description="Grouped to help recruiters quickly scan language fluency, web capabilities, frameworks, and the tooling that supports day-to-day engineering work."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <Reveal key={group.title}>
              <article className="card-base h-full p-7">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <Icon name={group.icon} className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                    <p className="text-sm text-textSoft">Selected strengths and working tools</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span key={skill} className="badge-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
