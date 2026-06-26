import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function Message() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">ওয়েবসাইট ডিজাইনার ও ডেভেলপারের কথা</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
            {/* Big decorative quote mark */}
            <div className="absolute -top-5 left-8 bg-primary rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
              <Quote className="w-6 h-6 text-white fill-white" />
            </div>

            <div className="mt-4 space-y-5 text-gray-700 text-lg md:text-xl leading-relaxed">
              <p>
                আমি <span className="font-bold text-primary">কাব্য</span>। রাশেদ একাডেমিক কেয়ার (R.A.C)-এর সাথে আমার পরিচয় অনেকদিনের।
                এই কোচিং সেন্টারটি শুধু একটি পড়ার জায়গা নয় — এটি একটি পরিবার।
              </p>
              <p>
                এখানে প্রতিটি শিক্ষার্থীকে আলাদাভাবে মনোযোগ দেওয়া হয়, তাদের দুর্বলতাগুলো চিহ্নিত করে সঠিক পথ দেখানো হয়।
                স্যারের আন্তরিক শিক্ষাদান পদ্ধতি এবং বাচ্চাদের প্রতি ভালোবাসা সত্যিই অতুলনীয়।
              </p>
              <p>
                আমি বিশ্বাস করি, <span className="font-semibold text-gray-900">R.A.C-এ ভর্তি হওয়া আপনার সন্তানের জীবনের একটি সেরা সিদ্ধান্ত হবে।</span>
                আজকের সঠিক শিক্ষাই আগামী দিনের সাফল্যের ভিত্তি।
              </p>
            </div>

            {/* Author */}
            <div className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold shadow">
                ক
              </div>
              <div>
                <p className="font-bold text-gray-900 text-lg">কাব্য</p>
                <p className="text-sm text-gray-500">শুভাকাঙ্ক্ষী, রাশেদ একাডেমিক কেয়ার</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
