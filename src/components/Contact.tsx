import { useState, type FormEvent } from 'react';
import { CheckCircle2, Mail, Send, AlertTriangle } from 'lucide-react';
import { buildWhatsAppUrl, SITE_CONFIG } from '../config/site';
import { WhatsAppIcon } from './WhatsAppIcon';

type SubmitState = 'idle' | 'submitting' | 'success' | 'needs_key' | 'error';

export function Contact() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [need, setNeed] = useState('Bot de WhatsApp para consultas');
  const [message, setMessage] = useState('');
  const [botcheck, setBotcheck] = useState(false);
  const [status, setStatus] = useState<SubmitState>('idle');
  const [errorDetail, setErrorDetail] = useState('');

  const buildFormWhatsAppFallback = () => {
    const summary = [
      'Hola, te escribo desde prototypedev.tech.',
      name ? `Nombre/Empresa: ${name}` : '',
      need ? `Interés: ${need}` : '',
      contact ? `Contacto: ${contact}` : '',
      message ? `Detalle: ${message}` : '',
    ]
      .filter(Boolean)
      .join('\n');
    return buildWhatsAppUrl(summary);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (botcheck) return;

    if (!SITE_CONFIG.web3FormsAccessKey) {
      setStatus('needs_key');
      return;
    }

    setStatus('submitting');
    setErrorDetail('');

    try {
      const formData = new FormData();
      formData.append('access_key', SITE_CONFIG.web3FormsAccessKey);
      formData.append('subject', `[prototypedev.tech] Nueva consulta: ${need}`);
      formData.append('from_name', name || 'Consulta Web prototypedev.tech');
      if (contact.includes('@')) {
        formData.append('email', contact.trim());
      }
      formData.append('name', name);
      formData.append('contact', contact);
      formData.append('need', need);
      formData.append('message', message);

      const response = await fetch(SITE_CONFIG.web3FormsEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      const data = (await response.json()) as { success?: boolean; message?: string };

      if (response.ok && data.success) {
        setStatus('success');
        setName('');
        setContact('');
        setMessage('');
      } else {
        setStatus('error');
        setErrorDetail(data.message || 'No pudimos enviar la consulta en este momento.');
      }
    } catch {
      setStatus('error');
      setErrorDetail('Error de conexión al enviar el formulario. Probá por WhatsApp directo.');
    }
  };

  return (
    <section id="contacto" className="border-t border-slate-200 bg-white py-18 sm:py-22">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left direct contact column */}
          <div className="min-w-0 lg:col-span-5">
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-sky-700">
              Contacto directo
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Hablemos de tu sistema actual
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Contanos qué software usan hoy y qué tarea repetitiva querés resolver primero. Sin
              compromiso ni presentaciones comerciales largas.
            </p>

            {/* Primary WhatsApp Card */}
            <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5">
              <div className="flex items-start gap-3.5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-slate-950 shadow-sm">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-900">WhatsApp directo</p>
                  <p className="mt-0.5 font-mono text-sm font-semibold text-emerald-800">
                    {SITE_CONFIG.whatsappDisplay}
                  </p>
                  <p className="mt-1 text-xs text-slate-600">
                    La vía más rápida para coordinar una charla corta de 15 minutos.
                  </p>
                </div>
              </div>

              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Escribir por WhatsApp ahora
              </a>
            </div>

            {/* Email block */}
            <div className="mt-4 flex items-center gap-3.5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-cyan-300">
                <Mail className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs font-medium text-slate-500">Correo electrónico</p>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="font-mono text-sm font-semibold text-slate-900 hover:text-sky-700"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
            </div>
          </div>

          {/* Right Web3Forms short form */}
          <div className="min-w-0 lg:col-span-7">
            <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-slate-900">Dejanos tu consulta breve</h3>
              <p className="mt-1 text-sm text-slate-600">
                Completá estos 4 campos y te respondemos en el día.
              </p>

              {status === 'success' ? (
                <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
                  <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600" />
                  <h4 className="mt-3 text-lg font-bold text-slate-900">
                    Consulta enviada correctamente
                  </h4>
                  <p className="mt-1 text-sm text-slate-600">
                    Gracias por escribirnos. Te vamos a responder a la brevedad.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-sm font-semibold text-emerald-700 underline underline-offset-4 hover:text-emerald-900"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {/* Honeypot anti-spam Web3Forms */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    checked={botcheck}
                    onChange={(e) => setBotcheck(e.target.checked)}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold text-slate-700"
                      >
                        Nombre y empresa
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ej: Martín · Expreso del Sur"
                        className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-channel"
                        className="block text-xs font-semibold text-slate-700"
                      >
                        Tu WhatsApp o Email
                      </label>
                      <input
                        id="contact-channel"
                        type="text"
                        required
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="Ej: 291 400-0000 o correo@..."
                        className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-need"
                      className="block text-xs font-semibold text-slate-700"
                    >
                      ¿Qué querés resolver primero?
                    </label>
                    <select
                      id="contact-need"
                      value={need}
                      onChange={(e) => setNeed(e.target.value)}
                      className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 focus:outline-none"
                    >
                      <option value="Bot de WhatsApp para consultas">
                        Bot de WhatsApp para consultas de envíos y guías
                      </option>
                      <option value="Ordenar remitos y facturas (gestor_archivo)">
                        Ordenar remitos y facturas (gestor_archivo)
                      </option>
                      <option value="Integración sobre sistema actual">
                        Integración o desarrollo sobre nuestro sistema actual
                      </option>
                      <option value="Consulta general">Consulta general / Relevamiento</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-slate-700"
                    >
                      Contanos brevemente cómo trabajan hoy
                    </label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ej: Usamos un sistema de gestión propio y recibimos muchas consultas por WhatsApp sobre el estado de los envíos..."
                      className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 focus:outline-none"
                    />
                  </div>

                  {status === 'needs_key' && (
                    <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs leading-relaxed text-amber-900">
                      <p className="flex items-center gap-1.5 font-semibold">
                        <AlertTriangle className="h-4 w-4 shrink-0 text-amber-600" />
                        El envío por formulario web todavía no tiene la clave de Web3Forms activa.
                      </p>
                      <p className="mt-1 text-amber-800">
                        Podés enviar esta misma consulta directo a nuestro WhatsApp en un clic:
                      </p>
                      <a
                        href={buildFormWhatsAppFallback()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2.5 inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3.5 py-2 text-xs font-semibold text-white hover:bg-emerald-700"
                      >
                        <WhatsAppIcon className="h-3.5 w-3.5" />
                        Enviar esta consulta por WhatsApp
                      </a>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="rounded-xl border border-rose-200 bg-rose-50 p-3.5 text-xs text-rose-800">
                      {errorDetail}{' '}
                      <a
                        href={buildFormWhatsAppFallback()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold underline"
                      >
                        Enviar por WhatsApp
                      </a>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <Send className="h-4 w-4 text-cyan-300" />
                    {status === 'submitting' ? 'Enviando consulta...' : 'Enviar consulta'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
