export type ProjectStatus = "live" | "production" | "in-progress";

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  status: ProjectStatus;
  tech: string[];
  features: string[];
  metrics: ProjectMetric[];
  liveUrl?: string;
  image?: string;
  span?: "wide" | "normal";
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  bullets: string[];
  price: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  type: "founder" | "freelance" | "internship";
  points: string[];
}

export interface Pillar {
  number: string;
  title: string;
  tagline: string;
  points: string[];
  stack: string[];
}

export interface NavLink {
  name: string;
  href: string;
}

export interface Metric {
  value: string;
  label: string;
}