import React from "react";
import { motion } from "framer-motion";
import { Users, Calendar, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">আমাদের সম্পর্কে</h2>
          <div className="h-1.5 w-24 bg-primary mx-auto md:mx-0 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-700 text-lg md:text-xl leading-relaxed"
          >
            <p>
              <strong className="text-gray-900 font-bold">রাশেদ একাডেমিক কেয়ার (R.A.C)</strong> রংপুরের মুলাটোলে অবস্থিত একটি স্বনামধন্য ও নির্ভরযোগ্য কোচিং সেন্টার। আমরা দীর্ঘ সময় ধরে শিক্ষার্থীদের সঠিক দিকনির্দেশনা ও মানসম্মত শিক্ষা প্রদান করে আসছি।
            </p>
            <p>
              আমাদের প্রতিষ্ঠানটি পরিচালিত হচ্ছে <strong className="text-primary font-bold">রাশেদুজ্জামান রাশেদ</strong> (কারমাইকেল কলেজ, রংপুর) এর সুযোগ্য নেতৃত্বে। তার নিরলস প্রচেষ্টা এবং একদল অভিজ্ঞ শিক্ষকমণ্ডলীর তত্ত্বাবধানে আমরা শিক্ষার্থীদের সর্বোচ্চ ফলাফল নিশ্চিতে অঙ্গীকারবদ্ধ।
            </p>
            <div className="bg-red-50 border-l-4 border-primary p-6 rounded-r-xl shadow-sm mt-8">
              <h3 className="text-primary font-bold text-xl mb-2">আমাদের লক্ষ্য</h3>
              <p className="text-gray-800 font-medium italic">
                "সঠিক জ্ঞান ও মানসম্পন্ন শিক্ষা প্রদানের মাধ্যমে শিক্ষার্থীদের সুন্দর ভবিষ্যৎ গড়ে তোলাই আমাদের একমাত্র লক্ষ্য।"
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <Card className="bg-white shadow-xl shadow-primary/5 border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-red-50 text-primary rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <h4 className="text-4xl font-bold text-gray-900 mb-2">৬+</h4>
                <p className="text-gray-600 font-semibold text-lg">অভিজ্ঞ শিক্ষক</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-xl shadow-primary/5 border border-gray-100 hover:-translate-y-2 transition-transform duration-300 sm:translate-y-8">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-red-50 text-primary rounded-2xl flex items-center justify-center mb-6">
                  <Award className="w-8 h-8" />
                </div>
                <h4 className="text-4xl font-bold text-gray-900 mb-2">১০০+</h4>
                <p className="text-gray-600 font-semibold text-lg">সফল শিক্ষার্থী</p>
              </CardContent>
            </Card>

            <Card className="bg-primary text-white shadow-xl shadow-primary/20 border-none hover:-translate-y-2 transition-transform duration-300 sm:col-span-2 mt-0 sm:mt-8">
              <CardContent className="p-8 flex flex-col sm:flex-row items-center text-center sm:text-left gap-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shrink-0">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-1">বহু বছরের অভিজ্ঞতা</h4>
                  <p className="text-red-100 font-medium text-lg">নিরবচ্ছিন্ন ও বিশ্বস্ত পাঠদান কার্যক্রম</p>
                </div>
              </CardContent>
            </Card>

          </motion.div>
        </div>
      </div>
    </section>
  );
}