import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ChevronRight, Rocket, Users, Heart, Zap, 
  Laptop, GraduationCap, Coffee, Globe, Activity, 
  TrendingUp, MapPin, Clock, Briefcase, ArrowRight 
} from 'lucide-react';

const Careers = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');

  const handleNavigateToContact = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/contact');
  };

  const scrollToRoles = () => {
    const rolesSection = document.getElementById('open-roles');
    if (rolesSection) {
      rolesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // Job Data Array
  const jobs = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      category: 'Engineering',
      type: 'Full-time',
      description: 'Design and deploy production-grade pipelines, and build scalable systems for enterprise clients.',
      location: 'Remote / Bengaluru',
      experience: '4-7 years',
    },
    {
      id: 2,
      title: 'Full Stack Developer (React)',
      category: 'Engineering',
      type: 'Full-time',
      description: 'Build responsive, performant web applications with React, Tailwind CSS, and modern cloud infrastructure.',
      location: 'Remote / Bengaluru',
      experience: '2-5 years',
    },
    {
      id: 3,
      title: 'Product Designer',
      category: 'Design',
      type: 'Full-time',
      description: 'Shape the UX of complex products, creating interfaces that make digital interactions intuitive and delightful.',
      location: 'Remote',
      experience: '3-6 years',
    },
    {
      id: 4,
      title: 'Business Development Manager',
      category: 'Business',
      type: 'Full-time',
      description: 'Drive growth by identifying opportunities, managing client relationships, and closing enterprise partnerships.',
      location: 'Bengaluru',
      experience: '3-5 years',
    },
    {
      id: 5,
      title: 'DevOps / Cloud Engineer',
      category: 'Engineering',
      type: 'Full-time',
      description: 'Architect and manage cloud infrastructure on AWS/GCP, implement CI/CD pipelines, and ensure production reliability.',
      location: 'Remote / Bengaluru',
      experience: '3-5 years',
    }
  ];

  const filteredJobs = activeFilter === 'All' 
    ? jobs 
    : jobs.filter(job => job.category === activeFilter);

  const filters = ['All', 'Engineering', 'Design', 'Business', 'Operations'];

  return (
    <div className="bg-[#050505] text-white w-full min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Subtle background glow mimicking the reference image */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3b82f6]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          {/* We're Hiring Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-block border border-[#3f6212] bg-[#1a2e05]/30 text-[#a3e635] text-xs font-medium px-4 py-1.5 rounded-full">
              We're Hiring
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Build the Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#06b6d4]">
                Enterprise Software
              </span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#9ca3af] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Join a team of engineers, designers, and strategists who are shipping real digital products for real businesses - not building demos that never see production.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button 
              onClick={scrollToRoles}
              className="flex items-center gap-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium text-base px-6 py-3.5 rounded-full transition-all hover:scale-105"
            >
              View Open Positions
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. CULTURE SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="text-center mb-16"
        >
          <span className="text-[#a3e635] text-xs font-bold tracking-widest uppercase mb-4 block">Culture</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">How We Work</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Rocket className="w-5 h-5 text-[#a3e635]" />, title: 'Ship Over Perfection', desc: 'We value momentum. Build fast, learn faster, iterate always.' },
            { icon: <Users className="w-5 h-5 text-[#a3e635]" />, title: 'Radical Transparency', desc: 'Open communication, shared context, and honest feedback across every level.' },
            { icon: <Heart className="w-5 h-5 text-[#a3e635]" />, title: 'People-First Culture', desc: 'We invest in our people\'s growth, wellbeing, and long-term career trajectory.' },
            { icon: <Zap className="w-5 h-5 text-[#a3e635]" />, title: 'Ownership Mindset', desc: 'Every team member owns their domain end-to-end - from ideation to production.' }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#111111] border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-colors"
            >
              <div className="w-10 h-10 bg-[#1a2e05] rounded-xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. OPEN ROLES SECTION */}
      <section id="open-roles" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-20">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="text-center mb-12"
        >
          <span className="text-[#a3e635] text-xs font-bold tracking-widest uppercase mb-4 block">Open Roles</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Find Your Next Challenge</h2>
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter 
                  ? 'bg-[#3b82f6] text-white' 
                  : 'bg-transparent border border-white/20 text-gray-400 hover:border-white/50 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Job List */}
        <div className="space-y-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <motion.div 
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#111111] border border-white/5 p-6 md:p-8 rounded-2xl hover:border-white/20 transition-all group flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-[#1e3a8a]/30 text-[#3b82f6] text-xs font-semibold px-3 py-1 rounded-full">
                      {job.category}
                    </span>
                    <span className="text-gray-500 text-xs">{job.type}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-[#3b82f6] transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 max-w-2xl">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-500 text-xs font-medium">
                    <div className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {job.location}</div>
                    <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {job.experience}</div>
                    <div className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" /> {job.type}</div>
                  </div>
                </div>
                
                <button 
                  onClick={handleNavigateToContact}
                  className="flex items-center gap-2 text-[#3b82f6] font-medium text-sm hover:text-[#60a5fa] transition-colors md:pl-6 whitespace-nowrap"
                >
                  View & Apply <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            ))
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12 text-gray-500">
              No open roles in this category right now.
            </motion.div>
          )}
        </div>
      </section>

      {/* 4. BENEFITS SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="text-center mb-16"
        >
          <span className="text-[#a3e635] text-xs font-bold tracking-widest uppercase mb-4 block">Benefits</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Why People Love Working Here</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {[
            { icon: <Laptop className="w-5 h-5 text-[#3b82f6]" />, title: 'Remote-First', desc: 'Work from anywhere in India with flexible hours.' },
            { icon: <GraduationCap className="w-5 h-5 text-[#3b82f6]" />, title: 'Learning Budget', desc: '₹50K/year for courses, conferences, and certifications.' },
            { icon: <Coffee className="w-5 h-5 text-[#3b82f6]" />, title: 'Team Retreats', desc: 'Quarterly offsite events to connect and recharge.' },
            { icon: <Globe className="w-5 h-5 text-[#3b82f6]" />, title: 'Global Exposure', desc: 'Work with US/EU clients on cutting-edge projects.' },
            { icon: <Activity className="w-5 h-5 text-[#3b82f6]" />, title: 'Health & Wellness', desc: 'Comprehensive health insurance for you and family.' },
            { icon: <TrendingUp className="w-5 h-5 text-[#3b82f6]" />, title: 'Fast Growth', desc: 'Clear career paths with rapid promotion cycles.' }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1e3a8a]/20 border border-[#1e3a8a]/30 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. OPEN APPLICATION CTA */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Abstract subtle gradient background matching reference */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#a3e635]/5 blur-[100px] rounded-full pointer-events-none" />
        
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUpVariant}
          className="relative z-10 max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Don't see your role?</h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            We're always looking for exceptional people. Send us your resume and tell us what you'd bring to Autumn Technologies.
          </p>
          <button 
            onClick={handleNavigateToContact}
            className="inline-flex items-center gap-2 bg-white text-black hover:bg-gray-200 font-semibold text-base px-8 py-4 rounded-full transition-all hover:scale-105"
          >
            Send Open Application
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      </section>

    </div>
  );
};

export default Careers;