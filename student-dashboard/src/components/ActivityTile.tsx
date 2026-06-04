'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

function generateActivityData(weeks: number, days: number): { id: string; level: number }[][] {
  let seed = 42;
  const randomLevel = () => {
    seed = (seed * 9301 + 49297) % 233280;
    const val = seed / 233280;
    if (val < 0.45) return 0;
    if (val < 0.70) return 1;
    if (val < 0.85) return 2;
    if (val < 0.95) return 3;
    return 4;
  };

  return Array.from({ length: weeks }, (_, wIndex) =>
    Array.from({ length: days }, (_, dIndex) => ({
      id: `w-${wIndex}-d-${dIndex}`,
      level: randomLevel(),
    }))
  );
}

export default function ActivityTile() {
  const weeks = 16;
  const days = 7;

  const activityData = useMemo(() => generateActivityData(weeks, days), [weeks, days]);

  const getCellColor = (level: number) => {
    switch (level) {
      case 1:
        return 'bg-emerald-950/40 border-emerald-900/30';
      case 2:
        return 'bg-emerald-900/60 border-emerald-800/40';
      case 3:
        return 'bg-emerald-700/80 border-emerald-600/40';
      case 4:
        return 'bg-emerald-500 border-emerald-400/50 shadow-[0_0_8px_rgba(16,185,129,0.3)]';
      default:
        return 'bg-zinc-900/80 border-zinc-800/40';
    }
  };

  const dayLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const monthLabels = ['Feb', 'Mar', 'Apr', 'May'];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.015,
        delayChildren: 0.1,
      },
    },
  };

  const cellVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

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
      className="relative overflow-hidden p-8 bg-zinc-950/40 backdrop-blur-xl border border-zinc-800/80 hover:border-emerald-500/30 rounded-3xl min-h-[220px] flex flex-col justify-between shadow-xl group transition-all duration-300"
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
      <div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-zinc-400" />
            <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider">Learning Consistency</h3>
          </div>
          <span className="text-xs text-zinc-500">Last 112 days</span>
        </div>

        <div className="flex gap-2 overflow-x-auto py-2 no-scrollbar select-none">
          <div className="grid grid-rows-7 gap-[3px] text-[9px] font-medium text-zinc-600 pt-[10px] pr-1">
            {dayLabels.map((label, idx) => (
              <span key={idx} className="h-[10px] flex items-center justify-center">
                {idx % 2 === 1 ? label : ''}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex justify-between text-[9px] text-zinc-500 font-semibold px-1">
              {monthLabels.map((month, idx) => (
                <span key={idx} className="w-[44px]">{month}</span>
              ))}
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="flex gap-[3px]"
            >
              {activityData.map((week, wIdx) => (
                <div key={wIdx} className="grid grid-rows-7 gap-[3px]">
                  {week.map((day) => (
                    <motion.div
                      key={day.id}
                      variants={cellVariants}
                      whileHover={{ scale: 1.25, zIndex: 10 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                      className={`w-[10px] h-[10px] rounded-[2px] border ${getCellColor(
                        day.level
                      )} cursor-pointer transition-colors duration-200`}
                      title={`Activity level: ${day.level}`}
                    />
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center text-[10px] text-zinc-500 mt-2">
        <span>Less active</span>
        <div className="flex gap-1 items-center">
          <div className="w-2.5 h-2.5 rounded-[2px] border border-zinc-800 bg-zinc-900" />
          <div className="w-2.5 h-2.5 rounded-[2px] border border-emerald-900 bg-emerald-950/40" />
          <div className="w-2.5 h-2.5 rounded-[2px] border border-emerald-800 bg-emerald-900/60" />
          <div className="w-2.5 h-2.5 rounded-[2px] border border-emerald-600 bg-emerald-700/80" />
          <div className="w-2.5 h-2.5 rounded-[2px] border border-emerald-400 bg-emerald-500" />
        </div>
        <span>More active</span>
      </div>
    </motion.article>
  );
}
