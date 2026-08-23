import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Code2,
  Smartphone,
  Palette,
  TrendingUp,
  Bot,
  Vote,
  Globe,
  MoveRight,
  ArrowRight,
  Server,
  Database,
  Cloud,
  Rocket,
  Building2,
  Sparkles,
  Cpu,
  Megaphone,
  Layout,
  ShieldCheck,
  HeartPulse,
  GraduationCap,
  Sun,
  Plane,
  Factory,
  Home,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import CtaSection from '@/components/home/cta-section';
import HeroBackground from '@/components/common/hero-background';
import ServicesPreview from '@/components/home/services-preview';
import ScrollReveal from '@/components/common/scroll-reveal';

export const metadata: Metadata = {
  title: 'Our Services | Aveda Technologies',
  description:
    'Explore the end-to-end digital, AI, web, and political growth solutions offered by Aveda Technologies—from WaaS to AI automation.',
  openGraph: {
    title: 'Our Services | Aveda Technologies',
    description:
      'Explore the end-to-end digital, AI, web, and political growth solutions offered by Aveda Technologies—from WaaS to AI automation.',
  },
  twitter: {
    title: 'Our Services | Aveda Technologies',
    description:
      'Explore the end-to-end digital, AI, web, and political growth solutions offered by Aveda Technologies—from WaaS to AI automation.',
  },
};

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const techStackBento = [
  {
    category: 'Frontend Engine',
    count: '5 Technologies',
    desc: 'Immersive, highly responsive user interfaces tailored for next-generation platforms.',
    icon: Layout,
    colSpan: 'md:col-span-2',
    techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    chipColor: 'text-purple-700 border-purple-200 bg-purple-50',
    iconBg: 'bg-purple-100 text-purple-600',
  },
  {
    category: 'Backend Architecture',
    count: '6 Technologies',
    desc: 'Robust architecture ensuring seamless data flow and high availability.',
    icon: Server,
    colSpan: 'md:col-span-1',
    techs: ['Node.js', 'Python', 'Java', 'C++', 'Laravel', 'PHP'],
    chipColor: 'text-blue-700 border-blue-200 bg-blue-50',
    iconBg: 'bg-blue-100 text-blue-600',
  },
  {
    category: 'Database & Storage',
    count: '5 Technologies',
    desc: 'Scalable storage solutions for complex, data-intensive applications.',
    icon: Database,
    colSpan: 'md:col-span-1',
    techs: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Firebase'],
    chipColor: 'text-amber-700 border-amber-200 bg-amber-50',
    iconBg: 'bg-amber-100 text-amber-600',
  },
  {
    category: 'Cloud Infrastructure',
    count: '6 Technologies',
    desc: 'Global scale deployment with edge computing capabilities and orchestration.',
    icon: Cloud,
    colSpan: 'md:col-span-2',
    techs: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Vercel'],
    chipColor: 'text-indigo-700 border-indigo-200 bg-indigo-50',
    iconBg: 'bg-indigo-100 text-indigo-600',
  },
  {
    category: 'AI Integration',
    count: '6 Technologies',
    desc: 'Advanced LLMs and agentic workflows.',
    icon: Cpu,
    colSpan: 'md:col-span-1',
    techs: ['OpenAI', 'LangChain', 'Genkit', 'PyTorch', 'Voice AI'],
    chipColor: 'text-emerald-700 border-emerald-200 bg-emerald-50',
    iconBg: 'bg-emerald-100 text-emerald-600',
  },
  {
    category: 'Security & Compliance',
    count: '4 Technologies',
    desc: 'Enterprise-grade authentication & data protection.',
    icon: ShieldCheck,
    colSpan: 'md:col-span-1',
    techs: ['OAuth 2.0', 'JWT', 'Enterprise SSL', 'Encryption'],
    chipColor: 'text-rose-700 border-rose-200 bg-rose-50',
    iconBg: 'bg-rose-100 text-rose-600',
  },
];

