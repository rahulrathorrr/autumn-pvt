import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, ArrowRight, XCircle, CheckCircle2, 
  Code, GitMerge, Terminal, Server, 
  Layers, ShieldCheck, Box, RefreshCw,
  Plus, Minus, Clock, Cpu
} from 'lucide-react';

const SoftwareDelivery = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  const handleNavigate = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/contact');
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const faqs = [
    { 
      question: "Who owns the code after the project is completed?", 
      answer: "You do. Autumn Technologies operates with absolute transparency. Once the final milestone is delivered and cleared, full intellectual property and source code ownership is transferred to your company." 
    },
    { 
      question: "How do you ensure quality and prevent bugs in production?", 
      answer: "We implement rigorous automated testing (Unit, Integration, and E2E) within our CI/CD pipelines. Code doesn't reach production unless it passes our strict quality gates." 
    },
    { 
      question: "What is your typical sprint cycle?", 
      answer: "We typically operate on 2-week agile sprints. At the end of each sprint, we deliver tangible, tested, and deployable software increments for your review." 
    },
    { 
      question: "Do you handle post-launch maintenance and scaling?", 
      answer: "Yes. We offer continuous maintenance and scaling retainers to ensure your infrastructure handles increased user load effortlessly as your business grows." 
    },
    { 
      question: "What tech stack does Autumn Technologies specialize in?", 
      answer: "We specialize in modern, scalable stacks including React, Node.js, Python, and cloud-native infrastructure on AWS or GCP, tailored specifically to your project's needs." 
    }
  ];

  return (
    <div className="bg-[#050505] text-white w-full min-h-screen pt-20 font-sans selection:bg-[#a855f7] selection:text-white">
      
      {/* 1. HERO SECTION (Ref: image_f4437d.jpg) */}
      <section className="relative py-24 md:py-32 px-4 overflow-hidden flex flex-col items-center text-center">
        {/* Subtle grid and violet glow */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#a855f7] blur-[160px] opacity-15 rounded-full pointer-events-none" />
        
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-[#7e22ce]/40 bg-[#3b0764]/20 text-[#c084fc] text-xs font-medium px-4 py-1.5 rounded-full mb-8">
            <Zap className="w-3.5 h-3.5" />
            Modern Software Delivery
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Redefining <span className="text-[#c084fc]">delivery speed</span> <br className="hidden md:block" />
            with robust architectures.
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
            Transforming software development from a slow, legacy process into a fast, automated execution system where speed, quality, and predictability are structural guarantees.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={handleNavigate}
              className="flex items-center gap-2 bg-[#b062ff] hover:bg-[#9b4ded] text-white font-bold px-8 py-4 rounded-full transition-all shadow-[0_0_20px_rgba(176,98,255,0.3)]"
            >
              Start Your First Sprint <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* 2. THE PAIN VS AUTUMN WAY */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Development shouldn't be a bottleneck</h2>
          <p className="text-gray-400 text-lg">
            Traditional agencies bloat timelines and compromise quality. We engineer for momentum.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pain Column */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-[#1a050d] border border-pink-900/30 p-8 md:p-10 rounded-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-pink-500/20 p-2 rounded-full"><XCircle className="text-pink-500 w-6 h-6" /></div>
              <h3 className="text-2xl font-bold text-white">The Legacy Way</h3>
            </div>
            <ul className="space-y-6">
              {[
                "Endless planning phases with zero actual code being written.",
                "Manual deployments that cause unexpected production downtime.",
                "Spaghetti code that becomes impossible to scale or maintain.",
                "Missed deadlines due to poor architecture and communication."
              ].map((text, i) => (
                <li key={i} className="flex gap-4 text-gray-300">
                  <XCircle className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solution Column */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-[#0f051a] border border-[#a855f7]/20 p-8 md:p-10 rounded-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-[#a855f7]/20 p-2 rounded-full"><CheckCircle2 className="text-[#c084fc] w-6 h-6" /></div>
              <h3 className="text-2xl font-bold text-white">The Autumn Way</h3>
            </div>
            <ul className="space-y-6">
              {[
                "Rapid prototyping and iterative sprints for faster time-to-market.",
                "Automated CI/CD pipelines for zero-downtime deployments.",
                "Clean, modular architectures built for enterprise scalability.",
                "Absolute transparency with predictable delivery velocity."
              ].map((text, i) => (
                <li key={i} className="flex gap-4 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#c084fc] shrink-0 mt-0.5" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 3. CAPABILITIES */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Engineering Capabilities</h2>
          <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
            We don't just write code. We design resilient, high-performance systems that drive your business forward without technical debt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-2 bg-[#0f1115] border border-white/5 p-8 rounded-3xl overflow-hidden relative group">
            <div className="relative z-10">
              <GitMerge className="text-[#c084fc] w-8 h-8 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Continuous Integration & Delivery (CI/CD)</h3>
              <p className="text-gray-400 max-w-md">
                We automate the testing and deployment of your application. Every code commit is rigorously tested and seamlessly deployed to production, ensuring your users always have the latest features without disruption.
              </p>
            </div>
            <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-[#a855f7]/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          <div className="flex flex-col gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-[#0f1115] border border-white/5 p-8 rounded-3xl flex-1">
              <Code className="text-[#c084fc] w-6 h-6 mb-4" />
              <h3 className="text-xl font-bold mb-2">Modern Tech Stacks</h3>
              <p className="text-gray-400 text-sm">
                Utilizing React, Node.js, and modern frameworks for high-performance frontend and backend execution.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-[#0f1115] border border-white/5 p-8 rounded-3xl flex-1">
              <Server className="text-[#c084fc] w-6 h-6 mb-4" />
              <h3 className="text-xl font-bold mb-2">Cloud-Native Scale</h3>
              <p className="text-gray-400 text-sm">
                Architecting infrastructure on AWS/GCP that auto-scales seamlessly with your user traffic.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. REAL WORLD USE CASES */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-16">Partnerships that scale</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <Box />, title: "Minimum Viable Products", desc: "For startups needing to validate ideas fast. We go from concept to a polished, market-ready MVP in weeks, not months, helping you secure funding or early traction." },
            { icon: <Layers />, title: "Enterprise Platforms", desc: "Building complex SaaS applications and internal tools with robust permission layers, microservices architectures, and seamless third-party API integrations." },
            { icon: <RefreshCw />, title: "Legacy Modernization", desc: "Taking outdated, slow software and rewriting it into modern, fast, and secure frameworks without losing your historical data or halting current operations." }
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-[#0f1115] border border-white/5 p-8 rounded-3xl hover:border-white/10 transition-colors">
              <div className="w-12 h-12 bg-[#2d1b4e] rounded-xl flex items-center justify-center text-[#c084fc] mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. BUILT FOR SCALE */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Built for scale and resilience.</h2>
            <p className="text-gray-400 text-lg mb-10">
              Downtime costs money and ruins reputation. We build fault-tolerant architectures utilizing modern containerization and orchestration to ensure your application stays online.
            </p>
            <div className="space-y-8">
              {[
                { title: "High Availability", desc: "Redundant systems and load balancing ensuring 99.9% uptime for your digital products." },
                { title: "Automated QA", desc: "End-to-end testing frameworks that catch regressions before they ever reach your users." },
                { title: "Security by Design", desc: "Implementing best practices for data encryption, secure authentication, and vulnerability patching." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 border-l-4 border-[#a855f7] pl-4">
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-[#0f1115] border border-white/5 p-8 rounded-3xl flex flex-col items-center text-center justify-center">
              <Terminal className="text-[#c084fc] w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Zero Tech Debt</h3>
              <span className="text-gray-400 text-sm">Clean, documented code</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-[#0f1115] border border-white/5 p-8 rounded-3xl flex flex-col items-center text-center justify-center">
              <Clock className="text-[#c084fc] w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Rapid Velocity</h3>
              <span className="text-gray-400 text-sm">Predictable release cycles</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="col-span-2 bg-[#0f051a] border border-[#a855f7]/20 p-8 rounded-3xl flex flex-col items-center text-center justify-center">
              <ShieldCheck className="text-[#c084fc] w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Enterprise Security Standards</h3>
              <p className="text-gray-400 text-sm">Data encryption and compliance-ready architectures.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. METHODOLOGY */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">The Development Lifecycle</h2>
          <p className="text-gray-400 text-sm tracking-[0.2em] uppercase">HOW WE BUILD</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative pl-8 md:pl-0">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />
            
            <div className="md:w-1/2 md:pr-12 relative text-left">
              <div className="hidden md:flex absolute right-[-28px] top-8 w-14 h-14 bg-[#050505] items-center justify-center z-10">
                <div className="w-4 h-4 rounded-full border-2 border-[#a855f7] bg-[#050505]" />
              </div>
              
              <div className="bg-[#0f1115] border border-white/5 p-8 rounded-3xl group hover:border-white/20 transition-all">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[#c084fc] font-bold text-sm tracking-wider">SPRINT 01</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                    <Cpu className="w-4 h-4 text-gray-400 group-hover:text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Architecture & Prototyping</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We don't guess. We map out the database schema, API contracts, and user flows before writing a single line of code, ensuring the foundation is flawless.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. FAQ & CONTACT */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white text-black rounded-t-[3rem]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-gray-200 pb-4">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between text-left py-2 font-medium text-lg hover:text-[#a855f7] transition-colors"
                  >
                    {faq.question}
                    {openFaq === i ? <Minus className="w-5 h-5 text-gray-400" /> : <Plus className="w-5 h-5 text-gray-400" />}
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }} 
                        animate={{ height: "auto", opacity: 1 }} 
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden text-gray-600 mt-2"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-[#050505] text-white p-8 rounded-3xl shadow-2xl sticky top-24">
              <h3 className="text-3xl font-bold mb-4">Ready to build something great?</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Stop accepting slow delivery and buggy releases. Let's discuss your project architecture and how we can accelerate your roadmap.
              </p>
              <button 
                onClick={handleNavigate}
                className="w-full bg-white text-black hover:bg-[#b062ff] hover:text-white font-bold py-4 rounded-full transition-colors"
              >
                Schedule a Tech Sync
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SoftwareDelivery;