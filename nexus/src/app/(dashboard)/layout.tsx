import { Sidebar, Header } from '@/components/layout';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Sidebar />
      <div className="ml-64">
        <Header user={{ name: 'Jorge', email: 'jorge@example.com' }} />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
