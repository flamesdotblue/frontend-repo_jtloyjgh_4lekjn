import { User, Book, Shield } from 'lucide-react';

const portalData = [
  {
    key: 'student',
    title: 'Student Portal',
    description:
      'Access assignments, study materials, attendance, and internal marks. Stay updated with notifications and events.',
    accent: 'from-blue-500 to-cyan-400',
    icon: User,
    actions: [
      { label: 'Login', href: '#', variant: 'primary' },
      { label: 'Register', href: '#', variant: 'ghost' },
    ],
  },
  {
    key: 'teacher',
    title: 'Teacher Portal',
    description:
      'Upload materials, create assignments, mark attendance, and manage student evaluations efficiently.',
    accent: 'from-amber-400 to-yellow-500',
    icon: Book,
    actions: [
      { label: 'Login', href: '#', variant: 'primary' },
    ],
  },
  {
    key: 'admin',
    title: 'Admin / HOD',
    description:
      'Manage users, approve uploads, post official circulars, and generate attendance and marks reports.',
    accent: 'from-fuchsia-500 to-rose-500',
    icon: Shield,
    actions: [
      { label: 'Login', href: '#', variant: 'primary' },
    ],
  },
];

export default function Portals() {
  return (
    <section id="portals" className="relative bg-blue-975">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Portals</h2>
            <p className="mt-1 text-blue-200/90">Choose your role to continue</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portalData.map((p) => (
            <article
              key={p.key}
              className="group relative overflow-hidden rounded-xl border border-blue-800/60 bg-gradient-to-b from-blue-900/50 to-blue-950/60 p-6 shadow hover:border-yellow-400/40"
            >
              <div className={`absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-2xl`} />

              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center rounded-md bg-gradient-to-br ${p.accent} p-2 text-blue-950 shadow` }>
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-blue-100/90">{p.description}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {p.actions.map((a) => (
                    <a
                      key={a.label}
                      href={a.href}
                      className={
                        a.variant === 'primary'
                          ? 'rounded-md bg-gradient-to-br from-yellow-400 to-amber-500 px-4 py-2 text-sm font-semibold text-blue-950 shadow hover:opacity-95'
                          : 'rounded-md border border-blue-700/60 bg-blue-900/40 px-4 py-2 text-sm font-semibold text-blue-100 hover:border-yellow-400/40'
                      }
                    >
                      {a.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
