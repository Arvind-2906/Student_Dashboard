import { supabase } from '@/lib/supabase';
import BentoGrid from '@/components/BentoGrid';
import { Course } from '@/types/course';

export const revalidate = 0;

export default async function DashboardPage() {
  const { data: courses, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Failed to fetch courses:', error);
    throw new Error(error.message || 'Failed to fetch course data');
  }

  const typedCourses = (courses || []) as Course[];

  return (
    <main className="flex-1 bg-zinc-950 text-zinc-50 min-h-screen">
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <header className="max-w-7xl mx-auto mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            Next-Gen Learning Dashboard
          </h1>
          <p className="mt-2 text-sm text-zinc-400">
            Track your course progress and activity analytics.
          </p>
        </header>
        
        <section>
          <BentoGrid courses={typedCourses} />
        </section>
      </div>
    </main>
  );
}
