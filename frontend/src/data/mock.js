export const timelineSteps = [
  {
    id: 'step-1',
    order: 1,
    title: 'Discovery & Workshops',
    subtitle: 'Human First',
    description: 'Stakeholder interviews, workshops, and user research to define what we build and why',
    iconName: 'User',
    expandedDetails: [
      'Stakeholder interviews to understand business goals, pain points, and success criteria',
      'Collaborative workshops with end users to map current processes and identify opportunities',
      'User persona development and needs analysis to ensure we build for the right audience',
      'Requirements prioritization sessions to align delivery with business value',
      'Change readiness assessments to prepare organizations for AI-driven transformation',
      'Discovery synthesis and alignment documentation shared with all stakeholders'
    ]
  },
  {
    id: 'step-2',
    order: 2,
    title: 'Experience Design',
    subtitle: 'Figma Make',
    description: 'User journeys and requirements defined and validated with business',
    iconName: 'PenTool',
    expandedDetails: [
      'User journey mapping and workflow definition',
      'Business stakeholder review sessions and sign-off',
      'UI/UX wireframes, prototypes, and interaction design',
      'Accessibility standards and compliance planning'
    ]
  },
  {
    id: 'step-3',
    order: 3,
    title: 'Specification Repository',
    subtitle: 'GitHub',
    description: 'Approved specifications committed as build source',
    iconName: 'GitBranch',
    expandedDetails: [
      'Architecture artifacts and technical specifications',
      'Data model and API contract definitions (OpenAPI)',
      'Integration requirements and dependency mapping',
      'Version-controlled requirement tracking with audit trail'
    ]
  },
  {
    id: 'step-4',
    order: 4,
    title: 'Emergent Build Phase',
    subtitle: 'CompassX AI',
    description: 'CompassX AI constructs the application and integrations',
    iconName: 'Cpu',
    expandedDetails: [
      'Agentic application construction from specifications',
      'API development and integration wiring',
      'Frontend component assembly and responsive layouts',
      'Automated test generation and code quality validation'
    ]
  },
  {
    id: 'step-5',
    order: 5,
    title: 'Validation and Hardening',
    subtitle: 'QA Gate',
    description: 'Business and technical validation of functionality and data',
    iconName: 'ShieldCheck',
    expandedDetails: [
      'Functional testing against business acceptance criteria',
      'Data integrity verification and schema validation',
      'Performance benchmarking and load testing',
      'Security scanning and vulnerability assessment'
    ]
  },
  {
    id: 'step-6',
    order: 6,
    title: 'Release Repository Creation',
    subtitle: 'Enterprise GitHub',
    description: 'Validated application pushed to a new GitHub repository for enterprise ownership',
    iconName: 'Package',
    expandedDetails: [
      'Validated codebase pushed to enterprise-owned repository',
      'Release notes, changelog, and migration guides generated',
      'Dependency manifest and license compliance audit',
      'Infrastructure-as-code templates and deployment configs'
    ]
  },
  {
    id: 'step-7',
    order: 7,
    title: 'Koyeb Automated Deployment',
    subtitle: 'Koyeb',
    description: 'Koyeb CI/CD automated agent pipeline deploys using internal change processes',
    iconName: 'GitPullRequest',
    expandedDetails: [
      'Automated build, lint, and artifact creation via Koyeb pipelines',
      'Deployment to QA and UAT environments for validation',
      'Integration testing across enterprise systems',
      'Change management approval gates and promotion workflows'
    ]
  },
  {
    id: 'step-8',
    order: 8,
    title: 'Production Deployment',
    subtitle: 'AWS / GCP / Azure',
    description: 'Application runs inside enterprise cloud with identity and data integration across any environment',
    iconName: 'Cloud',
    expandedDetails: [
      'Multi-cloud deployment support (AWS App Runner, GCP Cloud Run, Azure Container Apps)',
      'Identity provider integration (SSO, IAM, RBAC)',
      'Enterprise monitoring, alerting, and log aggregation',
      'Data layer connectivity verification and health checks'
    ]
  }
];

