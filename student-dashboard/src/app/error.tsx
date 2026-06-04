'use client';

import { useEffect } from 'react';
import { AlertOctagon, RotateCcw, Home } from 'lucide-react';
import Link from 'next/link';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Captured dashboard render error:', error);
  }, [error]);

  return (
    <main className="flex-1 bg-zinc-950 text-zinc-50 min-h-screen flex items-center justify-center p-6">
      <section className="max-w-md w-full p-8 bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/80 rounded-3xl text-center shadow-2xl relative overflow-hidden group">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-rose-500/10 rounded-full blur-3xl group-hover:bg-rose-500/15 transition-colors duration-500" />

        <div className="relative z-10 flex flex-col items-center">
          <div className="p-4 bg-rose-950/40 border border-rose-900/30 rounded-2xl text-rose-500 mb-6">
            <AlertOctagon className="w-8 h-8 animate-pulse" />
          </div>

          <h2 className="text-xl font-extrabold text-zinc-100 tracking-tight mb-2">
            Dashboard Error
          </h2>

          <p className="text-sm text-zinc-400 mb-6 max-w-xs leading-relaxed">
            We encountered a problem fetching your courses from Supabase. Make sure your network is active and env keys are configured.
          </p>

          <div className="w-full bg-zinc-950/60 border border-zinc-850 px-4 py-3 rounded-2xl mb-8 text-left overflow-x-auto max-h-[100px] no-scrollbar">
            <code className="text-xs font-mono text-rose-450 leading-relaxed break-all">
              {error.message || 'Unknown render failure.'}
            </code>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <button
              onClick={() => reset()}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-zinc-100 hover:bg-white text-zinc-950 font-bold rounded-2xl text-sm transition-all duration-200 cursor-pointer shadow-lg active:scale-95"
            >
              <RotateCcw className="w-4 h-4" />
              Try Again
            </button>

            <Link
              href="/"
              onClick={() => window.location.reload()}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-zinc-900 border border-zinc-800 hover:bg-zinc-850 text-zinc-300 hover:text-zinc-100 font-bold rounded-2xl text-sm transition-all duration-200 cursor-pointer active:scale-95"
            >
              <Home className="w-4 h-4" />
              Reload Page
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
