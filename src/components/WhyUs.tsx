import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "./swiper.css";
import { Star } from "lucide-react";

const reviews = [
  {
    text: '"החלטה מדהימה שקיבלנו!... ממליצים בחום!"',
    name: "אור ויעל",
    date: "07.05.2025",
    rating: 5,
  },
  {
    text: '"החוויה הכי מיוחדת שהייתה לנו באירוע. הברכות היו מרגשות ומצחיקות!"',
    name: "דנה ואמיר",
    date: "02.04.2025",
    rating: 5,
  },
  {
    text: '"לא הפסקנו לראות את הסרטון – מזכרת מושלמת!"',
    name: "שיר ומתן",
    date: "12.03.2025",
    rating: 5,
  },
];


const WhyUs: React.FC = () => (
  <section id="why" className="py-16 bg-gray-50" dir="rtl">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-2">
        מה אומרים עלינו?
      </h2>
      <p className="text-center text-gray-600 mb-10 text-lg">
        אל תקשיבו לנו – תקשיבו להם
      </p>
      <div className="max-w-4xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          slidesPerView={1}
          className="pb-8"
          dir="rtl"
        >
          {reviews.map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 flex flex-col items-center text-center mx-2 min-h-[300px]">
                <div className="flex justify-center mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-7 h-7 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <div className="text-xl text-gray-800 mb-6">{review.text}</div>
                <div className="font-bold text-gray-900">{review.name}</div>
                <div className="text-gray-500 text-sm">{review.date}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  </section>
);


export default WhyUs;
