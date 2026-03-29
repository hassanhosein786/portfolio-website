import { profile } from '../data/portfolioData';

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slatebase/90">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-textSoft sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>
          © 2026 {profile.name}. Built with React, Vite, and Tailwind CSS.
        </p>
        <p>{profile.headline}</p>
      </div>
    </footer>
  );
}

export default Footer;
