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
          title="Technical Skills"
          description="A cleaner snapshot of the technologies I use most across application development, backend services, databases, and everyday engineering workflows."
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
