import { NAV_LINKS } from '../data/content';
import { buildWhatsAppUrl, SITE_CONFIG } from '../config/site';
import { PrototypeLogo } from './PrototypeLogo';
import { WhatsAppIcon } from './WhatsAppIcon';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-[#070B19] py-12 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <a href="#inicio" aria-label="Prototype inicio">
              <PrototypeLogo variant="dark" size="sm" />
            </a>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400">
              Software, bots de WhatsApp y ordenamiento documental para potenciar empresas de
              transporte y logística sin frenar la operación diaria.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <nav className="flex flex-wrap gap-5 text-sm" aria-label="Enlaces del pie">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-300 transition-colors hover:text-cyan-300"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                className="text-slate-300 transition-colors hover:text-cyan-300"
              >
                Contacto
              </a>
            </nav>

            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-300 transition-colors hover:bg-emerald-500/20"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              {SITE_CONFIG.whatsappDisplay}
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-3 border-t border-slate-800/80 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>
            © {year} {SITE_CONFIG.brandName} · {SITE_CONFIG.domain}
          </p>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="font-mono text-slate-400 transition-colors hover:text-cyan-300"
          >
            {SITE_CONFIG.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
