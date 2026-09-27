export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  summary?: string;
  points: string[];
  techStack: string[];
  client?: string;
  isCurrent?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'enterprise' | 'fullstack' | 'qa';
  description: string;
  company: string;
  logo: string;
  highlights: string[];
  tags: string[];
  link?: string;
}

export interface TechSkill {
  name: string;
  category: 'architecture' | 'backend' | 'cloud' | 'databases' | 'security' | 'testing';
  level: string;
  icon?: string;
}

export const PERSONAL_INFO = {
  name: "Saheb Das",
  role: "Senior Backend Engineer & Solution Architect",
  experienceYears: "8+",
  location: "Kharagpur, India",
  email: "whosaheb@gmail.com",
  phone: "+91-8972870895",
  linkedin: "https://linkedin.com/in/whosaheb",
  github: "https://whosaheb.github.io",
  githubRepo: "https://github.com/whosaheb",
  twitter: "https://x.com/whosaheb",
  avatar: "./assets/programmer-img.png",
  heroImage: "./assets/homepage.png",
  aboutImage: "./assets/about.png",
  logo: "./assets/logo.png",
  summary:
    "Senior Backend Engineer and Solution Architect with 8+ years of expertise in designing high-performance distributed systems and cloud-native applications. Currently working as a System Analyst and dedicated Node.js/NestJS developer for Primerica through Hexaware Technologies, with hands-on experience in Node.js LTS upgrades, vulnerability remediation, security reviews, CI/CD, Kubernetes operations, and multiple database technologies. Proven success in scalable SaaS platforms, backend architecture, and production-focused engineering while balancing technical debt with business-driven engineering trade-offs."
};

export const METRICS = [
  { value: "8+", label: "Years Experience", sublabel: "Enterprise & SaaS" },
  { value: "30K+", label: "Concurrent Users", sublabel: "SaaS Platforms Served" },
  { value: "100%", label: "LTS Upgrades", sublabel: "Zero Breaking Outages" },
  { value: "5+", label: "Teams Led & Mentored", sublabel: "Full Lifecycle Delivery" }
];

export const TECHNICAL_EXPERTISE = {
  architecture: [
    "Microservices & Monolithic Architecture",
    "Hexagonal Architecture (Ports & Adapters)",
    "Event-Driven Design & Redis Queues",
    "gRPC & High-Throughput RPC Services",
    "API Gateways & Service Mesh",
    "System Design & Scalability Engineering",
    "Team Mentorship & Architecture Reviews"
  ],
  backend: [
    "Node.js (v8+ through latest LTS)",
    "NestJS (Modular Architecture, Guards, Interceptors)",
    "Express.js & Fastify",
    "RESTful API Design & OpenAPI / Swagger",
    "GraphQL (Apollo Server & Client)",
    "PHP (Subscription Systems & Integrations)",
    "Python (Flask & Automation)"
  ],
  cloudDevOps: [
    "AWS (EC2, S3, RDS, IAM, CloudWatch)",
    "Docker & Container Orchestration",
    "Kubernetes (Deployment, Ingress, Pod Health)",
    "Jenkins CI/CD Pipelines & GitHub Actions",
    "DigitalOcean & Cloud Infrastructure",
    "Microsoft Azure"
  ],
  databases: [
    "PostgreSQL & MySQL",
    "MongoDB (Aggregations, Replica Sets, Sharding)",
    "IBM_DB & Enterprise SQL Databases",
    "Redis (MQ, Caching, Pub/Sub, Rate Limiting)",
    "TypeORM, Sequelize, Kysely, Prisma ORM"
  ],
  securityFrontend: [
    "TypeScript & Strict Type Systems",
    "React.js & Next.js",
    "JWT (Short-Lived Tokens & Refresh Rotation)",
    "OAuth 2.0, SSO & Role-Based Access Control (RBAC)",
    "Application Vulnerability Remediation & Hardening"
  ],
  testingTelemetry: [
    "Jest & Vitest Unit/Integration Testing",
    "New Relic APM & Distributed Telemetry",
    "Socket.io & Real-Time Event Protocols",
    "Continuous Quality Assurance & Regression"
  ]
};

