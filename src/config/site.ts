export const SITE_CONFIG = {
  brandName: 'Prototype',
  domain: 'prototypedev.tech',
  siteUrl: 'https://prototypedev.tech',
  email: 'contacto@prototypedev.tech',
  whatsappDisplay: '+54 291 476-7623',
  /**
   * Formato internacional para enlace wa.me (en Argentina móviles llevan 549 + código de área + número).
   * Podés sobreescribirlo con VITE_WHATSAPP_NUMBER en Vercel si necesitás ajustarlo.
   */
  whatsappNumber:
    import.meta.env.VITE_WHATSAPP_NUMBER?.replace(/\D/g, '') || '5492914767623',
  defaultWhatsAppMessage:
    'Hola, vi prototypedev.tech y quiero consultar cómo potenciar el sistema actual de nuestro transporte.',
  web3FormsAccessKey:
    import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
    '4fe9ea18-32f3-42a1-af8c-18bb39773f3b',
  web3FormsEndpoint: 'https://api.web3forms.com/submit',
} as const;

export function buildWhatsAppUrl(customMessage?: string): string {
  const message = encodeURIComponent(
    customMessage ?? SITE_CONFIG.defaultWhatsAppMessage
  );
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${message}`;
}
