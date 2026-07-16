import { Code2, Coffee } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Course {
  slug: string;
  title: string;
  icon: LucideIcon;
  gradient: string;
  description: string;
}
export const courses: Course[] = [
  {
    slug: 'Java',
    title: 'Java Full Stack with AI',
    icon: Code2,
    gradient: 'from-brand-500 to-brand-700',
    description: 'Master Java, Spring Boot, React, and AI-powered development to build industry-ready full-stack applications and launch your software career.',
  },
  {
    slug: 'Devops',
    title: 'DevOps with Multi-Cloud & Generative AI',
    icon: Coffee,
    gradient: 'from-orange-500 to-red-500',
    description: 'Learn DevOps, Docker, Kubernetes, CI/CD, AWS, Azure, and GCP to automate, deploy, and manage modern cloud applications.',
  },
  {
    slug: 'python',
    title: 'Python Programming',
    icon: Code2,
    gradient: 'from-sky-500 to-cyan-600',
    description: 'Learn Python basics, automation, and scripting for quick career growth in tech.',
  },
  {
    slug: 'data-analytics',
    title: 'Data Analytics',
    icon: Code2,
    gradient: 'from-emerald-500 to-teal-600',
    description: 'Understand Excel, SQL, Power BI, and data visualization with practical projects.',
  },
  {
    slug: 'cloud',
    title: 'Cloud Computing',
    icon: Coffee,
    gradient: 'from-violet-500 to-indigo-600',
    description: 'Get hands-on training in AWS, Azure, and cloud deployment concepts.',
  },
  {
    slug: 'ai-ml',
    title: 'AI & Machine Learning',
    icon: Code2,
    gradient: 'from-fuchsia-500 to-purple-600',
    description: 'Build AI models, understand machine learning, and create real-world smart solutions.',
  },
  {
    slug: 'Digital marketing',
  title: 'Digital Marketing',
  icon: Coffee,
  gradient: 'from-amber-500 to-orange-500',
  description: 'Learn SEO, SEM, social media marketing, content marketing, email campaigns, Google Ads, and analytics to grow businesses online.',
  },
  {
    slug: 'MS Office',
  title: 'MS Office',
  icon: Code2,
  gradient: 'from-rose-500 to-pink-600',
  description: 'Master Microsoft Word, Excel, PowerPoint, Outlook, and advanced Excel features for professional and business productivity.',
  },
  {
    slug: 'Devops',
  title: 'DevOps',
  icon: Coffee,
  gradient: 'from-lime-500 to-green-600',
  description: 'Learn Git, Docker, Kubernetes, Jenkins, CI/CD pipelines, cloud deployment, and infrastructure automation with hands-on projects.',
  },
];
