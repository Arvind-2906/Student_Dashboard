'use client';

import { Course } from '@/types/course';
import { motion, Variants } from 'framer-motion';
import HeroTile from './HeroTile';
import ActivityTile from './ActivityTile';
import CourseCard from './CourseCard';

interface BentoGridProps {
  courses: Course[];
}

export default function BentoGrid({ courses }: BentoGridProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
    >
      <motion.div variants={itemVariants} className="col-span-1 md:col-span-2">
        <HeroTile />
      </motion.div>

      <motion.div variants={itemVariants} className="col-span-1 md:col-span-2">
        <ActivityTile />
      </motion.div>

      {courses.map((course) => (
        <motion.div key={course.id} variants={itemVariants} className="col-span-1">
          <CourseCard course={course} />
        </motion.div>
      ))}
    </motion.div>
  );
}
