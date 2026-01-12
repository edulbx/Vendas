import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-dark-900 border-t border-white/5 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-brand-500 uppercase tracking-widest mb-3">Depoimentos</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            O que nossos parceiros dizem
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Histórias reais de empresas que transformaram seus resultados através da inteligência artificial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="bg-dark-800 border border-white/5 p-8 rounded-2xl relative hover:border-brand-500/30 transition-colors group">
              <Quote className="absolute top-8 right-8 text-brand-900/40 w-12 h-12 group-hover:text-brand-500/20 transition-colors" />
              
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover border border-white/10"
                />
                <div>
                  <h4 className="text-white font-semibold text-sm">{item.name}</h4>
                  <p className="text-gray-500 text-xs">{item.role}</p>
                  <p className="text-brand-400 text-xs font-medium">{item.company}</p>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                "{item.text}"
              </p>

              <div className="border-t border-white/5 pt-4 flex justify-end">
                 {/* Placeholder for actual logo usage in production */}
                 <div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    <img src={item.logo} alt={`Logo ${item.company}`} className="h-6 w-auto object-contain" />
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;