import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const carouselTexts = [
  { text: "Scalable.", color: "text-cyan-300", bar: "bg-cyan-300" },
  { text: "Actionable.", color: "text-pink-400", bar: "bg-pink-400" },
  { text: "Fast.", color: "text-yellow-400", bar: "bg-yellow-400" },
];

export default function Login() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % carouselTexts.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex min-h-screen font-inter">
      {/* LEFT SECTION */}
      <div className="relative w-[70%] bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-600 text-white flex flex-col justify-between px-16 py-10 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[url('/images/bg-left.jpg')] bg-cover bg-center opacity-80" />

        {/* LOGO */}
        <div className="relative z-10 flex items-center gap-1 mb-8">
          <img src="/images/logo.png" alt="AXELerate" className="h-6" />
          <img src="/images/pearson-logo.png" alt="Pearson" className="h-2 opacity-90" />
        </div>

        {/* MAIN CONTENT */}
        <div className="relative z-10 flex flex-col gap-6 max-w-xl h-full">
          {/* Illustration */}
          <img
            src="/images/illustration.png"
            alt="Accessibility Illustration"
            className="w-72 mb-2"
          />

          <h1 className="text-xl font-bold leading-snug">
            Seamless Accessibility Audits.
          </h1>

          {/* Animated Text */}
          <div className="text-2xl font-extrabold h-7">
            <AnimatePresence mode="wait">
              <motion.span
                key={carouselTexts[index].text}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className={carouselTexts[index].color}
              >
                {carouselTexts[index].text}
              </motion.span>
            </AnimatePresence>
          </div>

           {/* Dynamic Bars */}
          <div className="flex gap-2 mt-3 justify-center">
            {carouselTexts.map((item, i) => (
              <div
                key={i}
                className={`h-1 w-12 rounded-full transition-all duration-300 ${
                  i === index ? item.bar : "bg-gray-400/50"
                }`}
              />
            ))}
          </div>

          {/* Description */}
          <p className="text-sm text-gray-200 leading-relaxed">
            AXELerate is your all-in-one accessibility testing toolkit—powered by axe-core
            and built for speed. Run automated audits across multiple URLs, uncover WCAG
            violations, and export detailed, remediation-ready reports in just a few
            clicks.
          </p>

         
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-[30%] flex items-center justify-center bg-white">
        <div className="w-[80%] max-w-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Welcome to <span className="text-purple-700">AXELerate</span>
          </h2>
          <p className="text-gray-500 mb-8 text-sm">
            Please sign-in to your account and start the adventure
          </p>

          <form className="space-y-5">
            <div>
              <label className="text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                placeholder="Type your email"
                className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-purple-600" />
                Remember Me
              </label>
              <a href="#" className="text-purple-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-700 text-white py-2 rounded-md flex justify-center items-center gap-2 hover:bg-purple-800 transition-all shadow-md"
            >
              LOGIN <ArrowRight size={18} />
            </button>

            <p className="text-center text-sm text-gray-500 mt-6">
              New on our platform?{" "}
              <a href="#" className="text-purple-600 font-medium hover:underline">
                Create an account
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
