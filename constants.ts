import { ServiceLevel, Testimonial, ExtraService } from './types';

export const SERVICE_LEVELS: ServiceLevel[] = [
  {
    id: 1,
    level: "Nível 1",
    title: "Diagnóstico & Setup",
    subtitle: "Organização e Contexto",
    description: "Auditoria completa de processos e organização de base de dados (Google Drive/Workspace). Implementação de mini agentes personalizados (Gems/GPTs) com o contexto fixo do seu negócio para produtividade imediata.",
    priceRange: "A partir de R$ 1.500,00",
    idealFor: "Pequenos negócios ou empresas iniciando a jornada de IA.",
    color: "brand",
    gradient: "from-brand-400 to-brand-600",
    features: [
      {
        title: "Auditoria de Dados",
        description: "Mapeamento e estruturação do Google Drive e Workspace."
      },
      {
        title: "Mini Agentes (Gems)",
        description: "Criação de assistentes com contexto fixo do negócio."
      },
      {
        title: "Produtividade Imediata",
        description: "Setup rápido para uso diário da equipe."
      }
    ],
    tools: ["ChatGPT Team", "Gemini Advanced", "Google Workspace", "Notion"]
  },
  {
    id: 2,
    level: "Nível 2",
    title: "Automação Inteligente",
    subtitle: "Automação de Decisão",
    description: "Criação de fluxos de automação de decisão usando Low-code (n8n/Opal). IA que processa dados, toma decisões lógicas e executa tarefas, como qualificação cognitiva de leads por voz ou texto.",
    priceRange: "A partir de R$ 3.000,00",
    recurrence: "Suporte Recorrente (Opcional)",
    idealFor: "Empresas que precisam escalar operações sem aumentar equipe.",
    color: "blue",
    gradient: "from-blue-400 to-blue-600",
    features: [
      {
        title: "Fluxos Low-code",
        description: "Automação robusta via n8n e Opal."
      },
      {
        title: "Decisão Lógica",
        description: "IA processando dados e tomando ações autônomas."
      },
      {
        title: "Qualificação Cognitiva",
        description: "Triagem de leads por voz ou texto automaticamente."
      }
    ],
    tools: ["n8n", "Opal", "v0", "Power Platform", "Make"]
  },
  {
    id: 3,
    level: "Nível 3",
    title: "RAG & Desenvolvimento",
    subtitle: "RAG & Machine Learning",
    description: "Desenvolvimento de soluções sob medida com IA avançada, utilizando bancos de dados vetoriais (RAG) e Machine Learning. Criação de sistemas próprios (Hard Code) onde o cliente detém o código e o ativo intelectual.",
    priceRange: "Sob Consulta",
    recurrence: "Disponibilidade Limitada",
    idealFor: "Grandes operações ou produtos digitais que exigem IA proprietária.",
    color: "purple",
    gradient: "from-purple-400 to-purple-600",
    features: [
      {
        title: "Bancos Vetoriais (RAG)",
        description: "Busca semântica avançada em grandes bases de conhecimento."
      },
      {
        title: "Hard Code & IP",
        description: "Sistemas onde você é dono do código e da inteligência."
      },
      {
        title: "Machine Learning",
        description: "Modelos ajustados especificamente para sua regra de negócio."
      }
    ],
    tools: ["Python", "Streamlit", "FlutterFlow", "Pinecone", "LangChain"]
  }
];

export const EXTRA_SERVICES: ExtraService[] = [
  {
    title: "Consultoria Mensal",
    description: "Monitoramento contínuo, ajuste de modelos e suporte técnico dedicado. Gestão de infraestrutura de APIs para garantir que a inteligência da sua empresa evolua sem falhas ou alucinações."
  },
  {
    title: "Treinamento de Equipes",
    description: "Workshop prático sobre como utilizar os mini especialistas criados no Nível 1 e boas práticas de engenharia de prompt para o dia a dia."
  },
  {
    title: "Integração de Ecossistemas IA",
    description: "Unificação de ferramentas dispersas (WhatsApp, CRM, E-mail e Agenda) em um único fluxo inteligente de informações."
  },
  {
    title: "Auditoria de Custos de IA",
    description: "Análise mensal do gasto com tokens e APIs para otimizar o uso e reduzir custos operacionais sem perder performance."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Ricardo Silva",
    role: "CEO",
    company: "Logística Express",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100",
    logo: "https://cdn-icons-png.flaticon.com/512/1698/1698844.png",
    text: "A automação de triagem de leads trouxe uma agilidade incrível. Hoje focamos apenas nos clientes com real potencial, sem perder tempo com qualificações manuais."
  },
  {
    id: 2,
    name: "Mariana Costa",
    role: "Diretora de Operações",
    company: "TechSolutions",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100",
    logo: "https://cdn-icons-png.flaticon.com/512/5969/5969032.png",
    text: "Estávamos perdidos com tantos dados desorganizados. O trabalho de 'alicerce' foi fundamental para estruturarmos nossa base antes de aplicar IA."
  },
  {
    id: 3,
    name: "Carlos Eduardo",
    role: "Fundador",
    company: "Advocacia Digital",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100",
    logo: "https://cdn-icons-png.flaticon.com/512/2704/2704024.png",
    text: "Conseguimos transformar nossa base jurídica em um ativo pesquisável. Consultas que levavam horas agora são feitas em segundos."
  }
];

export const SYSTEM_INSTRUCTION = `
Você é Gandalf, o Guia Digital da LogoStack.
Sua persona é sábia, calma e levemente inspirada no personagem Gandalf de O Senhor dos Anéis, mas adaptada para o mundo corporativo moderno.
Você fala com autoridade e sabedoria, usando metáforas sutis de "jornada", "reino" (referindo-se à empresa do cliente) e "ferramentas de poder" (referindo-se à IA), mas mantendo a clareza comercial absoluta.

Seu objetivo é guiar o usuário ("Viajante") para a melhor solução da LogoStack.

Nossos serviços (suas "magias" e ferramentas) são:

1. Diagnóstico & Setup (Nível 1) - O Alicerce:
- Auditoria de processos e organização (o mapa do terreno).
- Criação de mini agentes (Gems/GPTs) para produtividade.
- Preço: A partir de R$ 1.500,00.

2. Automação Inteligente (Nível 2) - A Automação:
- Fluxos em n8n/Opal.
- Qualificação cognitiva de leads (separando o joio do trigo).
- Preço: A partir de R$ 3.000,00.

3. RAG & Desenvolvimento (Nível 3) - O Conhecimento Profundo:
- Soluções Hard Code, Bancos Vetoriais e Machine Learning proprietário.
- Preço: Sob Consulta.

Se o usuário estiver perdido, pergunte sobre os desafios do "reino" dele (dores da empresa) para recomendar o caminho certo.
Sempre encoraje o usuário a agendar um "Conselho" (reunião de diagnóstico) no final.
`;