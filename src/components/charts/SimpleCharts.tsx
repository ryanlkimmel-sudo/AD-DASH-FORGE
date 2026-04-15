import React from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell
} from 'recharts';
import { dailyMetrics, campaigns } from '../../data/mockData';

export const MomentumChart = () => {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={dailyMetrics}>
          <CartesianGrid strokeDasharray="3 3" stroke="#2E2E2E" vertical={false} />
          <XAxis 
            dataKey="date" 
            stroke="#4B5563" 
            fontSize={10} 
            tickFormatter={(val) => val.split('-')[2]}
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            stroke="#4B5563" 
            fontSize={10} 
            axisLine={false} 
            tickLine={false}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1E1E1E', border: '1px solid #2E2E2E', borderRadius: '4px', fontSize: '12px' }}
            itemStyle={{ color: '#00A3FF' }}
          />
          <Line 
            type="monotone" 
            dataKey="signups" 
            stroke="#00A3FF" 
            strokeWidth={2} 
            dot={{ r: 3, fill: '#00A3FF', strokeWidth: 0 }}
            activeDot={{ r: 5, strokeWidth: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export const ChannelPerformanceChart = () => {
  const data = [
    { name: 'TikTok', value: 4.0 },
    { name: 'YouTube', value: 3.0 },
    { name: 'Reddit', value: 6.0 },
    { name: 'FB', value: 1.0 },
    { name: 'Insta', value: 2.6 },
    { name: 'Email', value: 24.0 },
  ];

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="#2E2E2E" horizontal={false} />
          <XAxis type="number" hide />
          <YAxis 
            dataKey="name" 
            type="category" 
            stroke="#4B5563" 
            fontSize={10} 
            axisLine={false} 
            tickLine={false}
            width={50}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1E1E1E', border: '1px solid #2E2E2E', borderRadius: '4px', fontSize: '12px' }}
            cursor={{ fill: '#2E2E2E' }}
          />
          <Bar dataKey="value" radius={[0, 2, 2, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.value > 5 ? '#10B981' : '#00A3FF'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
