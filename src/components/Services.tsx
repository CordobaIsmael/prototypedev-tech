import { ArrowUpRight, Bot, Check, FolderArchive, PlugZap } from 'lucide-react';
import { buildWhatsAppUrl } from '../config/site';
import { SERVICES } from '../data/content';

const SERVICE_ICONS = [Bot, FolderArchive, PlugZap];

export function Services() {
  return (
    <section id="servicios" className="border-y border-slate-200/80 bg-white py-18 sm:py-22">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-sky-700">
              Servicios enfocados en operación
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Soluciones concretas sobre tu sistema actual
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Implementamos módulos puntuales que atacan los reclamos frecuentes, el desorden de
              comprobantes y el trabajo manual repetitivo.
            </p>
          </div>

          <a
            href="#casos"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700 transition-colors hover:text-sky-900"
          >
            Ver ejemplos funcionando
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {SERVICES.map((service, idx) => {
            const Icon = SERVICE_ICONS[idx] ?? PlugZap;
            return (
              <article
                key={service.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/70 p-6 transition-all hover:border-sky-300 hover:bg-white hover:shadow-lg hover:shadow-slate-200/60"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[11px] font-semibold tracking-wider text-sky-700">
                      {service.code}
                    </span>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-1 text-xs font-semibold text-emerald-700">
                    {service.subtitle}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-slate-200/80 pt-4">
                  <a
                    href={buildWhatsAppUrl(service.whatsappPrefill)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 transition-colors hover:text-sky-700"
                  >
                    Consultar por este servicio
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