export const TECH_BADGES = [
  { name: "Node.js", icon: "./assets/nodejs-logo.png", category: "Backend" },
  { name: "TypeScript", icon: "./assets/typescript-logo.png", category: "Language" },
  { name: "NestJS", icon: "./assets/nestjs-logo.png", category: "Framework" },
  { name: "JavaScript", icon: "./assets/javascript-logo.png", category: "Language" },
  { name: "PHP", icon: "./assets/php-logo.png", category: "Backend" },
  { name: "Python", icon: "./assets/python-logo.png", category: "Backend" },
  { name: "Testing / QA", icon: "./assets/testing-logo.png", category: "Quality" },
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: "hexaware",
    role: "System Analyst (Dedicated Developer)",
    company: "Hexaware Technologies",
    location: "Bengaluru, India",
    period: "Jun 2026 – Present",
    client: "Primerica (Financial Services, U.S. & Canada)",
    isCurrent: true,
    summary:
      "Dedicated Node.js/NestJS developer for Primerica, a financial services enterprise serving middle-income households across the U.S. and Canada.",
    points: [
      "Upgrading backend codebases for seamless compatibility with the latest Node.js LTS versions, resolving deep runtime deprecations and dependency conflicts.",
      "Identifying and remediating critical software vulnerabilities, conducting comprehensive security reviews, and patching application-level edge glitches.",
      "Managing Git workflows and Jenkins CI/CD deployment pipelines, monitoring live containerized services on Kubernetes, and supporting 24/7 production operations.",
      "Operating across multiple enterprise database technologies including MongoDB, IBM_DB, and SQL instances with optimized data-access layers."
    ],
    techStack: ["Node.js LTS", "NestJS", "Kubernetes", "Docker", "Jenkins CI/CD", "MongoDB", "IBM_DB", "Security Hardening"]
  },
  {
    id: "capital-numbers",
    role: "Senior Software Developer (Architectural Lead)",
    company: "Capital Numbers",
    location: "Kolkata, India (Remote)",
    period: "Aug 2024 – Apr 2026",
    summary:
      "Led backend architectural strategy and microservices orchestration for high-growth enterprise SaaS platforms.",
    points: [
      "Architected SaaS backend platforms supporting 30,000+ active users, incorporating Redis-based asynchronous queues for high-concurrency event workloads.",
      "Orchestrated cross-microservice communication using gRPC and an event-driven cache mechanism, enforcing Hexagonal Architecture (Ports and Adapters) for high modularity.",
      "Integrated OpenAI APIs for AI-driven data synchronization workflows, directly translating natural language queries to structured system actions.",
      "Conducted rigorous code reviews, established strict TypeScript type safety standards, and instituted Jest/Vitest automated testing suites."
    ],
    techStack: ["Node.js", "TypeScript", "gRPC", "Hexagonal Architecture", "Redis", "OpenAI APIs", "AWS", "Jest"]
  },
  {
    id: "technoexponent",
    role: "Software Developer (Full Stack & Lead)",
    company: "Technoexponent Pvt. Ltd.",
    location: "Kolkata, India",
    period: "Aug 2022 – Jun 2024",
    summary:
      "Served as Technical Lead managing a cross-functional engineering team of 5, overseeing architectural decisions and release velocity.",
    points: [
      "Developed high-throughput full-stack features using React.js on the frontend and NestJS microservices on the backend for enterprise resource management platforms.",
      "Designed and implemented GraphQL APIs with Apollo Server and managed Jenkins CI/CD pipelines to fully automate cloud deployment cycles.",
      "Acted as Technical Lead for 5 developers, unblocking complex architectural roadblocks and ensuring 100% backward API compatibility across client versions."
    ],
    techStack: ["React.js", "NestJS", "GraphQL (Apollo)", "TypeORM", "Jenkins", "AWS", "Team Leadership"]
  },
  {
    id: "havfly",
    role: "Node.js Developer",
    company: "Havfly Services",
    location: "Hisar, Haryana",
    period: "Apr 2022 – Aug 2022",
    summary:
      "Engineered real-time RESTful APIs for high-traffic mobile gaming platforms and live telemetry processing.",
    points: [
      "Engineered high-performance RESTful APIs using Express.js and MongoDB for real-time mobile gaming apps (CricketAPI / Crex).",
      "Developed fault-tolerant automated cron-based background sync services handling thousands of score queries per second.",
      "Mentored junior engineering hires in Node.js asynchronous event-loop best practices and query index optimization."
    ],
    techStack: ["Node.js", "Express.js", "MongoDB", "Cron Services", "REST APIs", "Gaming Telemetry"]
  },
  {
    id: "serscopl",
    role: "Web App Developer",
    company: "SERSCOPL / Freelance",
    location: "Kolkata / Remote",
    period: "Jan 2020 – Apr 2022",
    summary:
      "Delivered end-to-end full-stack applications and payment integrations across cloud providers.",
    points: [
      "Delivered end-to-end MERN stack web applications, orchestrating cloud deployment on AWS EC2 and DigitalOcean droplets.",
      "Maintained PHP-based high-conversion subscription models and carried out multivariate A/B testing that drove significant user retention growth.",
      "Built resilient third-party payment gateway workflows and custom webhook handlers."
    ],
    techStack: ["MERN Stack", "PHP", "AWS (EC2, S3)", "DigitalOcean", "A/B Testing", "Stripe / Gateways"]
  },
  {
    id: "infoaxon",
    role: "Software Tester Engineer",
    company: "Infoaxon Technology Pvt. Ltd.",
    location: "Noida, India",
    period: "Aug 2018 – Dec 2019",
    summary:
      "Comprehensive quality assurance engineering for Tier-1 automotive and insurance enterprise portals.",
    points: [
      "Executed end-to-end quality assurance, test case automation, and regression testing for enterprise portals including Hyundai Revamp and Maruti Pitstop.",
      "Gained deep foundational expertise in edge-case vulnerability detection, test-driven validation, and software reliability that informs my current backend engineering mindset."
    ],
    techStack: ["Quality Assurance", "Automated Testing", "Regression Suites", "Enterprise Portals"]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "gamestrademarket",
    title: "Gamestrademarket",
    category: "enterprise",
    company: "Capital Numbers Limited",
    logo: "./assets/nodejs-logo.png",
    description:
      "Real-time e-commerce platform for trading high-value gaming assets. Built with Node.js/Express, integrating live asset updates via Socket.io and deploying on AWS for low-latency scaling.",
    highlights: [
      "Real-time WebSocket streaming with Socket.io for instantaneous bidding",
      "Stateless microservices architecture deployed on AWS infrastructure",
      "Low-latency transactional state caching with Redis"
    ],
    tags: ["Node.js", "Express.js", "Socket.io", "AWS", "Redis"]
  },
  {
    id: "haus",
    title: "Haus Platform",
    category: "enterprise",
    company: "Capital Numbers Limited",
    logo: "./assets/typescript-logo.png",
    description:
      "High-reliability backend services for Haus built using Node.js/Express and strict TypeScript, optimizing data flow and resolving complex concurrency bottlenecks.",
    highlights: [
      "Strict TypeScript end-to-end type safety",
      "Performance profiling and database index optimization",
      "Robust fault-tolerant error boundaries"
    ],
    tags: ["TypeScript", "Node.js", "Express.js", "Data Flow", "API Optimization"]
  },
  {
    id: "hrqualifier",
    title: "Hrqualifier.com",
    category: "fullstack",
    company: "Techno Exponent",
    logo: "./assets/nestjs-logo.png",
    description:
      "Enterprise resource management platform backend architected using NestJS and Apollo GraphQL on AWS. Scalable relational modeling with TypeORM and automated Jenkins CI/CD deployment pipelines.",
    highlights: [
      "Apollo GraphQL schema stitching and queries",
      "TypeORM relational persistence with migrations",
      "Automated Jenkins CI/CD pipelines to AWS cloud"
    ],
    tags: ["NestJS", "GraphQL", "TypeORM", "AWS", "Jenkins CI/CD"]
  },
  {
    id: "hana-waters",
    title: "HANA Waters Platform",
    category: "fullstack",
    company: "Techno Exponent",
    logo: "./assets/javascript-logo.png",
    description:
      "Modern e-commerce platform backend using Node.js/Express and Sequelize ORM. Integrated payment gateways, inventory tracking, and cron-driven reconciliation routines.",
    highlights: [
      "Automated cron jobs for payment reconciliation",
      "Sequelize ORM database relations and migrations",
      "Payment gateway webhook resilience"
    ],
    tags: ["Node.js", "Express.js", "Sequelize", "Payment Gateways", "Cron Jobs"]
  },
  {
    id: "cricket-api",
    title: "CricketAPI / Crex Project",
    category: "enterprise",
    company: "Havfly Services Pvt. Ltd.",
    logo: "./assets/nodejs-logo.png",
    description:
      "Ultra-high performance REST API engine for high-traffic mobile sports gaming apps, utilizing Node.js/Express and MongoDB for rapid score broadcast and live telemetry.",
    highlights: [
      "Sub-100ms response latency under heavy mobile concurrency",
      "MongoDB compound indexing for live score telemetry",
      "Scheduled worker processes for sports feed updates"
    ],
    tags: ["Node.js", "MongoDB", "High Concurrency", "REST API", "Mobile Backend"]
  },
  {
    id: "trainpetdog-k9ti",
    title: "Trainpetdog & K9TI Portals",
    category: "fullstack",
    company: "SERSCOPL Pvt. Ltd.",
    logo: "./assets/php-logo.png",
    description:
      "High-traffic subscription web applications for professional pet training services. Maintained A/B testing engines, billing models, and AWS deployments via Jenkins CI/CD.",
    highlights: [
      "Multivariate A/B testing infrastructure",
      "Subscription renewal & payment recurring webhooks",
      "AWS deployment automation with Jenkins"
    ],
    tags: ["PHP", "AWS", "Jenkins", "Subscription Engine", "A/B Testing"]
  },
  {
    id: "dreamwings-ananya",
    title: "DreamWings & Ananya Fashion",
    category: "fullstack",
    company: "Freelance Client Systems",
    logo: "./assets/nodejs-logo.png",
    description:
      "End-to-end MERN stack web applications (Travel and E-Commerce). Built with React.js and Node.js REST APIs, deployed on AWS EC2 and DigitalOcean droplets for high availability.",
    highlights: [
      "Full MERN stack implementation",
      "DigitalOcean & AWS production cloud hosting",
      "Responsive design with customer account portals"
    ],
    tags: ["MERN Stack", "React.js", "DigitalOcean", "AWS EC2", "REST API"]
  },
  {
    id: "enterprise-qa",
    title: "Hyundai Revamp & Maruti Pitstop QA",
    category: "qa",
    company: "Infoaxon Technology Pvt. Ltd.",
    logo: "./assets/testing-logo.png",
    description:
      "Comprehensive quality assurance engineering and vulnerability auditing for Tier-1 automotive portals (Hyundai, Maruti Suzuki) and insurance enterprise systems (Edelfin PING-2.0).",
    highlights: [
      "Exhaustive test suite automation and edge-case auditing",
      "Performance regression testing under enterprise load",
      "Established foundational security & reliability principles"
    ],
    tags: ["QA Engineering", "Regression Testing", "Security Auditing", "Enterprise Systems"]
  }
];

