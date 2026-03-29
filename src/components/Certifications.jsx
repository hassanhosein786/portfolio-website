import { certifications } from '../data/portfolioData';
import Icon from './Icon';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

function Certifications() {
  return (
    <section id="certifications" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Certifications"
          title="Signals of continued growth beyond the classroom"
          description="Focused credentials that reinforce both emerging technical range and delivery awareness."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((item) => (
            <Reveal key={item.title}>
              <article className="card-base flex h-full items-start gap-4 p-7">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <Icon name="star" className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                    {item.year}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-2 leading-7 text-textSoft">{item.issuer}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
