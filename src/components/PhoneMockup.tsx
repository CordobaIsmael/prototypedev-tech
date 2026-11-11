import { useState } from 'react';
import { CheckCheck, FileText, Truck } from 'lucide-react';

interface PhoneMockupProps {
  /**
   * Opcional: cuando tengas la captura real sanitizada en WebP (ej. "/images/bot-whatsapp.webp"),
   * pasala por esta prop para reemplazar el mockup interactivo por la imagen real.
   */
  screenshotSrc?: string;
  screenshotAlt?: string;
}

type ScenarioKey = 'guia' | 'remito';

export function PhoneMockup({ screenshotSrc, screenshotAlt }: PhoneMockupProps) {
  const [scenario, setScenario] = useState<ScenarioKey>('guia');

  if (screenshotSrc) {
    return (
      <div className="mx-auto w-full max-w-[330px]">
        <div className="rounded-[2.5rem] border-[6px] border-slate-700 bg-slate-900 p-2 shadow-2xl shadow-black/50">
          <div className="mx-auto mb-2 h-5 w-24 rounded-full bg-slate-800" />
          <div className="overflow-hidden rounded-[1.8rem] bg-slate-950">
            <img
              src={screenshotSrc}
              alt={screenshotAlt ?? 'Captura sanitizada de bot de WhatsApp para transporte'}
              loading="lazy"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-[336px]">
      {/* Interactive scenario switcher */}
      <div className="mb-3 flex justify-center gap-2">
        <button
          type="button"
          onClick={() => setScenario('guia')}
          className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
            scenario === 'guia'
              ? 'bg-emerald-500 text-slate-950'
              : 'border border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-500'
          }`}
        >
          Consulta de guía
        </button>
        <button
          type="button"
          onClick={() => setScenario('remito')}
          className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
            scenario === 'remito'
              ? 'bg-emerald-500 text-slate-950'
              : 'border border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-500'
          }`}
        >
          Pedido de remito
        </button>
      </div>

      {/* Smartphone Frame */}
      <div className="rounded-[2.4rem] border-[6px] border-slate-700/90 bg-slate-900 p-2.5 shadow-2xl shadow-black/60">
        {/* Speaker notch */}
        <div className="mx-auto mb-2 flex h-4 w-24 items-center justify-center rounded-full bg-slate-950">
          <span className="h-1.5 w-10 rounded-full bg-slate-800" />
        </div>

        {/* Screen */}
        <div className="overflow-hidden rounded-[1.75rem] border border-slate-800 bg-[#0B141A]">
          {/* WhatsApp Header */}
          <div className="flex items-center gap-2.5 bg-[#1F2C34] px-3.5 py-2.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
              <Truck className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-semibold text-white">
                Transporte Interprovincial
              </p>
              <p className="text-[10px] text-emerald-400">Bot automático · En línea</p>
            </div>
          </div>

          {/* Chat body */}
          <div className="space-y-2.5 p-3 text-[11px] leading-relaxed">
            {scenario === 'guia' ? (
              <>
                <div className="ml-auto max-w-[82%] rounded-xl rounded-tr-none bg-[#005C4B] px-3 py-2 text-slate-100 shadow-sm">
                  <p>Hola, necesito saber por dónde va la guía 042-00184920</p>
                  <p className="mt-1 flex items-center justify-end gap-1 text-[9px] text-emerald-200/80">
                    10:14 <CheckCheck className="h-3 w-3 text-cyan-300" />
                  </p>
                </div>

                <div className="mr-auto max-w-[90%] rounded-xl rounded-tl-none bg-[#1F2C34] px-3 py-2 text-slate-100 shadow-sm">
                  <p className="font-semibold text-emerald-300">
                    Guía N° 042-00184920 encontrada
                  </p>
                  <div className="mt-1.5 space-y-1 border-l-2 border-emerald-400/60 pl-2 text-[10.5px] text-slate-200">
                    <p>
                      <span className="text-slate-400">Estado:</span> En tránsito a Suc. Córdoba
                    </p>
                    <p>
                      <span className="text-slate-400">Bultos:</span> 4 pallets
                    </p>
                    <p>
                      <span className="text-slate-400">Remito:</span> REM-0042-00018492
                    </p>
                    <p>
                      <span className="text-slate-400">Llegada est.:</span> Hoy 16:30 hs
                    </p>
                  </div>
                  <p className="mt-2 text-[10.5px] text-slate-300">
                    Respondé <strong>1</strong> para descargar el remito o <strong>2</strong> para
                    horarios de sucursal.
                  </p>
                  <p className="mt-1 text-right text-[9px] text-slate-400">10:14</p>
                </div>

                <div className="ml-auto max-w-[40%] rounded-xl rounded-tr-none bg-[#005C4B] px-3 py-1.5 text-slate-100">
                  <p>2</p>
                  <p className="mt-0.5 flex items-center justify-end gap-1 text-[9px] text-emerald-200/80">
                    10:15 <CheckCheck className="h-3 w-3 text-cyan-300" />
                  </p>
                </div>

                <div className="mr-auto max-w-[88%] rounded-xl rounded-tl-none bg-[#1F2C34] px-3 py-2 text-slate-100">
                  <p>
                    <strong>Sucursal Córdoba:</strong> Av. Circunvalación Km 12 (datos ficticios).
                    Lun a Vie de 8:00 a 18:00 hs.
                  </p>
                  <p className="mt-1 text-right text-[9px] text-slate-400">10:15</p>
                </div>
              </>
            ) : (
              <>
                <div className="ml-auto max-w-[82%] rounded-xl rounded-tr-none bg-[#005C4B] px-3 py-2 text-slate-100 shadow-sm">
                  <p>Buen día, me pasan la copia del remito conformado 184920?</p>
                  <p className="mt-1 flex items-center justify-end gap-1 text-[9px] text-emerald-200/80">
                    11:02 <CheckCheck className="h-3 w-3 text-cyan-300" />
                  </p>
                </div>

                <div className="mr-auto max-w-[90%] rounded-xl rounded-tl-none bg-[#1F2C34] px-3 py-2 text-slate-100 shadow-sm">
                  <p className="text-slate-200">
                    Buscando comprobante para CUIT terminado en <strong>01-9</strong>...
                  </p>
                  <div className="mt-2 flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/90 p-2">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-rose-500/20 text-rose-300">
                      <FileText className="h-4 w-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-mono text-[10px] font-semibold text-white">
                        REM-0042-00018492.pdf
                      </p>
                      <p className="text-[9.5px] text-slate-400">Conformado · 184 KB</p>
                    </div>
                  </div>
                  <p className="mt-2 text-[10.5px] text-slate-300">
                    Si necesitás hablar con administración, respondé <strong>0</strong>.
                  </p>
                  <p className="mt-1 text-right text-[9px] text-slate-400">11:02</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <p className="mt-3 text-center font-mono text-[10.5px] text-slate-400">
        Vista ilustrativa interactiva · Datos ficticios sanitizados
      </p>
    </div>
  );
}
