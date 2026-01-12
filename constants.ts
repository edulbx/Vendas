import { ServiceLevel, Testimonial } from './types';

export const SERVICE_LEVELS: ServiceLevel[] = [
  {
    id: 1,
    level: "Nível 1",
    title: "O Alicerce",
    subtitle: "Organização e Contexto",
    description: "O foco aqui é o \"básico bem feito\". Preparamos o terreno técnico e cognitivo para que sua empresa possa usar IA com segurança e eficiência.",
    priceRange: "A partir de R$ 1.500,00",
    idealFor: "Pequenos negócios ou empresas iniciando a jornada de IA.",
    color: "brand",
    gradient: "from-brand-400 to-brand-600",
    features: [
      {
        title: "Diagnóstico e Auditoria",
        description: "Mapeamento de gargalos e organização de dados (Drive, e-mails, notas)."
      },
      {
        title: "Configurações e Integrações",
        description: "Organização das fontes de dados para a IA e ativação do ecossistema Workspace/Microsoft."
      },
      {
        title: "Mini Especialistas (Gems/GPTs)",
        description: "Criação de agentes com contexto fixo da sua empresa (Brand Voice, Dados)."
      }
    ],
    tools: ["ChatGPT Team", "Gemini Advanced", "Google Workspace", "Notion"]
  },
  {
    id: 2,
    level: "Nível 2",
    title: "O Fluxo Inteligente",
    subtitle: "Automação de Decisão",
    description: "Aqui a IA deixa de ser apenas um chat e vira um motor de processamento, tomando decisões lógicas e automatizando fluxos de trabalho.",
    priceRange: "A partir de R$ 3.000,00",
    recurrence: "Suporte Recorrente (Opcional)",
    idealFor: "Empresas que precisam escalar operações sem aumentar equipe.",
    color: "blue",
    gradient: "from-blue-400 to-blue-600",
    features: [
      {
        title: "Automação Cognitiva",
        description: "A IA recebe dados, decide e gera saídas (ex: classificar leads via áudio WhatsApp)."
      },
      {
        title: "Ferramentas de Fluxo",
        description: "Implementação robusta de pipelines de automação via n8n ou Make."
      },
      {
        title: "Sistemas de Busca (Websearch)",
        description: "Agentes que buscam dados públicos/específicos e sintetizam decisões."
      }
    ],
    tools: ["n8n", "Opal", "v0", "Power Platform", "Make"]
  },
  {
    id: 3,
    level: "Nível 3",
    title: "Inteligência sob Medida",
    subtitle: "RAG & Machine Learning",
    description: "Desenvolvimento Full-stack onde você é dono do ativo. Resolvemos complexidades que ferramentas low-code não alcançam.",
    priceRange: "Sob Consulta",
    recurrence: "Disponibilidade Limitada",
    idealFor: "Grandes operações ou produtos digitais que exigem IA proprietária.",
    color: "purple",
    gradient: "from-purple-400 to-purple-600",
    features: [
      {
        title: "Arquitetura RAG Avançada",
        description: "Bancos de dados vetoriais para consulta precisa em grandes massas de dados."
      },
      {
        title: "Machine Learning Aplicado",
        description: "Fine-tuning e treinamento de modelos para tarefas específicas."
      },
      {
        title: "Desenvolvimento de Software",
        description: "Interfaces únicas integradas via API do Gemini/Claude."
      }
    ],
    tools: ["Python", "Streamlit", "FlutterFlow", "Pinecone", "LangChain"]
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
Você é o assistente virtual da "IA Estratégica". Seu objetivo é explicar nossos serviços e qualificar leads.
Use um tom profissional, porém acessível e inovador.

Nossos serviços são divididos em 3 níveis:

Nível 1: O Alicerce (Organização e Contexto)
- Preço: A partir de R$ 1.500,00 (Setup Único)
- O que é: Organização de dados, configuração de ferramentas, criação de GPTs/Gems personalizados.
- Para quem: Quem está começando e precisa organizar a casa.

Nível 2: O Fluxo Inteligente (Automação)
- Preço: A partir de R$ 3.000,00 (Setup) + Recorrência Opcional.
- O que é: Automação via n8n/Make, agentes que tomam decisão, integrações complexas.
- Para quem: Quem quer ganhar tempo e reduzir trabalho manual repetitivo.

Nível 3: Inteligência sob Medida (RAG & ML)
- Preço: Sob Consulta (Depende de disponibilidade).
- O que é: Software próprio, Bancos vetoriais (RAG), Fine-tuning, Apps em Python/FlutterFlow.
- Para quem: Demandas complexas, grandes volumes de dados, produtos SAAS.

Se o usuário perguntar qual o melhor para ele, faça 1 ou 2 perguntas sobre o negócio dele para recomendar o nível certo.
Sempre encoraje o usuário a agendar uma reunião de diagnóstico no final.
Responda de forma concisa.
`;