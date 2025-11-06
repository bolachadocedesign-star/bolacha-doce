'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, FormEvent } from "react";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const phoneNumber = "5531971750654";
    
    // Formatar mensagem para WhatsApp
    const message = `*Nova Mensagem do Formulário de Contato*

*Nome:* ${formData.nome || 'Não informado'}
*Email:* ${formData.email || 'Não informado'}
*Telefone:* ${formData.telefone || 'Não informado'}
*Assunto:* ${formData.assunto || 'Não informado'}

*Mensagem:*
${formData.mensagem || 'Sem mensagem'}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    
    // Limpar formulário após enviar
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      mensagem: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <WhatsAppButton />
      
      <section className="pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-[0.2em] uppercase mb-4 sm:mb-6 text-primary">
              Contato
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-foreground px-2">
              Reserve um espaço no seu dia para falar sobre você e seus planos<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>e descobrir um universo criativo de possibilidades.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 max-w-2xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <Input 
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Nome" 
                  className="bg-white border-muted-foreground/30"
                  required
                />
              </div>
              <div>
                <Input 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email" 
                  type="email" 
                  className="bg-white border-muted-foreground/30"
                  required
                />
              </div>
            </div>
            
            <div>
              <Input 
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                placeholder="Telefone" 
                type="tel" 
                className="bg-white border-muted-foreground/30"
                required
              />
            </div>
            
            <div>
              <Input 
                name="assunto"
                value={formData.assunto}
                onChange={handleChange}
                placeholder="Assunto" 
                className="bg-white border-muted-foreground/30"
                required
              />
            </div>
            
            <div>
              <Textarea 
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                placeholder="Mensagem" 
                rows={6}
                className="bg-white border-muted-foreground/30 resize-none"
                required
              />
            </div>
            
            <div className="text-center pt-4">
              <Button 
                type="submit" 
                className="font-serif tracking-[0.2em] uppercase px-12 bg-primary hover:bg-terracota-dark"
              >
                Enviar
              </Button>
            </div>
          </form>
          
          <div className="mt-12 sm:mt-16 md:mt-20 text-center">
            <h2 className="font-serif text-xl sm:text-2xl tracking-[0.2em] uppercase mb-4 sm:mb-6 text-foreground">
              Belo Horizonte • MG
            </h2>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contato;
