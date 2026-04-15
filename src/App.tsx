/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { TopBar } from './components/layout/TopBar';
import { Overview } from './screens/Overview';
import { Campaigns } from './screens/Campaigns';
import { CreativeLab } from './screens/CreativeLab';
import { Experiments } from './screens/Experiments';
import { OperatorBrief } from './screens/OperatorBrief';

export default function App() {
  const [activeScreen, setActiveScreen] = useState('overview');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'overview': return <Overview />;
      case 'campaigns': return <Campaigns />;
      case 'creative': return <CreativeLab />;
      case 'experiments': return <Experiments />;
      case 'brief': return <OperatorBrief />;
      default: return <Overview />;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#0A0A0A] text-gray-200 font-sans selection:bg-[#00A3FF]/30 selection:text-white">
      {/* Tactical Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <Sidebar activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
      
      <div className="flex-1 flex flex-col relative z-0">
        <TopBar activeScreen={activeScreen} />
        
        <main className="flex-1 p-8 max-w-[1600px] mx-auto w-full">
          {renderScreen()}
        </main>

        <footer className="p-6 border-t border-[#2E2E2E] flex items-center justify-between text-[10px] font-mono text-gray-600 uppercase tracking-widest">
          <div className="flex items-center gap-4">
            <span>HVAC Forge // Signal Room v1.0.4</span>
            <span className="w-1 h-1 rounded-full bg-gray-800" />
            <span>Encrypted Connection</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Lat: 34.0522° N</span>
            <span>Lon: 118.2437° W</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

