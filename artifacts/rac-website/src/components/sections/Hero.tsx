import React from "react";
import { motion } from "framer-motion";
import { PhoneCall, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center bg-gradient-to-br from-[#A0000A] via-[#C0000C] to-[#8B0000] text-white py-16 md:py-24 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl mix-blend-overlay"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-black/10 rounded-full blur-3xl mix-blend-overlay"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-8 p-2 bg-white rounded-full shadow-2xl inline-block">
            <div className="bg-white rounded-full p-2 border-4 border-gray-100">
              <img 
                src="/rac-logo.jpeg" 
                alt="RAC Logo" 
                className="w-32 h-32 md:w-40 md:h-40 object-contain rounded-full"
              />
            </div>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 drop-shadow-md"
          >
            রাশেদ একাডেমিক কেয়ার
            <span className="block text-2xl md:text-3xl font-serif mt-2 font-medium opacity-90">(R.A.C)</span>
          </motion.h1>

          <motion.h2 
            variants={itemVariants}
            className="text-xl md:text-3xl font-semibold mb-6 text-red-100"
          >
            ভর্তি ও একাডেমিক কোচিং
          </motion.h2>

          <motion.div 
            variants={itemVariants}
            className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-10"
          >
            <p className="text-lg md:text-2xl font-bold tracking-wide">
              "আজকের সঠিক শিক্ষা, আগামী দিনের সফলতা"
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col gap-4 text-left max-w-2xl w-full mx-auto mb-10 bg-black/30 p-6 md:p-8 rounded-2xl border border-white/20 shadow-xl" style={{ overflow: 'visible' }}>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-white shrink-0 mt-0.5" />
              <p className="text-lg md:text-xl font-semibold text-white leading-relaxed" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.4)' }}>৩য় শ্রেণিতে ভর্তি প্রস্তুতি</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-white shrink-0 mt-0.5" />
              <p className="text-lg md:text-xl font-semibold text-white leading-relaxed" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.4)' }}>৫ম শ্রেণি বৃত্তি প্রস্তুতি বিশেষ ব্যাচ</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-white shrink-0 mt-0.5" />
              <p className="text-lg md:text-xl font-semibold text-white leading-relaxed" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.4)' }}>
                ১ম থেকে ৬ষ্ঠ শ্রেণি পর্যন্ত বিদ্যালয় ভিত্তিক একাডেমিক প্রস্তুতি
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <a href="tel:01737718231" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100 text-lg h-14 px-8 font-bold shadow-lg group">
                <PhoneCall className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                ০১৭৩৭ ৭১৮২৩১
              </Button>
            </a>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white/10 hover:text-white text-lg h-14 px-8 font-semibold shadow-lg" onClick={scrollToContact}>
              <MapPin className="mr-2 w-5 h-5" />
              আমাদের ঠিকানা
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}