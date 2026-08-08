import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const Terms = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-[#050505] text-white w-full min-h-screen pt-32 pb-24 font-sans selection:bg-[#84cc16] selection:text-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <div className="w-12 h-12 bg-[#1a2e05] border border-[#84cc16]/30 rounded-xl flex items-center justify-center mb-8">
            <FileText className="w-6 h-6 text-[#84cc16]" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Terms & Conditions</h1>
          <p className="text-gray-500 text-sm mb-12"></p>

          <div className="space-y-10 text-gray-300 leading-relaxed">
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
              <p className="mb-4">
                These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Autumn Technologies Private Limited ("we," "us" or "our"), concerning your access to and use of the autumntechno.in website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Intellectual Property Rights</h2>
              <p className="mb-4">
                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. User Representations</h2>
              <p className="mb-4">
                By using the Site, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-400">
                <li>All registration information you submit will be true, accurate, current, and complete.</li>
                <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                <li>You have the legal capacity and you agree to comply with these Terms and Conditions.</li>
                <li>You will not use the Site for any illegal or unauthorized purpose.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Prohibited Activities</h2>
              <p className="mb-4">
                You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Governing Law</h2>
              <p className="mb-4">
                These Terms shall be governed by and defined following the laws of India. Autumn Technologies Private Limited and yourself irrevocably consent that the courts of Andhra Pradesh, India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
              </p>
            </section>

            <section className="bg-[#111111] border border-white/10 p-8 rounded-2xl mt-12">
              <h2 className="text-xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-400 mb-4">
                In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
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

export default Terms;