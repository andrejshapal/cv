const skills = [
  {
    name: "monitoring",
    icon: "icon-mon",
    default: true,
    items: [
      {
        name: "Grafana",
        description:
          "I know Grafana better than myself. Extensive experience managing and maintaining a self-hosted Grafana instance for over three years. Proficient in utilizing official and unofficial plugins and data sources, creating advanced visualizations with JavaScript, and implementing Grafana alerting systems. Developed custom services to extend functionality and automate tasks, optimizing performance and usability.",
      },
      {
        name: "Loki",
        description:
          "Expertise in deploying, maintaining, and managing large-scale Loki instances with millions of active streams. Deep knowledge of LogQL, including undocumented capabilities. Skilled in working with the Loki API, integrating various tools, utilizing LokiCLI, and handling bucket operations for log management.",
      },
      {
        name: "Open Telemetry",
        description:
          "Developed services adhering to OpenTelemetry protocols. Gained hands-on experience testing OpenTelemetry but prioritized Grafana Agent (Alloy) for enhanced functionality in monitoring and observability workflows.",
      },
      {
        name: "Grafana Alloy",
        description:
          "Successfully led the transition to the unified Grafana Alloy bundle, delivering substantial improvements in system monitoring and logging efficiency.",
      },
      {
        name: "Promtail",
        description:
          "Proficient in using Promtail as a primary log scraper within the Grafana Alloy ecosystem. Extensive experience leveraging its powerful functionality for log aggregation and forwarding to Loki.",
      },
      {
        name: "Fluentd",
        description:
          "Utilized Fluentd as a secondary logging source for Loki, enhancing log ingestion and processing workflows.",
      },
      {
        name: "Prometheus",
        description:
          "Comprehensive expertise in managing medium-scale Prometheus environments with millions of active streams. Advanced knowledge of PromQL and metrics design, including the development of custom metric exporters and services for data collection. Skilled in deploying and configuring the Kube-Prometheus-Stack.",
      },
      {
        name: "Thanos",
        description:
          "Managed and maintained Thanos as a centralized metric storage solution prior to migrating to Mimir. Acquired significant hands-on experience troubleshooting and optimizing Thanos deployments.",
      },
      {
        name: "Mimir",
        description:
          "Led the transition from Thanos to a self-hosted Mimir cluster, implementing robust metric storage and management solutions. Successfully maintained the Mimir environment to improve scalability and reliability.",
      },
      {
        name: "Victoria Metrics",
        description:
          "Contributed to comparative research on metric scrapers and storage solutions. Provided mentorship during the migration from Prometheus to Victoria Metrics, ensuring a seamless transition.",
      },
      {
        name: "Alertmanager",
        description:
          "Extensive experience managing alerts via Alertmanager in a GitOps-driven workflow. Proficient in developing frameworks and wrappers to automate alerting processes, streamlining operations, and enhancing reliability.",
      },
    ],
  },
  {
    name: "development",
    icon: "icon-pl",
    items: [
      {
        name: "PHP",
        description:
          "Started programming with PHP over 15 years ago, launching multiple websites using PHP-based engines like WordPress. Developed plugins and standalone internal management services. While I don't actively use PHP now, preferring strictly typed or interpreted languages like Python and JavaScript, this foundational experience shaped my programming culture.",
      },
      {
        name: "JavaScript",
        description:
          "Second language learned, with experience dating back to even pre-jQuery days. Initially used for UI development and later for creating internal user-facing services with Node.js and frameworks like React. Frequently used as a scripting language, although avoided for backend development due to efficiency considerations compared to Golang.",
      },
      {
        name: "Scala",
        description:
          "Maintain and develop production Scala services, though I am still refining my understanding of its best practices. Currently evaluating the suitability of Scala (or Java) for long-term development projects.",
      },
      {
        name: "C++",
        description:
          "Strong foundational knowledge and algorithmic practice in C++. While proficient, I find Scala a less cumbersome choice for certain projects.",
      },
      {
        name: "Golang",
        description:
          "My primary language for writing services, focusing on efficient and maintainable software solutions.",
      },
      {
        name: "Python",
        description:
          "Utilized for writing scripts, automation jobs, and other tasks. Advocate for replacing shell/bash scripts with Python for its readability and robust functionality.",
      },
      {
        name: "Git",
        description:
          "Extensive experience using Git for version control, including platforms like GitHub and GitLab for collaboration and project management.",
      },
      {
        name: "LLM",
        description:
          "Proficient user of large language models (LLMs) like ChatGPT, leveraging them for task assistance, information retrieval, code debugging, and generating simple functions or scripts. Skilled at utilizing LLMs effectively while understanding their limitations. This CV itself was enhanced with the help of ChatGPT to ensure clarity and readability.",
      },
      {
        name: "SoC",
        description:
          "Experience in configuring and implementing Arduino or Raspberry Pi based devices in production environments.",
      },
    ],
  },
  {
    name: "data",
    icon: "icon-db",
    items: [
      {
        name: "MySQL",
        description:
          "Extensive production experience with MySQL, primarily in small-scale projects. Proficient in SQL and database management.",
      },
      {
        name: "PostgreSQL",
        description:
          "Primary database used in recent years for high-load and big data applications. Enhanced standard distribution with the TimeScaleDB plugin. Proficient in SQL and experienced with configuring the Postgres Operator for automated database cluster creation.",
      },
      {
        name: "Clickhouse",
        description:
          "Participated in configuring specific mechanisms of self-hosted Clickhouse. Focused on creating dashboards using the Clickhouse Grafana Datasource to visualize data effectively.",
      },
      {
        name: "Kafka",
        description:
          "Monitored and debugged both Confluent Kafka and self-hosted Kafka instances over an extended period.",
      },
      {
        name: "Redis",
        description:
          "Enhanced open-source services that utilize Redis, improving performance and reliability.",
      },
      {
        name: "Memcache",
        description:
          "Configured Memcache for logging applications, optimizing performance and reducing costs by minimizing reliance on long-term storage solutions.",
      },
      {
        name: "Spreadsheets",
        description:
          "Expert in programming Excel and Google Sheets using built-in formulas and scripting to create automated and efficient workflows.",
      },
    ],
  },
  {
    name: "kubernetes",
    icon: "icon-k8s",
    items: [
      {
        name: "K8s",
        description:
          "Experience setting up cloud and self-hosted Kubernetes (K8s). Skilled in delivering and operating services within Kubernetes clusters.",
      },
      {
        name: "Minikube",
        description:
          "Utilized Minikube for local development and testing of Kubernetes-based applications and configurations.",
      },
      {
        name: "ArgoCD",
        description:
          "Proficient in configuring, maintaining, and operating ArgoCD for GitOps workflows. Experienced in developing generator plugins to extend its functionality.",
      },
      {
        name: "Helm",
        description:
          "Skilled in developing, maintaining, and deploying Helm charts. Familiar with working with self-hosted ChartMuseum and Harbor repositories for Helm package management.",
      },
      {
        name: "Docker",
        description:
          "Expertise in developing, maintaining, and distributing Docker images to support containerized applications.",
      },
      {
        name: "CI/CD",
        description:
          "Proficient in developing, maintaining, and operating CI/CD pipelines using tools like GitLab and Jenkins. Strong understanding of GitOps principles and CI/CD practices to streamline code building, testing, and delivery for engineering teams.",
      },
    ],
  },
  {
    name: "cloud",
    icon: "icon-cloud",
    items: [
      {
        name: "Google Cloud",
        description:
          "Experience in monitoring Google Cloud environments and participating in operations involving Kubernetes (K8s) and virtual machines (VMs). Configured and managed Cloud Storage instances.",
      },
      {
        name: "Hetzner",
        description:
          "Monitored Hetzner Cloud (hcloud) environments and contributed to operations involving infrastructure management.",
      },
      {
        name: "Terraform",
        description:
          "Skilled in delivering resources via Terraform and developing Terraform/Terragrunt modules to streamline infrastructure provisioning.",
      },
    ],
  },
  {
    name: "Project Management",
    icon: "icon-pm",
    items: [
      {
        name: "Agile - Scrum",
        description:
          "Skilled in applying the Scrum framework for project leadership and execution, ensuring effective team collaboration and delivery.",
      },
      {
        name: "Jira",
        description:
          "Extensive experience in operating and configuring Jira projects for efficient task and project management.",
      },
      {
        name: "Documents",
        description:
          "Proficient in creating comprehensive documentation using Confluence, Word, and Google Docs.",
      },
    ],
  },
];