const marqueeCards = [
  {
    title: 'Healthcare',
    icon: HeartPulse,
    desc: 'Secure patient portals, telemedicine platforms, and advanced diagnostic AI integrations.',
    bgImage: '/ins/high_end_professional_photography_of_a_modern_medica.png',
    iconColor: 'text-purple-400',
    href: '/contact?service=Healthcare-Solutions',
  },
  {
    title: 'Education',
    icon: GraduationCap,
    desc: 'LMS platforms, student analytics, and immersive virtual learning environments.',
    bgImage: '/ins/modern_university_architecture_or_a_high_tech_classroom_wit.png',
    iconColor: 'text-blue-400',
    href: '/contact?service=Education-Solutions',
  },
  {
    title: 'Energy & Solar',
    icon: Sun,
    desc: 'Smart grid monitoring, sustainability reporting dashboards, and IoT integrations.',
    bgImage: '/ins/a_field_of_sleek_solar_panels_under_a_clear_sky_with_a.png',
    iconColor: 'text-yellow-400',
    href: '/contact?service=Solar-Solutions',
  },
  {
    title: 'Finance & Banking',
    icon: Building2,
    desc: 'High-frequency trading platforms, secure payment gateways, and automated risk analysis.',
    bgImage: '/ins/luxury_corporate_office_skyscraper_interior_with_glass_w.png',
    iconColor: 'text-amber-400',
    href: '/contact?service=Enterprise-Solutions',
  },
  {
    title: 'Startups & SaaS',
    icon: Rocket,
    desc: 'MVP engineering, scalable multi-tenant SaaS platforms, and automated CI/CD workflows.',
    bgImage: '/ins/clean_minimalist_software_dashboard_interface_on_a_sleek.png',
    iconColor: 'text-indigo-400',
    href: '/contact?service=SaaS-Solutions',
  },
  {
    title: 'Travel & Aviation',
    icon: Plane,
    desc: 'Dynamic booking engines, luxury tour package managers, and AI itinerary generators.',
    bgImage: '/ins/luxury_travel_scene_a_wing_of_a_private_jet_over_clouds_or_a.png',
    iconColor: 'text-sky-400',
    href: '/contact?service=Travel-Solutions',
  },
  {
    title: 'Manufacturing',
    icon: Factory,
    desc: 'Smart factory automation, IoT tracking, inventory intelligence, and custom ERPs.',
    bgImage: '/ins/sleek_modern_manufacturing_facility_with_advanced_robotics_clean_white_floors.png',
    iconColor: 'text-emerald-400',
    href: '/contact?service=Manufacturing-Solutions',
  },
  {
    title: 'Real Estate',
    icon: Home,
    desc: 'Property catalogs, 3D virtual tours, instant inquiry captures, and CRM integrations.',
    bgImage: '/ins/high_end_real_estate_architectural_photography_of_a_mini.png',
    iconColor: 'text-cyan-400',
    href: '/contact?service=RealEstate-Solutions',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#f3f4f6] text-[#09090b] font-inter antialiased relative overflow-hidden selection:bg-purple-500 selection:text-white">
      {/* Hero Section - 3D Isometric Dark Pattern */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-[#050505] text-white border-b border-slate-800/80 overflow-hidden">
        <HeroBackground />
        <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
          {/* Floating Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/90 px-4 py-1.5 text-xs font-semibold text-slate-200 shadow-2xs mb-6 mx-auto">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            <span>Services</span>
          </div>

          {/* Big Centered Headline */}
          <h1 className="font-soehne text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.2] mb-6">
            Technology solutions that help your business grow
          </h1>

          {/* Centered Description */}
          <p className="font-inter text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Explore end-to-end digital engineering, AI automation, custom software, and strategic growth solutions tailored for enterprise scalability.
          </p>
        </div>
      </section>

      {/* -------------------- CORE CAPABILITIES SECTION -------------------- */}
      <ScrollReveal variant="fade-up" delay={100}>
        <ServicesPreview />
      </ScrollReveal>

      {/* -------------------- PREMIUM BENTO GRID SERVICES SECTION -------------------- */}
      <ScrollReveal variant="fade-up" delay={100}>
        <section id="services-grid" className="py-8 md:py-10 lg:py-12 bg-[#f3f4f6] relative border-t border-neutral-200/80 scroll-mt-16">
        {/* Glow Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-purple-400/10 blur-[140px] rounded-full pointer-events-none -z-10" />

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-10">
            <Badge variant="outline" className="mb-4 border-purple-200 text-purple-700 bg-purple-50">
              Premium Services
            </Badge>
            <h2 className="font-soehne text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-[1.2] text-slate-900">
              End-to-End Service Offerings
            </h2>
            <p className="font-inter mt-6 text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal">
              Architecting the next generation of digital experiences with digital presence managed as a continuous product.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Card 1: Featured WaaS */}
            <Link
              href="/services/web-development"
              className="group relative rounded-[24px] overflow-hidden border border-neutral-200/80 bg-white p-8 flex flex-col justify-end transition-all duration-500 hover:-translate-y-1.5 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/10 col-span-1 md:col-span-2 row-span-1 md:row-span-2 shadow-sm"
            >
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKUKzZCddt986oSej1m_HWJkSC-YBjAk1FL2SWxqoS9YLrDLy6SeoIQqE6D5RXlm16d4oEYxkRL5T-s-3qYKCDjxe0WWw0uMlCPFjHw19NZKHKYXnBOFSMWncUdbJz-Yb3YNloDk9leHwpYAc6RtuVwFg94LMVB7Sfm5NbLkBbJiGuFvsF6Ux-HnPDrA2sR6I4-VFeeBBF7EHeHRLedmWgp4MZObH_G2rbN7lFJapzAdvq3Ij6YGU5qw"
                  alt="Website as a Service"
                  className="w-full h-full object-cover opacity-75 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
              </div>

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex flex-wrap gap-2 mb-auto">
                  <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-600 text-white border border-purple-400 shadow-sm">
                    Platform
                  </span>
                  <span className="px-3.5 py-1 rounded-full text-xs font-medium bg-white/20 text-white border border-white/20 backdrop-blur-md">
                    Next.js
                  </span>
                </div>

                <div>
                  <h3 className="font-soehne text-3xl sm:text-4xl font-light text-white mb-2 tracking-[-0.03em]">
                    Website as a Service
                  </h3>
                  <p className="font-inter text-neutral-200 text-base mb-6 max-w-md">
                    End-to-end digital presence managed as a continuous, scalable product.
                  </p>
                  <div className="inline-flex items-center gap-2 text-purple-300 font-semibold text-sm group-hover:text-white transition-colors">
                    <span>Explore Service</span>
                    <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Card 2: Custom Web Development */}
            <Link
              href="/services/web-development"
              className="group relative rounded-[24px] overflow-hidden border border-neutral-200/80 bg-white p-8 flex flex-col justify-end transition-all duration-500 hover:-translate-y-1.5 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/10 shadow-sm"
            >
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYuY2DwwPxsCcDjRreymYMqetyvr2jLG7JS_lXpEqsY4otdY-Vtz22tl5abnOt9yiqPClcI0FLTBeDQM72e4OTh0xoxQzeoPH4AvDo810PuHuQnw_0_r9j6LRDlixHvFoG_pnxhIW7X8meF4T4joYwYmio8XxzeoCY1YK23q2pkb-Cqunl1L8SqywbTM8AIq6Y4VykZaIosGz8_2ThJ0HF5JZ__pyL4l0Fd0SLtiVLDKYzhhzlJ7-5Bg"
                  alt="Custom Web Development"
                  className="w-full h-full object-cover opacity-65 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
              </div>

              <div className="relative z-10">
                <span className="px-3.5 py-1 rounded-full text-xs font-medium bg-white/20 text-white border border-white/20 backdrop-blur-md inline-block mb-3">
                  React
                </span>
                <h3 className="font-soehne text-2xl font-light text-white mb-3 tracking-[-0.03em]">
                  Custom Web Development
                </h3>
                <div className="inline-flex items-center gap-1.5 text-purple-300 text-sm font-medium group-hover:text-white transition-colors">
                  <span>Explore</span>
                  <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

            {/* Card 3: Mobile App Development */}
            <Link
              href="/services/app-development"
              className="group relative rounded-[24px] overflow-hidden border border-neutral-200/80 bg-white p-8 flex flex-col justify-end transition-all duration-500 hover:-translate-y-1.5 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/10 shadow-sm"
            >
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCokkVLKoI96iIxjciMO6Sus3ZwvKh_lAZSu3nubj-rocobFRAS7ilO5WjkTG8irjfd0gaHXTDHmVpaRN8z33S4FlIhGahCVHLV60gNRVGSyt2BvSOb8Lqykq1h0DUqcH_LVGMkoxHIJl9UtGQEAFEJkCCGScnFJf2qo2NJCiJHWtorWnnR4KHGA60hmP1ZrlngSRwmTz8xSJxCnhso67J6E4rydng--m5jsuamncLBoj_sXQAlgJ56uA"
                  alt="Mobile App Development"
                  className="w-full h-full object-cover opacity-65 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
              </div>

              <div className="relative z-10">
                <span className="px-3.5 py-1 rounded-full text-xs font-medium bg-white/20 text-white border border-white/20 backdrop-blur-md inline-block mb-3">
                  iOS / Android
                </span>
                <h3 className="font-soehne text-2xl font-light text-white mb-3 tracking-[-0.03em]">
                  Mobile App Development
                </h3>
                <div className="inline-flex items-center gap-1.5 text-purple-300 text-sm font-medium group-hover:text-white transition-colors">
                  <span>Explore</span>
                  <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

            {/* Card 4: AI & Automation */}
            <Link
              href="/services/ai-automation"
              className="group relative rounded-[24px] overflow-hidden border border-neutral-200/80 bg-white p-8 flex flex-col justify-end transition-all duration-500 hover:-translate-y-1.5 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/10 shadow-sm"
            >
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjDl7tsoZ3-ZwpAOQHvbfBxZzj_3Bqi_RgOMzY_f2K0D26L8wZFTlXxiPeuUy8Toe132dwEh2GRNasx2n6VQ-s0CVIx2BaXExvCUKG_T2jxt5xyOVQFzD_KdLA3TGhz6UCtgxFWt6lk9WReHzi4UTf3F2T6L93kmONNT87TYEflvWona0gr7D1lobA3Lu9XI0ZWnXtRjQUJL3EIp9Baw-0K1-tuTaK8BsmYJSBV3tBdu2fvgkeW4lHaA"
                  alt="AI & Automation"
                  className="w-full h-full object-cover opacity-65 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
              </div>

              <div className="relative z-10">
                <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-500 text-slate-950 border border-amber-400 inline-block mb-3 shadow-sm">
                  Machine Learning
                </span>
                <h3 className="font-soehne text-2xl font-light text-white mb-3 tracking-[-0.03em]">
                  AI & Automation
                </h3>
                <div className="inline-flex items-center gap-1.5 text-purple-300 text-sm font-medium group-hover:text-white transition-colors">
                  <span>Explore</span>
                  <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

            {/* Card 5: UI/UX Design */}
            <Link
              href="/services/ui-ux-design"
              className="group relative rounded-[24px] overflow-hidden border border-neutral-200/80 bg-white p-8 flex flex-col justify-end transition-all duration-500 hover:-translate-y-1.5 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/10 shadow-sm"
            >
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVbu-jsG8bS69ajGVdj_kXPQ-KSXlAVrqUO4egYfrLjBXSAwzdEqq5Sp0quPnnXHqjmmt4n1dmHlM02Scuettkw5lNe6p-_tdnf9sRBVuPlm0kDJg3TIWQSwlGf-Y_tbXkVcG3lkp1PWP_8HZQKgHZgMsGoHIG84HJ59SqOmX6egQ9MWaXqyOpM1A5nM90s5ZWmuGafEv9jgP4vFlDkfMT6LHJ8QhLKAxLInwuidsE2jS8yl3A8TCIDw"
                  alt="UI/UX Design"
                  className="w-full h-full object-cover opacity-65 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
              </div>

              <div className="relative z-10">
                <span className="px-3.5 py-1 rounded-full text-xs font-medium bg-white/20 text-white border border-white/20 backdrop-blur-md inline-block mb-3">
                  Figma
                </span>
                <h3 className="font-soehne text-2xl font-light text-white mb-3 tracking-[-0.03em]">
                  UI/UX Design
                </h3>
                <div className="inline-flex items-center gap-1.5 text-purple-300 text-sm font-medium group-hover:text-white transition-colors">
                  <span>Explore</span>
                  <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

            {/* Card 6: Digital Marketing */}
            <Link
              href="/services/digital-marketing"
              className="group relative rounded-[24px] overflow-hidden border border-neutral-200/80 bg-white p-8 flex flex-col justify-end transition-all duration-500 hover:-translate-y-1.5 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/10 shadow-sm"
            >
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3JHu55ujeLNnnUy6xRPVlSj4eV2RjhB9WSi28oNS6BNhC7hr7irzvFCFbapWvV5DeYghx0LVJ-A1XfljNYptyGopXtENb5pvflKwBiNxWklWT8byHO5qV49LJ8N_qzJ8v-dz-66wlQPfTuD0PmlHdHC7aOIxyDoquXEWiEk4o2DdEe0Yq6c6GBQI-K_4HStNHsJVR19GV62mAEGiIG9L8OQ8YIOAg8oCRG4XxVSt1Hlw-4vHb08BmGA"
                  alt="Digital Marketing"
                  className="w-full h-full object-cover opacity-65 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
              </div>

              <div className="relative z-10">
                <span className="px-3.5 py-1 rounded-full text-xs font-medium bg-white/20 text-white border border-white/20 backdrop-blur-md inline-block mb-3">
                  Growth
                </span>
                <h3 className="font-soehne text-2xl font-light text-white mb-3 tracking-[-0.03em]">
                  Digital Marketing
                </h3>
                <div className="inline-flex items-center gap-1.5 text-purple-300 text-sm font-medium group-hover:text-white transition-colors">
                  <span>Explore</span>
                  <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

            {/* Card 7: Political Campaigning with AI */}
            <Link
              href="/services/political-campaigning"
              className="group relative rounded-[24px] overflow-hidden border border-neutral-200/80 bg-white p-8 flex flex-col justify-end transition-all duration-500 hover:-translate-y-1.5 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/10 col-span-1 md:col-span-3 row-span-1 shadow-sm"
            >
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAijQMi-oblA_pEAW8v4Eoj7rEV07yVAS0f7TPIrBbzYFjNwlk2J6TWN_B17hm1mQM780-z4Aa2U4wEOieBzUfrkDyNmWIK0c1oZZN98KU-d4SeLC3PxX_BIJdC7FMRBkdSF624IlaszeLnRCFXlBDMMjuR6jriuzm0ItNuDWPNUG-3NSLhnWZKBaQ5L0viXIXCqYRyC5lSmFid_FE0qJSPOlBXkjv3UJ7n-YLuYoI-tMLKmRAqH9PdcA"
                  alt="Political Campaigning with AI"
                  className="w-full h-full object-cover opacity-65 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
              </div>

              <div className="relative z-10 w-full md:w-1/2">
                <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white border border-blue-400 inline-block mb-3 shadow-sm">
                  Enterprise
                </span>
                <h3 className="font-soehne text-3xl font-light text-white mb-2 tracking-[-0.03em]">
                  Political Campaigning with AI
                </h3>
                <p className="font-inter text-neutral-200 text-sm mb-4 hidden md:block">
                  Leverage predictive models and spatial analytics for strategic dominance.
                </p>
                <div className="inline-flex items-center gap-2 text-purple-300 font-semibold text-sm group-hover:text-white transition-colors">
                  <span>Explore Service</span>
                  <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* -------------------- MODERN BENTO TECH STACK SECTION -------------------- */}
      <ScrollReveal variant="fade-up" delay={150}>
        <section id="tech-stack" className="py-8 md:py-10 lg:py-12 bg-white border-t border-neutral-200/80 relative scroll-mt-16">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-10">
              <Badge variant="outline" className="mb-4 border-purple-200 text-purple-700 bg-purple-50">
                Modern Tech Stack
              </Badge>
              <h2 className="font-soehne text-[18px] sm:text-[27px] lg:text-[32px] font-light tracking-[-0.05em] leading-[1.1] text-slate-900">
                Technology Stack
              </h2>
              <p className="font-inter mt-6 text-neutral-600 text-lg leading-relaxed">
                Precision engineering powered by industry-leading tools. A sophisticated ecosystem designed for scale, security, and exceptional performance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {techStackBento.map((item) => (
                <div
                  key={item.category}
                  className={cn(
                    'group relative rounded-3xl border border-neutral-200/80 bg-neutral-50/80 p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/10 flex flex-col justify-between min-h-[260px]',
                    item.colSpan
                  )}
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className={cn('p-3 rounded-2xl border border-neutral-200/60 shadow-sm transition-all duration-300', item.iconBg)}>
                        <item.icon className="w-8 h-8" />
                      </div>
                      <span className={cn('px-3.5 py-1 rounded-full text-xs font-semibold border shadow-sm', item.chipColor)}>
                        {item.count}
                      </span>
                    </div>

                    <h3 className="font-soehne text-2xl font-light text-slate-900 mb-2 tracking-[-0.03em]">
                      {item.category}
                    </h3>
                    <p className="font-inter text-neutral-600 text-sm leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2.5 mt-auto pt-4 border-t border-neutral-200">
                    {item.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-3.5 py-1 rounded-full bg-white border border-neutral-200 text-xs font-medium text-slate-800 shadow-sm group-hover:border-purple-300 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* -------------------- DOMAIN EXPERTISE / INFINITE MARQUEE SECTION -------------------- */}
      <ScrollReveal variant="fade-up" delay={200}>
        <section className="py-8 md:py-10 lg:py-12 bg-[#fafafa] border-t border-neutral-200/80 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 text-center mb-8">
            <Badge variant="outline" className="mb-4 border-purple-200 text-purple-700 bg-purple-50 uppercase tracking-widest">
              Domain Expertise
            </Badge>
            <h2 className="font-soehne text-[18px] sm:text-[27px] lg:text-[32px] font-light tracking-[-0.05em] leading-[1.1] text-slate-900 mb-6">
              Solutions Built for{' '}
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Every Industry
              </span>
            </h2>
            <p className="font-inter text-neutral-600 text-lg max-w-2xl mx-auto leading-relaxed">
              We build websites, AI automation, CRM systems, and digital platforms tailored for every business sector.
            </p>
          </div>

          {/* Marquee Container with Fade Edges */}
          <div className="relative w-full overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#fafafa] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#fafafa] to-transparent z-10 pointer-events-none" />

            <div className="flex w-max animate-marquee gap-6 px-6 group-hover:[animation-play-state:paused]">
              {[...marqueeCards, ...marqueeCards].map((card, idx) => (
                <Link
                  key={`${card.title}-${idx}`}
                  href={card.href}
                  className="relative w-[320px] md:w-[420px] h-[280px] rounded-3xl overflow-hidden group/card cursor-pointer transition-transform duration-500 hover:-translate-y-2 group-hover:scale-[0.98] hover:!scale-100 border border-neutral-200/80 shrink-0 shadow-sm"
                >
                  {/* Image Background */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover/card:scale-110"
                    style={{ backgroundImage: `url('${card.bgImage}')` }}
                  />

                  {/* Dark Gradient Overlay for text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent" />

                  {/* Card Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end h-full z-10">
                    <div className="flex items-center gap-3 mb-2">
                      <card.icon className={cn('w-6 h-6', card.iconColor)} />
                      <h3 className="font-soehne text-2xl font-light text-white tracking-[-0.03em]">
                        {card.title}
                      </h3>
                    </div>

                    <p className="font-inter text-sm text-neutral-200 mb-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover/card:opacity-100 group-hover/card:translate-y-0 line-clamp-2">
                      {card.desc}
                    </p>

                    <div className="inline-flex items-center gap-1 text-sm font-semibold text-purple-300 group-hover/card:text-white transition-colors opacity-0 transform translate-y-2 group-hover/card:opacity-100 group-hover/card:translate-y-0 delay-75">
                      <span>Explore Solutions</span>
                      <MoveRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* -------------------- FINAL CTA SECTION -------------------- */}
      <CtaSection />
    </div>
  );
}
