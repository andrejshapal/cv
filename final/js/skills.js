const skills = [
  {
    name: "monitoring",
    icon: "icon-mon",
    default: true,
    items: [
      {
        name: "Grafana",
        description:
          "I know Grafana better than myself. For the last 3 years, I've been maintaining and managing a self-hosted Grafana instance using various official and unofficial plugins and datasources. I develop visualizations using JS, implement Grafana alerting, and write services to extend Grafana's functionality and automate tasks. If I had to choose one thing to take with me on an uninhabited island, it would be Grafana. I can't imagine life without it.",
      },
      {
        name: "Loki",
        description:
          "Deploying, maintaining, and managing Loki (with a few million active streams). Full knowledge (by full, I mean broader than just documented) of LogQL. I have experience working with the Loki API, various integrations, LokiCLI, and bucket operations.",
      },
      {
        name: "Open Telemetry",
        description:
          "I tested OpenTelemetry itself but didn't use it much in favor of Grafana Alloy (Grafana Agent). However, I developed services that comply with OpenTelemetry protocols.",
      },
      {
        name: "Grafana Alloy",
        description:
          "Led the transition from various services to the unified Alloy bundle, achieving significant improvements in the monitoring/logging system.",
      },
      {
        name: "Promtail",
        description:
          "A very convenient log scraper with amazing functionality. Promtail is implemented in Alloy, and I use it as the primary log source for Loki.",
      },
      {
        name: "Fluentd",
        description: "Used as a secondary logging source for Loki.",
      },
      {
        name: "Prometheus",
        description:
          "Managing and maintaining Prometheus of medium size (a few million active streams). Deep knowledge of PromQL and the nature of metrics. I developed services to export metrics and created custom metric exporters. I also used the Kube-prometheus-stack.",
      },
      {
        name: "Thanos",
        description:
          "Managed and maintained Thanos as a centralized metric storage until transitioning to Mimir. I have a lot of experience managing Thanos, but I can't say this experience was always successful.",
      },
      {
        name: "Mimir",
        description:
          "Managing and maintaining a self-hosted Mimir cluster. Led the transition from Thanos to Mimir.",
      },
      {
        name: "Victoria Metrics",
        description:
          "Participated in research comparing different metric scrapers and stores. Mentored the transition from Prometheus to Victoria Metrics.",
      },
      {
        name: "Alertmanager",
        description:
          "Maintaining and managing alerts via Alertmanager (GitOps). Full knowledge. Developed frameworks and wrappers around Alertmanager to automate certain processes.",
      },
    ],
  },
  {
    name: "programming",
    icon: "icon-pl",
    items: [
      {
        name: "PHP",
        description:
          "This is the language I started with more than 15 years ago. Since then, I have launched several websites using PHP-based engines like WordPress. I wrote plugins and developed standalone internal management services. I don't use PHP much now, preferring languages with strict typing or interpreted languages. PHP lost the competition to Python and JavaScript due to installation complexity.",
      },
      {
        name: "JavaScript",
        description:
          "This was the second language I learned, back when even jQuery wasn't popular. I used it for developing user interfaces. With the rise of Node.js and UI frameworks (such as React), I developed internal user-facing services with UI. I use JavaScript as a scripting language but avoid using it for backend development due to its lower efficiency compared to Golang.",
      },
      {
        name: "Scala",
        description:
          "I maintain and develop production Scala services. At this point, I am not fully confident in the approaches used in Scala. I'm unsure whether Scala (or Java) is the right language for my future development.",
      },
      {
        name: "C++",
        description:
          "Classical knowledge. Algorithm practice. When choosing between C++ and Scala, I find that Scala sounds less painful.",
      },
      {
        name: "Golang",
        description: "This is the language I currently use to write services.",
      },
      {
        name: "Python",
        description:
          "I use Python to write scripts, jobs, etc. I strongly believe that Python should replace shell/bash scripts.",
      },
    ],
  },
];
