import { cn } from '@/lib/utils';

export function Logo({
  className,
  iconClassName,
}: {
  className?: string;
  iconClassName?: string;
}) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <svg
        className={cn('h-8 w-8 text-primary', iconClassName)}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
            d="M50 2L95.5 26V74L50 98L4.5 74V26L50 2Z"
            stroke="currentColor"
            strokeWidth="5"
        />
        <path
            d="M27 68L50 32L73 68"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M38.5 56H61.5"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
      </svg>
      <span className="font-headline text-xl font-semibold tracking-tight">
        Aveda Digital
      </span>
    </div>
  );
}
