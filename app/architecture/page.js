'use client';

import { motion } from 'framer-motion';

const cards = [
  { title: 'Threat', detail: 'Real-time telemetry quantifies hostile pressure across your digital perimeter.' },
  { title: 'Sensitivity', detail: 'Asset-criticality mapping grades business impact and data exposure depth.' },
  { title: 'Risk', detail: 'Adaptive model fuses both vectors into a continuously scored action index.' }
];

export default function ArchitecturePage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-16">
      <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-semibold text-slate-900">
        Tri-Angular CYVERA Risk Engine
      </motion.h1>
      <p className="mt-4 max-w-3xl text-slate-600">Threat → Sensitivity → Risk. CYVERA maps incoming threat intensity and business sensitivity into one deterministic risk command layer.</p>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        {cards.map((card, i) => (
          <motion.article key={card.title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="gradient-border rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-sky">▲ {card.title}</h2>
            <p className="mt-3 text-slate-700">{card.detail}</p>
          </motion.article>
        ))}
      </section>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-12 rounded-3xl border border-sky/20 bg-white p-8">
        <h3 className="text-xl font-semibold">Flow Diagram</h3>
        <div className="mt-8 flex flex-col items-center gap-5 md:flex-row md:justify-around">
          <span className="gradient-border rounded-xl px-6 py-4">Threat Signal</span>
          <span className="text-2xl text-sky">→</span>
          <span className="gradient-border rounded-xl px-6 py-4">Sensitivity Lens</span>
          <span className="text-2xl text-sky">→</span>
          <span className="gradient-border rounded-xl px-6 py-4">Risk Intelligence</span>
        </div>
      </motion.div>
    </main>
  );
}
