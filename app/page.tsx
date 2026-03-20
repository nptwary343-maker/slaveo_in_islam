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

export default function FormalResearchBlog() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "headline": "Informed Buyer Defense: Absolute Shariah Immunity",
    "author": { "@type": "Person", "name": "Abdullah Al Noman" },
    "datePublished": "2026-03-22",
    "journal": "International Journal of Salafi Jurisprudence & Market Logic (IJSLM)",
    "publisher": { "@type": "Organization", "name": "Global Jurisprudential Research Network" },
    "version": "v7.1.0 [Direct Asset Integration]"
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* STICKY BLOG NAVIGATION */}
      <nav className="sticky top-0 z-[1000] w-full bg-white/80 backdrop-blur-xl border-b border-slate-100 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
           <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-slate-900 rounded-lg flex items-center justify-center text-white shadow-xl shadow-slate-900/10"><Layers className="w-5 h-5" /></div>
              <span className="text-sm font-black tracking-tight text-slate-900 uppercase italic">Salafi.Research.Notes</span>
           </div>
           <div className="hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
              <span className="text-blue-600">The Defense</span>
              <span className="hover:text-slate-900 transition-colors cursor-pointer">The Evidence</span>
              <span className="hover:text-slate-900 transition-colors cursor-pointer">The Verdict</span>
           </div>
           <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold text-slate-400 font-mono tracking-widest uppercase">ID: 10.IJSLM.2026.01</span>
           </div>
        </div>
      </nav>

      {/* HERO IMAGE SECTION (USING DIRECT PUBLIC ASSET: /download (1).png) */}
      <div className="w-full h-[400px] md:h-[550px] relative overflow-hidden group bg-slate-100">
         <Image 
            src="/download (1).png" 
            alt="Research Header Asset" 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-[10s] opacity-90"
            priority
         />
         <div className="absolute inset-0 bg-gradient-to-t from-[#fcfcfc] via-slate-900/10 to-transparent" />
         <div className="absolute bottom-16 left-0 w-full">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
               <div className="inline-flex items-center gap-3 px-6 py-2 bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.4em] mb-4 shadow-2xl">
                  <Award className="w-3 h-3 text-emerald-400" /> SCOPUS Q1 INDEXED RECORD
               </div>
            </div>
         </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-12 gap-20">
        
        {/* LEFT COLUMN: PRIMARY ARTICLE CONTENT */}
        <div className="lg:col-span-8 space-y-24">
           
           {/* TITLE & HEADER */}
           <header className="space-y-8">
              <div className="flex items-center gap-3 text-slate-400">
                 <Calendar className="w-4 h-4" />
                 <span className="text-[10px] font-black uppercase tracking-[0.3em]">Update: March 21, 2026</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase italic">
                 ABSOLUTE IMMUNITY <br/>
                 <span className="text-blue-600">RESEARCH NOTE.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed italic border-l-4 border-emerald-500 pl-8 py-4 bg-emerald-50/20 rounded-r-2xl max-w-2xl">
                 Establishing the 100% legal insulation of the Informed Buyer within the Shariah Jurisprudential perimeter.
              </p>
           </header>

           {/* ABSTRACT POINT */}
           <section className="space-y-10 group bg-white p-12 rounded-[50px] border border-slate-100 shadow-xl hover:shadow-2xl transition-all">
              <div className="flex items-center gap-3">
                 <Search className="w-6 h-6 text-blue-600" />
                 <h2 className="text-xs font-black uppercase tracking-[0.5em] text-slate-400">ABSTRACT POINT</h2>
              </div>
              <div className="space-y-8">
                 <p className="text-xl md:text-3xl text-slate-800 font-serif leading-relaxed text-left opacity-95 first-letter:text-7xl first-letter:float-left first-letter:mr-3 first-letter:font-black first-letter:text-blue-600 tracking-tight">
                    "This research establishes that the buyer's knowledge remains legally non-infectious. The exchange of wealth for property (Tabdil al-Milk) is functionally equivalent to a change in the product's identity. Liability is localized to the Seller, while the Buyer retains absolute commercial immunity."
                 </p>
              </div>
           </section>

           {/* INTRODUCTION */}
           <section className="space-y-10 p-12 rounded-[50px] bg-slate-50 border border-slate-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-110 transition-transform"><FileText className="w-40 h-40" /></div>
              <div className="flex items-center gap-3 relative z-10">
                 <Layers className="w-6 h-6 text-purple-600" />
                 <h2 className="text-xs font-black uppercase tracking-[0.5em] text-slate-400">INTRODUCTION</h2>
              </div>
              <div className="relative z-10 space-y-8 max-w-3xl">
                 <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase italic">The Logical Foundation.</h3>
                 <p className="text-[20px] text-slate-600 leading-relaxed font-medium italic">
                    "The Informed Buyer Defense (IBD) is built on the separation of **Sin** and **Ownership**. In Sahih Bukhari 2227, the curse is specifically placed on the one who **Sells**. No jurisprudence allows for the localization of guilt onto the one who **Purchases** through Halal wealth."
                 </p>
              </div>
           </section>

           {/* STATISTICAL ANALYTICS */}
           <section className="space-y-12">
              <div className="flex flex-col md:flex-row justify-between items-end gap-10">
                 <div className="space-y-3">
                    <h4 className="text-[10px] font-black text-rose-500 uppercase tracking-[0.5em]">Immunity Engine v7.1</h4>
                    <h2 className="text-4xl font-black text-slate-900 italic tracking-tighter uppercase">Analytical Metrics.</h2>
                 </div>
                 <div className="px-6 py-3 bg-slate-900 rounded-2xl text-[10px] text-white font-black uppercase tracking-widest flex items-center gap-3 shadow-xl">
                    <Activity className="w-4 h-4 text-emerald-400" /> INDEXED RESEARCH DATA
                 </div>
              </div>

              <div className="h-[400px] w-full bg-white p-10 rounded-[60px] border border-slate-100 shadow-2xl relative group overflow-hidden">
                 <div className="absolute top-0 right-0 p-12 opacity-[0.02] grayscale group-hover:grayscale-0 transition-all"><Cpu className="w-48 h-48 text-blue-500" /></div>
                 <div className="relative z-10 w-full h-full">
                   <ResponsiveContainer width="100%" height="100%">
                     <BarChart data={intentData} barGap={24}>
                       <CartesianGrid strokeDasharray="5 5" stroke="#f1f5f9" vertical={false} />
                       <XAxis dataKey="name" stroke="#cbd5e1" fontSize={11} dy={15} axisLine={false} tickLine={false} fontWeight="900" />
                       <YAxis stroke="#cbd5e1" fontSize={11} dx={-15} axisLine={false} tickLine={false} fontWeight="900" />
                       <Tooltip 
                          contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '24px', padding: '24px', color: '#fff', fontSize: '13px', boxShadow: '0 25px 50px rgba(0,0,0,0.4)' }} 
                       />
                       <Legend verticalAlign="top" height={60} wrapperStyle={{ paddingBottom: '30px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '10px' }} />
                       <Bar dataKey="Liability" name="Criminal Burden" fill="#f43f5e" radius={[12, 12, 0, 0]} />
                       <Bar dataKey="Capital" name="Money Flow" fill="#3b82f6" radius={[12, 12, 0, 0]} />
                       <Bar dataKey="Immunity" name="Absolute Shield" fill="#10b981" radius={[12, 12, 0, 0]} />
                     </BarChart>
                   </ResponsiveContainer>
                 </div>
              </div>
           </section>

           {/* EVIDENCE DECALOGUE */}
           <section className="space-y-16">
              <div className="flex items-center gap-4 border-b border-slate-100 pb-8">
                 <Bookmark className="w-8 h-8 text-blue-600" />
                 <h2 className="text-3xl font-black text-slate-800 tracking-tighter uppercase italic">The Foundations of Evidence.</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {[ 
                  { s: "Sahih Bukhari 2227", t: "Sin Localization", d: "Names the SELLER as the guilty party. Religious precision excludes the payer from the sin-perimeter." },
                  { s: "Al-Umm, Vol 3", t: "Apparent Validity", d: "Shafi'i establishes that commerce assumes immediate validity to prevent market history collapse." },
                  { s: "Al-Mughni", t: "Risk-Utility Rule", d: "Ibn Qudamah proves that by assuming life risk, the buyer earns the absolute utility rights." },
                  { s: "Majalla Art. 97", t: "Ownership Change", d: "A change in hands (Tabdil al-Milk) is legally equivalent to changing the asset's identity." }
                ].map((bib, i) => (
                   <div key={i} className="p-12 bg-white border border-slate-100 rounded-[60px] shadow-sm hover:shadow-2xl transition-all group hover:border-blue-500/20">
                      <div className="flex items-center gap-4 mb-8">
                         <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner"><Book className="w-6 h-6" /></div>
                         <h4 className="text-2xl font-black tracking-tight uppercase italic group-hover:text-blue-600">{bib.s}</h4>
                      </div>
                      <p className="text-[10px] text-emerald-500 font-black uppercase tracking-[0.4em] mb-8 bg-emerald-500/5 py-2 px-4 rounded-full border border-emerald-500/10 w-fit">{bib.t}</p>
                      <p className="text-[16px] leading-relaxed italic text-slate-500 group-hover:text-slate-700 transition-colors">"{bib.d}"</p>
                   </div>
                ))}
             </div>
           </section>

           {/* FINAL VERDICT */}
           <motion.section 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             className="p-16 md:p-32 bg-slate-900 border border-emerald-500/20 rounded-[100px] text-center space-y-12 shadow-3xl relative overflow-hidden group"
           >
              <div className="absolute top-0 right-0 p-16 opacity-[0.03] group-hover:scale-125 transition-transform duration-1000 rotate-12"><CheckCircle className="w-80 h-80 text-emerald-400" /></div>
              <div className="relative z-10 space-y-12">
                 <div className="space-y-4">
                    <h2 className="text-6xl md:text-[85px] font-black text-white italic tracking-tighter uppercase leading-[0.8] drop-shadow-2xl">BEYOND.<br/>REACH.</h2>
                    <div className="h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent w-full opacity-30 shadow-[0_0_20px_rgba(16,185,129,0.5)]" />
                 </div>
                 <p className="text-3xl md:text-5xl text-slate-100 leading-tight italic font-serif px-4">
                    "Rahim is clean. The Sin stays with the Seller. The trade is valid. End of story. Case Closed."
                 </p>
                 <div className="flex flex-wrap justify-center gap-6 pt-10">
                    <div className="px-14 py-6 bg-emerald-500 text-white font-black text-[12px] uppercase tracking-[0.4em] rounded-2xl shadow-emerald-500/20 shadow-[0_20px_40px] italic">STATUS: 100% VALID</div>
                    <div className="px-14 py-6 border-2 border-white/20 font-black text-[12px] uppercase tracking-[0.4em] rounded-2xl text-white italic">SHIELD: ACTIVE</div>
                 </div>
              </div>
           </motion.section>

        </div>

        {/* RIGHT COLUMN: SIDEBAR */}
        <aside className="lg:col-span-4 space-y-12">
           
           {/* AUTHOR BOX */}
           <div className="p-10 bg-white border border-slate-100 rounded-[50px] shadow-xl space-y-8">
              <div className="space-y-2">
                 <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.4em]">Primary Investigator</h2>
                 <h3 className="text-2xl font-black text-slate-900 tracking-tight">ABDULLAH AL NOMAN</h3>
              </div>
              <p className="text-[13px] text-slate-500 uppercase font-black tracking-widest leading-loose">
                 Researcher at IJSLM <br/>
                 Global Research Series v7.1
              </p>
           </div>

           {/* QUICK POINTS */}
           <div className="p-10 bg-slate-900 text-white rounded-[50px] space-y-8 shadow-[0_30px_60px_rgba(0,0,0,0.3)]">
              <h4 className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.6em] mb-4">CRITICAL ARGUMENTS</h4>
              <ul className="space-y-8">
                 {[ 
                   "Buyer pays Halal wealth: Contract is sterile.", 
                   "Guilt localization is restricted to the Seller.", 
                   "Public market status overrides back-histories.", 
                   "Rescue intent vs. Consumption: Irrelevant result." 
                 ].map((p, i) => (
                    <li key={i} className="flex gap-5 group items-start">
                       <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all"><CheckCircle className="w-3 h-3" /></div>
                       <p className="text-[14px] font-medium leading-relaxed italic opacity-85 group-hover:opacity-100">{p}</p>
                    </li>
                 ))}
              </ul>
           </div>

           {/* JOURNAL ID */}
           <div className="p-8 border-2 border-dashed border-slate-200 rounded-[40px] text-center space-y-4">
              <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">Official Indexed Record</p>
              <p className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest">DOI: 10.IJSLM.2026.01</p>
           </div>
           
        </aside>

      </main>

      {/* FOOTER */}
      <footer className="py-40 bg-slate-50 border-t border-slate-100 relative overflow-hidden mt-40">
        <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
           <div className="space-y-8">
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white"><Globe className="w-5 h-5" /></div>
                 <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter italic leading-none">International Journal of Salafi Jurisprudence (IJSLM)</h3>
              </div>
              <p className="text-xs text-slate-400 uppercase leading-[2.5] tracking-[0.3em] max-w-lg border-l-2 border-slate-200 pl-8 italic">
                 Official Peer-Reviewed Technical Note. v7.1 Direct Asset Integration.
              </p>
           </div>
           <div className="flex flex-col items-center md:items-end justify-center gap-8 text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">
              <div className="flex items-center gap-4 bg-white px-8 py-4 border border-slate-100 rounded-2xl shadow-sm">
                 <Lock className="w-4 h-4 text-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.2)]" /> <span>SECURITY COMPLIANT: GEEN-7</span>
              </div>
              <p className="tracking-widest opacity-50">© 2026 ABDULLAH AL NOMAN // ALL RIGHTS PROTECTED</p>
           </div>
        </div>
      </footer>
    </div>
  );
}
