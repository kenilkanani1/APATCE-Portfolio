'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-semibold">Contact CYVERA</h1>
      <form onSubmit={handleSubmit} className="mt-8 space-y-4 rounded-3xl border border-sky/20 bg-white p-8">
        <input required className="w-full rounded-xl border border-slate-200 p-3" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input required type="email" className="w-full rounded-xl border border-slate-200 p-3" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <textarea required className="h-32 w-full rounded-xl border border-slate-200 p-3" placeholder="Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
        <button className="gradient-border rounded-xl px-6 py-3 font-semibold">Send Message</button>
      </form>

      {sent && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-5 text-emerald-600">
          Message sent successfully.
        </motion.p>
      )}

      <div className="mt-10 text-slate-700">
        <p>Email: ikenilkanani@gmail.com</p>
        <p>Phone: +91 9099674803</p>
      </div>
    </main>
  );
}
