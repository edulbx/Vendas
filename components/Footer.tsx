import React, { useState } from 'react';
import { BrainCircuit } from 'lucide-react';
import { EXTRA_SERVICES, SERVICE_LEVELS } from '../constants';
import Modal from './Modal';

const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'none' | 'privacy' | 'blog' | 'cases' | 'about' | string>('none');

  const openServiceModal = (serviceTitle: string) => {
    setActiveModal(serviceTitle);
  };

  const currentService = EXTRA_SERVICES.find(s => s.title === activeModal);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark-950 border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 text-white font-display font-bold text-xl mb-4">
              <BrainCircuit className="text-brand-500" />
              <span>LogoStack</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Transformando empresas através da implementação inteligente de IA, automação de fluxos e análise de dados avançada.
            </p>
          </div>
          
          {/* Column 2: Serviços (Merged lists side-by-side) - Spans 2 columns */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-white font-semibold mb-6">Serviços</h4>
            
            {/* Reduced gap to make them look closer together */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Left List (4 items: 3 levels + 1 extra) */}
              <ul className="space-y-3 text-sm text-gray-400">
                {SERVICE_LEVELS.map((level) => (
                  <li key={level.id}>
                    <button 
                      onClick={() => scrollToSection('services')}
                      className="hover:text-white transition-colors text-left"
                    >
                      {level.title}
                    </button>
                  </li>
                ))}
                {/* Moving the first extra service here to make it 4 items */}
                {EXTRA_SERVICES.length > 0 && (
                   <li>
                    <button 
                      onClick={() => openServiceModal(EXTRA_SERVICES[0].title)}
                      className="hover:text-white transition-colors text-left"
                    >
                      {EXTRA_SERVICES[0].title}
                    </button>
                  </li>
                )}
              </ul>

              {/* Right List (3 items: remaining extras) */}
              <ul className="space-y-3 text-sm text-gray-400">
                {EXTRA_SERVICES.slice(1).map((service, idx) => (
                  <li key={idx}>
                    <button 
                      onClick={() => openServiceModal(service.title)}
                      className="hover:text-white transition-colors text-left"
                    >
                      {service.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Company */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold mb-6">Empresa</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><button onClick={() => setActiveModal('about')} className="hover:text-brand-400 transition-colors">Sobre Nós</button></li>
              <li><button onClick={() => setActiveModal('cases')} className="hover:text-brand-400 transition-colors">Cases de Sucesso</button></li>
              <li><button onClick={() => setActiveModal('blog')} className="hover:text-brand-400 transition-colors">Blog</button></li>
              <li><button onClick={() => setActiveModal('privacy')} className="hover:text-brand-400 transition-colors">Política de Privacidade</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} LogoStack. Todos os direitos reservados.</p>
          <p>Desenvolvido por LogoStack</p>
        </div>
      </div>

      {/* Modals */}
      
      {/* Blog Alert */}
      <Modal 
        isOpen={activeModal === 'blog'} 
        onClose={() => setActiveModal('none')} 
        title="Ops! Você chegou muito cedo."
        type="fun"
      >
        <p className="text-lg mb-4">☕ Nossos redatores ainda estão tomando café e discutindo com o ChatGPT qual a melhor manchete.</p>
        <p>Volte em breve para conteúdos incríveis sobre IA, automação e o futuro do trabalho. Prometemos que vai valer a pena!</p>
      </Modal>

      {/* Cases Alert */}
      <Modal 
        isOpen={activeModal === 'cases'} 
        onClose={() => setActiveModal('none')} 
        title="Compilando Histórias de Sucesso..."
        type="fun"
      >
         <p className="text-lg mb-4">🚀 Estamos organizando tantos resultados positivos que nosso servidor de dados quase pediu arrego.</p>
         <p>Em breve, você verá aqui como a LogoStack transformou empresas reais. Spoiler: tem muita automação e pouco trabalho manual envolvido.</p>
      </Modal>

      {/* About Us Modal */}
      <Modal 
        isOpen={activeModal === 'about'} 
        onClose={() => setActiveModal('none')} 
        title="Sobre a LogoStack"
        type="default"
      >
         <p className="text-lg leading-relaxed mb-4">
           A LogoStack nasceu da inconformidade com o "hype" vazio da Inteligência Artificial. Acreditamos que a tecnologia só faz sentido quando gera valor real, mensurável e estratégico para o negócio.
         </p>
         <p className="text-gray-400 mb-4">
           Não somos apenas desenvolvedores ou consultores. Somos parceiros de crescimento que entendem que, antes de automatizar, é preciso organizar. Nossa metodologia de três níveis foi desenhada para acompanhar a maturidade da sua empresa, garantindo que você não dê passos maiores que a perna, mas também não fique parado no tempo.
         </p>
         <p className="text-gray-400">
           Nossa missão é democratizar o acesso à IA de alto nível, permitindo que empresas de todos os tamanhos tenham acesso a ferramentas que antes eram exclusivas de gigantes da tecnologia.
         </p>
      </Modal>

      {/* Service Details Modal */}
      <Modal 
        isOpen={!!currentService} 
        onClose={() => setActiveModal('none')} 
        title={currentService?.title || ''}
        type="default"
      >
         <p className="text-lg leading-relaxed">{currentService?.description}</p>
         <div className="mt-8 bg-brand-900/20 p-4 rounded-lg border border-brand-500/20">
           <p className="text-brand-300 text-sm font-semibold">Interessado neste serviço?</p>
           <p className="text-gray-400 text-xs mt-1">Fale conosco no WhatsApp ou preencha o formulário para um orçamento personalizado.</p>
         </div>
      </Modal>

      {/* Privacy Policy */}
      <Modal 
        isOpen={activeModal === 'privacy'} 
        onClose={() => setActiveModal('none')} 
        title="Política de Privacidade (LGPD)"
        type="legal"
      >
        <div className="space-y-4">
          <p><strong>Última atualização: {new Date().toLocaleDateString()}</strong></p>
          
          <p>A <strong>LogoStack</strong> valoriza a sua privacidade. Esta política descreve como coletamos, usamos e protegemos suas informações pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).</p>

          <h4 className="text-white font-bold mt-4">1. Coleta de Dados</h4>
          <p>Coletamos apenas os dados necessários para a prestação de nossos serviços e comunicação comercial, como: Nome, E-mail corporativo e Telefone, fornecidos voluntariamente através de nossos formulários de contato.</p>

          <h4 className="text-white font-bold mt-4">2. Uso das Informações</h4>
          <p>Utilizamos seus dados para: responder a solicitações de orçamento, agendar diagnósticos, enviar propostas comerciais e, ocasionalmente, compartilhar novidades sobre nossos serviços (você pode optar por não receber a qualquer momento).</p>

          <h4 className="text-white font-bold mt-4">3. Proteção e Segurança</h4>
          <p>Adotamos medidas técnicas e administrativas para proteger seus dados contra acessos não autorizados, perdas ou alterações. Não vendemos nem compartilhamos seus dados com terceiros para fins de marketing.</p>

          <h4 className="text-white font-bold mt-4">4. Seus Direitos</h4>
          <p>Você tem o direito de solicitar: confirmação da existência de tratamento, acesso aos dados, correção de dados incompletos ou desatualizados, e eliminação dos dados pessoais tratados com o consentimento.</p>

          <p className="mt-6 border-t border-white/10 pt-4">Para exercer seus direitos ou tirar dúvidas, entre em contato através do e-mail: <strong>contato@logostack.com.br</strong></p>
        </div>
      </Modal>

    </footer>
  );
};

export default Footer;