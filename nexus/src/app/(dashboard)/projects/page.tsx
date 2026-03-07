import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const projects = [
  { id: '1', name: 'E-commerce Platform', description: 'Full-stack e-commerce solution', status: 'active', prds: 5, team: 'PRD Team' },
  { id: '2', name: 'Mobile App MVP', description: 'iOS and Android MVP', status: 'in_progress', prds: 3, team: 'Dev Team' },
  { id: '3', name: 'API Integration', description: 'Third-party API integrations', status: 'review', prds: 2, team: 'QA Team' },
  { id: '4', name: 'Analytics Dashboard', description: 'Business intelligence dashboard', status: 'draft', prds: 1, team: 'PRD Team' },
];

const statusColors: Record<string, string> = {
  active: 'bg-[var(--success)]/20 text-[var(--success)]',
  in_progress: 'bg-[var(--warning)]/20 text-[var(--warning)]',
  review: 'bg-[var(--info)]/20 text-[var(--info)]',
  draft: 'bg-[var(--text-muted)]/20 text-[var(--text-muted)]',
};

const statusLabels: Record<string, string> = {
  active: 'Active',
  in_progress: 'In Progress',
  review: 'Review',
  draft: 'Draft',
};

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">Projects</h1>
          <p className="text-[var(--text-secondary)] mt-1">Manage your projects and PRDs</p>
        </div>
        <Button variant="primary">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New Project
        </Button>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Card key={project.id} variant="interactive" className="group">
            <CardContent>
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] mt-1 line-clamp-2">
                    {project.description}
                  </p>
                </div>
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
                  {statusLabels[project.status]}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-[var(--text-secondary)]">{project.team}</span>
                <span className="text-[var(--text-muted)]">{project.prds} PRDs</span>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* New Project Card */}
        <Card variant="bordered" className="flex items-center justify-center min-h-[140px] cursor-pointer hover:border-[var(--accent)] hover:bg-[var(--accent-muted)] transition-colors">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-[var(--accent-muted)] flex items-center justify-center mx-auto mb-2">
              <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <p className="text-sm font-medium text-[var(--accent)]">Create New Project</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
