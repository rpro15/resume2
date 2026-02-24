// Portfolio data
const portfolioData = {
  hero: {
    name: "Ruslan Durdyyev",
    title: "Junior DevOps Engineer / System Administrator",
    subtitle: "Infrastructure Deployment & Automation | Linux | Docker | Kubernetes | Ansible",
    avatar: "assets/images/avatar.jpg",
  },
  about: {
    description:
      "Passionate Junior DevOps Engineer with experience in cloud infrastructure, CI/CD pipelines, and containerization. Committed to delivering reliable and efficient solutions.",
    certifications: [
      {
        name: "Geekbrains - DevOps Engineer",
        duration: "9 months",
        year: "2025",
      },
      {
        name: "Cloud Services Engineer",
        year: "2025",
      },
      {
        name: "Cloud Technologies Engineer Yandex Cloud",
        year: "2025",
      },
      {
        name: "Python Developer",
        issuer: "University 20.23",
        year: "2024",
      },
    ],
  },
  skills: [
    { name: "Linux", level: 5, category: "Operating Systems" },
    { name: "Docker", level: 5, category: "Containerization" },
    { name: "Bash", level: 5, category: "Scripting" },
    { name: "Ansible", level: 4, category: "Automation" },
    { name: "Kubernetes", level: 4, category: "Orchestration" },
    { name: "Python", level: 4, category: "Programming" },
    { name: "Git", level: 4, category: "Version Control" },
    { name: "Terraform", level: 4, category: "Infrastructure as Code" },
    { name: "Nginx", level: 4, category: "Web Servers" },
    { name: "Prometheus", level: 4, category: "Monitoring" },
    { name: "Grafana", level: 4, category: "Visualization" },
    { name: "GitLab CI", level: 4, category: "CI/CD" },
    { name: "Zabbix", level: 4, category: "Monitoring" },
    { name: "Virtualization", level: 5, category: "Virtualization" },
    { name: "SQL", level: 3, category: "Databases" },
    { name: "Apache Kafka", level: 3, category: "Message Broker" },
  ],
  toolbox: [
    {
      name: "Linux",
      description: "Linux server administration",
      icon: "linux.svg",
      proficiency: "Advanced",
    },
    {
      name: "Docker",
      description: "Application containerization",
      icon: "docker.svg",
      proficiency: "Advanced",
    },
    {
      name: "Kubernetes",
      description: "Container orchestration",
      icon: "k8s.svg",
      proficiency: "Intermediate",
    },
    {
      name: "Ansible",
      description: "Deployment automation",
      icon: "ansible.svg",
      proficiency: "Intermediate",
    },
    {
      name: "Prometheus",
      description: "Monitoring and alerting",
      icon: "prometheus.svg",
      proficiency: "Intermediate",
    },
    {
      name: "Grafana",
      description: "Metrics visualization",
      icon: "grafana.svg",
      proficiency: "Intermediate",
    },
    {
      name: "GitLab CI",
      description: "CI/CD pipelines",
      icon: "gitlab.svg",
      proficiency: "Intermediate",
    },
    {
      name: "Zabbix",
      description: "Infrastructure monitoring",
      icon: "zabbix.svg",
      proficiency: "Intermediate",
    },
    {
      name: "Python",
      description: "Automation and scripting",
      icon: "python.svg",
      proficiency: "Intermediate",
    },
    { name: "Bash", description: "Shell scripting", icon: "bash.svg", proficiency: "Advanced" },
    { name: "Git", description: "Version control", icon: "git.svg", proficiency: "Intermediate" },
    {
      name: "Helm",
      description: "Kubernetes package manager",
      icon: "helm.svg",
      proficiency: "Intermediate",
    },
  ],
  experience: [
    {
      position: "DevOps Engineer Intern",
      company: "GeekBrаins",
      startDate: "2024-07-01",
      endDate: "2025-12-31",
      description:
        "Deployment and configuration of UAT, PROD and DEV environments for various applications. Process automation with Ansible.",
      achievements: [
        "Deployed and configured UAT, PROD and DEV environments for various applications and solutions",
        "Developed and updated Ansible deployment scripts",
        "Resolved incidents according to developer instructions and consulted system administrators",
        "Supported and tested system solutions",
        "Developed scripts and a complex for collecting and analyzing incidents using Python3 and Flask",
        "Worked with Oracle JVM, Camunda BPM and Nginx",
        "Regularly updated technical documentation",
      ],
    },
  ],
  projects: [
    {
      name: "Linux-AI Manager: Smart Virtual Administrator",
      description:
        "AI agent for automating sysadmin tasks: system monitoring, troubleshooting, process management. NLP-powered chatbot for diagnostics and solution proposals based on system logs.",
      technologies: [
        "Python",
        "Langchain",
        "OpenAI API",
        "ELK Stack",
        "Elasticsearch",
        "Logstash",
        "Kibana",
        "NLP",
        "Telegram Bot",
      ],
      link: "https://github.com/rpro15/linux-ai-manager",
      github: "https://github.com/rpro15/linux-ai-manager",
      status: "In Development",
      badge: "🚀 Coming Soon",
    },
    {
      name: "AI Infrastructure as Code Generator",
      description:
        "Tool for automatic generation of Terraform/Ansible configurations from natural language. GitOps integration, CI/CD pipeline generation, automatic YAML testing.",
      technologies: [
        "Python",
        "OpenAI GPT",
        "Langchain",
        "Terraform",
        "Ansible",
        "GitOps",
        "PyTest",
        "YAML",
      ],
      link: "https://github.com/rpro15/ai-iac-generator",
      github: "https://github.com/rpro15/ai-iac-generator",
      status: "In Development",
      badge: "🚀 Coming Soon",
    },
    {
      name: "Incident Collection & Analysis System",
      description:
        "Built with Python3 and Flask for rapid incident collection and analysis. Integration with monitoring systems for automatic response to technical issues.",
      technologies: ["Python", "Flask", "REST API", "Monitoring Integration"],
      link: "https://github.com/rpro15/incident-collector",
      github: "https://github.com/rpro15/incident-collector",
    },
    {
      name: "Ansible Deployment Scripts",
      description:
        "Collection of Ansible playbooks for automated UAT, PROD and DEV environment deployment. Includes server configuration, application deployment and monitoring setup.",
      technologies: ["Ansible", "YAML", "Bash", "Linux", "Docker"],
      link: "https://github.com/rpro15/ansible-deployments",
      github: "https://github.com/rpro15/ansible-deployments",
    },
    {
      name: "Zabbix Monitor",
      description:
        "Infrastructure monitoring system based on Zabbix. Includes agent setup, trigger and alert creation, monitoring of Linux servers, Docker containers and services. Automated metrics collection and notifications.",
      technologies: ["Zabbix", "Linux", "Bash", "Python", "Docker", "Monitoring", "Alerting"],
      link: "https://github.com/rpro15/zabbix-monitor",
      github: "https://github.com/rpro15/zabbix-monitor",
    },
  ],
  contact: {
    email: "rpro15@mail.ru",
    phone: "+7 991 939-00-16",
    telegram: "https://t.me/rpro15",
    github: "https://github.com/rpro15",
    otherLinks: [],
  },
};
