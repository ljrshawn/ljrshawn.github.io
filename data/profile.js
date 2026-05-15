export const navItems = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "More", href: "#more" },
];

export const profile = {
  name: "Shawn (Jingran) Lyu",
  icon: "/favicon.svg",
  title: "Software Developer",
  subtitle: "Master of Computing and Innovation",
  location: "Adelaide, South Australia",
  email: "shawn.lyu@shawnl.dev",
  github: "https://github.com/ljrshawn",
  linkedin: "https://www.linkedin.com/in/shawn-jr-lyu/",
  resume: "/pdf/resume.pdf",
  photo: "https://res.cloudinary.com/dp9citrja/image/upload/myWeb/profile.jpg",
  intro: `Full-stack software engineer with 2+ years of experience building scalable web and
mobile applications across the full software lifecycle. Experienced in React, React
Native, Node.js, FastAPI, and PostgreSQL, with a strong focus on backend
architecture, performance optimization, and automation testing. Proven ability to
design and deliver end-to-end systems, including AI-powered applications using
embeddings and vector search (pgvector). Combines a solid foundation in
computing and electronic engineering with practical industry experience to build
eﬃcient, reliable, and scalable solutions.`,
  highlights: [
    "2+ years building full-stack web and mobile apps with React, React Native, and Node.js",
    "Backend-focused developer experienced with FastAPI, PostgreSQL, SQLAlchemy, Docker, and pgvector",
    "Improves production reliability through database optimization and Playwright end-to-end testing",
    "Builds AI-powered products using embeddings, vector search, and structured data extraction",
  ],
};

export const education = [
  {
    school: "The University of Adelaide",
    location: "Adelaide, Australia",
    date: "Graduated June 2023",
    degree: "Master of Computing and Innovation",
  },
  {
    school: "The University of Southampton",
    location: "Southampton, United Kingdom",
    date: "Graduated June 2019",
    degree: "Diploma of MicroElectroMechanical Systems",
  },
  {
    school: "Beijing Jiao Tong University",
    location: "Beijing, China",
    date: "Graduated June 2017",
    degree: "Bachelor of Electronics Engineering",
  },
];

export const experience = [
  {
    role: "Junior Software Engineer",
    company: "OneTeam Services",
    date: "Feb 2024 – Apr 2026",
    summary: `
    • Developed and maintained cross-platform web and mobile applications using React and React Native, improving user experience and system usability.
    • Designed and implemented backend services with Node.js, enabling eﬃcient API integration and data processing.
    • Optimized PostgreSQL database performance, improving query eﬃciency and scalability for production systems.
    • Built end-to-end automated test suites using Playwright, reducing manual QA eﬀort and increasing release confidence.
    • Collaborated across frontend, backend, and mobile teams to deliver integrated, production-ready solutions.
`,
  },
  {
    role: "Mobile Application Developer (Intern)",
    company: "KIK Innovation Ltd",
    date: "Oct 2023 – Feb 2024",
    summary: `
    • Led the implementation of user segmentation features in a community-focused mobile application.
    • Collaborated within a small team to design and deliver new features, improving application functionality and user engagement.
    `,
  },
  {
    role: "Software Developer (Intern)",
    company: "42 Adelaide",
    date: "May 2023 – Feb 2024",
    summary: `
    • Developed strong proficiency in C/C++ and Linux systems programming.
    • Delivered a technical masterclass, sharing programming knowledge with peers.
    `,
  },
  {
    role: "Data Science Intern",
    company: "Ping An Bank",
    date: "Nov 2020 - Mar 2021",
    summary: `
    • Enhanced the Q&A robot algorithm through data analysis, collaborating with fellow algorithm team members to achieve an 89% accuracy improvement.
    • Employed tools like Pyppeteer to develop a web crawler script, streamlining manual tasks and significantly boosting operational eﬃciency.
    `,
  },
];

export const projects = [
  {
    name: "AI Job Search Copilot – Full-Stack AI Resume Matching Platform",
    date: "Apr 2026",
    href: "https://github.com/ljrshawn/AI-Job-Search-Copilot",
    tags: [
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Alembic",
      "SQLAlchemy",
      "pgvector",
    ],
    summary: `
    • Built a full-stack AI platform to match resumes with job descriptions using semantic similarity search.
    • Designed a production-ready backend using FastAPI, PostgreSQL, pgvector, SQLAlchemy, Alembic, and Docker.
    • Implemented embedding generation and cosine similarity ranking, enabling intelligent job recommendations.
    • Integrated OpenAI structured outputs to extract and structure resume data.
    • Developed frontend using Next.js and TypeScript, including Google authentication.`,
  },
  {
    name: "MicroTV - Web Application",
    date: "Sep 2023",
    href: "https://github.com/ljrshawn/Personal-TV-Web",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "PostgreSQL",
      "Prisma",
    ],
    summary: `
    • Designed and developed a full-stack MERN web application for movie streaming.
    • Implemented CRUD functionalities.
    • Utilised Next.js, React, TypeScript, Tailwind, PostgreSQL, Prisma.`,
  },
  {
    name: "MyWork",
    date: "Mar 2023",
    href: "https://github.com/ljrshawn/MCI-Project-MyWork",
    tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "MUI"],
    summary:
      "Built a MERN application with CRUD workflows, authentication, and chart visualizations for teachers and students to track workload, project progress, and team activity.",
  },
  {
    name: "Distributed System Simulation",
    date: "Jul 2022",
    href: "https://github.com/ljrshawn/Software-Engineering-and-Project",
    tags: ["JavaScript", "Node.js", "HTML", "CSS", "MongoDB"],
    summary:
      "Designed and optimized the front end for a web simulation that visualizes stability and leader election behavior in an information-passing distributed system.",
  },
  {
    name: "E-commerce Website",
    date: "Mar 2021",
    tags: ["Shopify", "JavaScript", "UI Design"],
    summary:
      "Created and operated a Shopify e-commerce site, covering front-end UI construction, page setup, sales operations, and delivery coordination.",
  },
  {
    name: "Titanic Survival Prediction",
    date: "Sep 2020",
    tags: ["Python", "Random Forest", "Seaborn", "Matplotlib"],
    summary:
      "Analyzed, cleaned, and modeled Titanic passenger data using random forests, with exploratory visualizations and correlation analysis.",
  },
];

export const skillGroups = `• Languages: JavaScript, TypeScript, Python, Java, C/C++
• Frontend: React, React Native, Angular, Next.js, Tailwind CSS
• Backend: Node.js, Express, FastAPI
• Databases: PostgreSQL, MongoDB, SQL Server, pgvector
• Tools & DevOps: Docker, Git, Playwright, Linux`;

export const additional = [
  {
    title: "The Complete SQL Bootcamp",
    date: "2023",
    summary: "Advanced query writing with PostgreSQL.",
  },
  {
    title: "Node.js, Express, MongoDB & More",
    date: "2023",
    summary:
      "Modern back-end stack training covering Node, Express, MongoDB, Mongoose, APIs, and server-rendered applications.",
  },

  {
    title: "Microsoft Azure AI Fundamentals (AI-900)",
    date: "2022",
    summary: "Training in Azure and AI services fundamentals.",
  },
  {
    title: "Kaggle SQL Course",
    date: "2020",
    summary: "SQL practice and data querying with Python-based workflows.",
  },
  {
    title: "Exchange Study",
    date: "2015",
    summary:
      "Electrical engineering study at National Chiao Tung University, Taiwan.",
  },
];