export const loopFlow = [
  { id: 'loop-1', order: 1, title: 'Design', description: 'Experience design and requirements', iconName: 'PenTool' },
  { id: 'loop-2', order: 2, title: 'Spec Repo', description: 'Specification repository updated', iconName: 'GitBranch' },
  { id: 'loop-3', order: 3, title: 'Emergent Build', description: 'Agentic application construction', iconName: 'Cpu' },
  { id: 'loop-4', order: 4, title: 'Validation', description: 'Business and technical validation', iconName: 'ShieldCheck' },
  { id: 'loop-5', order: 5, title: 'Release Repo', description: 'Enterprise repository creation', iconName: 'Package' },
  { id: 'loop-6', order: 6, title: 'Koyeb Deploy', description: 'CI/CD automated agent pipeline', iconName: 'GitPullRequest' },
  { id: 'loop-7', order: 7, title: 'Production', description: 'Live multi-cloud deployment', iconName: 'Cloud' },
  { id: 'loop-8', order: 8, title: 'Enhancement Request', description: 'Change request triggers new cycle', iconName: 'RefreshCw' }
];

export const architectureLayers = [
  {
    id: 'layer-1',
    order: 1,
    title: 'Human Experience Layer',
    description: 'Figma Make designs, workflows, user logic',
    iconName: 'Monitor',
    branches: null,
    expandedDetails: [
      'Figma component libraries and shared design tokens',
      'User flow diagrams and multi-step interaction patterns',
      'Business rule specifications and validation logic',
      'Responsive breakpoint configurations and device testing'
    ]
  },
  {
    id: 'layer-2',
    order: 2,
    title: 'Specification Layer',
    description: 'Source GitHub repository with requirements and architecture artifacts',
    iconName: 'FileText',
    branches: null,
    expandedDetails: [
      'API contract definitions using OpenAPI / Swagger specs',
      'Database schema definitions and migration scripts',
      'Integration endpoint specifications and auth flows',
      'Environment configuration templates and secrets management'
    ]
  },
  {
    id: 'layer-3',
    order: 3,
    title: 'Build Layer',
    description: 'CompassX AI runtime and agentic development',
    iconName: 'Wrench',
    branches: null,
    expandedDetails: [
      'AI-powered code generation from validated specifications',
      'Real-time validation, linting, and error correction',
      'Dependency resolution and package management',
      'Automated documentation and inline code commentary'
    ]
  },
  {
    id: 'layer-4',
    order: 4,
    title: 'Koyeb Delivery Layer',
    description: 'Koyeb CI/CD automated agent pipeline and multi-cloud deployment',
    iconName: 'Send',
    branches: null,
    expandedDetails: [
      'Koyeb automated build, tagging, and versioning pipelines',
      'CI/CD pipeline configurations with multi-stage approval gates',
      'Environment promotion workflows (Dev → QA → UAT → Prod) across AWS, GCP, and Azure',
      'Artifact versioning, container registry, and rollback support'
    ]
  },
  {
    id: 'layer-5',
    order: 5,
    title: 'Identity Layer',
    description: 'SSO authentication, IAM authorization, Role-based access',
    iconName: 'KeyRound',
    branches: null,
    expandedDetails: [
      'SAML 2.0 and OIDC single sign-on integration',
      'Role-based access control (RBAC) permission matrices',
      'Service account provisioning and key rotation policies',
      'Authentication audit logging and anomaly detection'
    ]
  },
  {
    id: 'layer-6',
    order: 6,
    title: 'Data Integration Layer',
    description: 'Enterprise data connectivity',
    iconName: 'Database',
    branches: [
      { id: 'branch-1', title: 'Static MongoDB', iconName: 'Database' },
      { id: 'branch-2', title: 'Static MCP Bridge', iconName: 'Cable' },
      { id: 'branch-3', title: 'Direct EDW Tables', iconName: 'Table2' }
    ],
    expandedDetails: [
      'Connection pooling and automatic failover configuration',
      'Data classification tagging and access governance policies',
      'Schema versioning with backward-compatible migrations',
      'Query performance monitoring and optimization rules'
    ]
  }
];

