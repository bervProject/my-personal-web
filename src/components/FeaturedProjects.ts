import { defineComponent } from 'vue';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  url?: string;
  repoUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Microservices Migration',
    description:
      'Led the migration of a monolithic .NET application to a microservices architecture on Azure Kubernetes Service, reducing deployment time by 60% and improving system resilience.',
    tags: ['.NET', 'Docker', 'Kubernetes', 'Azure', 'PostgreSQL'],
    repoUrl: 'https://github.com/berviantoleo',
  },
  {
    title: 'CI/CD Pipeline Automation',
    description:
      'Designed and implemented a fully automated CI/CD pipeline using GitHub Actions and Docker, enabling zero-downtime deployments and integrating security scanning at every stage.',
    tags: ['GitHub Actions', 'Docker', 'DevSecOps', 'Node.js'],
    repoUrl: 'https://github.com/berviantoleo',
  },
  {
    title: 'Cloud-Native Architecture',
    description:
      'Architected a cloud-native solution using PostgreSQL, Redis, and containerised .NET services on DigitalOcean, delivering high availability and horizontal scalability for production workloads.',
    tags: ['.NET', 'PostgreSQL', 'Redis', 'Docker', 'DigitalOcean'],
    url: 'https://dev.to/berviantoleo',
    repoUrl: 'https://github.com/berviantoleo',
  },
];

export default defineComponent({
  name: 'FeaturedProjects',
  data() {
    return {
      projects,
    };
  },
});
