import { ShieldCheck } from 'lucide-react';
import { DesktopMockup } from './DesktopMockup';
import { PhoneMockup } from './PhoneMockup';

interface CasePoint {
  label: string;
  text: string;
  accent: string;
}

function CaseBreakdown({ points }: { points: CasePoint[] }) {
  return (
    <dl className="mt-6 space-y-4">
      {points.map((point) => (
        <div
          key={point.label}
          className="rounded-xl border border-slate-800 bg-slate-900/70 p-4"
        >
          <dt className={`font-mono text-xs font-semibold uppercase tracking-wider ${point.accent}`}>
            {point.label}
          </dt>
          <dd className="mt-1.5 text-sm leading-relaxed text-slate-300">{point.text}</dd>
        </div>
      ))}
    </dl>
  );
}

const CASE_1_POINTS: CasePoint[] = [
  {
    label: 'Problema',
    text: 'El mostrador y el WhatsApp de atención se saturaban todos los días con las mismas preguntas: ubicación de guías, horarios de sucursales y pedidos repetidos de copias de remitos.',
    accent: 'text-amber-300',
  },
  {
    label: 'Solución integrada al sistema existente',
    text: 'Conectamos un bot de WhatsApp en lectura directa contra la base de guías y estados que el transporte ya utilizaba, sin modificar ni detener su sistema de gestión.',
    accent: 'text-cyan-300',
  },
  {
    label: 'Resultado operativo',
    text: 'Atención automática las 24 hs para consultas frecuentes, menos interrupciones en tráfico y derivación ordenada a un operador solo cuando hace falta intervención humana.',
    accent: 'text-emerald-300',
  },
];

const CASE_2_POINTS: CasePoint[] = [
  {
    label: 'Problema',
    text: 'Facturas y remitos conformados quedaban dispersos entre fotos de choferes, carpetas locales y correos, demorando cada rendición de viaje o reclamo de clientes.',
    accent: 'text-amber-300',
  },
  {
    label: 'Solución integrada al sistema existente',
    text: 'Implementamos gestor_archivo vinculado a la numeración de guías y comprobantes existentes para ordenar, indexar y asociar cada documento sin carga manual doble.',
    accent: 'text-cyan-300',
  },
  {
    label: 'Resultado operativo',
    text: 'Facturas y remitos ordenados en un único panel, con búsqueda en segundos por cliente, fecha, sucursal o número y reenvío inmediato en PDF.',
    accent: 'text-emerald-300',
  },
];

export function CaseStudies() {
  return (
    <section id="casos" className="relative overflow-hidden bg-[#070B19] py-18 text-white sm:py-24">
      <div className="bg-tech-grid pointer-events-none absolute inset-0 opacity-50" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Casos reales de aplicación
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Cómo se ve funcionando en el día a día
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-300">
              Cada solución se monta sobre la operatoria existente. Por confidencialidad operativa,
              los ejemplos muestran datos ficticios sanitizados.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 self-start rounded-full border border-slate-700 bg-slate-900/90 px-3.5 py-1.5 text-xs text-slate-300">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            Datos sensibles protegidos y anonimizados
          </div>
        </div>

        {/* Caso 1: Bot de WhatsApp */}
        <div className="mt-12 rounded-3xl border border-slate-800 bg-[#0D1428]/90 p-5 sm:p-10">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-5">
              <PhoneMockup />
            </div>

            <div className="min-w-0 lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] font-medium text-emerald-300">
                CASO 01 · Empresa de transporte interprovincial
              </div>
              <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                Bot de WhatsApp para consultas de clientes y seguimiento de guías
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Canal automático conectado a los estados de envío reales de la empresa.
              </p>

              <CaseBreakdown points={CASE_1_POINTS} />
            </div>
          </div>
        </div>

        {/* Caso 2: Gestor documental */}
        <div className="mt-10 rounded-3xl border border-slate-800 bg-[#0D1428]/90 p-5 sm:p-10">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="order-2 min-w-0 lg:order-1 lg:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-mono text-[11px] font-medium text-cyan-300">
                CASO 02 · Operador logístico y cargas generales
              </div>
              <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                Gestor documental para facturas y remitos (<span className="font-mono text-cyan-300">gestor_archivo</span>)
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Ordenamiento centralizado y búsqueda instantánea para administración y sucursales.
              </p>

              <CaseBreakdown points={CASE_2_POINTS} />
            </div>

            <div className="order-1 min-w-0 lg:order-2 lg:col-span-7">
              <DesktopMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
