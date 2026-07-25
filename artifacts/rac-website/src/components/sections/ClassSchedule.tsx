import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, ClipboardCheck, GraduationCap, Clock, BookOpen, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.1, ease: "easeOut" },
  }),
};

export function ClassSchedule() {
  return (
    <section id="schedule" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">
            ক্লাস সময়সূচি
          </h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            শিক্ষার্থীদের সুবিধার কথা মাথায় রেখে আমাদের সময়সূচি সাজানো হয়েছে
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Class Days */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <Card className="h-full border-2 border-transparent hover:border-primary transition-all duration-300 shadow-md hover:shadow-xl group">
              <CardContent className="p-8 flex flex-col items-center text-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <CalendarDays className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">ক্লাসের দিন</h3>
                  <div className="h-0.5 w-10 bg-primary mx-auto rounded mb-4" />
                  <p className="text-4xl font-extrabold text-primary mb-1">৩ দিন</p>
                  <p className="text-gray-500 font-medium">প্রতি সপ্তাহে</p>
                </div>
                <div className="w-full bg-gray-50 rounded-xl p-4 mt-auto">
                  <div className="flex items-center gap-2 justify-center text-gray-600">
                    <Clock className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm font-medium">সপ্তাহে ৩ দিন নিয়মিত ক্লাস</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Exams */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <Card className="h-full border-2 border-primary shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
              <CardContent className="p-8 flex flex-col items-center text-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white shadow-md">
                  <ClipboardCheck className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">পরীক্ষা পদ্ধতি</h3>
                  <div className="h-0.5 w-10 bg-primary mx-auto rounded mb-4" />
                  <p className="text-gray-700 leading-relaxed font-medium">
                    মাঝে মাঝে <span className="text-primary font-bold">ক্লাস টেস্ট</span> নেওয়া হয়
                  </p>
                </div>
                <div className="w-full space-y-3 mt-auto">
                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-3 flex items-start gap-3 text-left">
                    <BookOpen className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-gray-800">প্রতি শুক্রবার</p>
                      <p className="text-xs text-gray-500">বিষয়ভিত্তিক পরীক্ষা</p>
                    </div>
                  </div>
                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-3 flex items-start gap-3 text-left">
                    <Award className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-gray-800">মার্কস: ৫০ – ১০০</p>
                      <p className="text-xs text-gray-500">পূর্ণমান নম্বরে মূল্যায়ন</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Teachers */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <Card className="h-full border-2 border-transparent hover:border-primary transition-all duration-300 shadow-md hover:shadow-xl group">
              <CardContent className="p-8 flex flex-col items-center text-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">শিক্ষক মণ্ডলী</h3>
                  <div className="h-0.5 w-10 bg-primary mx-auto rounded mb-4" />
                  <p className="text-gray-700 leading-relaxed font-medium">
                    প্রতিটি শ্রেণির জন্য{" "}
                    <span className="text-primary font-bold">আলাদা অভিজ্ঞ শিক্ষক</span>
                  </p>
                </div>
                <div className="w-full bg-gray-50 rounded-xl p-4 mt-auto space-y-2">
                  <div className="flex items-center gap-2 justify-center text-gray-600">
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span className="text-sm font-medium">শ্রেণিভিত্তিক বিশেষজ্ঞ শিক্ষক</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center text-gray-600">
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span className="text-sm font-medium">সকলেই দক্ষ ও অভিজ্ঞ</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center text-gray-600">
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span className="text-sm font-medium">ব্যক্তিগত মনোযোগ নিশ্চিত</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Bottom summary banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-12 max-w-5xl mx-auto bg-primary rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="text-center md:text-left">
            <p className="text-white text-base md:text-2xl font-bold leading-snug">
              নিয়মিত মূল্যায়নে শিক্ষার্থীর সঠিক অগ্রগতি নিশ্চিত করা হয়
            </p>
            <p className="text-white/75 mt-1 text-sm md:text-base">
              প্রতিটি শিশুর সাফল্যই আমাদের লক্ষ্য
            </p>
          </div>
          <a
            href="tel:01737718231"
            data-testid="link-schedule-contact"
            className="shrink-0 bg-white text-primary font-bold text-base px-7 py-3 rounded-xl hover:bg-gray-100 transition-colors shadow-md"
          >
            যোগাযোগ করুন
          </a>
        </motion.div>
      </div>
    </section>
  );
}
