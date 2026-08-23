'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import CtaSection from '@/components/home/cta-section';
import HeroBackground from '@/components/common/hero-background';
import ScrollReveal from '@/components/common/scroll-reveal';
import {
  Rocket,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  Headphones,
  TrendingUp,
  CheckCircle,
  MoveRight,
  Code,
  Database,
  Cloud,
  Layers,
  Lightbulb,
  Building2,
  Vote,
  Store,
  Server,
  FileCode,
  Cpu,
  Container,
  Wind,
  GraduationCap,
  Stethoscope,
  Sun,
  Utensils,
  Home,
  Plane,
  HeartHandshake,
  Factory,
  Landmark,
  LayoutDashboard,
  ShoppingBag,
  Globe,
  MessageSquare,
  Bot,
  Calendar,
  FileText,
  BarChart3,
  CreditCard,
  Users,
  Share2,
  MapPin,
  Lock,
  IndianRupee,
  Clock,
  Activity,
  Zap,
  Check,
  Sparkles,
  CheckCircle2,
  Eye,
  ExternalLink,
  Play,
  ArrowRight,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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

export default function WebDevelopmentClient() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const [activeTemplateTab, setActiveTemplateTab] = useState<string>('all');
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100, opacity: 0 });

  const shaderCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const threeContainerRef = useRef<HTMLDivElement | null>(null);

  // Custom Cursor Glow Tracker
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY, opacity: 1 });
    };
    const handleMouseLeave = () => {
      setCursorPos((prev) => ({ ...prev, opacity: 0 }));
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // WebGL Shader Animation Effect
  useEffect(() => {
    const canvas = shaderCanvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    let animationFrameId: number;

    const syncSize = () => {
      const w = canvas.clientWidth || 1280;
      const h = canvas.clientHeight || 720;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };
    syncSize();

    const vs = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fs = `
      precision highp float;
      varying vec2 v_texCoord;
      uniform float u_time;
      uniform vec2 u_resolution;

      void main() {
        vec2 uv = v_texCoord;
        vec3 color1 = vec3(0.04, 0.04, 0.06); 
        vec3 color2 = vec3(0.38, 0.18, 0.80); 
        vec3 color3 = vec3(0.10, 0.35, 0.85); 

        float time = u_time * 0.35;
        float noise1 = sin(uv.x * 3.0 + time) * cos(uv.y * 2.0 - time * 0.5);
        float noise2 = sin(uv.y * 4.0 - time * 0.8) * cos(uv.x * 2.5 + time * 0.2);

        float mixFactor = (noise1 + noise2 + 2.0) / 4.0;
        mixFactor = smoothstep(0.25, 0.75, mixFactor);

        vec3 finalColor = mix(color1, mix(color2, color3, uv.y), mixFactor * 0.35);
        float glow = (sin(uv.x * 2.0 + time) * sin(uv.y * 2.0 + time)) * 0.06;
        finalColor += glow;

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    function createShader(type: number, src: string) {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    }

    const prog = gl.createProgram()!;
    gl.attachShader(prog, createShader(gl.VERTEX_SHADER, vs));
    gl.attachShader(prog, createShader(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const pos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes = gl.getUniformLocation(prog, 'u_resolution');

    const render = (t: number) => {
      syncSize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    };

    render(0);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Three.js Floating 3D Website Mockups Canvas
  useEffect(() => {
    const container = threeContainerRef.current;
    if (!container) return;

    let isSubscribed = true;
    let animId: number;

    const loadThreeScript = () => {
      if ((window as any).THREE) {
        initThree();
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://ajax.googleapis.com/ajax/libs/threejs/r125/three.min.js';
      script.onload = () => {
        if (isSubscribed) initThree();
      };
      document.body.appendChild(script);
    };

    const initThree = () => {
      const THREE = (window as any).THREE;
      if (!THREE || !container) return;

      container.innerHTML = '';
      const w = container.clientWidth || 500;
      const h = container.clientHeight || 500;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      const group = new THREE.Group();
      scene.add(group);

      const geometry = new THREE.PlaneGeometry(3.2, 2.1);
      const colors = [0x9333ea, 0x3b82f6, 0x06b6d4];

      for (let i = 0; i < 3; i++) {
        const material = new THREE.MeshPhongMaterial({
          color: colors[i],
          transparent: true,
          opacity: 0.85,
          side: THREE.DoubleSide,
          shininess: 90,
        });
        const card = new THREE.Mesh(geometry, material);
        card.position.set(i * 1.2 - 1.2, i * 0.45 - 0.45, -i * 0.8);
        card.rotation.y = -0.35 + i * 0.25;
        card.rotation.x = 0.1;
        group.add(card);
      }

      const light = new THREE.DirectionalLight(0xffffff, 1.2);
      light.position.set(5, 5, 5);
      scene.add(light);
      scene.add(new THREE.AmbientLight(0x404040, 1.5));

      camera.position.z = 4.8;

      let mouseX = 0;
      let mouseY = 0;
      const handleMouse = (e: MouseEvent) => {
        mouseX = e.clientX / window.innerWidth - 0.5;
        mouseY = e.clientY / window.innerHeight - 0.5;
      };
      window.addEventListener('mousemove', handleMouse);

      const animate = () => {
        if (!isSubscribed) return;
        animId = requestAnimationFrame(animate);

        const time = Date.now() * 0.0012;
        group.children.forEach((card: any, i: number) => {
          card.position.y += Math.sin(time + i * 1.5) * 0.0015;
          card.rotation.z += Math.cos(time + i * 1.2) * 0.0008;
        });

        group.rotation.y += (mouseX * 0.15 - group.rotation.y) * 0.05;
        group.rotation.x += (mouseY * 0.15 - group.rotation.x) * 0.05;

        renderer.render(scene, camera);
      };

      animate();
    };

    loadThreeScript();

    return () => {
      isSubscribed = false;
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  // 1. Why Choose Our WaaS Platform
  const waasPillars = [
    {
      icon: Rocket,
      title: 'Ready in 7–10 Days',
      description: 'Professional websites delivered quickly so your business goes online without delays.',
    },
    {
      icon: RefreshCw,
      title: 'Unlimited Updates',
      description: 'Need to change text, images, banners, or services? We handle it for you.',
    },
    {
      icon: ShieldCheck,
      title: 'Hosting & Security Included',
      description: 'SSL, daily backups, security monitoring, and reliable cloud hosting are included.',
    },
    {
      icon: Smartphone,
      title: 'Mobile & SEO Optimized',
      description: 'Fast-loading, responsive websites built to rank better on Google.',
    },
    {
      icon: Headphones,
      title: 'Dedicated Support',
      description: 'Our team manages your website while you focus on growing your business.',
    },
    {
      icon: TrendingUp,
      title: 'Built to Scale',
      description: 'Upgrade anytime with CRM, AI Chatbot, Appointment Booking, Lead Management, and more.',
    },
  ];

  // 2. Industry Marquee Items
  const marqueeItems = [
    'HOSPITAL',
    'SCHOOL',
    'SOLAR',
    'RESTAURANT',
    'TRAVEL',
    'NGO',
    'REAL ESTATE',
    'CORPORATE',
    'SAAS DASHBOARD',
    'E-COMMERCE',
  ];

  // 3. WaaS Templates Showcase
  const templateCategories = [
    { id: 'all', label: 'All Templates' },
    { id: 'business', label: 'Corporate & Business' },
    { id: 'hospital', label: 'Medical & Hospital' },
    { id: 'real-estate', label: 'Real Estate' },
    { id: 'ecommerce', label: 'E-Commerce & SaaS' },
  ];

  const templatesData = [
    {
      id: 1,
      category: 'business',
      title: 'Corporate Pro',
      subtitle: 'Sleek Dark Mode Corporate Portal',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBQIxvPbcY8Li-8x4meIAhb1KxOBOQgWVZ1eRgr_i-wxMRPEm0ExPOE66rZZAT_h8dHKrC6Z7i0raA2kO3EQuhH45ZTXl1p8Q9EQdslJN_M6yw8PjnRuFTRdSFI2-clGlxNOVgJ2RhEO_QrVFUVDdObXDYicAilg2FEpbGRRi4LqlJZmUtcuHiPoi9b473qbDWy8v6WX25D4DDOaQBTWVgUP57d-qYQPXwpPjq92yLGsh1xT7yOL-3d9A',
      tags: ['Corporate', 'Multi-Page', 'SEO Optimized'],
    },
    {
      id: 2,
      category: 'hospital',
      title: 'CarePoint Health',
      subtitle: 'Hospital & OPD Appointment Portal',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB2Ta15aDp_jvsnOaUdQ8i4cbFfjeP1LtI67insDHDYHOtDaK4e4CwNSNdrTyYPQCpHsZZTS429N0xbJ20RC5zPOsxT9Dvc3YkQpr6dgK7g9eyiLtMm2_RO0X-IkVASAy0hHkLF7jdLMxwM-38FBcNCYuGCAO_f7yWNhN8KO7S-zXGBvSm76_3j5Y_9_rm18GWyU59XSsoGvZPjiTnZTDUzkn3YHbl5tyjf929Dj7CFkqugZOPzaCCFSg',
      tags: ['Healthcare', 'Appointment Booking', 'Doctor Profiles'],
    },
    {
      id: 3,
      category: 'real-estate',
      title: 'Prime Estates',
      subtitle: 'Luxurious Real Estate & Villa Portal',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB8LyjDqUeUGVkO8CRKvaltu5CIUCdBI6HPY3A_gV5V7g_o6JsXtfeRFVF0AhkyhtinPawbscidU_nIRWVh2tGReGs3vrmuk1VEEIa6NkoaP_X0AT9xc1o2ST1awaFHvwm-buoEVwj3DbG1p0gAPIyjrHL6jNkWvgLsCxyt8BaLBVD2DC7W8_e4uiC2pCDE_-rSOJ-8d08h7C5T2tO8QJ5nN_xjJDJdYpUNtutVhK9OM9V7Gp-Qm1EDMg',
      tags: ['Real Estate', 'Property Catalog', 'Virtual Tours'],
    },
  ];

  const filteredTemplates =
    activeTemplateTab === 'all'
      ? templatesData
      : templatesData.filter((t) => t.category === activeTemplateTab);

  // 4. Our WaaS Solutions
  const waasSolutions = [
    { icon: Building2, title: 'Business Website', desc: 'Custom designs to represent your core brand & services.' },
    { icon: Landmark, title: 'Corporate Website', desc: 'High-trust multi-page portals for enterprises & organizations.' },
    { icon: GraduationCap, title: 'School & College Website', desc: 'Interactive portals for student admissions & notices.' },
    { icon: Stethoscope, title: 'Hospital & Clinic Website', desc: 'Doctor profiles, OPD schedules & patient inquiries.' },
    { icon: Sun, title: 'Solar Company Website', desc: 'Lead generation forms & ROI calculator integrations.' },
    { icon: Utensils, title: 'Restaurant Website', desc: 'Digital menus, table reservations & location finder.' },
    { icon: Home, title: 'Real Estate Website', desc: 'Property listings, virtual tours & inquiry captures.' },
    { icon: Plane, title: 'Travel Agency Website', desc: 'Tour packages, itinerary displays & booking forms.' },
    { icon: HeartHandshake, title: 'NGO Website', desc: 'Cause awareness, volunteer forms & donation info.' },
    { icon: LayoutDashboard, title: 'SaaS Dashboard', desc: 'Interactive web application UIs & customer portals.' },
    { icon: ShoppingBag, title: 'E-commerce Website', desc: 'Product catalogs, payment gateways & cart systems.' },
    { icon: Globe, title: 'Custom Business Portal', desc: 'Tailored web solutions for specialized business workflows.' },
  ];

  // 5. WaaS Pricing Plans
  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      badge: '🚀 Startup Ready',
      monthlyPrice: '₹799',
      yearlyPrice: '₹7,990',
      yearlyMonthlyEquivalent: '₹666',
      period: '/Month',
      billingNote: billingCycle === 'yearly' ? 'Billed annually (2 Months Free)' : 'Billed monthly',
      description: 'Perfect for startups, freelancers, and small businesses.',
      isPopular: false,
      includesHeading: 'Includes:',
      features: [
        '5 Pages Website',
        'Mobile Responsive',
        'Free SSL Certificate',
        'Free Cloud Hosting',
        'Contact Form',
        'WhatsApp Integration',
        'Basic SEO Optimization',
        'Monthly Maintenance',
      ],
      ctaText: 'Get Started',
      ctaHref: '/contact?service=WaaS-Starter-Plan',
    },
    {
      id: 'business',
      name: 'Business',
      badge: '⭐ Most Popular',
      monthlyPrice: '₹2,999',
      yearlyPrice: '₹29,990',
      yearlyMonthlyEquivalent: '₹2,499',
      period: '/Month',
      billingNote: billingCycle === 'yearly' ? 'Billed annually (2 Months Free)' : 'Billed monthly',
      description: 'Best for growing businesses that need more features and lead generation.',
      isPopular: true,
      includesHeading: 'Includes Everything in Starter +',
      features: [
        'Up to 20 Pages',
        'Admin Panel',
        'Blog Module',
        'Lead Management',
        'Appointment Booking',
        'Business Email Setup',
        'Advanced SEO Optimization',
        'Priority Technical Support',
      ],
      ctaText: 'Start Now',
      ctaHref: '/contact?service=WaaS-Business-Plan',
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      badge: '🏢 Custom Scale',
      monthlyPrice: 'Custom',
      yearlyPrice: 'Custom',
      yearlyMonthlyEquivalent: 'Tailored Quote',
      period: '',
      billingNote: 'Flexible billing options available',
      description: 'Fully customized enterprise-grade web solutions built for organizations with unique requirements.',
      isPopular: false,
      includesHeading: 'Includes Everything in Business +',
      features: [
        'Unlimited Pages',
        'Custom Admin Dashboard',
        'CRM Integration',
        'ERP/API Integration',
        'AI Chatbot Integration',
        'Automation Workflows',
        'Multi-User Roles & Permissions',
        'Enterprise Security & Compliance',
        'Dedicated Project Manager',
        'SLA Support Agreement',
      ],
      ctaText: 'Contact Sales',
      ctaHref: '/contact?service=WaaS-Enterprise-Plan',
    },
  ];

  // 6. What's Included
  const whatsIncluded = [
    { name: 'Premium Responsive Website', desc: 'Pixel-perfect across all mobile, tablet & desktop devices.' },
    { name: 'Free SSL Certificate', desc: 'HTTPS encryption to protect user data & boost trust.' },
    { name: 'Cloud Hosting', desc: 'High-speed, high-availability server hosting included.' },
    { name: 'Free .in Domain*', desc: 'Complimentary domain registration for your brand.' },
    { name: 'Business Email Setup', desc: 'Professional domain emails (e.g., info@yourbrand.in).' },
    { name: 'Admin Dashboard', desc: 'User-friendly interface to manage your content effortlessly.' },
    { name: 'Contact Forms', desc: 'Custom lead capture forms with email & SMS notifications.' },
    { name: 'WhatsApp Integration', desc: 'Click-to-chat button for direct customer inquiries.' },
    { name: 'Google Maps Integration', desc: 'Embedded interactive location map for your office.' },
    { name: 'SEO Ready Pages', desc: 'Structured schema, meta tags & speed-optimized code.' },
    { name: 'Speed Optimization', desc: 'Blazing fast load times for maximum conversion.' },
    { name: 'Monthly Maintenance', desc: 'Regular software patches, backups & health monitoring.' },
    { name: 'Technical Support', desc: 'Dedicated help desk support for uninterrupted operation.' },
  ];

  // 7. How It Works
  const processSteps = [
    {
      step: '01',
      title: 'Choose Your Plan',
      description: 'Select the website package that best suits your business goals and budget.',
    },
    {
      step: '02',
      title: 'Share Your Business Details',
      description: 'Send your logo, company information, images, and service details to our team.',
    },
    {
      step: '03',
      title: 'Website Development',
      description: 'Our expert developers build your custom, responsive website within 7–10 business days.',
    },
    {
      step: '04',
      title: 'Review & Go Live',
      description: 'Review your website draft, request any tweaks, and approve final launch.',
    },
    {
      step: '05',
      title: 'Continuous Support',
      description: 'We maintain, update, secure, and continuously optimize your website every month.',
    },
  ];

  // 8. Smart Features
  const smartFeatures = [
    { icon: Users, name: 'Lead Management', desc: 'Capture, categorize & track customer leads easily.' },
    { icon: Calendar, name: 'Appointment Booking', desc: 'Automated scheduling system for clients & patients.' },
    { icon: MessageSquare, name: 'WhatsApp Chat', desc: 'Instant 1-click messaging for quick inquiries.' },
    { icon: Bot, name: 'AI Chatbot', desc: '24/7 automated assistance to convert visitors into buyers.' },
    { icon: FileText, name: 'Inquiry Forms', desc: 'Dynamic forms configured for specific service inquiries.' },
    { icon: Layers, name: 'Blog Management', desc: 'Publish SEO articles & news updates hassle-free.' },
    { icon: LayoutDashboard, name: 'Admin Panel', desc: 'Intuitive centralized hub to manage content & settings.' },
    { icon: BarChart3, name: 'Analytics Dashboard', desc: 'Track visitor traffic, page views & conversions.' },
    { icon: MapPin, name: 'Google Maps', desc: 'Help local customers locate your physical branch.' },
    { icon: Share2, name: 'Social Media Integration', desc: 'Connect Instagram, LinkedIn, Facebook & YouTube.' },
    { icon: CreditCard, name: 'Payment Gateway', desc: 'Accept online payments safely via UPI, Cards & NetBanking.' },
    { icon: Database, name: 'CRM Integration', desc: 'Seamlessly sync website leads into your CRM.' },
  ];

  // 9. Technologies Behind Our Platform
  const technologies = [
    { name: 'React.js & Next.js', icon: Code },
    { name: 'Node.js', icon: Server },
    { name: 'Laravel', icon: Layers },
    { name: 'PHP', icon: FileCode },
    { name: 'Python', icon: Cpu },
    { name: 'MySQL & PostgreSQL', icon: Database },
    { name: 'MongoDB', icon: Database },
    { name: 'Docker', icon: Container },
    { name: 'AWS', icon: Cloud },
    { name: 'Google Cloud', icon: Cloud },
    { name: 'Tailwind CSS', icon: Wind },
    { name: 'REST API', icon: Code },
    { name: 'AI Automation', icon: Bot },
  ];

  // 10. Target Industries
  const targetSegments = [
    { icon: Store, name: 'Small Businesses' },
    { icon: Rocket, name: 'Startups' },
    { icon: GraduationCap, name: 'Schools & Colleges' },
    { icon: Stethoscope, name: 'Hospitals & Clinics' },
    { icon: Utensils, name: 'Restaurants & Cafes' },
    { icon: Sun, name: 'Solar Companies' },
    { icon: Plane, name: 'Travel Agencies' },
    { icon: Home, name: 'Real Estate Companies' },
    { icon: HeartHandshake, name: 'NGOs' },
    { icon: Vote, name: 'Political Organizations' },
    { icon: Factory, name: 'Manufacturing Companies' },
    { icon: Building2, name: 'Corporate Enterprises' },
  ];

  // 11. Why Businesses Choose WaaS
  const whyChooseWaas = [
    {
      icon: IndianRupee,
      title: 'Affordable Monthly Pricing',
      desc: 'No large upfront development cost. Pay a small manageable monthly fee.',
    },
    {
      icon: Zap,
      title: 'Faster Launch',
      desc: 'Go live in just 7–10 days with a fully polished website.',
    },
    {
      icon: RefreshCw,
      title: 'Ongoing Website Updates',
      desc: 'Your website stays fresh and up to date without extra developer charges.',
    },
    {
      icon: ShieldCheck,
      title: 'Security & Maintenance Included',
      desc: 'No need to hire a separate developer or sysadmin to manage servers.',
    },
    {
      icon: Headphones,
      title: 'Dedicated Technical Support',
      desc: 'Professional support whenever you need help or modifications.',
    },
    {
      icon: TrendingUp,
      title: 'Easily Upgrade Anytime',
      desc: 'Add new pages, automation, CRM, or AI features as your business grows.',
    },
  ];

  // 12. Results Stats
  const resultsStats = [
    { value: '500+', label: 'Websites Delivered' },
    { value: '7–10 Days', label: 'Average Launch' },
    { value: '99.9%', label: 'Cloud Uptime' },
    { value: '24×7', label: 'Technical Support' },
  ];

  return (
    <div className="bg-[#f3f4f6] text-slate-900 font-inter antialiased min-h-screen relative overflow-hidden">
      
      {/* Vertical Pinstripes Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="waas-pinstripes" width="48" height="100%" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="#cbd5e1" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#waas-pinstripes)" />
        </svg>
      </div>

      {/* Hero Section - 3D Isometric Dark Pattern */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-[#050505] text-white border-b border-slate-800/80 overflow-hidden">
        <HeroBackground />
        <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
          {/* Floating Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/90 px-4 py-1.5 text-xs font-semibold text-slate-200 shadow-2xs mb-6 mx-auto">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            <span>Website as a Service (WaaS)</span>
          </div>

          {/* Big Centered Headline */}
          <h1 className="font-soehne text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.2] mb-6">
            Launch your business website without high upfront costs
          </h1>

          {/* Centered Description */}
          <p className="font-inter text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal mb-8">
            Professional enterprise websites with cloud hosting, continuous maintenance, updates, security, and dedicated technical support—all in one affordable subscription.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <Button
              asChild
              size="lg"
              className="h-13 px-8 text-sm font-bold bg-slate-950 hover:bg-slate-800 text-white rounded-full shadow-lg transition-all"
            >
              <Link href="/contact?service=WaaS">
                Get Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <div className="rounded-full border border-red-200 bg-red-50 px-5 py-2.5 text-xs font-bold text-red-700">
              Starts from ₹799/Month
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- TRUSTED INDUSTRY MARQUEE -------------------- */}
      <section className="py-10 border-y border-slate-200 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 mb-4 text-center">
          <p className="font-inter text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
            Powering Businesses Across Industries
          </p>
        </div>

        <div className="w-full overflow-hidden whitespace-nowrap relative flex">
          <div className="animate-marquee flex gap-16 items-center py-2 shrink-0">
            {marqueeItems.concat(marqueeItems).map((item, idx) => (
              <span
                key={idx}
                className="font-soehne text-2xl sm:text-3xl font-light text-slate-800 tracking-[-0.03em] hover:text-red-600 transition-colors cursor-pointer"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- WHY CHOOSE OUR WAAS PLATFORM -------------------- */}
      <section className="py-8 md:py-11 border-b border-slate-200 bg-[#f3f4f6]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-6">
            <Badge variant="outline" className="mb-4 border-red-300 text-red-700 bg-red-50/80">
              Why Choose WaaS.bau
            </Badge>
            <h2 className="font-soehne text-base sm:text-xl lg:text-2xl font-bold tracking-tight text-slate-950">
              Why Choose Our WaaS Platform
            </h2>
            <p className="font-inter mt-2 text-slate-700 text-xs sm:text-sm max-w-2xl mx-auto">
              Everything your business needs to establish, maintain, and scale its digital presence without high upfront agency costs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {waasPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  <pillar.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-soehne text-xs sm:text-sm font-bold text-slate-950">{pillar.title}</h3>
                <p className="font-inter mt-2 text-[10px] text-slate-600 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- PRICING SECTION (MONTHLY / YEARLY) -------------------- */}
      <section id="waas-pricing" className="py-8 md:py-11 relative bg-[#f8fafc] scroll-mt-16 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-6">
            <Badge variant="outline" className="mb-4 border-red-300 text-red-700 bg-red-50/80">
              Transparent Managed Pricing
            </Badge>
            <h2 className="font-soehne text-base sm:text-xl lg:text-2xl font-bold tracking-tight text-slate-950">
              Website as a Service (WaaS) for Every Business
            </h2>
            <p className="font-inter mt-2 text-slate-700 text-xs sm:text-sm">
              Launch your professional business website with hosting, maintenance, security, updates, and dedicated support—all in one affordable monthly subscription.
            </p>

            {/* Monthly / Yearly Toggle */}
            <div className="mt-6 inline-flex items-center rounded-full border border-slate-200 bg-white p-1.5 shadow-xs">
              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                className={cn(
                  'rounded-full px-5 py-2 text-xs font-bold transition-all',
                  billingCycle === 'monthly'
                    ? 'bg-red-600 text-white shadow-md'
                    : 'text-slate-700 hover:text-slate-900'
                )}
              >
                Monthly Billing
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle('yearly')}
                className={cn(
                  'relative rounded-full px-5 py-2 text-xs font-bold transition-all flex items-center gap-2',
                  billingCycle === 'yearly'
                    ? 'bg-red-600 text-white shadow-md'
                    : 'text-slate-700 hover:text-slate-900'
                )}
              >
                <span>Yearly Billing</span>
                <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-800">
                  2 Months FREE 🎉
                </span>
              </button>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={cn(
                  'relative flex flex-col justify-between rounded-2xl border p-6 transition-all duration-300 hover:shadow-xl',
                  plan.isPopular
                    ? 'border-red-500 bg-white shadow-xl ring-2 ring-red-500/20'
                    : 'border-slate-200 bg-white hover:border-red-500/30'
                )}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-red-600 px-4 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  {!plan.isPopular && (
                    <div className="inline-block rounded-full bg-red-50 border border-red-100 px-3 py-0.5 text-[10px] font-bold text-red-700 mb-3">
                      {plan.badge}
                    </div>
                  )}

                  <h3 className="font-soehne text-xs sm:text-sm font-bold text-slate-950 mt-1">{plan.name}</h3>
                  <p className="font-inter mt-1 text-[10px] text-slate-600 leading-relaxed">{plan.description}</p>

                  <div className="my-4 border-y border-slate-200 py-4">
                    <div className="flex items-baseline gap-1">
                      <span className="font-soehne text-2xl font-bold text-slate-950">
                        {plan.id === 'enterprise'
                          ? 'Custom Pricing'
                          : billingCycle === 'yearly'
                          ? plan.yearlyMonthlyEquivalent
                          : plan.monthlyPrice}
                      </span>
                      {plan.id !== 'enterprise' && (
                        <span className="font-inter text-xs text-slate-600 font-medium">{plan.period}</span>
                      )}
                    </div>

                    <p className="font-inter mt-1 text-[10px] font-semibold text-red-600">
                      {plan.id === 'enterprise'
                        ? plan.billingNote
                        : billingCycle === 'yearly'
                        ? `${plan.yearlyPrice} / year (Pay 10 months, get 12 months!)`
                        : plan.billingNote}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <p className="font-inter text-[10px] font-bold uppercase tracking-wider text-slate-900">
                      {plan.includesHeading}
                    </p>
                    <ul className="space-y-2">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2 text-[10px] text-slate-700 font-inter">
                          <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 text-red-600 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-2">
                  <Button
                    asChild
                    size="lg"
                    className={cn(
                      'w-full font-bold h-12 text-xs uppercase tracking-wider transition-all rounded-none',
                      plan.isPopular
                        ? 'bg-red-600 hover:bg-red-700 text-white shadow-md'
                        : 'border-slate-200 bg-white text-slate-900 hover:bg-slate-50'
                    )}
                    variant={plan.isPopular ? 'default' : 'outline'}
                  >
                    <Link href={plan.ctaHref}>
                      {plan.ctaText} <MoveRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- TEMPLATES GALLERY SECTION -------------------- */}
      <section id="templates" className="py-8 md:py-11 bg-[#f3f4f6] relative scroll-mt-16 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-6">
            <Badge variant="outline" className="mb-4 border-red-300 text-red-700 bg-red-50/80">
              Industry Ready Foundations
            </Badge>
            <h2 className="font-soehne text-base sm:text-xl lg:text-2xl font-bold tracking-tight text-slate-950">
              Premium Industry Templates
            </h2>
            <p className="font-inter mt-2 text-slate-700 text-xs sm:text-sm">
              Start with a stunning foundation tailored to your specific sector.
            </p>

            {/* Filter Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {templateCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTemplateTab(cat.id)}
                  className={cn(
                    'px-4 py-1.5 rounded-full font-bold text-xs transition-all border',
                    activeTemplateTab === cat.id
                      ? 'bg-red-600 text-white border-red-600 shadow-md'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Template Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((tpl) => (
              <div
                key={tpl.id}
                className="group relative rounded-2xl border border-slate-200 bg-white p-3 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:shadow-xl"
              >
                <div className="relative h-[260px] w-full rounded-xl overflow-hidden bg-slate-900">
                  <img
                    src={tpl.image}
                    alt={tpl.title}
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="font-soehne text-sm font-bold text-white">{tpl.title}</h3>
                    <p className="font-inter text-[10px] text-neutral-300 mt-0.5">{tpl.subtitle}</p>

                    <div className="flex flex-wrap gap-1.5 my-3">
                      {tpl.tags.map((t) => (
                        <span key={t} className="rounded-full bg-white/20 px-2.5 py-0.5 text-[9px] font-bold text-white backdrop-blur-md">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-1">
                      <Button asChild size="sm" className="bg-red-600 hover:bg-red-700 text-white rounded-none h-8 text-[10px] uppercase font-bold">
                        <Link href="/contact?service=WaaS-Template-Preview">
                          Live Preview <Eye className="ml-1.5 h-3.5 w-3.5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-3 flex items-center justify-between">
                  <div>
                    <h4 className="font-soehne text-xs font-bold text-slate-950">{tpl.title}</h4>
                    <p className="font-inter text-[10px] text-slate-600">{tpl.subtitle}</p>
                  </div>
                  <span className="font-inter text-[10px] font-bold text-red-700 bg-red-50 px-2.5 py-0.5 rounded-full border border-red-200">
                    Included
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- OUR WAAS SOLUTIONS -------------------- */}
      <section className="py-8 md:py-11 bg-[#f3f4f6] relative border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-6">
            <Badge variant="outline" className="mb-4 border-red-300 text-red-700 bg-red-50/80">
              Tailored Packages
            </Badge>
            <h2 className="font-soehne text-base sm:text-xl lg:text-2xl font-bold tracking-tight text-slate-950">
              Our WaaS Solutions
            </h2>
            <p className="font-inter mt-2 text-slate-700 text-xs sm:text-sm">
              Choose a website package that fits your business needs perfectly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {waasSolutions.map((sol) => (
              <div
                key={sol.title}
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-red-500/50 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                    <sol.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-soehne text-xs sm:text-sm font-bold text-slate-950">{sol.title}</h3>
                  <p className="font-inter mt-2 text-[10px] text-slate-600 leading-relaxed">{sol.desc}</p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-200 flex items-center justify-between text-[10px] font-bold text-red-600 uppercase tracking-wider">
                  <span>Managed Subscription</span>
                  <MoveRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- WHAT'S INCLUDED -------------------- */}
      <section className="py-8 md:py-11 bg-[#f3f4f6] relative border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-6">
            <Badge variant="outline" className="mb-4 border-red-300 text-red-700 bg-red-50/80">
              All-Inclusive Deliverables
            </Badge>
            <h2 className="font-soehne text-base sm:text-xl lg:text-2xl font-bold tracking-tight text-slate-950">What's Included</h2>
            <p className="font-inter mt-2 text-slate-700 text-xs sm:text-sm">
              Every subscription includes everything you need to run a successful online business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatsIncluded.map((item) => (
              <div key={item.name} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-red-500/30 transition-all">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 mt-0.5">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-soehne text-xs sm:text-sm font-bold text-slate-950">{item.name}</h3>
                  <p className="font-inter mt-1 text-[10px] text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- HOW IT WORKS -------------------- */}
      <section className="py-8 md:py-11 bg-[#f3f4f6] relative border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-6">
            <Badge variant="outline" className="mb-4 border-red-300 text-red-700 bg-red-50/80">
              Simple 5-Step Process
            </Badge>
            <h2 className="font-soehne text-base sm:text-xl lg:text-2xl font-bold tracking-tight text-slate-950">How It Works</h2>
            <p className="font-inter mt-2 text-slate-700 text-xs sm:text-sm">
              From plan selection to continuous monthly updates, we make web design simple and stress-free.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-red-200 -translate-x-1/2" />
            <div className="space-y-6 lg:space-y-8">
              {processSteps.map((stepItem, index) => (
                <div
                  key={stepItem.step}
                  className={cn(
                    'relative flex flex-col lg:flex-row items-center gap-6',
                    index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                  )}
                >
                  <div className="w-full lg:w-1/2">
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all duration-300 hover:border-red-500/40 relative overflow-hidden">
                      <span className="font-soehne text-5xl font-bold text-slate-200/50 absolute top-2 right-4">
                        {stepItem.step}
                      </span>
                      <div className="relative z-10">
                        <div className="inline-flex items-center justify-center rounded-lg bg-red-50 px-2.5 py-0.5 text-[10px] font-bold text-red-700 mb-2">
                          Step {stepItem.step}
                        </div>
                        <h3 className="font-soehne text-xs sm:text-sm font-bold text-slate-950">{stepItem.title}</h3>
                        <p className="font-inter mt-1.5 text-[10px] text-slate-600 leading-relaxed">{stepItem.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="hidden lg:flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white font-bold text-xs shadow-md z-10 shrink-0">
                    {stepItem.step}
                  </div>

                  <div className="w-full lg:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- SMART FEATURES -------------------- */}
      <section className="py-8 md:py-11 bg-[#f3f4f6] border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-6">
            <Badge variant="outline" className="mb-4 border-red-300 text-red-700 bg-red-50/80">
              Advanced Capabilities
            </Badge>
            <h2 className="font-soehne text-base sm:text-xl lg:text-2xl font-bold tracking-tight text-slate-950">Smart Features</h2>
            <p className="font-inter mt-2 text-slate-700 text-xs sm:text-sm">
              Power up your website with smart tools designed to capture leads, automate workflows, and boost conversions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {smartFeatures.map((feature) => (
              <div
                key={feature.name}
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-red-500/40 hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-soehne text-xs sm:text-sm font-bold text-slate-950">{feature.name}</h3>
                <p className="font-inter mt-1.5 text-[10px] text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- TECHNOLOGIES BEHIND OUR PLATFORM -------------------- */}
      <section className="py-8 md:py-11 bg-[#f3f4f6] border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <div className="max-w-3xl mx-auto mb-6">
            <Badge variant="outline" className="mb-4 border-red-300 text-red-700 bg-red-50/80">
              Battle-Tested Tech Stack
            </Badge>
            <h2 className="font-soehne text-base sm:text-xl lg:text-2xl font-bold tracking-tight text-slate-950">
              Technologies Behind Our Platform
            </h2>
            <p className="font-inter mt-2 text-slate-700 text-xs sm:text-sm">
              We leverage modern, secure, and battle-tested frameworks to deliver lightning-fast digital solutions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-5 py-2.5 hover:border-red-500/40 transition-all"
              >
                <tech.icon className="h-4 w-4 text-red-600" />
                <span className="font-inter font-bold text-xs text-slate-900">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- TARGET INDUSTRIES -------------------- */}
      <section className="py-8 md:py-11 bg-[#f3f4f6] border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-6">
            <Badge variant="outline" className="mb-4 border-red-300 text-red-700 bg-red-50/80">
              Target Industries
            </Badge>
            <h2 className="font-soehne text-base sm:text-xl lg:text-2xl font-bold tracking-tight text-slate-950">Perfect For</h2>
            <p className="font-inter mt-2 text-slate-700 text-xs sm:text-sm">
              Our Website as a Service platform is designed for growing businesses across diverse industries.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {targetSegments.map((segment) => (
              <div
                key={segment.name}
                className="flex flex-col items-center justify-center p-6 rounded-2xl border border-slate-200 bg-white text-center hover:border-red-500/40 transition-all group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all">
                  <segment.icon className="h-6 w-6" />
                </div>
                <h3 className="font-inter mt-3 font-bold text-[10px] text-slate-900">{segment.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- WHY BUSINESSES CHOOSE WAAS -------------------- */}
      <section className="py-8 md:py-11 bg-[#f3f4f6] border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-6">
            <Badge variant="outline" className="mb-4 border-red-300 text-red-700 bg-red-50/80">
              Strategic Advantages
            </Badge>
            <h2 className="font-soehne text-base sm:text-xl lg:text-2xl font-bold tracking-tight text-slate-950">
              Why Businesses Choose WaaS
            </h2>
            <p className="font-inter mt-2 text-slate-700 text-xs sm:text-sm">
              Switching from traditional custom agency builds to Website as a Service offers tangible business advantages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseWaas.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-red-500/40 transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 mb-4">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-soehne text-xs sm:text-sm font-bold text-slate-950">{item.title}</h3>
                <p className="font-inter mt-2 text-[10px] text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- RESULTS STATS BAR -------------------- */}
      <section className="bg-white text-slate-950 py-10 relative overflow-hidden border-y border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="font-soehne text-base sm:text-xl lg:text-2xl font-bold tracking-tight text-slate-950">Results Businesses Can Expect</h2>
            <p className="font-inter mt-1.5 text-slate-700 text-xs sm:text-sm font-normal">Guaranteed SLAs and performance metrics for every subscription.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {resultsStats.map((stat) => (
              <div key={stat.label} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <p className="font-soehne text-3xl sm:text-4xl font-bold tracking-tight text-red-600">{stat.value}</p>
                <p className="font-inter mt-2 text-[10px] font-bold text-slate-700 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- FINAL CTA SECTION -------------------- */}
      <CtaSection
        badgeText="Let's Collaborate"
        title="Ready to Launch Your Website & Grow Your Business?"
        description="Choose the perfect website or custom platform solution and let our expert engineers handle development, hosting, security, and ongoing support."
        primaryCtaText="Start Project"
        primaryCtaLink="/contact?service=WaaS-FinalCTA"
        secondaryCtaText="Book Discovery Call"
        secondaryCtaLink="https://wa.me/919532758070"
      />
    </div>
  );
}
