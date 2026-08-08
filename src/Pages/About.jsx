import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Target, Rocket, ShieldCheck, BarChart4, 
  PenTool, Code2, Database, Shield, 
  Code, Crosshair, RefreshCw, Zap, 
  Briefcase, Layers, ArrowRight
} from 'lucide-react';

const About = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/contact');
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="bg-[#050505] text-white w-full min-h-screen pt-20 font-sans selection:bg-[#84cc16] selection:text-black">
      
      {/* 1. HERO SECTION (Ref: image_f430fe.jpg) */}
      <section className="relative py-24 md:py-32 px-4 overflow-hidden flex flex-col items-center text-center">
        {/* Subtle grid and glowing background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#0ea5e9] blur-[160px] opacity-10 rounded-full pointer-events-none" />
        
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-[#1e3a8a]/50 bg-[#0f172a]/50 text-[#3b82f6] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8">
            Who We Are
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            We make Software Accessible, Proven, <br className="hidden md:block" />
            and <span className="text-[#84cc16]">Profitable.</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
            Autumn Technologies is an elite software solutions studio. We build the bridge between complex digital technology and practical, day-to-day business success. No jargon, just real results.
          </p>
        </motion.div>
      </section>

      {/* 2. THE ADVANTAGE (Ref: image_f431b2.jpg) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">The Autumn Advantage</h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-16">
          True success in modern tech requires mastering all pillars. We bring them together under one roof so you don't have to hire three different agencies.
        </p>

        {/* Abstract representation of the Venn Diagram */}
        <div className="relative w-full max-w-4xl mx-auto aspect-square md:aspect-[2/1] flex items-center justify-center">
          {/* Background glowing circles simulating Venn intersection */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#3b82f6]/20 rounded-full blur-[80px]" />
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#10b981]/20 rounded-full blur-[80px]" />
          <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#8b5cf6]/20 rounded-full blur-[80px]" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#0f1115]/80 backdrop-blur-md border border-[#3b82f6]/30 p-8 rounded-3xl">
              <h3 className="text-[#60a5fa] font-bold text-xl mb-4">TECH CONSULTING</h3>
              <ul className="text-gray-300 space-y-2 text-sm text-left list-disc list-inside">
                <li>Idea to production</li>
                <li>No slide decks, just code</li>
                <li>Real scalable results</li>
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-[#050505]/90 backdrop-blur-xl border-2 border-[#84cc16] p-8 rounded-3xl transform md:-translate-y-8 shadow-[0_0_30px_rgba(132,204,22,0.1)]">
              <h3 className="text-white font-bold text-2xl mb-2">AUTUMN TECH</h3>
              <p className="text-[#84cc16] text-xs font-bold uppercase tracking-wider mb-4">The Intersection of Real Results</p>
              <ul className="text-gray-300 space-y-2 text-sm text-left list-disc list-inside">
                <li>Data control</li>
                <li>Enterprise compliance</li>
                <li>Competitive advantage</li>
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-[#0f1115]/80 backdrop-blur-md border border-[#10b981]/30 p-8 rounded-3xl">
              <h3 className="text-[#34d399] font-bold text-xl mb-4">BUSINESS STRATEGY</h3>
              <ul className="text-gray-300 space-y-2 text-sm text-left list-disc list-inside">
                <li>Measurable outcomes</li>
                <li>Strategic advisory</li>
                <li>Honest assessment</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. PRINCIPLES (Ref: image_f43198.png) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="mb-16">
          <span className="text-[#3b82f6] text-xs font-bold uppercase tracking-widest mb-2 block">Our Principles</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">How we partner with you</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: <Target />, title: "We Focus on Revenue, Not Hype", desc: "Software isn't magic; it's a tool to grow your business. We validate every project against your KPIs, ensuring measurable ROI before writing a single line of code." },
            { icon: <Rocket />, title: "We Ship Real Products", desc: "We don't sell theoretical slide decks or fragile prototypes. We deliver robust, scale-ready digital systems that integrate seamlessly into your daily operations." },
            { icon: <ShieldCheck />, title: "Security is Built-In", desc: "Your data is your most valuable asset. Every solution we deploy is architected with enterprise-grade security protocols from day one." },
            { icon: <BarChart4 />, title: "We Speak Honestly", desc: "If a specific technology isn't the right answer for your specific problem, we will tell you. We prioritize long-term trust over short-term contracts." }
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-[#0f1115] border border-white/5 p-8 rounded-3xl hover:border-white/10 transition-colors">
              <div className="w-12 h-12 bg-[#1e3a8a]/20 border border-[#3b82f6]/30 rounded-xl flex items-center justify-center text-[#3b82f6] mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. THE TEAM (Ref: image_f4317b.png) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-[#84cc16] text-xs font-bold uppercase tracking-widest mb-2 block">The Founders</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Built by experts who ship</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Autumn Technologies is spearheaded by <span className="text-white font-semibold">Geetha Anantha, Mummadi Sarada, Jayasree Ravuri,</span> and <span className="text-white font-semibold">Vasumathi Thumburi</span>. 
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              We combine hands-on technical skill with strategic business thinking - so every project gets both the engineering rigour and the business context it needs to succeed in the real world.
            </p>
          </motion.div>

          <div className="flex flex-col gap-4 md:pl-10">
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-[#0f1115] border border-white/5 p-6 rounded-2xl md:ml-12">
              <div className="flex flex-col items-center text-center">
                <PenTool className="text-[#3b82f6] w-6 h-6 mb-3" />
                <h3 className="text-lg font-bold mb-2">Product & UX Design</h3>
                <p className="text-gray-400 text-sm">Human-centered design that makes complex capabilities intuitive and delightful.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-[#050505] border border-[#3b82f6]/30 p-6 rounded-2xl relative z-10 shadow-2xl md:-ml-4">
              <div className="flex flex-col items-center text-center">
                <Code2 className="text-[#3b82f6] w-6 h-6 mb-3" />
                <h3 className="text-lg font-bold mb-2">Software Engineering</h3>
                <p className="text-gray-400 text-sm">Robust frontend and backend systems built from the ground up for production scale.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-[#0f1115] border border-white/5 p-6 rounded-2xl md:mr-12">
              <div className="flex flex-col items-center text-center">
                <Database className="text-[#3b82f6] w-6 h-6 mb-3" />
                <h3 className="text-lg font-bold mb-2">Data Architecture</h3>
                <p className="text-gray-400 text-sm">Secure data pipelines, warehousing, and governance that power reliable decisions.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. VALUES (Ref: image_f43175.png) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 text-center">
        <span className="text-[#84cc16] text-xs font-bold uppercase tracking-widest mb-2 block">Values</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">What Drives Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 text-left max-w-5xl mx-auto">
          {[
            { icon: <Shield />, title: "Honesty", desc: "We say no when a specific software isn't the right tool. We give honest timelines, honest assessments, and honest feedback." },
            { icon: <Code />, title: "Deep Integration", desc: "We build systems that live inside your stack, not alongside it. Every deployment is deeply integrated with your existing tools and data." },
            { icon: <Crosshair />, title: "Outcome-Orientation", desc: "We measure success by your metrics, not by code deployed. If the numbers don't move, we haven't succeeded." },
            { icon: <RefreshCw />, title: "Learning & Iteration", desc: "Digital systems improve with data and feedback. We design for iteration from day one and stay involved as your systems evolve." }
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-6">
              <div className="w-12 h-12 shrink-0 bg-[#0f1115] border border-white/10 rounded-xl flex items-center justify-center text-[#3b82f6]">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. WHO WE WORK BEST WITH (Ref: image_f4315b.jpg) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Who We Work Best With</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              We don't take on every project. We partner exclusively with teams where we know we can make a massive, measurable impact. You are a great fit if:
            </p>
            <div className="space-y-8">
              {[
                { icon: <Zap className="text-[#84cc16] w-5 h-5" />, title: "You prioritize growth.", desc: "You want to use custom software to drive revenue, cut costs, or outpace competitors." },
                { icon: <Briefcase className="text-[#3b82f6] w-5 h-5" />, title: "You value enterprise quality.", desc: "You need reliable, secure, and compliant systems, not weekend hackathon projects." },
                { icon: <Layers className="text-[#a855f7] w-5 h-5" />, title: "You are ready to scale.", desc: "Whether you are a startup or enterprise, you are prepared to deeply integrate technology into your core workflows." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 w-8 h-8 rounded-full bg-[#111111] border border-white/10 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Abstract Visual Placeholder mimicking the reference network node image */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="w-full aspect-square bg-gradient-to-br from-[#0a0514] to-[#050a1a] rounded-3xl border border-white/10 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3b82f6]/20 via-transparent to-transparent" />
            <div className="w-full h-full opacity-50 flex items-center justify-center">
               {/* Decorative structural elements to mimic the 3D network nodes */}
               <svg viewBox="0 0 200 200" className="w-3/4 h-3/4 text-[#3b82f6]/40 stroke-current" fill="none" strokeWidth="1">
                  <path d="M100 20 L180 60 L180 140 L100 180 L20 140 L20 60 Z" />
                  <path d="M100 20 L100 100 L180 140" />
                  <path d="M100 100 L20 140" />
                  <circle cx="100" cy="100" r="4" fill="#a855f7" />
                  <circle cx="100" cy="20" r="3" fill="#3b82f6" />
                  <circle cx="180" cy="60" r="3" fill="#3b82f6" />
                  <circle cx="180" cy="140" r="3" fill="#84cc16" />
                  <circle cx="100" cy="180" r="3" fill="#3b82f6" />
                  <circle cx="20" cy="140" r="3" fill="#a855f7" />
                  <circle cx="20" cy="60" r="3" fill="#3b82f6" />
               </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. CTA (Ref: image_f43158.png) */}
      <section className="py-32 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Ready to transform your business?</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
          Book a free discovery call today. We'll listen to your challenges and outline a clear, actionable digital strategy.
        </p>
        <button 
          onClick={handleNavigate}
          className="inline-flex items-center gap-2 bg-white hover:bg-gray-200 text-black font-bold px-8 py-4 rounded-full transition-all"
        >
          Schedule Your Free Consultation <ArrowRight className="w-5 h-5" />
        </button>
      </section>

    </div>
  );
};

export default About;