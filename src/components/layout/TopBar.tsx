import React from 'react';
import { Search, Bell, User, Command } from 'lucide-react';

interface TopBarProps {
  activeScreen: string;
}

export const TopBar = ({ activeScreen }: TopBarProps) => {
  const screenTitles: Record<string, string> = {
    overview: 'Command Overview',
    campaigns: 'Active Campaigns',
    creative: 'Creative Lab // Forge',
    experiments: 'Signal Experiments',
    brief: 'Operator Briefing',
  };

  return (
    <header className="h-[60px] border-b border-border bg-surface flex items-center justify-between px-8 sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <div className="logo font-mono font-extrabold tracking-[2px] text-sm text-text-primary uppercase">
          HVAC FORGE // <span className="text-accent">SIGNAL ROOM</span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="system-status flex gap-5 text-[11px] font-mono uppercase text-text-secondary">
          <div className="flex items-center gap-2">
            <span className="status-dot inline-block w-1.5 h-1.5 rounded-full bg-green shadow-[0_0_8px_theme(colors.green)]" />
            CORE-ENGINE: ONLINE
          </div>
          <div>SIGNAL: 98%</div>
          <div>HEAT: STABLE</div>
        </div>

        <div className="flex items-center gap-3 border-l border-border pl-6">
          <button className="relative p-2 text-text-secondary hover:text-text-primary transition-colors">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red rounded-full border border-bg" />
          </button>
          <button className="flex items-center gap-2 p-1 pl-2 pr-3 bg-surface-light border border-border rounded-sm hover:border-text-secondary transition-colors">
            <div className="w-6 h-6 bg-gradient-to-br from-gray-700 to-gray-900 rounded-sm flex items-center justify-center">
              <User className="w-3.5 h-3.5 text-text-secondary" />
            </div>
            <span className="text-xs font-medium text-text-primary">RK</span>
          </button>
        </div>
      </div>
    </header>
  );
};
