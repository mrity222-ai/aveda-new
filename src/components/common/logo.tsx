import { Gem } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Gem className="h-6 w-6 text-primary" />
      <span className="font-headline text-xl font-semibold tracking-tight">
        Aveda
      </span>
    </div>
  );
}
