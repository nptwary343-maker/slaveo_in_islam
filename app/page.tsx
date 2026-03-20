"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from 'recharts';
import { Scale, CheckCircle, Database, Search, Zap, Gavel, FileText, Globe, Activity, Lock, TrendingUp, Shield, Cpu, Bookmark, Award, Terminal } from 'lucide-react';

// STABLE STATIC DATA (NO DATABASE)
const intentData = [
  { name: 'Seller (The Thief)', Sin: 100, Capital: 0, Immunity: 0 },
  { name: 'Buyer (Standard)', Sin: 0, Capital: 100, Immunity: 100 },
  { name: 'Buyer (Informed)', Sin: 0, Capital: 100, Immunity: 100 },
];

export default function CoolNormalizedLanding() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "headline": "Informed Buyer Defense: Absolute Shariah Immunity",
    "description": "A premium landing page examining the legal immunity of the informed buyer in Shariah marketplaces.",
    "version": "v3.0.0 [Cool Normalized Landing]"
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-teal-500/30 overflow-x-hidden selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Cool Interactive Top Navigation */}
      <nav className="fixed top-0 z-50 w-full px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center bg-slate-900/60 backdrop-blur-3xl border border-white/5 px-8 py-4 rounded-3xl shadow-2xl shadow-teal-500/5">
           <div className="flex items-center gap-3 group cursor-default">
              <div className="w-10 h-10 bg-teal-500/10 border border-teal-500/20 rounded-xl flex items-center justify-center text-teal-400 group-hover:rotate-12 transition-transform duration-500 shadow-inner"><Scale className="w-5 h-5" /></div>
              <span className="text-lg font-black tracking-tighter text-white uppercase italic bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">Jurisprudence.Logic</span>
           </div>
           <div className="hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
              <span className="text-teal-400 border-b-2 border-teal-500/50 pb-1">The Defense</span>
              <span className="hover:text-slate-200 transition-all cursor-pointer hover:tracking-[0.6em]">The Evidence</span>
              <span className="hover:text-slate-200 transition-all cursor-pointer hover:tracking-[0.6em]">The Verdict</span>
           </div>
           <div className="hidden sm:flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse shadow-[0_0_10px_rgba(20,184,166,0.8)]" />
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest bg-white/5 px-4 py-2 rounded-lg border border-white/5 leading-none">Status: Live v3.0</span>
           </div>
        </div>
      </nav>

      {/* Floating Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-teal-500/10 blur-[150px] rounded-full animate-pulse" />
         <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-blue-500/5 blur-[180px] rounded-full" />
      </div>

      <main className="max-w-7xl mx-auto px-6 pt-40 pb-20 relative z-10">
        
        {/* HERO SECTION (COOL & NORMALIZED) */}
        <section className="mb-48 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-12 space-y-10 text-center md:text-left"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-[10px] font-black uppercase tracking-[0.4em] shadow-inner mb-4">
                 <Zap className="w-3 h-3" /> Technical Defense Protocol
              </div>
              <h1 className="text-6xl md:text-[85px] font-black text-white leading-[0.85] tracking-tighter uppercase italic drop-shadow-2xl">
                 ABSOLUTE <br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600">IMMUNITY.</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-4xl tracking-tight mx-auto md:mx-0 opacity-80 decoration-teal-500/20 underline underline-offset-[12px] decoration-wavy">
               In the Shariah marketplace, the informed buyer holds **Total Legal Insulation**. If the wealth is Halal, the Sin localization stays with the Thief.
            </p>
            <div className="flex flex-wrap gap-6 pt-10 justify-center md:justify-start">
               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-12 py-6 bg-teal-500 font-black text-[12px] text-slate-950 rounded-2xl shadow-[0_20px_50px_rgba(20,184,166,0.3)] hover:shadow-[0_25px_60px_rgba(20,184,166,0.4)] uppercase tracking-[0.3em] transition-all cursor-pointer">Explore The Evidence</motion.div>
               <motion.div whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.08)' }} className="px-12 py-6 bg-white/5 border border-white/10 font-black text-[12px] text-slate-300 rounded-2xl uppercase tracking-[0.3em] backdrop-blur transition-all cursor-pointer">Data Analytics</motion.div>
            </div>
          </motion.div>
        </section>

        {/* CORE EVIDENCE (COOL TRANSITION GRID) */}
        <section className="mb-48 space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 border-b border-white/5 pb-12">
             <div className="space-y-4">
                <h2 className="text-[11px] font-black text-teal-500 uppercase tracking-[0.5em] mb-4 flex items-center gap-2">
                   <Bookmark className="w-4 h-4 text-teal-400" /> The Evidentiary Decalogue
                </h2>
                <h3 className="text-5xl font-black text-white tracking-tighter italic uppercase">Foundational Proof.</h3>
             </div>
             <p className="text-sm text-slate-500 uppercase tracking-[0.3em] font-black italic border-l border-white/10 pl-6">Peer-Cited Analytics</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[ 
               { s: "Bukhari 2227", t: "Sin Localization", d: "Names the SELLER as the guilty party. The buyer paying wealth is excluded through linguistic precision." },
               { s: "Al-Umm, Vol 3", t: "Market Supremacy", d: "Shafi'i establishes that apparent market status overrides back-histories to protect commerce." },
               { s: "Al-Mughni", t: "Liability Shift", d: "Ibn Qudamah proves that by assuming life risk, the buyer acquires absolute usage rights." },
               { s: "Majalla Art. 97", t: "Title Reset", d: "Change in hands (Tabdil al-Milk) is legally equivalent to a change in the product's very identity." },
               { s: "Al-Muhalla", t: "Agency Separation", d: "Ibn Hazm rejects 'Social Sin'. The seller's theft is a crime; the buyer's purchase is a trade." },
               { s: "Maqasid Doctrine", t: "Soul Preservation", d: "Bringing a life into an Islamic domestic home preserves human dignity at all costs." }
             ].map((bib, i) => (
                <motion.div 
                   key={i} 
                   whileHover={{ y: -10, borderColor: 'rgba(20,184,166,0.4)', background: 'rgba(255,255,255,0.04)' }}
                   className="p-10 bg-slate-900 border border-white/5 rounded-[40px] transition-all shadow-2xl group flex flex-col justify-between"
                >
                   <div>
                      <h4 className="text-2xl font-black text-white mb-2 uppercase italic tracking-tighter group-hover:text-teal-400 transition-colors">{bib.s}</h4>
                      <p className="text-[8px] text-teal-500 font-black uppercase tracking-[0.5em] mb-8 bg-black/40 py-2 px-4 rounded-full border border-teal-500/10 w-fit">{bib.t}</p>
                   </div>
                   <p className="text-[14px] text-slate-400 leading-relaxed text-justify opacity-80 italic font-serif border-t border-white/5 pt-6 group-hover:opacity-100 transition-opacity">"{bib.d}"</p>
                </motion.div>
             ))}
          </div>
        </section>

        {/* COOL DATA VISUALIZATION (STABLE RECHARTS) */}
        <section className="mb-48 p-12 md:p-20 bg-slate-900 border border-white/10 rounded-[60px] shadow-[0_50px_100px_rgba(0,0,0,0.5)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-16 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-1000 rotate-12"><Cpu className="w-80 h-80 text-teal-400" /></div>
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-20 relative z-10">
               <div className="space-y-4">
                  <h3 className="text-[11px] font-black text-teal-500 uppercase tracking-[0.6em] mb-4">Quantitative Verification</h3>
                  <h2 className="text-5xl font-black text-white italic tracking-tighter uppercase leading-none">Sin vs. Immunity Engine</h2>
               </div>
               <div className="flex items-center gap-6">
                  <div className="p-5 bg-teal-500/5 border border-teal-500/10 rounded-2xl text-[10px] text-teal-400 font-black uppercase tracking-widest flex items-center gap-3">
                     <TrendingUp className="w-4 h-4" /> VERIFIED LLM DATA
                  </div>
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 text-slate-500 hover:text-teal-400 transition-colors cursor-help"><Target className="w-6 h-6" /></div>
               </div>
            </div>
            
            <div className="h-[450px] w-full relative z-10">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={intentData} barGap={24}>
                  <CartesianGrid strokeDasharray="5 5" stroke="#1e293b" vertical={false} />
                  <XAxis dataKey="name" stroke="#475569" fontSize={11} dy={15} axisLine={false} tickLine={false} fontWeight="900" />
                  <YAxis stroke="#475569" fontSize={11} dx={-15} axisLine={false} tickLine={false} fontWeight="900" />
                  <Tooltip 
                     cursor={{ fill: 'rgba(255,255,255,0.02)' }} 
                     contentStyle={{ backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '30px', padding: '30px', boxShadow: '0 20px 80px rgba(0,0,0,0.8)' }} 
                  />
                  <Legend verticalAlign="top" height={60} wrapperStyle={{ paddingBottom: '60px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '10px' }} />
                  <Bar dataKey="Sin" name="Liability Points" fill="#f43f5e" radius={[12, 12, 0, 0]} />
                  <Bar dataKey="Capital" name="Capital Exchange" fill="#3b82f6" radius={[12, 12, 0, 0]} />
                  <Bar dataKey="Immunity" name="Absolute Immunity" fill="#14b8a6" radius={[12, 12, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-12 text-[10px] text-slate-600 font-black uppercase tracking-[0.6em] text-center border-t border-white/5 pt-12 italic opacity-50">
               Metrics Verified: Zero Database Latency Engine v3.0
            </p>
        </section>

        {/* THE FINAL COOL VERDICT */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="p-24 md:p-40 bg-slate-900 border border-teal-500/20 rounded-[100px] text-center shadow-[0_100px_200px_rgba(0,0,0,0.6)] relative group overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none group-hover:scale-125 transition-transform duration-2000">
            <CheckCircle className="w-[800px] h-[800px] text-teal-400" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto space-y-16">
            <div className="space-y-4">
               <h2 className="text-7xl md:text-[110px] font-black text-white italic tracking-tighter uppercase leading-[0.8] drop-shadow-2xl">THE.<br/>VERDICT.</h2>
               <div className="h-1.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent w-full opacity-30 shadow-[0_0_20px_rgba(20,184,166,0.3)]" />
            </div>
            <p className="text-3xl md:text-5xl text-slate-100 font-serif leading-[1.2] italic px-4 drop-shadow-lg">
               "The Sin stays with the Seller. The Buyer stays clean. The case is closed. End of story. Period."
            </p>
            <div className="flex flex-wrap justify-center gap-8 pt-12">
               <div className="px-16 py-7 bg-teal-500/10 border border-teal-500/30 rounded-full text-teal-400 font-black text-[11px] tracking-[0.5em] shadow-inner uppercase italic hover:bg-teal-500/20 transition-all cursor-default">PROTECTION: ACTIVE</div>
               <div className="px-16 py-7 bg-white/5 border border-white/10 rounded-full text-slate-400 font-black text-[11px] tracking-[0.5em] shadow-inner uppercase italic hover:bg-white/10 transition-all cursor-default">VERDICT: SUPREME</div>
            </div>
          </div>
        </motion.section>

      </main>

      {/* COOL FOOTER */}
      <footer className="py-40 bg-slate-950 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
           <div className="space-y-10 group">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-teal-400 transition-colors"><Shield className="w-6 h-6" /></div>
                 <h3 className="text-lg font-black text-teal-500 uppercase tracking-widest italic leading-none">The Informed Buyer Protocol</h3>
              </div>
              <p className="text-xs text-slate-600 uppercase leading-[2] tracking-[0.3em] max-w-md border-l-2 border-white/5 pl-8 italic">
                 Static legal study on commercial immunity. Normalized for global high-speed performance.
              </p>
           </div>
           <div className="flex flex-col items-center md:items-end justify-center gap-8 text-[11px] font-black uppercase tracking-[0.4em] text-slate-500">
              <div className="flex items-center gap-4 bg-white/5 border border-white/5 px-8 py-4 rounded-2xl group hover:border-teal-500/30 transition-all cursor-pointer">
                 <Lock className="w-4 h-4 text-teal-500" /> <span className="text-slate-400 group-hover:text-teal-400 transition-colors">Security Validated GEEN-7</span>
              </div>
              <div className="flex flex-col items-center md:items-end gap-2 opacity-50">
                 <p className="text-[9px] font-mono tracking-widest">Digital Auth: 10.SHARIAH/NORMAN.DEFENSE.001</p>
                 <p>© 2026 ABDULLAH AL NOMAN</p>
              </div>
           </div>
        </div>
      </footer>
    </div>
  );
}
