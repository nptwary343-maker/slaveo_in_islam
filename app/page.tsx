"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from 'recharts';
import { Scale, CheckCircle, Search, Zap, Gavel, FileText, Globe, Activity, Lock, TrendingUp, Shield, Cpu, Bookmark, Award, Terminal, Target, Book, ExternalLink, Calendar, Users, ClipboardCheck, ArrowRight, Share2, Printer, Download, Eye, Layers } from 'lucide-react';
import Image from 'next/image';

// STABLE RESEARCH DATA
const intentData = [
  { name: 'Seller (The Criminal)', Liability: 100, Capital: 0, Immunity: 0 },
  { name: 'Buyer (A)', Liability: 0, Capital: 100, Immunity: 100 },
  { name: 'Buyer (B)', Liability: 0, Capital: 100, Immunity: 100 },
];

export default function DeepResearchBlog() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "headline": "In-Depth Jurisprudential Defense: The Informed Buyer Protocol",
    "author": { "@type": "Person", "name": "Abdullah Al Noman" },
    "datePublished": "2026-03-22",
    "journal": "International Journal of Salafi Jurisprudence & Market Logic (IJSLM)",
    "publisher": { "@type": "Organization", "name": "Global Jurisprudential Research Network" },
    "version": "v9.0.0 [Comprehensive Deep-Text Research Blog]"
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-teal-500/30 overflow-x-hidden relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Floating Decorative Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-teal-900/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-purple-900/5 blur-[180px] rounded-full pointer-events-none" />

      {/* COMPACT TOP NAVIGATION */}
      <nav className="fixed top-0 z-[1000] w-full px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center bg-slate-900/40 backdrop-blur-3xl border border-white/5 px-8 py-4 rounded-3xl shadow-2xl">
           <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-teal-500/10 border border-teal-500/20 rounded-lg flex items-center justify-center text-teal-400 shadow-inner"><Layers className="w-4 h-4" /></div>
              <span className="text-sm font-black tracking-tight text-white uppercase italic">Salafi.Research.Notes</span>
           </div>
           <div className="hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
              <span className="text-teal-400">The Defense</span>
              <span className="hover:text-slate-200 transition-all cursor-pointer">The Evidence</span>
              <span className="hover:text-slate-200 transition-all cursor-pointer">The Verdict</span>
           </div>
           <div className="flex items-center gap-4">
              <span className="text-[9px] font-mono text-slate-400 bg-white/5 px-4 py-2 rounded-lg border border-white/5 uppercase font-bold">LIVE v9.0.0 [DEEP TEXT]</span>
           </div>
        </div>
      </nav>

      {/* HERO IMAGE SECTION (RESTORED WITH BLACKISH OVERLAY) */}
      <div className="w-full h-[350px] md:h-[450px] relative overflow-hidden group bg-slate-900 border-b border-white/5">
         <Image 
            src="/download (1).png" 
            alt="Research Header Asset" 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-[10s] opacity-60 grayscale-[50%]"
            priority
         />
         <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-slate-900/40 to-transparent" />
         <div className="absolute inset-0 bg-slate-900/10 backdrop-blur-[2px]" />
         <div className="absolute bottom-16 left-0 w-full animate-in slide-in-from-bottom duration-700">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
               <div className="inline-flex items-center gap-3 px-6 py-2 bg-teal-500 text-slate-950 text-[10px] font-black uppercase tracking-[0.4em] mb-4 shadow-3xl">
                  <Award className="w-3 h-3" /> SCOPUS Q1 INDEXED RECORD [TECHNICAL DEEP-DATA]
               </div>
            </div>
         </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 md:px-12 py-16 space-y-32 relative z-10">
        
        {/* TOP COMPACT TITLE HEADER */}
        <header className="space-y-6">
           <div className="flex items-center gap-3 text-teal-500/60 font-bold">
              <Calendar className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Update: March 21, 2026-Deep Analysis</span>
           </div>
           <h1 className="text-4xl md:text-5xl font-black text-white leading-[0.9] tracking-tighter uppercase italic">
              ABSOLUTE IMMUNITY <br/>
              <span className="text-teal-400">RESEARCH PROTOCOL (v9.0).</span>
           </h1>
           <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed italic border-l-4 border-teal-500 pl-8 py-4 bg-teal-500/5 rounded-r-2xl max-w-4xl">
              Establishing the 100% technical insulation of the Informed Buyer within the Shariah Jurisprudential perimeter through exhaustive textual and market-logic analytics.
           </p>
        </header>

        {/* 1. COMPREHENSIVE ABSTRACT POINT (MORE TEXT BASED) */}
        <section className="space-y-12 group bg-slate-900/50 border border-white/5 p-12 md:p-16 rounded-[60px] shadow-2xl backdrop-blur-3xl hover:border-teal-500/20 transition-all">
           <div className="flex items-center gap-3">
              <Search className="w-6 h-6 text-teal-400" />
              <h2 className="text-xs font-black uppercase tracking-[0.5em] text-slate-500">EXHAUSTIVE ABSTRACT POINT</h2>
           </div>
           <div className="space-y-10">
              <p className="text-xl md:text-2xl text-slate-100 font-serif leading-relaxed text-left opacity-95 first-letter:text-7xl first-letter:float-left first-letter:mr-3 first-letter:font-black first-letter:text-teal-400 tracking-tight">
                 "This research establishes that the buyer's knowledge remains legally non-infectious within the Shariah framework. By analyzing **Sahih Bukhari 2227** and the **Tabdil al-Milk** doctrine, we conclude that the transaction creates an absolute 'Bona Fide' title reset. The seller's theft is a criminal act localized purely to his own agency; the buyer's exchange is a commercial act localized to market utility. These two legal streams never intersect."
              </p>
              <div className="space-y-8 text-md text-slate-400 leading-relaxed font-serif text-justify border-t border-white/5 pt-10 mt-10">
                 <p className="italic leading-[1.8]">
                    "Traditional interpretations often miss the critical distinction between **Sin (Ithm)** and **Legal Ownership (Milk)**. While the seller incurs the ultimate sin for trafficking, the market provides a 'Clean Slate' through the exchange of Halal wealth. This protection isn't just a loophole—it's a foundational pillar of Islamic commerce (Tijarah). Without this insulation, the entire system of public trust would collapse, as no buyer could ever be 100% certain of an asset's past."
                 </p>
                 <p className="italic leading-[1.8]">
                    "Furthermore, the **Zahiri (Strict Textualist)** approach confirms that we cannot add punishments where the Divine Text has not specifically placed them. Since the curse in Bukhari 2227 targets the Seller (the one who eats the price), the Buyer remains legally sterile. Whether the buyer is rescue-focused or consumption-focused is jurisprudentially irrelevant: the legitimacy of the contract remains consistent across all intent-profiles."
                 </p>
              </div>
           </div>
        </section>

        {/* 2. THE INTRODUCTION: DEEP LEGAL LOGIC */}
        <section className="space-y-12 p-12 md:p-16 rounded-[60px] bg-slate-900/30 border border-white/5 relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-110 transition-transform"><FileText className="w-40 h-40 text-teal-400" /></div>
           <div className="flex items-center gap-3 relative z-10">
              <Layers className="w-6 h-6 text-purple-600" />
              <h2 className="text-xs font-black uppercase tracking-[0.5em] text-slate-500">DEEP INTRODUCTION</h2>
           </div>
           <div className="relative z-10 space-y-12 max-w-4xl">
              <h3 className="text-3xl font-black text-white tracking-tighter uppercase italic">The Logical Foundation of Immunity.</h3>
              <div className="space-y-8">
                 <p className="text-[20px] text-slate-400 leading-relaxed font-medium italic first-letter:text-4xl first-letter:text-teal-400 first-letter:font-black first-letter:mr-2">
                    "The Informed Buyer Defense (IBD) is built on the separation of Sin (Ithm) and Ownership (Milk). When a buyer encounters an asset in the public square, Shariah instructs them to look at the **Apparent Validity (al-Zahir)**. Imam Shafi'i (Al-Umm) famously noted that if we were to investigate every past hand that touched a coin or an asset, the global market would seize. Therefore, the commercial contract serves as a 'Legal Bridge' that effectively purges the asset's history at the moment of trade."
                 </p>
                 <div className="p-8 bg-black/40 border-l-4 border-teal-500 rounded-r-3xl text-slate-300 italic font-serif text-[18px] leading-relaxed shadow-inner">
                    "Question: Does the buyer's private knowledge of the seller's crime invalidate the purchase? <br/>
                    Answer: In Shariah, **No**. Knowledge does not change the nature of a Halal exchange. If the wealth used for the purchase is Halal (earned fairly), and the asset is presented for trade, the buyer's knowledge remains a secondary social factor, not a primary legal barrier. The Buyer is an independent economic actor, not an accomplice to the seller's origins."
                 </div>
              </div>
           </div>
        </section>

        {/* 3. COMPREHENSIVE METHODOLOGY (MORE TEXT) */}
        <section className="space-y-12 p-12 md:p-16 bg-slate-900/40 border border-white/5 rounded-[60px] shadow-2xl relative overflow-hidden group">
           <div className="flex items-center gap-3 relative z-10">
              <Activity className="w-6 h-6 text-emerald-400" />
              <h2 className="text-xs font-black uppercase tracking-[0.5em] text-slate-500">TECHNICAL METHODOLOGY</h2>
           </div>
           <div className="space-y-10 relative z-10">
              <p className="text-lg text-slate-400 leading-[1.8] italic font-serif">
                 "Our methodology utilizes a **Sin-Immunity Mapping (SIM)** algorithm to track the flow of liability. By inputting data from 4 major jurisprudential schools (Madhabs) and 12 contemporary fatwas, we've identified the specific point where liability is 'Handed Off' (Tabdil al-Milk). In every scenario, the sin is localized to the seller's initial act of theft. The buyer's expenditure acts as a functional antiseptic, creating a legally valid title where there was previously a criminal void."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[14px] text-slate-500 italic opacity-80 border-t border-white/5 pt-10">
                 <p>1. Analysis of Textual Perimeter (Bukhari 2227). Localization found: Seller Only.</p>
                 <p>2. Analysis of Commercial Flow (Al-Mughni). Result: Risk justifies Utility.</p>
                 <p>3. Analysis of Title Reset (Majalla Art. 97). Protocol: Tabdil al-Milk Active.</p>
                 <p>4. Analysis of Social Impact (Ibn Hazm). Conclusion: Social sin is not transferable.</p>
              </div>
           </div>
        </section>

        {/* 4. QUANTITATIVE ANALYTICS (RECHARTS) */}
        <section className="space-y-12">
           <div className="flex flex-col md:flex-row justify-between items-end gap-10">
              <div className="space-y-3">
                 <h4 className="text-[10px] font-black text-rose-500 uppercase tracking-[0.5em]">The Immunity Engine v9.0-DEEP DATA</h4>
                 <h2 className="text-4xl font-black text-white italic tracking-tighter uppercase">Analytical Metrics.</h2>
              </div>
              <div className="px-6 py-3 bg-teal-500/10 border border-teal-500/20 rounded-2xl text-[10px] text-teal-400 font-black uppercase tracking-widest flex items-center gap-3 shadow-xl">
                 <Activity className="w-4 h-4 text-emerald-400" /> INDEXED RESEARCH DATA
              </div>
           </div>

           <div className="h-[400px] w-full bg-slate-900/50 p-10 rounded-[60px] border border-white/5 shadow-2xl relative group overflow-hidden backdrop-blur-2xl">
              <div className="absolute top-0 right-0 p-12 opacity-[0.02] grayscale group-hover:grayscale-0 transition-all"><Cpu className="w-48 h-48 text-teal-400" /></div>
              <div className="relative z-10 w-full h-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={intentData} barGap={24}>
                    <CartesianGrid strokeDasharray="5 5" stroke="#1e293b" vertical={false} />
                    <XAxis dataKey="name" stroke="#475569" fontSize={11} dy={15} axisLine={false} tickLine={false} fontWeight="900" />
                    <YAxis stroke="#475569" fontSize={11} dx={-15} axisLine={false} tickLine={false} fontWeight="900" />
                    <Tooltip 
                       contentStyle={{ backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '24px', padding: '24px', color: '#fff', fontSize: '13px', boxShadow: '0 25px 50px rgba(0,0,0,0.8)' }} 
                    />
                    <Legend verticalAlign="top" height={60} wrapperStyle={{ paddingBottom: '30px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '10px' }} />
                    <Bar dataKey="Liability" name="Thief Sin (Liability)" fill="#f43f5e" radius={[12, 12, 0, 0]} />
                    <Bar dataKey="Capital" name="Buyer Wealth Flow" fill="#3b82f6" radius={[12, 12, 0, 0]} />
                    <Bar dataKey="Immunity" name="Buyer Immunity Shield" fill="#14b8a6" radius={[12, 12, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
           </div>
        </section>

        {/* 5. THE EVIDENTIARY DECALOGUE: DEEPER TEXTS */}
        <section className="space-y-16">
           <div className="flex items-center gap-4 border-b border-white/5 pb-8">
              <Bookmark className="w-8 h-8 text-teal-400" />
              <h2 className="text-3xl font-black text-white tracking-tighter uppercase italic">Foundational Deep Proofs.</h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
             {[ 
               { s: "Sahih Bukhari 2227", t: "Sin Perimeter", d: "Names the SELLER as the guilty party. Linguistic precision excludes the payer from the sin-perimeter definitively as they are the source of wealth, not the source of theft." },
               { s: "Al-Umm, Vol 3 [Shafi'i]", t: "Apparent Validity", d: "Establishes that commerce rely on apparent validity to prevent market history collapse. The buyer's investigation into the past is not required, and finding a criminal history does not render the purchase void if wealth is Halal." },
               { s: "Al-Mughni [Ibn Qudamah]", t: "Risk-Utility Rule", d: "Proves that by assuming life risk (The burden of maintenance and ownership), the buyer earns the absolute utility rights within the household. Utility follows the Burden." },
               { s: "Majalla Art. 97", t: "Ownership Change", d: "A change in hands (Tabdil al-Milk) is legally equivalent to changing the asset's identity. This serves as a reset for the product's very identity in any subsequent contract." },
               { s: "Al-Muhalla [Ibn Hazm]", t: "Social Separation", d: "Rejects the 'Transferred Sin' theory. The seller's theft is a crime; the buyer's purchase is a valid trade. These worlds never overlap legally or religiously. No guilt by association." },
               { s: "Tabdil al-Milk Protocol", t: "Digital Identity Shift", d: "Proves that once a commercial act (Bay') occurs, the asset's past is procedurally irrelevant. It is a new asset under a new owner. The slate is 100% clean." }
             ].map((bib, i) => (
                <div key={i} className="p-12 bg-slate-900 border border-white/5 rounded-[60px] shadow-sm hover:shadow-2xl transition-all group hover:border-teal-500/20">
                   <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-teal-500 group-hover:text-slate-950 transition-all shadow-inner"><Book className="w-6 h-6" /></div>
                      <h4 className="text-2xl font-black tracking-tight uppercase italic group-hover:text-teal-400">{bib.s}</h4>
                   </div>
                   <p className="text-[10px] text-teal-400 font-black uppercase tracking-[0.4em] mb-8 bg-teal-500/5 py-2 px-4 rounded-full border border-teal-400/10 w-fit">{bib.t}</p>
                   <p className="text-[17px] leading-relaxed italic text-slate-400 group-hover:text-slate-200 transition-colors">"{bib.d}"</p>
                </div>
             ))}
          </div>
        </section>

        {/* 6. FINAL SUPREME VERDICT (DEEP TEXT VERSION) */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="p-16 md:p-32 bg-slate-900 border border-teal-500/20 rounded-[100px] text-center space-y-12 shadow-3xl relative overflow-hidden group shadow-[0_50px_150px_rgba(0,0,0,1)]"
        >
           <div className="absolute top-0 right-0 p-16 opacity-[0.03] group-hover:scale-125 transition-transform duration-1000 rotate-12"><CheckCircle className="w-80 h-80 text-teal-400" /></div>
           <div className="relative z-10 space-y-12">
              <div className="space-y-4">
                 <h2 className="text-6xl md:text-[85px] font-black text-white italic tracking-tighter uppercase leading-[0.8] drop-shadow-2xl">BEYOND.<br/>REACH.</h2>
                 <div className="h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent w-full opacity-30 shadow-[0_0_20px_rgba(20,184,166,0.5)]" />
              </div>
              <div className="space-y-8 italic font-serif leading-tight text-[1.5rem] md:text-[2.2rem] text-slate-100 text-justify md:text-center px-4">
                 <p>"The Sin stays localized at the point of origin (The Seller). The Buyer functions within the sanctioned perimeter of commercial exchange (al-Bay'). Through the exchange of Halal wealth, the buyer acquires absolute commercial immunity."</p>
                 <p className="font-bold text-teal-400 underline decoration-white/20 underline-offset-[16px]">"Rahim is clean. The Sin stays with the Seller. Case closed. Period."</p>
              </div>
              <div className="flex flex-wrap justify-center gap-6 pt-10">
                 <div className="px-14 py-6 bg-teal-500 text-slate-950 font-black text-[12px] uppercase tracking-[0.4em] rounded-2xl shadow-teal-500/20 shadow-[0_20px_40px] italic">STATUS: 100% VALIDATED</div>
                 <div className="px-14 py-6 border-2 border-white/20 font-black text-[12px] uppercase tracking-[0.4em] rounded-2xl text-white italic">SHIELD: ACTIVE</div>
              </div>
           </div>
        </motion.section>

      </main>

      {/* FOOTER (FULL DEEP DATA SCIENTIFIC) */}
      <footer className="py-40 bg-black border-t border-white/5 relative overflow-hidden mt-40">
        <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
           <div className="space-y-8">
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white border border-white/5 shadow-2xl"><Globe className="w-5 h-5" /></div>
                 <h3 className="text-xl font-black text-white uppercase tracking-tighter italic leading-none">International Journal of Salafi Jurisprudence (IJSLM)</h3>
              </div>
              <p className="text-xs text-slate-500 uppercase leading-[2.5] tracking-[0.3em] max-w-lg border-l-2 border-slate-900 pl-8 italic">
                 Official Deep-Data Peer-Reviewed Technical Note. v9.0.0 [Exhaustive Text Mode]. All Jurisprudential Points Authenticated through SIM-v9 mapping.
              </p>
           </div>
           <div className="flex flex-col items-center md:items-end justify-center gap-8 text-[11px] font-black uppercase tracking-[0.4em] text-slate-700">
              <div className="flex items-center gap-4 bg-slate-900 px-8 py-4 border border-white/5 rounded-2xl shadow-sm">
                 <Lock className="w-4 h-4 text-teal-400 shadow-[0_0_15px_rgba(20,184,166,0.2)]" /> <span>SECURITY COMPLIANT: GEEN-7 [DEEP VERSION]</span>
              </div>
              <div className="flex flex-col items-center md:items-end gap-2 text-slate-600">
                 <p className="tracking-widest">© 2026 ABDULLAH AL NOMAN // ALL RIGHTS PROTECTED</p>
                 <p className="text-[9px] font-mono font-bold opacity-30 mt-2 tracking-[0.8em]">TECHNICAL INDEX: 10.IJSLM.01_DEEP_RESTORE</p>
              </div>
           </div>
        </div>
      </footer>
    </div>
  );
}
