import { Gem } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Logo({ className, iconClassName }: { className?: string, iconClassName?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Gem className={cn("h-6 w-6 text-primary", iconClassName)} />
      <span className="font-headline text-xl font-semibold tracking-tight">
        Aveda Technologies
      </span>
    </div>
  );
}
