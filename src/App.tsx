/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  LayoutDashboard, 
  PlusSquare, 
  Search, 
  Bell, 
  History, 
  HelpCircle, 
  Anchor, 
  Ship, 
  TrendingUp, 
  TrendingDown, 
  Route, 
  ShieldCheck, 
  Settings, 
  MessageSquare,
  Package,
  Database,
  ArrowRight,
  Menu,
  Zap,
  Download,
  CreditCard,
  Timer,
  Calculator,
  Gavel,
  FileText,
  Upload,
  CheckCircle2,
  AlertCircle,
  Hash,
  Map as MapIcon,
  Navigation,
  Send
} from 'lucide-react';
import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---

type AppTab = 'match' | 'market' | 'vessels' | 'cargo' | 'tracking' | 'negotiation';
type GlobalView = 'landing' | 'how-it-works' | 'solutions' | 'pricing' | 'contact' | 'app';

// --- Shared Landing Components ---

const LandingHeader = ({ setView }: { setView: (v: GlobalView) => void }) => (
  <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant h-16 flex items-center px-8 justify-between">
    <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('landing')}>
      <Anchor className="text-primary size-6" />
      <span className="font-serif text-xl font-bold text-primary tracking-tight">ShipAI</span>
    </div>
    <nav className="hidden md:flex gap-8">
      <button onClick={() => setView('how-it-works')} className="font-mono text-[10px] font-bold text-on-surface-variant hover:text-primary transition-all uppercase tracking-widest">Nasıl Çalışır</button>
      <button onClick={() => setView('solutions')} className="font-mono text-[10px] font-bold text-on-surface-variant hover:text-primary transition-all uppercase tracking-widest">Çözümler</button>
      <button onClick={() => setView('pricing')} className="font-mono text-[10px] font-bold text-on-surface-variant hover:text-primary transition-all uppercase tracking-widest">Fiyatlandırma</button>
      <button onClick={() => setView('contact')} className="font-mono text-[10px] font-bold text-on-surface-variant hover:text-primary transition-all uppercase tracking-widest">İletişim</button>
    </nav>
    <div className="flex items-center gap-4">
      <button onClick={() => setView('app')} className="font-mono text-[10px] font-bold text-primary hover:text-secondary transition-all uppercase tracking-widest">Giriş Yap</button>
      <button 
        onClick={() => setView('contact')}
        className="bg-primary text-on-primary font-mono text-[10px] font-bold px-6 h-10 rounded hover:bg-primary-container transition-all uppercase tracking-widest flex items-center gap-2"
      >
        Hemen Başla
      </button>
    </div>
  </header>
);

const LandingFooter = ({ setView }: { setView: (v: GlobalView) => void }) => (
  <footer className="bg-primary text-on-primary py-16 px-8 border-t border-primary-container">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-2 mb-6">
          <Anchor className="text-secondary size-8" />
          <span className="font-serif text-2xl font-bold text-on-primary tracking-tight">ShipAI</span>
        </div>
        <p className="text-sm text-on-primary/60 max-w-sm leading-relaxed">
          Modern gemi brokerlığı için komuta merkezi. Küresel deniz taşımacılığı lojistiğine kesinlik getirmek için endüstriyel sınıf yapay zeka ile güçlendirilmiştir.
        </p>
      </div>
      <div>
        <h4 className="font-mono text-[10px] font-bold text-secondary uppercase tracking-[0.2em] mb-6">Platform</h4>
        <ul className="space-y-4 text-sm text-on-primary/70">
          <li className="hover:text-white cursor-pointer transition-colors" onClick={() => setView('how-it-works')}>Yapay Zeka Eşleştirmesi</li>
          <li className="hover:text-white cursor-pointer transition-colors">Canlı Takip</li>
          <li className="hover:text-white cursor-pointer transition-colors">Akıllı Sözleşmeler</li>
          <li className="hover:text-white cursor-pointer transition-colors">API Erişimi</li>
        </ul>
      </div>
      <div>
        <h4 className="font-mono text-[10px] font-bold text-secondary uppercase tracking-[0.2em] mb-6">Şirket</h4>
        <ul className="space-y-4 text-sm text-on-primary/70">
          <li className="hover:text-white cursor-pointer transition-colors">Hakkımızda</li>
          <li className="hover:text-white cursor-pointer transition-colors">Kariyer</li>
          <li className="hover:text-white cursor-pointer transition-colors" onClick={() => setView('contact')}>İletişim</li>
          <li className="hover:text-white cursor-pointer transition-colors">Güvenlik</li>
        </ul>
      </div>
    </div>
    <hr className="border-on-primary/10 mb-8" />
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono font-bold uppercase tracking-widest text-on-primary/40">
      <p>© 2026 ShipAI Technologies. Tüm hakları saklıdır.</p>
      <div className="flex gap-8">
        <span className="hover:text-white cursor-pointer transition-colors">Gizlilik Politikası</span>
        <span className="hover:text-white cursor-pointer transition-colors">Hizmet Şartları</span>
      </div>
    </div>
  </footer>
);

const LandingHeroView = ({ setView }: { setView: (v: GlobalView) => void }) => (
  <div className="flex flex-col">
    <LandingHeader setView={setView} />
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-primary-container text-on-primary-container">
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=2000" 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-fixed border border-secondary/30 px-3 py-1 rounded-full w-fit">
            <Zap className="size-4 fill-secondary" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary-fixed">Yapay Zeka Destekli Lojistik</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-on-primary leading-[1.1] tracking-tight">
            Gemi Brokerlığının Geleceği <span className="text-secondary">Yapay Zeka ile Şekilleniyor</span>
          </h1>
          <p className="text-lg text-on-primary/80 max-w-2xl leading-relaxed">
            ShipAI, armatörleri ve kiracıları benzeri görülmemiş %98 doğrulukla sorunsuz bir şekilde birbirine bağlar. Manuel önsezileri öngörücü zeka ile değiştirin.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={() => setView('app')}
              className="bg-secondary text-on-secondary font-mono text-xs font-black uppercase tracking-[0.2em] px-10 h-14 rounded-xl hover:bg-secondary-container transition-all shadow-xl flex items-center justify-center gap-2"
            >
              Hemen Başla
            </button>
            <button className="bg-transparent border border-on-primary/30 text-on-primary font-mono text-xs font-black uppercase tracking-[0.2em] px-10 h-14 rounded-xl hover:bg-on-primary/10 transition-all flex items-center justify-center gap-2">
              Videoyu İzle
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 hidden lg:block relative text-white">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-panel border-l-4 border-secondary p-8 rounded-2xl shadow-2xl bg-white/5 backdrop-blur-xl relative z-10"
          >
            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
              <h3 className="font-serif text-xl font-bold">En Uygun Eşleşme Bulundu</h3>
              <Zap className="text-secondary fill-secondary size-5" />
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-on-primary shadow-lg">
                  <Ship className="size-6" />
                </div>
                <div className="flex-1">
                  <p className="font-mono text-[10px] text-white/50 uppercase tracking-widest mb-0.5">Gemi</p>
                  <p className="font-bold text-white">MV Oceanic Vanguard</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-[10px] text-secondary font-bold">%98.5 Eşleşme</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="font-mono text-[10px] text-white/50 uppercase tracking-widest mb-1">Tahmini Navlun</p>
                  <p className="font-serif text-lg font-bold">$24,500/gün</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="font-mono text-[10px] text-white/50 uppercase tracking-widest mb-1">Yükleme Zamanı</p>
                  <p className="font-serif text-lg font-bold">12 Eki</p>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setView('app')}
              className="w-full mt-8 bg-secondary text-on-secondary h-12 rounded-xl font-mono text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-secondary-container transition-all shadow-lg"
            >
              Müzakereyi Başlat <ArrowRight className="size-4" />
            </button>
          </motion.div>
          <div className="absolute -inset-10 bg-secondary/10 blur-[100px] -z-10 animate-pulse"></div>
        </div>
      </div>
    </section>
    <LandingFooter setView={setView} />
  </div>
);

