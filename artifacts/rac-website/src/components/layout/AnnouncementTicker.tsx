import React from "react";
import { Megaphone } from "lucide-react";

const notices = [
  "📢 ভর্তি চলছে — ১ম থেকে ৬ষ্ঠ শ্রেণি পর্যন্ত বিদ্যালয় ভিত্তিক একাডেমিক প্রস্তুতি",
  "🏆 ৫ম শ্রেণি বৃত্তি প্রস্তুতি বিশেষ ব্যাচ চালু",
  "📅 সপ্তাহে ৩ দিন নিয়মিত ক্লাস — প্রতি শুক্রবার বিষয়ভিত্তিক পরীক্ষা",
  "📞 যোগাযোগ করুন: 01737718231",
  "📍 মুলাটোল, আমতলা, হেকর গলি মোড়, ব্রিজ সংলগ্ন, রংপুর",
  "✅ ৬ জন অভিজ্ঞ শিক্ষক — প্রতিটি শ্রেণির জন্য আলাদা বিশেষজ্ঞ শিক্ষক",
  "🎯 ৩য় শ্রেণিতে ভর্তি প্রস্তুতি — এখনই যোগ দিন",
];

export function AnnouncementTicker() {
  const repeatedNotices = [...notices, ...notices];

  return (
    <div className="bg-primary text-white py-2 overflow-hidden relative z-40 border-b border-white/10">
      <div className="flex items-center gap-0">
        {/* Static label */}
        <div className="shrink-0 flex items-center gap-2 bg-white text-primary font-bold px-4 py-0.5 z-10 mr-4 h-7">
          <Megaphone className="w-4 h-4" />
          <span className="text-xs uppercase tracking-widest">বিজ্ঞপ্তি</span>
        </div>

        {/* Scrolling track */}
        <div className="flex overflow-hidden flex-1 relative">
          <div className="ticker-track flex gap-14 whitespace-nowrap">
            {repeatedNotices.map((notice, i) => (
              <span key={i} className="text-sm font-medium shrink-0">
                {notice}
                <span className="ml-14 text-white/40">◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
