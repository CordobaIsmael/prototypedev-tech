import { useMemo, useState } from 'react';
import { FileCheck2, Search, Send } from 'lucide-react';
import { DEMO_DOCUMENTS, type DocumentRow } from '../data/content';

interface DesktopMockupProps {
  /**
   * Opcional: cuando tengas la captura real sanitizada en WebP (ej. "/images/gestor-archivo.webp"),
   * pasala por esta prop para mostrar la captura en el marco de escritorio.
   */
  screenshotSrc?: string;
  screenshotAlt?: string;
}

const STATUS_FILTERS: Array<'Todos' | DocumentRow['estado']> = [
  'Todos',
  'Conformado',
  'Facturado',
  'En reparto',
];

export function DesktopMockup({ screenshotSrc, screenshotAlt }: DesktopMockupProps) {
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'Todos' | DocumentRow['estado']>('Todos');

  const filteredDocs = useMemo(() => {
    const q = query.trim().toLowerCase();
    return DEMO_DOCUMENTS.filter((doc) => {
      const matchesStatus = statusFilter === 'Todos' || doc.estado === statusFilter;
      const matchesQuery =
        !q ||
        doc.remito.toLowerCase().includes(q) ||
        doc.factura.toLowerCase().includes(q) ||
        doc.cliente.toLowerCase().includes(q) ||
        doc.sucursal.toLowerCase().includes(q);
      return matchesStatus && matchesQuery;
    });
  }, [query, statusFilter]);

  return (
    <div className="w-full min-w-0 max-w-full">
      {/* Desktop Browser / App Window Frame */}
      <div className="overflow-hidden rounded-2xl border border-slate-700/90 bg-slate-950 shadow-2xl shadow-black/60">
        {/* Top Window Chrome */}
        <div className="flex items-center justify-between gap-2 border-b border-slate-800 bg-slate-900 px-3.5 py-2.5 sm:px-4">
          <div className="flex shrink-0 items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="truncate rounded-md border border-slate-800 bg-slate-950 px-2.5 py-1 font-mono text-[11px] text-slate-400 sm:px-3">
            gestor_archivo · Comprobantes vinculados
          </div>
          <span className="hidden shrink-0 font-mono text-[10px] text-cyan-400 sm:inline">
            Sincronizado
          </span>
        </div>

        {screenshotSrc ? (
          <img
            src={screenshotSrc}
            alt={screenshotAlt ?? 'Captura sanitizada de gestor_archivo para remitos y facturas'}
            loading="lazy"
            className="h-auto w-full object-cover"
          />
        ) : (
          <div className="p-4 sm:p-5">
            {/* Search and Filter Controls */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar por remito, factura, cliente o sucursal..."
                  aria-label="Buscar documentos de ejemplo"
                  className="w-full rounded-lg border border-slate-800 bg-slate-900 py-2 pr-3 pl-8 text-xs text-slate-100 placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-wrap gap-1.5">
                {STATUS_FILTERS.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setStatusFilter(filter)}
                    className={`rounded-lg px-2.5 py-1.5 text-[11px] font-medium transition-colors ${
                      statusFilter === filter
                        ? 'bg-cyan-500 text-slate-950'
                        : 'border border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Table */}
            <div className="mt-4 overflow-x-auto rounded-xl border border-slate-800/90 bg-slate-900/50">
              <table className="w-full min-w-[520px] text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-[10.5px] uppercase tracking-wider text-slate-400">
                    <th className="px-3 py-2.5 font-medium">Remito / Factura</th>
                    <th className="px-3 py-2.5 font-medium">Cliente (ficticio)</th>
                    <th className="px-3 py-2.5 font-medium">Sucursal</th>
                    <th className="px-3 py-2.5 font-medium">Estado</th>
                    <th className="px-3 py-2.5 text-right font-medium">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/70">
                  {filteredDocs.length > 0 ? (
                    filteredDocs.map((doc) => (
                      <tr key={doc.id} className="transition-colors hover:bg-slate-800/40">
                        <td className="px-3 py-2.5">
                          <p className="font-mono text-[11px] font-medium text-white">
                            {doc.remito}
                          </p>
                          <p className="font-mono text-[10px] text-slate-400">{doc.factura}</p>
                        </td>
                        <td className="px-3 py-2.5">
                          <p className="font-medium text-slate-200">{doc.cliente}</p>
                          <p className="font-mono text-[10px] text-slate-500">
                            CUIT {doc.cuit}
                          </p>
                        </td>
                        <td className="px-3 py-2.5 text-slate-300">{doc.sucursal}</td>
                        <td className="px-3 py-2.5">
                          <span
                            className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                              doc.estado === 'Conformado'
                                ? 'bg-emerald-500/15 text-emerald-300'
                                : doc.estado === 'Facturado'
                                  ? 'bg-cyan-500/15 text-cyan-300'
                                  : 'bg-amber-500/15 text-amber-300'
                            }`}
                          >
                            {doc.estado}
                          </span>
                        </td>
                        <td className="px-3 py-2.5 text-right">
                          <span className="inline-flex items-center gap-1 rounded-md border border-slate-700 bg-slate-900 px-2 py-1 text-[10px] text-slate-300">
                            <FileCheck2 className="h-3 w-3 text-cyan-400" />
                            PDF
                            <Send className="ml-1 h-2.5 w-2.5 text-emerald-400" />
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="px-3 py-6 text-center text-slate-400">
                        No hay comprobantes con ese filtro. Probá limpiando la búsqueda.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      <p className="mt-3 text-center font-mono text-[10.5px] text-slate-400">
        Maqueta funcional interactiva · Podés filtrar y buscar con datos ficticios sanitizados
      </p>
    </div>
  );
}
