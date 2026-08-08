import React from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  return (
    <footer className="bg-[#050505] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* ================= MAIN FOOTER CONTENT ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">

          {/* ================= BRAND ================= */}
          <div className="lg:col-span-2">

            <div
              className="flex items-center gap-3 cursor-pointer mb-6 w-fit"
              onClick={() => handleNavigate("/")}
            >
              <img
                src={logo}
                alt="Autumn Technologies"
                className="h-16 md:h-20 w-auto object-contain block"
              />
              {/* Company Name & Private Limited */}
              <div className="flex flex-col justify-center">
                <span className="uppercase font-semibold text-lg sm:text-xl tracking-[0.15em] text-[#D4AF37] leading-none">
                  AUTUMN TECHNOLOGIES
                </span>
                <span className="uppercase font-medium text-[10px] sm:text-xs tracking-[0.25em] text-[#D4AF37]/70 mt-1.5">
                  PRIVATE LIMITED
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Digital product consulting, development, and engineering
              company. We transform complex problems into intelligent,
              scalable software solutions.
            </p>

          </div>

          {/* ================= COMPANY ================= */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-6">
              Company
            </h4>

            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => handleNavigate("/about")}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  About
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleNavigate("/careers")}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Careers
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleNavigate("/blog")}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Blog
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleNavigate("/contact")}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* ================= SERVICES ================= */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-6">
              Services
            </h4>

            <ul className="space-y-4">
              <li>
                <button
                  onClick={() =>
                    handleNavigate("/services/voice-agents")
                  }
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Voice Systems
                </button>
              </li>

              <li>
                <button
                  onClick={() =>
                    handleNavigate("/services/custom-automation")
                  }
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Custom Automation
                </button>
              </li>

              <li>
                <button
                  onClick={() =>
                    handleNavigate("/services/smart-copilots")
                  }
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Smart Copilots
                </button>
              </li>

              <li>
                <button
                  onClick={() =>
                    handleNavigate("/services/software-delivery")
                  }
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Software Delivery
                </button>
              </li>
            </ul>
          </div>

          {/* ================= LEGAL ================= */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-6">
              Legal
            </h4>

            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => handleNavigate("/privacy")}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Privacy Policy
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleNavigate("/terms")}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>

          {/* ================= CONTACT ================= */}
          <div className="lg:col-span-1">

            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-6">
              Contact
            </h4>

            <div className="space-y-6">

              {/* Email */}
              <div className="flex items-start gap-3">

                <Mail className="w-5 h-5 text-[#3b82f6] shrink-0 mt-0.5" />

                <div>
                  <a
                    href="mailto:cto.reach@autumntechno.in"
                    className="text-gray-300 hover:text-white text-sm font-medium transition-colors block"
                  >
                    cto.reach@autumntechno.in
                  </a>

                  <span className="text-gray-500 text-xs">
                    Drop us a line
                  </span>
                </div>

              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">

                <Phone className="w-5 h-5 text-[#a855f7] shrink-0 mt-0.5" />

                <div>
                  <a
                    href="tel:+918619243212"
                    className="text-gray-300 hover:text-white text-sm font-medium transition-colors block"
                  >
                    +91 86192 43212
                  </a>

                  <span className="text-gray-500 text-xs">
                    Give us a call
                  </span>
                </div>

              </div>

              {/* Address */}
              <div className="flex items-start gap-3">

                <MapPin className="w-5 h-5 text-[#84cc16] shrink-0 mt-0.5" />

                <div>
                  <p className="text-gray-300 text-sm font-medium">
                    Panakam, Tirupati Rural
                  </p>

                  <span className="text-gray-500 text-xs">
                    Andhra Pradesh, India
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 Autumn Technologies Private Limited. All Rights Reserved.
          </p>

          <a
            href="https://autumntechno.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-500 hover:text-white text-sm transition-colors group"
          >
            www.autumntechno.in

            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;