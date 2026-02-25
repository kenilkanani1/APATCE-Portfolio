'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Loader from '@/components/Loader';
import ParticleBackground from '@/components/ParticleBackground';
import ThreeLogo from '@/components/ThreeLogo';

const links = [
  ['Architecture', '/architecture'],
  ['Demo', '/demo'],
  ['Downloads', '/downloads']
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-16">
      <Loader />
      <ParticleBackground />
      <section className="mx-auto grid max-w-6xl items-center gap-10 pt-20 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-sm tracking-[0.3em] text-sky">PREMIUM CYBER INTELLIGENCE</p>
          <h1 className="text-5xl font-semibold leading-tight text-slate-900 md:text-6xl">
            Engineering Trust in a World of Risk
          </h1>
          <p className="max-w-xl text-lg text-slate-600">
            Turning Threats into Insight — and Insight into Action.
          </p>
          <div className="flex flex-wrap gap-4">
            {links.map(([label, href]) => (
              <Link key={href} href={href} className="gradient-border rounded-2xl px-6 py-3 text-sm font-semibold uppercase tracking-widest text-slate-700 transition hover:scale-105">
                {label}
              </Link>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="flex flex-col items-center"
        >
          <ThreeLogo />
          <p className="mt-4 text-sm tracking-[0.35em] text-sky">▲ ANGULAR TRI-ANGULAR QUANTUM FLOW</p>
        </motion.div>
      </section>
    </main>
  );
}
