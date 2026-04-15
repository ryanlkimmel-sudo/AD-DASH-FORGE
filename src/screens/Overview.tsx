import React from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Users, 
  MousePointer2, 
  UserPlus, 
  Zap, 
  CheckCircle2,
  ArrowUpRight,
  ArrowDownRight,
  Target,
  Activity,
  Beaker,
  Flame,
  Wand2
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { MomentumChart, ChannelPerformanceChart } from '../components/charts/SimpleCharts';
import { campaigns, recommendations } from '../data/mockData';
import { cn } from '../lib/utils';

const StatCard = ({ title, value, change, icon: Icon, trend }: any) => (
  <Card glow={trend === 'up'} variant="default">
    <CardContent className="p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-text-primary tracking-tighter font-mono">{value}</h3>
          <div className="flex items-center gap-1 mt-2">
            {trend === 'up' ? (
              <ArrowUpRight className="w-3 h-3 text-green" />
            ) : (
              <ArrowDownRight className="w-3 h-3 text-red" />
            )}
            <span className={cn('text-[11px] font-mono', trend === 'up' ? 'text-green' : 'text-red')}>
              {change}
            </span>
            <span className="text-[10px] text-text-secondary uppercase font-mono ml-1">vs last week</span>
          </div>
        </div>
        <div className="p-2 bg-surface-light rounded-sm">
          <Icon className="w-4 h-4 text-text-secondary" />
        </div>
      </div>
    </CardContent>
  </Card>
);

export const Overview = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card variant="hero" className="lg:col-span-8 p-8 flex flex-col justify-between min-h-[280px]">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="ready-to-scale">High Momentum Detected</Badge>
              <span className="text-[10px] font-mono text-text-secondary uppercase tracking-[3px]">System Status: Optimal</span>
            </div>
            <h1 className="text-4xl font-bold text-text-primary tracking-tight mb-4 max-w-xl">
              Signal is strong on <span className="text-accent underline decoration-accent/30 underline-offset-8">Technical POV</span> content.
            </h1>
            <p className="text-text-secondary text-sm max-w-lg leading-relaxed">
              Your "No-Cool Diagnostic" campaign is outperforming benchmarks by 4.2x. 
              The algorithm is favoring high-credibility trade content. Ready for a budget boost?
            </p>
          </div>
          <div className="flex items-center gap-4 mt-8">
            <Button size="lg" className="gap-2">
              <Zap className="w-4 h-4" />
              <span>Boost Top Signals</span>
            </Button>
            <Button variant="outline" size="lg">Review Operator Brief</Button>
          </div>
        </Card>

        <div className="lg:col-span-4 grid grid-cols-1 gap-6">
          <StatCard 
            title="Active Experiments" 
            value="14" 
            change="+2" 
            trend="up" 
            icon={Beaker} 
          />
          <StatCard 
            title="Forge Heat Index" 
            value="84%" 
            change="High" 
            trend="up" 
            icon={Flame} 
          />
        </div>
      </section>

      {/* Secondary KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Conversions" 
          value="412" 
          change="+12%" 
          trend="up" 
          icon={Target} 
        />
        <StatCard 
          title="Avg. CPA" 
          value="$4.85" 
          change="-15%" 
          trend="up" 
          icon={TrendingUp} 
        />
        <StatCard 
          title="Signal Clarity" 
          value="9.2" 
          change="Stable" 
          trend="up" 
          icon={Activity} 
        />
        <StatCard 
          title="Creative Output" 
          value="24" 
          change="+8" 
          trend="up" 
          icon={Zap} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <Card variant="accent" className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="section-title mb-0 w-full">FORGE MOMENTUM // 14-DAY SIGNAL</div>
            <Badge variant="success">Signal Strong</Badge>
          </CardHeader>
          <CardContent>
            <MomentumChart />
          </CardContent>
        </Card>

        {/* Operator Checklist */}
        <Card variant="accent">
          <CardHeader>
            <div className="section-title mb-0 w-full">OPERATOR CHECKLIST</div>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              'Review TikTok "Diagnose Like a Pro" comments',
              'Finalize Reddit "Challenge" variant B',
              'Repurpose YouTube winner into Email',
              'Check signal on "Truck Stock" campaign',
              'Draft new "Owner-Operator" persona brief'
            ].map((task, i) => (
              <div key={i} className="flex items-center gap-3 group cursor-pointer">
                <div className="w-4 h-4 rounded-sm border border-border flex items-center justify-center group-hover:border-accent transition-colors">
                  <div className="w-2 h-2 bg-accent scale-0 group-hover:scale-100 transition-transform rounded-[1px]" />
                </div>
                <span className="text-xs text-text-secondary group-hover:text-text-primary transition-colors">{task}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* AI Recommendations */}
      <section className="space-y-4">
        <div className="section-title">STRATEGIC ADVISORY // AI</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((rec) => (
            <Card key={rec.id} className="group hover:border-accent/50 transition-all cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant={rec.impact === 'High' ? 'danger' : 'warning'}>
                    {rec.impact} Impact
                  </Badge>
                  <div className="p-2 bg-surface-light rounded-sm group-hover:bg-accent/10 transition-colors">
                    <Zap className="w-4 h-4 text-text-secondary group-hover:text-accent" />
                  </div>
                </div>
                <h4 className="text-sm font-bold text-text-primary mb-2 uppercase tracking-tight">{rec.title}</h4>
                <p className="text-xs text-text-secondary leading-relaxed mb-4">{rec.description}</p>
                <Button variant="outline" size="sm" className="w-full group-hover:bg-accent group-hover:text-white transition-all">
                  Execute {rec.type}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </motion.div>
  );
};
