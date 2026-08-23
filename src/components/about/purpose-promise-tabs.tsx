'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const tabsData = [
  {
    id: 'purpose',
    title: 'PURPOSE',
    heading: 'PURPOSE',
    description:
      'Drive positive change in the lives of our communities. Only when we enable others to rise will we rise.',
    bgImage: '/ins/heartfelt_community_center_or_modern_ngo_workspace_with_wa.png',
  },
  {
    id: 'promise',
    title: 'PROMISE',
    heading: 'PROMISE',
    subheading: 'Build Smarter. Scale Faster.',
    description:
      'Deliver high-speed custom software engineering, proprietary SaaS platforms, and agentic AI automation for scaling global enterprises.',
    buttonText: 'KNOW MORE',
    buttonHref: '/contact',
    bgImage: '/ins/sleek_modern_manufacturing_facility_with_advanced_robotics_clean_white_floors.png',
  },
  {
    id: 'mission',
    title: 'MISSION',
    heading: 'MISSION',
    description:
      'We unlock transformative growth by building enterprise partnerships grounded in trust, human ingenuity, and an entrepreneurial spirit.',
    bgImage: '/ins/high_end_real_estate_architectural_photography_of_a_mini.png',
  },
  {
    id: 'values',
    title: 'VALUES',
    heading: 'VALUES',
    isValuesList: true,
    valuesItems: [
      {
        label: 'Integrity',
        desc: 'It is the courage to uphold principles when no one is watching, and the conviction to choose honesty over convenience.',
      },
      {
        label: 'Quality',
        desc: 'Ensuring that every action, every product, and every experience reflects our promise to do things exceptionally well.',
      },
      {
        label: 'Care',
        desc: 'Begins with dignity for our people, extends to respect for our customers, and finds its purpose in serving communities.',
      },
    ],
    bgImage: '/ins/clean_minimalist_software_dashboard_interface_on_a_sleek.png',
  },
];

export function PurposePromiseTabs() {
  const [activeTabId, setActiveTabId] = useState('purpose');

  const activeTab = tabsData.find((t) => t.id === activeTabId) || tabsData[0];

  return (
    <section className="relative w-full h-[520px] sm:h-[600px] overflow-hidden text-white select-none border-b border-neutral-800">
      
      {/* Background Image Layers with Smooth Crossfade */}
      {tabsData.map((tab) => (
        <div
          key={tab.id}
          className={cn(
            'absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out',
            tab.id === activeTabId ? 'opacity-100 z-0' : 'opacity-0 z-0'
          )}
        >
          <Image
            src={tab.bgImage}
            alt={tab.title}
            fill
            priority={tab.id === 'purpose'}
            className="object-cover object-center"
          />
          {/* Dark Contrast Overlay matching the reference screenshots */}
          <div className="absolute inset-0 bg-slate-950/60 backdrop-brightness-75" />
        </div>
      ))}

      {/* 4 Column Accordion Overlay */}
      <div className="relative z-10 w-full h-full flex flex-col md:flex-row container mx-auto px-4 max-w-7xl">
        {tabsData.map((tab) => {
          const isActive = tab.id === activeTabId;

          return (
            <div
              key={tab.id}
              onClick={() => setActiveTabId(tab.id)}
              className={cn(
                'relative cursor-pointer transition-all duration-700 ease-in-out flex flex-col justify-center px-6 md:px-8 py-8 border-b md:border-b-0 md:border-r border-white/20',
                isActive
                  ? 'flex-[3] sm:flex-[4] bg-slate-950/30 backdrop-blur-xs'
                  : 'flex-1 hover:bg-white/10 opacity-80 hover:opacity-100'
              )}
            >
              {isActive ? (
                /* Active Content Box (Matches Screenshots Exactly) */
                <div className="space-y-4 max-w-lg transition-all duration-500 animate-in fade-in zoom-in-95">
                  <h3 className="font-soehne text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white">
                    {tab.heading}
                  </h3>

                  {tab.subheading && (
                    <p className="font-soehne text-xl sm:text-2xl font-bold text-red-400">
                      {tab.subheading}
                    </p>
                  )}

                  {tab.description && (
                    <p className="font-inter text-sm sm:text-base text-neutral-200 leading-relaxed">
                      {tab.description}
                    </p>
                  )}

                  {/* Values List rendering */}
                  {tab.isValuesList && tab.valuesItems && (
                    <div className="space-y-3 pt-2">
                      {tab.valuesItems.map((item) => (
                        <div key={item.label} className="text-xs sm:text-sm">
                          <p className="font-bold text-white flex items-center gap-1.5">
                            <span className="text-red-500 font-extrabold text-base">•</span> {item.label}
                          </p>
                          <p className="text-neutral-300 pl-3 leading-relaxed mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {tab.buttonText && tab.buttonHref && (
                    <div className="pt-4">
                      <Button asChild className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-7 h-11 rounded-none shadow-md">
                        <Link href={tab.buttonHref}>{tab.buttonText}</Link>
                      </Button>
                    </div>
                  )}
                </div>
              ) : (
                /* Inactive Compact Column Label */
                <div className="flex items-center md:justify-center">
                  <span className="font-soehne text-lg sm:text-xl font-bold uppercase tracking-wider text-white">
                    {tab.title}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
}
