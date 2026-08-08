import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, MapPin, CheckCircle2, Calendar, 
  Clock, Video, Globe, Phone, X 
} from 'lucide-react';

const Contact = () => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    location: '',
    role: '',
    notes: ''
  });

  const availableTimes = ['10:00 am', '10:30 am', '11:00 am', '1:00 pm', '2:30 pm', '4:00 pm'];

  // Format the date for the summary screen
  const formattedDate = selectedDate 
    ? new Date(selectedDate).toLocaleDateString('en-US', { 
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
      }) 
    : '';

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
    setStep(2);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      setStep(1);
      setFormData({ name: '', email: '', company: '', location: '', role: '', notes: '' });
      setSelectedDate('');
      setSelectedTime('');
    }, 4000);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-[#050505] text-white w-full min-h-screen pt-24 pb-20 font-sans selection:bg-[#3b82f6] selection:text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Contact Info */}
          <motion.div 
            initial="hidden" animate="visible" variants={fadeUp} 
            className="lg:col-span-4 bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl"
          >
            <h2 className="text-2xl font-bold mb-4">Contact Info</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-10">
              Prefer to send a direct message or drop by our office? We're always available for a chat.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1e3a8a]/20 border border-[#3b82f6]/30 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#3b82f6]" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold mb-1">Email Us</h4>
                  <a href="mailto:cto.reach@autumntechno.in" className="text-gray-400 text-sm hover:text-[#3b82f6] transition-colors">
                    cto.reach@autumntechno.in
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1e3a8a]/20 border border-[#3b82f6]/30 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#3b82f6]" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold mb-1">Call Us</h4>
                  <a href="tel:+918619243212" className="text-gray-400 text-sm hover:text-[#3b82f6] transition-colors">
                    +91 86192 43212
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1e3a8a]/20 border border-[#3b82f6]/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#3b82f6]" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold mb-1">Headquarters</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    1-36, Ground Floor, Panakam Village, <br />
                    Tirupati Rural, Chittoor, <br />
                    Andhra Pradesh, India, 517503
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h4 className="text-white font-bold text-sm mb-4">What to expect on the call:</h4>
              <ul className="space-y-3">
                {[
                  "Deep dive into your project goals",
                  "Live system architecture mapping",
                  "Clear timelines and budget estimates"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-400 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Booking Flow */}
          <motion.div 
            initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1 }}
            className="lg:col-span-8 bg-[#111111] border border-white/10 rounded-3xl overflow-hidden min-h-[600px]"
          >
            <AnimatePresence mode="wait">
              
              {/* STEP 1: DATE & TIME SELECTION */}
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                  className="p-8 md:p-12"
                >
                  <div className="mb-8 border-b border-white/10 pb-6">
                    <h2 className="text-3xl font-bold mb-2">Schedule a Call</h2>
                    <p className="text-gray-400">Select a date and time that works for you.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <h3 className="font-semibold text-lg mb-4 text-white">Select Date</h3>
                      <div className="space-y-3">
                        <input 
                          type="date" 
                          min={new Date().toISOString().split('T')[0]} // Prevents picking past dates
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#3b82f6] transition-colors [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert cursor-pointer"
                        />
                      </div>
                    </div>

                    <div className={selectedDate ? 'opacity-100' : 'opacity-30 pointer-events-none'}>
                      <h3 className="font-semibold text-lg mb-4 text-white">Select Time</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {availableTimes.map((time, i) => (
                          <button
                            key={i}
                            onClick={() => handleTimeSelection(time)}
                            className="px-4 py-3 rounded-xl border border-white/10 bg-[#0a0a0a] text-gray-300 hover:border-[#3b82f6] hover:text-[#3b82f6] transition-all text-center text-sm font-medium"
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: DETAILS FORM */}
              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col md:flex-row h-full"
                >
                  {/* Left Side: Summary */}
                  <div className="md:w-1/3 bg-[#0a0a0a] p-8 border-b md:border-b-0 md:border-r border-white/10">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mb-4">
                      <span className="text-black font-bold text-[10px]">AT</span>
                    </div>
                    <p className="text-gray-400 font-medium text-sm mb-1">Autumn Technologies</p>
                    <h2 className="text-2xl font-bold text-white mb-6">Let's Talk</h2>
                    <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                      30 minutes. Zero pressure. Full clarity on your project.
                    </p>

                    <div className="space-y-4 text-gray-300 text-sm font-medium">
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-gray-500 shrink-0" />
                        <span>{formattedDate}<br/>{selectedTime} - {selectedTime.replace('00', '30')}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-gray-500 shrink-0" />
                        <span>30m</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Video className="w-5 h-5 text-gray-500 shrink-0" />
                        <span>Google Meet</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Globe className="w-5 h-5 text-gray-500 shrink-0" />
                        <span>Asia/Calcutta</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Inputs */}
                  <div className="md:w-2/3 p-8">
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Your name *</label>
                        <input 
                          type="text" name="name" required value={formData.name} onChange={handleInputChange}
                          className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Email address *</label>
                        <input 
                          type="email" name="email" required placeholder="work@company.com" value={formData.email} onChange={handleInputChange}
                          className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Company Name *</label>
                        <input 
                          type="text" name="company" required placeholder="Your Company Name" value={formData.company} onChange={handleInputChange}
                          className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Location</label>
                        <input 
                          type="text" name="location" placeholder="City, Country" value={formData.location} onChange={handleInputChange}
                          className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Role/ Title</label>
                        <input 
                          type="text" name="role" placeholder="Founder, CTO, Product Manager..." value={formData.role} onChange={handleInputChange}
                          className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Anything we should know</label>
                        <textarea 
                          name="notes" rows="3" placeholder="Please share anything that will help prepare for our meeting." value={formData.notes} onChange={handleInputChange}
                          className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#3b82f6] transition-colors resize-none"
                        ></textarea>
                      </div>
                      
                      <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                        <p className="text-[10px] text-gray-500 max-w-[200px]">
                          By proceeding, you agree to our Terms and Privacy Policy.
                        </p>
                        <div className="flex gap-4">
                          <button 
                            type="button" onClick={() => setStep(1)}
                            className="text-gray-400 hover:text-white text-sm font-medium transition-colors px-2"
                          >
                            Back
                          </button>
                          <button 
                            type="submit"
                            className="bg-white text-black font-bold px-6 py-2.5 rounded-full hover:bg-gray-200 transition-colors text-sm"
                          >
                            Confirm
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>

      {/* SUCCESS POPUP */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/70 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#111111] border border-white/10 rounded-3xl p-8 max-w-md w-full text-center shadow-2xl relative"
            >
              <button 
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="w-20 h-20 bg-[#1e3a8a]/20 border border-[#3b82f6]/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-[#3b82f6]" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">Request Sent Successfully!</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Thank you, {formData.name || 'there'}! Your meeting for <strong>{formattedDate}</strong> at <strong>{selectedTime}</strong> has been requested. Our team will review and send you a calendar invite shortly.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
};

export default Contact;