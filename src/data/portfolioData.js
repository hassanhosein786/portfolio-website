export const profile = {
  name: 'Hassan Hosein',
  headline: 'Software Engineer | Cybersecurity-Focused Developer',
  location: 'Trinidad and Tobago',
  phone: '1-868-782-3116',
  email: 'hassanhosein035@gmail.com',
  linkedin: 'https://www.linkedin.com/in/hassan-hosein-65373718b/',
  github: 'https://github.com/hassanhosein786',
  resumePath: '/resume.pdf',
};

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const heroStats = [
  { value: '3', label: 'Major Portfolio Projects' },
  { value: '2026', label: 'Cybersecurity MSc Track' },
  { value: 'Moodle 4', label: 'Legacy Modernization Focus' },
];

export const about = {
  summary:
    'I am a software engineering and cybersecurity-focused developer who enjoys building dependable, well-structured systems with a strong eye for maintainability, usability, and security. My recent work has centered on modernizing legacy Moodle plugins, building full-stack pages and APIs, and contributing to infrastructure and database administration within Dockerized development environments.',
  details: [
    'At Pennacool.com Caribbean Limited, I have supported the transition of legacy Moodle 3.10 functionality toward Moodle 4 compatibility, improving both technical quality and user experience.',
    'My background blends application development with platform awareness, including Linux, Apache, MySQL and MariaDB administration, backup and recovery support, and practical workflow tooling such as Docker, Grunt, Adminer, and MailHog.',
    'Alongside software engineering, I am actively deepening my cybersecurity expertise through postgraduate study, with a long-term goal of building secure, resilient products at the intersection of development and defense-minded engineering.',
  ],
};

export const skillGroups = [
  {
    title: 'Programming',
    icon: 'code',
    skills: ['Java', 'C#', 'JavaScript', 'Python', 'C++', 'PHP'],
  },
  {
    title: 'Web & Database',
    icon: 'database',
    skills: ['HTML', 'CSS', 'MySQL', 'Oracle APEX', 'React', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    title: 'Frameworks & Platforms',
    icon: 'layers',
    skills: ['ASP.NET Core', 'Moodle', 'Streamlit'],
  },
  {
    title: 'Tools & Tech',
    icon: 'tool',
    skills: ['Git', 'Visual Studio', 'VS Code', 'Eclipse', 'Docker', 'Linux', 'Selenium', 'Grunt', 'Adminer', 'MailHog', 'Apache', 'MariaDB'],
  },
];

export const experience = [
  {
    role: 'Software & Systems Intern',
    company: 'Pennacool.com Caribbean Limited',
    location: 'Trinidad & Tobago',
    period: 'Jan 2026 - Present',
    highlights: [
      'Refactored and modernized legacy Moodle 3.10 plugins to improve maintainability, user experience, and long-term platform support.',
      'Redesigned interface flows and refined functionality to better align with modern Moodle usage patterns and cleaner UX expectations.',
      'Helped ensure compatibility with Moodle 4 by updating implementation details, testing behavior, and resolving upgrade-related issues.',
      'Developed and maintained full-stack Moodle pages and APIs using PHP, JavaScript, and Mustache templates.',
      'Worked within Dockerized development workflows using Grunt, Adminer, and MailHog to streamline local development and testing.',
      'Assisted with Linux (Ubuntu), Apache, and MySQL or MariaDB server and database administration, including backup and recovery tasks.',
    ],
  },
];

export const projects = [
  {
    title: 'Mini Burp Suite',
    subtitle: 'Authorized Defensive Web Vulnerability Scanner',
    description:
      'Built an MVP for an authorized defensive web vulnerability scanner designed to surface meaningful web security issues while maintaining strict operational safeguards. The project combines a polished React dashboard with a Node.js and MongoDB backend to support scan workflows, finding analysis, and structured reporting.',
    features: [
      'Host-restricted crawling to keep scans explicitly bounded',
      'Passive security checks for headers, forms, and surface-level web weaknesses',
      'Limited non-destructive active checks designed to reduce operational risk',
      'MongoDB-backed persistence for findings, scan summaries, and detail views',
      'Safeguards against out-of-scope domains, destructive routes, logout flows, downloads, credential attacks, and exploit delivery',
    ],
    tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Axios', 'Cheerio'],
    featured: true,
    links: {
      github: 'https://github.com/hassanhosein786/mini-burp-site',
      demo: 'https://mini-burp-suite-web.vercel.app/',
      docs: 'https://your-docs-placeholder.com/mini-burp-suite',
    },
  },
  {
    title: 'AI-Powered Phishing Email Detector',
    subtitle: 'Full-Stack Email Threat Analysis Platform',
    description:
      'Built a full-stack phishing analysis platform that classifies suspicious emails, generates blended risk scores, explains why messages were flagged, and highlights dangerous language for faster triage. The project combines a polished React frontend with an Express API, MongoDB persistence, and a Python FastAPI microservice running a scikit-learn model.',
    features: [
      'Email analyzer with optional subject, sender, pasted content, and `.txt` or `.eml` upload support',
      'Blended scoring engine that combines TF-IDF + Logistic Regression predictions with phishing heuristics',
      'Plain-English explanations and highlighted indicators such as urgency, credential requests, threats, and suspicious links',
      'MongoDB-backed history dashboard with search, classification filters, and scan statistics',
      'Deployment-ready architecture split across Vercel frontend, Render backend, Render ML service, and MongoDB Atlas',
    ],
    tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'FastAPI', 'scikit-learn'],
    featured: false,
    links: {
      github: 'https://github.com/hassanhosein786/email-detector',
      demo: 'https://email-detector-phi.vercel.app/analyzer',
      docs: 'https://github.com/hassanhosein786/email-detector#readme',
    },
  },
  {
    title: 'Dental Clinic Management System',
    subtitle: 'Full-Stack MERN Healthcare Management App',
    description:
      'Designed and developed a web-based clinic management platform for Bright Smiles Dental, emphasizing structured patient workflows, secure access control, and day-to-day operational usability. The project reflects full-stack product thinking across planning, implementation, and iterative delivery.',
    features: [
      'Patient record management with organized clinical data views',
      'Appointment scheduling for smoother front-desk coordination',
      'Treatment tracking to improve continuity and operational clarity',
      'Secure role-based authentication using JWT',
      'Agile sprint-based planning and collaboration throughout development',
    ],
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT', 'Git'],
    featured: false,
    links: {
      github: 'https://github.com/hassanhosein786/dental-clinic-management-system',
      demo: 'https://dental-clinic-management-system-frontend.onrender.com',
      docs: 'https://dental-clinic-management-system-admin.onrender.com',
      docsLabel: 'Admin Panel',
    },
  },
];

