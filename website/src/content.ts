export const profile = {
  name: 'Satish Kallepalli',
  role: 'Staff Software Engineer',
  focus: 'Distributed Systems · Production AI · Cloud-Native Backends',
  location: 'San Francisco Bay Area',
  email: 'satishkallepalli940@gmail.com',
  phone: '(510) 371-3621',
  linkedin: 'https://linkedin.com/in/satish-k-28b227a7',
  website: 'https://satishkallepalli-kso.github.io/',
  resumePath: '/Satish_Kallepalli_Resume.pdf',
  availability: 'Open to Staff / Senior roles · US-based · Hybrid or remote',
  headline:
    'I design and ship production systems that move data, enforce entitlements, and put AI into real workflows — with the same reliability bar as large-scale Java platforms.',
  summary:
    'Staff engineer with 14+ years at Fortune 500 companies (IPG / Kinesso, Gap Inc.). Recent signature work: entitlement-safe Snowflake Cortex NLQ, an AI rate-card pipeline that cut 80%+ manual effort, and Kafka loyalty systems at millions of transactions/day. I own architecture, delivery, and production outcomes.',
}

export const recruiterFacts = [
  { label: 'Level', value: 'Staff / Technical Lead' },
  { label: 'Years', value: '14+' },
  { label: 'Domain', value: 'Distributed systems + Applied AI' },
  { label: 'Location', value: 'SF Bay Area' },
  { label: 'Work auth', value: 'Based in the US' },
  { label: 'Best fit', value: 'High-ownership backend / AI platform roles' },
]

export const impact = [
  {
    label: 'Manual work cut',
    value: '80%+',
    detail: 'AI rate-card extraction at IPG',
  },
  {
    label: 'Platform uptime',
    value: '99.9%',
    detail: 'Halogen under high concurrent load',
  },
  {
    label: 'Event throughput',
    value: 'Millions/day',
    detail: 'Gap loyalty on Kafka',
  },
  {
    label: 'Test suite',
    value: '1,299',
    detail: 'Green unit tests + ArchUnit boundaries',
  },
]

