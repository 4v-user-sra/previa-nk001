export type AudienceIconKey = 'events' | 'church' | 'rental';
export type SpecIconKey = 'rack' | 'frequency' | 'connectivity' | 'warranty';

export interface AudienceItem {
  id: string;
  icon: AudienceIconKey;
  titleLines: [string, string];
  text: string;
}

export interface DspItem {
  id: string;
  title: string;
  text: string;
}

export interface SpecItem {
  id: string;
  icon: SpecIconKey;
  title: string;
  text: string;
}

export const WHATSAPP_CONFIG = {
  phone: '5535910217131',
  prefilledMessage:
    'Olá, vim da página de transmissores NK 001 e gostaria de mais informações!',
  heroCtaLabel: 'SOLICITAR ORÇAMENTO DO EQUIPAMENTO',
  sectionCtaLabel: 'SOLICITAR UM ORÇAMENTO',
} as const;

export function buildWhatsAppUrl(
  phone: string = WHATSAPP_CONFIG.phone,
  message: string = WHATSAPP_CONFIG.prefilledMessage,
): string {
  const digitsOnly = phone.replace(/\D/g, '');
  if (!digitsOnly) {
    throw new Error('WhatsApp phone number must contain digits.');
  }
  const encodedText = encodeURIComponent(message);
  return `https://api.whatsapp.com/send/?phone=${digitsOnly}&text=${encodedText}&type=phone_number&app_absent=0`;
}

export const CTA_URL = buildWhatsAppUrl();

export const HERO_CONTENT = {
  brandHighlight: 'NK 001:',
  headingLine1Rest: 'O transmissor de',
  headingLine2: 'tradução simultânea exclusivo',
  headingLine3: 'para profissionais de áudio.',
  subheadlineLine1:
    'Transmissor físico com processamento digital (DSP) para locadoras,',
  subheadlineLine2: 'integradores e equipes de sonorização.',
  notice: {
    title: 'ATENÇÃO: Fabricação e Venda de Equipamentos.',
    text: 'A Telenick fornece exclusivamente o hardware. Não realizamos locação, montagem ou prestação de serviços para eventos.',
  },
  ctaLabel: WHATSAPP_CONFIG.heroCtaLabel,
  productImage: {
    src: '/assets/nk001-device.png',
    alt: 'Transmissor profissional TELENICK NK 001 padrão rack 1UR com display LCD, medidor de modulação e saída de fone',
  },
  backgroundImage: {
    src: '/assets/hero-mixer-bg.jpg',
    alt: '',
  },
  brandLogo: {
    src: '/assets/telenick-logo.png',
    alt: 'TELENICK - Equipamentos de Transmissão',
  },
} as const;

export const AUDIENCES_CONTENT = {
  id: 'audiences',
  headingLine1: 'O hardware definitivo',
  headingLine2: 'para estruturas de áudio profissional.',
  introPrefix: 'O ',
  introStrong: 'NK 001',
  introLine1Rest: ' é um transmissor físico, desenvolvido para garantir',
  introLine2: 'a estabilidade do sinal em:',
  items: [
    {
      id: 'sonorizacao-eventos',
      icon: 'events',
      titleLines: ['Empresas de', 'Sonorização e Eventos:'],
      text: 'Para profissionais, PJs e técnicos que precisam fornecer sistemas de tradução simultânea estáveis para grandes congressos e feiras.',
    },
    {
      id: 'igrejas',
      icon: 'church',
      titleLines: ['Técnicos e Integradores', 'de Igrejas:'],
      text: 'O equipamento ideal para a instalação definitiva em cultos bilíngues e sistemas de acessibilidade auditiva.',
    },
    {
      id: 'locadoras',
      icon: 'rental',
      titleLines: ['Locadoras', 'de equipamento:'],
      text: 'Hardware robusto (padrão rack 1UR) para suportar a rotina pesada de eventos itinerantes.',
    },
  ] satisfies AudienceItem[],
  ctaLabel: WHATSAPP_CONFIG.sectionCtaLabel,
} as const;

export const DSP_CONTENT = {
  id: 'dsp_features',
  headingLine1: 'Além de transmissor, um processador',
  headingLine2: 'de áudio completo.',
  items: [
    {
      id: 'dsp',
      title: 'Processamento Digital (DSP):',
      text: 'entrega áudio puro, limpando a "sujeira" e os chiados comuns em sistemas analógicos.',
    },
    {
      id: 'gain-control',
      title: 'Controle de Ganho:',
      text: 'compressor, Limiter e AGC integrados. O som nunca "estoura", mesmo se o orador falar alto.',
    },
    {
      id: 'real-monitoring',
      title: 'Monitoramento Real:',
      text: 'painel Touch Screen e saída de fone para o técnico ter controle absoluto da transmissão.',
    },
  ] satisfies DspItem[],
  ctaLabel: WHATSAPP_CONFIG.sectionCtaLabel,
} as const;

export const SPECS_CONTENT = {
  id: 'specs',
  headingLine1: 'O melhor custo-benefício',
  headingLine2: 'profissional do mercado.',
  items: [
    {
      id: 'formato-1ur',
      icon: 'rack',
      title: 'Formato 1UR:',
      text: 'Compacto (238×445×175mm), encaixe perfeito em racks de eventos itinerantes ou fixos.',
    },
    {
      id: 'faixa-estendida',
      icon: 'frequency',
      title: 'Faixa Estendida:',
      text: '72.1 – 75.9MHz (até 76 canais disponíveis).',
    },
    {
      id: 'conectividade-pro',
      icon: 'connectivity',
      title: 'Conectividade Pro:',
      text: 'Entradas XLR balanceadas e saída BNC 50Ω para antena.',
    },
    {
      id: 'garantia-telenick',
      icon: 'warranty',
      title: 'Garantia TELENICK:',
      text: '1 ano contra qualquer defeito de fabricação.',
    },
  ] satisfies SpecItem[],
  ctaLabel: WHATSAPP_CONFIG.sectionCtaLabel,
} as const;

export const FINAL_CTA_CONTENT = {
  id: 'final_cta',
  headingLine1: 'Adquira o hardware definitivo',
  headingLine2: 'para sua transmissão.',
  text: 'Pare de improvisar com equipamentos amadores. Tenha em seu rack a tecnologia de transmissão via rádio (FM/VHF) mais confiável do mercado para os eventos dos seus clientes.',
  ctaLabel: WHATSAPP_CONFIG.sectionCtaLabel,
} as const;

export const FOOTER_CONTENT = {
  id: 'footer',
  copyrightBold: 'Copyright © V4 Company - Nunes & CO - 2026 -',
  rightsRegular: 'Todos os direitos reservados',
} as const;

export const RETENTION_CONTENT = {
  exitIntent: {
    title: 'Ainda tem dúvidas sobre o NK 001?',
    message:
      'Ainda tem dúvidas sobre o NK 001? Fale direto com um de nossos engenheiros agora mesmo.',
    ctaLabel: 'FALAR COM UM ENGENHEIRO',
    dismissLabel: 'Continuar na página',
  },
  floatingWhatsApp: {
    ariaLabel: 'Falar no WhatsApp sobre o transmissor NK 001',
    tooltip: 'Orçamento via WhatsApp',
  },
} as const;

