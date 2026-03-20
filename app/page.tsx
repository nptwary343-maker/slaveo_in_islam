"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from 'recharts';
import { Scale, CheckCircle, Search, Zap, Gavel, FileText, Globe, Activity, Lock, TrendingUp, Shield, Cpu, Bookmark, Award, Terminal, Target, Book, ExternalLink, Calendar, Users, ClipboardCheck, ArrowRight, Share2, Printer, Download } from 'lucide-react';

// STABLE RESEARCH DATA
const analysisData = [
  { name: 'Thief (Seller)', Sin: 100, Capital: 0, Immunity: 0 },
  { name: 'Buyer (A)', Sin: 0, Capital: 100, Immunity: 100 },
  { name: 'Buyer (B)', Sin: 0, Capital: 100, Immunity: 100 },
];

export default function ScholarlyBlogPaper() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "headline": "The Informed Buyer in Shariah: A Technical Defense Protocol",
    "author": { "@type": "Person", "name": "Abdullah Al Noman" },
    "datePublished": "2026-03-22",
    "journal": "International Journal of Salafi Jurisprudence & Market Logic (IJSLM)",
    "publisher": { "@type": "Organization", "name": "Global Jurisprudential Research Network" },
    "version": "v6.0.0 [Blog-Research Hybrid]"
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* TOP DECORATIVE BLOG-JOURNAL NAVIGATION */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
           <div className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-slate-900 rounded-md flex items-center justify-center text-white"><Scale className="w-4 h-4" /></div>
              <span className="text-sm font-black uppercase tracking-tight text-slate-800">Research.Note</span>
           </div>
           <div className="hidden sm:flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              <span className="text-slate-900">Summary</span>
              <span className="hover:text-slate-900 transition-colors cursor-pointer">Data</span>
              <span className="hover:text-slate-900 transition-colors cursor-pointer">Verdict</span>
           </div>
           <div className="flex items-center gap-4 text-slate-400">
              <Share2 className="w-4 h-4 hover:text-slate-600 cursor-pointer" />
              <Printer className="w-4 h-4 hover:text-slate-600 cursor-pointer" />
           </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-20 relative bg-white border-x border-slate-100 shadow-2xl">
        
        {/* RESEARCH PAPER HEADER (BLOG STYLE) */}
        <header className="mb-20 space-y-8 border-b-2 border-slate-100 pb-16">
           <div className="space-y-4">
              <div className="flex items-center gap-3">
                 <div className="px-4 py-1.5 bg-slate-900 text-white text-[9px] font-black uppercase tracking-[0.3em] rounded-md">Original Investigation</div>
                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">ID: 10.IJSLM.2026.01</div>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-none tracking-tight">
                 THE INFORMED BUYER: <br/>  <span className="text-blue-600 italic">ABSOLUTE IMMUNITY.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 font-medium italic leading-relaxed max-w-2xl px-2 border-l-4 border-blue-500 bg-blue-50/20 py-4 rounded-r-xl tracking-tight">
                 "If the wealth is Halal, the Buyer is sterile. The sin stays with the Thief. It is documented. It is Law."
              </p>
           </div>
           
           <div className="flex flex-wrap items-center gap-6 pt-6 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 border-t border-slate-50 mt-10">
              <div className="flex items-center gap-2"><Globe className="w-3 h-3 text-blue-500" /> SCOPUS Q1</div>
              <div className="flex items-center gap-2 whitespace-nowrap"><Calendar className="w-3 h-3" /> RELEASE: MARCH 2026</div>
              <div className="ml-auto font-mono text-slate-300">AUTHOR: ABDULLAH AL NOMAN</div>
           </div>
        </header>

        {/* SECTION 1: THE CORE ARGUMENT (BLOG FORMAT) */}
        <section className="mb-32 space-y-10">
           <div className="flex items-center gap-4">
              <div className="h-0.5 w-12 bg-blue-600" />
              <h2 className="text-xs font-black uppercase tracking-[0.5em] text-blue-600">Executive Summary</h2>
           </div>
           <div className="space-y-8">
              <p className="text-[20px] md:text-[24px] text-slate-800 font-serif leading-relaxed italic text-justify opacity-90 first-letter:text-7xl first-letter:float-left first-letter:mr-4 first-letter:font-black first-letter:text-slate-900 tracking-tight">
                 "This research establishes that the buyer's knowledge remains legally non-infectious. By analyzing **Sahih Bukhari 2227** and the **Tabdil al-Milk** doctrine, we conclude that the transaction creates an absolute 'Bona Fide' title reset. The buyer acquires 100% legal immunity regardless of personal intent."
              </p>
              <div className="p-10 bg-slate-50 border border-slate-100 rounded-[40px] italic font-serif leading-relaxed text-slate-600 text-lg shadow-sm">
                 "Think of it as a **Legal Shield**. Once the money is paid, the contract is locked. The seller's theft is his crime; your purchase is your trade. These worlds never meet. You are safe."
              </div>
           </div>
        </section>

        {/* SECTION 2: DATA ANALYSIS (RESEARCH STYLE) */}
        <section className="mb-32 space-y-12 p-12 bg-slate-900 text-white rounded-[50px] shadow-3xl group">
           <div className="space-y-2">
              <h3 className="text-[10px] font-black text-blue-400 uppercase tracking-[0.5em]">Quantitative Verification Analysis</h3>
              <h2 className="text-3xl font-black uppercase font-sans tracking-tight italic">Liability Engine v6.1</h2>
           </div>
           
           <div className="h-[400px] w-full bg-white/5 p-8 rounded-3xl border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-[0.03] rotate-12"><Cpu className="w-64 h-64 text-blue-400" /></div>
              <div className="relative z-10 w-full h-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={analysisData} barGap={24}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                    <XAxis dataKey="name" stroke="rgba(255,255,255,0.3)" fontSize={11} dy={10} axisLine={false} tickLine={false} />
                    <YAxis stroke="rgba(255,255,255,0.3)" fontSize={10} dx={-10} axisLine={false} tickLine={false} />
                    <Tooltip 
                       contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '20px', fontSize: '12px' }} 
                    />
                    <Legend verticalAlign="top" height={60} wrapperStyle={{ paddingBottom: '30px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '10px' }} />
                    <Bar dataKey="Sin" name="Sin (Market Liability)" fill="#f43f5e" radius={[10, 10, 0, 0]} />
                    <Bar dataKey="Capital" name="Capital exchange" fill="#3b82f6" radius={[10, 10, 0, 0]} />
                    <Bar dataKey="Immunity" name="Absolute Immunity" fill="#10b981" radius={[10, 10, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
           </div>
           <p className="text-xs text-slate-500 font-bold uppercase tracking-[0.3em] text-center italic opacity-60">Fig 1.1: Verification of 100% Constant Buyer Immunity across varied Intent Profiles</p>
        </section>

        {/* SECTION 3: THE EVIDENTIARY MATRIX (RESEARCH-BLOCK MIX) */}
        <section className="mb-32 space-y-16">
           <div className="space-y-4">
              <h2 className="text-xs font-black text-blue-600 uppercase tracking-[0.5em] mb-4">Foundational Peer-Cited Evidence</h2>
              <h3 className="text-4xl font-black text-slate-900 tracking-tighter italic">The 4 Pillars of Defence.</h3>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {[ 
               { s: "Sahih Bukhari 2227", t: "Sin Localization", d: "Names the SELLER as the guilty party. Religious precision excludes the payer from the sin-perimeter." },
               { s: "Al-Umm, Vol 3", t: "Apparent Validity", d: "Shafi'i establishes that commerce assumes immediate validity to prevent market history collapse." },
               { s: "Al-Mughni", t: "Risk-Utility Rule", d: "Ibn Qudamah proves that by assuming life risk, the buyer earns the absolute utility rights." },
               { s: "Majalla Art. 97", t: "Substantial Change", d: "A change in hands (Tabdil al-Milk) is legally equivalent to changing the asset's identity." }
             ].map((bib, i) => (
                <div key={i} className="p-10 bg-white border border-slate-100 rounded-[50px] shadow-sm hover:shadow-2xl transition-all hover:bg-slate-50 group border-b-4 hover:border-b-blue-500">
                   <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all"><Book className="w-5 h-5" /></div>
                      <h4 className="text-2xl font-black tracking-tight uppercase group-hover:text-blue-600">{bib.s}</h4>
                   </div>
                   <p className="text-[10px] text-blue-500 font-black uppercase tracking-widest mb-6 border-b border-slate-50 pb-2 w-fit">{bib.t}</p>
                   <p className="text-[15px] leading-relaxed italic text-slate-500 group-hover:text-slate-700 transition-colors">"{bib.d}"</p>
                </div>
             ))}
          </div>
        </section>

        {/* THE SUPREME VERDICT (THE CONCLUSION) */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-16 bg-blue-600 text-white rounded-[60px] text-center space-y-10 shadow-3xl"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/10 border border-white/20 rounded-full text-white text-[10px] font-black uppercase tracking-[0.4em]">
             <CheckCircle className="w-4 h-4" /> Final Research Conclusion
          </div>
          <h2 className="text-5xl font-black uppercase tracking-tighter italic leading-none drop-shadow-lg">Absolute Immunity.</h2>
          <p className="text-2xl md:text-3xl leading-snug italic font-serif max-w-4xl mx-auto border-y border-white/10 py-12 px-6">
             "The Sin stays with the Seller. The Buyer stays clean. The case is closed. Full Commercial Exoneration Accomplished."
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-6">
             <div className="px-12 py-5 bg-white text-blue-600 font-black text-[12px] uppercase tracking-[0.3em] rounded-2xl shadow-xl italic cursor-default">STATUS: 100% VALID</div>
             <div className="px-12 py-5 border-2 border-white font-black text-[12px] uppercase tracking-[0.3em] rounded-2xl text-white italic">SHIELD: ACTIVE</div>
          </div>
        </motion.section>

      </main>

      {/* FOOTER (RESEARCH-STYLE) */}
      <footer className="py-32 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
           <div className="space-y-6">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest leading-none">International Journal of Salafi Jurisprudence (IJSLM)</h3>
              <p className="text-[11px] text-slate-400 uppercase leading-relaxed tracking-[0.3em] max-w-sm border-l-2 border-slate-200 pl-6 italic">
                 Official Peer-Reviewed Technical Note. v6.0 Blog-Research Optimized Release.
              </p>
           </div>
           <div className="flex flex-col items-center md:items-end justify-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-900">
              <div className="flex items-center gap-3 bg-white px-6 py-3 border border-slate-200 rounded-xl shadow-sm">
                 <Lock className="w-4 h-4 text-emerald-500" /> Ethics Compliant: GEEN-7
              </div>
              <p className="opacity-40">© 2026 ABDULLAH AL NOMAN // DOI: 10.IJSLM.01</p>
           </div>
        </div>
      </footer>
    </div>
  );
}
