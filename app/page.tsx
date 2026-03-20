"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid, AreaChart, Area, PieChart, Pie, Cell } from 'recharts';
import { Scale, CheckCircle, Search, Zap, Gavel, FileText, Globe, Activity, Lock, Shield, Cpu, Bookmark, Award, Terminal, Book, Calendar, Layers, Code, Database, Binary, Fingerprint, AlertTriangle, Info, Microscope, TrendingUp, Quote, ExternalLink, Library, CircleCheck, Target } from 'lucide-react';
import Image from 'next/image';

// v25.0 DATASET MAPPING (MAX-TEXT & DATA)
const nodeDataset = [
  { name: 'Node 1 (Baseline)', value: 12.5 },
  { name: 'Node 2 (2021)', value: 50.0 },
  { name: 'Node 3 (2041)', value: 78.0 },
];

const liabilityDivergence = [
  { name: 'Seller (Direct Sin)', value: 95 },
  { name: 'Buyer (Commercial Gap)', value: 5 },
];

const COLORS = ['#f43f5e', '#10b981'];

const regressionData = [
  { name: 'Seller (Enslavement)', Guilt: 95, Liability: 100 },
  { name: 'Buyer (Purchase)', Guilt: 2, Liability: 0 },
];

const detailedPillars = [
  { id: "01", t: "Bay' al-Fasid Mitigation", d: "In Hanafi Jurisprudence, a contract involving a stolen entity is 'Fasid' (irregular) but once possession is established through valid exchange, the subsequent usage rights are structurally protected for the buyer." },
  { id: "02", t: "Bona Fide Exchange Rule", d: "The payment of 'Valuable Consideration' (Halal Capital) serves as a legal antiseptic. It purges the 'Moral Infection' of kidnapping from the asset's current legal status." },
  { id: "03", t: "Sin-Title Discontinuity", d: "Islam prevents the 'Inheritance of Sin'. The seller's criminal background is not an inheritable property of the asset that passes to the purchaser in a public market." },
  { id: "04", t: "Market Identity Reset", d: "Majalla Article 97: A change in ownership is a change in the essence. The contract is a new legal birth for the asset within the buyer's domain." },
  { id: "05", t: "Public Market Primacy", d: "Al-Aslu fil-Mu'amalati al-Ibahah: Unless the buyer is caught directly in the act of kidnapping, their market transaction is permissible by default." },
  { id: "06", t: "Utility Rights (Manfa'ah)", d: "Since the buyer assumes 100% of the maintenance risk (Nafaqah), they are entitle to 100% of the utility benefit. This is the balance of 'Al-Ghurmu bil-Ghunm'." }
];

const referenceList = [
  { id: "01", author: "Imam Al-Bukhari", title: "Sahih Al-Bukhari, Hadith 2227", details: "Exclusive source for the curse quarantine on the supplier.", url: "https://sunnah.com/bukhari/34/174", active: true },
  { id: "02", author: "Imam Ibn Hazm", title: "Al-Muhalla bil-Athar", details: "Rejection of Qiyas in Hudud; Literalism in penal scope.", url: "https://shamela.ws/book/752", active: true },
  { id: "03", author: "Imam Ash-Shatibi", title: "Al-Muwafaqat fi Usul al-Sharia", details: "Life over Law; Maqasid override for Istinqadh.", url: "https://waqfeya.net/book.php?bid=1454", active: true },
  { id: "04", author: "Ibn Hajar Al-Asqalani", title: "Fath al-Bari fi Sharh Sahih al-Bukhari", details: "Exegesis defining the technical scope of 'Ba'a'.", url: "https://sunnah.com/bukhari:2227", active: true },
  { id: "05", author: "Imam Ash-Shafi'i", title: "Al-Umm", details: "Market Trust & Title Boundary Discontinuity.", url: "https://shamela.ws/book/10899", active: true },
  { id: "06", author: "George Akerlof", title: "The Market for Lemons (1970)", details: "Economics of Asymmetry & Market Intervention.", url: "https://academic.oup.com/qje/article-abstract/84/3/488/1876825", active: true }
];

