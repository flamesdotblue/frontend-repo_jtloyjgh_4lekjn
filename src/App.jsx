import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portals from './components/Portals';
import Announcements from './components/Announcements';

function App() {
  return (
    <div className="min-h-screen bg-blue-950">
      <Navbar />
      <Hero />

      {/* About Section */}
      <section id="about" className="relative bg-blue-975">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">About the Department</h2>
              <p className="mt-3 text-blue-100/90">
                The Electronics and Communication Engineering department nurtures innovators in circuits, communication systems, and embedded technologies. Our vision is to empower learners with research-driven education and strong industry collaboration.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-blue-800/60 bg-blue-900/40 p-4">
                  <p className="text-sm font-semibold text-yellow-300">Vision</p>
                  <p className="mt-1 text-sm text-blue-100/90">To be a center of excellence in ECE, advancing technology for societal impact.</p>
                </div>
                <div className="rounded-lg border border-blue-800/60 bg-blue-900/40 p-4">
                  <p className="text-sm font-semibold text-yellow-300">Mission</p>
                  <p className="mt-1 text-sm text-blue-100/90">Provide outcome-based education, foster research, and strengthen ties with industry.</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-blue-800/60 bg-gradient-to-b from-blue-900/40 to-blue-950/60 p-6">
              <h3 className="text-lg font-semibold text-white">Quick Highlights</h3>
              <ul className="mt-3 space-y-2 text-sm text-blue-100/90">
                <li>• State-of-the-art labs: VLSI, Communication, Embedded, and Antenna.</li>
                <li>• Active research groups and funded projects.</li>
                <li>• Industry-driven curriculum and hands-on workshops.</li>
                <li>• Strong alumni network and placements.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Anchor (placeholder section for navigation) */}
      <section id="faculty" className="relative border-t border-blue-900/60 bg-blue-975">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Faculty</h2>
          <p className="mt-2 text-blue-200/90">Meet our dedicated team of educators and researchers.</p>
          <div className="mt-6 rounded-xl border border-blue-800/60 bg-blue-900/30 p-6 text-sm text-blue-100/90">
            A detailed faculty directory will appear here.
          </div>
        </div>
      </section>

      <Portals />
      <Announcements />

      {/* Footer */}
      <footer className="border-t border-blue-900/60 bg-blue-950">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-blue-300/90">© {new Date().getFullYear()} ECE Department. All rights reserved.</p>
            <div className="text-sm text-blue-300/90">
              Built with a dark-blue and gold theme to reflect technology and innovation.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
