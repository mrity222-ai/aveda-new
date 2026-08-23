'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'fade';
  delay?: number; // delay in ms: 0, 100, 200, 300, 500, 700
  duration?: number; // duration in ms
  threshold?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className,
  variant = 'fade-up',
  delay = 0,
  duration = 700,
  threshold = 0.1,
  once = true,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, once]);

  // Variant base styles
  const getInitialClass = () => {
    switch (variant) {
      case 'fade-up':
        return 'opacity-0 translate-y-10';
      case 'fade-down':
        return 'opacity-0 -translate-y-10';
      case 'fade-left':
        return 'opacity-0 translate-x-12';
      case 'fade-right':
        return 'opacity-0 -translate-x-12';
      case 'zoom-in':
        return 'opacity-0 scale-95';
      case 'fade':
        return 'opacity-0';
      default:
        return 'opacity-0 translate-y-10';
    }
  };

  const getVisibleClass = () => {
    switch (variant) {
      case 'fade-up':
      case 'fade-down':
        return 'opacity-100 translate-y-0';
      case 'fade-left':
      case 'fade-right':
        return 'opacity-100 translate-x-0';
      case 'zoom-in':
        return 'opacity-100 scale-100';
      case 'fade':
        return 'opacity-100';
      default:
        return 'opacity-100 translate-y-0';
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'opacity, transform',
      }}
      className={cn(
        'transition-all',
        isVisible ? getVisibleClass() : getInitialClass(),
        className
      )}
    >
      {children}
    </div>
  );
}

import { usePathname } from 'next/navigation';

/**
 * Global Scroll Observer component to automatically animate elements with `data-scroll-reveal`
 * or `.scroll-reveal` class across the site on scroll and page navigation.
 */
export function GlobalScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const timer = setTimeout(() => {
      const handleObserver = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
          }
        });
      };

      observer = new IntersectionObserver(handleObserver, {
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px',
      });

      const elements = document.querySelectorAll(
        '[data-scroll-reveal], .reveal-on-scroll, .scroll-reveal'
      );
      
      elements.forEach((el) => {
        observer?.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
    };
  }, [pathname]);

  return null;
}