export const pipelineStages = [
  { id: 'pipeline-1', order: 1, title: 'Design Approved', description: 'Business design validated', iconName: 'CheckCircle' },
  { id: 'pipeline-2', order: 2, title: 'Spec Repo Updated', description: 'Specifications committed', iconName: 'RefreshCw' },
  { id: 'pipeline-3', order: 3, title: 'Emergent Build', description: 'Application constructed', iconName: 'Cpu' },
  { id: 'pipeline-4', order: 4, title: 'Validation Signoff', description: 'Quality verified', iconName: 'BadgeCheck' },
  { id: 'pipeline-5', order: 5, title: 'Release Repo Created', description: 'Enterprise repository ready', iconName: 'FolderGit2' },
  { id: 'pipeline-6', order: 6, title: 'Security Checks', description: 'Security validated', iconName: 'Shield' },
  {
    id: 'pipeline-7',
    order: 7,
    title: 'Koyeb Pipeline Deploy',
    description: 'Koyeb CI/CD execution across environments',
    iconName: 'Rocket',
    environments: ['Development', 'QA', 'UAT', 'Staging', 'Production']
  },
  { id: 'pipeline-8', order: 8, title: 'Production Release', description: 'Live deployment', iconName: 'Flag' }
];

export const releaseIncludes = [
  { title: 'Version history', detail: 'Semantic versioning with full commit log and diff tracking' },
  { title: 'Approval records', detail: 'Multi-level sign-off chains with timestamps and reviewers' },
  { title: 'Schema definitions', detail: 'Database schemas, migration scripts, and rollback procedures' },
  { title: 'Role permissions', detail: 'Access control matrices mapping roles to resources and actions' },
  { title: 'Change documentation', detail: 'Impact analysis, risk assessment, and deployment runbook' },
  { title: 'Rollback procedures', detail: 'Automated rollback scripts with health check verification' },
  { title: 'Compliance reports', detail: 'Dependency audit, license compliance, and security scan results' }
];

export const governanceData = {
  approvalStates: [
    {
      label: 'New',
      status: 'initial',
      description: 'Initial request submitted for review',
      requirements: [
        'Business justification document',
        'Scope definition and impact assessment',
        'Resource and timeline estimate',
        'Technical feasibility review'
      ],
      owner: 'Requestor / Business Analyst'
    },
    {
      label: 'Pending Approval',
      status: 'pending',
      description: 'Request awaiting stakeholder review and authorization',
      requirements: [
        'Business owner sign-off',
        'Technical owner review',
        'Architecture review if applicable',
        'Security assessment when required'
      ],
      owner: 'Approval Committee'
    },
    {
      label: 'In Progress',
      status: 'active',
      description: 'Active development and build phase underway',
      requirements: [
        'Assigned development resources',
        'Sprint planning and backlog grooming',
        'Regular status reporting to stakeholders',
        'Continuous integration verification'
      ],
      owner: 'Development Team Lead'
    },
    {
      label: 'Validation',
      status: 'active',
      description: 'Quality assurance and stakeholder acceptance testing',
      requirements: [
        'Functional test results documented',
        'Performance benchmarks met or exceeded',
        'Security scan passed with no critical findings',
        'Business acceptance criteria verified'
      ],
      owner: 'QA Lead / Business Owner'
    },
    {
      label: 'Released',
      status: 'complete',
      description: 'Application deployed to production and operational',
      requirements: [
        'Production deployment verified and healthy',
        'Monitoring dashboards active and alerting',
        'Rollback plan documented and tested',
        'Post-deployment review completed'
      ],
      owner: 'Release Manager'
    }
  ],
  reviewers: [
    'Business owner',
    'Technical owner',
    'Architecture or security when required'
  ],
  traceability: 'All changes record owner, timestamp, and purpose'
};

export const guardrailsData = {
  security: {
    title: 'Security',
    iconName: 'Shield',
    items: [
      'SSO enforcement',
      'Least privilege roles',
      'Environment isolation'
    ]
  },
  data: {
    title: 'Data',
    iconName: 'Database',
    items: [
      'Classification validation',
      'Governed access patterns',
      'Schema enforcement'
    ]
  },
  operations: {
    title: 'Operations',
    iconName: 'Activity',
    items: [
      'Logging',
      'Monitoring',
      'Rollback capability',
      'Policy based integrations'
    ]
  }
};


