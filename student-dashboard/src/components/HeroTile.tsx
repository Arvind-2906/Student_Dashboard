'use client';

import { motion } from 'framer-motion';
import { Flame, Sparkles, Trophy } from 'lucide-react';

export default function HeroTile() {
  return (
    <motion.article
      whileHover={{
        scale: 1.01,
        y: -2,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
      className="relative overflow-hidden p-8 bg-gradient-to-br from-zinc-900/60 to-zinc-950/80 backdrop-blur-xl border border-zinc-800/80 hover:border-emerald-500/30 rounded-3xl flex flex-col justify-between min-h-[220px] shadow-2xl shadow-zinc-950/50 group transition-all duration-300"
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none select-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-zinc-900/0 to-zinc-950/40" />
        <div 
          className="absolute inset-0 opacity-[0.12] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
          }}
        />
      </div>
      <div className="absolute -inset-px bg-gradient-to-r from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/10 group-hover:to-emerald-400/5 rounded-3xl transition-all duration-500 z-0" />
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/15 transition-colors duration-500" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-zinc-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 flex flex-col justify-between h-full gap-6">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400/80">Next-Gen Learner</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
              Welcome back, Arvind!
            </h2>
            <p className="text-sm text-zinc-400 mt-1 max-w-sm">
              You are on fire today! Keep up the momentum and reach your daily target.
            </p>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-800/40 border border-zinc-700/30 text-xs font-medium text-zinc-300">
            <Trophy className="w-3.5 h-3.5 text-yellow-500" />
            <span>Pro</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-6 items-end mt-2">
          <div className="flex items-center gap-3.5 bg-zinc-900/80 border border-zinc-800 px-5 py-3 rounded-2xl">
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                filter: ['drop-shadow(0 0 2px rgba(249,115,22,0.4))', 'drop-shadow(0 0 8px rgba(249,115,22,0.8))', 'drop-shadow(0 0 2px rgba(249,115,22,0.4))']
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Flame className="w-7 h-7 text-orange-500 fill-orange-500/20" />
            </motion.div>
            <div>
              <div className="text-2xl font-black text-zinc-100 leading-none">12</div>
              <div className="text-xs font-medium text-zinc-400 mt-1">Days Streak</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 bg-zinc-900/80 border border-zinc-800 px-5 py-3 rounded-2xl">
            <div className="w-8 h-8 rounded-full border-2 border-emerald-500/30 flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full border-t-2 border-r-2 border-emerald-400" />
              <span className="text-[10px] font-bold text-emerald-400">80%</span>
            </div>
            <div>
              <div className="text-base font-bold text-zinc-100 leading-none">45 / 60m</div>
              <div className="text-xs font-medium text-zinc-400 mt-1">Daily Target</div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