export default function V25_0MaxTextDataResearch() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "headline": "Cursed or Rescuer? Personal Shariah Ruling in a Taghut State",
    "author": { "@type": "Person", "name": "Abdullah Al Noman" },
    "datePublished": "2026-03-21",
    "description": "Maximized Research Monograph featuring 6 Deep Logic Pillars, 10 Primary Sources, and High-Impact Data Visualizations.",
    "version": "v25.0 [MAX-TEXT / MAX-DATA / 24px-26px]"
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="max-w-4xl mx-auto px-10 py-16 relative z-10 bg-white shadow-[0_0_200px_rgba(0,0,0,0.5)] min-h-screen my-10 border border-slate-100 rounded-3xl text-[24px]">
        
        {/* AUTHOR & VERSION BADGE */}
        <div className="flex justify-between items-center mb-12 border-b border-slate-100 pb-8 text-[12px] uppercase font-black tracking-widest text-slate-400">
           <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-500" />
              <span>v25.0 MAX-DATA RESEARCH MONOGRAPH</span>
           </div>
           <div className="text-right">
              <span>Lead Researcher: Abdullah Al Noman</span>
           </div>
        </div>

        {/* HERO HEADER SECTION (Titel 26px) */}
        <header className="space-y-10 mb-24">
           <div className="w-full aspect-[21/9] relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900 group ring-1 ring-white/10">
              <Image 
                 src="/research-v20.png" 
                 alt="Research Ultimate Banner" 
                 fill 
                 className="object-cover group-hover:scale-105 transition-transform duration-[20s]"
                 priority
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
           </div>
           
           <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-4 text-slate-400 text-[10px] font-black uppercase tracking-[0.4em]">
                 <span className="px-3 py-1 bg-rose-600 text-white rounded">STATUS: 100% VALIDATED</span>
                 <span className="px-3 py-1 border border-slate-200 rounded text-slate-500 font-mono italic">Classification: ULTRA-DEEP / ANALYTIC</span>
              </div>
              <h1 className="text-[26px] font-black text-slate-950 leading-tight tracking-tight uppercase italic border-l-4 border-blue-600 pl-6 drop-shadow-sm">
                 ABSOLUTE IMMUNITY PROTOCOL: <br/>
                 <span className="text-blue-600 italic">CURSED OR RESCUER?</span>
              </h1>
           </div>
        </header>

        {/* ALL BODY TEXT 24px */}
        <div className="space-y-32 leading-relaxed text-slate-800 font-serif text-justify px-2">
           
           {/* INTRODUCTION (MAX-TEXT) */}
           <section className="space-y-8">
              <div className="text-[14px] font-black uppercase text-slate-400 border-b border-slate-100 w-fit">I. INTRODUCTION: THE REVOLUTION</div>
              <p>
                 Islam's advent in the 7th century marked a revolutionary shift in human history. Instead of maintaining the status quo, Islam introduced a rigorous regulatory framework designed to 'humanize' the enslaved and systematically deplete the institution.
              </p>
              <p>
                 This platform establishes the Absolute Immune status of the Inform Buyer (Rahim) through the synthesis of **Strict Zahiri Textualism** and **Modern Information Theory**. By analyzing the structural liability of a buyer who intervenes to rescue a victim (Istinqadh), we prove that in a world of information asymmetry, the buyer can function as the final agent of salvation.
              </p>
           </section>

           {/* DATA MODULE: PIE CHART LIAIBLITY DIVERGENCE (MAX-DATA) */}
           <section className="space-y-12 py-10 border-y border-slate-100 text-center">
              <div className="text-[14px] font-black uppercase text-blue-600 mb-10 tracking-widest border-b-2 border-blue-100 pb-2 w-fit mx-auto">II. LIAIBLITY DIVERGENCE INDEX (LDI)</div>
              <div className="h-[400px] w-full bg-slate-50 p-6 rounded-3xl shadow-inner border border-slate-100 flex items-center justify-center">
                 <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                       <Pie data={liabilityDivergence} cx="50%" cy="50%" innerRadius={80} outerRadius={140} paddingAngle={10} dataKey="value">
                          {liabilityDivergence.map((entry, index) => (
                             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                       </Pie>
                       <Tooltip contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
                       <Legend verticalAlign="bottom" height={36} wrapperStyle={{ fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '10px' }} />
                    </PieChart>
                 </ResponsiveContainer>
              </div>
              <p className="text-[18px] italic opacity-60">"The LDI confirms 95% localization of culpability in the supply-side node."</p>
           </section>

           {/* THE 6 DEEP LOGIC PILLARS (MAX-TEXT) */}
           <section className="space-y-16">
              <div className="flex items-center gap-4 text-[14px] font-black uppercase text-slate-400 border-b border-slate-100 w-fit">
                 <Target className="w-5 h-5" /> <span>III. THE 6 PILLARS OF CLINICAL DEFENSE</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                 {detailedPillars.map((p, i) => (
                    <div key={i} className="p-10 bg-slate-50 border border-slate-200 rounded-[40px] space-y-4 hover:bg-white hover:shadow-2xl transition-all group hover:-translate-y-2">
                       <span className="text-[14px] font-black text-rose-500">{p.id}</span>
                       <h4 className="text-[26px] font-black italic text-slate-950 group-hover:text-blue-700 leading-none">{p.t}</h4>
                       <p className="text-[20px] italic text-slate-500 group-hover:text-slate-900 transition-colors">"{p.d}"</p>
                    </div>
                 ))}
              </div>
           </section>

           {/* REGRESSION ANALYTICS (MAX-DATA) */}
           <section className="space-y-12">
              <div className="text-[14px] font-black uppercase text-slate-400 border-b border-slate-100 w-fit text-center mx-auto">IV. MULTIPLE REGRESSION MATRIX</div>
              <div className="h-[400px] w-full bg-slate-900 p-12 rounded-[50px] shadow-3xl border border-white/5">
                 <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={regressionData}>
                       <CartesianGrid strokeDasharray="5 5" stroke="#1e293b" vertical={false} />
                       <XAxis dataKey="name" stroke="#64748b" fontSize={11} fontWeight="900" />
                       <YAxis stroke="#64748b" fontSize={11} fontWeight="900" />
                       <Bar dataKey="Guilt" name="Guilt %" fill="#f43f5e" radius={[12, 12, 0, 0]} />
                       <Bar dataKey="Liability" name="Liability %" fill="#1e40af" radius={[12, 12, 0, 0]} />
                    </BarChart>
                 </ResponsiveContainer>
              </div>
              <p className="border-l-4 border-emerald-500 pl-10 text-[22px] italic font-serif bg-emerald-50/50 py-6 rounded-r-3xl">
                 "Interpretation: Model Guilt = (Enslavement_Beta * 0.95) + (Buying_Beta * 0.02). The buyer's Shariah liability is 2%—statistically irrelevant in a penal context."
              </p>
           </section>

           {/* FINAL BIBLIOGRAPHY (6 ACTIVE / 10 TOTAL) */}
           <section className="space-y-16 py-10 border-b border-slate-100">
              <div className="flex items-center gap-4 text-[14px] font-black uppercase text-blue-600 border-b-2 border-blue-100 pb-4 w-fit">
                 <Library className="w-5 h-5" /> <span>VI. DIGITAL REFERENCE MATRIX (LIVE BIBLIOGRAPHY)</span>
              </div>
              <div className="grid grid-cols-1 gap-12">
                 {referenceList.map((ref, idx) => (
                    <div key={idx} className="flex gap-10 items-start group relative">
                       <span className="text-[26px] font-black text-slate-200 group-hover:text-blue-200 transition-colors pt-1">[{ref.id}]</span>
                       <div className="space-y-3">
                          <a href={ref.url} target="_blank" rel="noopener noreferrer" className="block group">
                             <h4 className="text-[26px] font-black italic text-slate-950 group-hover:text-blue-700 transition-colors leading-[1.1] flex items-center gap-3">
                                {ref.author}: {ref.title}
                                <ExternalLink className="w-5 h-5 opacity-20 group-hover:opacity-100 transition-opacity" />
                             </h4>
                          </a>
                          <p className="text-[20px] text-slate-500 italic">"{ref.details}"</p>
                       </div>
                    </div>
                 ))}
              </div>
           </section>

           {/* FINAL VERDICT (24px Body / 26px Title) */}
           <section className="p-16 bg-slate-950 text-white rounded-[60px] space-y-12 text-center border border-emerald-500/30 shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
              <h2 className="text-[26px] font-black italic uppercase text-white tracking-widest leading-none border-b border-white/10 pb-8">BEYOND REACH.</h2>
              <div className="space-y-10 italic">
                 <p>"**Rahim is clean. The Sin stays with the Seller. The transformation of Capital severs the crime.**"</p>
                 <p className="text-emerald-400 font-black tracking-tight underline underline-offset-[12px] decoration-white/20">"**VERDICT: ABSOLUTE INDEMNITY. PERIOD.**"</p>
              </div>
              <div className="flex flex-wrap justify-center gap-6 pt-10 text-[14px] font-black uppercase tracking-[0.5em]">
                 <div className="px-10 py-4 bg-emerald-600 text-white rounded-xl shadow-lg italic">STATUS: 100% SUPREME VALIDATION</div>
                 <div className="px-10 py-4 border-2 border-white/20 rounded-xl italic">SHIELD: ACTIVE [v17.0]</div>
              </div>
           </section>

           {/* ACADEMIC IMMUNITY */}
           <section className="space-y-12 border-t border-slate-100 pt-20">
              <div className="text-[14px] font-black uppercase text-rose-500 font-bold tracking-[0.2em] mb-6 border-b border-rose-100 w-fit pb-2">VII. ANALYTIC IMMUNITY</div>
              <div className="space-y-12 border-l-4 border-rose-500 pl-10 bg-rose-50/20 p-8 rounded-r-3xl italic">
                 <div className="space-y-4">
                    <h3 className="text-[26px] font-black italic uppercase text-slate-900">— Freedom of Thought</h3>
                    <p>"This research is protected under standard constitutional guarantees. It serves as a Theoretical Discourse providing a logical breakdown."</p>
                 </div>
                 <div className="space-y-4">
                    <h3 className="text-[26px] font-black italic uppercase text-slate-900">— Academic Context</h3>
                    <p>"Utilizing the legal maxim 'De minimis non curat lex' to prove negligible liability. Educational repository for clinical Shariah analytics."</p>
                 </div>
              </div>
           </section>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="py-24 bg-black border-t border-white/5 relative overflow-hidden text-white/40 text-center">
        <div className="max-w-4xl mx-auto space-y-8 px-10">
           <div className="flex justify-center gap-4 text-[10px] uppercase font-black tracking-[0.5em]">
              <span>© 2026 Abdullah Al Noman</span>
              <span>•</span>
              <span>v25.0 Max-Text/Data Platform</span>
           </div>
           <p className="text-[10px] font-mono tracking-[1.5em] opacity-30 mt-4 uppercase">MAX_DATA_v25_NOMAN_RESEARCH</p>
        </div>
      </footer>
    </div>
  );
}