export const deliveryTeamData = {
  title: 'How We Deliver',
  description: 'Four specialized roles working together to deliver AI solutions across governance, product delivery, and data modernization.',
  roles: [
    {
      id: 'human-process-designer',
      title: 'Human Process Designer',
      iconName: 'PenTool',
      summary: 'Designs human-centered workflows and ensures AI solutions align with real business processes',
      details: [
        'Maps existing business processes and identifies AI transformation opportunities',
        'Designs human-in-the-loop workflows that balance automation with human oversight',
        'Creates user journey frameworks that ensure adoption and change readiness',
        'Validates that AI-driven processes meet compliance and governance standards',
        'Collaborates with stakeholders to define acceptance criteria and success metrics',
        'Ensures accessibility and usability across all user personas'
      ]
    },
    {
      id: 'solution-owner',
      title: 'Solution Owner',
      iconName: 'Briefcase',
      summary: 'Owns the product vision and drives delivery priorities across the engagement lifecycle',
      details: [
        'Defines and prioritizes the solution roadmap aligned with business outcomes',
        'Manages stakeholder expectations and communicates progress across workstreams',
        'Makes trade-off decisions on scope, timeline, and resource allocation',
        'Ensures delivered solutions meet business acceptance criteria and ROI targets',
        'Coordinates cross-functional dependencies between architecture, data, and process teams',
        'Drives continuous improvement through feedback loops and retrospectives'
      ]
    },
    {
      id: 'ai-architect',
      title: 'AI Architect',
      iconName: 'Cpu',
      summary: 'Designs the AI solution architecture and ensures technical excellence across the platform',
      details: [
        'Defines the end-to-end AI solution architecture including model selection and orchestration',
        'Designs agentic workflows and multi-model pipelines for complex business problems',
        'Establishes technical standards for prompt engineering, fine-tuning, and evaluation',
        'Ensures solutions meet enterprise security, scalability, and performance requirements',
        'Evaluates and integrates emerging AI capabilities and platform features',
        'Creates technical specifications that bridge business requirements to implementation'
      ]
    },
    {
      id: 'integration-architect',
      title: 'Integration Architect',
      iconName: 'Cable',
      summary: 'Connects AI solutions to enterprise systems, data sources, and deployment environments',
      details: [
        'Designs integration patterns between AI solutions and enterprise data platforms',
        'Architects API layers, event-driven pipelines, and data connectivity frameworks',
        'Ensures secure data flow across cloud environments (AWS, GCP, Azure)',
        'Manages deployment pipelines through Koyeb and enterprise CI/CD processes',
        'Validates data quality, schema compatibility, and transformation logic',
        'Implements monitoring, observability, and automated health checks across integrations'
      ]
    }
  ],
  offerings: [
    {
      id: 'ai-governance',
      title: 'AI Governance',
      iconName: 'ShieldCheck',
      summary: 'Enterprise AI governance, strategy, and change management at scale',
      details: [
        'AI strategy development aligned with enterprise business objectives and regulatory requirements',
        'Governance framework design including model risk management and responsible AI practices',
        'Change management programs that drive AI adoption across business units',
        'Policy creation for data usage, model deployment, and AI ethics compliance',
        'Scalable operating models for managing AI initiatives across the organization',
        'Executive reporting and KPI frameworks to measure AI program maturity and impact'
      ]
    },
    {
      id: 'ai-solution-delivery',
      title: 'AI Solution Delivery',
      iconName: 'Rocket',
      summary: 'End-to-end AI product and technology delivery using agentic development',
      details: [
        'Full-lifecycle AI product delivery from design through production deployment',
        'Agentic application development leveraging CompassX AI build capabilities',
        'Enterprise-grade solution architecture with identity, security, and data integration',
        'Rapid prototyping and iterative delivery with continuous stakeholder validation',
        'Multi-cloud deployment across AWS, GCP, and Azure environments',
        'Production support, monitoring, and continuous enhancement cycles'
      ]
    },
    {
      id: 'ai-data-modernization',
      title: 'AI Data Modernization',
      iconName: 'Database',
      summary: 'Data platform modernization powered by agentic processes and automation',
      details: [
        'Legacy data platform assessment and modernization roadmap development',
        'Agentic data pipeline construction for automated ETL, ELT, and streaming workflows',
        'Cloud data platform migration across Databricks, Snowflake, and enterprise data warehouses',
        'Data quality automation using AI-driven profiling, cleansing, and validation',
        'Modern data mesh and data product architectures for scalable self-service analytics',
        'Automated data governance, cataloging, and lineage tracking implementation'
      ]
    }
  ]
};

