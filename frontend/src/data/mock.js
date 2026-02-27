export const timelineSteps = [
  {
    id: 'step-1',
    order: 1,
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
    id: 'step-2',
    order: 2,
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
    id: 'step-3',
    order: 3,
    title: 'Compass AI Studio Build Phase',
    subtitle: 'Compass AI Studio',
    description: 'Compass AI Studio constructs the application and integrations',
    iconName: 'Cpu',
    expandedDetails: [
      'Agentic application construction from specifications',
      'API development and integration wiring',
      'Frontend component assembly and responsive layouts',
      'Automated test generation and code quality validation'
    ]
  },
  {
    id: 'step-4',
    order: 4,
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
    id: 'step-5',
    order: 5,
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
    id: 'step-6',
    order: 6,
    title: 'Enterprise CI/CD Execution',
    subtitle: 'CI/CD Pipelines',
    description: 'Enterprise pipelines deploy using internal change processes',
    iconName: 'GitPullRequest',
    expandedDetails: [
      'Automated build, lint, and artifact creation',
      'Deployment to QA and UAT environments for validation',
      'Integration testing across enterprise systems',
      'Change management approval gates and promotion workflows'
    ]
  },
  {
    id: 'step-7',
    order: 7,
    title: 'Production Deployment',
    subtitle: 'AWS App Runner',
    description: 'Application runs inside enterprise cloud with identity and data integration',
    iconName: 'Cloud',
    expandedDetails: [
      'Blue-green deployment with zero-downtime rollout',
      'Identity provider integration (SSO, IAM, RBAC)',
      'Enterprise monitoring, alerting, and log aggregation',
      'Data layer connectivity verification and health checks'
    ]
  }
];

export const loopFlow = [
  { id: 'loop-1', order: 1, title: 'Design', description: 'Experience design and requirements', iconName: 'PenTool' },
  { id: 'loop-2', order: 2, title: 'Spec Repo', description: 'Specification repository updated', iconName: 'GitBranch' },
  { id: 'loop-3', order: 3, title: 'Compass AI Studio Build', description: 'Agentic application construction', iconName: 'Cpu' },
  { id: 'loop-4', order: 4, title: 'Validation', description: 'Business and technical validation', iconName: 'ShieldCheck' },
  { id: 'loop-5', order: 5, title: 'Release Repo', description: 'Enterprise repository creation', iconName: 'Package' },
  { id: 'loop-6', order: 6, title: 'Enterprise CI/CD', description: 'Pipeline execution', iconName: 'GitPullRequest' },
  { id: 'loop-7', order: 7, title: 'Production', description: 'Live enterprise deployment', iconName: 'Cloud' },
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
    description: 'Compass AI Studio runtime and agentic development',
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
    title: 'Enterprise Delivery Layer',
    description: 'Release repository and enterprise pipelines',
    iconName: 'Send',
    branches: null,
    expandedDetails: [
      'Release branch management, tagging, and versioning',
      'CI/CD pipeline configurations with multi-stage gates',
      'Environment promotion workflows (Dev → QA → UAT → Prod)',
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
  { id: 'pipeline-3', order: 3, title: 'Compass AI Studio Build', description: 'Application constructed', iconName: 'Cpu' },
  { id: 'pipeline-4', order: 4, title: 'Validation Signoff', description: 'Quality verified', iconName: 'BadgeCheck' },
  { id: 'pipeline-5', order: 5, title: 'Release Repo Created', description: 'Enterprise repository ready', iconName: 'FolderGit2' },
  { id: 'pipeline-6', order: 6, title: 'Security Checks', description: 'Security validated', iconName: 'Shield' },
  {
    id: 'pipeline-7',
    order: 7,
    title: 'Enterprise Pipeline Deploy',
    description: 'CI/CD execution across environments',
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
  title: 'Developing and Managing AI Products',
  description: 'AI Products require a designated product manager who oversees a team of experts to build, support, and improve the AI product over time. Both the manager and the AI product team should sit within a business team and leverage an organization COE that determines standards and best practices for developing AI products.',
  note: 'This diagram represents all roles at full maturity for a large AI product. Four roles are required, but may be part time, can be combined, and may not be necessary for getting started and for small AI products.',
  categories: [
    {
      id: 'functional',
      title: 'Functional Roles',
      description: 'Translating strategic objectives into practical, AI-driven decisions and managing day-to-day operations',
      roles: [
        {
          title: 'Engagement Lead',
          items: [
            'Primary point of contact between the delivery team and client stakeholders',
            'Oversees project scope, timelines, and resource allocation across workstreams'
          ]
        },
        {
          title: 'Data Architect',
          items: [
            'Integrated Data Sources and those with common ETL Patterns or canonical features need to be architected together',
            'Value and Feedback often integrate Profile and Transaction Data and may require an architect'
          ]
        },
        {
          title: 'Lead Data Engineer',
          items: [
            'Transactional, Event and Batch ETL Expertise',
            'Connects Product Management to Technical Management'
          ]
        },
        {
          title: 'Tech Lead',
          items: [
            'Enables Day to Day Technical Management to be separated from Product Management',
            'Connects Architecture to Engineering'
          ]
        }
      ]
    },
    {
      id: 'business',
      title: 'Business Roles',
      description: 'Shape AI strategies, defining project goals, and ensuring alignment with customer and business requirements',
      roles: [
        {
          title: 'Product Manager',
          items: [
            'Focuses on quarterly / yearly value delivery',
            'Connects Product Management to Vision',
            'Connects Product Management to Advanced Analytics'
          ]
        },
        {
          title: 'Product Owner / Feature Managers',
          items: [
            'Primary customer advocate and link between business and technology strategy',
            'Builds and maintains the team backlog and coordinates dependencies with stakeholders',
            'Ensures user stories meet acceptance criteria'
          ]
        },
        {
          title: 'Scrum Master',
          items: [
            'Focuses on delivering value every iteration',
            'Connects Product and Technical Management'
          ]
        },
        {
          title: 'Business Analyst',
          items: [
            'Performs process modeling, requirements gathering, and cost/benefit analysis'
          ]
        }
      ]
    },
    {
      id: 'technical',
      title: 'Technical Roles',
      description: 'Build underlying technologies and infrastructure needed to support AI product objectives',
      roles: [
        {
          title: 'Data Engineers',
          items: [
            'Builds data pipelines for various data ingestion patterns',
            'Ensures data quality and availability to Technical Management'
          ]
        },
        {
          title: 'Visualization Engineer',
          items: [
            'Builds reports to answer specific questions',
            'Supports ad-hoc analytics and one-time data pulls'
          ]
        },
        {
          title: 'Platform & Reliability Engineers',
          items: [
            'Ensures data platforms are accessible to AI product teams',
            'Ensures production systems are free from errors'
          ]
        },
        {
          title: 'Data Analyst',
          items: [
            'Performs data mining, data cleansing, data interpretation, and data visualization tasks'
          ]
        }
      ]
    }
  ]
};
