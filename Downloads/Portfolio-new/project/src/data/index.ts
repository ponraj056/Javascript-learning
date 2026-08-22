export const personalInfo = {
  name: 'Ponraj D',
  roles: ['Frontend Developer', 'Java Developer', 'Full Stack Developer', 'AI Enthusiast'],
  tagline: 'Building scalable web experiences with modern technologies and AI-powered solutions.',
  bio: `I'm a passionate B.Tech Information Technology student at V.S.B Engineering College with hands-on experience in full-stack development and AI/ML integration. I've built and deployed multiple production-grade applications including an AI-powered academic platform, demonstrating the ability to design, build, and ship end-to-end systems independently.`,
  bio2: `With a strong foundation in DSA (Java), React, Node.js, and MongoDB, I thrive at the intersection of elegant UI and robust backend architecture. I'm driven by a learning mindset and a passion for leveraging AI to solve real-world problems.`,
  location: 'Karur, Tamil Nadu, India',
  email: 'ponrajsdr@gmail.com',
  phone: '8072099157',
  github: 'https://github.com/ponraj056',
  linkedin: 'https://www.linkedin.com/in/ponrajdr',
  leetcode: 'https://leetcode.com/u/ponraj056/',
  portfolio: 'https://ponraj-dr-portfolio.netlify.app',
  resumeUrl: '/assets/resume/New_Updated_Resume.pdf',
  profileImage: '/assets/ponrajphoto (1).png',
};

export const stats = [
  { label: 'Projects Completed', value: 5, suffix: '+' },
  { label: 'LeetCode Problems', value: 300, suffix: '+' },
  { label: 'Certifications', value: 4, suffix: '' },
  { label: 'Internships', value: 2, suffix: '' },
  { label: 'CGPA', value: 8.4, suffix: '', decimals: 1 },
];

export const education = [
  {
    degree: 'B.Tech — Information Technology',
    institution: 'V.S.B Engineering College, Karur',
    period: '2023 – 2027',
    score: '8.4 CGPA',
    status: 'Pursuing',
  },
  {
    degree: 'Higher Secondary',
    institution: 'J R C Hr. Sec. School, Kothayam',
    period: '2022 – 2023',
    score: '82.3%',
    status: 'Completed',
  },
  {
    degree: 'SSLC',
    institution: 'J R C Hr. Sec. School, Kothayam',
    period: '2020 – 2021',
    score: 'Passed',
    status: 'Completed',
  },
];

