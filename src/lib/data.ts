import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';
import {
  Briefcase,
  Code2,
  Cpu,
  LineChart,
  PenTool,
  Rocket,
  Search,
  Smartphone,
  Users,
  Vote,
} from 'lucide-react';

const findImage = (id: string): ImagePlaceholder => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    // Fallback image if not found
    return {
      id: 'fallback',
      description: 'Fallback image',
      imageUrl: 'https://picsum.photos/seed/fallback/600/400',
      imageHint: 'abstract',
    };
  }
  return image;
};

export const navLinks = [
  {
    href: '/services',
    label: 'Services',
    isMegaMenu: true,
  },
  { href: '/about', label: 'About' },
  { href: '/works', label: 'Works' },
  { href: '/insides', label: 'Insights' },
  { href: '/industries', label: 'Industries' },
];

export const trustLogos = [
  { name: 'InnovateX' },
  { name: 'QuantumLeap' },
  { name: 'Stellar Solutions' },
  { name: 'Apex Enterprises' },
  { name: 'Nexus Dynamics' },
];

export const services = [
  {
    slug: 'web-development',
    title: 'Web Development',
    description: 'We build high-performance, secure, and scalable websites that drive business growth. Our solutions are tailored to your specific needs, from corporate sites to complex SaaS platforms.',
    icon: Code2,
    details: [
      'Corporate websites & Portals',
      'E-commerce platforms',
      'SaaS products & Dashboards',
      'CMS & API Development',
    ],
    imageId: 'service-web-dev',
  },
  {
    slug: 'app-development',
    title: 'App Development',
    description: 'From concept to launch, we create engaging and intuitive mobile applications for iOS and Android. Our apps are built for performance, scalability, and an exceptional user experience.',
    icon: Smartphone,
    details: ['Native iOS & Android Apps', 'Cross-platform Development', 'App Maintenance & Support'],
    imageId: 'service-app-dev',
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Our design process is centered around your users. We craft beautiful, functional, and user-friendly interfaces that not only look great but also drive engagement and conversions.',
    icon: PenTool,
    details: ['User Research & Personas', 'Wireframing & Prototyping', 'Intuitive UI Design', 'Usability Testing'],
    imageId: 'service-ui-ux',
  },
  {
    slug: 'digital-marketing',
    title: 'Digital & Performance Marketing',
    description: 'We run data-driven marketing campaigns that deliver measurable results. Our strategies are designed to increase your visibility, attract qualified leads, and maximize your ROI.',
    icon: LineChart,
    details: [
      'Social Media Marketing',
      'Paid Advertising (PPC)',
      'Content Marketing & Strategy',
      'Conversion Rate Optimization',
    ],
    imageId: 'service-digital-marketing',
  },
  {
    slug: 'seo-optimization',
    title: 'SEO & Optimization',
    description: 'Climb the search rankings and connect with your audience. We use proven SEO techniques to increase your organic traffic, enhance your online presence, and boost your credibility.',
    icon: Search,
    details: ['On-Page & Technical SEO', 'Keyword Research & Strategy', 'Link Building', 'Performance Audits'],
    imageId: 'service-seo',
  },
  {
    slug: 'ai-automation',
    title: 'AI & Automation',
    description: 'Leverage the power of Artificial Intelligence to automate processes, gain insights, and create smarter products. We build custom AI solutions that give you a competitive edge.',
    icon: Cpu,
    details: ['Custom AI/ML Models', 'AI-powered Chatbots', 'Business Process Automation', 'Data Analytics'],
    imageId: 'service-ai',
  },
  {
    slug: 'political-campaigning',
    title: 'Political Campaigning with AI',
    description: 'Winning elections in the digital age requires data-driven precision. We use AI to analyze voter sentiment, predict trends, and optimize campaign outreach for maximum impact.',
    icon: Vote,
    details: ['Voter Sentiment Analysis', 'AI-driven Ad Targeting', 'Narrative Monitoring', 'Digital Outreach Strategy'],
    imageId: 'service-political'
  }
];

export const whyChooseUs = [
  {
    title: 'Result-Oriented Approach',
    description: 'We focus on delivering measurable results that align with your business goals.',
    icon: LineChart,
  },
  {
    title: 'Expert Team',
    description: 'Our team of certified professionals is dedicated to your project\'s success.',
    icon: Users,
  },
  {
    title: 'Innovative Technology',
    description: 'We leverage the latest technologies to build future-proof solutions.',
    icon: Cpu,
  },
  {
    title: 'Transparent Communication',
    description: 'We believe in clear, honest, and continuous communication with our clients.',
    icon: PenTool,
  },
];

