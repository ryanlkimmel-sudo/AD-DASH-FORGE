import React from 'react';
import { 
  LayoutDashboard, 
  Target, 
  FlaskConical, 
  Zap, 
  FileText, 
  Settings,
  Hammer
} from 'lucide-react';
import { cn } from '../../lib/utils';

interface SidebarProps {
  activeScreen: string;
  setActiveScreen: (screen: string) => void;
}

const navItems = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'campaigns', label: 'Campaigns', icon: Target },
  { id: 'creative', label: 'Creative Lab', icon: FlaskConical },
  { id: 'experiments', label: 'Experiments', icon: Zap },
  { id: 'brief', label: 'Operator Brief', icon: FileText },
];

export const Sidebar = ({ activeScreen, setActiveScreen }: SidebarProps) => {
  return (
    <aside className="w-64 border-r border-border bg-surface/95 flex flex-col h-screen sticky top-0">
      <div className="p-6 flex items-center gap-3 border-b border-border">
        <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
          <Hammer className="w-5 h-5 text-white" />
        </div>
        <div>
          <h1 className="text-sm font-bold tracking-tighter text-text-primary uppercase leading-none">HVAC Forge</h1>
          <p className="text-[10px] font-mono text-text-secondary uppercase tracking-widest mt-1">Signal Room</p>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setActiveScreen(item.id)}
            className={cn(
              'w-full flex items-center gap-3 px-6 py-3 text-[12px] transition-all group uppercase tracking-widest border-l-3',
              activeScreen === item.id 
                ? 'bg-accent/10 text-text-primary border-accent' 
                : 'text-text-secondary hover:text-text-primary border-transparent'
            )}
          >
            <span className="font-mono text-[10px] opacity-50 mr-2">0{index + 1}</span>
            <item.icon className={cn(
              'w-4 h-4',
              activeScreen === item.id ? 'text-accent' : 'text-text-secondary group-hover:text-text-primary'
            )} />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-border">
        <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors">
          <Settings className="w-4 h-4" />
          <span>Settings</span>
        </button>
        <div className="mt-4 p-3 bg-surface-light border border-border rounded-sm">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green shadow-[0_0_8px_theme(colors.green)]" />
            <span className="text-[10px] font-mono text-text-secondary uppercase tracking-widest">Core-Engine: Online</span>
          </div>
          <p className="text-[10px] text-text-secondary leading-tight font-mono">
            OPERATOR: RYAN K.<br/>
            SIGNAL: 98%
          </p>
        </div>
      </div>
    </aside>
  );
};
