import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, ArrowRight, XCircle, CheckCircle2, 
  FileText, Database, Mail, ShoppingCart, 
  Users, Package, Server, Cpu, Layers, 
  Plus, Minus, Workflow
} from 'lucide-react';

const CustomAutomation = () => {
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
      question: "What determines the investment required for an Autumn Technologies partnership?", 
      answer: "Investment scales based on workflow complexity, the number of integrations required, and the level of fault-tolerance needed for your specific architecture." 
    },
    { 
      question: "What is the typical timeline for an automation architecture rollout?", 
      answer: "Most custom architectures are deployed within 4 to 8 weeks, depending on the data structures and API readiness of your existing platforms." 
    },
    { 
      question: "How does Autumn Technologies ensure ethical compliance and global data sovereignty?", 
      answer: "We deploy routing software securely and can operate within your own AWS/Azure VPCs to ensure your data never leaves your controlled environment." 
    },
    { 
      question: "What criteria should enterprises use to select an elite automation advisory partner?", 
      answer: "Look for engineering rigor, transparent state-management capabilities, and a focus on measurable business ROI rather than just deploying basic scripts." 
    },
    { 
      question: "How does Autumn Technologies customize intelligent systems to specific enterprise workflows?", 
      answer: "We conduct a deep-dive audit of your operations, map out every edge case, and build deterministic parsing layers specifically for your business topography." 
    }
  ];

  return (
    <div className="bg-[#050505] text-white w-full min-h-screen pt-20 font-sans selection:bg-[#84cc16] selection:text-black">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-24 md:py-32 px-4 overflow-hidden flex flex-col items-center text-center">
        {/* Subtle grid and green glow */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(132,204,22,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(132,204,22,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#84cc16] blur-[150px] opacity-10 rounded-full pointer-events-none" />
        
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-[#4d7c0f] bg-[#1a2e05]/50 text-[#84cc16] text-xs font-medium px-4 py-1.5 rounded-full mb-8">
            <Zap className="w-3.5 h-3.5" />
            Custom Automation
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Eliminate your company's <br className="hidden md:block" />
            <span className="text-[#84cc16]">manual busywork.</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
            We design intelligent background agents that operate your actual business workflows end-to-end. Transform hours of manual data entry into instantaneous execution.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={handleNavigate}
              className="flex items-center gap-2 bg-[#84cc16] hover:bg-[#65a30d] text-black font-bold px-8 py-4 rounded-full transition-all"
            >
              Automate Your Workflow <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={handleNavigate}
              className="flex items-center gap-2 bg-[#111111] hover:bg-[#1a1a1a] border border-white/10 text-white font-medium px-8 py-4 rounded-full transition-all"
            >
              <Workflow className="w-5 h-5" /> Audit Process
            </button>
          </div>
        </motion.div>
      </section>

      {/* 2. WASTING HUMAN POTENTIAL */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">You are wasting human potential</h2>
          <p className="text-gray-400 text-lg">
            Scaling a business shouldn't mean proportionately scaling your back-office headcount just to move data around.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pain Column */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-[#1a0505] border border-red-900/30 p-8 md:p-10 rounded-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-red-500/20 p-2 rounded-full"><XCircle className="text-red-500 w-6 h-6" /></div>
              <h3 className="text-2xl font-bold text-white">The Pain (Manual)</h3>
            </div>
            <ul className="space-y-6">
              {[
                "Highly paid employees spending 60% of their day doing exact data entry.",
                "Human errors cascading through financial reporting.",
                "Siloed platforms requiring copy-pasting to stay in sync.",
                "Critical tasks bottlenecked because 'Sarah is on vacation'."
              ].map((text, i) => (
                <li key={i} className="flex gap-4 text-gray-300">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solution Column */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-[#051a08] border border-[#84cc16]/20 p-8 md:p-10 rounded-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-[#84cc16]/20 p-2 rounded-full"><CheckCircle2 className="text-[#84cc16] w-6 h-6" /></div>
              <h3 className="text-2xl font-bold text-white">The Autumn Way</h3>
            </div>
            <ul className="space-y-6">
              {[
                "Automated agents that extract, validate, and route data securely.",
                "Zero human error: Outputs are perfectly standardized.",
                "Instant cross-platform syncing via API and Webhooks.",
                "Scales infinitely without hiring or taking sick days."
              ].map((text, i) => (
                <li key={i} className="flex gap-4 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#84cc16] shrink-0 mt-0.5" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 3. BEYOND ZAPIER */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Beyond Zapier integration</h2>
          <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
            Basic integrations just push text. Custom Automations use advanced logic to understand messy data, reason about discrepancies, and take complex actions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-2 bg-[#0f1115] border border-white/5 p-8 rounded-3xl overflow-hidden relative group">
            <div className="relative z-10">
              <FileText className="text-[#84cc16] w-8 h-8 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Intelligent Invoice & PDF Extraction</h3>
              <p className="text-gray-400 max-w-md">
                Automated systems instantly extract, validate, and structure data from messy PDFs, scans, and emails. Auto-match POs and automatically push directly to your ERP without manual typing.
              </p>
            </div>
            {/* Abstract Tech Graphic Overlay */}
            <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-[#84cc16]/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          <div className="flex flex-col gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-[#0f1115] border border-white/5 p-8 rounded-3xl flex-1">
              <Database className="text-[#84cc16] w-6 h-6 mb-4" />
              <h3 className="text-xl font-bold mb-2">CRM Data Syncing</h3>
              <p className="text-gray-400 text-sm">
                Capture unstructured data from calls and emails, structuring it cleanly into Salesforce or HubSpot.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-[#0f1115] border border-white/5 p-8 rounded-3xl flex-1">
              <Mail className="text-[#84cc16] w-6 h-6 mb-4" />
              <h3 className="text-xl font-bold mb-2">Email Triage & Routing</h3>
              <p className="text-gray-400 text-sm">
                Analyze incoming email intent, categorizing and routing to the right department automatically.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. REAL WORLD */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-16">How it works in the real world</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <FileText />, title: "Accounts Payable", desc: "Stop manually entering vendor invoices into QuickBooks. The system ingests the email attachment, verifies the numbers against your PO system, and drafts the payment ready for one-click human approval." },
            { icon: <Users />, title: "Customer Onboarding", desc: "When a contract is signed via DocuSign, the automation triggers account creation, sends welcome sequences, provisions software licenses, and alerts the success manager in Slack." },
            { icon: <Package />, title: "Logistics Inventory Control", desc: "A deterministic model forecasts demand spikes and automatically creates supplier purchase orders before stock runs out, syncing changes live with your Shopify storefront." }
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-[#0f1115] border border-white/5 p-8 rounded-3xl">
              <div className="w-12 h-12 bg-[#1a2e05] rounded-xl flex items-center justify-center text-[#84cc16] mb-6">
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
              Broken automations cost money. We build fault-tolerant architectures utilizing modern workflow engines that handle API rate limits and connection drops gracefully.
            </p>
            <div className="space-y-8">
              {[
                { title: "Orchestration Layer", desc: "Reliable state-management via robust protocols ensuring workflows always complete." },
                { title: "Intelligent Routing", desc: "Integrating programmatic logic strictly for deterministic parsing and context mapping." },
                { title: "Document Processing", desc: "Using advanced OCR to accurately map complex structured data from forms and invoices." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 border-l-4 border-[#84cc16] pl-4">
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
              <span className="text-4xl font-bold text-white mb-2">99.9%</span>
              <span className="text-gray-400 text-sm">Data Parsing Accuracy</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-[#0f1115] border border-white/5 p-8 rounded-3xl flex flex-col items-center text-center justify-center">
              <span className="text-4xl font-bold text-white mb-2">75%</span>
              <span className="text-gray-400 text-sm">Avg. Task Reduction</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="col-span-2 bg-[#051a08] border border-[#84cc16]/20 p-8 rounded-3xl flex flex-col items-center text-center justify-center">
              <Server className="text-[#84cc16] w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Unified Integrations</h3>
              <p className="text-gray-400 text-sm">REST APIs, Webhooks, SOAP, Databases</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. METHODOLOGY */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">The Automation Architecture</h2>
          <p className="text-gray-400 text-sm tracking-[0.2em] uppercase">OUR METHODOLOGY</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative pl-8 md:pl-0">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />
            
            <div className="md:w-1/2 md:pr-12 relative text-left">
              {/* Timeline Dot */}
              <div className="hidden md:flex absolute right-[-28px] top-8 w-14 h-14 bg-[#050505] items-center justify-center z-10">
                <div className="w-4 h-4 rounded-full border-2 border-[#84cc16] bg-[#050505]" />
              </div>
              
              <div className="bg-[#0f1115] border border-white/5 p-8 rounded-3xl group hover:border-white/20 transition-all">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[#06b6d4] font-bold text-sm tracking-wider">PHASE 01</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                    <Layers className="w-4 h-4 text-gray-400 group-hover:text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Define Strategic Trajectory</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Audit existing workflows, extract primary KPIs, and target absolute, measurable ROI.
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
                    className="w-full flex items-center justify-between text-left py-2 font-medium text-lg hover:text-[#84cc16] transition-colors"
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
              <h3 className="text-3xl font-bold mb-4">Didn't Find What You Were Looking For?</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                We've got more answers waiting for you! If your question didn't make the list, don't hesitate to reach out to our principal architects.
              </p>
              <button 
                onClick={handleNavigate}
                className="w-full bg-white text-black hover:bg-[#84cc16] font-bold py-4 rounded-full transition-colors"
              >
                Schedule a Strategic Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CustomAutomation;