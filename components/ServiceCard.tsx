import React from 'react';
import { ServiceLevel } from '../types';
import { Check, Cpu, BrainCircuit, Database } from 'lucide-react';
import Button from './Button';

interface ServiceCardProps {
  service: ServiceLevel;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const isRecommended = service.id === 2;

  const Icon = () => {
    switch (service.id) {
      case 1: return <Database className="w-6 h-6" />;
      case 2: return <Cpu className="w-6 h-6" />;
      case 3: return <BrainCircuit className="w-6 h-6" />;
      default: return <Cpu className="w-6 h-6" />;
    }
  };

  return (
    <div className={`relative group flex flex-col h-full rounded-2xl transition-all duration-300 ${isRecommended ? 'bg-dark-800 border-brand-500/50 scale-100 md:scale-105 shadow-2xl shadow-brand-900/20 z-10' : 'bg-dark-800/50 border-white/5 hover:border-brand-500/30 hover:bg-dark-800' } border`}>
      
      {isRecommended && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-brand-500 to-brand-400 text-brand-950 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
          Mais Popular
        </div>
      )}

      <div className="p-8 flex flex-col flex-grow">
        {/* Header */}
        <div className="mb-6">
          <div className={`inline-flex items-center justify-center p-3 rounded-lg mb-4 bg-gradient-to-br ${service.gradient} bg-opacity-10 text-white`}>
            <Icon />
          </div>
          <h3 className="text-sm font-semibold text-brand-400 tracking-wider uppercase mb-1">{service.level}</h3>
          <h2 className="text-2xl font-display font-bold text-white mb-2">{service.title}</h2>
          <p className="text-gray-400 text-sm">{service.subtitle}</p>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-8 leading-relaxed">
          {service.description}
        </p>

        {/* Features */}
        <div className="flex-grow space-y-4 mb-8">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-start">
              <Check className="w-5 h-5 text-brand-500 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-gray-200 text-sm">{feature.title}</strong>
                <span className="text-gray-500 text-xs leading-snug">{feature.description}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Tools */}
        <div className="mb-8">
           <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Stack Tecnológico</p>
           <div className="flex flex-wrap gap-2">
             {service.tools.map((tool, idx) => (
               <span key={idx} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300">
                 {tool}
               </span>
             ))}
           </div>
        </div>

        {/* Pricing */}
        <div className="pt-6 border-t border-white/10 mt-auto">
          <p className="text-xs text-gray-500 mb-1">Investimento estimado</p>
          <div className="text-xl font-bold text-white font-display">{service.priceRange}</div>
          {service.recurrence && (
            <div className="text-xs text-brand-400 mt-1 font-medium">
              + {service.recurrence}
            </div>
          )}
        </div>
      </div>

      <div className="p-6 pt-0">
        <Button 
          variant={isRecommended ? 'primary' : 'outline'} 
          className="w-full"
          onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
        >
          Solicitar Proposta
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;