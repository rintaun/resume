export interface ContactInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  website: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface WorkExperience {
  role: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string;
  bullets: {
    text: string;
    tech?: string[];
  }[];
  technologies: string[];
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  date: string;
  details?: string[];
}

export const contactInfo: ContactInfo = {
  name: "Matthew Lanigan",
  title: "Senior Software Engineer",
  email: "rintaun@gmail.com",
  phone: "+1 (717) 746-8286",
  location: "Georgetown, PA 15043",
  github: "https://github.com/rintaun",
  linkedin: "https://linkedin.com/in/matthewlanigan",
  website: "https://rintaun.dev",
};

export const objective = "Senior Software Engineer with 13+ years of experience designing and scaling full-stack web applications across fintech, SaaS, and enterprise domains. Proven track record shipping compliance-critical systems, pioneering automated underwriting, and driving organization-wide architectural modernization. Deep expertise in TypeScript, Ruby, React, and GraphQL within service-oriented and domain-driven architectures. Passionate about establishing engineering standards, mentoring growing engineers, and delivering measurable business impact through technical excellence.";

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["JavaScript", "TypeScript", "Ruby", "Kotlin", "Java", "Python", "PHP", "C#", "HTML5", "CSS3", "SQL"],
  },
  {
    name: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Node.js", "Ruby on Rails", "Spring Boot", "Hibernate", "AngularJS", "WPF"],
  },
  {
    name: "APIs & Databases",
    skills: ["GraphQL", "gRPC", "REST", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    name: "Cloud & Infrastructure",
    skills: [
      "Kubernetes",
      "Docker",
      "AWS (S3, Lambda, SQS, SNS)",
      "CircleCI",
      "GitHub Actions",
      "ArgoCD",
      "Git",
      "Datadog",
      "Sentry",
    ],
  },
  {
    name: "Practices & Architecture",
    skills: [
      "Agile/Scrum",
      "Microservices",
      "Service-Oriented Architecture",
      "Domain-Driven Design",
      "Test-Driven Development",
      "Behavior-Driven Development",
      "Hexagonal Architecture",
    ],
  },
];