export const stats = [
  { value: '2+', label: 'Years of Experience' },
  { value: '5+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '3+', label: 'Industries Served' },
];

export const portfolioProjects = [
  {
    slug: 'ada-chikankari',
    title: 'ADA Chikankari',
    description: 'Luxury e-commerce platform for a premium fashion brand.',
    category: 'E-commerce',
    industry: 'Fashion',
    clientGoal: '',
    solution: '',
    technologies: [],
    results: '200% increase in online sales.',
    image: findImage('portfolio-ada-chikankari'),
  },
  {
    slug: 'ai-crm',
    title: 'AI Sales Forecasting CRM',
    description: 'Intelligent CRM with predictive sales analytics and forecasting.',
    category: 'AI Tool',
    industry: 'SaaS',
    clientGoal: '',
    solution: '',
    technologies: [],
    results: '40% improvement in forecast accuracy.',
    image: findImage('portfolio-ai-crm'),
  },
  {
    slug: 'rozana',
    title: 'ROZANA Rural Commerce',
    description: 'Mobile-first platform connecting rural consumers with local retailers.',
    category: 'Mobile App',
    industry: 'E-commerce',
    clientGoal: '',
    solution: '',
    technologies: [],
    results: 'Onboarded 10,000+ users in 6 months.',
    image: findImage('portfolio-rozana'),
  },
  {
    slug: 'yalla-drive',
    title: 'Yalla Drive Car Rental',
    description: 'A seamless car booking app for the Dubai market.',
    category: 'Mobile App',
    industry: 'Travel',
    clientGoal: '',
    solution: '',
    technologies: [],
    results: 'Top-rated car rental app in Dubai.',
    image: findImage('portfolio-yalla-drive'),
  },
  {
    slug: 'enterprise-erp',
    title: 'B2B Enterprise ERP',
    description: 'Complex ERP system for managing large-scale business operations.',
    category: 'SaaS',
    industry: 'Manufacturing',
    clientGoal: '',
    solution: '',
    technologies: [],
    results: 'Streamlined operations by 35%.',
    image: findImage('portfolio-enterprise-erp'),
  },
  {
    slug: 'gramik-pos',
    title: 'Gramik Agri-Tech POS',
    description: 'Digital point-of-sale system for agricultural supply chains.',
    category: 'Web App',
    industry: 'Agriculture',
    clientGoal: '',
    solution: '',
    technologies: [],
    results: 'Digitized 500+ small agri-businesses.',
    image: findImage('portfolio-gramik-pos'),
  },
  {
    slug: 'healthtech-dashboard',
    title: 'HealthTech Dashboard',
    description: 'A clean medical dashboard for monitoring patient vitals.',
    category: 'SaaS',
    industry: 'Healthcare',
    clientGoal: '',
    solution: '',
    technologies: [],
    results: 'Improved patient monitoring efficiency.',
    image: findImage('portfolio-healthtech'),
  },
  {
    slug: 'seo-growth',
    title: '300% SEO Growth',
    description: 'Comprehensive SEO strategy delivering exponential organic traffic growth.',
    category: 'SEO',
    industry: 'Marketing',
    clientGoal: '',
    solution: '',
    technologies: [],
    results: '300% organic traffic increase in 6 months.',
    image: findImage('portfolio-seo-growth'),
  },
  {
    slug: 'ai-chatbot',
    title: 'AI Customer Support Chatbot',
    description: 'An intelligent chatbot for automating customer interactions.',
    category: 'AI Tool',
    industry: 'Customer Service',
    clientGoal: '',
    solution: '',
    technologies: [],
    results: 'Reduced support ticket volume by 50%.',
    image: findImage('portfolio-ai-chatbot'),
  },
];


export const blogPosts = [
  {
    slug: 'top-5-tech-trends-2026',
    title: 'Top 5 Tech Trends to Watch in 2026',
    category: 'Web & App Trends',
    date: '2026-07-15',
    author: 'John Doe',
    image: findImage('blog-tech-trends'),
    content: `As we move further into the digital age, technology continues to evolve at an unprecedented pace. In 2026, several key trends are set to redefine industries and change how we interact with the world. First, the expansion of the Internet of Things (IoT) will connect everything from our homes to our cities, creating a seamless web of data and automation. Second, advancements in quantum computing will unlock new possibilities in fields like medicine and finance, solving problems previously thought unsolvable. Third, hyper-automation, powered by AI and machine learning, will streamline business processes on a massive scale, increasing efficiency and reducing human error. Fourth, the metaverse will mature from a niche concept to a more integrated part of our digital lives, offering new platforms for work, socializing, and entertainment. Finally, the focus on sustainable technology will grow, with innovations aimed at reducing the environmental impact of our digital footprint. Staying ahead of these trends is crucial for any business looking to thrive.`,
  },
  {
    slug: 'ai-in-business-a-game-changer',
    title: 'AI in Business: More Than Just a Buzzword',
    category: 'AI & Automation',
    date: '2026-06-28',
    author: 'Jane Smith',
    image: findImage('blog-ai-business'),
    content: `Artificial Intelligence (AI) has transitioned from a futuristic concept to a practical tool that is reshaping the business landscape. Its impact is felt across all sectors, from automating mundane tasks to providing deep, data-driven insights. One of the most significant applications of AI is in customer service, where chatbots and virtual assistants offer 24/7 support, improving customer satisfaction and freeing up human agents for more complex issues. In marketing, AI algorithms analyze consumer behavior to deliver personalized experiences and predict future trends, leading to more effective campaigns. Furthermore, AI is revolutionizing supply chain management by optimizing logistics, predicting demand, and identifying potential disruptions before they occur. The key to successfully integrating AI is to identify specific business challenges that it can solve, rather than adopting it for technology's sake. Businesses that strategically leverage AI will gain a significant competitive advantage.`,
  },
  {
    slug: 'crafting-effective-marketing-strategies',
    title: 'The Art of Crafting Marketing Strategies That Convert',
    category: 'Digital & Performance Marketing',
    date: '2026-05-10',
    author: 'Alex Johnson',
    image: findImage('blog-marketing-strategies'),
    content: `In a crowded digital marketplace, a well-crafted marketing strategy is what separates successful brands from the rest. The foundation of any effective strategy is a deep understanding of the target audience. This involves creating detailed buyer personas based on demographics, psychographics, and behavior. Once you know who you're talking to, the next step is to define your unique value proposition (UVP). What makes your product or service different and better than the competition? This UVP should be at the core of all your messaging. A multi-channel approach is also essential. Relying on a single channel is risky; a mix of SEO, content marketing, social media, and paid advertising creates a more resilient and far-reaching strategy. Finally, every strategy must be measurable. Set clear Key Performance Indicators (KPIs) and use analytics tools to track your progress, allowing you to iterate and optimize your campaigns for better results over time.`,
  },
  {
    slug: 'ai-in-political-campaigns',
    title: 'The New Frontier: AI in Political Campaigning',
    category: 'Political Campaign Intelligence',
    date: '2026-07-20',
    author: 'Elena Petrov',
    image: findImage('service-political'),
    content: `Artificial intelligence is revolutionizing political campaigns by enabling unprecedented levels of voter targeting, sentiment analysis, and message personalization. Campaigns can now analyze vast datasets to understand voter behavior and predict election outcomes with greater accuracy. AI-driven tools monitor social media for real-time sentiment, allowing campaigns to respond instantly to emerging narratives and counter misinformation. Furthermore, automated systems can optimize ad spend across digital platforms, ensuring that every dollar is used to its maximum potential. This data-driven approach allows for hyper-targeted outreach, delivering specific messages to key demographics. While the ethical implications are still being debated, there is no denying that AI is a powerful tool that is here to stay in the world of politics.`,
  },
];

export const industries = [
  { name: 'Startups', icon: Rocket },
  { name: 'E-commerce', icon: Briefcase },
  { name: 'Education', icon: Users },
  { name: 'Healthcare', icon: Users },
  { name: 'Finance', icon: LineChart },
  { name: 'Real Estate', icon: Briefcase },
  { name: 'Manufacturing', icon: Cpu },
  { name: 'Agencies', icon: Users },
];

export const footerLinks = {
  quick: [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/works', label: 'Works' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ],
  company: [
    { href: '/insides', label: 'Insights' },
    { href: '#', label: 'Careers' },
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Terms & Conditions' },
  ],
};
