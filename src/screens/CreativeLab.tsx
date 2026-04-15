import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Video, 
  FileText, 
  Mail, 
  Layers, 
  Wand2, 
  RefreshCw,
  Plus,
  ArrowRight,
  Target,
  TrendingUp
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { creatives, personas } from '../data/mockData';
import { cn } from '../lib/utils';

export const CreativeLab = () => {
  const [selectedPersona, setSelectedPersona] = useState(personas[0].id);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-6"
    >
      {/* Left: Generator Panel */}
      <div className="lg:col-span-4 space-y-6">
        <Card variant="hero" className="border-accent/30 shadow-[0_0_20px_rgba(58,134,255,0.05)]">
          <CardHeader className="bg-accent/5">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent" />
              <CardTitle className="text-accent">AI Hook Generator</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-3 block">Target Persona</label>
              <div className="grid grid-cols-1 gap-2">
                {personas.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPersona(p.id)}
                    className={cn(
                      "text-left px-4 py-3 rounded-sm text-xs transition-all border flex items-center justify-between group",
                      selectedPersona === p.id 
                        ? "bg-accent/10 border-accent text-text-primary" 
                        : "bg-surface border-border text-text-secondary hover:border-text-secondary"
                    )}
                  >
                    <span>{p.name}</span>
                    {selectedPersona === p.id && <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-3 block">Content Angle</label>
              <select className="w-full bg-surface border border-border rounded-sm px-3 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent transition-colors">
                <option>Technical Diagnostic</option>
                <option>Owner Ambition</option>
                <option>Efficiency Hacks</option>
                <option>Customer Chaos</option>
              </select>
            </div>

            <Button className="w-full gap-2 py-4 mt-2 shadow-[0_0_15px_rgba(58,134,255,0.2)]">
              <Wand2 className="w-4 h-4" />
              <span className="uppercase tracking-widest text-[10px] font-bold">Forge 10 Hooks</span>
            </Button>
          </CardContent>
        </Card>

        <Card variant="accent">
          <CardHeader>
            <div className="section-title mb-0 w-full">PERSONA INSIGHTS</div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-xs text-text-secondary leading-relaxed italic border-l-2 border-border pl-3">
              "{personas.find(p => p.id === selectedPersona)?.description}"
            </p>
            <div>
              <h4 className="text-[10px] font-mono text-green uppercase tracking-widest mb-3 flex items-center gap-2">
                <Target className="w-3 h-3" />
                Pain Points
              </h4>
              <ul className="space-y-2">
                {personas.find(p => p.id === selectedPersona)?.painPoints.map((point, i) => (
                  <li key={i} className="text-xs text-text-secondary flex items-start gap-2">
                    <span className="text-green mt-0.5">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-mono text-accent uppercase tracking-widest mb-3 flex items-center gap-2">
                <TrendingUp className="w-3 h-3" />
                Aspirations
              </h4>
              <ul className="space-y-2">
                {personas.find(p => p.id === selectedPersona)?.aspirations.map((asp, i) => (
                  <li key={i} className="text-xs text-text-secondary flex items-start gap-2">
                    <span className="text-accent mt-0.5">•</span>
                    {asp}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Right: Creative Assets */}
      <div className="lg:col-span-8 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="secondary" size="sm" className="bg-surface-light border border-border">All Assets</Button>
            <Button variant="ghost" size="sm" className="text-text-secondary hover:text-text-primary">Videos</Button>
            <Button variant="ghost" size="sm" className="text-text-secondary hover:text-text-primary">Posts</Button>
            <Button variant="ghost" size="sm" className="text-text-secondary hover:text-text-primary">Emails</Button>
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Sync Library</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {creatives.map((creative) => (
            <Card key={creative.id} className="group hover:border-accent/40 transition-all overflow-hidden flex flex-col">
              <CardContent className="p-0 flex-1 flex flex-col">
                <div className="aspect-video bg-bg flex items-center justify-center border-b border-border relative overflow-hidden">
                  {creative.type === 'Video' ? <Video className="w-10 h-10 text-surface-light group-hover:scale-110 transition-transform duration-500" /> : <FileText className="w-10 h-10 text-surface-light group-hover:scale-110 transition-transform duration-500" />}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <Badge variant="info">{creative.type}</Badge>
                    <Badge variant="outline" className="bg-bg/50 backdrop-blur-sm">{creative.persona}</Badge>
                  </div>
                  {creative.performance === 'High' && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="success" className="shadow-[0_0_10px_rgba(46,204,113,0.3)]">High Signal</Badge>
                    </div>
                  )}
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h4 className="text-sm font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">{creative.title}</h4>
                  <p className="text-xs text-text-secondary italic mb-6 line-clamp-2 leading-relaxed">"{creative.hook}"</p>
                  
                  <div className="mt-auto pt-5 border-t border-border flex items-center justify-between">
                    <div className="flex gap-1.5">
                      {creative.tags.map(tag => (
                        <span key={tag} className="text-[9px] font-mono text-text-secondary/50 uppercase tracking-widest">{tag}</span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-accent/10 hover:text-accent" title="Create Variant">
                        <Layers className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-accent/10 hover:text-accent" title="Launch Campaign">
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          <button className="aspect-square md:aspect-auto border-2 border-dashed border-border rounded-sm flex flex-col items-center justify-center gap-3 text-text-secondary hover:border-accent/50 hover:text-accent hover:bg-accent/5 transition-all group min-h-[300px]">
            <div className="p-4 rounded-full bg-surface border border-border group-hover:border-accent/30 transition-all">
              <Plus className="w-8 h-8 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-[3px] font-bold">Add Asset</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};
