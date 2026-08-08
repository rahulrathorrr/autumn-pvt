import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
    setShowServices(false);
    navigate(path);
  };

  return (
    <header className="relative z-50 w-full bg-[#050505] border-b border-white/10">
      
      {/* ================= HEADER ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">

          {/* ================= LOGO ================= */}
          <div
            className="flex items-center h-full cursor-pointer shrink-0"
            onClick={() => handleNavigate("/")}
          >
            <img
              src={logo}
              alt="Autumn Logo"
              className="h-20 md:h-15 w-auto object-contain block"
            />
          </div>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <nav className="hidden md:flex items-center gap-8 h-full">

            {/* About */}
            <button
              onClick={() => handleNavigate("/about")}
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              About
            </button>

            {/* ================= SERVICES ================= */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              <button
                className="flex items-center gap-1 text-gray-300 hover:text-white text-sm font-medium transition-colors cursor-default"
              >
                Services

                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    showServices ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {showServices && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-[72px] left-1/2 -translate-x-1/2 w-56 bg-[#111111] border border-white/10 rounded-xl py-3 shadow-2xl"
                  >
                    <div className="flex flex-col">

                      <button
                        onClick={() =>
                          handleNavigate("/services/voice-agents")
                        }
                        className="text-left px-5 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        Voice Systems
                      </button>

                      <button
                        onClick={() =>
                          handleNavigate("/services/custom-automation")
                        }
                        className="text-left px-5 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        Custom Automation
                      </button>

                      <button
                        onClick={() =>
                          handleNavigate("/services/smart-copilots")
                        }
                        className="text-left px-5 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        Smart Copilots
                      </button>

                      <button
                        onClick={() =>
                          handleNavigate("/services/software-delivery")
                        }
                        className="text-left px-5 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        Software Delivery
                      </button>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Careers */}
            <button
              onClick={() => handleNavigate("/careers")}
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              Careers
            </button>

            {/* Blog */}
            <button
              onClick={() => handleNavigate("/blog")}
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              Blog
            </button>

            {/* Contact */}
            <button
              onClick={() => handleNavigate("/contact")}
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              Contact
            </button>

          </nav>

          {/* ================= CTA BUTTON ================= */}
          <div className="hidden md:flex items-center shrink-0">
            <button
              onClick={() => handleNavigate("/contact")}
              className="flex items-center gap-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium text-sm px-6 py-2.5 rounded-full transition-colors"
            >
              <Phone className="w-4 h-4" />
              Book a Call
            </button>
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* ================= MOBILE NAVIGATION ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#050505] border-t border-white/10 absolute w-full top-20 left-0"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-start">

              {/* About */}
              <button
                onClick={() => handleNavigate("/about")}
                className="text-left w-full px-3 py-4 text-white font-medium border-b border-white/10 hover:text-[#3b82f6] transition-colors"
              >
                About
              </button>

              {/* ================= MOBILE SERVICES ================= */}
              <div className="w-full px-3 py-4 border-b border-white/10">

                <span className="text-gray-500 font-medium text-sm uppercase tracking-wider mb-3 block">
                  Services
                </span>

                <div className="flex flex-col space-y-3 pl-4">

                  <button
                    onClick={() =>
                      handleNavigate("/services/voice-agents")
                    }
                    className="text-left text-white hover:text-[#3b82f6] transition-colors"
                  >
                    Voice Systems
                  </button>

                  <button
                    onClick={() =>
                      handleNavigate("/services/custom-automation")
                    }
                    className="text-left text-white hover:text-[#3b82f6] transition-colors"
                  >
                    Custom Automation
                  </button>

                  <button
                    onClick={() =>
                      handleNavigate("/services/smart-copilots")
                    }
                    className="text-left text-white hover:text-[#3b82f6] transition-colors"
                  >
                    Smart Copilots
                  </button>

                  <button
                    onClick={() =>
                      handleNavigate("/services/software-delivery")
                    }
                    className="text-left text-white hover:text-[#3b82f6] transition-colors"
                  >
                    Software Delivery
                  </button>

                </div>
              </div>

              {/* Careers */}
              <button
                onClick={() => handleNavigate("/careers")}
                className="text-left w-full px-3 py-4 text-white font-medium border-b border-white/10 hover:text-[#3b82f6] transition-colors"
              >
                Careers
              </button>

              {/* Blog */}
              <button
                onClick={() => handleNavigate("/blog")}
                className="text-left w-full px-3 py-4 text-white font-medium border-b border-white/10 hover:text-[#3b82f6] transition-colors"
              >
                Blog
              </button>

              {/* Contact */}
              <button
                onClick={() => handleNavigate("/contact")}
                className="text-left w-full px-3 py-4 text-white font-medium hover:text-[#3b82f6] transition-colors"
              >
                Contact
              </button>

              {/* Mobile CTA */}
              <button
                onClick={() => handleNavigate("/contact")}
                className="w-full mt-4 flex justify-center items-center gap-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium px-6 py-3 rounded-full transition-colors"
              >
                <Phone className="w-4 h-4" />
                Book a Call
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};

export default Header;