export const skillCategories = [
  {
    title: 'Frontend',
    color: '#2563EB',
    skills: [
      { name: 'React', level: 80 },
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 88 },
      { name: 'JavaScript', level: 78 },
      { name: 'TailwindCSS', level: 85 },
      { name: 'Bootstrap', level: 75 },
      { name: 'Responsive Design', level: 88 },
    ],
  },
  {
    title: 'Backend & Database',
    color: '#7C3AED',
    skills: [
      { name: 'Node.js', level: 72 },
      { name: 'Express.js', level: 70 },
      { name: 'MongoDB', level: 75 },
      { name: 'MySQL', level: 72 },
      { name: 'Java (OOP)', level: 82 },
      { name: 'REST API', level: 78 },
    ],
  },
  {
    title: 'Tools & AI',
    color: '#06B6D4',
    skills: [
      { name: 'Git & GitHub', level: 82 },
      { name: 'VS Code', level: 90 },
      { name: 'Prompt Engineering', level: 80 },
      { name: 'Generative AI / LLMs', level: 75 },
      { name: 'Netlify', level: 78 },
      { name: 'Postman', level: 70 },
      { name: 'Groq API', level: 65 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: 'StudentVault',
    description:
      'AI-powered academic intelligence platform built for V.S.B Engineering College, enabling role-based access for Students, Staff, HOD, and Admin with semantic search and query resolution.',
    longDescription:
      'Engineered using Node.js, Express, and MongoDB with Cohere embeddings and Groq LLM for intelligent semantic search and query resolution. Implemented secure JWT and OTP-based authentication to safeguard academic data across all user roles. Designed to streamline academic workflows and information retrieval for the entire college ecosystem.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Cohere AI', 'Groq LLM', 'JWT'],
    features: [
      'Role-Based Access',
      'Semantic Search',
      'JWT & OTP Authentication',
      'Cohere Embeddings',
      'Groq LLM Query Resolution',
      'Academic Workflow Automation',
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/ponraj056',
    image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
    date: '2026',
  },
  {
    id: 2,
    title: 'Elevate AI Interviewer',
    description:
      'An intelligent interview simulation platform designed to help developers and students prepare for real-world technical interviews using AI.',
    longDescription:
      'Elevate AI Interviewer uses OpenAI to dynamically generate questions tailored to your resume, evaluate your answers in real-time, assess your spoken English communication, review your code solutions, and produce a comprehensive performance report.',
    tech: ['React', 'Node.js', 'OpenAI', 'TailwindCSS', 'Express'],
    features: [
      'Resume-Tailored Questions',
      'Real-Time Evaluation',
      'Spoken English Assessment',
      'Code Solution Review',
      'Comprehensive Reports',
      'OpenAI Integration',
    ],
    liveUrl: 'https://elevate-ai-interviewer.vercel.app/',
    githubUrl: 'https://github.com/ponraj056/elevate-ai-interviewer',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
    date: '2026',
  },
  {
    id: 3,
    title: 'Smart Government Scheme Hub',
    description:
      'A web platform that intelligently filters government schemes based on user profile — age, income, occupation, and category — and provides step-by-step application guidance. Features AI-powered chat for scheme eligibility queries.',
    longDescription:
      'Built to solve the problem of citizens being unaware of applicable government schemes, this platform uses dynamic filtering and provides personalized scheme recommendations with complete application workflows.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'MongoDB', 'Express.js'],
    features: [
      'Profile-Based Filtering',
      'AI Eligibility Chat',
      'Application Guidance',
      'Scheme Management',
      'Multilingual Support',
      'Mobile Responsive',
    ],
    liveUrl: 'https://scheme-filter-site.netlify.app',
    githubUrl: 'https://github.com/ponraj056',
    image: 'https://share.google/9x48EFGJiAyBAHMLx',
    featured: true,
    date: 'Nov 2025',
  },
  {
    id: 4,
    title: 'E-Commerce Platform',
    description:
      'A fully responsive e-commerce website with product listings, advanced filtering, and shopping cart functionality. Built during the CodeAlpha MERN Stack Internship using AI-assisted development.',
    longDescription:
      'Developed as part of the CodeAlpha internship, this e-commerce site showcases modern frontend patterns with optimized UX, product search, category filtering, and cart management.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'MongoDB'],
    features: [
      'Product Listings',
      'Category Filtering',
      'Shopping Cart',
      'Search Functionality',
      'Responsive Design',
      'AI-Assisted Code',
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/ponraj056',
    image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
    date: 'Jan 2026',
  },
];

export const timelineItems = [
  {
    id: 1,
    type: 'internship',
    title: 'MERN Stack Intern',
    organization: 'CodeAlpha',
    location: 'Remote',
    period: 'Jan 2026',
    description:
      'Developed a responsive e-commerce website with product listings, filtering, and shopping cart using modern frontend technologies. Used AI-assisted development tools for code generation, debugging, and optimization.',
    skills: ['React', 'Node.js', 'MongoDB', 'Express.js', 'AI Tools'],
    icon: 'briefcase',
    color: '#06B6D4',
  },
  {
    id: 2,
    type: 'internship',
    title: 'Software Development Intern — Internship 5.0',
    organization: 'Infosys Springboard',
    location: 'Remote',
    period: 'Dec 2024',
    description:
      'Built an automation tool to auto-download, extract, and organize daily NSE stock market reports, reducing manual effort. Gained real-world experience in project workflows, teamwork, and industry-oriented problem-solving.',
    skills: ['Selenium', 'Pandas', 'Automation'],
    icon: 'briefcase',
    color: '#7C3AED',
  },
  {
    id: 3,
    type: 'education',
    title: 'B.Tech — Information Technology',
    organization: 'V.S.B Engineering College',
    location: 'Karur, Tamil Nadu',
    period: '2023 – Present',
    description:
      'Pursuing Bachelor of Technology in Information Technology with a strong focus on software development, data structures, algorithms, and modern web technologies. Current CGPA: 8.4.',
    skills: ['Java', 'DSA', 'Web Development', 'Database Design'],
    icon: 'graduation-cap',
    color: '#2563EB',
  },
];

export const certifications = [
  {
    id: 1,
    title: 'Programming in Java',
    issuer: 'NPTEL',
    platform: 'IIT',
    topics: 'OOP, Data Types, Arrays, Exception Handling',
    color: '#F59E0B',
    icon: 'code',
    year: '2024',
  },
  {
    id: 2,
    title: 'Software Testing',
    issuer: 'NPTEL',
    platform: 'IIT',
    topics: 'Black Box, White Box, Functional Testing',
    color: '#10B981',
    icon: 'check-circle',
    year: '2024',
  },
  {
    id: 3,
    title: 'Java Foundation',
    issuer: 'Infosys Springboard',
    platform: 'Infosys',
    topics: 'OOP, Control Structures, Problem Solving',
    color: '#2563EB',
    icon: 'layers',
    year: '2024',
  },
  {
    id: 4,
    title: 'ChatGPT for Everyone',
    issuer: 'HCL - GUVI',
    platform: 'GUVI',
    topics: 'AI Fundamentals, Prompt Design, Generative AI',
    color: '#7C3AED',
    icon: 'cpu',
    year: '2025',
  },
];

export const achievements = [
  { label: 'LeetCode Problems', value: 80, suffix: '+', icon: 'code' },
  { label: 'Projects Shipped', value: 5, suffix: '+', icon: 'folder' },
  { label: 'Internships', value: 2, suffix: '', icon: 'briefcase' },
  { label: 'Certifications', value: 4, suffix: '', icon: 'award' },
  { label: 'Coding Hours', value: 500, suffix: '+', icon: 'clock' },
  { label: 'GitHub Commits', value: 100, suffix: '+', icon: 'git-commit' },
];

export const services = [
  {
    id: 1,
    title: 'Frontend Development',
    description:
      'Building pixel-perfect, responsive UIs with React, TailwindCSS, and modern animation libraries for exceptional user experiences.',
    icon: 'monitor',
    color: '#2563EB',
    tech: ['React', 'TailwindCSS', 'Framer Motion'],
  },
  {
    id: 2,
    title: 'Backend Development',
    description:
      'Designing and building scalable RESTful APIs and server-side applications using Node.js, Express, and Java.',
    icon: 'server',
    color: '#7C3AED',
    tech: ['Node.js', 'Express.js', 'Java'],
  },
  {
    id: 3,
    title: 'Database Design',
    description:
      'Structuring efficient database schemas with MongoDB and MySQL, optimized for performance and scalability.',
    icon: 'database',
    color: '#06B6D4',
    tech: ['MongoDB', 'MySQL', 'Mongoose'],
  },
  {
    id: 4,
    title: 'API Integration',
    description:
      'Seamlessly connecting frontends to third-party APIs and services, including payment gateways, AI APIs, and REST endpoints.',
    icon: 'zap',
    color: '#10B981',
    tech: ['REST API', 'Axios', 'Postman'],
  },
  {
    id: 5,
    title: 'AI-Powered Solutions',
    description:
      'Integrating LLMs, Groq API, and RAG pipelines to build intelligent features like chatbots and smart recommendation systems.',
    icon: 'cpu',
    color: '#F59E0B',
    tech: ['Groq API', 'LLMs', 'RAG Pipelines'],
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Arjun Krishnamurthy',
    role: 'Senior Software Engineer',
    company: 'Infosys Springboard',
    avatar: 'AK',
    avatarColor: '#2563EB',
    rating: 5,
    text: "Ponraj demonstrated exceptional initiative during the Infosys Springboard internship. His automation tool for NSE reports saved hours of manual work. His ability to learn quickly and deliver production-ready code is impressive for a student.",
  },
  {
    id: 2,
    name: 'Priya Venkataraman',
    role: 'MERN Stack Mentor',
    company: 'CodeAlpha',
    avatar: 'PV',
    avatarColor: '#7C3AED',
    rating: 5,
    text: "Working with Ponraj was a great experience. He built a fully functional e-commerce platform with clean code and excellent UI/UX instincts. He leverages AI tools smartly while maintaining code quality and ownership.",
  },
  {
    id: 3,
    name: 'Dr. Ramesh Babu',
    role: 'Project Guide',
    company: 'V.S.B Engineering College',
    avatar: 'RB',
    avatarColor: '#06B6D4',
    rating: 5,
    text: "Ponraj's StudentVault platform was outstanding — it solved a real problem with elegant technology. His full-stack skills, attention to detail, and dedication to user experience set him apart from his peers.",
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#timeline' },
  { label: 'Contact', href: '#contact' },
];
