import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Logo({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Image
        src="https://picsum.photos/seed/avedalogo/32/32"
        width={32}
        height={32}
        alt="Aveda Technologies Logo"
        className="rounded-md"
        data-ai-hint="logo"
      />
      <span className="font-headline text-xl font-semibold tracking-tight text-accent">
        Aveda Technologies
      </span>
    </div>
  );
}
