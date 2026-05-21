type Props = {
  items: string[];
  speed?: 'normal' | 'slow';
  className?: string;
  separator?: React.ReactNode;
};

export function Marquee({
  items,
  speed = 'normal',
  className = '',
  separator,
}: Props) {
  const doubled = [...items, ...items];
  const animation = speed === 'slow' ? 'animate-marquee-x-slow' : 'animate-marquee-x';

  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <div className={`flex shrink-0 gap-16 pr-16 ${animation} group-hover:[animation-play-state:paused]`}>
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-16 whitespace-nowrap">
            <span>{item}</span>
            {separator}
          </span>
        ))}
      </div>
    </div>
  );
}
