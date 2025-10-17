import { Megaphone, Calendar, FileText } from 'lucide-react';

const announcements = [
  {
    id: 1,
    title: 'Tech Fest 2025: Circuits & Signals',
    description:
      'Join the annual department tech fest featuring workshops on VLSI design, SDR, and IoT. Register by Nov 30.',
    date: 'Dec 12, 2025',
    category: 'Event',
  },
  {
    id: 2,
    title: 'Assignment 3: Digital Communication',
    description:
      'Upload your PDF to the portal by Friday, 11:59 PM. Late submissions will not be accepted without approval.',
    date: 'Due: Oct 22, 2025',
    category: 'Assignment',
  },
  {
    id: 3,
    title: 'Seminar: Satellite Communication Trends',
    description:
      'Guest lecture by ISRO scientist on next-gen satellite links and ground stations. Open to all years.',
    date: 'Nov 05, 2025',
    category: 'Seminar',
  },
];

export default function Announcements() {
  return (
    <section id="announcements" className="relative border-t border-blue-900/60 bg-blue-975">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-yellow-400/10 text-yellow-300">
              <Megaphone className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">Announcements</h2>
              <p className="text-blue-200/90">News, events, and academic updates</p>
            </div>
          </div>

          <a
            href="#"
            className="rounded-md border border-blue-700/60 bg-blue-900/40 px-4 py-2 text-sm font-semibold text-blue-100 hover:border-yellow-400/40"
          >
            View all
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {announcements.map((a) => (
            <article
              key={a.id}
              className="rounded-xl border border-blue-800/60 bg-gradient-to-b from-blue-900/50 to-blue-950/60 p-6 shadow hover:border-yellow-400/40"
            >
              <div className="flex items-center gap-2 text-xs text-yellow-200/90">
                <span className="inline-flex items-center gap-1 rounded-full bg-yellow-400/10 px-2 py-1 font-semibold">
                  <FileText className="h-3.5 w-3.5" />
                  {a.category}
                </span>
                <span className="inline-flex items-center gap-1 text-blue-200/90">
                  <Calendar className="h-3.5 w-3.5" />
                  {a.date}
                </span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-white">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-blue-100/90">{a.description}</p>
              <div className="mt-4">
                <a href="#" className="text-sm font-semibold text-yellow-300 hover:underline">
                  Learn more
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
