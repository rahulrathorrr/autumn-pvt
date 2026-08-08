import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PhoneCall, Zap, Fingerprint, Mic, Globe, 
  Workflow, CheckCircle2, Cloud, ShieldCheck, 
  Activity, Headphones, MessageSquare, Plus, Minus
} from 'lucide-react';

const VoiceAgents = () => {
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
    { question: "Does it sound like an old robotic IVR system?", answer: "Not at all. Our architecture ensures fluid, human-like cadence without the awkward pauses of legacy IVR." },
    { question: "What is the typical latency on a call?", answer: "We maintain ultra-low latency, typically under 400-500ms, enabling natural turn-taking in conversations." },
    { question: "Do I need to program the logic manually?", answer: "No. We handle the entire engineering, architecture, and deployment process. You just provide the business context." },
    { question: "Can I monitor the agent while it's on a live call?", answer: "Yes, our Live Call Dashboard allows you to monitor, whisper instructions, or take over calls instantly." },
    { question: "What happens if the system encounters a question it cannot answer?", answer: "It gracefully routes the call to a human representative or takes a message based on your defined fallback protocols." },
    { question: "How does it integrate with our existing CRM and calendar?", answer: "Through secure asynchronous tool execution via standard APIs and webhooks tailored to your stack." }
  ];

  return (
    <div className="bg-[#050505] text-white w-full min-h-screen pt-20 font-sans selection:bg-[#3b82f6] selection:text-white">
      
      {/* 1. HERO SECTION (Ref: image_f4b461.jpg) */}
      <section className="relative py-24 md:py-32 px-4 overflow-hidden flex flex-col items-center text-center">
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
          <div className="w-[800px] h-[300px] bg-[#3b82f6] blur-[150px] rounded-full" />
        </div>
        
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-[#1e3a8a] bg-[#0f172a]/50 text-[#60a5fa] text-xs font-medium px-4 py-1.5 rounded-full mb-8">
            <PhoneCall className="w-3.5 h-3.5" />
            Intelligent Voice Systems
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Software That Speaks Directly <br className="hidden md:block" />
            to Your <span className="text-[#3b82f6]">Customers.</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-medium text-gray-300 mb-8">
            One Architecture. Five Channels. Zero Technical Debt.
          </p>
          
          <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-10">
            Stop managing software subscriptions and start managing outcomes. Autumn Technologies 
            deploys custom, ultra-low-latency Voice Agents that handle your phone calls, WhatsApp, 
            and DMs with precision. No coding, and no "DIY" frustration for your team. 
            We build the architecture. You grow your business.
          </p>
        </motion.div>
      </section>

      {/* 2. TECHNOLOGY MOAT (Ref: image_f4b45d.png) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              The Technology Moat: <br /> Why We Sound Different
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Most digital agencies stitch together generic third-party APIs, relying on a clunky pipeline. This results in awkward pauses, robotic cadences, and system crashes under high volume. We took a different route.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Autumn Technologies utilizes a highly specialized, in-house WebRTC and Webhook-based architecture to ensure robust, real-time communication.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: <Zap className="text-[#3b82f6] w-5 h-5" />, title: "Ultra-Low Latency (<400-500ms)", desc: "Our systems process and output simultaneously. The result is fluid, interruptible conversation." },
              { icon: <Fingerprint className="text-[#3b82f6] w-5 h-5" />, title: "Acoustic Context Preservation", desc: "The software analyzes exactly *how* your customer is speaking, detecting pace and tone." },
              { icon: <Mic className="text-[#3b82f6] w-5 h-5" />, title: "True Barge-In & Turn-Taking", desc: "Customers can interrupt mid-sentence. The system detects pauses to know exactly when to respond." },
              { icon: <Globe className="text-[#3b82f6] w-5 h-5" />, title: "Enterprise-Grade Polyglot", desc: "A single agent can seamlessly switch languages mid-conversation (English, Hindi, Spanish, etc.)." }
            ].map((item, i) => (
              <motion.div 
                key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-[#0f1115] border border-white/5 p-6 rounded-2xl hover:border-white/10 transition-colors"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MULTI-AGENT ORCHESTRATION (Ref: image_f4b459.jpg) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="w-full aspect-square md:aspect-[4/3] bg-gradient-to-br from-[#0f172a] to-[#050505] border border-[#1e3a8a]/30 rounded-3xl p-8 flex items-center justify-center relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3b82f6]/10 via-transparent to-transparent" />
             {/* Abstract System UI Placeholder matching reference */}
             <div className="flex items-center gap-4 z-10 relative">
               <div className="w-24 h-24 rounded-2xl bg-[#1e3a8a]/20 border border-[#3b82f6]/40 flex flex-col items-center justify-center gap-2 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                 <Headphones className="text-[#60a5fa] w-8 h-8" />
                 <span className="text-[10px] text-[#60a5fa] font-mono tracking-wider">SUPPORT</span>
               </div>
               <div className="h-[2px] w-16 bg-gradient-to-r from-[#3b82f6]/40 to-[#3b82f6] relative">
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-[#3b82f6] rotate-45" />
               </div>
               <div className="w-24 h-24 rounded-2xl bg-[#1e3a8a]/20 border border-[#3b82f6]/40 flex flex-col items-center justify-center gap-2 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                 <Workflow className="text-[#60a5fa] w-8 h-8" />
                 <span className="text-[10px] text-[#60a5fa] font-mono tracking-wider">SALES</span>
               </div>
             </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Dynamic Multi-System Orchestration
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              You do not hire one human to handle sales, technical support, and billing simultaneously. Your software should not operate that way either. Instead of forcing a single workflow to handle every scenario, we deploy a Dynamic Multi-System architecture.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Real-Time Agent Switching", desc: "If a customer asks to upgrade mid-call, the system instantly hands off from the Support pipeline to the Sales pipeline." },
                { title: "Persistent Conversation Context", desc: "When the system switches pipelines, the conversation history transfers instantly. The customer never repeats themselves." },
                { title: "Specialized Precision", desc: "Isolating tasks to specific logical flows drastically increases accuracy and eliminates unexpected outputs." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1"><CheckCircle2 className="w-5 h-5 text-[#3b82f6]" /></div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. CAPABILITIES (Ref: image_f4b05d.png) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12">The Intelligence Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <Globe className="text-[#3b82f6] w-6 h-6" />, title: "The Omnichannel Brain", desc: "Remembers cross-channel context. Handles Inbound/Outbound Calls, WhatsApp, and WebRTC Widgets seamlessly." },
            { icon: <Workflow className="text-[#3b82f6] w-6 h-6" />, title: "Asynchronous Tool Execution", desc: "Connects securely to internal databases to book appointments, check inventory, and update CRM mid-conversation." },
            { icon: <Cloud className="text-[#3b82f6] w-6 h-6" />, title: "True Data Ownership", desc: "Bring Your Own Carrier and Account. Pay telecom providers directly at cost; pay us only for the architecture." }
          ].map((item, i) => (
            <motion.div 
              key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-[#0f1115] border border-white/5 p-8 rounded-2xl"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. SAFETY NET (Ref: image_f4adb7.png) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">The Supervisor's Safety Net</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The biggest fear businesses have with automation is losing control. We built the only platform that allows you to manage systems exactly like a human team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: <Activity className="text-[#3b82f6] w-5 h-5" />, title: "Live Call Dashboard", desc: "Monitor every active conversation across all channels." },
            { icon: <Activity className="text-[#3b82f6] w-5 h-5" />, title: "Live Sentiment Scoring", desc: "See if a caller is frustrated based on native prosody analysis." },
            { icon: <Headphones className="text-[#3b82f6] w-5 h-5" />, title: "The 'Takeover' Button", desc: "Instantly drop the automated agent and take over the call yourself." },
            { icon: <MessageSquare className="text-[#3b82f6] w-5 h-5" />, title: "Whisper Mode", desc: "Give the system live instructions without the customer hearing." }
          ].map((item, i) => (
            <motion.div 
              key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-[#0f1115] border border-white/5 p-6 rounded-2xl"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. HOW WE BUILD (Ref: image_f4adb2.png) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">How We Build Your Project</h2>
          <p className="text-gray-400 text-lg">A seamless, full-service deployment process. You provide the knowledge; we handle the engineering.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line hidden on mobile */}
          <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#1e3a8a] to-transparent z-0" />
          
          {[
            { step: "01", title: "Understand Your Business", desc: "We map your operational workflows, identify high-volume call drivers, and determine which tools to access." },
            { step: "02", title: "Build Custom Persona", desc: "We deploy a bespoke voice persona that perfectly matches your brand's tone and pacing." },
            { step: "03", title: "Engineer the Logic", desc: "Our team ingests your FAQs and maps the tool execution so the agent can autonomously interact with your CRM." },
            { step: "04", title: "Deploy & Monitor", desc: "We deploy the agent to a live phone number or widget. You get access to the Live Dashboard to monitor." }
          ].map((item, i) => (
            <motion.div 
              key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-[#0f1115] border border-white/5 p-8 rounded-2xl relative z-10"
            >
              <div className="w-10 h-10 rounded-full bg-[#1e3a8a]/30 border border-[#3b82f6]/30 text-[#60a5fa] font-bold flex items-center justify-center mb-6">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. ARCHITECTS / PRICING (Ref: image_f4b079.png) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center border-t border-white/5">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">We Are Your System Architects</h2>
        <p className="text-gray-400 text-lg mb-16">
          We act as your fractional engineering team, deploying a custom intelligence layer tailored exactly to your business topography. <span className="text-white font-semibold">Service, not just software.</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Pricing Card 1 */}
          <div className="bg-[#0f1115] border border-white/10 p-8 rounded-3xl relative">
            <div className="flex items-center gap-3 mb-6">
              <Cloud className="text-[#3b82f6] w-6 h-6" />
              <h3 className="text-2xl font-bold">Fully Managed</h3>
              <span className="bg-[#1e3a8a]/50 text-xs font-bold px-2 py-1 rounded text-white ml-auto">POPULAR</span>
            </div>
            <p className="text-gray-400 text-sm mb-8">For businesses that want a turnkey solution hosted on our global, auto-scaling infrastructure.</p>
            <div className="mb-8">
              <span className="text-5xl font-bold">$499</span>
            </div>
            <ul className="text-sm text-gray-400 space-y-2 mb-8">
              <li>one-time architecture fee</li>
              <li>+ $129 per month (platform maintenance)</li>
              <li>+ $0.10 per working minute</li>
            </ul>
            <button 
              onClick={handleNavigate}
              className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold py-4 rounded-xl transition-colors"
            >
              Deploy Managed Agent
            </button>
          </div>

          {/* Pricing Card 2 */}
          <div className="bg-[#0a0f1c] border border-[#1e3a8a]/50 p-8 rounded-3xl relative">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="text-[#3b82f6] w-6 h-6" />
              <h3 className="text-2xl font-bold">Sovereign Deployment</h3>
              <span className="bg-[#1e3a8a] text-xs font-bold px-2 py-1 rounded text-white ml-auto">ENTERPRISE</span>
            </div>
            <p className="text-gray-400 text-sm mb-8">For highly-regulated sectors. We deploy our routing software directly into your AWS/Azure VPC.</p>
            <div className="mb-8">
              <span className="text-5xl font-bold">$1,499</span>
            </div>
            <ul className="text-sm text-gray-400 space-y-2 mb-8">
              <li>one-time DevOps fee</li>
              <li>+ $79 per month (software retainer)</li>
              <li>+ $0.10 per working minute</li>
            </ul>
            <button 
              onClick={handleNavigate}
              className="w-full bg-white hover:bg-gray-200 text-black font-bold py-4 rounded-xl transition-colors"
            >
              Contact Enterprise Sales
            </button>
          </div>
        </div>
      </section>

      {/* 8. FAQ & CONTACT (Ref: image_f4ad9a.png) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white text-black rounded-t-[3rem]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-gray-200 pb-4">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between text-left py-2 font-medium text-lg hover:text-[#3b82f6] transition-colors"
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
                className="w-full bg-white text-black hover:bg-gray-200 font-bold py-4 rounded-full transition-colors"
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

export default VoiceAgents;