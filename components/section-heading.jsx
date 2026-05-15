export function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-7 flex items-end justify-between gap-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
          {title}
        </h2>
      </div>
    </div>
  );
}
