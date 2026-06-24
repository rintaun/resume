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
  linkedin: "https://linkedin.com/in/rintaun",
  website: "https://rintaun.dev",
};

export const objective = "To leverage my experience with and passion for full-stack web application development in a position as a leader in software engineering; to participate in a culture of mutual self-improvement with like-minded peers; to provide mentorship and guidance to growing engineers; to contribute to the improvement of products at various stages of development; and to learn and utilize new skills for both personal and professional development.";

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["JavaScript", "TypeScript", "Ruby", "Kotlin", "Java", "PostgreSQL", "PHP", "Python", "C#", "HTML5"],
  },
  {
    name: "Frameworks & Libraries",
    skills: ["React", "Next.js", "AngularJS", "Spring", "Hibernate", "CakePHP", "Ruby on Rails", "WPF"],
  },
  {
    name: "APIs & Databases",
    skills: ["GraphQL", "gRPC", "REST", "PostgreSQL", "MySQL", "Node.js"],
  },
  {
    name: "DevOps & Architecture",
    skills: [
      "Kubernetes",
      "Continuous Delivery",
      "Test-Driven Design",
      "Behavior-Driven Design",
      "Service-Oriented Architecture",
      "Domain-Driven Design",
      "Hexagonal Architecture",
      "Microservices",
    ],
  },
];

