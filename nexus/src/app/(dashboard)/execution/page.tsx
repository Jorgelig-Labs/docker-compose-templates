import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const agents = [
  { name: 'Planner', status: 'completed', description: 'Creating implementation plan' },
  { name: 'Coder', status: 'running', description: 'Implementing features' },
  { name: 'QA Reviewer', status: 'idle', description: 'Pending verification' },
];

const logs = [
  { time: '14:32:15', type: 'info', message: 'Starting Planner agent...' },
  { time: '14:32:18', type: 'success', message: 'Loaded context from PRD v2.1' },
  { time: '14:32:25', type: 'info', message: 'Analyzing codebase structure...' },
  { time: '14:32:45', type: 'success', message: 'Found 23 files in project' },
  { time: '14:33:02', type: 'info', message: 'Creating implementation plan...' },
  { time: '14:33:15', type: 'success', message: 'Generated 8 subtasks' },
  { time: '14:33:18', type: 'info', message: 'Planner completed ✓' },
  { time: '14:33:20', type: 'info', message: 'Starting Coder agent...' },
  { time: '14:33:25', type: 'info', message: 'Working on subtask 1: Setup API endpoint' },
];

const statusColors: Record<string, string> = {
  completed: 'bg-[var(--success)]',
  running: 'bg-[var(--warning)] animate-pulse',
  idle: 'bg-[var(--text-muted)]',
};

export default function ExecutionPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">Execution</h1>
          <p className="text-[var(--text-secondary)] mt-1">Monitor agent execution and progress</p>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost">Pause</Button>
          <Button variant="danger">Stop</Button>
        </div>
      </div>

      {/* Current PRD */}
      <Card variant="default">
        <CardHeader>
          <CardTitle>Current Execution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-[var(--text-primary)]">E-commerce Platform v2.1</h3>
              <p className="text-sm text-[var(--text-muted)]">PRD Type: Update • Team: PRD Team</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-[var(--accent)]">67%</p>
              <p className="text-xs text-[var(--text-muted)]">5 of 8 subtasks</p>
            </div>
          </div>
          {/* Progress Bar */}
          <div className="mt-4 h-2 bg-[var(--bg-hover)] rounded-full overflow-hidden">
            <div className="h-full bg-[var(--accent)] rounded-full transition-all duration-500" style={{ width: '67%' }} />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Agent Status */}
        <Card variant="default">
          <CardHeader>
            <CardTitle>Agent Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {agents.map((agent) => (
              <div key={agent.name} className="flex items-center gap-3 p-3 rounded-[var(--radius-md)] bg-[var(--bg-hover)]">
                <div className={`w-3 h-3 rounded-full ${statusColors[agent.status]}`} />
                <div className="flex-1">
                  <p className="font-medium text-[var(--text-primary)]">{agent.name}</p>
                  <p className="text-xs text-[var(--text-muted)]">{agent.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Terminal Output */}
        <Card variant="default" className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Terminal Output</CardTitle>
              <Button variant="ghost" size="sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="font-mono text-sm bg-[var(--bg-primary)] rounded-[var(--radius-md)] p-4 h-80 overflow-auto">
              {logs.map((log, i) => (
                <div key={i} className="flex gap-3 py-0.5">
                  <span className="text-[var(--text-muted)]">[{log.time}]</span>
                  <span className={
                    log.type === 'success' ? 'text-[var(--success)]' :
                    log.type === 'error' ? 'text-[var(--error)]' :
                    log.type === 'warning' ? 'text-[var(--warning)]' :
                    'text-[var(--text-secondary)]'
                  }>
                    {log.message}
                  </span>
                </div>
              ))}
              <span className="animate-pulse text-[var(--accent)]">▋</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Human Approval */}
      <Card variant="default" className="border-[var(--accent)]/30">
        <CardContent className="py-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-[var(--text-primary)]">Human Approval Required</p>
              <p className="text-sm text-[var(--text-secondary)]">Subtask 1 completed. Review and approve to continue.</p>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary">Request Changes</Button>
              <Button variant="primary">Approve & Continue</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
