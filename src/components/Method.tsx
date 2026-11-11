import { ArrowRight } from 'lucide-react';
import { METHOD_STEPS } from '../data/content';

export function Method() {
  return (
    <section id="metodo" className="bg-slate-50 py-18 sm:py-22">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-sky-700">
            Cómo trabajamos
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Método Prototype: avanzar rápido sin frenar la empresa
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Un proceso corto y directo para que veas resultados concretos sobre tu operatoria real
            sin proyectos eternos ni interrupciones en el despacho.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {METHOD_STEPS.map((step, index) => (
            <div
              key={step.number}
              className="relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 font-mono text-sm font-bold text-cyan-300">
                    {step.number}
                  </span>
                  {index < METHOD_STEPS.length - 1 && (
                    <ArrowRight
                      className="hidden h-4 w-4 text-slate-300 lg:block"
                      aria-hidden="true"
                    />
                  )}
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </div>

              <p className="mt-5 border-t border-slate-100 pt-3 font-mono text-[11px] font-semibold text-sky-700">
                {step.highlight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