const SolutionsView = ({ setView }: { setView: (v: GlobalView) => void }) => (
  <div className="flex flex-col">
    <LandingHeader setView={setView} />
    <main className="pt-24 min-h-screen bg-surface px-8">
      <div className="max-w-7xl mx-auto py-16 text-center">
        <h1 className="font-serif text-5xl font-bold text-primary mb-6">Çözümlerimiz</h1>
        <p className="text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed mb-16">
          Denizcilik lojistiğinde yapay zeka ile verimliliği ve karlılığı artırıyoruz.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white border border-outline-variant p-10 rounded-2xl shadow-sm text-left group hover:border-secondary transition-all">
             <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Ship className="size-8 text-secondary" />
             </div>
             <h2 className="font-serif text-2xl font-bold text-primary mb-4">Armatörler İçin</h2>
             <p className="text-on-surface-variant leading-relaxed mb-8">Filonuzun doluluk oranını optimize edin ve en karlı yükleri saniyeler içinde bulun.</p>
             <button onClick={() => setView('app')} className="text-secondary font-mono text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
               Keşfedin <ArrowRight className="size-4" />
             </button>
          </div>
          <div className="bg-white border border-outline-variant p-10 rounded-2xl shadow-sm text-left group hover:border-primary transition-all">
             <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Package className="size-8 text-primary" />
             </div>
             <h2 className="font-serif text-2xl font-bold text-primary mb-4">Kiracılar İçin</h2>
             <p className="text-on-surface-variant leading-relaxed mb-8">Kargonuz için en uygun gemiyi teknik ve coğrafi parametreler ışığında güvenceye alın.</p>
             <button onClick={() => setView('app')} className="text-primary font-mono text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
               Keşfedin <ArrowRight className="size-4" />
             </button>
          </div>
        </div>
      </div>
    </main>
    <LandingFooter setView={setView} />
  </div>
);

const HowItWorksView = ({ setView }: { setView: (v: GlobalView) => void }) => (
  <div className="flex flex-col">
    <LandingHeader setView={setView} />
    <main className="pt-24 min-h-screen bg-surface px-8">
      <div className="max-w-7xl mx-auto py-16 text-center">
        <h1 className="font-serif text-5xl font-bold text-primary mb-12">Nasıl Çalışır?</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { n: '01', t: 'Veri Çekme', d: 'Gemi ve yük verilerini tek bir havuzda topluyoruz.', i: Database },
            { n: '02', t: 'YZ Analizi', d: 'Akıllı algoritmalarla en iyi eşleşmeleri buluyoruz.', i: Zap },
            { n: '03', t: 'Müzakere', d: 'Güvenli dijital odalarda şartları netleştiriyoruz.', i: MessageSquare },
            { n: '04', t: 'İşlem', d: 'Anlaşmayı dijital olarak onaylıyor ve takibe başlıyoruz.', i: Anchor }
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="size-16 rounded-full bg-primary/5 text-secondary flex items-center justify-center mb-6 font-mono font-black text-xl">{s.n}</div>
              <h3 className="font-serif text-lg font-bold text-primary mb-2">{s.t}</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
    <LandingFooter setView={setView} />
  </div>
);

