import { 
  ShoppingBag, 
  Menu as MenuIcon, 
  Instagram, 
  Phone, 
  Clock, 
  MapPin, 
  Truck, 
  Heart, 
  Star, 
  CheckCircle2, 
  ChevronRight, 
  Maximize2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

// Common links
const WHATSAPP_LINK = "https://wa.me/5538999070140";
const MENU_LINK = "#cardapio";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#0f0f0f]/95 backdrop-blur-md py-4 border-b border-white/5 shadow-2xl' : 'bg-transparent py-10'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group active:scale-95 transition-transform">
          <span className="text-2xl">🍔</span>
          <h1 className="text-xl md:text-2xl font-black font-display tracking-tighter uppercase whitespace-nowrap leading-none">
            <span className="text-white">Petiscos</span> <span className="text-burguer-yellow">Burguer</span>
          </h1>
        </a>
        
        <div className="hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.25em] text-white/40">
          <a href="#mais-pedidos" className="hover:text-burguer-yellow transition-colors relative group/link">
            Mais Pedidos
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-burguer-red transition-all group-hover/link:w-full" />
          </a>
          <a href="#combos" className="hover:text-burguer-yellow transition-colors relative group/link">
            Combos
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-burguer-red transition-all group-hover/link:w-full" />
          </a>
          <a href="#diferenciais" className="hover:text-burguer-yellow transition-colors relative group/link">
            Diferenciais
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-burguer-red transition-all group-hover/link:w-full" />
          </a>
          <a href="#localizacao" className="hover:text-burguer-yellow transition-colors relative group/link">
            Localização
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-burguer-red transition-all group-hover/link:w-full" />
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a 
            href={WHATSAPP_LINK} 
            className="flex items-center gap-2 bg-burguer-red hover:bg-red-700 text-white font-black px-8 py-3.5 rounded-2xl shadow-xl shadow-burguer-red/30 transition-all hover:scale-105 active:scale-95"
          >
            <span className="uppercase text-xs tracking-widest font-black">Fazer Pedido</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </nav>
  );
};

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 px-4">
      <AnimatePresence>
        {showTooltip && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white text-burguer-dark px-4 py-2 rounded-2xl shadow-2xl text-xs font-bold relative mb-1"
          >
            Dúvidas? Fale com a equipe
            <div className="absolute -bottom-1 right-5 w-3 h-3 bg-white rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.a
        href={WHATSAPP_LINK}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
        aria-label="Suporte WhatsApp"
      >
        <Phone className="w-6 h-6 fill-current" />
      </motion.a>
    </div>
  );
};

