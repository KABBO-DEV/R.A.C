import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, User, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">যোগাযোগ করুন</h2>
          <div className="h-1.5 w-24 bg-white/30 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-xl hover:bg-white/20 transition-colors">
              <CardContent className="p-8 flex items-start gap-6">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-primary shrink-0 shadow-lg">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-white/80 text-sm font-semibold uppercase tracking-wider mb-1">ফোন নম্বর</h3>
                  <a href="tel:01737718231" className="text-white text-2xl md:text-3xl font-bold hover:underline">
                    01737 718231
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-xl hover:bg-white/20 transition-colors">
              <CardContent className="p-8 flex items-start gap-6">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-primary shrink-0 shadow-lg">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-white/80 text-sm font-semibold uppercase tracking-wider mb-1">ঠিকানা</h3>
                  <p className="text-white text-lg md:text-xl font-medium leading-snug">
                    মুলাটোল, আমতলা, হেকর গলি মোড়<br/>
                    ব্রিজ সংলগ্ন, রংপুর, বাংলাদেশ
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-xl hover:bg-white/20 transition-colors">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shrink-0 shadow-sm">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white/80 text-xs font-semibold uppercase mb-1">পরিচালক</h3>
                    <p className="text-white font-bold">রাশেদুজ্জামান রাশেদ</p>
                    <p className="text-white/70 text-sm">কারমাইকেল কলেজ</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-xl hover:bg-white/20 transition-colors">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shrink-0 shadow-sm">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white/80 text-xs font-semibold uppercase mb-1">অফিস সময়</h3>
                    <p className="text-white font-bold">সকাল ৮টা - রাত ৮টা</p>
                    <p className="text-white/70 text-sm">সপ্তাহে ৭ দিন</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[400px] lg:h-auto min-h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 bg-white"
          >
            <iframe
              title="Google Maps location of Rashed Academic Care"
              src="https://maps.google.com/maps?q=Mulatol+Amtola+Rangpur+Bangladesh&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}