export type CaseStudy = {
  id: string
  featured: boolean
  systemsHighlight?: boolean
  company: string
  title: string
  role: string
  problem: string
  approach: string
  ownership: string
  outcomes: string[]
  architecture: string[]
  tags: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'cortex-nlq',
    featured: true,
    company: 'Kinesso / Interpublic Group',
    title: 'Entitlement-safe NLQ on Snowflake Cortex',
    role: 'Staff / Technical Lead · Architected & shipped',
    problem:
      'Media planners needed answers from multi-billion-dollar investment data without waiting on data engineering for ad-hoc SQL — but naive NL-to-SQL would leak cross-client data.',
    approach:
      'Built an entitlement-safe NLQ path: HARD prompt injection of client/market entitlements, fail-closed SQL guardrails on Cortex output, token-bucket rate limits, and a full audit trail for Support and compliance.',
    ownership:
      'Owned service design, security model, observability, Angular UX integration, and ArchUnit package boundaries so the module can extract later.',
    outcomes: [
      'Deterministic, audit-logged Snowflake answers for planners',
      'Per-user + per-report rate limiting with Datadog outcome metrics',
      '1,299 green unit tests retained through refactors',
      '40 golden regression questions per dataset',
    ],
    architecture: [
      'Planner UI',
      'NLQ API (Spring Boot)',
      'Entitlement + SQL guardrails',
      'Snowflake Cortex Analyst',
      'Semantic Views + audit DB',
    ],
    tags: [
      'Java 21',
      'Spring Boot',
      'Snowflake Cortex',
      'Angular',
      'Bucket4j',
      'Datadog',
      'ArchUnit',
    ],
  },
  {
    id: 'rate-card-ai',
    featured: true,
    company: 'Kinesso / Interpublic Group',
    title: 'AI Rate Card Automation Platform',
    role: 'Staff / Technical Lead · Platform architecture',
    problem:
      'Partner rate cards arrived as messy Excel, CSV, and PDF files. Manual extraction blocked media investment planning and created inconsistent system-of-record data.',
    approach:
      'Designed a distributed, fault-tolerant extraction pipeline with parallel Java concurrency, LangChain/LangGraph agent steps, Redis caching, and Snowflake as the structured landing zone.',
    ownership:
      'Owned pipeline architecture, reliability patterns, production debugging/RCA, and iteration loops with partner feedback.',
    outcomes: [
      '80%+ reduction in manual processing time',
      'Horizontal scale with retries and validation gates',
      'Lower latency via Redis-backed lookup elimination',
      'Became the planning system of record for extracted rates',
    ],
    architecture: [
      'Ingest (S3)',
      'Parallel extract workers',
      'LLM / RAG agents',
      'Validation + retry',
      'Snowflake + APIs',
    ],
    tags: [
      'Java',
      'Python',
      'LangChain',
      'LangGraph',
      'RAG',
      'Redis',
      'Snowflake',
      'AWS S3',
    ],
  },
  {
    id: 'loyalty-kafka',
    featured: true,
    systemsHighlight: true,
    company: 'Gap Inc.',
    title: 'Enterprise Loyalty Event Platform',
    role: 'Lead Software Engineer · Architecture & scale',
    problem:
      'Loyalty benefits had to work in real time across e-commerce and retail touchpoints for millions of members — with peak traffic that could not take down accruals or redemptions.',
    approach:
      'Built Spring Boot microservices on an event-driven Kafka backbone for point accrual/redemption, with multi-layer testing and Gatling peak validation.',
    ownership:
      'Owned distributed service design, event flow reliability, and performance validation for company-critical loyalty traffic.',
    outcomes: [
      'Millions of transactions/day',
      'Real-time benefits across brand touchpoints',
      'Peak-load behavior validated with Gatling',
      'Fault-tolerant microservices on PCF',
    ],
    architecture: [
      'Brand touchpoints',
      'Loyalty APIs',
      'Kafka event bus',
      'Accrual / redeem services',
      'Cosmos DB + MariaDB',
    ],
    tags: ['Java', 'Spring Boot', 'Kafka', 'PCF', 'Gatling', 'Cosmos DB'],
  },
  {
    id: 'customer-profile',
    featured: false,
    systemsHighlight: true,
    company: 'Gap Inc.',
    title: 'Customer Profile Services Migration',
    role: 'Lead Software Engineer · Platform modernization',
    problem:
      'Gap’s customer profile lived in a legacy monolith that could not scale independently or evolve quickly across brands and channels.',
    approach:
      'Led the transformation into independent, horizontally scalable Spring Boot microservices with a zero-downtime migration that preserved data integrity across legacy and modern systems.',
    ownership:
      'Owned migration strategy, service boundaries, dual-write/cutover safety, and a multi-layer automation suite that raised coverage from 60% to 95%.',
    outcomes: [
      'Monolith → independently deployable microservices',
      'Zero-downtime migration with data integrity preserved',
      'Test coverage lifted from 60% to 95%',
      'Foundation for loyalty and personalization services',
    ],
    architecture: [
      'Legacy profile monolith',
      'Strangler / cutover path',
      'Profile microservices',
      'Cosmos DB + Oracle',
      'PCF + Gatling',
    ],
    tags: ['Java', 'Spring Boot', 'Cosmos DB', 'Oracle', 'PCF', 'Gatling'],
  },
  {
    id: 'pricing-promotions',
    featured: false,
    systemsHighlight: true,
    company: 'Gap Inc. (via Nisum)',
    title: 'Pricing, Events & Localized Promotions',
    role: 'Senior Software Engineer · Full-stack retail platforms',
    problem:
      'Retail pricing events and local promotions needed reliable full-stack systems to manage price changes and recommend localized offers at high daily volume.',
    approach:
      'Built the Price & Event Management platform on Spring Boot + MongoDB + AngularJS (PCF), and contributed to LOKI Localized Promotions — a Spring REST + MongoDB recommendation engine for millions of localized pricing recommendations daily.',
    ownership:
      'Led onsite/offshore delivery, automation (Selenium / Protractor), and TDD/Cucumber E2E coverage that cut regression time significantly.',
    outcomes: [
      'Price & Event Management platform shipped on PCF',
      'LOKI processed millions of localized recommendations/day',
      'Regression time cut ~60% via automation',
      'Strong TDD + Selenium/Cucumber E2E coverage',
    ],
    architecture: [
      'Pricing / event UI',
      'Spring Boot APIs',
      'MongoDB',
      'LOKI recommendation engine',
      'PCF + Jenkins',
    ],
    tags: [
      'Java',
      'Spring Boot',
      'MongoDB',
      'AngularJS',
      'Selenium',
      'Cucumber',
    ],
  },
  {
    id: 'report-builder',
    featured: false,
    systemsHighlight: false,
    company: 'Kinesso / Interpublic Group',
    title: 'Investment Reporting Platform (GATE / Report Builder)',
    role: 'Staff / Technical Lead',
    problem:
      'Planners lived in fragile Excel workflows over huge commitment and forecast datasets. Large exports OOMd and dataset onboarding was slow.',
    approach:
      'Metadata-driven query engine on Java 21 + Spring Boot, entitlement-aware SQL generation, async bounded-concurrency Excel exports via S3, blue/green EKS releases.',
    ownership:
      'Architected the platform, entitlement SQL layer, export pipeline, observability, and zero-downtime release path.',
    outcomes: [
      'Self-service reporting over multi-billion-dollar media data',
      '100K+ row exports stabilized',
      'Dataset onboarding in days, not weeks',
      'Zero-downtime blue/green deploys',
    ],
    architecture: [
      'Report Builder UI',
      'Metadata query engine',
      'Entitlement SQL layer',
      'Snowflake',
      'Async export → S3',
    ],
    tags: ['Java 21', 'Spring Boot', 'Snowflake', 'EKS', 'PostgreSQL', 'Flyway'],
  },
  {
    id: 'oidc-auth',
    featured: false,
    systemsHighlight: false,
    company: 'Gap Inc.',
    title: 'Centralized OIDC / OAuth 2.0 Auth Service',
    role: 'Lead Software Engineer',
    problem:
      'Microservices were inventing auth inconsistently. The platform needed one token model and edge policy for authentication and authorization.',
    approach:
      'Implemented and operated a centralized OIDC/OAuth 2.0 service, with Zuul for internal routing and Apigee for API management and edge security.',
    ownership:
      'Implemented and managed the shared identity layer used across Gap microservices.',
    outcomes: [
      'Standardized authn/authz across services',
      'Consistent token-based access patterns',
      'Edge policy enforcement via Apigee',
      'Cleaner internal routing through Zuul',
    ],
    architecture: [
      'Clients / partners',
      'Apigee edge',
      'OIDC / OAuth service',
      'Zuul proxy',
      'Microservices',
    ],
    tags: ['OIDC', 'OAuth 2.0', 'Zuul', 'Apigee', 'Spring Boot'],
  },
  {
    id: 'halogen',
    featured: false,
    systemsHighlight: false,
    company: 'Kinesso / Interpublic Group',
    title: 'Halogen Media Operations Platform',
    role: 'Technical Lead',
    problem:
      'Flagship media operations needed modernization, higher reliability, and faster delivery while teams spanned geos during a vendor transition.',
    approach:
      'Led architectural modernization, CI/CD move from Jenkins to GitHub Actions, and production reliability with Datadog ownership.',
    ownership:
      'Directed distributed engineering teams and owned production reliability outcomes.',
    outcomes: [
      '99.9% uptime under high concurrent load',
      '40% faster deployments',
      '35% lift in user satisfaction',
      'Stronger incident visibility with Datadog',
    ],
    architecture: [
      'Planning UI',
      'Halogen services',
      'Integrations / GL',
      'CI/CD on GitHub Actions',
      'Datadog observability',
    ],
    tags: ['Java', 'Spring Boot', 'AWS', 'GitHub Actions', 'Keycloak', 'Datadog'],
  },
]