const PricingView = ({ setView }: { setView: (v: GlobalView) => void }) => (
  <div className="flex flex-col">
    <LandingHeader setView={setView} />
    <main className="pt-24 min-h-screen bg-surface px-8 pb-16">
      <div className="max-w-7xl mx-auto py-16 text-center">
        <h1 className="font-serif text-5xl font-bold text-primary mb-6">Fiyatlandırma</h1>
        <p className="text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed mb-16">
          Filo büyüklüğünüze ve işlem hacminize uygun esnek planlar.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Başlangıç', price: '$499', features: ['5 Gemiye Kadar', 'Temel Eşleşme', 'E-posta Desteği'], primary: false },
            { name: 'Profesyonel', price: '$1,299', features: ['20 Gemiye Kadar', 'Gelişmiş AI Eşleşme', '7/24 Destek', 'API Erişimi'], primary: true },
            { name: 'Kurumsal', price: 'Özel', features: ['Sınırsız Gemi', 'Özel AI Modelleri', 'Yerinde Kurulum'], primary: false }
          ].map((p, i) => (
            <div key={i} className={`p-8 rounded-2xl border ${p.primary ? 'border-secondary bg-white shadow-xl scale-105' : 'border-outline-variant bg-white/50'} flex flex-col`}>
              <h3 className="font-serif text-xl font-bold text-primary mb-2">{p.name}</h3>
              <div className="mb-8">
                <span className="text-4xl font-black text-primary">{p.price}</span>
                {p.price !== 'Özel' && <span className="text-on-surface-variant text-sm font-mono tracking-widest">/AY</span>}
              </div>
              <ul className="flex-1 space-y-4 mb-8">
                {p.features.map((f, j) => (
                  <li key={j} className="text-sm text-on-surface-variant flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-secondary" /> {f}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => setView('contact')}
                className={`w-full py-3 rounded-lg font-mono text-[10px] font-black uppercase tracking-widest transition-all ${p.primary ? 'bg-secondary text-on-secondary shadow-lg' : 'bg-primary text-on-primary'}`}
              >
                Planı Seç
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
    <LandingFooter setView={setView} />
  </div>
);

const ContactView = ({ setView }: { setView: (v: GlobalView) => void }) => {
  const [success, setSuccess] = useState(false);
  const handleSubmit = (e: FormEvent) => { e.preventDefault(); setSuccess(true); setTimeout(() => setSuccess(false), 3000); };
  return (
    <div className="flex flex-col">
      <LandingHeader setView={setView} />
      <main className="pt-24 min-h-screen bg-surface px-8">
        <div className="max-w-4xl mx-auto py-16">
          <h1 className="font-serif text-4xl font-bold text-primary mb-8 text-center underline decoration-secondary decoration-4 underline-offset-8">Bize Ulaşın</h1>
          <form onSubmit={handleSubmit} className="bg-white border border-outline-variant p-10 rounded-2xl shadow-sm space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-black text-on-surface-variant uppercase tracking-widest">Ad</label>
                <input required className="w-full h-11 px-4 bg-surface-container-low border border-outline-variant rounded-lg focus:border-secondary focus:ring-1 focus:ring-secondary transition-all outline-none" placeholder="Can" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-black text-on-surface-variant uppercase tracking-widest">Soyad</label>
                <input required className="w-full h-11 px-4 bg-surface-container-low border border-outline-variant rounded-lg focus:border-secondary focus:ring-1 focus:ring-secondary transition-all outline-none" placeholder="Yılmaz" />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono font-black text-on-surface-variant uppercase tracking-widest">Kurumsal Email</label>
              <input required type="email" className="w-full h-11 px-4 bg-surface-container-low border border-outline-variant rounded-lg focus:border-secondary focus:ring-1 focus:ring-secondary transition-all outline-none" placeholder="can@maersk.com" />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono font-black text-on-surface-variant uppercase tracking-widest">Mesajınız</label>
              <textarea rows={4} className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:border-secondary focus:ring-1 focus:ring-secondary transition-all outline-none resize-none" placeholder="Nasıl yardımcı olabiliriz?"></textarea>
            </div>
            <button className="w-full py-4 bg-primary text-on-primary font-mono text-xs font-black uppercase tracking-widest rounded-lg hover:bg-primary-container transition-all flex items-center justify-center gap-2">
              {success ? <><CheckCircle2 className="size-4" /> Gönderildi</> : <>Mesaj Gönder <ArrowRight className="size-4" /></>}
            </button>
          </form>
        </div>
      </main>
      <LandingFooter setView={setView} />
    </div>
  );
};

// --- Components ---

const Sidebar = ({ activeTab, setActiveTab }: { activeTab: AppTab, setActiveTab: (t: AppTab) => void }) => {
  const navItems = [
    { id: 'market', icon: LayoutDashboard, label: 'Pazar Yeri' },
    { id: 'match', icon: Zap, label: 'Eşleşme Analizi' },
    { id: 'cargo', icon: PlusSquare, label: 'Yeni Yük İlanı' },
    { id: 'vessels', icon: Ship, label: 'Gemi Yönetimi' },
    { id: 'tracking', icon: Anchor, label: 'Sefer Takibi' },
    { id: 'negotiation', icon: MessageSquare, label: 'Müzakere Odası' },
  ];

  return (
    <nav className="fixed left-0 top-0 h-screen bg-primary border-r border-outline-variant flex flex-col py-6 z-50 transition-all w-20 hover:w-64 group shadow-xl">
      <div className="px-6 mb-10 flex items-center gap-4 overflow-hidden whitespace-nowrap">
        <div className="bg-secondary p-2 rounded shrink-0">
          <Anchor className="text-on-secondary size-6" />
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
          <h1 className="font-serif text-xl font-black text-on-primary">ShipAI</h1>
          <p className="text-[10px] text-on-primary-container uppercase tracking-widest font-mono">Command Center</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-2 px-2 overflow-hidden">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id as AppTab)}
            className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all whitespace-nowrap group/item ${
              activeTab === item.id 
                ? 'bg-secondary text-on-secondary shadow-lg border-l-4 border-secondary-fixed' 
                : 'text-on-primary/60 hover:bg-on-primary/10 hover:text-on-primary'
            }`}
          >
            <item.icon className="size-6 shrink-0" />
            <span className="opacity-0 group-hover:opacity-100 transition-opacity font-mono text-xs uppercase tracking-wider">{item.label}</span>
          </button>
        ))}
      </div>

      <div className="px-2 flex flex-col gap-2 pt-6 border-t border-on-primary/10 overflow-hidden">
        <button className="flex items-center gap-4 px-4 py-3 rounded-lg text-on-primary/60 hover:text-on-primary whitespace-nowrap transition-all">
          <Settings className="size-6 shrink-0" />
          <span className="opacity-0 group-hover:opacity-100 transition-opacity font-mono text-xs uppercase tracking-wider">Ayarlar</span>
        </button>
        <button className="flex items-center gap-4 px-4 py-3 rounded-lg text-on-primary/60 hover:text-on-primary whitespace-nowrap transition-all">
          <HelpCircle className="size-6 shrink-0" />
          <span className="opacity-0 group-hover:opacity-100 transition-opacity font-mono text-xs uppercase tracking-wider">Destek</span>
        </button>
      </div>
    </nav>
  );
};

const Topbar = ({ title }: { title: string }) => {
  return (
    <header className="h-16 px-8 flex items-center justify-between border-b border-outline-variant bg-surface/80 backdrop-blur-md sticky top-0 z-40">
      <h2 className="font-serif text-xl font-bold text-primary">{title}</h2>
      
      <div className="flex-1 max-w-md mx-8 hidden md:block">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-outline group-focus-within:text-secondary" />
          <input 
            type="text" 
            placeholder="Gemi, yük veya liman ara..." 
            className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-full text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 pr-4 border-r border-outline-variant">
          <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors relative">
            <Bell className="size-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
          </button>
          <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors">
            <History className="size-5" />
          </button>
          <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors">
            <HelpCircle className="size-5" />
          </button>
        </div>
        <div className="flex items-center gap-3 pl-2 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-primary leading-tight">Ezgi Saglamci</p>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-mono">Chartering Manager</p>
          </div>
          <div className="w-10 h-10 rounded-full border border-outline-variant overflow-hidden ring-2 ring-transparent group-hover:ring-secondary/20 transition-all shadow-sm">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" alt="Avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </header>
  );
};

// --- Views ---

const MatchAnalysisView = ({ onStartNegotiation }: { onStartNegotiation: () => void }) => {
  const [isCalculating, setIsCalculating] = useState(false);

  const handleRecalculate = () => {
    setIsCalculating(true);
    setTimeout(() => setIsCalculating(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h3 className="font-serif text-3xl font-bold text-primary tracking-tight">Eşleşme Analizi</h3>
          <p className="text-on-surface-variant text-sm mt-1">MV Ocean Star & 50k mt Çelik Rulo • <span className="font-mono text-secondary font-bold">Ref #892A</span></p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={handleRecalculate}
            disabled={isCalculating}
            className="px-4 py-2 bg-surface-container-low border border-outline-variant rounded font-mono text-xs font-bold uppercase transition-colors hover:bg-surface-container-high disabled:opacity-50"
          >
            {isCalculating ? 'Hesaplanıyor...' : 'Yeniden Hesapla'}
          </button>
          <button 
            onClick={onStartNegotiation}
            className="px-6 py-2 bg-primary text-on-primary rounded font-mono text-xs font-bold uppercase hover:bg-primary-container shadow-md"
          >
            Müzakereyi Başlat
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="md:col-span-4 bg-white border border-outline-variant rounded-xl p-8 flex flex-col items-center justify-center relative overflow-hidden shadow-sm"
        >
           <div className="absolute top-4 left-6 font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">Genel Eşleşme Skoru</div>
           <Zap className="absolute top-4 right-6 size-4 text-secondary" />
           
           <div className="relative size-48 flex items-center justify-center my-6">
              <svg className="size-full -rotate-90 transform" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#f2f4f6" strokeWidth="8" />
                <circle cx="50" cy="50" r="45" fill="none" stroke="#006971" strokeWidth="8" strokeDasharray="282.7" strokeDashoffset="22.6" className="transition-all duration-1000 ease-out" />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="font-serif text-5xl font-black text-primary">92<span className="text-2xl text-on-surface-variant">%</span></span>
              </div>
           </div>
           
           <p className="text-secondary font-bold text-sm tracking-wide">KESİNLİKLE ÖNERİLİR</p>
           <p className="text-on-surface-variant text-center text-xs mt-2 px-4 leading-relaxed font-sans italic opacity-80">Teknik, coğrafi ve risk parametreleri genelinde optimum uyum.</p>
        </motion.div>

        <div className="md:col-span-8 glass-panel ai-border rounded-xl p-6 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h4 className="flex items-center gap-2 font-mono text-xs font-bold text-primary uppercase tracking-widest">
              <span className="p-1 bg-secondary rounded text-white"><Zap className="size-3 fill-white" /></span> Yapay Zeka Sentezi
            </h4>
            <span className="bg-secondary/10 text-secondary px-2 py-0.5 rounded font-mono text-[10px] font-bold uppercase tracking-tighter">İçgörü Oluşturuldu</span>
          </div>
          
          <div className="flex-1 space-y-4 text-sm text-on-surface-variant leading-relaxed">
            <p><strong className="text-primary font-serif">Yönetici Özeti:</strong> MV Ocean Star, 50.000 MT çelik rulo gereksinimi için olağanüstü bir teknik uygunluk sergilemektedir. Rotterdam tahliye limanındaki draft kısıtlamaları 1.2m marjla güvenli bölgededir.</p>
            <p><strong className="text-primary font-serif">Operasyonel Verimlilik:</strong> Geminin mevcut pozisyonu, ballast mesafesini 450 NM azaltarak tahmini <span className="text-secondary font-bold font-mono">14.500$</span> yakıt tasarrufu sağlamaktadır.</p>
            <p><strong className="text-primary font-serif">Risk Analizi:</strong> Vetting kayıtları kusursuzdur. Ancak Biscay geçişinde %15 oranında hafif dalga gecikmesi öngörülmektedir; optimizasyon ETA planına yansıtılmıştır.</p>
          </div>

          <div className="flex gap-2 mt-6">
            <span className="px-2 py-1 bg-surface-container-low rounded font-mono text-[9px] font-bold flex items-center gap-1 uppercase"><CheckCircle2 className="size-3 text-secondary" /> Teknik Uygun</span>
            <span className="px-2 py-1 bg-surface-container-low rounded font-mono text-[9px] font-bold flex items-center gap-1 uppercase"><CheckCircle2 className="size-3 text-secondary" /> Geo Optimal</span>
            <span className="px-2 py-1 bg-surface-container-low rounded font-mono text-[9px] font-bold flex items-center gap-1 text-orange-600 uppercase"><AlertCircle className="size-3" /> Hafif Hava Riski</span>
          </div>
        </div>

        <div className="md:col-span-12 bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm">
          <div className="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-bright">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-primary">Teknik Uygunluk Matrisi</h4>
            <button className="text-secondary font-bold text-xs hover:underline">Tüm Özellikler</button>
          </div>
          <table className="w-full text-left text-sm">
            <thead className="bg-surface-container-low font-mono text-[10px] uppercase text-on-surface-variant">
              <tr>
                <th className="p-4">Parametre</th>
                <th className="p-4">Gereksinim</th>
                <th className="p-4">Gemi Kapasitesi</th>
                <th className="p-4">Durum</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {[
                { p: 'Dedveyt (DWT)', req: '50,000 MT', v: '58,400 MT', s: '+8,400 MT Marj' },
                { p: 'Ambar Tipi', req: 'Kutu Formlu, 5 Ambar', v: 'Kutu Formlu, 5 Ambar', s: 'Tam Eşleşme' },
                { p: 'Donanım / Vinçler', req: '4 x 30T min', v: '4 x 35T (Comb)', s: 'Beklenti Üstü' },
                { p: 'Draft (Tahliye)', req: 'Max 12.5m (RTD)', v: '~11.3m (Yüklü)', s: '1.2m Açıklık' },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-secondary/5 transition-colors group">
                  <td className="p-4 font-bold text-primary font-serif">{row.p}</td>
                  <td className="p-4 font-mono text-xs">{row.req}</td>
                  <td className="p-4 font-mono text-xs">{row.v}</td>
                  <td className="p-4">
                    <span className="text-secondary font-bold text-xs flex items-center gap-1">
                      <CheckCircle2 className="size-3" /> {row.s}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const MarketplaceView = ({ onQuickMatch }: { onQuickMatch: () => void }) => {
  const [filterActive, setFilterActive] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h3 className="font-serif text-3xl font-bold text-primary tracking-tight">Pazar Yeri</h3>
          <p className="text-on-surface-variant text-sm mt-1">Açık Kapasite ve Mevcut Yükler için canlı yapay zeka eşleştirmesi.</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <select className="appearance-none bg-white border border-outline-variant pl-4 pr-10 py-2 rounded text-xs font-bold uppercase tracking-wider focus:outline-none focus:ring-1 focus:ring-secondary">
              <option>Tüm Gemi Tipleri</option>
              <option>Dökme Yük</option>
              <option>Tanker</option>
            </select>
            <Menu className="absolute right-3 top-1/2 -translate-y-1/2 size-3 text-outline pointer-events-none" />
          </div>
          <button 
            onClick={() => setFilterActive(!filterActive)}
            className={`px-4 py-2 border border-outline-variant rounded font-mono text-xs font-bold uppercase transition-all flex items-center gap-2 ${filterActive ? 'bg-secondary text-white' : 'bg-surface-container hover:bg-surface-container-high'}`}
          >
            <Search className="size-4" /> {filterActive ? 'Filtreler Açık' : 'Filtrele'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[calc(100vh-220px)]">
        {/* Vessel Column */}
        <div className="flex flex-col bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm">
          <div className="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-bright">
            <h4 className="font-mono text-xs font-bold uppercase text-primary flex items-center gap-2 tracking-widest">
              <Ship className="size-4 text-secondary" /> Açık Gemi Kapasitesi
            </h4>
            <span className="text-[10px] font-mono font-bold text-on-surface-variant bg-surface-container px-2 py-0.5 rounded tracking-widest">124 CANLI</span>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {[
              { name: 'MV Nordic Sea', type: 'Supramax', dwt: '58,000', open: 'Eki 12-15', loc: 'Rotterdam, NL', rate: '$24,500' },
              { name: 'Stella Maris', type: 'Panamax', dwt: '76,000', open: 'Eki 18-20', loc: 'Singapore, SG', rate: '$21,000' },
              { name: 'Oceanic Voyager', type: 'Handymax', dwt: '35,000', open: 'Eki 25-28', loc: 'Houston, US', rate: '$19,800' },
              { name: 'Arctic Trader', type: 'Capesize', dwt: '175,000', open: 'Kas 02-05', loc: 'Port Hedland, AU', rate: '$31,000' },
            ].map((v, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -2 }}
                className="p-4 border border-outline-variant rounded-lg hover:shadow-lg transition-all cursor-pointer group bg-surface-container-lowest"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h5 className="font-serif font-bold text-primary text-lg leading-none">{v.name}</h5>
                    <p className="text-[10px] text-on-surface-variant uppercase font-mono mt-1 tracking-wider">{v.type} • {v.dwt} DWT</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-primary font-bold uppercase font-mono opacity-60">Açılış</p>
                    <p className="font-mono text-sm text-secondary font-bold">{v.open}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                  <div>
                    <span className="text-[10px] text-outline block uppercase tracking-tighter mb-0.5">Konum</span>
                    <span className="font-bold text-primary opacity-80">{v.loc}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-outline block uppercase tracking-tighter mb-0.5">Navlun</span>
                    <span className="font-bold text-primary opacity-80">{v.rate} / pdpr</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Cargo Column */}
        <div className="flex flex-col bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm">
          <div className="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-bright">
            <h4 className="font-mono text-xs font-bold uppercase text-primary flex items-center gap-2 tracking-widest">
              <Package className="size-4 text-secondary" /> Mevcut Yükler
            </h4>
            <span className="text-[10px] font-mono font-bold text-on-surface-variant bg-surface-container px-2 py-0.5 rounded tracking-widest">89 CANLI</span>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <motion.div 
              initial={{ scale: 0.98 }}
              animate={{ scale: 1 }}
              className="glass-panel ai-border rounded-xl relative p-5 group shadow-sm"
            >
              <div className="absolute top-2 right-2 flex items-center gap-1 bg-secondary/10 text-secondary text-[9px] font-black px-2 py-1 rounded-full uppercase tracking-widest">
                <Zap className="size-3 fill-secondary" /> NORDIC SEA İÇİN EN İYİ EŞLEŞME
              </div>
              <div className="mt-4">
                <h5 className="font-serif font-bold text-primary text-xl tracking-tight">Coal / 50,000 mt 10% moloo</h5>
                <p className="text-xs text-on-surface-variant font-medium mt-1">Richards Bay'den Rotterdam'a</p>
                <div className="grid grid-cols-2 gap-6 my-6">
                   <div className="text-xs font-mono">
                     <span className="text-[10px] text-outline block uppercase mb-1">Laycan</span>
                     <span className="font-bold text-primary">Eki 10 - 20</span>
                   </div>
                   <div className="text-xs font-mono">
                     <span className="text-[10px] text-outline block uppercase mb-1">Şartlar</span>
                     <span className="font-bold text-primary">25,000s / 15,000s</span>
                   </div>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <div className="flex items-center gap-3">
                     <div className="size-12 rounded-full border-2 border-secondary flex items-center justify-center font-serif text-lg font-black text-secondary bg-secondary/5">94%</div>
                     <span className="text-[10px] font-mono font-black text-on-surface-variant uppercase tracking-widest">AI Skor</span>
                  </div>
                  <button 
                    onClick={onQuickMatch}
                    className="flex items-center gap-2 px-6 py-2.5 bg-secondary text-on-secondary rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-on-secondary-container shadow-md transition-all">
                    <Zap className="size-4 fill-white" /> Hızlı Eşleşme
                  </button>
                </div>
              </div>
            </motion.div>

            {[
              { m: 'Grain / 60,000 mt 10%', r: 'New Orleans → Alexandria', l: 'Eki 15-25', s: '72%' },
              { m: 'Iron Ore / 170,000 mt 10%', r: 'Tubarao → Qingdao', l: 'Kas 01-10', s: '45%' },
            ].map((c, i) => (
              <div key={i} className="p-4 border border-outline-variant rounded-lg hover:bg-surface-container-low transition-all cursor-pointer group">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-serif font-bold text-primary">{c.m}</h5>
                    <p className="text-[10px] text-on-surface-variant uppercase font-mono mt-0.5">{c.r}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-xs font-bold text-outline group-hover:text-secondary mb-1 block">Skor: {c.s}</span>
                    <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-tighter">LC: {c.l}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const VesselManagementView = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleRegister = () => {
    setIsRegistering(true);
    setTimeout(() => {
      setIsRegistering(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h3 className="font-serif text-3xl font-bold text-primary tracking-tight">Gemi Yönetimi</h3>
          <p className="text-on-surface-variant text-sm mt-1">Yeni varlıkları kaydedin ve mevcut filo sertifikalarını yönetin.</p>
        </div>
        <button 
          onClick={handleRegister}
          disabled={isRegistering}
          className="px-8 py-3 bg-primary text-on-primary rounded-lg font-mono text-xs font-bold uppercase tracking-wider hover:bg-primary-container shadow-xl transition-all flex items-center gap-2 disabled:opacity-50"
        >
          {isRegistering ? 'Kaydediliyor...' : success ? <><CheckCircle2 className="size-5" /> Kaydedildi</> : <><PlusSquare className="size-5" /> Gemi Kaydet</>}
        </button>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <div className="bg-white border border-outline-variant rounded-xl p-8 shadow-sm">
            <h4 className="font-serif text-xl font-bold text-primary mb-8 border-b border-outline-variant pb-2 flex items-center gap-2">
              <FileText className="size-5 text-secondary" /> Gemi Teknik Özellikleri
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {[
                { label: 'Gemi Adı', hint: 'örn. MV Sea Voyager', icon: Ship },
                { label: 'IMO Numarası', hint: 'örn. 9123456', icon: Hash },
                { label: 'Gemi Tipi', type: 'select', options: ['Dökme Yük', 'Tanker', 'Konteyner', 'Ro-Ro'], icon: Menu },
                { label: 'DWT (Deadweight Tonajı)', hint: '0', icon: Database },
                { label: 'İnşa Yılı', hint: 'YYYY', icon: History },
                { label: 'Draft (Metre)', hint: '0.0', icon: Navigation },
              ].map((field, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                   <label className="font-mono text-[10px] font-black text-on-surface-variant uppercase tracking-widest">{field.label}</label>
                   <div className="relative group">
                     {field.type === 'select' ? (
                       <select className="w-full h-12 pl-4 pr-10 bg-surface-container-low/50 border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary text-sm font-medium transition-all appearance-none cursor-pointer">
                         <option disabled selected>{field.label} Seçin</option>
                         {field.options?.map(o => <option key={o}>{o}</option>)}
                       </select>
                     ) : (
                      <input className="w-full h-12 px-4 bg-surface-container-low/50 border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary text-sm font-medium transition-all placeholder:text-outline font-mono" placeholder={field.hint} />
                     )}
                   </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-outline-variant rounded-xl p-8 shadow-sm">
            <div className="flex justify-between items-center mb-8 border-b border-outline-variant pb-2">
              <h4 className="font-serif text-xl font-bold text-primary flex items-center gap-2">
                <ShieldCheck className="size-5 text-secondary" /> Sertifika Yönetimi
              </h4>
              <button className="text-secondary font-mono text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 hover:text-on-secondary-container transition-colors">
                <Upload className="size-4" /> Toplu Yükleme
              </button>
            </div>
            <div className="grid gap-4">
              {[
                { t: 'DOC (Uygunluk Belgesi)', d: 'Şirket güvenlik yönetimi belgesi.' },
                { t: 'SMC (Güvenlik Sertifikası)', d: 'Gemiye özel operasyonel uyumluluk.' },
                { t: 'ISSC (Güvenlik Sertifikası)', d: 'Uluslararası liman ve gemi güvenliği.' },
              ].map((cert, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ scale: 1.005 }}
                  className="flex items-center justify-between p-5 border border-outline-variant rounded-xl bg-surface-container-low/30 hover:border-secondary transition-all shadow-sm"
                >
                  <div className="flex items-center gap-5">
                    <div className="size-12 bg-primary rounded-lg flex items-center justify-center text-on-primary shadow-md">
                      <ShieldCheck className="size-7" />
                    </div>
                    <div>
                      <h5 className="font-serif font-bold text-primary">{cert.t}</h5>
                      <p className="text-[11px] text-on-surface-variant font-medium opacity-80">{cert.d}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <input type="date" className="h-10 px-3 bg-white border border-outline-variant rounded-lg text-xs font-mono font-bold focus:outline-none focus:ring-1 focus:ring-secondary" />
                    <button className="h-10 px-6 border border-outline-variant rounded-lg text-xs font-mono font-black uppercase tracking-widest hover:bg-white hover:border-primary transition-all">Yükle</button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          <div className="glass-panel ai-border rounded-xl p-8 shadow-md relative overflow-hidden">
            <Zap className="absolute -right-6 -bottom-6 size-32 text-secondary/5 rotate-12" />
            <div className="flex items-center gap-2 font-mono text-[10px] font-black text-secondary tracking-[0.2em] mb-4 uppercase">
              <Zap className="size-5 fill-secondary" /> AI Filo İçgörüsü
            </div>
            <p className="text-sm text-primary leading-relaxed font-medium">
               Singapur liman kontrol verilerine göre, tutulma riskini <span className="text-secondary font-black underline decoration-secondary/30 decoration-2 underline-offset-4">%14</span> azaltmak adına yaşlı gemilerin <span className="italic">SMC yenileme</span> periyodunu öne çekin.
            </p>
            <button className="mt-6 w-full h-12 bg-primary text-on-primary font-mono text-[10px] font-black uppercase tracking-[0.1em] rounded-lg hover:bg-primary-container transition-all shadow-lg">Risk Faktörlerini İncele</button>
          </div>

          <div className="bg-white border border-outline-variant rounded-xl flex-1 flex flex-col overflow-hidden shadow-sm">
            <div className="p-5 bg-surface-bright flex justify-between items-center border-b border-outline-variant">
              <h5 className="font-serif font-bold text-primary">Filo Özeti</h5>
              <span className="bg-secondary/10 text-secondary px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest font-mono">4 Aktif</span>
            </div>
            <div className="flex-1 overflow-y-auto">
              {[
                { n: 'MV Pacific Star', s: 'Seferde', c: 'bg-primary/10 text-primary' },
                { n: 'Oceanic Pearl', s: 'Boşta', c: 'bg-green-100 text-green-700' },
                { n: 'Nordic Spirit', s: 'Seferde', c: 'bg-primary/10 text-primary' },
                { n: 'Atlantic Dawn', s: 'Havuzda', c: 'bg-orange-100 text-orange-700' },
              ].map((v, i) => (
                <div key={i} className="p-5 border-b border-outline-variant flex justify-between items-center hover:bg-secondary/5 cursor-pointer transition-colors group">
                  <div>
                    <h6 className="font-serif font-bold text-primary text-base leading-tight group-hover:text-secondary transition-colors">{v.n}</h6>
                    <p className="text-[10px] text-on-surface-variant font-mono uppercase mt-1 tracking-widest">IMO: 9345671 • Dökme Yük</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest font-mono ${v.c}`}>{v.s}</span>
                    <ArrowRight className="size-4 text-outline group-hover:text-primary transition-all group-hover:translate-x-1" />
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-surface-container text-center border-t border-outline-variant">
              <button className="text-[10px] font-black text-secondary tracking-widest uppercase hover:underline">Tüm Filo Listesi</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TrackingView = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => setIsDownloading(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h3 className="font-serif text-3xl font-bold text-primary tracking-tight">Sefer Takibi</h3>
          <p className="text-on-surface-variant text-sm mt-1">Gecikme risklerini ve demurraj maliyetlerini proaktif izleyin.</p>
        </div>
        <div className="flex gap-3">
           <button 
            onClick={handleDownload}
            disabled={isDownloading}
            className="px-4 py-2 bg-white border border-outline-variant rounded font-mono text-xs font-bold uppercase flex items-center gap-2 hover:bg-surface-container-low transition-colors disabled:opacity-50"
          >
            <Download className="size-4" /> {isDownloading ? 'Hazırlanıyor...' : 'Raporu İndir'}
          </button>
           <button className="px-8 py-2 bg-primary text-on-primary rounded-lg font-mono text-xs font-bold uppercase tracking-wider shadow-lg hover:bg-primary-container">Yeni Kayıt</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4 bg-white border border-outline-variant rounded-xl p-8 shadow-sm group hover:border-secondary transition-all">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-secondary/5 rounded-lg group-hover:bg-secondary/10 transition-colors">
              <CreditCard className="size-6 text-secondary" />
            </div>
            <span className="text-[10px] font-mono font-black text-outline uppercase tracking-wider">Navlun Durumu</span>
          </div>
          <p className="text-[11px] text-on-surface-variant font-semibold uppercase tracking-widest mb-1 opacity-70">Bekleyen Toplam</p>
          <p className="font-serif text-4xl font-black text-primary">$2,450,000</p>
          <div className="mt-6 flex items-center gap-2 text-[10px] font-mono font-bold uppercase">
            <span className="size-2.5 rounded-full bg-error animate-pulse"></span>
            <span className="text-on-surface-variant"><strong className="text-error">$850k</strong> Gecikmiş Fatura</span>
          </div>
        </div>

        <div className="md:col-span-4 bg-white border border-outline-variant rounded-xl p-8 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-primary/5 rounded-lg">
              <Database className="size-6 text-primary" />
            </div>
            <span className="text-[10px] font-mono font-black text-outline uppercase tracking-wider">Komisyonlar</span>
          </div>
          <p className="text-[11px] text-on-surface-variant font-semibold uppercase tracking-widest mb-1 opacity-70">Hedeflenen Gelir</p>
          <p className="font-serif text-4xl font-black text-primary">$112,500</p>
          <div className="mt-6 w-full h-2 bg-surface-container rounded-full overflow-hidden relative">
            <div className="absolute left-0 top-0 h-full bg-primary transition-all duration-1000" style={{ width: '40%' }}></div>
          </div>
          <div className="mt-3 flex justify-between text-[10px] font-black uppercase text-outline tracking-widest">
            <span>Tahsil Edilen</span>
            <span className="text-primary font-black">$45,000</span>
          </div>
        </div>

        <div className="md:col-span-4 glass-panel ai-border rounded-xl p-8 shadow-lg relative overflow-hidden">
          <Zap className="absolute -right-8 -top-8 size-40 text-secondary/5 rotate-12" />
          <div className="flex justify-between items-center mb-4">
             <div className="p-2 bg-secondary text-on-secondary rounded-lg">
                <Timer className="size-6" />
             </div>
             <span className="text-[10px] font-mono font-black text-secondary uppercase tracking-[0.2em] flex items-center gap-1">
               <Zap className="size-3 fill-secondary" /> AI Projeksiyon
             </span>
          </div>
          <p className="text-[11px] text-on-surface-variant font-semibold uppercase tracking-widest mb-1 opacity-70">Potansiyel Demurraj</p>
          <p className="font-serif text-4xl font-black text-secondary">$48,200</p>
          <div className="mt-6 bg-white/40 p-3 rounded-lg border border-white/50 text-[11px] leading-relaxed italic text-on-surface-variant">
             <strong className="text-primary font-bold">MV Atlantic Dawn</strong> liman trafiği nedeniyle starya süresini 42 saat aşabilir.
          </div>
        </div>

        {/* Timeline Visualization */}
        <div className="md:col-span-12 bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm flex flex-col">
          <div className="p-5 bg-surface-bright flex justify-between items-center border-b border-outline-variant">
            <h5 className="font-mono text-xs font-bold uppercase text-primary tracking-widest">Aktif Sefer Durum Çizelgesi</h5>
            <div className="flex gap-4">
               <span className="flex items-center gap-1 text-[10px] font-bold text-on-surface-variant"><span className="size-2 rounded-full bg-secondary"></span> Tamamlandı</span>
               <span className="flex items-center gap-1 text-[10px] font-bold text-on-surface-variant"><span className="size-2 rounded-full bg-primary"></span> Transit</span>
               <span className="flex items-center gap-1 text-[10px] font-bold text-on-surface-variant"><span className="size-2 border border-outline rounded-full"></span> Planlanan</span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans">
              <thead className="bg-surface-container-low font-mono text-[10px] uppercase text-on-surface-variant tracking-[0.15em]">
                <tr>
                  <th className="py-4 px-6 border-b border-outline-variant">Gemi / Sefer</th>
                  <th className="py-4 px-6 border-b border-outline-variant">Rota Detayı</th>
                  <th className="py-4 px-6 border-b border-outline-variant w-1/3">Operasyonel Durum</th>
                  <th className="py-4 px-6 border-b border-outline-variant text-right">Navlun</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant text-sm">
                {[
                  { n: 'MV Pacific Spirit', c: '50k mt Kömür', r: 'Newcastle → Qingdao', s: 65, status: 'Transit', tags: 'Ödeme Bekliyor' },
                  { n: 'MT Horizon', c: '120k mt Ham Petrol', r: 'Ras Tanura → RTD', s: 95, status: 'Tahliye', tags: 'Tamamı Ödendi' },
                  { n: 'MV Nordic Star', c: '30k mt Çelik', r: 'Antwerp → Houston', s: 15, status: 'Yükleniyor', tags: 'Gecikmiş Fatura', err: true },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-secondary/5 transition-all group">
                    <td className="py-6 px-6">
                      <p className="font-serif font-bold text-primary text-base leading-none group-hover:text-secondary transition-colors">{row.n}</p>
                      <p className="text-[10px] font-mono text-on-surface-variant uppercase mt-1 tracking-widest">{row.c}</p>
                    </td>
                    <td className="py-6 px-6">
                      <p className="font-bold text-primary opacity-80">{row.r}</p>
                      <p className="text-[9px] font-mono text-on-surface-variant uppercase mt-1">ETA: 12.05.2026</p>
                    </td>
                    <td className="py-6 px-6">
                      <div className="flex items-center justify-between relative w-full pt-1">
                        <div className="absolute top-1.5 left-0 w-full h-[2px] bg-surface-container rounded-full"></div>
                        <div className="absolute top-1.5 left-0 h-[2px] bg-secondary rounded-full transition-all duration-1000" style={{ width: `${row.s}%` }}></div>
                        {[0, 25, 50, 75, 100].map(dot => (
                          <div key={dot} className={`relative z-10 size-3 rounded-full ring-4 ring-white shadow-sm transition-all duration-500 ${row.s >= dot ? 'bg-secondary' : 'bg-surface-variant'}`}></div>
                        ))}
                      </div>
                      <div className="mt-3 flex justify-between items-center font-mono text-[9px] font-black uppercase tracking-widest text-secondary">
                        <span>{row.status}</span>
                        <span>{row.s}%</span>
                      </div>
                    </td>
                    <td className="py-6 px-6 text-right">
                       <span className={`px-3 py-1 rounded font-mono text-[10px] font-black uppercase tracking-widest ${row.err ? 'bg-error-container text-on-error-container border border-error/20' : 'bg-surface-container text-on-surface-variant border border-outline-variant/30'}`}>
                         {row.tags}
                       </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-surface-bright border-t border-outline-variant text-center">
             <button className="text-[10px] font-black uppercase tracking-widest text-secondary hover:underline">Tüm Bağlantıları Görüntüle</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Helper Icon ---
const CargoInquiryView = () => {
  const [formData, setFormData] = useState({
    cargoType: '',
    quantity: '',
    loadPort: '',
    dischargePort: '',
    laycanStart: '',
    laycanEnd: '',
    terms: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  const autoFill = () => {
    setFormData({
      cargoType: 'Wheat',
      quantity: '45,000 MT 10% MOLOO',
      loadPort: 'Rouen, FR',
      dischargePort: 'Alexandria, EG',
      laycanStart: '2026-06-10',
      laycanEnd: '2026-06-20',
      terms: '10,000 MT / 8,000 MT'
    });
  };

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-end">
        <div>
          <h3 className="font-serif text-3xl font-bold text-primary tracking-tight">Yeni Yük İlanı</h3>
          <p className="text-on-surface-variant text-sm mt-1">İlan oluşturun ve AI ile piyasa tahminlerini görüntüleyin.</p>
        </div>
      </div>
      
      <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="glass-panel ai-border rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-md">
        <div className="p-4 bg-secondary text-on-secondary rounded-full shadow-lg">
          <Zap className="size-8 fill-white" />
        </div>
        <div className="flex-1">
          <h4 className="font-serif text-xl font-bold text-primary">Piyasa İstihbarat Tahmini</h4>
          <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">Verilerimiz, Atlantik havzasındaki tahıl sevkiyatları için gelecek ay <span className="text-secondary font-black">%4 bir artış</span> öngörüyor. İlanınızı <span className="font-mono font-bold">$26.50/mt</span> seviyesinden başlatmanızı öneririz.</p>
        </div>
        <button 
          onClick={autoFill}
          className="px-6 py-3 bg-secondary text-on-secondary rounded-lg font-mono text-xs font-bold uppercase tracking-widest hover:bg-on-secondary-container transition-all flex items-center gap-2"
        >
          <Zap className="size-4 fill-white" /> Otomatik Doldur
        </button>
      </motion.div>

      <form onSubmit={handleSubmit} className="bg-white border border-outline-variant rounded-2xl p-8 shadow-sm space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h5 className="font-serif text-lg font-bold text-primary border-b border-outline-variant pb-2">Kargo Detayları</h5>
            
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] font-mono font-black text-on-surface-variant uppercase tracking-widest mb-1.5">Yük Tipi</label>
                <input 
                  required
                  value={formData.cargoType}
                  onChange={e => setFormData({...formData, cargoType: e.target.value})}
                  placeholder="örn. Çelik Rulo, Buğday..."
                  className="w-full h-12 px-4 bg-surface-container-low border border-outline-variant rounded-xl focus:outline-none focus:border-secondary transition-all" 
                />
              </div>
              <div>
                <label className="block text-[10px] font-mono font-black text-on-surface-variant uppercase tracking-widest mb-1.5">Miktar (MT)</label>
                <input 
                  required
                  value={formData.quantity}
                  onChange={e => setFormData({...formData, quantity: e.target.value})}
                  placeholder="örn. 50,000 MT 10%" 
                  className="w-full h-12 px-4 bg-surface-container-low border border-outline-variant rounded-xl focus:outline-none focus:border-secondary transition-all" 
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h5 className="font-serif text-lg font-bold text-primary border-b border-outline-variant pb-2">Rota & Zamanlama</h5>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 md:col-span-1">
                <label className="block text-[10px] font-mono font-black text-on-surface-variant uppercase tracking-widest mb-1.5">Yükleme Limanı</label>
                <input 
                  required
                  value={formData.loadPort}
                  onChange={e => setFormData({...formData, loadPort: e.target.value})}
                  placeholder="Yükleme" 
                  className="w-full h-12 px-4 bg-surface-container-low border border-outline-variant rounded-xl focus:outline-none focus:border-secondary transition-all" 
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-[10px] font-mono font-black text-on-surface-variant uppercase tracking-widest mb-1.5">Tahliye Limanı</label>
                <input 
                  required
                  value={formData.dischargePort}
                  onChange={e => setFormData({...formData, dischargePort: e.target.value})}
                  placeholder="Tahliye" 
                  className="w-full h-12 px-4 bg-surface-container-low border border-outline-variant rounded-xl focus:outline-none focus:border-secondary transition-all" 
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-[10px] font-mono font-black text-on-surface-variant uppercase tracking-widest mb-1.5">Laycan Başlangıç</label>
                <input 
                  required
                  type="date"
                  value={formData.laycanStart}
                  onChange={e => setFormData({...formData, laycanStart: e.target.value})}
                  className="w-full h-12 px-4 bg-surface-container-low border border-outline-variant rounded-xl focus:outline-none focus:border-secondary transition-all font-mono text-sm" 
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-[10px] font-mono font-black text-on-surface-variant uppercase tracking-widest mb-1.5">Laycan Bitiş</label>
                <input 
                  required
                  type="date"
                  value={formData.laycanEnd}
                  onChange={e => setFormData({...formData, laycanEnd: e.target.value})}
                  className="w-full h-12 px-4 bg-surface-container-low border border-outline-variant rounded-xl focus:outline-none focus:border-secondary transition-all font-mono text-sm" 
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-outline-variant flex justify-between items-center">
          <div className="flex items-center gap-2 text-on-surface-variant text-xs">
            <AlertCircle className="size-4 text-secondary" />
            <span>AI, bu ilan için 42 potansiyel eşleşme öngörüyor.</span>
          </div>
          <button 
            type="submit"
            disabled={isSubmitting}
            className={`px-10 py-4 rounded-xl font-mono text-xs font-black uppercase tracking-widest transition-all shadow-xl bg-primary text-on-primary hover:bg-primary-container flex items-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? (
              <>İşleniyor...</>
            ) : isSubmitted ? (
              <><CheckCircle2 className="size-4" /> Gönderildi!</>
            ) : (
              <>İlanı Yayınla</>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

const NegotiationRoomView = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Charterer', text: 'Anlaşılan Navlun: $24.50/mt. Lütfen 10-15 Ekim tarihleri için kesin teklifimizi değerlendirin.', time: '10:45' },
    { id: 2, sender: 'Owner', text: 'Gemi pozisyonu kritik. $26.00/mt altında bir rakamı şu an kabul edemiyoruz. Demurraj oranını $18,000 olarak bekliyoruz.', time: '11:02' }
  ]);
  const [inputValue, setInputValue] = useState('');

  const sendMessage = () => {
    if (!inputValue.trim()) return;
    const newMessage = {
      id: Date.now(),
      sender: 'Owner',
      text: inputValue,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages([...messages, newMessage]);
    setInputValue('');
  };

  return (
    <div className="h-[calc(100vh-160px)] flex flex-col lg:flex-row gap-8">
      <div className="flex-1 bg-white border border-outline-variant rounded-2xl flex flex-col shadow-sm relative overflow-hidden">
        <div className="p-6 border-b border-outline-variant flex justify-between items-center bg-surface-bright">
           <h4 className="font-serif text-xl font-bold text-primary">Müzakere Oturumu #CN-92</h4>
           <div className="flex items-center gap-2">
             <span className="font-mono text-[10px] font-black text-secondary uppercase bg-secondary/10 px-2 py-1 rounded">Canlı</span>
             <span className="font-mono text-[10px] font-black text-on-surface-variant uppercase bg-surface-container px-2 py-1 rounded">2 Katılımcı</span>
           </div>
        </div>
        
        <div className="flex-1 p-8 space-y-6 overflow-y-auto bg-surface-container-low/30 scroll-smooth">
           {messages.map((msg) => (
             <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               key={msg.id} 
               className={`flex flex-col ${msg.sender === 'Owner' ? 'items-end ml-auto' : 'items-start'} max-w-[80%]`}
             >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-black text-on-surface-variant font-mono uppercase">{msg.sender === 'Owner' ? 'Siz (Armatör)' : 'Kiracı (Broker)'}</span>
                  <span className="text-[9px] text-outline font-mono">{msg.time}</span>
                </div>
                <div className={`p-4 rounded-2xl shadow-sm text-sm border ${
                  msg.sender === 'Owner' 
                    ? 'bg-primary text-on-primary rounded-tr-none border-primary-container' 
                    : 'bg-white text-primary rounded-tl-none border-outline-variant'
                }`}>
                   {msg.text}
                </div>
             </motion.div>
           ))}

           <div className="mx-auto glass-panel border-l-4 border-secondary p-4 max-w-lg rounded-xl shadow-lg relative my-8">
              <Zap className="absolute top-2 right-2 size-4 text-secondary opacity-20" />
              <p className="text-[11px] font-sans italic text-on-surface-variant flex items-center gap-2">
                 <Zap className="size-4 text-secondary fill-secondary shrink-0" /> AI İpucu: Bu seviye, son 48 saatteki benzer kontratlara göre %5 daha kârlı. Hızlı aksiyon önerilir.
              </p>
           </div>
        </div>

        <div className="p-6 border-t border-outline-variant flex gap-4 bg-white">
          <button className="p-3 border border-outline-variant rounded-xl hover:bg-surface-container transition-colors"><Upload className="size-5 text-outline" /></button>
          <input 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            className="flex-1 h-12 bg-surface-container-low border border-outline-variant rounded-xl px-6 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all" 
            placeholder="Mesaj veya yeni şartlar yazın..." 
          />
          <button 
            onClick={sendMessage}
            className="px-8 h-12 bg-primary text-on-primary rounded-xl font-mono text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:bg-primary-container shadow-md"
          >
            Gönder <Send className="size-4" />
          </button>
        </div>
      </div>

      <div className="w-full lg:w-80 space-y-6">
        <div className="bg-white border border-outline-variant rounded-2xl p-6 shadow-sm">
          <h5 className="font-serif text-lg font-bold text-primary mb-4 border-b border-outline-variant pb-2">Bağlantı Özeti</h5>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="text-[10px] font-black font-mono uppercase text-outline mb-0.5">Gemi</p>
                <p className="text-xs font-bold text-primary">MV Nordic Star</p>
              </div>
              <div>
                <p className="text-[10px] font-black font-mono uppercase text-outline mb-0.5">Yük</p>
                <p className="text-xs font-bold text-primary">50k mt Çelik</p>
              </div>
            </div>
            <div className="p-3 bg-surface-container-low rounded-lg border border-outline-variant/50">
               <p className="text-[10px] font-black font-mono uppercase text-outline mb-1">Mevcut Teklif</p>
               <p className="text-xl font-serif font-black text-secondary">$26.00<span className="text-xs font-mono ml-1">/mt</span></p>
            </div>
            <button className="w-full py-4 mt-4 bg-secondary text-on-secondary rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg hover:bg-on-secondary-container transition-all">
              <Gavel className="size-4" /> Kesin Teklif Sun
            </button>
          </div>
        </div>

        <div className="bg-surface-container-high border border-outline-variant rounded-2xl p-6 shadow-inner">
           <h5 className="font-mono text-[10px] font-black text-primary uppercase tracking-widest mb-4">Müzakere Geçmişi</h5>
           <div className="space-y-3">
              {[
                { label: 'Başlangıç', val: '$28.00', date: '09:00' },
                { label: 'Counter 1', val: '$23.50', date: '09:30' },
                { label: 'Counter 2', val: '$27.00', date: '10:00' },
              ].map((h, i) => (
                <div key={i} className="flex justify-between items-center text-xs">
                  <span className="text-on-surface-variant font-medium">{h.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-primary">{h.val}</span>
                    <span className="text-[9px] text-outline font-mono">{h.date}</span>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

// --- App Entry ---

export default function App() {
  const [globalView, setGlobalView] = useState<GlobalView>('landing');
  const [activeTab, setActiveTab] = useState<AppTab>('match');

  const getTitle = () => {
    switch(activeTab) {
      case 'match': return 'Match Analysis';
      case 'market': return 'Pazar Yeri';
      case 'vessels': return 'Gemi Yönetimi';
      case 'cargo': return 'Yeni Yük İlanı';
      case 'tracking': return 'Sefer Takibi';
      case 'negotiation': return 'Müzakere Odası';
      default: return 'ShipAI';
    }
  }

  if (globalView !== 'app') {
    return (
      <div className="min-h-screen bg-background font-sans selection:bg-secondary/20 scroll-smooth">
        <AnimatePresence mode="wait">
          <motion.div
            key={globalView}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {globalView === 'landing' && <LandingHeroView setView={setGlobalView} />}
            {globalView === 'solutions' && <SolutionsView setView={setGlobalView} />}
            {globalView === 'how-it-works' && <HowItWorksView setView={setGlobalView} />}
            {globalView === 'pricing' && <PricingView setView={setGlobalView} />}
            {globalView === 'contact' && <ContactView setView={setGlobalView} />}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-secondary/20 scroll-smooth">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="ml-20 flex flex-col transition-all">
        <header className="h-16 px-8 flex items-center justify-between border-b border-outline-variant bg-surface/80 backdrop-blur-md sticky top-0 z-40">
          <h2 className="font-serif text-xl font-bold text-primary">{getTitle()}</h2>
          
          <div className="flex-1 max-w-md mx-8 hidden md:block">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-outline group-focus-within:text-secondary" />
              <input 
                type="text" 
                placeholder="Gemi, yük veya liman ara..." 
                className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-full text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 pr-4 border-r border-outline-variant">
              <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors relative">
                <Bell className="size-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
              </button>
              <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors">
                <History className="size-5" />
              </button>
              <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors">
                <HelpCircle className="size-5" />
              </button>
            </div>
            
            <button 
              onClick={() => setGlobalView('landing')}
              className="ml-2 px-3 py-1.5 border border-outline-variant rounded-lg font-mono text-[9px] font-black uppercase text-on-surface-variant hover:bg-surface-container transition-all"
            >
              Çıkış Yap
            </button>

            <div className="flex items-center gap-3 pl-2 cursor-pointer group">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-primary leading-tight">Ezgi Saglamci</p>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-mono">Chartering Manager</p>
              </div>
              <div className="w-10 h-10 rounded-full border border-outline-variant overflow-hidden ring-2 ring-transparent group-hover:ring-secondary/20 transition-all shadow-sm">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" alt="Avatar" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </header>
        
        <main className="flex-1 p-8 max-w-7xl mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              {activeTab === 'match' && <MatchAnalysisView onStartNegotiation={() => setActiveTab('negotiation')} />}
              {activeTab === 'market' && <MarketplaceView onQuickMatch={() => setActiveTab('negotiation')} />}
              {activeTab === 'vessels' && <VesselManagementView />}
              {activeTab === 'tracking' && <TrackingView />}
              {activeTab === 'cargo' && <CargoInquiryView />}
              {activeTab === 'negotiation' && <NegotiationRoomView />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
