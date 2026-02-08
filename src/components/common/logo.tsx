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
        className={cn('h-6 w-6 text-primary', iconClassName)}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 19L8 5L12 19M12 19L16 5L20 19"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 14H17"
          stroke="currentColor"
          strokeWidth="2"
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
