import { useState } from 'react';
import { contactCards, profile } from '../data/portfolioData';
import Icon from './Icon';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="section-shell pb-24">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Ready for internship, graduate, and early-career opportunities"
          description="If you are hiring for software engineering roles with room for a security-minded builder to grow, I would welcome the conversation."
        />

        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="card-base p-8">
              <p className="text-3xl font-bold tracking-tight text-white">
                Let&apos;s talk about software engineering, secure systems, and opportunities to contribute.
              </p>
              <p className="mt-5 max-w-2xl leading-8 text-textSoft">
                I am based in Trinidad and Tobago and interested in roles where I can bring strong implementation discipline, collaborative energy, and a growing cybersecurity perspective to real product and platform work.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href={`mailto:${profile.email}`} className="btn-primary">
                  Email Me
                </a>
                <button type="button" onClick={handleCopyEmail} className="btn-secondary inline-flex items-center gap-2">
                  <Icon name={copied ? 'check' : 'copy'} className="h-4 w-4" />
                  {copied ? 'Email Copied' : 'Copy Email'}
                </button>
              </div>
            </div>

            <div className="grid gap-4">
              {contactCards.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="card-base flex items-start gap-4 p-6 transition hover:border-accent/25 hover:bg-white/[0.07]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <Icon name={item.icon} className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                      {item.label}
                    </p>
                    <p className="mt-2 break-all leading-7 text-textSoft">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
