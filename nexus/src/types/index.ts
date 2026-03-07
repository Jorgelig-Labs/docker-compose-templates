// User & Auth
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Teams
export interface Team {
  id: string;
  name: string;
  description: string;
  avatar?: string;
  roles: Role[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Role {
  id: string;
  teamId: string;
  name: string;
  description: string;
  expertise: string[];
  systemPrompt: string;
}

// Projects
export interface Project {
  id: string;
  name: string;
  description: string;
  repositoryUrl?: string;
  status: ProjectStatus;
  teamId: string;
  team?: Team;
  prds: PRD[];
  createdAt: Date;
  updatedAt: Date;
}

export type ProjectStatus = 'active' | 'paused' | 'completed' | 'draft';

// PRD
export interface PRD {
  id: string;
  projectId: string;
  project?: Project;
  title: string;
  description: string;
  status: PRDStatus;
  type: PRDType;
  parentPrdId?: string;
  content: PRDContent;
  version: number;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
}

export type PRDStatus = 'draft' | 'in_progress' | 'review' | 'completed' | 'archived';
export type PRDType = 'zero' | 'update';

export interface PRDContent {
  // JTBD Section
  jtbd?: {
    jobStatement: string;
    functionalJobs: string[];
    emotionalJobs: string[];
    socialJobs: string[];
    painPoints: string[];
    successMetrics: Metric[];
  };
  // Traditional PRD
  features?: Feature[];
  requirements?: Requirement[];
  acceptanceCriteria?: string[];
}

export interface Metric {
  name: string;
  currentValue: number;
  targetValue: number;
  unit: string;
}

export interface Feature {
  id: string;
  name: string;
  description: string;
  priority: 'must' | 'should' | 'could' | 'wont';
  status: 'pending' | 'in_progress' | 'completed';
}

export interface Requirement {
  id: string;
  type: 'functional' | 'non-functional';
  description: string;
}

// Workflow
export interface Workflow {
  id: string;
  name: string;
  description: string;
  teamId: string;
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
  triggers: Trigger[];
  createdAt: Date;
  updatedAt: Date;
}

export interface WorkflowNode {
  id: string;
  type: 'agent' | 'team' | 'condition' | 'parallel' | 'wait' | 'http' | 'github';
  name: string;
  config: Record<string, unknown>;
  position: { x: number; y: number };
}

export interface WorkflowEdge {
  id: string;
  source: string;
  target: string;
  type: 'success' | 'failure' | 'always';
}

export interface Trigger {
  id: string;
  type: 'manual' | 'scheduled' | 'webhook';
  config: Record<string, unknown>;
}

// Tasks & Execution
export interface Task {
  id: string;
  workflowId: string;
  nodeId: string;
  status: TaskStatus;
  input: Record<string, unknown>;
  output?: Record<string, unknown>;
  logs: Log[];
  startedAt?: Date;
  completedAt?: Date;
}

export type TaskStatus = 'pending' | 'running' | 'completed' | 'failed';

export interface Log {
  id: string;
  taskId: string;
  timestamp: Date;
  type: 'info' | 'success' | 'error' | 'warning';
  message: string;
}

// Execution Session
export interface ExecutionSession {
  id: string;
  prdId: string;
  status: ExecutionStatus;
  currentPhase: ExecutionPhase;
  progress: number;
  subtasksCompleted: number;
  subtasksTotal: number;
  agentStatuses: AgentStatus[];
  logs: Log[];
  startedAt: Date;
  completedAt?: Date;
}

export type ExecutionStatus = 'pending' | 'running' | 'paused' | 'completed' | 'failed';
export type ExecutionPhase = 'planning' | 'development' | 'validation' | 'deployment';

export interface AgentStatus {
  name: string;
  status: 'idle' | 'running' | 'completed' | 'failed';
  description?: string;
}
