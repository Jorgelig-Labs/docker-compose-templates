import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const teams = [
  {
    id: '1',
    name: 'PRD Team',
    description: 'Requirements analysis and PRD generation',
    members: ['Lead Dev', 'UX Researcher', 'Spec Writer', 'JTBD Analyst'],
    color: 'var(--accent)',
  },
  {
    id: '2',
    name: 'Dev Team',
    description: 'Code implementation and development',
    members: ['Coder', 'Coder Recovery', 'DevOps'],
    color: 'var(--success)',
  },
  {
    id: '3',
    name: 'QA Team',
    description: 'Quality assurance and testing',
    members: ['QA Reviewer', 'QA Fixer', 'Validation Fixer'],
    color: 'var(--info)',
  },
];

export default function TeamsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">Teams</h1>
          <p className="text-[var(--text-secondary)] mt-1">Manage your agent teams and roles</p>
        </div>
        <Button variant="primary">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New Team
        </Button>
      </div>

      {/* Teams Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teams.map((team) => (
          <Card key={team.id} variant="default">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-[var(--radius-md)] flex items-center justify-center"
                  style={{ backgroundColor: `${team.color}20` }}
                >
                  <svg className="w-5 h-5" style={{ color: team.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <CardTitle className="text-base">{team.name}</CardTitle>
                  <p className="text-xs text-[var(--text-muted)]">{team.members.length} roles</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[var(--text-secondary)] mb-4">{team.description}</p>
              <div className="space-y-2">
                <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider">Roles</p>
                <div className="flex flex-wrap gap-1.5">
                  {team.members.map((member) => (
                    <span
                      key={member}
                      className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[var(--bg-hover)] text-[var(--text-secondary)]"
                    >
                      {member}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
