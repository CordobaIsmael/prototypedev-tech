import { useId } from 'react';

interface PrototypeLogoProps {
  variant?: 'dark' | 'light';
  showWordmark?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function PrototypeLogo({
  variant = 'dark',
  showWordmark = true,
  size = 'md',
}: PrototypeLogoProps) {
  const uid = useId().replace(/:/g, '');
  const leftId = `proto-left-${uid}`;
  const rightId = `proto-right-${uid}`;

  const iconSize =
    size === 'sm' ? 'h-8 w-8' : size === 'lg' ? 'h-11 w-11' : 'h-9 w-9';
  const textSize =
    size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl';

  return (
    <span className="inline-flex items-center gap-2.5 select-none">
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${iconSize} shrink-0`}
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id={leftId}
            x1="16"
            y1="14"
            x2="52"
            y2="86"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset="0%"
              stopColor={variant === 'dark' ? '#F8FAFC' : '#38BDF8'}
            />
            <stop offset="40%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#6D28D9" />
          </linearGradient>
          <linearGradient
            id={rightId}
            x1="50"
            y1="10"
            x2="86"
            y2="82"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#22D3EE" />
            <stop offset="55%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
        <path
          d="M50 8L14 29V72L33 83V40L50 30V8Z"
          fill={`url(#${leftId})`}
        />
        <path
          d="M50 8L86 29V63L50 84L37 76V55L50 63L67 53V40L50 30V8Z"
          fill={`url(#${rightId})`}
        />
      </svg>

      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-display ${textSize} font-bold tracking-[0.06em] uppercase ${
              variant === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
          >
            PROTOTYP
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              E
            </span>
          </span>
          <span
            className={`font-mono text-[10px] tracking-widest ${
              variant === 'dark' ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            dev.tech
          </span>
        </span>
      )}
    </span>
  );
}
