import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Filter, 
  Plus, 
  MoreHorizontal, 
  ArrowUp, 
  ArrowDown, 
  Minus,
  ExternalLink,
  Copy,
  Pause,
  Play,
  TrendingUp,
  X,
  Zap,
  Target,
  BarChart3,
  Clock,
  Wand2
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { SignalIndicator } from '../components/ui/SignalIndicator';
import { campaigns } from '../data/mockData';
import { cn } from '../lib/utils';
import { Campaign } from '../types';

export const Campaigns = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);

  const filteredCampaigns = campaigns.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.channel.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6 relative"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
            <input 
              type="text" 
              placeholder="Filter campaigns..." 
              className="bg-surface border border-border rounded-sm pl-10 pr-4 py-2 text-xs text-text-primary focus:outline-none focus:border-accent w-80 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="w-3.5 h-3.5" />
            <span>Filters</span>
          </Button>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          <span>New Campaign</span>
        </Button>
      </div>

      <Card variant="default" className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse font-sans text-xs">
            <thead>
              <tr className="border-b border-border bg-surface-light/50">
                <th className="px-6 py-3 text-[10px] font-mono text-text-secondary uppercase tracking-widest">Campaign Name</th>
                <th className="px-6 py-3 text-[10px] font-mono text-text-secondary uppercase tracking-widest">Channel</th>
                <th className="px-6 py-3 text-[10px] font-mono text-text-secondary uppercase tracking-widest">Forge Signal</th>
                <th className="px-6 py-3 text-[10px] font-mono text-text-secondary uppercase tracking-widest">Status</th>
                <th className="px-6 py-3 text-[10px] font-mono text-text-secondary uppercase tracking-widest">CPA</th>
                <th className="px-6 py-3 text-[10px] font-mono text-text-secondary uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-surface">
              {filteredCampaigns.map((campaign) => (
                <tr 
                  key={campaign.id} 
                  className={cn(
                    "group hover:bg-surface-light transition-colors cursor-pointer",
                    selectedCampaign?.id === campaign.id && "bg-surface-light"
                  )}
                  onClick={() => setSelectedCampaign(campaign)}
                >
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-text-primary group-hover:text-accent transition-colors">{campaign.name}</span>
                      <span className="text-[10px] text-text-secondary uppercase tracking-tight mt-0.5">{campaign.creativeAngle}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant="outline">{campaign.channel}</Badge>
                  </td>
                  <td className="px-6 py-4">
                    <SignalIndicator value={campaign.forgeSignal} size="sm" />
                  </td>
                  <td className="px-6 py-4">
                    <Badge>{campaign.status}</Badge>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-mono text-text-primary font-bold">${campaign.metrics.cpa.toFixed(2)}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={(e) => { e.stopPropagation(); }}>
                        <TrendingUp className="w-3.5 h-3.5 text-green" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={(e) => { e.stopPropagation(); }}>
                        <Copy className="w-3.5 h-3.5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Detail Drawer */}
      <AnimatePresence>
        {selectedCampaign && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCampaign(null)}
              className="fixed inset-0 bg-bg/60 backdrop-blur-sm z-40"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[450px] bg-surface border-l border-border z-50 shadow-2xl p-0 flex flex-col"
            >
              <div className="p-6 border-b border-border flex items-center justify-between bg-surface-light/30">
                <div className="flex flex-col">
                  <Badge variant="outline" className="mb-2 w-fit">{selectedCampaign.channel}</Badge>
                  <h2 className="text-xl font-bold text-text-primary tracking-tight">{selectedCampaign.name}</h2>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setSelectedCampaign(null)}>
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-8">
                {/* Signal Section */}
                <section className="space-y-4">
                  <div className="section-title">FORGE SIGNAL ANALYSIS</div>
                  <Card variant="accent" className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-1">Current Strength</span>
                        <span className="text-3xl font-bold text-text-primary font-mono">{selectedCampaign.forgeSignal}%</span>
                      </div>
                      <SignalIndicator value={selectedCampaign.forgeSignal} size="lg" className="flex-col items-end gap-1" />
                    </div>
                    <div className="p-3 bg-accent/5 border border-accent/20 rounded-sm">
                      <p className="text-xs text-text-secondary leading-relaxed">
                        <span className="text-accent font-bold">AI Insight:</span> This campaign is showing strong resonance with the <span className="text-text-primary font-bold">{selectedCampaign.creativeAngle}</span> angle. CPM is stable, but CTR is trending up.
                      </p>
                    </div>
                  </Card>
                </section>

                {/* Metrics Grid */}
                <section className="space-y-4">
                  <div className="section-title">PERFORMANCE METRICS</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-surface-light/50 border border-border rounded-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="w-3.5 h-3.5 text-text-secondary" />
                        <span className="text-[10px] font-mono text-text-secondary uppercase tracking-widest">Conversions</span>
                      </div>
                      <p className="text-xl font-bold text-text-primary font-mono">{selectedCampaign.metrics.signups}</p>
                    </div>
                    <div className="p-4 bg-surface-light/50 border border-border rounded-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-3.5 h-3.5 text-text-secondary" />
                        <span className="text-[10px] font-mono text-text-secondary uppercase tracking-widest">Avg. CPA</span>
                      </div>
                      <p className="text-xl font-bold text-text-primary font-mono">${selectedCampaign.metrics.cpa.toFixed(2)}</p>
                    </div>
                    <div className="p-4 bg-surface-light/50 border border-border rounded-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <BarChart3 className="w-3.5 h-3.5 text-text-secondary" />
                        <span className="text-[10px] font-mono text-text-secondary uppercase tracking-widest">CTR</span>
                      </div>
                      <p className="text-xl font-bold text-text-primary font-mono">{selectedCampaign.metrics.ctr}%</p>
                    </div>
                    <div className="p-4 bg-surface-light/50 border border-border rounded-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-3.5 h-3.5 text-text-secondary" />
                        <span className="text-[10px] font-mono text-text-secondary uppercase tracking-widest">Last Update</span>
                      </div>
                      <p className="text-sm font-bold text-text-primary font-mono">{selectedCampaign.lastUpdated}</p>
                    </div>
                  </div>
                </section>

                {/* Quick Actions */}
                <section className="space-y-4">
                  <div className="section-title">OPERATOR ACTIONS</div>
                  <div className="grid grid-cols-1 gap-3">
                    <Button className="w-full justify-between group">
                      <span>Boost Daily Budget</span>
                      <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                    <Button variant="outline" className="w-full justify-between group">
                      <span>Tweak Creative Hooks</span>
                      <Wand2 className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    </Button>
                    <Button variant="outline" className="w-full justify-between group text-red hover:bg-red/10 hover:border-red/30">
                      <span>Pause Campaign</span>
                      <Pause className="w-4 h-4" />
                    </Button>
                  </div>
                </section>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