export const workExperience: WorkExperience[] = [
  {
    role: "Senior Software Engineer",
    company: "Kiavi",
    startDate: "Jan 2025",
    endDate: "Jun 2026",
    technologies: ["TypeScript", "Kotlin", "GraphQL", "gRPC", "Ruby", "PostgreSQL", "React", "Docker", "AWS", "Datadog", "Sentry"],
    bullets: [
      {
        text: "Shipped 4 compliance and risk-reduction features — Plaid-based KYC identity verification, KYC retry automation, bankruptcy credit policy enforcement, and pro borrower experience verification — reducing regulatory exposure across the loan origination pipeline processing ~2,000 applications/month.",
        tech: ["TypeScript", "Kotlin", "GraphQL", "gRPC", "Ruby", "PostgreSQL"],
      },
      {
        text: "Automated KYC retry flows and integrated risk model outputs into Ops workflows, eliminating ~15 manual engineering reviews per week and removing recurring underwrite overrides on subsequent loan applications per affected borrower.",
        tech: ["TypeScript", "Kotlin", "GraphQL", "gRPC", "AWS"],
      },
      {
        text: "Migrated 4 legacy JavaScript Ops applications to TypeScript, upgraded ESLint infrastructure, improved GraphQL Codegen configuration, and introduced stronger typing — reducing type-related defects and accelerating developer onboarding.",
        tech: ["TypeScript", "React", "GraphQL"],
      },
      {
        text: "Eliminated race conditions in event-driven orchestration and resolved duplicate document processing in critical lending workflows, improving pipeline reliability for thousands of monthly loan applications.",
        tech: ["gRPC", "GraphQL", "PostgreSQL", "Datadog"],
      },
      {
        text: "Partnered with product, risk, compliance, and engineering teams to define requirements, plan implementation workstreams, and coordinate cross-service deployments — shipping incremental releases with zero production incidents.",
      },
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "GlossGenius",
    startDate: "Nov 2022",
    endDate: "Dec 2024",
    technologies: ["Ruby", "PostgreSQL", "TypeScript", "Next.js", "Kotlin", "gRPC", "REST", "Docker", "AWS"],
    bullets: [
      {
        text: "Owned core booking and appointment management systems on the Booking team, the primary revenue driver for GlossGenius's SaaS platform serving tens of thousands of beauty and wellness professionals.",
        tech: ["Ruby", "PostgreSQL"],
      },
      {
        text: "Designed and built the Forms & Waivers system, enabling 10,000+ professionals to collect client information pre-booking — reducing no-shows and streamlining intake into a unified experience.",
        tech: ["Ruby", "PostgreSQL"],
      },
      {
        text: "Launched the Themes customization system, empowering customers to personalize their booking websites — driving a 20%+ lift in Gold subscription upgrades.",
        tech: ["Ruby", "PostgreSQL"],
      },
      {
        text: "Spearheaded the client self-service rescheduling feature — the top user-requested functionality — significantly reducing professional admin workload and improving client satisfaction.",
        tech: ["Ruby", "PostgreSQL", "TypeScript"],
      },
      {
        text: "Extended Subscription & Billing management to the professional web application, expanding key functionality previously limited to the mobile app.",
        tech: ["TypeScript", "Next.js", "REST"],
      },
      {
        text: "Built front-end experiences for the Platinum tier launch, supporting the company's upmarket strategy to attract larger salon businesses to the platform.",
        tech: ["TypeScript", "Next.js", "REST"],
      },
      {
        text: "Architected a Kotlin/gRPC microservice for the Packages system, enabling salon owners to define and manage memberships within a service-oriented architecture.",
        tech: ["Kotlin", "PostgreSQL", "gRPC"],
      },
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Kiavi LLC",
    startDate: "Oct 2018",
    endDate: "Oct 2022",
    location: "formerly LendingHome LLC",
    technologies: ["Ruby", "PostgreSQL", "TypeScript", "GraphQL", "Next.js", "React", "gRPC", "Docker", "AWS", "Datadog", "Sentry"],
    bullets: [
      {
        text: "Stabilized and extended the Loan Origination System (Ruby on Rails + React), resolving critical defects and delivering feature enhancements for the company's core lending platform.",
        tech: ["Ruby", "PostgreSQL", "TypeScript"],
      },
      {
        text: "Pioneered an automated underwriting engine, designing the core rule parser, workflow calculator, and data lookup layer — validated in production before being paused due to organizational reprioritization.",
        tech: ["Ruby"],
      },
      {
        text: "Created and open-sourced a TypeScript database access library adopted by 3 internal services, standardizing data access patterns across the organization.",
        tech: ["TypeScript", "PostgreSQL", "GraphQL"],
      },
      {
        text: "Championed migration to service-oriented architecture, driving organizational adoption of microservice patterns and improving system modularity and team autonomy.",
      },
      {
        text: "Led organization-wide adoption of Next.js, establishing front-end standards and accelerating developer onboarding for new UI projects.",
        tech: ["Next.js", "TypeScript"],
      },
      {
        text: "Co-created the Bedrock design system, building a shared React component library from the ground up — adopted across all front-end applications and still in active use today.",
        tech: ["React", "TypeScript"],
      },
      {
        text: "Initiated production data security overhaul, implementing database-level permissions and read replicas — catalyzing a multi-year organizational shift toward role-based access controls.",
        tech: ["PostgreSQL"],
      },
      {
        text: "Built the Deal Calculator and Rehab Calculator, core tools used by loan officers to evaluate fix-and-flip investment properties.",
        tech: ["TypeScript", "GraphQL", "Next.js"],
      },
      {
        text: "Standardized TypeScript across the stack — server-side GraphQL/gRPC services and Next.js front-end applications — improving type safety and reducing runtime errors.",
        tech: ["GraphQL", "gRPC", "TypeScript", "Next.js"],
      },
    ],
  },
  {
    role: "Software Engineer II",
    company: "Honeywell Inc.",
    startDate: "Aug 2017",
    endDate: "Oct 2018",
    technologies: ["Java", "Spring", "Hibernate", "HTML", "JavaScript", "C#", "WPF", "Node.js", "Ruby"],
    bullets: [
      {
        text: "Resolved complex, high-priority issues in a mission-critical warehouse voice automation platform used globally, including direct customer escalation support.",
        tech: ["Java", "Spring", "Hibernate", "HTML", "JavaScript"],
      },
      {
        text: "Architected a firmware deployment solution for the full Voice Solutions hardware product line, standardizing device provisioning across the organization.",
        tech: ["C#", "WPF"],
      },
      {
        text: "Built a log analysis tool adopted by the full support engineering team, replacing manual log reading and accelerating customer issue resolution.",
        tech: ["Node.js"],
      },
      {
        text: "Collaborated across R&D, product, and QA teams on new product development and legacy-to-modern platform migration initiatives.",
      },
      {
        text: "Engineered automated migration tools to transition repositories from Perforce and StarTeam to Git, enabling modern version control workflows.",
        tech: ["Ruby", "Java"],
      },
    ],
  },
  {
    role: "Software Engineer",
    company: "Rent Jungle LLC",
    startDate: "Jul 2011",
    endDate: "Jan 2014",
    technologies: ["PHP", "Python", "Ruby", "MySQL", "PostgreSQL", "HTML5", "JavaScript", "AngularJS", "REST"],
    bullets: [
      {
        text: "Led early-stage development of UpContent, a web-based content curation and discovery platform later spun out as an independent company (still active today).",
      },
      {
        text: "Designed and built the REST API layer for UpContent's content ingestion and search pipeline.",
        tech: ["Python", "PostgreSQL"],
      },
      {
        text: "Built the UpContent single-page application using AngularJS, delivering a responsive content discovery interface.",
        tech: ["JavaScript", "AngularJS", "REST"],
      },
    ],
  },
];

export const educationHistory: Education[] = [
  {
    degree: "M.A. Language and Culture",
    field: "Concentration in Japanese Language and Culture",
    institution: "Chubu University",
    location: "Aichi, Japan",
    date: "March 2016",
    details: [
      "Built Co-Chu, a web-based corpus analysis tool (AngularJS, Ruby, PostgreSQL), funded by a JSPS research grant.",
    ],
  },
  {
    degree: "B.A. Linguistics",
    field: "Minor in Japanese",
    institution: "Ohio University",
    location: "Athens, OH",
    date: "June 2011",
    details: [
      "Graduated cum laude.",
    ],
  },
];

