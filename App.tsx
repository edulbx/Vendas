import React from 'react';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import ChatWidget from './components/ChatWidget';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import WhatsAppButton from './components/WhatsAppButton';
import ContactForm from './components/ContactForm';
import { SERVICE_LEVELS } from './constants';
import { BrainCircuit } from 'lucide-react';

const App: React.FC = () => {
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-dark-900 text-gray-100 font-sans selection:bg-brand-500/30 selection:text-brand-200">
      
      {/* Navbar - Simple overlay */}
      <nav className="fixed top-0 w-full z-40 bg-dark-900/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white font-display font-bold text-xl">
            <BrainCircuit className="text-brand-500 w-8 h-8" />
            <span className="tracking-tight">LogoStack</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <button onClick={() => scrollToSection('services')} className="hover:text-brand-400 transition-colors cursor-pointer bg-transparent border-none">Soluções</button>
            <button onClick={() => scrollToSection('methodology')} className="hover:text-brand-400 transition-colors cursor-pointer bg-transparent border-none">Metodologia</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-brand-400 transition-colors cursor-pointer bg-transparent border-none">Contato</button>
          </div>
        </div>
      </nav>

      <main>
        <Hero />

        {/* Services Section */}
        <section id="services" className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-sm font-semibold text-brand-500 uppercase tracking-widest mb-3">Nossa Esteira</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Três Níveis de Maturidade em IA
              </h3>
              <p className="text-gray-400">
                Não vendemos apenas "chatbots". Implementamos uma estratégia completa que cresce conforme a maturidade tecnológica da sua empresa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {SERVICE_LEVELS.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <div className="inline-block p-4 rounded-xl bg-dark-800 border border-white/5 text-gray-400 text-sm max-w-2xl">
                <span className="text-brand-400 font-bold block mb-1">Nota sobre o investimento:</span>
                Valores estimados baseados em horas técnicas + infraestrutura. 
                Projetos personalizados incluem margem de segurança e custos de API.
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* Methodology / Why Us */}
        <section id="methodology" className="py-24 bg-dark-800/50 border-y border-white/5">
          <div className="container mx-auto px-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
               <div>
                 <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 leading-tight">
                   O "Básico Bem Feito" <br/> supera a complexidade mal gerida.
                 </h2>
                 <p className="text-gray-400 mb-6 leading-relaxed">
                   Muitas empresas tentam pular direto para o Machine Learning sem ter seus dados organizados. Nossa metodologia garante que sua base (Nível 1) esteja sólida antes de automatizar decisões (Nível 2) ou criar modelos próprios (Nível 3).
                 </p>
                 <ul className="space-y-4">
                   {[
                     "Auditoria completa de dados antes de qualquer código.",
                     "Segurança e privacidade como pilares centrais.",
                     "Transferência de conhecimento: sua equipe aprende a usar.",
                   ].map((item, idx) => (
                     <li key={idx} className="flex items-center text-gray-300">
                       <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-3"></span>
                       {item}
                     </li>
                   ))}
                 </ul>
               </div>
               
               {/* Gráfico de Barras Sólidas */}
               <div className="relative">
                 <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 to-purple-500/20 rounded-2xl blur-3xl"></div>
                 <div className="relative bg-dark-900 border border-white/10 rounded-2xl p-8 shadow-2xl">
                    <div className="space-y-8">
                      
                      {/* Bar 1 */}
                      <div>
                        <div className="flex justify-between items-end mb-2">
                           <span className="text-sm font-medium text-gray-300">Organização de Dados</span>
                        </div>
                        <div className="w-full bg-dark-950 rounded-full h-2.5 border border-white/5 relative overflow-hidden">
                           <div className="absolute top-0 left-0 h-full w-[90%] bg-brand-500 rounded-full shadow-[0_0_15px_rgba(20,184,166,0.5)]"></div>
                        </div>
                      </div>

                      {/* Bar 2 */}
                      <div>
                        <div className="flex justify-between items-end mb-2">
                           <span className="text-sm font-medium text-gray-300">Automação de Fluxo</span>
                        </div>
                        <div className="w-full bg-dark-950 rounded-full h-2.5 border border-white/5 relative overflow-hidden">
                           <div className="absolute top-0 left-0 h-full w-[65%] bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                        </div>
                      </div>

                      {/* Bar 3 */}
                      <div>
                        <div className="flex justify-between items-end mb-2">
                           <span className="text-sm font-medium text-gray-300">Modelos Proprietários</span>
                        </div>
                        <div className="w-full bg-dark-950 rounded-full h-2.5 border border-white/5 relative overflow-hidden">
                           <div className="absolute top-0 left-0 h-full w-[35%] bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
                        </div>
                      </div>

                    </div>
                 </div>
               </div>
             </div>
          </div>
        </section>

        <section id="contact" className="py-24">
            <div className="container mx-auto px-6">
                <ContactForm />
            </div>
        </section>
      </main>

      <Footer />
      <ChatWidget />
      <WhatsAppButton />
    </div>
  );
};

export default App;