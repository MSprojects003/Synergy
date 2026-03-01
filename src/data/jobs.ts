// src/data/jobs.ts
export const CAREERS_EMAIL = "mbaasatheef@gmail.com";
export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  description: string;
  imageUrl: string;
  closingDate: string; // ISO format: "YYYY-MM-DD"
  responsibilities: string[];
  requirements: string[];
}

export const jobs: Job[] = [
  {
    id: "senior-full-stack-developer",
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-time",
    description:
      "Build scalable web applications using React, Node.js, TypeScript, and modern cloud infrastructure. Work on high-impact features in a collaborative remote-first team.",
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070",
    closingDate: "2026-03-15",
    responsibilities: [
      "Design and build scalable front-end and back-end systems.",
      "Collaborate with product and design teams to deliver new features.",
      "Lead code reviews and uphold engineering best practices.",
      "Mentor junior developers and contribute to team culture.",
    ],
    requirements: [
      "5+ years of full-stack development experience.",
      "Proficiency in React, Node.js, and TypeScript.",
      "Experience with cloud platforms (AWS, GCP, or Azure).",
      "Strong problem-solving and communication skills.",
    ],
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    department: "Design",
    location: "On-site · Colombo",
    type: "Full-time",
    description:
      "Create intuitive user experiences for our SaaS platform. Collaborate with product and dev teams using Figma and modern design systems.",
    imageUrl:
      "https://images.unsplash.com/photo-1559028012-481c04fa06cb?auto=format&fit=crop&q=80&w=2074",
    closingDate: "2026-03-20",
    responsibilities: [
      "Own the end-to-end design process from research to handoff.",
      "Build and maintain a cohesive design system in Figma.",
      "Conduct user research and usability testing.",
      "Work closely with engineers to ensure pixel-perfect implementation.",
    ],
    requirements: [
      "3+ years of product design experience.",
      "Expert-level Figma skills.",
      "Strong portfolio showcasing UX thinking and visual craft.",
      "Experience with accessibility standards (WCAG).",
    ],
  },
  {
    id: "product-marketing-manager",
    title: "Product Marketing Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description:
      "Develop go-to-market strategies, craft compelling messaging, and drive demand generation campaigns with strong analytical skills.",
    imageUrl:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2074",
    closingDate: "2026-03-25",
    responsibilities: [
      "Develop and execute go-to-market strategies for new features.",
      "Craft compelling product messaging and positioning.",
      "Work with sales to create enablement materials.",
      "Analyse campaign performance and optimise for growth.",
    ],
    requirements: [
      "4+ years in product or growth marketing.",
      "Experience with B2B SaaS products.",
      "Strong writing and storytelling ability.",
      "Data-driven mindset with proficiency in analytics tools.",
    ],
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote / Hybrid",
    type: "Full-time",
    description:
      "Automate infrastructure with AWS, Terraform, Docker, Kubernetes. Ensure high availability and performance of production systems.",
    imageUrl:
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&q=80&w=2071",
    closingDate: "2026-04-05",
    responsibilities: [
      "Design and manage CI/CD pipelines.",
      "Provision and maintain cloud infrastructure using IaC.",
      "Monitor system health and respond to incidents.",
      "Collaborate with engineering to improve deployment velocity.",
    ],
    requirements: [
      "3+ years of DevOps or SRE experience.",
      "Hands-on with AWS, Terraform, Docker, and Kubernetes.",
      "Strong scripting skills (Bash, Python).",
      "Experience with observability tools (Datadog, Grafana).",
    ],
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    department: "Analytics",
    location: "On-site · Colombo",
    type: "Full-time",
    description:
      "Transform raw data into insights. Build dashboards, run A/B tests, and provide strategic recommendations using SQL and BI tools.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-b1f7c97b4560?auto=format&fit=crop&q=80&w=2070",
    closingDate: "2026-04-10",
    responsibilities: [
      "Build and maintain dashboards and reporting pipelines.",
      "Run A/B tests and interpret results for product teams.",
      "Surface actionable insights from large datasets.",
      "Partner with stakeholders to define key business metrics.",
    ],
    requirements: [
      "2+ years of data analysis experience.",
      "Proficiency in SQL and at least one BI tool (Metabase, Looker, etc.).",
      "Familiarity with Python or R for data manipulation.",
      "Excellent communication and data storytelling skills.",
    ],
  },
];