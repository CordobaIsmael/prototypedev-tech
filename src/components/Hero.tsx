import { ArrowRight, CheckCircle2, FileText, Layers, MessageSquare } from 'lucide-react';
import { buildWhatsAppUrl } from '../config/site';
import { WhatsAppIcon } from './WhatsAppIcon';

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#070B19] text-white"
    >
      {/* Subtle tech grid + atmospheric glow */}
      <div className="bg-tech-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-[44rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-96 rounded-full bg-violet-600/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-22 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Copy */}
          <div className="min-w-0 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-medium tracking-wide text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Software e integraciones para Transporte y Logística
            </div>

            <h1 className="mt-6 text-3xl leading-[1.12] font-bold tracking-tight text-white sm:text-5xl">
              Potenciá tu transporte actual{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                sin frenar la operación.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              En transporte nadie puede parar los camiones ni cambiar todo el sistema de un día
              para el otro. Desarrollamos bots de WhatsApp, ordenamiento de remitos y facturas, e
              integraciones sobre el software que tu empresa ya usa.
            </p>

            {/* Concrete benefits */}
            <ul className="mt-6 grid gap-2.5 text-sm text-slate-200 sm:grid-cols-2">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                <span>Menos consultas repetitivas en mostrador y WhatsApp</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                <span>Facturas y remitos ordenados sin carga manual</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                <span>Conectado a tus guías, sucursales y ERP actual</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                <span>Implementación gradual sin cortar la facturación</span>
              </li>
            </ul>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-cyan-400 px-5 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all hover:bg-cyan-300"
              >
                Hablemos de tu sistema actual
                <ArrowRight className="h-4 w-4 shrink-0" />
              </a>

              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-5 py-3.5 text-sm font-semibold text-emerald-300 transition-colors hover:bg-emerald-500/20"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0 text-emerald-400" />
                Consultar por WhatsApp
              </a>

              <a
                href="#casos"
                className="inline-flex items-center justify-center whitespace-nowrap px-2 py-3 text-sm font-medium text-slate-300 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                Ver casos reales
              </a>
            </div>
          </div>

          {/* Right Operational Architecture Card */}
          <div className="min-w-0 lg:col-span-5">
            <div className="rounded-2xl border border-slate-800 bg-[#0D1428]/90 p-5 shadow-2xl shadow-black/40 backdrop-blur-sm sm:p-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-cyan-400">
                    ARQUITECTURA SIN CORTES
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-white">
                    Cómo sumamos mejoras a tu empresa
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[11px] text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Operativo
                </span>
              </div>

              {/* Layer 1: Existing system */}
              <div className="mt-5 rounded-xl border border-slate-700/80 bg-slate-900/90 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-slate-300">
                    <Layers className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-400">Base que ya tenés hoy</p>
                    <p className="text-sm font-semibold text-white">
                      Tu sistema de guías, facturación o planillas
                    </p>
                  </div>
                </div>
                <p className="mt-2.5 font-mono text-[11px] text-slate-400">
                  No se reemplaza ni se frena · Lectura segura de datos
                </p>
              </div>

              {/* Connector */}
              <div className="my-2.5 flex justify-center">
                <div className="flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-mono text-[11px] text-cyan-300">
                  + Capa Prototype conectada
                </div>
              </div>

              {/* Layer 2: Two core extensions */}
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/5 p-3.5">
                  <div className="flex items-center gap-2 text-emerald-300">
                    <MessageSquare className="h-4 w-4 shrink-0" />
                    <span className="text-xs font-semibold">Bot de WhatsApp</span>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                    Responde estado de envíos, sucursales y entrega remitos 24/7.
                  </p>
                </div>

                <div className="rounded-xl border border-violet-500/25 bg-violet-500/5 p-3.5">
                  <div className="flex items-center gap-2 text-violet-300">
                    <FileText className="h-4 w-4 shrink-0" />
                    <span className="font-mono text-xs font-semibold">gestor_archivo</span>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                    Ordena facturas y remitos por guía y cliente para buscarlos en segundos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
