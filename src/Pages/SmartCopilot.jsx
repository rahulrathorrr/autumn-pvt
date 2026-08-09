import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, ArrowRight, Lock, XCircle, CheckCircle2, 
  Search, Database, ShieldCheck, FileText, 
  Users, Briefcase, Server, Network, Layers, 
  Plus, Minus, MessageSquare
} from 'lucide-react';

const SmartCopilot = () => {
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
      question: "Is our internal company data safe and private?", 
      answer: "Absolutely. We deploy copilots in isolated environments. Your data is never used to train public models, and we respect your existing Role-Based Access Controls (RBAC)." 
    },
    { 
      question: "Which internal tools can the copilot integrate with?", 
      answer: "Autumn Technologies can integrate with almost any tool that has an API. Common integrations include Slack, Microsoft Teams, Notion, Jira, Salesforce, and Google Workspace." 
    },
    { 
      question: "How long does it take to index our company knowledge base?", 
      answer: "Depending on the volume of data, initial indexing usually takes a few days. After that, updates are synced in near real-time as your documents change." 
    },
    { 
      question: "Can the copilot actually execute tasks, or just answer questions?", 
      answer: "Both. While it excels at instantly retrieving information, we can architect it to execute specific internal workflows (like filing a Jira ticket or requesting PTO) via secure webhooks." 
    },
    { 
      question: "Do we need a dedicated engineering team to maintain this?", 
      answer: "No. Autumn Technologies acts as your fractional architecture team. We handle the deployment, maintenance, and scaling so your team can focus on their actual work." 
    }
  ];

  return (
    <div className="bg-[#050505] text-white w-full min-h-screen pt-20 font-sans selection:bg-[#a855f7] selection:text-white">
      
      {/* 1. HERO SECTION (Ref: image_f44b21.jpg) */}
      <section className="relative py-24 md:py-32 px-4 overflow-hidden flex flex-col items-center text-center">
        {/* Subtle grid and purple glow */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#a855f7] blur-[150px] opacity-20 rounded-full pointer-events-none" />
        
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-[#7e22ce]/50 bg-[#3b0764]/30 text-[#c084fc] text-xs font-medium px-4 py-1.5 rounded-full mb-8">
            <Bot className="w-3.5 h-3.5" />
            Smart Copilots
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Give your workforce <br className="hidden md:block" />
            an <span className="text-[#a855f7]">unfair advantage.</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
            Embed custom conversational copilots trained exclusively on your business data directly into the tools your employees use every day.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={handleNavigate}
              className="flex items-center gap-2 bg-[#a855f7] hover:bg-[#9333ea] text-white font-bold px-8 py-4 rounded-full transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)]"
            >
              Build Your Copilot <ArrowRight className="w-5 h-5" />
            </button>
          
          </div>
        </motion.div>
      </section>

      {/* 2. THE PAIN VS AUTUMN WAY */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Stop searching. Start executing.</h2>
          <p className="text-gray-400 text-lg">
            Knowledge workers spend 20% of their day just looking for internal information across fragmented systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pain Column */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-[#1a050d] border border-pink-900/30 p-8 md:p-10 rounded-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-pink-500/20 p-2 rounded-full"><XCircle className="text-pink-500 w-6 h-6" /></div>
              <h3 className="text-2xl font-bold text-white">The Old Way (Silos)</h3>
            </div>
            <ul className="space-y-6">
              {[
                "Pinging colleagues and waiting hours for simple answers.",
                "Digging through outdated Notion pages and Google Drives.",
                "Context switching between 5 different SaaS platforms.",
                "Losing institutional knowledge when key employees leave."
              ].map((text, i) => (
                <li key={i} className="flex gap-4 text-gray-300">
                  <XCircle className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solution Column */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-[#10051a] border border-[#a855f7]/20 p-8 md:p-10 rounded-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-[#a855f7]/20 p-2 rounded-full"><CheckCircle2 className="text-[#a855f7] w-6 h-6" /></div>
              <h3 className="text-2xl font-bold text-white">The Autumn Copilot</h3>
            </div>
            <ul className="space-y-6">
              {[
                "Instant, accurate answers sourced directly from your secure data.",
                "Lives right inside Slack, Teams, or your custom dashboard.",
                "Synthesizes information across multiple platforms instantly.",
                "A permanent, constantly updating brain for your enterprise."
              ].map((text, i) => (
                <li key={i} className="flex gap-4 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#a855f7] shrink-0 mt-0.5" />
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
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Intelligent Data Retrieval</h2>
          <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
            Our architecture doesn't just keyword search. It understands context, relationships, and the nuanced semantic meaning of your company's proprietary data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-2 bg-[#0f1115] border border-white/5 p-8 rounded-3xl overflow-hidden relative group">
            <div className="relative z-10">
              <Search className="text-[#a855f7] w-8 h-8 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Semantic Knowledge Graphing</h3>
              <p className="text-gray-400 max-w-md">
                We ingest your PDFs, Confluence pages, Slack histories, and codebase to create a secure, unified intelligence layer. The copilot knows *exactly* which document contains the answer, citing sources instantly.
              </p>
            </div>
            <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-[#a855f7]/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          <div className="flex flex-col gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-[#0f1115] border border-white/5 p-8 rounded-3xl flex-1">
              <ShieldCheck className="text-[#a855f7] w-6 h-6 mb-4" />
              <h3 className="text-xl font-bold mb-2">Role-Based Access</h3>
              <p className="text-gray-400 text-sm">
                Engineers only see code docs; HR only sees policies. Strict data siloing at the user level.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-[#0f1115] border border-white/5 p-8 rounded-3xl flex-1">
              <MessageSquare className="text-[#a855f7] w-6 h-6 mb-4" />
              <h3 className="text-xl font-bold mb-2">Native Integrations</h3>
              <p className="text-gray-400 text-sm">
                No new software to learn. Your team chats with the copilot directly inside Slack or Teams.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. REAL WORLD USE CASES */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-16">Copilots for every department</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <Briefcase />, title: "Sales Enablement", desc: "Sales reps ask the copilot for case studies, pricing structures, or competitor battlecards mid-call, getting instant, perfectly formatted answers to close deals faster." },
            { icon: <Users />, title: "HR & Onboarding", desc: "New hires can ask complex questions about benefits, PTO policies, or software setup without interrupting senior staff. The copilot answers based on your official handbook." },
            { icon: <FileText />, title: "Technical Support", desc: "Support agents use the copilot to instantly parse thousands of past Jira tickets and technical documentation to find the exact resolution steps for obscure customer bugs." }
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-[#0f1115] border border-white/5 p-8 rounded-3xl">
              <div className="w-12 h-12 bg-[#2d1b4e] rounded-xl flex items-center justify-center text-[#a855f7] mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. ENTERPRISE SECURITY */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Enterprise-grade security. Zero compromise.</h2>
            <p className="text-gray-400 text-lg mb-10">
              We know your internal data is your most valuable asset. Autumn Technologies builds architectures with security as the foundational layer, not an afterthought.
            </p>
            <div className="space-y-8">
              {[
                { title: "No Public Training", desc: "Your data is strictly isolated. It is never, under any circumstances, used to train foundational public models." },
                { title: "VPC Deployment Options", desc: "For highly regulated industries, we can deploy the entire retrieval architecture within your own AWS or Azure Virtual Private Cloud." },
                { title: "Granular Audit Logs", desc: "Track exactly who asked what, and which documents were accessed, ensuring full compliance and traceability." }
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
              <Lock className="text-[#a855f7] w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">SOC 2 Ready</h3>
              <span className="text-gray-400 text-sm">Compliant infrastructure</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-[#0f1115] border border-white/5 p-8 rounded-3xl flex flex-col items-center text-center justify-center">
              <Database className="text-[#a855f7] w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Encrypted</h3>
              <span className="text-gray-400 text-sm">Data at rest & transit</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="col-span-2 bg-[#10051a] border border-[#a855f7]/20 p-8 rounded-3xl flex flex-col items-center text-center justify-center">
              <Network className="text-[#a855f7] w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Seamless Active Directory Sync</h3>
              <p className="text-gray-400 text-sm">Automatically respects your Okta or Azure AD permissions.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. METHODOLOGY */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">The Implementation Architecture</h2>
          <p className="text-gray-400 text-sm tracking-[0.2em] uppercase">HOW WE DEPLOY</p>
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
                  <span className="text-[#c084fc] font-bold text-sm tracking-wider">PHASE 01</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                    <Layers className="w-4 h-4 text-gray-400 group-hover:text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Data Auditing & Ingestion</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We securely connect to your data silos (Drive, Notion, Slack), clean the unstructured data, and build a high-performance vector index for rapid retrieval.
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
              <h3 className="text-3xl font-bold mb-4">Ready to upgrade your team?</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Stop losing hours to scattered information. Let's discuss how a custom smart copilot can streamline your enterprise workflows.
              </p>
              <button 
                onClick={handleNavigate}
                className="w-full bg-white text-black hover:bg-[#a855f7] hover:text-white font-bold py-4 rounded-full transition-colors"
              >
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SmartCopilot;