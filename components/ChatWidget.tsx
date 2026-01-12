import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/gemini';
import Button from './Button';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: 'Saudações, viajante! Eu sou Gandalf, seu guia pelas terras da Inteligência Artificial. Que desafios seu reino enfrenta hoje que requerem nossa sabedoria?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      const responseText = await sendMessageToGemini(history, userMessage.text);
      
      const botMessage: ChatMessage = {
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[90vw] md:w-[400px] h-[500px] bg-dark-800 border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-brand-900/50 p-4 border-b border-white/5 flex justify-between items-center backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img 
                  src="https://img.icons8.com/?size=100&id=AeIJucZYFnTd&format=png&color=000000" 
                  alt="Gandalf" 
                  className="w-10 h-10 rounded-full border-2 border-brand-500/50 object-cover bg-white p-0.5"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-dark-800 rounded-full"></span>
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">Gandalf Digital</h3>
                <p className="text-xs text-brand-300">Guia de Estratégia</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-dark-900/50">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-brand-600 text-white rounded-br-none' 
                      : 'bg-dark-700 text-gray-200 rounded-bl-none border border-white/5 shadow-sm'
                  }`}
                >
                  {msg.role === 'model' && (
                    <span className="block text-xs text-brand-400 font-bold mb-1 opacity-70">Gandalf</span>
                  )}
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-dark-700 text-brand-400 p-3 rounded-2xl rounded-bl-none border border-white/5">
                  <Loader2 size={16} className="animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-3 bg-dark-800 border-t border-white/10">
            <div className="relative flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Fale com o guia..."
                className="w-full bg-dark-900 text-white placeholder-gray-500 rounded-xl py-3 pl-4 pr-12 text-sm border border-white/10 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 transition-all"
              />
              <button 
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className="absolute right-2 p-1.5 bg-brand-600 hover:bg-brand-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex items-center justify-center w-14 h-14 rounded-full shadow-lg shadow-brand-500/20 transition-all duration-300 hover:scale-110 overflow-hidden ${isOpen ? 'bg-dark-700 text-white rotate-90' : 'bg-brand-600 text-white'}`}
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <img 
            src="https://img.icons8.com/?size=100&id=AeIJucZYFnTd&format=png&color=000000" 
            alt="Gandalf" 
            className="w-full h-full object-cover bg-white p-1"
          />
        )}
      </button>
    </div>
  );
};

export default ChatWidget;