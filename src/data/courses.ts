import { Code2, Coffee } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Course {
  slug: string;
  title: string;
  icon: LucideIcon;
  gradient: string;
  description: string;
}

export const courses: Course[] = [
  {
    slug: "java",
    title: "Java Full Stack with AI",
    icon: Code2,
    gradient: "from-brand-500 to-brand-700",
    description:
      "Master Java, Spring Boot, React, and AI-powered development to build industry-ready full-stack applications and launch your software career.",
  },

  {
    slug: "devops",
    title: "DevOps with Multi-Cloud & Generative AI",
    icon: Coffee,
    gradient: "from-orange-500 to-red-500",
    description:
      "Learn DevOps, Docker, Kubernetes, CI/CD, AWS, Azure, and GCP to automate, deploy, and manage modern cloud applications.",
  },
  
];