export const EDUCATION = [
  {
    degree: "M.Sc. in Computer Science",
    institution: "Vidyasagar University, West Bengal, India",
    period: "2016 – 2018",
    focus: "Advanced Data Structures, Distributed Systems, Software Engineering"
  },
  {
    degree: "B.Sc. in Computer Science",
    institution: "Midnapore College (Autonomous), West Bengal, India",
    period: "2013 – 2016",
    focus: "Operating Systems, Object-Oriented Architecture, Database Management"
  }
];

export const HOME_LAB_DETAILS = {
  title: "TrueNAS Home Lab & Infrastructure Prototyping",
  subtitle: "Hardware & Self-Hosted Engineering Sandbox",
  description:
    "To validate high-availability architectural patterns before bringing them into production environments, I build and maintain a dedicated home server laboratory running on TrueNAS. This sandbox allows me to prototype complex distributed systems without cloud billing constraints.",
  features: [
    {
      title: "Isolated Virtual Machines",
      detail: "Prototyping multi-node clustering, testing OS-level configurations, and benchmarking runtime engines."
    },
    {
      title: "Automated CI/CD Pipelines",
      detail: "Testing local Jenkins workflows, container builds, and staging environments before pushing to cloud."
    },
    {
      title: "Isolated Database Instances",
      detail: "Running dedicated PostgreSQL, MySQL, and MongoDB replica sets for stress-testing and query tuning."
    },
    {
      title: "TrueNAS & WebDAV Storage",
      detail: "Decoupled media storage used as the backend for custom microservices (like the Barta enterprise chat app)."
    }
  ]
};

export const FEATURED_ARTICLE = {
  id: "barta-chat",
  title: "Barta — An Enterprise-Grade Chat Application Without Redis, Docker, or S3",
  date: "October 19, 2025",
  readTime: "7 min read",
  link: "https://chat.whosaheb.in",
  summary:
    "“Barta” is a full-stack real-time chat platform built with NestJS, React, and MongoDB — without Redis, Docker, or S3. It showcases how clean architecture, WebSockets, and TrueNAS Nextcloud integration can power a real-time, scalable communication platform entirely under developer control.",
  quote: "“No Redis, no Docker, no S3 — just clean architecture and core Node.js engineering.”",
  highlights: [
    "Modular NestJS backend with WebSocketGateway and WebRTC signaling",
    "Decoupled media storage via TrueNAS Nextcloud WebDAV API proxy",
    "Short-lived stateless JWT access tokens combined with MongoDB refresh token rotation",
    "Vitest on React frontend and Jest on NestJS backend with full unit coverage"
  ]
};
