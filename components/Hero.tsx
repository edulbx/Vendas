import React from 'react';
import Button from './Button';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dark-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl">
           <div className="absolute top-[20%] left-[20%] w-72 h-72 bg-brand-500/10 rounded-full blur-[100px] animate-pulse"></div>
           <div className="absolute bottom-[20%] right-[20%] w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
        </div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-300 text-sm mb-8 hover:bg-white/10 transition-colors cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
          </span>
          Aceitando Projetos Nível 1 e 2
        </div>

        <h1 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight mb-8">
          A Evolução da sua Empresa <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-200 to-blue-400">
            Começa com IA
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Deixe de apenas usar ferramentas de chat e comece a construir <span className="text-gray-200 font-medium">motores de inteligência</span>.
          Do básico organizado à automação complexa que escala seu negócio.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}>
            Conhecer a Esteira
            <ChevronRight className="ml-2 w-4 h-4" />
          </Button>
          <Button variant="ghost" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
            Falar com Especialista
          </Button>
        </div>

        {/* Stats / Trust (Future Benefits focus) */}
        <div className="mt-20 pt-10 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8">
           {[
             { label: "Para Estratégia", value: "Mais Tempo" },
             { label: "Redução de Erros", value: "Automação" },
             { label: "Para seu Negócio", value: "Escalabilidade" },
             { label: "Tecnologia", value: "Gemini / GPT-4" },
           ].map((stat, idx) => (
             <div key={idx}>
               <div className="text-2xl md:text-3xl font-display font-bold text-white mb-1">{stat.value}</div>
               <div className="text-xs text-gray-500 uppercase tracking-wide">{stat.label}</div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;