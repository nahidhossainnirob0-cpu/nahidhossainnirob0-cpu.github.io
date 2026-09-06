import type { Service, Project, ProjectCategory } from '../types';

export const categoryLabels: Record<ProjectCategory, string> = {
  'ai-agents': 'AI Agents',
  'lead-management': 'Lead Management',
  'crm': 'CRM',
  'business-automation': 'Business Automation',
  'hr-automation': 'HR Automation',
  'document-automation': 'Document Automation',
};

export const services: Service[] = [
  {
    id: 'ai-receptionist',
    title: 'AI Receptionist',
    description:
      'AI-powered receptionist systems that can handle inquiries, qualify visitors, answer common questions, and route conversations.',
    icon: 'Headset',
    category: 'ai-agents',
  },
  {
    id: 'ai-chatbots',
    title: 'AI Chatbots',
    description:
      'Intelligent chatbots for websites and business communication channels.',
    icon: 'MessageSquare',
    category: 'ai-agents',
  },
  {
    id: 'whatsapp-automation',
    title: 'WhatsApp Automation',
    description:
      'Automated WhatsApp workflows for customer communication, lead qualification, notifications, and follow-ups.',
    icon: 'Phone',
    category: 'business-automation',
  },
  {
    id: 'appointment-automation',
    title: 'Appointment Automation',
    description:
      'Automate appointment booking, confirmation, reminders, rescheduling, and follow-ups.',
    icon: 'CalendarClock',
    category: 'business-automation',
  },
  {
    id: 'lead-management-systems',
    title: 'Lead Management Systems',
    description:
      'Capture, qualify, score, organize, and route leads automatically.',
    icon: 'Target',
    category: 'lead-management',
  },
  {
    id: 'lead-to-revenue',
    title: 'Lead-to-Revenue Systems',
    description:
      'Connect lead generation, qualification, CRM, follow-up, sales processes, and revenue tracking into one automated system.',
    icon: 'TrendingUp',
    category: 'lead-management',
  },
  {
    id: 'crm-automation',
    title: 'CRM Automation',
    description:
      'Automate CRM updates, lead movement, follow-ups, notifications, and customer lifecycle workflows.',
    icon: 'Database',
    category: 'crm',
  },
  {
    id: 'business-process-automation',
    title: 'Business Process Automation',
    description:
      'Automate repetitive business operations using AI, APIs, databases, and workflow automation.',
    icon: 'Workflow',
    category: 'business-automation',
  },
  {
    id: 'invoice-document-automation',
    title: 'Invoice & Document Automation',
    description:
      'Automate invoice processing, document handling, extraction, validation, notifications, and record management.',
    icon: 'FileText',
    category: 'document-automation',
  },
  {
    id: 'hr-recruitment-automation',
    title: 'HR / Recruitment Automation',
    description:
      'AI-powered CV screening, candidate analysis, qualification, scoring, and recruitment workflow automation.',
    icon: 'Users',
    category: 'hr-automation',
  },
];