export const education = [
  {
    institution: "St. George's College",
    credential: 'Secondary Education',
    period: '09/2015 - 07/2020',
    details: [
      'CSEC Grade I in Mathematics, Technical Drawing, Information Technology, Chemistry, Physics, and Principles of Business',
      'CSEC Grade II in English Language and Additional Mathematics',
    ],
  },
  {
    institution: 'University of Trinidad and Tobago',
    credential: 'Diploma in Software Engineering',
    period: '09/2020 - 06/2022',
    details: ['Relevant coursework: Python, Java, HTML & CSS, Oracle APEX, MySQL'],
  },
  {
    institution: 'University of Trinidad and Tobago',
    credential: 'Bachelor of Applied Science in Computer Engineering, Specialization in Software Engineering',
    period: '09/2022 - 06/2025',
    details: [
      'Relevant coursework: C++, C#, Java, Data Structures & Algorithms, Python, Data Science, Artificial Intelligence, JavaScript, MERN',
    ],
  },
  {
    institution: 'Master of Science in Cybersecurity',
    credential: 'Postgraduate Study',
    period: '09/2025 - 12/2026',
    details: ['Advanced cybersecurity study supporting a long-term software engineering and defensive security career path.'],
  },
];

export const certifications = [
  {
    title: 'OCI Generative AI Professional Certification',
    issuer: 'Oracle University',
    year: '2024',
  },
  {
    title: 'Certificate in IT Project Management',
    issuer: 'London International College',
    year: '2024',
  },
];

export const contactCards = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: 'mail',
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone}`,
    icon: 'phone',
  },
  {
    label: 'LinkedIn',
    value: 'https://www.linkedin.com/in/hassan-hosein-65373718b/',
    href: profile.linkedin,
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    value: 'https://github.com/hassanhosein786',
    href: profile.github,
    icon: 'github',
  },
];
