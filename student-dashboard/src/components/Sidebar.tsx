"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Settings,
  GraduationCap,
  LogOut,
  User,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';

interface SidebarProps {
  currentTab?: string;
  onTabChange?: (tab: string) => void;
}

export default function Sidebar({ currentTab = 'dashboard', onTabChange }: SidebarProps) {
  const [activeTab, setActiveTab] = useState(currentTab);
  const [collapsed, setCollapsed] = useState(false);
  const [vw, setVw] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'courses', label: 'My Courses', icon: BookOpen },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const handleTabSelect = (id: string) => {
    setActiveTab(id);
    if (onTabChange) {
      onTabChange(id);
    }
  };

  const isDesktopLarge = vw >= 1024;
  const targetWidth = isDesktopLarge ? (collapsed ? 80 : 256) : vw >= 768 ? (collapsed ? 64 : 80) : undefined;

  return (
    <motion.nav
      layout
      animate={targetWidth ? { width: targetWidth } : undefined}
      transition={{ type: 'spring', stiffness: 260, damping: 30 }}
      className="fixed bottom-0 left-0 right-0 h-16 md:sticky md:top-0 md:h-screen w-full md:w-20 lg:w-64 bg-zinc-950/80 backdrop-blur-xl border-t md:border-t-0 md:border-r border-zinc-900/60 flex md:flex-col justify-between p-3 md:p-4 lg:p-6 z-50"
    >
      <div className="hidden md:flex items-center gap-3 mb-8 px-2">
        <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-500/20">
          <GraduationCap className="w-6 h-6 text-zinc-950 font-black" />
        </div>
        <span className="hidden lg:block text-base font-extrabold tracking-wider bg-gradient-to-r from-zinc-50 to-zinc-300 bg-clip-text text-transparent">
          LEARN OS
        </span>

        <div className="ml-auto hidden lg:flex items-center">
          <motion.button
            onClick={() => setCollapsed((s) => !s)}
            whileTap={{ scale: 0.95 }}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            className="ml-3 p-2 rounded-full bg-zinc-900/40 border border-zinc-800/50 text-zinc-300 hover:bg-zinc-900/60 transition-colors duration-200"
          >
            {collapsed ? (
              <ChevronsRight className="w-4 h-4" />
            ) : (
              <ChevronsLeft className="w-4 h-4" />
            )}
          </motion.button>
        </div>
      </div>

      <div className="flex md:flex-col flex-row justify-around md:justify-start gap-1 md:gap-2 w-full">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleTabSelect(item.id)}
              className={`group relative flex items-center justify-center lg:justify-start gap-1 lg:gap-3 py-2 px-3 md:py-3 md:px-4 rounded-2xl text-xs lg:text-sm font-medium transition-all duration-200 cursor-pointer w-full max-w-[100px] md:max-w-none ${
                isActive
                  ? 'text-zinc-50 font-semibold'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/30'
              }`}
            >
              <div className="relative z-20 flex items-center gap-2">
                <span className={`hidden lg:block ${collapsed ? 'lg:hidden' : ''}`} />
              </div>
              {isActive && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 bg-zinc-900 border border-zinc-800/80 rounded-2xl z-0"
                  transition={{
                    type: 'spring',
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-1 lg:gap-3">
                <Icon
                  className={`w-5 h-5 transition-transform duration-200 group-hover:scale-105 ${
                    isActive ? 'text-emerald-400' : 'text-zinc-450 group-hover:text-zinc-200'
                  }`}
                />
                <span className="text-[10px] md:hidden lg:block lg:text-sm">
                  {item.label}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="hidden md:flex flex-col gap-4 mt-auto border-t border-zinc-900/60 pt-4 w-full">
        <div className="flex items-center gap-3 px-2 py-1.5 rounded-xl hover:bg-zinc-900/30 transition-colors duration-200 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700/50 flex items-center justify-center text-zinc-300">
            <User className="w-4 h-4" />
          </div>
          <div className="hidden lg:block text-left">
            <div className="text-xs font-bold text-zinc-200 leading-none">Arvind Patil</div>
            <span className="text-[10px] text-zinc-500 mt-1 block">arvind@student.com</span>
          </div>
        </div>

        <button className="flex items-center justify-center lg:justify-start gap-3 py-2.5 px-4 text-xs font-semibold text-zinc-500 hover:text-zinc-300 rounded-xl transition-all duration-200 hover:bg-zinc-900/20 cursor-pointer">
          <LogOut className="w-4.5 h-4.5" />
          <span className="hidden lg:block">Log Out</span>
        </button>
      </div>
    </motion.nav>
  );
}
