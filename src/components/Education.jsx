import { education } from '../data/portfolioData';
import Icon from './Icon';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

function Education() {
  return (
    <section id="education" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation in software engineering and cybersecurity"
          description="A progression from secondary achievement into software engineering study and postgraduate cybersecurity specialization."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {education.map((item) => (
            <Reveal key={`${item.institution}-${item.period}`}>
              <article className="card-base h-full p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <Icon name="cap" className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                      {item.period}
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-white">{item.institution}</h3>
                    <p className="mt-2 leading-7 text-textSoft">{item.credential}</p>
                  </div>
                </div>

                <div className="mt-6 space-y-3 text-sm leading-7 text-textSoft">
                  {item.details.map((detail) => (
                    <p key={detail}>{detail}</p>
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

export default Education;
