export const timelineSteps = [
  {
    id: 'step-1',
    order: 1,
    title: 'Experience Design',
    subtitle: 'Figma Make',
    description: 'User journeys and requirements defined and validated with business',
    iconName: 'PenTool'
  },
  {
    id: 'step-2',
    order: 2,
    title: 'Specification Repository',
    subtitle: 'GitHub',
    description: 'Approved specifications committed as build source',
    iconName: 'GitBranch'
  },
  {
    id: 'step-3',
    order: 3,
    title: 'Emergent Build Phase',
    subtitle: null,
    description: 'Emergent Builder constructs the application and integrations',
    iconName: 'Cpu'
  },
  {
    id: 'step-4',
    order: 4,
    title: 'Validation and Hardening',
    subtitle: null,
    description: 'Business and technical validation of functionality and data',
    iconName: 'ShieldCheck'
  },
  {
    id: 'step-5',
    order: 5,
    title: 'Release Repository Creation',
    subtitle: null,
    description: 'Validated application pushed to a new GitHub repository for enterprise ownership',
    iconName: 'Package'
  },
  {
    id: 'step-6',
    order: 6,
    title: 'Enterprise CI/CD Execution',
    subtitle: null,
    description: 'Enterprise pipelines deploy using internal change processes',
    iconName: 'GitPullRequest'
  },
  {
    id: 'step-7',
    order: 7,
    title: 'Production Environment Deployment',
    subtitle: null,
    description: 'Application runs inside enterprise cloud with identity and data integration',
    iconName: 'Cloud'
  }
];

export const loopFlow = [
  { id: 'loop-1', order: 1, title: 'Design', description: 'Experience design and requirements', iconName: 'PenTool' },
  { id: 'loop-2', order: 2, title: 'Spec Repo', description: 'Specification repository updated', iconName: 'GitBranch' },
  { id: 'loop-3', order: 3, title: 'Emergent Build', description: 'Agentic application construction', iconName: 'Cpu' },
  { id: 'loop-4', order: 4, title: 'Validation', description: 'Business and technical validation', iconName: 'ShieldCheck' },
  { id: 'loop-5', order: 5, title: 'Release Repo', description: 'Enterprise repository creation', iconName: 'Package' },
  { id: 'loop-6', order: 6, title: 'Enterprise CI/CD', description: 'Pipeline execution', iconName: 'GitPullRequest' },
  { id: 'loop-7', order: 7, title: 'Production', description: 'Enterprise cloud deployment', iconName: 'Cloud' }
];

export const architectureLayers = [
  {
    id: 'layer-1',
    order: 1,
    title: 'Human Experience Layer',
    description: 'Figma Make designs, workflows, user logic',
    iconName: 'Monitor',
    branches: null
  },
  {
    id: 'layer-2',
    order: 2,
    title: 'Specification Layer',
    description: 'Source GitHub repository with requirements and architecture artifacts',
    iconName: 'FileText',
    branches: null
  },
  {
    id: 'layer-3',
    order: 3,
    title: 'Build Layer',
    description: 'Emergent Builder runtime and agentic development',
    iconName: 'Wrench',
    branches: null
  },
  {
    id: 'layer-4',
    order: 4,
    title: 'Enterprise Delivery Layer',
    description: 'Release repository and enterprise pipelines',
    iconName: 'Send',
    branches: null
  },
  {
    id: 'layer-5',
    order: 5,
    title: 'Identity Layer',
    description: 'SSO authentication, IAM authorization, Role-based access',
    iconName: 'KeyRound',
    branches: null
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
  { id: 'pipeline-7', order: 7, title: 'Enterprise Pipeline Deploy', description: 'CI/CD execution', iconName: 'Rocket' },
  { id: 'pipeline-8', order: 8, title: 'Production Release', description: 'Live deployment', iconName: 'Flag' }
];

export const releaseIncludes = [
  'Version history',
  'Approvals',
  'Schema definitions',
  'Role permissions',
  'Change documentation'
];

export const governanceData = {
  approvalStates: [
    { label: 'New', status: 'initial' },
    { label: 'Pending Approval', status: 'pending' },
    { label: 'In Progress', status: 'active' },
    { label: 'Validation', status: 'active' },
    { label: 'Released', status: 'complete' }
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
