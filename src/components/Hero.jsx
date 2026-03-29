import { heroStats, profile } from '../data/portfolioData';
import Icon from './Icon';
import Reveal from './Reveal';

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.08),transparent_25%)]" />
      <div className="absolute inset-0 bg-grid bg-[length:42px_42px] opacity-[0.08]" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Open to Opportunities
          </span>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-textSoft">
            {profile.location}
          </p>
          <h1 className="mt-5 text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-xl font-semibold text-accent sm:text-2xl">{profile.headline}</p>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-textSoft">
            I build dependable software with a strong interest in secure engineering, clean product execution, and modernizing real-world systems for long-term value.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#projects" className="btn-primary inline-flex items-center justify-center gap-2">
              View Projects
              <Icon name="arrowRight" className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-secondary inline-flex items-center justify-center">
              Contact Me
            </a>
            <a
              href={profile.resumePath}
              download
              className="btn-secondary inline-flex items-center justify-center"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {heroStats.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-soft backdrop-blur"
              >
                <p className="text-2xl font-bold text-white">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-textSoft">{item.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="lg:justify-self-end">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -left-8 top-8 h-28 w-28 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -right-6 bottom-10 h-32 w-32 rounded-full bg-amber-400/10 blur-3xl" />

            <div className="animate-float rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-surface p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-accent">Profile Snapshot</p>
                    <h2 className="mt-3 text-2xl font-bold text-white">Engineer with a security mindset</h2>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <Icon name="shield" className="h-6 w-6" />
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-textSoft">Current focus</p>
                    <p className="mt-2 font-semibold text-white">
                      Full-stack engineering, Moodle modernization, and cybersecurity growth
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-textSoft">Strengths</p>
                    <p className="mt-2 font-semibold text-white">
                      Secure thinking, practical problem-solving, and clean implementation
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-textSoft">Environment</p>
                    <p className="mt-2 font-semibold text-white">
                      React, Node.js, PHP, Docker, Linux, MySQL, MongoDB, Moodle
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;
