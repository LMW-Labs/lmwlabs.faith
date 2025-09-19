import { Brain, Code2, Cloud, Database, Home, BarChart3, TrendingUp, Sparkles } from 'lucide-react';

export const projects = [
  {
    id: 'threadripper',
    title: '🧠 THREADRIPPER',
    subtitle: 'AI Twitter Analysis Bot',
    description: 'AI-powered Twitter bot that detects viral threads in real-time and exposes psychological subtext using Google Gemini. Analyzes power dynamics, emotional manipulation, and hidden meanings in social media content.',
    image: '/images/projects/threadripper.png', // Add your actual image
    tags: ['Node.js', 'Google Gemini', 'Cloud Run', 'Twitter API', 'Firestore', 'Pub/Sub'],
    status: 'live',
    featured: true,
    links: {
      demo: 'https://github.com/yourusername/threadripper',
      github: 'https://github.com/yourusername/threadripper'
    },
    stats: {
      threads: 1247,
      accuracy: 87.3,
      users: '2.4K'
    },
    highlights: [
      'Real-time Twitter monitoring',
      'AI-powered subtext analysis', 
      'Viral thread detection',
      'Smart auto-replies',
      'Psychological insights'
    ],
    technologies: [
      { name: 'Google Gemini', icon: Brain, color: 'text-purple-500' },
      { name: 'Node.js', icon: Code2, color: 'text-green-500' },
      { name: 'Cloud Run', icon: Cloud, color: 'text-blue-500' },
      { name: 'Firestore', icon: Database, color: 'text-orange-500' }
    ]
  },
  {
    id: 'proplistai',
    title: '🏡 PropListAI',
    subtitle: 'AI Real Estate Listing Generator',
    description: 'Transform property listings with AI. Save 40+ minutes per listing while generating professional, platform-optimized descriptions that attract more buyers using Google Gemini.',
    image: '/images/projects/proplistai.png',
    tags: ['Google Gemini', 'Real Estate', 'AI Content', 'Vanilla JS', 'Modern CSS'],
    status: 'live',
    featured: true,
    links: {
      demo: 'https://github.com/yourusername/proplistai',
      github: 'https://github.com/yourusername/proplistai'
    },
    stats: {
      timeSaved: '40+ min',
      platforms: '3',
      listings: '500+'
    },
    highlights: [
      'AI-powered listing generation',
      'Multi-platform optimization',
      'Professional writing styles',
      'Instant copy-to-clipboard',
      '300-500 word descriptions'
    ],
    technologies: [
      { name: 'Google Gemini', icon: Brain, color: 'text-purple-500' },
      { name: 'Vanilla JS', icon: Code2, color: 'text-yellow-500' },
      { name: 'Modern CSS', icon: Sparkles, color: 'text-pink-500' },
      { name: 'Real Estate', icon: Home, color: 'text-blue-500' }
    ]
  },
  {
    id: 'vectr',
    title: '📊 VECTR',
    subtitle: 'Data Analytics Platform',
    description: 'Advanced data visualization and analytics platform built with modern technologies. Powerful insights, beautiful charts, and real-time data processing capabilities.',
    image: '/images/projects/vectr.png',
    tags: ['React', 'D3.js', 'Analytics', 'Data Viz', 'Dashboard'],
    status: 'development',
    featured: false,
    links: {
      demo: 'https://github.com/LMW-Labs/vectr_dashboard',
      github: 'https://github.com/LMW-Labs/vectr_dashboard'
    },
    stats: {
      charts: '25+',
      datasets: '100K+',
      users: 'Beta'
    },
    highlights: [
      'Real-time data processing',
      'Interactive visualizations',
      'Custom dashboard builder',
      'Advanced filtering',
      'Export capabilities'
    ],
    technologies: [
      { name: 'React', icon: Code2, color: 'text-blue-500' },
      { name: 'D3.js', icon: BarChart3, color: 'text-green-500' },
      { name: 'Analytics', icon: TrendingUp, color: 'text-purple-500' },
      { name: 'Database', icon: Database, color: 'text-orange-500' }
    ]
  },
  // Future project placeholders
  {
    id: 'future-1',
    title: '🚀 Project Alpha',
    subtitle: 'Coming Soon',
    description: 'Revolutionary new project that will transform how businesses operate. Built with cutting-edge AI and modern architecture.',
    image: '/images/projects/coming-soon-1.png',
    tags: ['AI', 'Machine Learning', 'Enterprise'],
    status: 'planning',
    featured: false,
    links: {},
    stats: {
      progress: '15%',
      eta: 'Q2 2025'
    },
    highlights: [
      'Advanced AI integration',
      'Enterprise scalability',
      'Modern architecture',
      'Cloud-native design'
    ],
    technologies: []
  },
  {
    id: 'future-2',
    title: '⚡ Project Beta',
    subtitle: 'Coming Soon',
    description: 'Next-generation solution for modern challenges. Innovative approach with user-centric design and powerful functionality.',
    image: '/images/projects/coming-soon-2.png',
    tags: ['Innovation', 'UX/UI', 'Performance'],
    status: 'planning',
    featured: false,
    links: {},
    stats: {
      progress: '8%',
      eta: 'Q3 2025'
    },
    highlights: [
      'User-centric design',
      'High performance',
      'Innovative features',
      'Scalable infrastructure'
    ],
    technologies: []
  },
  {
    id: 'future-3',
    title: '🌟 Project Gamma',
    subtitle: 'Coming Soon',
    description: 'Ambitious project that will redefine industry standards. Combining AI, modern web technologies, and innovative design patterns.',
    image: '/images/projects/coming-soon-3.png',
    tags: ['AI', 'Innovation', 'Web3'],
    status: 'planning',
    featured: false,
    links: {},
    stats: {
      progress: '5%',
      eta: 'Q4 2025'
    },
    highlights: [
      'Industry disruption',
      'AI-first approach',
      'Modern architecture',
      'Global scalability'
    ],
    technologies: []
  }
];

export const featuredProjects = projects.filter(p => p.featured);
export const otherProjects = projects.filter(p => !p.featured);