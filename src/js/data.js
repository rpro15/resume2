// Portfolio data
const portfolioData = {
    hero: {
        name: 'Alex Johnson',
        title: 'Junior DevOps Engineer',
        subtitle: 'Building scalable infrastructure with passion',
        avatar: 'assets/images/avatar.jpg'
    },
    about: {
        description: 'Passionate Junior DevOps Engineer with experience in cloud infrastructure, CI/CD pipelines, and containerization. Committed to delivering reliable and efficient solutions.',
        highlights: [
            'Certified Kubernetes Administrator',
            'Experience with AWS and Azure cloud platforms',
            'Proficient in Infrastructure as Code with Terraform'
        ]
    },
    skills: [
        { name: 'Kubernetes', level: 4, category: 'Container Orchestration' },
        { name: 'Docker', level: 5, category: 'Containerization' },
        { name: 'AWS', level: 3, category: 'Cloud Platforms' },
        { name: 'Terraform', level: 4, category: 'IaC' },
        { name: 'Jenkins', level: 3, category: 'CI/CD' },
        { name: 'Prometheus', level: 3, category: 'Monitoring' }
    ],
    toolbox: [
        { name: 'Kubernetes', description: 'Container orchestration platform', icon: 'k8s.svg', proficiency: 'Intermediate' },
        { name: 'Docker', description: 'Containerization technology', icon: 'docker.svg', proficiency: 'Advanced' },
        { name: 'Prometheus', description: 'Monitoring and alerting toolkit', icon: 'prometheus.svg', proficiency: 'Intermediate' },
        { name: 'Grafana', description: 'Analytics and monitoring platform', icon: 'grafana.svg', proficiency: 'Intermediate' },
        { name: 'Terraform', description: 'Infrastructure as Code tool', icon: 'terraform.svg', proficiency: 'Intermediate' },
        { name: 'Ansible', description: 'Configuration management tool', icon: 'ansible.svg', proficiency: 'Beginner' },
        { name: 'GitLab CI', description: 'Continuous Integration platform', icon: 'gitlab.svg', proficiency: 'Intermediate' },
        { name: 'Zabbix', description: 'Enterprise monitoring solution', icon: 'zabbix.svg', proficiency: 'Beginner' }
    ],
    experience: [
        {
            position: 'DevOps Intern',
            company: 'TechCorp Inc.',
            startDate: '2023-06-01',
            endDate: '2023-12-31',
            description: 'Assisted in maintaining CI/CD pipelines and monitoring infrastructure health.',
            achievements: [
                'Implemented automated deployment scripts reducing deployment time by 40%',
                'Set up monitoring dashboards for application performance'
            ]
        },
        {
            position: 'Junior DevOps Engineer',
            company: 'CloudTech Solutions',
            startDate: '2024-01-01',
            endDate: null,
            description: 'Responsible for container orchestration and cloud infrastructure management.',
            achievements: [
                'Migrated legacy applications to Kubernetes clusters',
                'Implemented Infrastructure as Code practices with Terraform'
            ]
        }
    ],
    projects: [
        {
            name: 'Microservices Monitoring Stack',
            description: 'Implemented comprehensive monitoring solution for microservices architecture using Prometheus and Grafana.',
            technologies: ['Prometheus', 'Grafana', 'Docker', 'Kubernetes'],
            link: 'https://github.com/alexj/microservices-monitoring',
            github: 'https://github.com/alexj/microservices-monitoring'
        },
        {
            name: 'CI/CD Pipeline Automation',
            description: 'Developed automated CI/CD pipelines for multiple projects using GitLab CI and Docker.',
            technologies: ['GitLab CI', 'Docker', 'Bash', 'Python'],
            link: 'https://github.com/alexj/cicd-automation',
            github: 'https://github.com/alexj/cicd-automation'
        },
        {
            name: 'Infrastructure as Code with Terraform',
            description: 'Created reusable Terraform modules for AWS infrastructure provisioning.',
            technologies: ['Terraform', 'AWS', 'CloudFormation'],
            link: 'https://github.com/alexj/terraform-modules',
            github: 'https://github.com/alexj/terraform-modules'
        }
    ],
    contact: {
        email: 'alex.johnson@email.com',
        linkedin: 'https://linkedin.com/in/alexjohnson',
        github: 'https://github.com/alexj',
        otherLinks: [
            { name: 'Portfolio', url: 'https://alexjohnson.dev' }
        ]
    }
};