const AuthorityBadge = ({ text, icon: Icon }: { text: string; icon: any }) => (
  <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
    <Icon className="w-4 h-4 text-burguer-yellow" />
    <span className="text-[10px] font-black uppercase tracking-wider text-white/80">{text}</span>
  </div>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[#0f0f0f]">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-burguer-red/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-burguer-yellow/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-display leading-[1.1] mb-6 uppercase tracking-tighter">
              <span className="text-white">O MELHOR</span> <br />
              <span className="text-burguer-yellow">HAMBÚRGUER</span> <br />
              <span className="text-white">DE SALINAS</span>
            </h1>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              <AuthorityBadge icon={Star} text="4.8 no Google" />
              <AuthorityBadge icon={Truck} text="Entrega Rápida" />
              <AuthorityBadge icon={CheckCircle2} text="100% Artesanal" />
            </div>
            
            <p className="text-base md:text-lg text-white/50 mb-10 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed">
              O autêntico hambúrguer de Salinas agora com sistema de pedido online. Sem esperas, sem erros, direto para a nossa grelha.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <motion.a 
                href={WHATSAPP_LINK}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto bg-burguer-red text-white text-base font-black px-10 py-5 rounded-3xl shadow-2xl shadow-burguer-red/40 flex items-center justify-center gap-3 group"
              >
                FAZER PEDIDO ONLINE
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a 
                href={MENU_LINK}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto bg-white/5 border border-white/20 hover:bg-white/10 text-white text-base font-black px-10 py-5 rounded-3xl flex items-center justify-center"
              >
                VER CARDÁPIO
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative group w-full max-w-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1000" 
                alt="Hambúrguer Petiscos" 
                className="w-full h-auto object-contain drop-shadow-[0_20px_60px_rgba(179,0,0,0.3)] relative z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 bg-burguer-yellow text-burguer-dark w-28 h-28 md:w-40 md:h-40 rounded-full flex flex-col items-center justify-center rotate-12 shadow-2xl z-20 border-[6px] border-[#0f0f0f] group-hover:rotate-0 transition-transform duration-700">
                <span className="text-[10px] md:text-xs font-black uppercase tracking-tighter">A partir de</span>
                <span className="text-2xl md:text-4xl font-black">R$25</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Steps = () => (
  <section className="py-12 border-y border-white/5 bg-white/2 backdrop-blur-sm relative z-20">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
        <div className="py-4 md:px-8 flex flex-col items-center gap-3 group">
          <div className="text-3xl grayscale group-hover:grayscale-0 transition-all">🍔</div>
          <p className="text-sm font-black uppercase tracking-widest leading-none">
            <span className="text-burguer-yellow mr-2">01.</span> Escolha seu Burger
          </p>
        </div>
        <div className="py-4 md:px-8 flex flex-col items-center gap-3 group">
          <div className="text-3xl grayscale group-hover:grayscale-0 transition-all">💳</div>
          <p className="text-sm font-black uppercase tracking-widest leading-none">
            <span className="text-burguer-yellow mr-2">02.</span> Pague Online
          </p>
        </div>
        <div className="py-4 md:px-8 flex flex-col items-center gap-3 group">
          <div className="text-3xl grayscale group-hover:grayscale-0 transition-all">🚀</div>
          <p className="text-sm font-black uppercase tracking-widest leading-none">
            <span className="text-burguer-yellow mr-2">03.</span> Receba em Casa
          </p>
        </div>
      </div>
    </div>
  </section>
);


interface ProductProps {
  title: string;
  price: string;
  image: string;
  rating: string;
}

const ProductCard = (props: any) => {
  const { title, price, image, rating } = props;
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-burguer-card rounded-[2.5rem] p-6 border border-white/5 group relative overflow-hidden"
    >
      <div className="absolute top-5 right-5 flex items-center gap-1 bg-burguer-dark/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 z-10 text-burguer-yellow">
        <Star className="w-3.5 h-3.5 fill-current" />
        <span className="text-xs font-bold text-white">{rating}</span>
      </div>
      
      <div className="aspect-square overflow-hidden rounded-3xl mb-6">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
      </div>
      
      <h3 className="text-xl font-black uppercase mb-2 tracking-tight">{title}</h3>
      <div className="flex justify-between items-center mt-4">
        <span className="text-2xl font-black text-burguer-yellow">R${price}</span>
        <motion.a 
          href={WHATSAPP_LINK}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-burguer-red p-3 rounded-2xl shadow-lg shadow-burguer-red/30"
        >
          <ShoppingBag className="w-5 h-5 text-white" />
        </motion.a>
      </div>
    </motion.div>
  );
};

const featuredProducts = [
  { id: 1, title: "Petisco Burger", price: "28.90", image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=80&w=500", rating: "4.9" },
  { id: 2, title: "Bacon Mania", price: "32.00", image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&q=80&w=500", rating: "4.8" },
  { id: 3, title: "Cheddar Double", price: "35.50", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=500", rating: "5.0" },
  { id: 4, title: "X-Tudo Mega", price: "39.90", image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=500", rating: "4.9" },
  { id: 5, title: "Chicken Crispy", price: "26.00", image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&q=80&w=500", rating: "4.7" },
  { id: 6, title: "Combo Kids", price: "24.50", image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&q=80&w=500", rating: "4.8" },
];

const MostOrdered = () => (
  <section id="mais-pedidos" className="py-24 bg-[#0f0f0f]">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-burguer-red text-sm font-black uppercase tracking-[0.3em] mb-3">Favoritos da Casa</h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase font-display leading-[0.9]">Os Mais Pedidos</h3>
        </div>
        <p className="max-w-xs text-white/50 text-sm leading-relaxed">
          Nossa curadoria dos sabores que conquistaram o coração e o paladar dos nossos clientes.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProducts.map((p) => (
          <ProductCard key={p.id} title={p.title} price={p.price} image={p.image} rating={p.rating} />
        ))}
      </div>
    </div>
  </section>
);



const Combos = () => (
  <section id="combos" className="py-24 relative overflow-hidden bg-[#0f0f0f]">
    <div className="container mx-auto px-6">
      <div className="bg-gradient-to-br from-burguer-red to-[#800000] rounded-[3rem] p-8 md:p-16 flex flex-col md:grid md:grid-cols-2 items-center gap-12 border border-white/20 relative shadow-[0_20px_80px_rgba(179,0,0,0.3)]">
        <div className="relative z-10">
          <h3 className="text-burguer-yellow text-sm font-black uppercase tracking-[0.3em] mb-4 underline decoration-burguer-yellow/40 underline-offset-8">Super Oferta</h3>
          <h2 className="text-4xl lg:text-7xl font-black uppercase mb-6 leading-none">COMBOS <br /> EXCLUSIVOS</h2>
          <p className="text-white/80 text-lg mb-10 max-w-sm">
            Hambúrguer + Batata G + Refri 500ml. Economia real de até R$15,00.
          </p>
          
          <div className="space-y-4 mb-10">
            <div className="flex items-center gap-4 bg-black/20 p-4 rounded-3xl border border-white/10">
               <div className="bg-burguer-yellow text-burguer-dark font-black p-2 rounded-xl text-xs">-R$ 10</div>
               <div>
                  <h4 className="font-bold text-white uppercase italic">Combo Casal</h4>
                  <p className="text-sm text-white/60">2 Burgers + 2 Batatas + 1 Refri 1L</p>
               </div>
            </div>
            <div className="flex items-center gap-4 bg-black/20 p-4 rounded-3xl border border-white/10">
               <div className="bg-burguer-yellow text-burguer-dark font-black p-2 rounded-xl text-xs">-R$ 15</div>
               <div>
                  <h4 className="font-bold text-white uppercase italic">Combo Família</h4>
                  <p className="text-sm text-white/60">4 Burgers + 4 Batatas + 2 Refris 1L</p>
               </div>
            </div>
          </div>

          <a href={WHATSAPP_LINK} className="inline-flex items-center gap-3 bg-burguer-yellow text-burguer-dark px-10 py-5 rounded-3xl font-black text-lg transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-black/20">
            APROVEITAR AGORA
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
        
        <div className="relative h-full flex items-center justify-center">
          <motion.img 
            initial={{ rotate: -5 }}
            animate={{ rotate: 5 }}
            transition={{ repeat: Infinity, duration: 4, repeatType: "mirror", ease: "easeInOut" }}
            src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=800" 
            alt="Combo Especial" 
            className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] rounded-3xl"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  </section>
);

const Feature = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="flex flex-col gap-4 p-8 bg-burguer-card rounded-[2rem] border border-white/5 hover:bg-white/5 transition-colors">
    <div className="bg-burguer-red/20 p-4 rounded-2xl w-fit">
      <Icon className="w-8 h-8 text-burguer-red" />
    </div>
    <h4 className="text-xl font-black uppercase text-burguer-yellow italic">{title}</h4>
    <p className="text-white/60 text-sm leading-relaxed">{description}</p>
  </div>
);

const Differentials = () => (
  <section id="diferenciais" className="py-24 bg-[#0f0f0f]">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-burguer-red text-sm font-black uppercase tracking-[0.3em] mb-4">Por que escolher a gente?</h2>
        <h3 className="text-4xl md:text-5xl font-black uppercase font-display italic">Diferenciais <span className="text-burguer-yellow">Petiscos</span></h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Feature 
          icon={Truck} 
          title="Entrega Rápida" 
          description="Seu hambúrguer quentinho em menos de 40 minutos direto na sua porta."
        />
        <Feature 
          icon={CheckCircle2} 
          title="Artesanal" 
          description="Blend de carnes selecionadas e pães brioche produzidos diariamente."
        />
        <Feature 
          icon={Heart} 
          title="Feito com Amor" 
          description="Cuidado em cada detalhe, da montagem à embalagem final para você."
        />
        <Feature 
          icon={Phone} 
          title="Suporte 24/7" 
          description="Atendimento direto e personalizado via WhatsApp para tirar suas dúvidas."
        />
      </div>
    </div>
  </section>
);

const Testimonial = ({ name, comment, rating }: { name: string, comment: string, rating: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-burguer-card p-10 rounded-[3rem] border border-white/5 relative group hover:bg-white/[0.03] transition-colors"
  >
    <div className="flex gap-1 mb-6">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-burguer-yellow fill-current" />
      ))}
    </div>
    <p className="text-xl italic text-white/80 mb-10 leading-relaxed font-light line-clamp-4 group-hover:text-white transition-colors">
      "{comment}"
    </p>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-2xl bg-burguer-red/20 flex items-center justify-center font-black text-burguer-red text-lg">
        {name.charAt(0)}
      </div>
      <div className="flex flex-col">
        <h5 className="font-black text-sm uppercase tracking-widest leading-none mb-1">{name}</h5>
        <span className="text-[10px] uppercase tracking-widest font-bold text-white/30">Cliente Verificado</span>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => (
  <section className="py-24 bg-[#0f0f0f] relative overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-burguer-red text-sm font-black uppercase tracking-[0.4em] mb-4 italic">Social Proof</h2>
        <h3 className="text-4xl md:text-6xl font-black uppercase font-display leading-tight italic">
          O QUE DIZEM <br /> <span className="text-burguer-yellow">NOSSOS CLIENTES</span>
        </h3>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Testimonial 
          name="Rodrigo Silva" 
          comment="Melhor hambúrguer da cidade e o site é muito fácil de usar! Tudo chegou perfeito." 
          rating={5}
        />
        <Testimonial 
          name="Amanda Costa" 
          comment="Pedido chegou quente e muito rápido. Recomendo o X-Tudo! Sabor inigualável." 
          rating={5}
        />
        <Testimonial 
          name="Junior Oliveira" 
          comment="O sistema de pedido online é perfeito. Prático e rápido. Não troco por nada!" 
          rating={5}
        />
      </div>
    </div>
  </section>
);

const Location = () => (
  <section id="localizacao" className="py-24 bg-[#0f0f0f] overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="bg-burguer-card rounded-[3rem] p-8 md:p-16 border border-white/5 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8">
          <div>
            <h2 className="text-burguer-red text-sm font-black uppercase tracking-[0.3em] mb-4 underline decoration-burguer-red/40">Onde estamos</h2>
            <h3 className="text-4xl lg:text-5xl font-black uppercase mb-6 leading-none italic">SÃO FIDÉLIS - <span className="text-burguer-yellow uppercase">SALINAS/MG</span></h3>
            <div className="flex items-start gap-4 text-white/70">
              <MapPin className="w-6 h-6 text-burguer-red mt-1 shrink-0" />
              <p className="text-lg">Rua Beira Rio, Nº 235, São Fidélis<br />Salinas/MG - CEP 39560-000</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-white/70">
            <Clock className="w-6 h-6 text-burguer-yellow shrink-0" />
            <p className="text-lg">Todos os dias: <span className="font-bold text-white">14:00 às 23:59</span></p>
          </div>

          <a href={WHATSAPP_LINK} className="inline-flex items-center gap-3 bg-burguer-red text-white px-10 py-5 rounded-3xl font-black text-lg transition-transform hover:scale-105 active:scale-95 shadow-2xl shadow-burguer-red/20">
            CHAMAR NO WHATSAPP
            <Phone className="w-5 h-5" />
          </a>
        </div>
        
        <div className="flex-1 w-full h-[300px] md:h-[450px] bg-burguer-dark rounded-[2rem] overflow-hidden border border-white/10 relative grayscale hover:grayscale-0 transition-all duration-700">
          {/* Mock Map or Location Image */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-burguer-dark via-transparent to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-burguer-red p-4 rounded-full animate-bounce shadow-2xl">
              <MapPin className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => {
  const LOGO_URL = "https://raw.githubusercontent.com/diegoarcanjo35/Petisco-Burguer-Imagens/main/Logo.png";
  return (
    <footer className="bg-[#0f0f0f] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 px-6">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <a href="#" className="flex items-center gap-5 group">
              <div className="bg-burguer-red p-2 rounded-2xl shadow-2xl shadow-burguer-red/20 group-hover:rotate-6 transition-transform">
                <img src={LOGO_URL} alt="Logo" className="w-12 h-12 object-contain" referrerPolicy="no-referrer" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-2xl md:text-3xl font-black font-display tracking-tighter uppercase whitespace-nowrap">
                  Petiscos <span className="text-burguer-yellow">Burguer</span>
                </span>
                <span className="text-[11px] uppercase tracking-[0.4em] font-black text-burguer-red mt-1 ml-1 group-hover:text-white transition-colors">Premium Delivery</span>
              </div>
            </a>
            <p className="text-white/40 max-w-sm leading-relaxed text-sm">
              Nascemos para redefinir o conceito de hambúrguer artesanal. Qualidade, sabor e um sistema de vendas 100% focado na sua praticidade.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/petiscos_burguer_" className="w-14 h-14 rounded-3xl bg-white/[0.03] border border-white/5 flex items-center justify-center hover:bg-burguer-red transition-all group">
                <Instagram className="w-6 h-6 text-burguer-yellow group-hover:text-white" />
              </a>
              <a href={WHATSAPP_LINK} className="w-14 h-14 rounded-3xl bg-white/[0.03] border border-white/5 flex items-center justify-center hover:bg-[#25D366] transition-all group">
                <Phone className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        
        <div>
          <h4 className="text-burguer-yellow font-black uppercase text-sm tracking-widest mb-6 italic">Links Úteis</h4>
          <ul className="space-y-4 text-white/60 font-medium">
            <li><a href="#mais-pedidos" className="hover:text-white transition-colors">Cardápio</a></li>
            <li><a href="#combos" className="hover:text-white transition-colors">Combos</a></li>
            <li><a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a></li>
            <li><a href={WHATSAPP_LINK} className="hover:text-white transition-colors">Fazer Pedido</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-burguer-yellow font-black uppercase text-sm tracking-widest mb-6 italic">Contato</h4>
          <ul className="space-y-4 text-white/40 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-burguer-red" />
              (38) 9 9907-0140
            </li>
            <li className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-burguer-red" />
              14:00 às 23:59
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-burguer-red" />
              Salinas, MG
            </li>
          </ul>
        </div>
      </div>
      
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-white/20 uppercase tracking-[0.2em] px-6">
        <p>© 2026 Petiscos Burguer. Todos os direitos reservados.</p>
        <p className="flex items-center gap-1 leading-none">
          Made with <Heart className="w-3 h-3 text-burguer-red fill-current" /> in Salinas
        </p>
      </div>
    </div>
  </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white selection:bg-burguer-yellow selection:text-burguer-dark">
      <Navbar />
      <Hero />
      <Steps />
      <MostOrdered />
      <Combos />
      <Differentials />
      <Testimonials />
      <Location />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
