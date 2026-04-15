import { Campaign, Creative, Experiment, Persona, Recommendation, DailyMetric } from '../types';

export const campaigns: Campaign[] = [
  {
    id: '1',
    name: 'Tech to Owner: The Blueprint',
    channel: 'TikTok',
    objective: 'Education Signups',
    creativeAngle: 'Technical Mastery',
    status: 'Ready to Scale',
    budgetLevel: 'Medium',
    forgeSignal: 92,
    momentum: 'Up',
    lastUpdated: '2026-04-14',
    metrics: { impressions: 45000, clicks: 3200, ctr: 7.1, signups: 412, cpa: 4.85 }
  },
  {
    id: '2',
    name: 'No-Cool Diagnostic Speedrun',
    channel: 'YouTube',
    objective: 'Lead Gen',
    creativeAngle: 'POV Field Work',
    status: 'Ready to Scale',
    budgetLevel: 'High',
    forgeSignal: 88,
    momentum: 'Up',
    lastUpdated: '2026-04-13',
    metrics: { impressions: 120000, clicks: 8400, ctr: 7.0, signups: 890, cpa: 3.20 }
  },
  {
    id: '3',
    name: 'Reddit: Ghost Voltage Challenge',
    channel: 'Reddit',
    objective: 'Community Growth',
    creativeAngle: 'Technical Debate',
    status: 'Under Watch',
    budgetLevel: 'Low',
    forgeSignal: 64,
    momentum: 'Stable',
    lastUpdated: '2026-04-14',
    metrics: { impressions: 12000, clicks: 450, ctr: 3.75, signups: 45, cpa: 12.50 }
  },
  {
    id: '4',
    name: 'The Apprentice Upgrade Path',
    channel: 'Instagram',
    objective: 'Course Sales',
    creativeAngle: 'Career Progression',
    status: 'Cheap Test',
    budgetLevel: 'Low',
    forgeSignal: 42,
    momentum: 'Down',
    lastUpdated: '2026-04-12',
    metrics: { impressions: 8000, clicks: 120, ctr: 1.5, signups: 12, cpa: 25.00 }
  },
  {
    id: '5',
    name: 'Truck Stock Optimization',
    channel: 'Facebook',
    objective: 'Lead Gen',
    creativeAngle: 'Efficiency Hacks',
    status: 'Cooling Off',
    budgetLevel: 'Medium',
    forgeSignal: 55,
    momentum: 'Down',
    lastUpdated: '2026-04-11',
    metrics: { impressions: 35000, clicks: 600, ctr: 1.7, signups: 58, cpa: 18.20 }
  },
  {
    id: '6',
    name: 'Service Call Mastery',
    channel: 'TikTok',
    objective: 'Education Signups',
    creativeAngle: 'Soft Skills for Techs',
    status: 'Ready to Scale',
    budgetLevel: 'Medium',
    forgeSignal: 81,
    momentum: 'Up',
    lastUpdated: '2026-04-14',
    metrics: { impressions: 28000, clicks: 1900, ctr: 6.8, signups: 185, cpa: 6.10 }
  }
];

export const creatives: Creative[] = [
  {
    id: 'c1',
    title: 'POV: Multi-meter Magic',
    hook: 'Stop guessing and start measuring. Here is how I find a short in 60 seconds.',
    angle: 'Technical Mastery',
    persona: 'Hungry Apprentice',
    type: 'Video',
    performance: 'High',
    tags: ['Technical', 'POV', 'TikTok']
  },
  {
    id: 'c2',
    title: 'The $100k Tech Roadmap',
    hook: 'The difference between a $50k tech and a $100k tech isn’t the tools. It’s the decision-making.',
    angle: 'Career Progression',
    persona: 'Stuck Senior Tech',
    type: 'Video',
    performance: 'High',
    tags: ['Career', 'Mindset', 'YouTube']
  },
  {
    id: 'c3',
    title: 'Truck Stock Checklist',
    hook: 'If you’re running to the supply house twice a day, you’re losing $200 in billable time.',
    angle: 'Efficiency Hacks',
    persona: 'Owner-Operator',
    type: 'Post',
    performance: 'Medium',
    tags: ['Business', 'Efficiency', 'Facebook']
  }
];

export const experiments: Experiment[] = [
  {
    id: 'e1',
    hypothesis: 'Technical POV hooks outperform "Lifestyle" hooks for Apprentices.',
    channel: 'TikTok',
    variants: [
      { name: 'POV: Diagnostic', metrics: { ctr: 7.2, conversion: 8.5 }, isWinner: true },
      { name: 'Lifestyle: Freedom', metrics: { ctr: 2.1, conversion: 1.2 } }
    ],
    confidence: 98,
    status: 'Completed',
    suggestedAction: 'Shift 100% of Apprentice-targeted budget to POV Technical content.'
  },
  {
    id: 'e2',
    hypothesis: 'Reddit "Challenge" threads drive higher intent than static ads.',
    channel: 'Reddit',
    variants: [
      { name: 'Challenge Thread', metrics: { ctr: 4.5, conversion: 12.0 } },
      { name: 'Static Display', metrics: { ctr: 0.8, conversion: 2.5 } }
    ],
    confidence: 65,
    status: 'Running',
    suggestedAction: 'Continue running for 3 more days to confirm conversion signal.'
  }
];

export const personas: Persona[] = [
  {
    id: 'p1',
    name: 'Hungry Apprentice',
    description: '1-3 years in the field. Desperate to stop being the "helper" and start running their own truck.',
    painPoints: ['Low pay', 'Lack of mentorship', 'Fear of misdiagnosing'],
    aspirations: ['Running a solo truck', 'Mastering electrical', 'Hitting $60k+']
  },
  {
    id: 'p2',
    name: 'Stuck Senior Tech',
    description: '8-12 years experience. Top of the pay scale but burnt out. Wants to transition to management or ownership.',
    painPoints: ['Physical toll', 'No more room to grow', 'Long hours'],
    aspirations: ['Service Manager role', 'Starting a business', 'Work-life balance']
  },
  {
    id: 'p3',
    name: 'Owner-Operator',
    description: 'Recently started their own shop. 1-3 trucks. Struggling with the transition from tech to CEO.',
    painPoints: ['Hiring', 'Marketing chaos', 'Cash flow'],
    aspirations: ['Scaling to 5 trucks', 'Exiting the field', 'Financial freedom']
  }
];

export const recommendations: Recommendation[] = [
  {
    id: 'r1',
    title: 'Boost TikTok POV',
    description: 'Technical POV content is hitting 7%+ CTR. Increase daily spend by $50.',
    impact: 'High',
    type: 'Boost',
    campaignId: '1'
  },
  {
    id: 'r2',
    title: 'Pause Lifestyle Ads',
    description: 'Aspirational lifestyle hooks are failing to convert. Signal loss detected.',
    impact: 'Medium',
    type: 'Pause',
    campaignId: '4'
  }
];

export const dailyMetrics: DailyMetric[] = Array.from({ length: 14 }).map((_, i) => ({
  date: new Date(Date.now() - (13 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  impressions: 10000 + Math.random() * 5000,
  clicks: 500 + Math.random() * 200,
  signups: 20 + Math.random() * 15,
  revenue: 2000 + Math.random() * 1000
}));
