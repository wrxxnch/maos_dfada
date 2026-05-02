/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { 
  Instagram, 
  MapPin, 
  Clock, 
  Phone, 
  Menu, 
  X, 
  ChevronRight, 
  Sparkles, 
  Heart, 
  Star,
  Award
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();

  const starY1 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const starY2 = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const starY3 = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const starRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const [formData, setFormData] = useState({
    name: "",
    service: "Extensões em Gel",
    date: "",
    time: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "5531983895527";
    const message = `Olá Studio Mãos de Fada! Gostaria de agendar um horário:%0A%0A*Nome:* ${formData.name}%0A*Serviço:* ${formData.service}%0A*Data:* ${formData.date}%0A*Horário:* ${formData.time}%0A%0AAguardo confirmação!`;
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Início", "Serviços", "Sobre", "Galeria"];

  const services = [
    {
      title: "Extensões em Gel",
      description: "Unhas longas, resistentes e com acabamento natural impecável.",
      price: "A partir de R$ 150",
      icon: <Sparkles className="w-6 h-6 text-lilac-500" />
    },
    {
      title: "Nails Art Artística",
      description: "Desenhos feitos à mão, pedrarias e efeitos exclusivos para sua essência.",
      price: "Consulte Designs",
      icon: <Star className="w-6 h-6 text-lilac-500" />
    },
    {
      title: "Blindagem de Diamante",
      description: "Proteção extra para unhas naturais, garantindo brilho e durabilidade.",
      price: "A partir de R$ 80",
      icon: <Award className="w-6 h-6 text-lilac-500" />
    },
    {
      title: "Manicure & Pedicure",
      description: "Cutilagem russa e esmaltação premium para o cuidado diário.",
      price: "A partir de R$ 50",
      icon: <Heart className="w-6 h-6 text-lilac-500" />
    }
  ];

  const galleryImages = [
    'https://instagram.fbhz5-1.fna.fbcdn.net/v/t51.82787-15/683278687_17870570841668050_4341788896674183093_n.webp?_nc_cat=102&ig_cache_key=Mzg4NzU1NjI2NTQyNTU1MjI5Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=0GNEkitoa-4Q7kNvwHPjBhZ&_nc_oc=Adrm4p_42rKA_w1hJ9coGF3o4ZNMtggC1op0HY9zC8vxURDRoC7PoIFPIfutPt6KabE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbhz5-1.fna&_nc_gid=XJ3He7iA1GqdOaAnmsowQg&_nc_ss=7a22e&oh=00_Af5OGFTu1PuyYRSIqIe9FHoClG598wU90Pc9e7f0nuI6Jw&oe=69FBF499',
    'https://instagram.fbhz5-1.fna.fbcdn.net/v/t51.82787-15/622624242_17848990944668050_4241519938912569077_n.webp?_nc_cat=110&ig_cache_key=MzgxODk2NTA5NjIzMjE4NTk2OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=AfsPcOqTm_kQ7kNvwFrK73t&_nc_oc=AdpunrWIqpeMS8wQWq55iRiypEBUWYtOGYgAFB1I4Qw7ODBwM_0VL5tyVWf-OO4NawM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbhz5-1.fna&_nc_gid=hOyOYzYMa8NZO0qMaDLphA&_nc_ss=7a22e&oh=00_Af794WXfCJwFZRpsRMHjJRE9DKxpj-3CmcpdVCOOHypVbA&oe=69FBF94F',
    'https://instagram.fbhz5-1.fna.fbcdn.net/v/t51.82787-15/625019825_17850304218668050_3768722419551072474_n.webp?_nc_cat=108&ig_cache_key=MzgyMjMzMDc0MTE5NTI4ODg2Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=hOFK6gEym4UQ7kNvwG21ai_&_nc_oc=Adq_0_Cpc0FOzjYzNHzw05ZCz6PRycPFxQbdgIGfAHnzI-_EUOOpeiBpxiQe4oLWIXk&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbhz5-1.fna&_nc_gid=X_BQelxQRhj6dW5Nz-jxjQ&_nc_ss=7a22e&oh=00_Af68gja_vi3kG17LYmq83TrRjpzAG9CaAy8zqG-HMFo6JA&oe=69FBD030',
    'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1516760882325-f44c5eb14347?q=80&w=600&auto=format&fit=crop'
  ];

  return (
    <div className="min-h-screen bg-lilac-50 selection:bg-lilac-200 selection:text-lilac-900 relative">
      {/* Global Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src="/holographic_bg.webp" 
          alt="" 
          className="w-full h-full object-cover opacity-20 mix-blend-multiply"
          referrerPolicy="no-referrer"
        />
        
        {/* Animated Stars */}
        <motion.img 
          style={{ y: starY1, rotate: starRotate }}
          src="https://static.vecteezy.com/system/resources/thumbnails/044/185/689/small_2x/star-sparkle-icon-futuristic-shapes-christmas-stars-icons-flashes-from-fireworks-png.png"
          className="absolute top-[10%] left-[5%] w-32 h-32 opacity-10 mix-blend-multiply"
          referrerPolicy="no-referrer"
        />
        <motion.img 
          style={{ y: starY2, rotate: starRotate }}
          src="https://static.vecteezy.com/system/resources/thumbnails/044/185/689/small_2x/star-sparkle-icon-futuristic-shapes-christmas-stars-icons-flashes-from-fireworks-png.png"
          className="absolute top-[40%] right-[10%] w-48 h-48 opacity-[0.08] mix-blend-multiply"
          referrerPolicy="no-referrer"
        />
        <motion.img 
          style={{ y: starY3, rotate: starRotate }}
          src="https://static.vecteezy.com/system/resources/thumbnails/044/185/689/small_2x/star-sparkle-icon-futuristic-shapes-christmas-stars-icons-flashes-from-fireworks-png.png"
          className="absolute top-[70%] left-[15%] w-24 h-24 opacity-[0.12] mix-blend-multiply"
          referrerPolicy="no-referrer"
        />
        <motion.img 
          style={{ y: starY1, rotate: starRotate }}
          src="https://static.vecteezy.com/system/resources/thumbnails/044/185/689/small_2x/star-sparkle-icon-futuristic-shapes-christmas-stars-icons-flashes-from-fireworks-png.png"
          className="absolute bottom-[10%] right-[20%] w-40 h-40 opacity-[0.05] mix-blend-multiply"
          referrerPolicy="no-referrer"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-lilac-50/10 via-transparent to-lilac-50/10" />
      </div>

      {/* Navigation */}
      <nav 
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass py-2" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-serif font-bold text-lilac-900 leading-none">Studio</span>
            <span className="text-sm wonderland text-lilac-600 -mt-1 tracking-widest uppercase">Mãos de Fada</span>
          </div>

            <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-xs font-medium text-slate-700 hover:text-lilac-500 transition-colors uppercase tracking-widest wonderland"
              >
                {item}
              </a>
            ))}
            <a 
              href="#agendamento"
              className="bg-lilac-600 text-white px-6 py-2 rounded-full text-xs font-medium hover:bg-lilac-700 transition-all shadow-lg shadow-lilac-200 wonderland tracking-widest uppercase"
            >
              Agendar
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-lilac-900 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8"
          >
            {navItems.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-serif text-lilac-900 hover:text-lilac-500"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="início" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-5xl md:text-8xl font-serif font-bold text-lilac-950 mb-6 leading-[1.1]">
              A Arte em Suas <span className="text-lilac-500">Mãos</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              No Studio Mãos de Fada, cada detalhe é uma obra de arte. Especialista em Nails Art de alto padrão e cuidados exclusivos.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#agendamento"
                className="bg-lilac-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-lilac-700 transition-all shadow-xl shadow-lilac-200 flex items-center group"
              >
                Agendar Agora <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#serviços"
                className="px-8 py-4 rounded-full font-semibold border border-lilac-200 text-lilac-700 hover:bg-lilac-50 transition-all text-center"
              >
                Conheça os Serviços
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
              <img 
                src="https://instagram.fbhz5-1.fna.fbcdn.net/v/t51.82787-15/683278687_17870570841668050_4341788896674183093_n.webp?_nc_cat=102&ig_cache_key=Mzg4NzU1NjI2NTQyNTU1MjI5Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=0GNEkitoa-4Q7kNvwHPjBhZ&_nc_oc=Adrm4p_42rKA_w1hJ9coGF3o4ZNMtggC1op0HY9zC8vxURDRoC7PoIFPIfutPt6KabE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbhz5-1.fna&_nc_gid=XJ3He7iA1GqdOaAnmsowQg&_nc_ss=7a22e&oh=00_Af5OGFTu1PuyYRSIqIe9FHoClG598wU90Pc9e7f0nuI6Jw&oe=69FBF499" 
                alt="Nail Art Showcase" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="serviços" className="py-24 bg-white/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm wonderland text-lilac-500 tracking-[0.3em] uppercase mb-4">O que fazemos de melhor</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-lilac-950">Nossos Serviços</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-dark p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  {service.icon}
                </div>
                <h4 className="text-xl font-serif font-bold text-lilac-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                <p className="text-lilac-600 font-bold wonderland text-sm tracking-wider uppercase">{service.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[80px] overflow-hidden aspect-square border-4 border-lilac-200">
              <img 
                src="https://instagram.fbhz5-1.fna.fbcdn.net/v/t51.82787-15/622624242_17848990944668050_4241519938912569077_n.webp?_nc_cat=110&ig_cache_key=MzgxODk2NTA5NjIzMjE4NTk2OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=AfsPcOqTm_kQ7kNvwFrK73t&_nc_oc=AdpunrWIqpeMS8wQWq55iRiypEBUWYtOGYgAFB1I4Qw7ODBwM_0VL5tyVWf-OO4NawM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbhz5-1.fna&_nc_gid=hOyOYzYMa8NZO0qMaDLphA&_nc_ss=7a22e&oh=00_Af794WXfCJwFZRpsRMHjJRE9DKxpj-3CmcpdVCOOHypVbA&oe=69FBF94F" 
                alt="Founder" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm wonderland text-lilac-500 tracking-[0.3em] uppercase mb-4 text-left">A Artista</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-lilac-950 mb-6">Criando com Paixão</h3>
            <p className="text-slate-600 mb-6 text-lg italic leading-relaxed border-l-4 border-lilac-200 pl-6">
              "Minha missão é elevar a autoestima de cada cliente através de unhas que refletem sua verdadeira essência. Manicure por paixão, artista por vocação."
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Com mais de uma década dedicada ao universo do design de unhas, busco constantemente as tendências mais sofisticadas para oferecer um atendimento exclusivo em Contagem. Cada cliente que passa pelo Studio recebe não apenas um serviço, mas uma experiência de autocuidado e beleza.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-24 bg-lilac-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-sm wonderland text-lilac-200 tracking-[0.3em] uppercase mb-4">Inspirações</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold">Nosso Portfólio</h3>
            </div>
            <p className="text-lilac-200 max-w-sm mb-1">
              Confira alguns dos nossos trabalhos mais recentes e escolha sua próxima Nails Art.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, index) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer"
              >
                <img 
                  src={src} 
                  alt={`Nail Art ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-lilac-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                    <Instagram className="text-white" size={24} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href="https://www.instagram.com/_.studio_maos_dfada._" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-lilac-200 hover:text-white transition-colors"
            >
              <span className="wonderland tracking-widest uppercase text-sm">Ver mais no Instagram</span>
              <ChevronRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section id="agendamento" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-lilac-100/30 skew-y-3 origin-right -z-10" />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-[50px] shadow-2xl relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-sm wonderland text-lilac-600 tracking-[0.3em] uppercase mb-4">Seu momento</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-lilac-950 mb-8">Agende seu Horário</h3>
              <p className="text-slate-600 mb-10 text-lg">
                Escolha o serviço desejado e o melhor horário para você. Atendimento exclusivo e personalizado com hora marcada.
              </p>
              
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 text-left">
                <div className="flex flex-col space-y-2">
                  <label className="text-xs wonderland text-lilac-600 uppercase tracking-widest ml-2">Nome Completo</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome"
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-lilac-100 focus:outline-none focus:ring-2 focus:ring-lilac-400 transition-all font-sans"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-xs wonderland text-lilac-600 uppercase tracking-widest ml-2">Serviço</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-lilac-100 focus:outline-none focus:ring-2 focus:ring-lilac-400 transition-all font-sans appearance-none"
                  >
                    <option>Extensões em Gel</option>
                    <option>Nails Art Artística</option>
                    <option>Blindagem de Diamante</option>
                    <option>Manicure & Pedicure</option>
                  </select>
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-xs wonderland text-lilac-600 uppercase tracking-widest ml-2">Data</label>
                  <input 
                    type="date" 
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-lilac-100 focus:outline-none focus:ring-2 focus:ring-lilac-400 transition-all font-sans"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-xs wonderland text-lilac-600 uppercase tracking-widest ml-2">Horário</label>
                  <input 
                    type="time" 
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-lilac-100 focus:outline-none focus:ring-2 focus:ring-lilac-400 transition-all font-sans"
                  />
                </div>
                <div className="md:col-span-2">
                  <button type="submit" className="w-full bg-lilac-900 text-white px-10 py-5 rounded-full font-bold hover:bg-black transition-all shadow-xl shadow-lilac-200 wonderland tracking-widest uppercase text-sm">
                    Confirmar Solicitação
                  </button>
                </div>
              </form>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 border-t border-lilac-100 pt-10">
                <a 
                  href="https://wa.me/5531983895527" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-green-500 text-white px-10 py-5 rounded-full font-bold hover:bg-green-600 transition-all shadow-xl shadow-green-100 flex items-center justify-center"
                >
                  <Phone size={20} className="mr-3" /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-24 pb-12 border-t border-lilac-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16 mb-16">
          <div>
            <div className="flex flex-col mb-6">
              <span className="text-2xl font-serif font-bold text-lilac-900 leading-none">Studio</span>
              <span className="text-sm wonderland text-lilac-600 -mt-1 tracking-widest uppercase">Mãos de Fada</span>
            </div>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Elevando o conceito de manicure e design de unhas em Contagem. Sua beleza é nossa prioridade.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/_.studio_maos_dfada._" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-lilac-50 flex items-center justify-center text-lilac-600 hover:bg-lilac-600 hover:text-white transition-all"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.instagram.com/_.studio_maos_dfada._" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-lilac-50 flex items-center justify-center text-lilac-600 hover:bg-lilac-600 hover:text-white transition-all"
              >
                <Heart size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-serif font-bold text-lilac-900 text-xl">Navegação</h4>
            <ul className="space-y-4">
              {navItems.map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-slate-500 hover:text-lilac-600 transition-colors wonderland tracking-widest uppercase text-xs">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-serif font-bold text-lilac-900 text-xl">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 group">
                <MapPin className="text-lilac-500 mt-1 shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <p className="text-slate-500 text-sm leading-relaxed">
                  Rua Nice 200, <br/> Santa Cruz Industrial, Contagem
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="text-lilac-500 shrink-0" size={20} />
                <p className="text-slate-500 text-sm">Segunda à Sábado: 09h - 19h</p>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-lilac-500 shrink-0" size={20} />
                <a href="https://wa.me/5531983895527" target="_blank" rel="noopener noreferrer" className="text-slate-500 text-sm hover:text-lilac-600 transition-colors">(31) 98389-5527</a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-lilac-50 text-center">
          <p className="text-xs wonderland text-slate-400 tracking-[0.2em] uppercase">
            © 2024 Studio Mãos de Fada. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