export const workExperience: WorkExperience[] = [
  {
    role: "Senior Software Engineer",
    company: "Kiavi",
    startDate: "Jan 2025",
    endDate: "Jun 2026",
    technologies: ["TypeScript", "GraphQL", "gRPC", "Ruby", "PostgreSQL", "React"],
    bullets: [
      {
        text: "Delivered compliance and risk-reduction initiatives, including Plaid-based KYC identity verification, KYC retry automation, bankruptcy-related credit policy enforcement, and pro borrower experience verification.",
        tech: ["TypeScript", "GraphQL", "gRPC", "Ruby", "PostgreSQL"],
      },
      {
        text: "Reduced manual operational effort and production support load by automating retry flows, improving loan search by sponsor details, and integrating risk model outputs directly into Ops workflows.",
        tech: ["TypeScript", "GraphQL", "gRPC"],
      },
      {
        text: "Modernized frontend and developer tooling by migrating legacy JavaScript workflows to TypeScript, upgrading ESLint infrastructure, improving GraphQL Codegen configuration, and introducing stronger typing across Ops applications.",
        tech: ["TypeScript", "React", "GraphQL"],
      },
      {
        text: "Improved reliability and performance of critical lending workflows by reducing duplicate document processing, eliminating event-ordering race conditions, and refining asynchronous orchestration patterns.",
        tech: ["gRPC", "GraphQL", "PostgreSQL"],
      },
      {
        text: "Collaborated across product, risk, compliance, and engineering teams to clarify requirements, plan implementation workstreams, coordinate cross-service changes, and deliver incremental improvements safely.",
      },
      {
        text: "Strengthened engineering quality and maintainability through targeted refactoring, improved logging, type-safety enhancements, and bug fixes uncovered during modernization efforts.",
      },
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "GlossGenius",
    startDate: "Nov 2022",
    endDate: "Present",
    technologies: ["Ruby", "PostgreSQL", "TypeScript", "Next.js", "Kotlin", "gRPC", "REST"],
    bullets: [
      {
        text: "Enhanced core booking and appointment management systems as part of the Booking team, central to GlossGenius's platform functionality.",
        tech: ["Ruby", "PostgreSQL"],
      },
      {
        text: "Improved code quality and software reliability through extensive bug fixes, refactoring, and enhanced testing procedures.",
        tech: ["Ruby", "PostgreSQL"],
      },
      {
        text: "Developed the Forms and Waivers project, creating a customizable system for professionals to collect client information prior to booking, streamlining business processes into a unified experience.",
        tech: ["Ruby", "PostgreSQL"],
      },
      {
        text: "Implemented the Themes system, enabling customers to personalize their booking websites, which led to a significant increase in Gold subscription upgrades.",
        tech: ["Ruby", "PostgreSQL"],
      },
      {
        text: "Led development of the rescheduling feature, a highly requested functionality allowing clients to reschedule appointments independently, reducing administrative workload for professionals.",
        tech: ["Ruby", "PostgreSQL", "TypeScript"],
      },
      {
        text: "Extended Subscription & Billing settings management to the professional web application, expanding key functionalities previously limited to the mobile app.",
        tech: ["TypeScript", "Next.js", "REST"],
      },
      {
        text: "Contributed significantly to the front-end development of the Platinum plan, supporting the company's vision to attract larger businesses to the platform.",
        tech: ["TypeScript", "Next.js", "REST"],
      },
      {
        text: "Built core Kotlin microservices for the Packages, allowing salon owners to define and manage memberships and packages within a service-oriented architecture.",
        tech: ["Kotlin", "PostgreSQL", "gRPC"],
      },
      {
        text: "Demonstrated expertise in full-stack development, microservices architecture, and cross-platform functionality enhancements.",
      },
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Kiavi LLC",
    startDate: "Oct 2018",
    endDate: "Oct 2022",
    location: "formerly LendingHome LLC",
    technologies: ["Ruby", "PostgreSQL", "TypeScript", "GraphQL", "Next.js", "React.js", "gRPC"],
    bullets: [
      {
        text: "Maintained mission-critical legacy systems by updating Ruby on Rails and React.js code in the Loan Origination System.",
        tech: ["Ruby", "PostgreSQL", "TypeScript"],
      },
      {
        text: "Pioneered an automated underwriting system, leading development of the core rule parser, workflow calculator, and data lookup mechanisms.",
        tech: ["Ruby"],
      },
      {
        text: "Built and open-sourced a TypeScript-based database access library now utilized by multiple internal projects.",
        tech: ["TypeScript", "PostgreSQL", "GraphQL"],
      },
      {
        text: "Advocated for modern architectures and code quality, promoting a shift to service-oriented/microservice architectures.",
      },
      {
        text: "Led organizational adoption of Next.js for front-end applications.",
        tech: ["Next.js", "TypeScript"],
      },
      {
        text: "Co-created the Bedrock design system, establishing an internal shared component library from the ground up.",
        tech: ["React.js", "TypeScript"],
      },
      {
        text: "Enhanced security models by leading the transition to increased production data access security.",
      },
      {
        text: "Contributed significantly to the Deal Calculator, including substantial work on the Rehab calculator.",
        tech: ["TypeScript", "GraphQL", "Next.js"],
      },
      {
        text: "Streamlined TypeScript adoption for server-side GraphQL and gRPC applications alongside Next.js front-end apps.",
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
        text: "Maintained and supported a mission-critical legacy web application used by thousands globally, resolving complex, high-profile issues.",
        tech: ["Java", "Spring", "Hibernate", "HTML", "JavaScript"],
      },
      {
        text: "Enhanced customer confidence through direct interaction when necessary.",
      },
      {
        text: "Architected and developed a firmware loading solution for all Voice Solutions hardware devices using modern technologies.",
        tech: ["C#", "WPF"],
      },
      {
        text: "Created internal tools like a log analysis tool and a heavy-load device simulation utility, boosting productivity in troubleshooting customer issues.",
        tech: ["Node.js"],
      },
      {
        text: "Participated in cross-functional teams, including new product development and legacy tool migration projects.",
      },
      {
        text: "Developed migration tools for Perforce and StarTeam to Git, facilitating legacy tools migration.",
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
        text: "Developed various web applications.",
        tech: ["PHP", "Python", "Ruby", "MySQL", "PostgreSQL", "HTML5", "JavaScript"],
      },
      {
        text: "Resolved bug reports in a CakePHP backend for Rent Jungle, enhancing system stability.",
        tech: ["PHP", "MySQL"],
      },
      {
        text: "Improved web interfaces by identifying and implementing UI enhancements.",
        tech: ["JavaScript"],
      },
      {
        text: "Led early development of UpContent, a web-based content discovery tool.",
      },
      {
        text: "Built a Python-based REST API with PostgreSQL for UpContent.",
        tech: ["Python", "PostgreSQL"],
      },
      {
        text: "Developed the client-side interface using AngularJS for UpContent.",
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
      "Overall GPA of 3.67.",
      "Thesis: アニメの日本語と日本語教育 ―Co-Chu による現実性及び適切性分析― (The Japanese of Anime and Japanese Language Education: Realism and Appropriateness Analyses Using the Corpus System Co-Chu)",
      "Developed Co-Chu, a web-based system for the creation and analysis of Japanese language corpora, consisting of a single-page application (AngularJS with Ruby-based REST API, PostgreSQL).",
      "Recipient of a 5-year research grant for Co-Chu's development (generously provided by the Japan Society for the Promotion of Science). The software continues to be used by dozens of researchers.",
    ],
  },
  {
    degree: "B.A. Linguistics",
    field: "Minor in Japanese",
    institution: "Ohio University",
    location: "Athens, OH",
    date: "June 2011",
    details: [
      "Graduated cum laude. Overall GPA of 3.57, major GPA of 3.83.",
      "Awarded Dean's List five times.",
    ],
  },
];
