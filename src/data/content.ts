export interface ProblemItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  impact: string;
}

export interface ServiceItem {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  whatsappPrefill: string;
}

export interface MethodStep {
  number: string;
  title: string;
  description: string;
  highlight: string;
}

export const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Casos reales', href: '#casos' },
  { label: 'Cómo trabajamos', href: '#metodo' },
] as const;

export const PROBLEMS: ProblemItem[] = [
  {
    id: 'whatsapp-saturado',
    tag: 'Atención y Tráfico',
    title: 'WhatsApp y mostrador colapsados con las mismas preguntas',
    description:
      'Clientes y dadores de carga escriben todo el día para preguntar por dónde va una guía, si un bulto ya llegó a sucursal o para pedir la copia de un remito.',
    impact: 'Horas del equipo de tráfico perdidas respondiendo datos que ya existen.',
  },
  {
    id: 'comprobantes-dispersos',
    tag: 'Administración y Archivo',
    title: 'Remitos y facturas digitalizadas sin orden ni trazabilidad',
    description:
      'Comprobantes conformados que quedan repartidos entre fotos de WhatsApp, carpetas compartidas o correos sueltos y obligan a buscar uno por uno ante cada reclamo.',
    impact: 'Demoras para rendir viajes, facturar a término o responder auditorías.',
  },
  {
    id: 'doble-carga',
    tag: 'Operación Diaria',
    title: 'Tareas manuales repetitivas entre planillas y sistema',
    description:
      'Personal pasando números de guía a Excel, copiando estados de sucursal a mano o reenviando PDFs manualmente porque las herramientas actuales no conversan entre sí.',
    impact: 'Errores de tipeo, cuellos de botella en hora pico y sobrecarga operativa.',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'bots-whatsapp',
    code: '01 / ATENCIÓN AUTOMÁTICA',
    title: 'Bots de WhatsApp conectados a la operatoria',
    subtitle: 'Menos consultas repetitivas en mostrador y WhatsApp',
    description:
      'Asistente automático en tu número de WhatsApp conectado a tus guías, remitos y sucursales. Responde al instante con datos reales y deriva al equipo solo cuando hace falta.',
    bullets: [
      'Seguimiento de envíos por número de guía, remito o DNI/CUIT',
      'Consulta de estado por sucursal, horarios y direcciones de retiro',
      'Entrega automática de copias de remitos o facturas autorizadas',
    ],
    whatsappPrefill:
      'Hola, me interesa implementar un Bot de WhatsApp para consultas de envíos y guías en nuestro transporte.',
  },
  {
    id: 'gestor-documental',
    code: '02 / GESTOR_ARCHIVO',
    title: 'Digitalización y ordenamiento documental',
    subtitle: 'Facturas y remitos ordenados sin carga manual',
    description:
      'Portal documental pensado para la dinámica de transporte: ordena, vincula e indexa automáticamente remitos conformados, guías y facturas para encontrarlos en segundos.',
    bullets: [
      'Búsqueda instantánea por N° de remito, factura, guía, cliente o fecha',
      'Vinculación directa entre viaje, remito firmado y comprobante emitido',
      'Descarga inmediata en PDF o reenvío directo por WhatsApp y correo',
    ],
    whatsappPrefill:
      'Hola, quiero consultar por el gestor documental (gestor_archivo) para ordenar remitos y facturas.',
  },
  {
    id: 'integraciones-medida',
    code: '03 / INTEGRACIONES',
    title: 'Desarrollos a medida sobre tu software actual',
    subtitle: 'Potenciamos lo que ya funciona sin frenar la empresa',
    description:
      'No tenés que tirar tu ERP ni cambiar la forma de facturar. Construimos conectores, tableros operativos y automatizaciones livianas encima de tu sistema existente.',
    bullets: [
      'Lectura y sincronización con tu base de datos, ERP o planillas actuales',
      'Alertas automáticas de demoras, rendiciones o envíos en sucursal',
      'Portales simples para clientes frecuentes, choferes o sucursales del interior',
    ],
    whatsappPrefill:
      'Hola, quiero hablar sobre una integración o desarrollo a medida sobre el sistema que ya usamos.',
  },
];

export const METHOD_STEPS: MethodStep[] = [
  {
    number: '01',
    title: 'Relevamiento',
    description:
      'Charlamos 30 minutos para entender qué sistema usan hoy, cómo circulan las guías, remitos y facturas, y dónde se traba el mostrador o la administración.',
    highlight: 'Sin tecnicismos ni auditorías eternas',
  },
  {
    number: '02',
    title: 'Prototipo rápido',
    description:
      'Armamos una primera versión funcional con flujos reales de tu empresa para que la prueben en pantalla y validen que resuelve el problema concreto.',
    highlight: 'Ves el resultado antes de escalar',
  },
  {
    number: '03',
    title: 'Implementación sin frenar la empresa',
    description:
      'Conectamos la herramienta sobre tu software o base actual de manera gradual. La salida de camiones, la facturación y el despacho nunca se detienen.',
    highlight: 'Cero cortes operativos',
  },
  {
    number: '04',
    title: 'Soporte',
    description:
      'Acompañamos la puesta en marcha junto a tu equipo de tráfico y administración, con contacto directo por WhatsApp para ajustar detalles del día a día.',
    highlight: 'Contacto directo con quien lo construyó',
  },
];

export interface DocumentRow {
  id: string;
  remito: string;
  factura: string;
  guia: string;
  cliente: string;
  cuit: string;
  sucursal: string;
  estado: 'Conformado' | 'Facturado' | 'En reparto';
  fecha: string;
}

/**
 * Datos 100% ficticios y sanitizados para la vista ilustrativa de gestor_archivo.
 */
export const DEMO_DOCUMENTS: DocumentRow[] = [
  {
    id: 'doc-1',
    remito: 'REM-0018-00049120',
    factura: 'FAC-A 0004-00012890',
    guia: 'G-042-184920',
    cliente: 'Distribuidora Andina S.A.',
    cuit: '30-00000001-9',
    sucursal: 'Suc. Rosario',
    estado: 'Conformado',
    fecha: 'Hoy 09:42',
  },
  {
    id: 'doc-2',
    remito: 'REM-0018-00049121',
    factura: 'FAC-A 0004-00012891',
    guia: 'G-042-184921',
    cliente: 'Metalúrgica del Sur S.R.L.',
    cuit: '30-00000002-7',
    sucursal: 'Suc. Neuquén',
    estado: 'Facturado',
    fecha: 'Hoy 08:15',
  },
  {
    id: 'doc-3',
    remito: 'REM-0018-00049122',
    factura: 'Pendiente',
    guia: 'G-042-184922',
    cliente: 'Alimentos Pampeanos S.A.',
    cuit: '30-00000003-5',
    sucursal: 'Suc. Bahía Blanca',
    estado: 'En reparto',
    fecha: 'Ayer 18:20',
  },
  {
    id: 'doc-4',
    remito: 'REM-0018-00049119',
    factura: 'FAC-A 0004-00012888',
    guia: 'G-042-184915',
    cliente: 'Insumos Centro Oeste S.R.L.',
    cuit: '30-00000004-3',
    sucursal: 'Suc. Córdoba',
    estado: 'Conformado',
    fecha: 'Ayer 16:05',
  },
];
