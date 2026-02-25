import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'CYVERA | Cybersecurity Intelligence',
  description: 'Engineering Trust in a World of Risk.'
};

const navItems = [
  ['Home', '/'],
  ['Architecture', '/architecture'],
  ['Demo', '/demo'],
  ['Downloads', '/downloads'],
  ['Contact', '/contact']
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-50 border-b border-sky/20 bg-silver/90 backdrop-blur cyber-grid">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-xl font-semibold tracking-[0.25em] text-sky">▲ CYVERA</Link>
            <nav className="flex gap-5 text-sm font-medium">
              {navItems.map(([label, href]) => (
                <Link key={href} href={href} className="transition hover:text-sky">
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
