type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  body?: React.ReactNode;
  align?: 'left' | 'center';
};

export function SectionHeader({ eyebrow, title, body, align = 'left' }: Props) {
  const center = align === 'center';
  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="display-2 mt-5 text-balance">{title}</h2>
      {body && <p className="lede mt-5">{body}</p>}
    </div>
  );
}
