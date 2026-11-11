import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data/content';
import { buildWhatsAppUrl } from '../config/site';
import { PrototypeLogo } from './PrototypeLogo';
import { WhatsAppIcon } from './WhatsAppIcon';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#070B19]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        <a
          href="#inicio"
          aria-label="Prototype inicio"
          onClick={() => setMobileOpen(false)}
        >
          <PrototypeLogo variant="dark" size="sm" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-cyan-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#contacto"
            className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800/70 hover:text-white"
          >
            Contacto
          </a>
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm shadow-emerald-500/20 transition-all hover:bg-emerald-400"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp directo
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-lg border border-slate-700/80 p-2 text-slate-300 transition-colors hover:bg-slate-800 hover:text-white md:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu drawer */}
      {mobileOpen && (
        <div className="border-t border-slate-800 bg-[#070B19] px-4 pt-3 pb-5 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Navegación móvil">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-slate-200 hover:bg-slate-800/70"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2.5 text-base font-medium text-slate-200 hover:bg-slate-800/70"
            >
              Formulario de contacto
            </a>
          </nav>

          <div className="mt-4 pt-3 border-t border-slate-800">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Hablemos por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
