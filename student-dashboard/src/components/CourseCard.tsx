'use client';

import { Course } from '@/types/course';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

const DynamicIcon = ({ name, className }: { name: string; className?: string }) => {
  const normalizedName = name
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string; size?: number }>>)[normalizedName] || Icons.BookOpen;
  return <IconComponent className={className} size={20} />;
};

export default function CourseCard({ course }: CourseCardProps) {
  const { title, progress, icon_name } = course;

  return (
    <motion.article
      whileHover={{
        scale: 1.02,
        y: -2,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
      className="group relative overflow-hidden p-6 bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 hover:border-emerald-500/30 rounded-3xl flex flex-col justify-between h-[200px] shadow-lg cursor-pointer transition-all duration-300"
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none select-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-zinc-900/0 to-zinc-950/40" />
        <div 
          className="absolute inset-0 opacity-[0.12] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
          }}
        />
      </div>
      <div className="absolute -inset-px bg-gradient-to-r from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/10 group-hover:to-emerald-400/5 rounded-3xl transition-all duration-500 z-0" />

      <div className="relative z-10 flex flex-col justify-between h-full">
        <div className="flex items-center justify-between">
          <div className="p-3 bg-zinc-800/60 rounded-2xl border border-zinc-700/30 group-hover:bg-emerald-950/40 group-hover:border-emerald-500/20 group-hover:text-emerald-400 text-zinc-300 transition-all duration-300">
            <DynamicIcon name={icon_name} className="w-5 h-5" />
          </div>
          <span className="text-sm font-bold text-zinc-300 group-hover:text-emerald-400 transition-colors duration-300">
            {progress}%
          </span>
        </div>

        <div className="mt-4">
          <h3 className="text-base font-bold text-zinc-100 group-hover:text-white transition-colors duration-300 leading-snug tracking-tight line-clamp-2">
            {title}
          </h3>
        </div>

        <div className="mt-4 space-y-1.5">
          <div className="h-1.5 w-full bg-zinc-950/60 border border-zinc-850 rounded-full overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: progress / 100 }}
              transition={{
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ originX: 0 }}
              className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
