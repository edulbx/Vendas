import React from 'react';
import { X, ShieldAlert, Coffee, Construction } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  type?: 'default' | 'fun' | 'legal';
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, type = 'default' }) => {
  if (!isOpen) return null;

  const getIcon = () => {
    if (type === 'legal') return <ShieldAlert className="text-brand-500 w-6 h-6" />;
    if (type === 'fun') return <Coffee className="text-brand-500 w-6 h-6" />;
    return <Construction className="text-brand-500 w-6 h-6" />;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Content */}
      <div className="relative bg-dark-900 border border-white/10 rounded-2xl w-full max-w-2xl max-h-[80vh] flex flex-col shadow-2xl animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
             {getIcon()}
             <h3 className="text-xl font-display font-bold text-white">{title}</h3>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto text-gray-300 leading-relaxed text-sm scrollbar-thin scrollbar-thumb-brand-900 scrollbar-track-transparent">
          {children}
        </div>

        <div className="p-4 border-t border-white/10 bg-dark-800/50 rounded-b-2xl flex justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors text-sm font-medium"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;