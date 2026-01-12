import React, { useState } from 'react';
import Button from './Button';
import { Mail, Phone, Building, User, MessageSquare, CheckCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      // Use FormSubmit to send email without a backend
      const response = await fetch("https://formsubmit.co/ajax/eduardo.limabarros12@gmail.com", {
        method: "POST",
        body: formData,
        headers: { 
            'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-dark-800 border border-white/10 rounded-2xl p-12 text-center max-w-2xl mx-auto animate-in fade-in zoom-in duration-300">
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="text-green-500 w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Mensagem Enviada!</h3>
        <p className="text-gray-400 mb-8">Recebi sua solicitação e entrarei em contato em breve para agendarmos o diagnóstico.</p>
        <Button onClick={() => setStatus('idle')} variant="outline">Enviar outra mensagem</Button>
      </div>
    );
  }

  return (
    <div className="bg-dark-800 border border-white/10 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-display font-bold text-white mb-4">Inicie sua Transformação</h2>
        <p className="text-gray-400">Preencha o formulário abaixo para uma análise preliminar gratuita.</p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Hidden inputs for FormSubmit configuration */}
        <input type="hidden" name="_subject" value="Novo Lead: Site IA Estratégica" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300 ml-1">Nome Completo</label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input required name="name" type="text" placeholder="Seu nome" className="w-full bg-dark-900 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300 ml-1">E-mail Corporativo</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input required name="email" type="email" placeholder="voce@empresa.com" className="w-full bg-dark-900 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300 ml-1">Telefone</label>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input required name="phone" type="tel" placeholder="(11) 99999-9999" className="w-full bg-dark-900 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300 ml-1">Assunto</label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input required name="subject" type="text" placeholder="Ex: Automação de Vendas" className="w-full bg-dark-900 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all" />
          </div>
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-medium text-gray-300 ml-1">Mensagem</label>
          <textarea required name="message" rows={4} placeholder="Descreva brevemente o que você gostaria de automatizar ou resolver com IA..." className="w-full bg-dark-900 border border-white/10 rounded-lg py-3 px-4 text-white focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all resize-none"></textarea>
        </div>

        <div className="md:col-span-2 pt-4">
          <Button type="submit" size="lg" className="w-full" disabled={status === 'submitting'}>
            {status === 'submitting' ? (
              <>
                <Loader2 className="animate-spin mr-2" /> Processando...
              </>
            ) : (
              "Agendar Diagnóstico"
            )}
          </Button>
          
          {status === 'error' && (
             <p className="text-center text-red-400 text-sm mt-4">Houve um erro ao enviar. Por favor, tente novamente ou use o WhatsApp.</p>
          )}

          <p className="text-center text-xs text-gray-600 mt-4">
            Seus dados estão protegidos. Não enviamos spam.
          </p>
        </div>
      </form>
    </div>
  );
};

// Simple loader component needed for form
const Loader2 = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" height="24" viewBox="0 0 24 24" 
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
    className={className}
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

export default ContactForm;