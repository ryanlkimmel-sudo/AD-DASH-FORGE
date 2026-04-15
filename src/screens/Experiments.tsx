import React from 'react';
import { motion } from 'motion/react';
import { 
  Zap, 
  Trophy, 
  AlertCircle, 
  Play, 
  History,
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { experiments } from '../data/mockData';
import { cn } from '../lib/utils';

export const Experiments = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="secondary" className="gap-2 bg-surface-light border border-border">
            <History className="w-4 h-4" />
            <span>Archive</span>
          </Button>
        </div>
        <Button className="gap-2 shadow-[0_0_15px_rgba(58,134,255,0.2)]">
          <Zap className="w-4 h-4" />
          <span className="uppercase tracking-widest text-[10px] font-bold">New Experiment</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {experiments.map((exp) => (
          <Card key={exp.id} variant="default" className={cn(
            "border-l-4 overflow-hidden group transition-all hover:border-l-8",
            exp.status === 'Running' ? "border-l-accent" : "border-l-green"
          )}>
            <CardContent className="p-0">
              <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-border">
                {/* Hypothesis & Info */}
                <div className="lg:w-1/3 p-8 space-y-6 bg-surface-light/20">
                  <div className="flex items-center justify-between">
                    <Badge variant={exp.status === 'Running' ? 'info' : 'success'}>
                      {exp.status}
                    </Badge>
                    <div className="flex flex-col items-end">
                      <span className="text-[9px] font-mono text-text-secondary uppercase tracking-widest mb-1">Confidence</span>
                      <span className="text-xs font-bold text-text-primary font-mono">{exp.confidence}%</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-accent uppercase tracking-[2px]">Hypothesis</span>
                    <h3 className="text-xl font-bold text-text-primary leading-tight tracking-tight group-hover:text-accent transition-colors">{exp.hypothesis}</h3>
                  </div>
                  
                  {exp.status === 'Completed' && (
                    <div className="p-4 bg-green/5 border border-green/20 rounded-sm relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-2 opacity-10">
                        <Trophy className="w-12 h-12 text-green" />
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <Trophy className="w-4 h-4 text-green" />
                        <span className="text-[10px] font-bold text-green uppercase tracking-widest">Winning Insight</span>
                      </div>
                      <p className="text-xs text-text-secondary leading-relaxed">{exp.suggestedAction}</p>
                    </div>
                  )}

                  {exp.status === 'Running' && (
                    <div className="p-4 bg-accent/5 border border-accent/20 rounded-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <Play className="w-4 h-4 text-accent" />
                        <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Current Action</span>
                      </div>
                      <p className="text-xs text-text-secondary leading-relaxed">{exp.suggestedAction}</p>
                    </div>
                  )}

                  <div className="pt-4 flex items-center gap-4 border-t border-border/50">
                    <div className="flex flex-col">
                      <span className="text-[9px] font-mono text-text-secondary uppercase tracking-widest">Channel</span>
                      <span className="text-xs font-bold text-text-primary">{exp.channel}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-mono text-text-secondary uppercase tracking-widest">Duration</span>
                      <span className="text-xs font-bold text-text-primary">14 Days</span>
                    </div>
                  </div>
                </div>

                {/* Variants Comparison */}
                <div className="flex-1 p-8 bg-surface">
                  <div className="section-title mb-6">VARIANT PERFORMANCE</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {exp.variants.map((variant, i) => (
                      <div key={i} className={cn(
                        "p-6 rounded-sm border transition-all relative overflow-hidden group/variant",
                        variant.isWinner 
                          ? "bg-green/5 border-green/30 shadow-[0_0_20px_rgba(46,204,113,0.05)]" 
                          : "bg-surface-light/30 border-border hover:border-border/80"
                      )}>
                        {variant.isWinner && (
                          <div className="absolute top-0 right-0">
                            <div className="bg-green text-bg text-[8px] font-bold px-3 py-1 uppercase tracking-widest transform rotate-45 translate-x-3 -translate-y-1 w-24 text-center shadow-sm">
                              Winner
                            </div>
                          </div>
                        )}

                        <div className="flex items-center justify-between mb-6">
                          <div className="flex flex-col">
                            <span className="text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-1">Variant {String.fromCharCode(65 + i)}</span>
                            <span className={cn(
                              "text-sm font-bold tracking-tight",
                              variant.isWinner ? "text-green" : "text-text-primary"
                            )}>
                              {variant.name}
                            </span>
                          </div>
                          {variant.isWinner && <Trophy className="w-5 h-5 text-green" />}
                        </div>

                        <div className="grid grid-cols-2 gap-8 mb-6">
                          <div>
                            <p className="text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-1.5">CTR</p>
                            <p className={cn(
                              "text-2xl font-bold tracking-tighter font-mono",
                              variant.isWinner ? "text-text-primary" : "text-text-secondary"
                            )}>
                              {variant.metrics.ctr}%
                            </p>
                          </div>
                          <div>
                            <p className="text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-1.5">Conv.</p>
                            <p className={cn(
                              "text-2xl font-bold tracking-tighter font-mono",
                              variant.isWinner ? "text-text-primary" : "text-text-secondary"
                            )}>
                              {variant.metrics.conversion}%
                            </p>
                          </div>
                        </div>

                        {/* Visual Bar */}
                        <div className="space-y-2">
                          <div className="flex justify-between text-[9px] font-mono text-text-secondary uppercase tracking-widest">
                            <span>Signal Strength</span>
                            <span>{(variant.metrics.conversion / 10 * 100).toFixed(0)}%</span>
                          </div>
                          <div className="h-1.5 bg-bg rounded-full overflow-hidden border border-border/50">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${(variant.metrics.conversion / 10) * 100}%` }}
                              transition={{ duration: 1.5, ease: "easeOut" }}
                              className={cn(
                                "h-full rounded-full",
                                variant.isWinner ? "bg-green shadow-[0_0_10px_rgba(46,204,113,0.5)]" : "bg-border"
                              )}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};
