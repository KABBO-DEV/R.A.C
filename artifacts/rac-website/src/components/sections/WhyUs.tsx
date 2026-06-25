import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, HeartHandshake, Star, Target, CheckSquare, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function WhyUs() {
  const features = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "অভিজ্ঞ শিক্ষক মণ্ডলী",
      description: "৬ জন অভিজ্ঞ ও দক্ষ শিক্ষকের মাধ্যমে প্রতিটি ক্লাস অত্যন্ত যত্ন সহকারে নেওয়া হয়।"
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "শিক্ষার্থীবান্ধব পরিবেশ",
      description: "শিক্ষার্থীদের জন্য একটি সুন্দর, নিরাপদ ও আনন্দদায়ক শেখার পরিবেশ নিশ্চিত করা হয়।"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "একাডেমিক উৎকর্ষতা",
      description: "স্কুলের সিলেবাস শতভাগ কভার করা এবং বোর্ড ও বৃত্তি পরীক্ষার জন্য বিশেষ প্রস্তুতি।"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "ব্যক্তিগত মনোযোগ",
      description: "প্রতিটি শিক্ষার্থীর মেধা ও দুর্বলতার দিকে বিশেষ নজর দিয়ে পাঠদান করা হয়।"
    },
    {
      icon: <CheckSquare className="w-8 h-8" />,
      title: "নিয়মিত মূল্যায়ন",
      description: "সাপ্তাহিক ও মাসিক পরীক্ষার মাধ্যমে শিক্ষার্থীদের অগ্রগতি যাচাই করা হয়।"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "আধুনিক পাঠদান পদ্ধতি",
      description: "সহজ ও আনন্দদায়ক উপায়ে কঠিন বিষয়গুলো বোঝানোর জন্য যুগোপযোগী পদ্ধতি।"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="why-us" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">কেন আমাদের বেছে নেবেন?</h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            আমাদের দীর্ঘদিনের অভিজ্ঞতা এবং আন্তরিক প্রচেষ্টাই আমাদের অনন্য করে তুলেছে।
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border border-gray-100 bg-white hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-red-50 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary group-hover:text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}