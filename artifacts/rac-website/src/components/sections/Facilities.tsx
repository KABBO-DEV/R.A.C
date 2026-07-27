import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ShieldCheck,
  Armchair,
  BookMarked,
  BrainCircuit,
  UsersRound,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Facilities() {
  const facilitiesList = [
    { title: "মানসম্পন্ন পাঠদান", icon: <BookMarked className="w-6 h-6" /> },
    { title: "আরামদায়ক শ্রেণিকক্ষ", icon: <Armchair className="w-6 h-6" /> },
    { title: "একাডেমিক গাইডেন্স", icon: <BrainCircuit className="w-6 h-6" /> },
    {
      title: "পরীক্ষা প্রস্তুতি সহায়তা",
      icon: <CheckCircle2 className="w-6 h-6" />,
    },
    {
      title: "বন্ধুত্বপূর্ণ শিক্ষা পরিবেশ",
      icon: <UsersRound className="w-6 h-6" />,
    },
    { title: "নিরাপদ ও সুরক্ষিত", icon: <ShieldCheck className="w-6 h-6" /> },
  ];

  return (
    <section id="facilities" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              আমাদের সুবিধাসমূহ
            </h2>
            <div className="h-1.5 w-24 bg-primary mx-auto lg:mx-0 rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              শিক্ষার্থীদের শারীরিক ও মানসিক বিকাশের জন্য একটি উপযুক্ত পরিবেশ
              প্রয়োজন। আমরা সেই পরিবেশ নিশ্চিত করতে বদ্ধপরিকর।
            </p>
            <div className="hidden lg:flex relative w-full aspect-square rounded-3xl overflow-hidden border-4 border-primary/20 shadow-xl flex-col items-center justify-center bg-gradient-to-br from-[#C0000C] to-[#8B0000]">
              <img
                src={`${import.meta.env.BASE_URL}rac-logo.jpeg`}
                className="w-3/4 h-3/4 object-contain rounded-2xl shadow-2xl"
              />
              <p className="mt-4 text-white font-bold text-lg text-center px-4">
                রাশেদ একাডেমিক কেয়ার
              </p>
            </div>
          </motion.div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
            {facilitiesList.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group border-none bg-gray-50 hover:bg-white shadow-sm hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 shadow-sm shrink-0">
                      {facility.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors">
                      {facility.title}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