export const projects: Project[] = [
  {
    id: 'ai-lead-management-system',
    title: 'AI Lead Management System',
    description:
      'An AI-powered lead management workflow that captures incoming leads, analyzes their requirements, qualifies them, scores them, stores structured data, and routes them through the appropriate workflow.',
    technologies: ['n8n', 'AI Agents', 'Google Sheets / Database', 'Gmail', 'APIs'],
    category: 'lead-management',
    detail: {
      problem:
        'Incoming leads arrived through multiple channels with no consistent way to qualify, score, or route them, so high-value prospects were often missed or followed up with late.',
      solution:
        'A workflow that automatically captures every incoming lead, uses an AI agent to analyze the request, scores it against qualification criteria, and stores structured data ready for follow-up.',
      workflow: [
        'Lead submitted through form / email / channel',
        'AI agent extracts and analyzes requirements',
        'Lead is scored and qualified',
        'Structured data stored in Sheets / Database',
        'Routed to the correct follow-up workflow',
        'Notification sent to the relevant owner',
      ],
      howItWorks:
        'n8n orchestrates the pipeline end-to-end: incoming data triggers the workflow, an AI agent node interprets unstructured lead details into structured fields, business rules assign a qualification score, and the result is written to a database while Gmail sends the right notification to the right person.',
      technologies: ['n8n', 'AI Agents', 'Google Sheets / Database', 'Gmail', 'APIs'],
      businessImpact:
        'Reduces manual triage time and ensures qualified leads are identified and routed consistently instead of relying on manual review.',
      futureImprovements:
        'Add predictive lead scoring based on historical conversion data and a two-way CRM sync.',
    },
  },
  {
    id: 'ai-lead-to-revenue-system',
    title: 'AI Lead-to-Revenue System',
    description:
      'A complete workflow connecting lead capture, AI qualification, CRM management, automated follow-ups, appointment workflows, and sales progression.',
    technologies: ['n8n', 'AI', 'CRM', 'APIs', 'Database'],
    category: 'crm',
    detail: {
      problem:
        'Lead generation, CRM updates, follow-ups, and appointment booking were handled as separate disconnected tasks, causing leads to fall through the cracks between stages.',
      solution:
        'A single connected system that carries each lead automatically from first contact through qualification, CRM entry, follow-up, appointment booking, and into the sales pipeline.',
      workflow: [
        'Lead capture',
        'AI qualification',
        'CRM record created / updated',
        'Automated follow-up sequence',
        'Appointment workflow triggered',
        'Handoff to sales stage',
      ],
      howItWorks:
        'Each stage is a connected node in the automation: qualification output determines CRM stage, which in turn triggers a follow-up cadence and, where appropriate, an appointment booking flow, keeping the CRM as the single source of truth throughout.',
      technologies: ['n8n', 'AI', 'CRM', 'APIs', 'Database'],
      businessImpact:
        'Creates one continuous pipeline instead of isolated automations, reducing drop-off between lead generation and revenue stages.',
      futureImprovements:
        'Introduce automated deal-stage forecasting and revenue reporting dashboards.',
    },
  },
  {
    id: 'ai-recruitment-cv-analysis-system',
    title: 'AI Recruitment / CV Analysis System',
    description:
      'An AI recruitment workflow that reads candidate CVs, extracts structured information, analyzes candidates, scores them, and automatically routes candidates based on predefined criteria.',
    technologies: ['AI Document Processing', 'n8n', 'Google Sheets', 'Email Automation'],
    category: 'hr-automation',
    detail: {
      problem:
        'Manually screening every incoming CV against role requirements is slow and inconsistent, especially with a high volume of applicants.',
      solution:
        'An automated workflow that reads each CV, extracts structured candidate data, scores candidates against role criteria, and routes them to the correct next step.',
      workflow: [
        'CV received',
        'AI document processing extracts structured data',
        'Candidate scored against role criteria',
        'Routed to shortlist / hold / reject workflow',
        'Automated email notification sent',
      ],
      howItWorks:
        'AI document processing converts unstructured CV content into structured fields (experience, skills, education), which are compared against role criteria to generate a score, and the routing step decides the next action automatically.',
      technologies: ['AI Document Processing', 'n8n', 'Google Sheets', 'Email Automation'],
      businessImpact:
        'Cuts down manual screening time and gives recruiters a consistently scored shortlist instead of raw, unsorted applications.',
      futureImprovements:
        'Add interview scheduling automation and skill-gap analysis reporting.',
    },
  },
  {
    id: 'automated-invoice-management-system',
    title: 'Automated Invoice Management System',
    description:
      'An automated invoice processing workflow designed to extract information, organize records, process business data, and trigger appropriate notifications.',
    technologies: ['n8n', 'AI Document Processing', 'Email', 'Database'],
    category: 'document-automation',
    detail: {
      problem:
        'Invoices arriving by email or upload required manual data entry into records, which is slow and prone to errors.',
      solution:
        'A workflow that automatically extracts invoice data, validates it, organizes it into records, and notifies the relevant team when action is needed.',
      workflow: [
        'Invoice received (email / upload)',
        'AI extracts structured data',
        'Data validated against business rules',
        'Record stored in database',
        'Notification triggered for approval / payment',
      ],
      howItWorks:
        'Document processing extracts line items, totals, and vendor details from each invoice, validation rules flag anything unusual, and confirmed records are written to the database with an automatic notification to the responsible person.',
      technologies: ['n8n', 'AI Document Processing', 'Email', 'Database'],
      businessImpact:
        'Reduces manual data entry and speeds up the time between receiving an invoice and it being processed and recorded.',
      futureImprovements:
        'Add automated matching against purchase orders and payment-status tracking.',
    },
  },
  {
    id: 'ai-receptionist-concept',
    title: 'AI Receptionist',
    description:
      'An AI-powered receptionist concept designed to handle customer inquiries, provide information, qualify leads, and route conversations.',
    technologies: ['AI Agents', 'n8n', 'APIs'],
    category: 'ai-agents',
    detail: {
      problem:
        'Answering routine inquiries manually takes time away from higher-value work, and inconsistent responses can lose potential customers.',
      solution:
        'An AI agent that handles common inquiries directly, gathers the information needed to qualify a visitor, and routes the conversation to the right next step.',
      workflow: [
        'Inquiry received',
        'AI agent interprets the request',
        'Common questions answered directly',
        'Visitor qualified',
        'Conversation routed to the right destination',
      ],
      howItWorks:
        'The AI agent is configured with the business\u2019s common questions and qualification criteria, so it can respond directly for routine queries and hand off more complex or high-intent conversations to the right person or workflow.',
      technologies: ['AI Agents', 'n8n', 'APIs'],
      businessImpact:
        'Frees up time spent on repetitive inquiries while making sure qualified visitors are still routed to a real person quickly.',
      futureImprovements:
        'Extend to multi-channel support (voice, WhatsApp, live chat) with shared context.',
    },
  },
];