export const partnershipsData = {
  title: 'Delivery Partnerships',
  description: 'We partner with industry-leading platforms to deliver enterprise AI solutions with best-in-class tooling and infrastructure.',
  partners: [
    {
      id: 'emergent',
      name: 'Emergent',
      description: 'Agentic AI development platform powering rapid application construction and delivery',
      iconName: 'Zap',
      logo: '/logos/emergent.png',
      enablement: [
        'Agentic application development that reduces build time from months to days',
        'Full-stack AI-powered code generation with enterprise-grade architecture patterns',
        'Automated testing, deployment, and iteration cycles within a single platform',
        'Integrated LLM orchestration across OpenAI, Anthropic, and Google models',
        'Version control and rollback capabilities for safe production deployments',
        'Real-time preview environments for stakeholder validation before release'
      ]
    },
    {
      id: 'figma',
      name: 'Figma',
      description: 'Collaborative design platform for human experience design and interactive prototyping',
      iconName: 'PenTool',
      logo: '/logos/figma.png',
      enablement: [
        'Human-centered design workflows that translate business requirements into visual prototypes',
        'Real-time collaboration between designers, solution owners, and stakeholders',
        'Design system management ensuring consistency across all delivered AI products',
        'Interactive prototyping for user acceptance testing before development begins',
        'Developer handoff with precise specifications, assets, and component libraries',
        'Accessibility auditing and responsive design validation across devices'
      ]
    },
    {
      id: 'koyeb',
      name: 'Koyeb',
      description: 'CI/CD automated agent pipeline for seamless multi-cloud deployment and scaling',
      iconName: 'GitPullRequest',
      logo: '/logos/koyeb.png',
      enablement: [
        'Automated CI/CD pipelines that deploy applications across AWS, GCP, and Azure',
        'Zero-downtime deployments with built-in health checks and auto-rollback',
        'Container-native infrastructure with automatic scaling based on demand',
        'Integrated secret management and environment variable configuration',
        'Multi-region deployment support for low-latency global delivery',
        'Built-in monitoring, logging, and alerting for production observability'
      ]
    },
    {
      id: 'databricks',
      name: 'Databricks',
      description: 'Unified analytics and AI platform for large-scale data engineering and machine learning',
      iconName: 'Activity',
      logo: '/logos/databricks.png',
      enablement: [
        'Unified data lakehouse architecture combining data engineering and AI workloads',
        'Scalable ETL and data pipeline orchestration using Apache Spark and Delta Lake',
        'ML model training, experiment tracking, and production model serving',
        'Real-time streaming analytics for event-driven AI applications',
        'Data governance with Unity Catalog for enterprise-wide data access control',
        'Collaborative notebooks enabling data scientists and engineers to work together'
      ]
    },
    {
      id: 'snowflake',
      name: 'Snowflake',
      description: 'Cloud data platform for secure data warehousing, sharing, and analytics at scale',
      iconName: 'Database',
      logo: '/logos/snowflake.png',
      enablement: [
        'Elastic cloud data warehousing with automatic scaling and near-zero maintenance',
        'Secure data sharing across organizations without data movement or copying',
        'Native support for structured and semi-structured data (JSON, Parquet, Avro)',
        'Time travel and fail-safe capabilities for data recovery and auditability',
        'Snowpark for building data pipelines and ML models natively in the platform',
        'Role-based access control and end-to-end encryption for enterprise security'
      ]
    }
  ]
};

export const costAnalysisData = {
  title: 'Delivery Cost Comparison',
  description: 'See the real savings — select your team size and sprint count to compare traditional delivery against agentic delivery with CompassX AI.',
  traditionalRate: 200,
  agenticRate: 300,
  hoursPerWeek: 40,
  weeksPerSprint: 2
};
