import { useEffect, useState } from 'react';
import { navigation, profile } from '../data/portfolioData';
import Icon from './Icon';

function Navbar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-white/10 bg-slatebase/85 shadow-soft backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="group">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-bold text-accent transition group-hover:border-accent/40 group-hover:bg-accent/10">
              HH
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                Portfolio
              </p>
              <p className="text-sm text-textSoft">{profile.name}</p>
            </div>
          </div>
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {navigation.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  isActive
                    ? 'bg-white/10 text-white'
                    : 'text-textSoft hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <a href="#contact" className="ml-2 btn-primary">
            Let&apos;s Connect
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <Icon name={isOpen ? 'close' : 'menu'} />
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-surface/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-2">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm text-textSoft transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsOpen(false)} className="btn-primary mt-2 text-center">
              Let&apos;s Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
