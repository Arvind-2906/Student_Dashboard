import SkeletonCard from '@/components/SkeletonCard';

export default function Loading() {
  return (
    <main className="flex-1 bg-zinc-950 text-zinc-50 min-h-screen">
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        {/* Skeleton Header */}
        <header className="max-w-7xl mx-auto mb-8 animate-pulse">
          <div className="h-9 w-64 bg-zinc-900 rounded-lg mb-2" />
          <div className="h-4 w-96 bg-zinc-900 rounded" />
        </header>

        {/* Skeleton Bento Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Skeleton Hero Tile */}
          <div className="col-span-1 md:col-span-2 bg-zinc-900/30 border border-zinc-850 rounded-3xl p-8 animate-pulse h-[220px] flex flex-col justify-between">
            <div className="space-y-3">
              <div className="h-3 w-28 bg-zinc-800/60 rounded-full" />
              <div className="h-7 w-48 bg-zinc-800/60 rounded" />
              <div className="h-4 w-80 bg-zinc-800/60 rounded" />
            </div>
            <div className="flex gap-4">
              <div className="h-12 w-32 bg-zinc-800/60 rounded-2xl" />
              <div className="h-12 w-32 bg-zinc-800/60 rounded-2xl" />
            </div>
          </div>

          {/* Skeleton Activity Tile */}
          <div className="col-span-1 md:col-span-2 bg-zinc-900/30 border border-zinc-850 rounded-3xl p-8 animate-pulse h-[220px] flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <div className="h-4 w-40 bg-zinc-800/60 rounded" />
              <div className="h-3 w-24 bg-zinc-800/60 rounded" />
            </div>
            <div className="w-full h-20 bg-zinc-800/30 rounded-xl" />
            <div className="flex justify-between items-center pt-2">
              <div className="h-3 w-16 bg-zinc-800/60 rounded" />
              <div className="h-3 w-32 bg-zinc-800/60 rounded" />
              <div className="h-3 w-16 bg-zinc-800/60 rounded" />
            </div>
          </div>

          {/* Skeleton Course Cards */}
          {Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className="col-span-1">
              <SkeletonCard />
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
