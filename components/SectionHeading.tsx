type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  centered?: boolean;
  dark?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  centered = false,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p
        className={`text-sm font-bold uppercase tracking-[0.22em] ${
          dark ? "text-ivory/62" : "text-sage"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-heading text-4xl leading-tight sm:text-5xl ${
          dark ? "text-ivory" : "text-walnut"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
