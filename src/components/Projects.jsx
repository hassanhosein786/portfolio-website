import { projects } from '../data/portfolioData';
import Icon from './Icon';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const projectButtonClasses = {
  github:
    'rounded-full border border-emerald-400/25 bg-emerald-400/10 px-6 py-3 text-sm font-semibold text-emerald-300 transition hover:-translate-y-0.5 hover:bg-emerald-400/15 focus:outline-none focus:ring-2 focus:ring-emerald-300/40 focus:ring-offset-2 focus:ring-offset-slatebase',
  demo:
    'rounded-full border border-accent/30 bg-accent/15 px-6 py-3 text-sm font-semibold text-accent transition hover:-translate-y-0.5 hover:bg-accent/20 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:ring-offset-2 focus:ring-offset-slatebase',
  docs:
    'rounded-full border border-amber-400/25 bg-amber-400/10 px-6 py-3 text-sm font-semibold text-amber-300 transition hover:-translate-y-0.5 hover:bg-amber-400/15 focus:outline-none focus:ring-2 focus:ring-amber-300/40 focus:ring-offset-2 focus:ring-offset-slatebase',
};

function ProjectCard({ project }) {
  return (
    <article
      className={`group h-full overflow-hidden rounded-[2rem] border p-8 transition duration-300 ${
        project.featured
          ? 'border-accent/30 bg-gradient-to-b from-accent/10 via-white/5 to-white/5 shadow-glow'
          : 'border-white/10 bg-white/5 shadow-soft hover:border-white/20 hover:bg-white/[0.07]'
      }`}
    >
      <div className="flex items-start justify-between gap-5">
        <div>
          {project.featured && (
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <Icon name="shield" className="h-4 w-4" />
              Featured Security Project
            </span>
          )}
          <h3 className="mt-4 text-2xl font-bold text-white">{project.title}</h3>
          <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-textSoft">
            {project.subtitle}
          </p>
        </div>
        <div className="hidden h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-accent sm:flex">
          <Icon name={project.featured ? 'shield' : 'star'} className="h-6 w-6" />
        </div>
      </div>

      <p className="mt-6 leading-8 text-textSoft">{project.description}</p>

      <div className="mt-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Key features</p>
        <ul className="mt-4 grid gap-3 text-sm leading-7 text-textSoft">
          {project.features.map((feature) => (
            <li key={feature} className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {project.tech.map((item) => (
          <span key={item} className="badge-chip">
            {item}
          </span>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={project.links.github}
          target="_blank"
          rel="noreferrer"
          className={projectButtonClasses.github}
        >
          GitHub
        </a>
        {project.links.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noreferrer"
            className={projectButtonClasses.demo}
          >
            Live Demo
          </a>
        )}
        {project.links.docs && (
          <a
            href={project.links.docs}
            target="_blank"
            rel="noreferrer"
            className={projectButtonClasses.docs}
          >
            {project.links.docsLabel || 'Documentation'}
          </a>
        )}
      </div>
    </article>
  );
}

function Projects() {
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);
  const hasOddCount = otherProjects.length % 2 === 1;

  return (
    <section id="projects" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Strong projects with clear engineering and security value"
          inlineNote="Live demos may take a few minutes to wake up, so some features may be temporarily unavailable or briefly throw an error at first."
          description="The portfolio is intentionally project-led so recruiters can quickly see technical range, product thinking, and practical execution."
        />

        {featuredProject && (
          <Reveal className="mb-8">
            <ProjectCard project={featuredProject} />
          </Reveal>
        )}

        <div className="grid gap-6 lg:grid-cols-2">
          {otherProjects.map((project, index) => (
            <Reveal
              key={project.title}
              className={
                hasOddCount && index === otherProjects.length - 1
                  ? 'lg:col-span-2 lg:mx-auto lg:w-[calc(50%-0.75rem)]'
                  : ''
              }
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
