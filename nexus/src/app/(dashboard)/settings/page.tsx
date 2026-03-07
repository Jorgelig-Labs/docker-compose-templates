import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

const apiKeys = [
  { name: 'MiniMax API', key: 'MiniMax-xxx...', status: 'active' },
  { name: 'GitHub', key: 'ghp_xxx...', status: 'active' },
  { name: 'Outline', key: 'ol_api_xxx...', status: 'inactive' },
];

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">Settings</h1>
        <p className="text-[var(--text-secondary)] mt-1">Manage your account and integrations</p>
      </div>

      {/* API Keys */}
      <Card variant="default">
        <CardHeader>
          <CardTitle>API Keys</CardTitle>
          <CardDescription>Manage your external service integrations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {apiKeys.map((api) => (
            <div key={api.name} className="flex items-center justify-between p-4 rounded-[var(--radius-md)] bg-[var(--bg-hover)]">
              <div>
                <p className="font-medium text-[var(--text-primary)]">{api.name}</p>
                <p className="text-sm text-[var(--text-muted)] font-mono">{api.key}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium
                  ${api.status === 'active' ? 'bg-[var(--success)]/20 text-[var(--success)]' : 'bg-[var(--text-muted)]/20 text-[var(--text-muted)]'}`}>
                  {api.status}
                </span>
                <Button variant="ghost" size="sm">Edit</Button>
              </div>
            </div>
          ))}
          <Button variant="secondary">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add API Key
          </Button>
        </CardContent>
      </Card>

      {/* Profile */}
      <Card variant="default">
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>Update your personal information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 max-w-md">
            <Input label="Name" defaultValue="Jorge" />
            <Input label="Email" type="email" defaultValue="jorge@example.com" />
            <Button variant="primary">Save Changes</Button>
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card variant="default">
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Configure how you receive updates</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { label: 'Task completions', description: 'When a task is completed', enabled: true },
            { label: 'Approval requests', description: 'When human approval is needed', enabled: true },
            { label: 'Team updates', description: 'When team members are added or removed', enabled: false },
            { label: 'Weekly summary', description: 'Weekly digest of activity', enabled: true },
          ].map((notification) => (
            <div key={notification.label} className="flex items-center justify-between p-4 rounded-[var(--radius-md)] bg-[var(--bg-hover)]">
              <div>
                <p className="font-medium text-[var(--text-primary)]">{notification.label}</p>
                <p className="text-sm text-[var(--text-muted)]">{notification.description}</p>
              </div>
              <button
                className={`relative w-11 h-6 rounded-full transition-colors ${
                  notification.enabled ? 'bg-[var(--accent)]' : 'bg-[var(--border)]'
                }`}
              >
                <span
                  className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    notification.enabled ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card variant="default" className="border-[var(--error)]/30">
        <CardHeader>
          <CardTitle className="text-[var(--error)]">Danger Zone</CardTitle>
          <CardDescription>Irreversible actions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 rounded-[var(--radius-md)] bg-[var(--error)]/10 border border-[var(--error)]/30">
            <div>
              <p className="font-medium text-[var(--text-primary)]">Delete Account</p>
              <p className="text-sm text-[var(--text-muted)]">Permanently delete your account and all data</p>
            </div>
            <Button variant="danger">Delete Account</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
