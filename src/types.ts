export type Channel = 'TikTok' | 'Instagram' | 'YouTube' | 'Reddit' | 'Facebook' | 'LinkedIn' | 'Email';

export type CampaignStatus = 'Ready to Scale' | 'Under Watch' | 'Cooling Off' | 'Cheap Test' | 'Paused' | 'Draft';

export type BudgetLevel = 'Low' | 'Medium' | 'High';

export interface Campaign {
  id: string;
  name: string;
  channel: Channel;
  objective: string;
  creativeAngle: string;
  status: CampaignStatus;
  budgetLevel: BudgetLevel;
  forgeSignal: number; // 0-100
  momentum: 'Up' | 'Down' | 'Stable';
  lastUpdated: string;
  metrics: {
    impressions: number;
    clicks: number;
    ctr: number;
    signups: number;
    cpa: number;
  };
}

export interface Creative {
  id: string;
  title: string;
  hook: string;
  angle: string;
  persona: string;
  type: 'Video' | 'Post' | 'Email' | 'Ad';
  performance: 'High' | 'Medium' | 'Low' | 'Untested';
  tags: string[];
}

export interface Experiment {
  id: string;
  hypothesis: string;
  channel: Channel;
  variants: {
    name: string;
    metrics: { ctr: number; conversion: number };
    isWinner?: boolean;
  }[];
  confidence: number;
  status: 'Running' | 'Completed';
  suggestedAction: string;
}

export interface Persona {
  id: string;
  name: string;
  painPoints: string[];
  aspirations: string[];
  description: string;
}

export interface Recommendation {
  id: string;
  title: string;
  description: string;
  impact: 'High' | 'Medium' | 'Low';
  type: 'Boost' | 'Pause' | 'Tweak' | 'Repurpose';
  campaignId?: string;
}

export interface DailyMetric {
  date: string;
  impressions: number;
  clicks: number;
  signups: number;
  revenue?: number;
}
