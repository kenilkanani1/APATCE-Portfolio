const files = [
  'CYVERA Logo Pack PDF',
  'CYVERA Brand Book PDF',
  'CYVERA Asset Bundle ZIP'
];

export default function DownloadsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-semibold">Downloads</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {files.map((file) => (
          <article key={file} className="gradient-border rounded-2xl p-6 transition hover:shadow-[0_0_30px_rgba(90,243,230,0.35)]">
            <h2 className="text-lg font-semibold text-sky">{file}</h2>
            <p className="mt-2 text-sm text-slate-600">Ready for secure download from CYVERA's verified library.</p>
            <button className="mt-5 rounded-lg bg-sky px-4 py-2 text-sm font-semibold text-white">Download</button>
          </article>
        ))}
      </div>
    </main>
  );
}
