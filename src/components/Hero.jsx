import { useState, useEffect, Suspense } from 'react';
import { ArrowRight, Shield, BookOpen, Megaphone } from 'lucide-react';
import Spline from '@splinetool/react-spline';

function ErrorBoundary({ fallback, children }) {
  const [hasError, setHasError] = useState(false);

  // Capture async/runtime errors from Spline render
  useEffect(() => {
    const onError = (e) => {
      // If any unhandled error bubbles up from WebGL/Spline, fall back gracefully
      setHasError(true);
    };
    window.addEventListener('error', onError);
    window.addEventListener('unhandledrejection', onError);
    return () => {
      window.removeEventListener('error', onError);
      window.removeEventListener('unhandledrejection', onError);
    };
  }, []);

  if (hasError) return fallback;
  return children;
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative h-[80vh] min-h-[520px] w-full overflow-hidden bg-blue-950" aria-label="Department hero">
      {/* 3D Scene Background with safe fallbacks */}
      <div className="absolute inset-0">
        <ErrorBoundary
          fallback={
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(30,58,138,0.9),rgba(2,6,23,1))]" />
          }
        >
          {mounted ? (
            <Suspense fallback={<div className="absolute inset-0 bg-blue-950" />}>
              <Spline
                scene="https://prod.spline.design/6y1d6eH-8Nn3sCBd/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </Suspense>
          ) : (
            <div className="absolute inset-0 bg-blue-950" />
          )}
        </ErrorBoundary>
      </div>

      {/* Gradient overlays to enhance readability (do not block Spline interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-950/60 via-blue-950/50 to-blue-950/90" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-blue-950 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-4 sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-semibold text-yellow-200 shadow">
          <Shield className="h-3.5 w-3.5" />
          NAAC Accredited • Research-driven Excellence
        </span>

        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Dept. of Electronics & Communication Engineering
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-blue-100">
          Innovating at the intersection of circuits, communication, and computation. Explore portals, announcements, and resources tailored for students, faculty, and administrators.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#portals"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-yellow-400 to-amber-500 px-5 py-2.5 font-semibold text-blue-950 shadow transition hover:opacity-95"
          >
            Enter Portals
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#announcements"
            className="inline-flex items-center gap-2 rounded-md border border-blue-700/60 bg-blue-900/60 px-5 py-2.5 font-semibold text-blue-100 backdrop-blur hover:border-yellow-400/50 hover:text-yellow-200"
          >
            Latest Updates
            <Megaphone className="h-4 w-4" />
          </a>
          <span className="ml-2 inline-flex items-center gap-2 text-xs text-blue-200/90">
            <BookOpen className="h-4 w-4 text-yellow-300" />
            Autonomous Curriculum • Industry Collaboration
          </span>
        </div>
      </div>
    </section>
  );
}
