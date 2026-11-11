import { AlertCircle, Clock, FileWarning, MessageSquareWarning } from 'lucide-react';
import { PROBLEMS } from '../data/content';

const PROBLEM_ICONS = [MessageSquareWarning, FileWarning, Clock];

export function Problems() {
  return (
    <section id="problemas" className="bg-slate-50 py-18 sm:py-22">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-sky-700">
            Problemas cotidianos del sector
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Lo que hoy frena a tu equipo todos los días
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            En un transporte la mercadería no espera. Estos cuellos de botella consumen horas de
            mostrador, tráfico y administración cuando las herramientas no acompañan el ritmo real.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PROBLEMS.map((item, idx) => {
            const Icon = PROBLEM_ICONS[idx] ?? AlertCircle;
            return (
              <article
                key={item.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700 ring-1 ring-amber-200/80">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 font-mono text-[11px] font-medium text-slate-600">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold leading-snug text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 border-t border-slate-100 pt-4">
                  <p className="text-xs font-medium text-slate-700">
                    <span className="font-semibold text-amber-700">Impacto: </span>
                    {item.impact}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
