export default function Banner() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-[#5f4b3b] to-[#4a3a2f] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Transforme seu evento em uma lembrança eterna
        </h2>
        
        <p className="text-lg lg:text-xl mb-8 leading-relaxed">
          Cada convite é uma obra de arte única, criada especialmente para você. 
          Combinamos criatividade, qualidade e atenção aos detalhes para garantir 
          que seu evento seja inesquecível desde o primeiro convite.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Design Personalizado</h3>
            <p className="text-sm opacity-90">
              Cada convite é único e reflete a personalidade do seu evento
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Qualidade Premium</h3>
            <p className="text-sm opacity-90">
              Materiais de alta qualidade e acabamentos especiais
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💝</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Feito com Amor</h3>
            <p className="text-sm opacity-90">
              Cada detalhe é pensado com carinho para seu momento especial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