export const experience = [
  {
    role: 'Technical Lead / Staff Software Engineer',
    org: 'Kinesso (Interpublic Group)',
    dates: 'Feb 2022 – Present',
    points: [
      'Own architecture and delivery for AI + investment reporting platforms used by media planners.',
      'Lead production reliability, mentoring, hiring loops, and cross-team design decisions.',
      'Ship entitlement-safe Cortex NLQ, AI document pipelines, and multi-tenant Snowflake reporting.',
    ],
  },
  {
    role: 'Lead Software Engineer',
    org: 'Gap Inc.',
    dates: 'May 2018 – Jan 2022',
    points: [
      'Architected loyalty event systems processing millions of transactions/day on Kafka.',
      'Led customer profile monolith → microservices migration with zero-downtime cutover.',
      'Implemented centralized OIDC/OAuth auth with Zuul + Apigee across the platform.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    org: 'Gap Inc. (via Nisum Technologies)',
    dates: 'Dec 2011 – Apr 2018',
    points: [
      'Built Price & Event Management and LOKI localized promotions platforms at retail scale.',
      'Led onsite/offshore teams with Selenium/Cucumber automation and strong TDD practices.',
    ],
  },
]

export const skills = {
  Languages: ['Java (14+ yrs)', 'Python', 'TypeScript', 'SQL'],
  Backend: ['Spring Boot', 'REST', 'Node.js', 'OIDC / OAuth 2.0', 'Zuul', 'Apigee'],
  Distributed: ['Kafka', 'SQS / SNS', 'Redis', 'Event-driven design', 'CompletableFuture'],
  Data: ['Snowflake', 'Semantic Views', 'PostgreSQL', 'MongoDB', 'Cosmos DB'],
  'AI / LLM': ['Cortex Analyst', 'LangChain', 'LangGraph', 'RAG', 'MCP', 'Agents'],
  Cloud: ['AWS', 'EKS', 'Docker', 'Kubernetes', 'PCF', 'Terraform'],
  Quality: ['JUnit 5', 'ArchUnit', 'Gatling', 'Datadog', 'CI/CD'],
}

export const strengths = [
  {
    title: 'Distributed systems at customer scale',
    body: 'Event pipelines, sync-like data movement, peak-load testing, and reliability ownership when the business depends on the path.',
  },
  {
    title: 'Production AI with guardrails',
    body: 'NLQ, agents, and document pipelines shipped with entitlements, audit logs, rate limits, and fail-closed behavior.',
  },
  {
    title: 'Staff-level ownership',
    body: 'Architecture through production — mentoring, incident command, cross-team design, and decisions that stick.',
  },
]

export const lookingFor = [
  'High ownership over backend / platform / sync / AI systems customers rely on',
  'Roles where performance, reliability, and multi-region thinking matter',
  'Teams that want Staff impact: design, delivery, and raising the engineering bar',
]
