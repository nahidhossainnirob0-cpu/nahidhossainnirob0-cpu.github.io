export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide icon name
  category: ProjectCategory;
}

export type ProjectCategory =
  | 'ai-agents'
  | 'lead-management'
  | 'crm'
  | 'business-automation'
  | 'hr-automation'
  | 'document-automation';

export interface ProjectDetail {
  problem: string;
  solution: string;
  workflow: string[];
  howItWorks: string;
  technologies: string[];
  businessImpact: string;
  futureImprovements: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: ProjectCategory;
  detail: ProjectDetail;
}
