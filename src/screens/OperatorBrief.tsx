import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldAlert, 
  TrendingUp, 
  TrendingDown, 
  Zap, 
  MessageSquare, 
  Mail, 
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Clock,
  ChevronRight,
  Flame,
  Target
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { SignalIndicator } from '../components/ui/SignalIndicator';
import { cn } from '../lib/utils';

export const OperatorBrief = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-6"
    >
      {/* Main Briefing Column */}
      <div className="lg:col-span-8 space-y-6">
        <Card variant="hero" className="bg-surface border-border overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between border-b border-border bg-surface-light/30 p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center border border-accent/20 shadow-[0_0_15px_rgba(58,134,255,0.1)]">
                <ShieldAlert className="w-6 h-6 text-accent" />
              </div>
              <div>
                <CardTitle className="text-text-primary text-lg">Daily War Room Briefing</CardTitle>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] font-mono text-text-secondary uppercase tracking-widest">Status: High Signal</span>
                  <span className="text-text-secondary">•</span>
                  <span className="text-[10px] font-mono text-accent uppercase tracking-widest">3 Actions Required</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <Badge variant="outline" className="font-mono text-[10px]">APR 14, 2026</Badge>
              <div className="flex items-center gap-1 mt-2 text-[10px] text-text-secondary font-mono">
                <Clock className="w-3 h-3" />
                <span>08:00 EST</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-8 space-y-10">
            {/* What's Working */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="section-title mb-0">WHAT IS WORKING // ACCELERATE</div>
                <Badge variant="success" className="animate-pulse">High Heat</Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="group bg-surface-light/50 p-5 border border-border hover:border-green/30 transition-all rounded-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-green" />
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-bold text-text-primary uppercase tracking-tight">POV Diagnostics</h4>
                    <TrendingUp className="w-3.5 h-3.5 text-green" />
                  </div>
                  <p className="text-[11px] text-text-secondary leading-relaxed mb-4">
                    Technical POV content on TikTok is driving <span className="text-text-primary font-bold">7.1% CTR</span>. High intent signal from "Apprentice" persona.
                  </p>
                  <Button variant="ghost" size="sm" className="h-7 text-[10px] gap-1 px-0 hover:bg-transparent hover:text-green">
                    <span>View Data</span>
                    <ChevronRight className="w-3 h-3" />
                  </Button>
                </div>
                <div className="group bg-surface-light/50 p-5 border border-border hover:border-green/30 transition-all rounded-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-green" />
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-bold text-text-primary uppercase tracking-tight">Reddit Challenges</h4>
                    <TrendingUp className="w-3.5 h-3.5 text-green" />
                  </div>
                  <p className="text-[11px] text-text-secondary leading-relaxed mb-4">
                    The "Ghost Voltage" challenge thread has 140+ comments. Conversion rate from Reddit is <span className="text-text-primary font-bold">8.2%</span>.
                  </p>
                  <Button variant="ghost" size="sm" className="h-7 text-[10px] gap-1 px-0 hover:bg-transparent hover:text-green">
                    <span>View Data</span>
                    <ChevronRight className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </section>

            {/* What's Fading */}
            <section className="space-y-4">
              <div className="section-title text-red">WHAT IS FADING // PIVOT</div>
              <div className="bg-surface-light/50 p-5 border border-border border-l-red border-l-4 rounded-sm">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-bold text-text-primary uppercase tracking-tight">Aspirational Lifestyle</h4>
                  <TrendingDown className="w-3.5 h-3.5 text-red" />
                </div>
                <p className="text-[11px] text-text-secondary leading-relaxed">
                  "Freedom" themed ads are seeing signal loss. CTR dropped to <span className="text-red font-bold">1.2%</span>. Audience is currently prioritizing <span className="text-text-primary font-bold">competence</span> over lifestyle. Recommend immediate pause.
                </p>
              </div>
            </section>

            {/* AI Strategic Recommendations */}
            <section className="space-y-4">
              <div className="section-title text-accent">AI ADVISORY // STRATEGIC MOVES</div>
              <div className="space-y-3">
                {[
                  { text: 'Double down on "Technical Chaos" hooks for the next 7 days.', icon: Zap, color: 'text-accent' },
                  { text: 'Repurpose top 3 Reddit threads into a "Diagnostic Masterclass" email series.', icon: Mail, color: 'text-accent' },
                  { text: 'Launch a "Truck Stock" experiment specifically for the Owner-Operator persona.', icon: Target, color: 'text-accent' }
                ].map((tip, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-accent/5 border border-accent/10 rounded-sm group hover:bg-accent/10 transition-colors cursor-pointer">
                    <div className={cn("p-2 rounded-sm bg-bg", tip.color)}>
                      <tip.icon className="w-4 h-4" />
                    </div>
                    <p className="text-xs text-text-primary leading-relaxed flex-1">{tip.text}</p>
                    <ArrowRight className="w-4 h-4 text-border group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            </section>
          </CardContent>
        </Card>
      </div>

      {/* Action Stack Column */}
      <div className="lg:col-span-4 space-y-6">
        <Card variant="accent" className="border-accent/30 shadow-[0_0_20px_rgba(58,134,255,0.05)]">
          <CardHeader className="bg-accent/5 border-b border-accent/10">
            <div className="section-title mb-0 w-full text-accent">TODAY'S MOVES</div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {[
                { label: 'Boost Budget', target: 'Tech to Owner: Blueprint', icon: TrendingUp, color: 'text-green', signal: 92 },
                { label: 'Rewrite Hook', target: 'Reddit: Ghost Voltage', icon: MessageSquare, color: 'text-amber', signal: 64 },
                { label: 'Repurpose', target: 'No-Cool Diagnostic', icon: Mail, color: 'text-accent', signal: 88 },
                { label: 'Pause Test', target: 'Apprentice Upgrade Path', icon: AlertTriangle, color: 'text-red', signal: 42 },
              ].map((move, i) => (
                <button key={i} className="w-full p-5 flex items-center justify-between hover:bg-surface-light transition-colors group text-left">
                  <div className="flex items-center gap-4">
                    <div className={cn("p-2.5 rounded-sm bg-bg border border-border group-hover:border-accent/30 transition-colors", move.color)}>
                      <move.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-0.5">{move.label}</p>
                      <p className="text-xs font-bold text-text-primary group-hover:text-accent transition-colors">{move.target}</p>
                      <div className="mt-2">
                        <SignalIndicator value={move.signal} size="sm" />
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-border group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
            <div className="p-6 bg-surface-light/30">
              <Button className="w-full py-4 font-bold uppercase tracking-[2px] text-xs shadow-[0_0_20px_rgba(58,134,255,0.2)]">
                Execute All Moves
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card variant="default">
          <CardHeader>
            <div className="section-title mb-0">FORGE HEAT INDEX</div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex items-center justify-center py-4">
              <div className="relative w-40 h-40 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="var(--color-border)" strokeWidth="6" />
                  <circle 
                    cx="50" cy="50" r="45" fill="none" stroke="var(--color-accent)" strokeWidth="6" 
                    strokeDasharray="282.7" strokeDashoffset={282.7 * (1 - 0.84)} strokeLinecap="round"
                    className="transition-all duration-1000 shadow-[0_0_15px_rgba(58,134,255,0.5)]"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Flame className="w-6 h-6 text-accent mb-1 animate-pulse" />
                  <span className="text-3xl font-bold text-text-primary tracking-tighter font-mono">84%</span>
                  <span className="text-[9px] font-mono text-text-secondary uppercase tracking-widest">Heat Level</span>
                </div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-surface-light rounded-sm border border-border text-center">
              <p className="text-[11px] text-text-secondary leading-relaxed">
                Momentum is <span className="text-green font-bold">Optimal</span>. 3 active signals are ready for scaling. System efficiency at 92%.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};
