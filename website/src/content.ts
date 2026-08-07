export const profile = {
  name: 'Satish Kallepalli',
  role: 'Staff Software Engineer',
  focus: 'Distributed Systems · AI Platforms · Cloud-Native Backends',
  location: 'San Francisco Bay Area',
  email: 'satishkallepalli940@gmail.com',
  phone: '(510) 371-3621',
  linkedin: 'https://linkedin.com/in/satish-k-28b227a7',
  resumePath: '/Satish_Kallepalli_Resume.pdf',
  summary:
    'Staff engineer with 14+ years shipping distributed backends and production AI for Fortune 500 teams. I own systems end to end — from architecture and performance to reliability when customers depend on them.',
}

export const impact = [
  {
    label: 'Manual work cut',
    value: '80%+',
    detail: 'AI rate-card extraction pipeline at IPG',
  },
  {
    label: 'Platform uptime',
    value: '99.9%',
    detail: 'Halogen media operations under peak load',
  },
  {
    label: 'Loyalty throughput',
    value: 'Millions/day',
    detail: 'Kafka event pipelines at Gap',
  },
  {
    label: 'Deploy speed',
    value: '40% faster',
    detail: 'Jenkins → GitHub Actions modernization',
  },
]

export const projects = [
  {
    company: 'Kinesso / IPG',
    title: 'Natural-Language Chat on Snowflake Cortex',
    blurb:
      'Entitlement-safe NLQ for media planners. English questions become audited Snowflake answers with fail-closed SQL guardrails, rate limits, and ArchUnit package boundaries.',
    tags: ['Java 21', 'Spring Boot', 'Cortex Analyst', 'Angular', 'Datadog'],
    metrics: ['1,299 green unit tests', 'Per-user rate limiting', 'Audit-logged queries'],
  },
  {
    company: 'Kinesso / IPG',
    title: 'AI Rate Card Automation',
    blurb:
      'Distributed AI pipeline that turns partner Excel, CSV, and PDF rate cards into structured records — the system of record for media investment planning.',
    tags: ['LangChain', 'LangGraph', 'RAG', 'Redis', 'Snowflake', 'S3'],
    metrics: ['80%+ less manual processing', 'Parallel extraction', 'Fault-tolerant batches'],
  },
  {
    company: 'Kinesso / IPG',
    title: 'Investment Reporting Platform',
    blurb:
      'Self-service multi-tenant report builder over multi-billion-dollar commitment and forecast data, with entitlement-aware SQL and async large exports.',
    tags: ['Java 21', 'Snowflake', 'EKS', 'PostgreSQL', 'Flyway'],
    metrics: ['100K+ row exports', 'Zero-downtime deploys', '5 unified datasets'],
  },
  {
    company: 'Gap Inc.',
    title: 'Loyalty + Event Streaming Platform',
    blurb:
      'Enterprise loyalty microservices on Kafka for real-time point accrual and redemption across e-commerce and retail, validated under peak concurrent traffic.',
    tags: ['Spring Boot', 'Kafka', 'PCF', 'Gatling', 'Cosmos DB'],
    metrics: ['Millions of txns/day', 'Peak-load validated', 'Multi-brand touchpoints'],
  },
  {
    company: 'Gap Inc.',
    title: 'OIDC / OAuth 2.0 Auth Service',
    blurb:
      'Centralized authentication for Gap microservices using OIDC/OAuth 2.0, with Zuul for internal routing and Apigee for API management and edge security.',
    tags: ['OIDC', 'OAuth 2.0', 'Zuul', 'Apigee', 'Spring Boot'],
    metrics: ['Platform-wide auth', 'Standardized tokens', 'API policy at the edge'],
  },
]

export const experience = [
  {
    role: 'Technical Lead / Staff Software Engineer',
    org: 'Kinesso (Interpublic Group)',
    dates: 'Feb 2022 – Present',
    points: [
      'Lead architecture and delivery for AI and reporting platforms used by media planners.',
      'Own production reliability, mentoring, and cross-team design decisions.',
    ],
  },
  {
    role: 'Lead Software Engineer',
    org: 'Gap Inc.',
    dates: 'May 2018 – Jan 2022',
    points: [
      'Loyalty platform, customer profile microservices migration, and centralized OIDC auth.',
      'High-throughput Kafka systems and zero-downtime modernization on PCF.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    org: 'Gap Inc. (via Nisum)',
    dates: 'Dec 2011 – Apr 2018',
    points: [
      'Full-stack retail platforms including Price & Event Management and localized promotions.',
      'Led onsite / offshore teams with strong automation and TDD practices.',
    ],
  },
]

export const skills = {
  Languages: ['Java', 'Python', 'TypeScript', 'SQL'],
  Backend: ['Spring Boot', 'Node.js', 'REST', 'OIDC / OAuth 2.0'],
  Distributed: ['Kafka', 'SQS / SNS', 'Redis', 'Event-driven design'],
  Data: ['Snowflake', 'PostgreSQL', 'MongoDB', 'Cosmos DB'],
  'AI / LLM': ['Cortex Analyst', 'LangChain', 'LangGraph', 'RAG', 'MCP'],
  Cloud: ['AWS', 'EKS', 'Docker', 'Kubernetes', 'PCF'],
}

export const approach = [
  {
    title: 'Own the hard path',
    body: 'I take systems from design through production: performance, failure modes, and the customer-facing edge cases.',
  },
  {
    title: 'Ship AI like infrastructure',
    body: 'Entitlements, audit logs, rate limits, and evals first — so LLM features are safe enough for enterprise use.',
  },
  {
    title: 'Scale with intent',
    body: 'Measure bottlenecks, load-test the peaks, and design for the next order of magnitude before it becomes an incident.',
  },
]
