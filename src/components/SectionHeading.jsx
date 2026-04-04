function SectionHeading({ eyebrow, title, description, inlineNote }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <div className="mb-3 flex flex-wrap items-center justify-center gap-3">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
          {eyebrow}
        </p>
        {inlineNote && (
          <span className="text-xs font-medium leading-5 text-rose-300">
            {inlineNote}
          </span>
        )}
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-textSoft sm:text-lg">{description}</p>
    </div>
  );
}

export default SectionHeading;
