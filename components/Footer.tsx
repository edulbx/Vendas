import React from 'react';
import { BrainCircuit } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-950 border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 text-white font-display font-bold text-xl mb-4">
              <BrainCircuit className="text-brand-500" />
              <span>IA Estratégica</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Transformando empresas através da implementação inteligente de IA, automação de fluxos e análise de dados avançada.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Diagnóstico & Setup</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Automação Inteligente</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">RAG & Desenvolvimento</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Consultoria Mensal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Cases de Sucesso</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>contato@iaestrategica.com.br</li>
              <li>São Paulo, SP</li>
              <li className="pt-2">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                Sistemas Operacionais
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} IA Estratégica. Todos os direitos reservados.</p>
          <p>Desenvolvido com React & Gemini API</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;