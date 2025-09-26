'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const schema = yup.object({
  nome: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  celular: yup.string().required('Celular é obrigatório'),
  mensagem: yup.string().required('Mensagem é obrigatória'),
});

type FormData = yup.InferType<typeof schema>;

export default function ContatoClient() {
  const [loading, setLoading] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const handleWhatsAppSubmit = (data: FormData) => {
    const texto = `Olá, meu nome é ${data.nome}. ${data.mensagem} Meu email: ${data.email}. Meu celular: ${data.celular}`;
    const numeroWhatsapp = "5531971750654";
    const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(texto)}`;
    
    window.open(urlWhatsapp, '_blank');
  };

  const handleEmailSubmit = async (data: FormData) => {
    setLoading(true);
    
    try {
      // Aqui você pode integrar com EmailJS ou outra API
      // Por enquanto, vamos simular o envio
      console.log('Dados do formulário:', data);
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Mensagem enviada com sucesso!');
      reset();
    } catch {
      toast.error('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#5f4b3b] mb-6">
              Contato Bolacha Doce - Orçamento Convites Personalizados BH
            </h1>
            <p className="text-lg text-[#5f4b3b] max-w-2xl mx-auto leading-relaxed">
              Preencha o formulário abaixo e escolha como deseja enviar sua mensagem.
            </p>
          </div>
          
          <div className="bg-[#fce6d4] p-8 rounded-2xl">
            <form onSubmit={handleSubmit(handleEmailSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-semibold text-[#5f4b3b] mb-2">
                    Nome *
                  </label>
                  <input
                    {...register('nome')}
                    type="text"
                    id="nome"
                    className="w-full p-4 rounded-lg border-2 border-[#5f4b3b] bg-white text-[#5f4b3b] focus:outline-none focus:ring-2 focus:ring-[#5f4b3b]"
                    placeholder="Seu nome completo"
                  />
                  {errors.nome && (
                    <p className="text-red-600 text-sm mt-1">{errors.nome.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#5f4b3b] mb-2">
                    Email *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className="w-full p-4 rounded-lg border-2 border-[#5f4b3b] bg-white text-[#5f4b3b] focus:outline-none focus:ring-2 focus:ring-[#5f4b3b]"
                    placeholder="seuemail@exemplo.com"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label htmlFor="celular" className="block text-sm font-semibold text-[#5f4b3b] mb-2">
                  Celular *
                </label>
                <input
                  {...register('celular')}
                  type="tel"
                  id="celular"
                  className="w-full p-4 rounded-lg border-2 border-[#5f4b3b] bg-white text-[#5f4b3b] focus:outline-none focus:ring-2 focus:ring-[#5f4b3b]"
                  placeholder="(00) 00000-0000"
                />
                {errors.celular && (
                  <p className="text-red-600 text-sm mt-1">{errors.celular.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="mensagem" className="block text-sm font-semibold text-[#5f4b3b] mb-2">
                  Mensagem *
                </label>
                <textarea
                  {...register('mensagem')}
                  id="mensagem"
                  rows={5}
                  className="w-full p-4 rounded-lg border-2 border-[#5f4b3b] bg-white text-[#5f4b3b] focus:outline-none focus:ring-2 focus:ring-[#5f4b3b]"
                  placeholder="Escreva sua mensagem aqui..."
                />
                {errors.mensagem && (
                  <p className="text-red-600 text-sm mt-1">{errors.mensagem.message}</p>
                )}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button 
                  type="button"
                  onClick={handleSubmit(handleWhatsAppSubmit)}
                  className="flex-1 bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-700 transition-colors duration-300 hover:scale-105 transform"
                >
                  Enviar via WhatsApp
                </button>
                
                <button 
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-[#5f4b3b] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#4a3a2f] transition-colors duration-300 hover:scale-105 transform disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Enviando...' : 'Enviar via E-mail'}
                </button>
              </div>
            </form>
          </div>

          {/* Informações de Contato */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#fce6d4] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="text-xl font-semibold text-[#5f4b3b] mb-2">Email</h3>
              <p className="text-[#5f4b3b]">contato@bolachadoce.com.br</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#fce6d4] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-[#5f4b3b] mb-2">WhatsApp</h3>
              <p className="text-[#5f4b3b]">(31) 97175-0654</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#fce6d4] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-semibold text-[#5f4b3b] mb-2">Localização</h3>
              <p className="text-[#5f4b3b]">Belo Horizonte - MG</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
