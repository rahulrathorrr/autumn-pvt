import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const Privacy = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-[#050505] text-white w-full min-h-screen pt-32 pb-24 font-sans selection:bg-[#3b82f6] selection:text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <div className="w-12 h-12 bg-[#1e3a8a]/20 border border-[#3b82f6]/30 rounded-xl flex items-center justify-center mb-8">
            <Shield className="w-6 h-6 text-[#3b82f6]" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-gray-500 text-sm mb-12"></p>

          <div className="space-y-10 text-gray-300 leading-relaxed">
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="mb-4">
                Autumn Technologies Private Limited ("we," "us," or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy will inform you as to how we look after your personal data when you visit our website (autumntechno.in) and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. The Data We Collect About You</h2>
              <p className="mb-4">
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-400">
                <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data:</strong> includes billing address, delivery address, email address, and telephone numbers.</li>
                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, and other technology on the devices you use to access this website.</li>
                <li><strong>Usage Data:</strong> includes information about how you use our website, products, and services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Personal Data</h2>
              <p className="mb-4">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-400">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
              <p className="mb-4">
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Your Legal Rights</h2>
              <p className="mb-4">
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data, and (where the lawful ground of processing is consent) to withdraw consent.
              </p>
            </section>

            <section className="bg-[#111111] border border-white/10 p-8 rounded-2xl mt-12">
              <h2 className="text-xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-400 mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="text-gray-300 text-sm space-y-2">
                <p><strong>Company:</strong> Autumn Technologies Private Limited</p>
                <p><strong>Email:</strong> cto.reach@autumntechno.in</p>
                <p><strong>Phone:</strong> +91 86192 43212</p>
                <p><strong>Address:</strong> 1-36, Ground Floor, Panakam Village, Panakam, Tirupati Rural, Chittoor, Andhra Pradesh, India, 517503.</p>
              </div>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;