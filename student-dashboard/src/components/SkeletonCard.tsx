export default function SkeletonCard() {
  return (
    <article className="p-6 bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 rounded-3xl animate-pulse flex flex-col justify-between h-[200px]">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-2xl bg-zinc-800/60" />
          <div className="h-4 w-12 bg-zinc-800/60 rounded-full" />
        </div>

        <div className="space-y-2">
          <div className="h-5 w-3/4 bg-zinc-800/60 rounded" />
          <div className="h-5 w-1/2 bg-zinc-800/60 rounded" />
        </div>
      </div>

      <div className="space-y-2 mt-4">
        <div className="h-2 w-full bg-zinc-850 rounded-full overflow-hidden">
          <div className="h-full w-1/3 bg-zinc-800/60 rounded-full" />
        </div>
      </div>
    </article>
  );
}
