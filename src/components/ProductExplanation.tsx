import React from "react";
import { Check, Heart, Star } from "lucide-react";

const basicFeatures = [
  "תא טלפון מעוצב ומוכן לפעולה",
  "זמינות במשך 3 שעות באזור קבלת הפנים",
  "שני מפעילים מלווים את החוויה לאורך האירוע",
  "הקלטות אודיו באיכות גבוהה",
  "צילום וידאו של כל מי שמשאיר ברכה",
  "סרטון מסכם ממוקד – כולל כל הברכות, עם פתיח ומוזיקה",
];

const premiumFeatures = [
  'הרחבת זמן פעילות + התא עובר גם לתוך האולם (עד 5 שעות סה"כ)',
  "מפעיל ברחבה - מסתובב עם הטלפון בין האורחים ברחבה",
  "שלט אישי עם שם הזוג",
];

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const ProductExplanation: React.FC = () => (
  <section
    className="py-16 bg-pink-50 text-right"
    dir="rtl"
    id="order"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-2">
        בחרו את החבילה המושלמת עבורכם
      </h2>
      <p className="text-center text-gray-600 mb-10 text-lg">
        חבילות מותאמות שיהפכו את האירוע שלכם לבלתי נשכח
      </p>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {/* Basic Card */}
        <div className="flex-1 bg-white rounded-2xl border-2 border-blue-400 shadow-md p-8 md:p-10 flex flex-col items-center text-center md:text-right md:items-end transition-all">
          <div className="flex items-center gap-2 mb-2 self-start flex-row-reverse">
            <Heart className="w-7 h-7 text-blue-400" />
            <span className="text-2xl font-bold">חבילה בסיסית</span>
          </div>
          <div className="text-blue-500 mb-2 flex items-center gap-2 self-start flex-row-reverse">
            חוויה מרגשת, איכותית ותכל'ס – בדיוק כמו שצריך.
          </div>
          <div className="text-4xl font-bold mb-4 flex items-center gap-2 self-start flex-row-reverse">
            ₪ 1,500
          </div>
          <ul className="text-right space-y-2 mb-6 w-full">
            {basicFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-lg">
                <Check className="w-5 h-5 text-blue-400" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <button
            className="mt-auto bg-black text-white rounded-lg px-8 py-3 font-bold hover:bg-blue-500 transition"
            onClick={() => scrollToSection("contact")}
          >
            להזמנה ופרטים
          </button>
        </div>

        <div className="flex-1 bg-white rounded-2xl border-2 border-pink-400 shadow-md p-8 md:p-10 flex flex-col items-center text-center md:text-right md:items-end transition-all">
          <div className="flex items-center gap-2 mb-2 self-start flex-row-reverse">
            <Star className="w-7 h-7 text-pink-400" />
            <span className="text-2xl font-bold ">חבילת פרימיום</span>
          </div>
          <div className="text-pink-500 mb-2 self-start flex-row-reverse">
            כוללת את כל מה שיש בחבילה הבסיסית, פלוס:
          </div>
          <div className="text-4xl font-bold mb-4 self-start flex-row-reverse">
            ₪ 2,000
          </div>
          <ul className="text-right space-y-2 mb-6 w-full">
            {premiumFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-lg">
                <Check className="w-5 h-5 text-pink-400" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <button
            className="mt-auto bg-black text-white rounded-lg px-8 py-3 font-bold hover:bg-pink-500 transition"
            onClick={() => scrollToSection("contact")}
          >
            להזמנה ופרטים
          </button>
        </div>
      </div>
    </div>
  </section>
);


export default ProductExplanation;
