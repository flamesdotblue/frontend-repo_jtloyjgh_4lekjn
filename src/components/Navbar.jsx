import { useState } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Faculty', href: '#faculty' },
    { label: 'Portals', href: '#portals' },
    { label: 'Announcements', href: '#announcements' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-blue-950/70 border-b border-blue-800/50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-yellow-400 to-amber-500 text-blue-950 shadow">
              <Cpu className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <p className="text-sm text-yellow-300/90">Department of</p>
              <p className="-mt-1 text-lg font-semibold text-white">Electronics & Communication</p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-blue-100 hover:text-yellow-300 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#portals"
              className="rounded-md bg-gradient-to-br from-yellow-400 to-amber-500 px-4 py-2 text-sm font-semibold text-blue-950 shadow hover:opacity-90"
            >
              Enter Portal
            </a>
          </div>

          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-blue-800/60 text-blue-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-blue-800/50 py-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-blue-100 hover:text-yellow-300"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#portals"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-md bg-gradient-to-br from-yellow-400 to-amber-500 px-4 py-2 text-center text-sm font-semibold text-blue-950 shadow"
              >
                Enter Portal
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
