'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function DemoPage() {
  const [threat, setThreat] = useState(50);
  const [sensitivity, setSensitivity] = useState(50);
  const [score, setScore] = useState(null);

  const runSimulation = async () => {
    const res = await fetch('/api/risk', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ threat, sensitivity })
    });
    const data = await res.json();
    setScore(data);
  };

  const generateReport = async () => {
    const res = await fetch('/api/report', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ threat, sensitivity, score: score?.score ?? 0 })
    });
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cyvera-risk-report.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const riskColor = score?.state === 'high' ? 'text-rose-500' : score?.state === 'medium' ? 'text-amber-500' : 'text-emerald-500';

  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-semibold">Risk Simulator</h1>
      <div className="mt-8 space-y-6 rounded-3xl border border-sky/20 bg-white p-8">
        <label className="block">
          <span className="font-medium">Threat: {threat}</span>
          <input className="mt-2 w-full" type="range" min="0" max="100" value={threat} onChange={(e) => setThreat(Number(e.target.value))} />
        </label>
        <label className="block">
          <span className="font-medium">Sensitivity: {sensitivity}</span>
          <input className="mt-2 w-full" type="range" min="0" max="100" value={sensitivity} onChange={(e) => setSensitivity(Number(e.target.value))} />
        </label>
        <div className="flex gap-4">
          <button onClick={runSimulation} className="gradient-border rounded-xl px-5 py-3 font-semibold">Calculate Risk</button>
          <button onClick={generateReport} className="rounded-xl bg-sky px-5 py-3 font-semibold text-white">Generate Report</button>
        </div>

        {score && (
          <div className="space-y-4 rounded-2xl bg-slate-50 p-5">
            <p className="text-lg">Risk Score: <strong className={riskColor}>{score.score}</strong></p>
            <p className="capitalize">State: {score.state}</p>
            <div className="relative h-40">
              <motion.div
                className="absolute left-1/2 top-1/2 h-0 w-0 border-l-[22px] border-r-[22px] border-b-[38px] border-l-transparent border-r-transparent border-b-sky"
                animate={{ x: (score.score - 50) * 2, y: -Math.abs(score.score - 50) * 0.4 }}
                transition={{ type: 'spring', stiffness: 110 }}
              />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
