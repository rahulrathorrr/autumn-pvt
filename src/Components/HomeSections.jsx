import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, Plus, Minus, 
  Mic, Code2, Zap, Bot, Shield, Globe, Lock, 
  Server, FileText, Activity 
} from 'lucide-react';

const HomeSections = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  const handleNavigate = (path) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(path);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const services = [
    {
      icon: <Code2 className="w-6 h-6 text-[#3b82f6]" />,
      title: "Software Delivery",
      features: [
        "10x Faster Custom Development",
        "Parallel Agile Sprint Model",
        "Fixed Predictable Sprint Pricing",
        "Built-in Enterprise QA & Security",
        "Deployment-ready Outputs"
      ],
      link: "/services/software-delivery"
    },
    {
      icon: <Mic className="w-6 h-6 text-[#3b82f6]" />,
      title: "Voice Systems",
      features: [
        "Inbound Customer Support 24/7",
        "Outbound Sales & Lead Qualification",
        "Automated Appointment Scheduling",
        "Multilingual Real-time Translation",
        "Voice-Activated Order Processing"
      ],
      link: "/services/voice-agents"
    },
    {
      icon: <Zap className="w-6 h-6 text-[#3b82f6]" />,
      title: "Custom Automation",
      features: [
        "Intelligent Invoice Processing",
        "Automated Data Entry & Syncing",
        "Email Triage & Intelligent Routing",
        "Predictive Inventory Management",
        "Automated Financial Reporting"
      ],
      link: "/services/custom-automation"
    },
    {
      icon: <Bot className="w-6 h-6 text-[#3b82f6]" />,
      title: "Smart Copilots",
      features: [
        "Internal Knowledge Retrieval",
        "Native Slack & Teams Integration",
        "Role-Based Data Access Controls",
        "Automated Employee Onboarding",
        "Instant Technical Support Assist"
      ],
      link: "/services/smart-copilots"
    }
  ];

  const faqs = [
    { 
      question: "What determines the investment required for an Autumn Technologies partnership?", 
      answer: "Investment scales based on workflow complexity, the number of integrations required, and the level of fault-tolerance needed for your specific architecture." 
    },
    { 
      question: "What is the typical timeline for a system architecture rollout?", 
      answer: "Most custom architectures are deployed within 4 to 8 weeks, depending on the data structures and API readiness of your existing platforms." 
    },
    { 
      question: "How does Autumn ensure ethical compliance and global data sovereignty?", 
      answer: "We deploy routing software securely and can operate within your own AWS/Azure VPCs to ensure your data never leaves your controlled environment." 
    },
    { 
      question: "What criteria should enterprises use to select a tech advisory partner?", 
      answer: "Look for engineering rigor, transparent state-management capabilities, and a focus on measurable business ROI rather than just deploying basic scripts." 
    },
    { 
      question: "How does Autumn customize intelligent systems to specific workflows?", 
      answer: "We conduct a deep-dive audit of your operations, map out every edge case, and build deterministic parsing layers specifically for your business topography." 
    }
  ];

  return (
    <div className="bg-[#050505] text-white w-full">
      
      {/* 1. VISUAL FEATURE GRID (Ref: image_90a3ba.jpg) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Large Main Feature Card */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="lg:col-span-2 relative rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/5 aspect-square md:aspect-auto min-h-[400px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1488229297570-58520851e868?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHRlY2h8ZW58MHx8MHx8fDA%3D" 
              alt="Advanced Processing Core" 
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <div className="text-[#3b82f6] text-xs font-bold tracking-widest uppercase mb-2">Advanced Processing</div>
              <h3 className="text-2xl font-bold">Enterprise Core Infrastructure</h3>
            </div>
          </motion.div>

          {/* 3 Smaller Feature Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "Total process optimization.", img: "https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
              { title: "Removing the barriers to scale.", img: "https://images.unsplash.com/photo-1496065187959-7f07b8353c55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHRlY2h8ZW58MHx8MHx8fDA%3D" },
              { title: "Seamless, expert-led integration.", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop" }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-6 flex flex-col justify-between group overflow-hidden relative min-h-[300px]"
              >
                <h4 className="text-lg font-bold mb-6 relative z-10">{item.title}</h4>
                <div className="absolute bottom-0 left-0 right-0 h-48 mt-auto rounded-xl overflow-hidden mx-4 mb-4">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. SERVICES CARDS (Ref: image_90a3b5.jpg) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Four ways Autumn plugs into <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#a855f7]">your business</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-gradient-to-b from-[#11141d] to-[#0a0a0a] border border-[#1e3a8a]/30 rounded-3xl p-8 flex flex-col h-full hover:border-[#3b82f6]/50 transition-colors"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-6">{service.title}</h3>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-gray-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#3b82f6] shrink-0 mt-0.5" />
                    <span className="leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handleNavigate(service.link)}
                className="flex items-center gap-2 text-[#3b82f6] font-semibold hover:text-[#60a5fa] transition-colors mt-auto group"
              >
                Explore Solution <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. PRINCIPLES (Ref: image_90a39b.jpg) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 bg-white text-black rounded-[3rem] my-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            The Autumn <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#a855f7]">Principles</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              img: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              num: "PRINCIPLE 01",
              title: "Outcome-Driven Strategy",
              desc: "Technology is secondary to your goals. Our methodology begins with your specific business KPIs, ensuring every deployment is engineered for a measurable impact on your bottom line."
            },
            {
              img: "https://images.unsplash.com/photo-1510519138101-570d1dca3d66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHRlY2h8ZW58MHx8MHx8fDA%3D",
              num: "PRINCIPLE 02",
              title: "Resilient & Adaptive Architecture",
              desc: "We build for the future, not just for today. Utilizing cloud-native frameworks, we develop flexible systems that scale seamlessly as your enterprise data and operational complexity grows."
            },
            {
              img: "https://images.unsplash.com/photo-1556740714-a8395b3bf30f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHRlY2h8ZW58MHx8MHx8fDA%3D",
              num: "PRINCIPLE 03",
              title: "Integrity & Ethical Stewardship",
              desc: "Enterprise-grade software requires an uncompromising commitment to safety. We integrate rigorous security protocols and ethical oversight into every data pipeline we construct."
            }
          ].map((principle, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="flex flex-col"
            >
              <div className="w-full h-48 rounded-2xl overflow-hidden mb-8 shadow-lg">
                <img src={principle.img} alt={principle.title} className="w-full h-full object-cover" />
              </div>
              <span className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-3">{principle.num}</span>
              <h3 className="text-2xl font-bold mb-4">{principle.title}</h3>
              <p className="text-gray-600 leading-relaxed">{principle.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. COMPLIANCE GRID (Ref: image_90a398.png) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#a3e635] text-xs font-bold tracking-widest uppercase mb-4 block">BUILDING WITH COMPLIANCE AND RISK IN MIND</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Engineering Enterprise Trust: <br />
            <span className="text-[#10b981]">Compliance by Design</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Data Privacy", desc: "Architecting infallible data lifecycles with absolute cryptographic assurance." },
            { title: "Security & Risk", desc: "Proactive threat modeling built on identity-first, continuous verification." },
            { title: "System Governance", desc: "Deploying enterprise intelligence with demonstrable transparency and regulatory compliance." },
            { title: "Industry Standards", desc: "Navigating complex sectoral mandates to deliver frictionless, auditor-ready infrastructures." },
            { title: "Global Resilience", desc: "Distributed architectures engineered to withstand volatile threat landscapes globally." },
            { title: "Cloud Security", desc: "Automated, policy-as-code defense mechanisms shifting security left." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 hover:border-[#10b981]/30 transition-colors"
            >
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. FAQ & CONTACT (Ref: image_90a395.png) */}
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
                onClick={() => handleNavigate('/contact')}
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

export default HomeSections;