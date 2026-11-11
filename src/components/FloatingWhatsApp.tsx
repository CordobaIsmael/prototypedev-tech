import { buildWhatsAppUrl } from '../config/site';
import { WhatsAppIcon } from './WhatsAppIcon';

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultar por WhatsApp"
      className="fixed right-5 bottom-5 z-40 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-bold text-slate-950 shadow-xl shadow-emerald-950/30 transition-transform hover:scale-105 hover:bg-emerald-400 sm:px-5"
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
