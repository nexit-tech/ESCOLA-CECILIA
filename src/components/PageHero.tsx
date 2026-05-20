type Props = {
  eyebrow: string;
  title: React.ReactNode;
  body?: React.ReactNode;
};

export function PageHero({ eyebrow, title, body }: Props) {
  return (
    <section className="relative bg-cream-deep border-b border-ink/5">
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" aria-hidden />
      <div className="container-wide pt-28 pb-20 md:pt-36 md:pb-28 text-center">
        <p className="eyebrow justify-center">{eyebrow}</p>
        <h1 className="display-1 mt-6 text-balance mx-auto max-w-4xl">{title}</h1>
        {body && <p className="lede mt-6 mx-auto max-w-2xl">{body}</p>}
      </div>
    </section>
  );
}
