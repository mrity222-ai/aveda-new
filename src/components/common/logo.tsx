import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Logo({
  className,
  imgClassName,
}: {
  className?: string;
  imgClassName?: string;
}) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Image
        src="/logo.png"
        width={200}
        height={200}
        alt="Aveda Technologies Logo"
        className={cn('rounded-md', imgClassName)}
        data-ai-hint="logo"
      />
    
    </div>
  );
}
