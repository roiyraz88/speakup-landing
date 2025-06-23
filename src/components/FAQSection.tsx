import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "כמה זמן מראש צריך להזמין את שירות תא הטלפון?",
    a: "הכי טוב להזמין חודשיים מראש (בעיקר בעונת החתונות), אבל תמיד שווה לבדוק, לפעמים נתפנה גם ברגע האחרון 😉",
  },
  {
    q: "כמה זמן לוקח לקבל את הסרטון המוכן?",
    a: "עד 14 ימי עסקים מרגע האירוע. אנחנו עובדים על זה באהבה ודואגים שתצא לכם מזכרת מושלמת 🎬✨",
  },
  {
    q: "האם תא הטלפון דורש חיבור לחשמל?",
    a: "ממש לא 🙂 התא שלנו עצמאי לחלוטין ומוכן לפעולה בכל מקום",
  },
  {
    q: "כמה מקום נדרש עבור התא?",
    a: 'כ-2 מ"ר בלבד, התא מעוצב בצורה קומפקטית ומתאים גם לחללים קטנים.',
  },
  {
    q: "האם מגיע צוות מטעמכם לאירוע?",
    a: " ברור! שני אנשי צוות מלווים את התא ודואגים שהכול יזרום חלק ועם חיוך 😊",
  },
  {
    q: "האם מגיע צוות מטעמכם לאירוע?",
    a: " ברור! שני אנשי צוות מלווים את התא ודואגים שהכול יזרום חלק ועם חיוך 😊",
  },
];

const FAQSection: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      className="w-full py-16 px-2 md:px-0"
      dir="rtl"
      style={{
        background: "linear-gradient(to bottom, #e3ecf7 0%, #fff 100%)",
      }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-2 text-gray-900">
          שאלות נפוצות
        </h2>
        <p className="text-center text-gray-600 mb-10 text-lg">
          כל מה שתרצו לדעת על שירות תא הטלפון המעוצב לחתונות
        </p>
        <ul className="space-y-2">
          {faqs.map((item, idx) => (
            <li
              key={idx}
              className="bg-white/70 rounded-xl shadow-sm border border-gray-200"
            >
              <button
                className={`w-full flex items-center justify-between px-6 py-5 text-right transition-all duration-300 ease-in-out rounded-xl hover:bg-gray-100 hover:shadow-sm ${
                  open === idx ? "bg-gray-100" : ""
                }`}
                aria-expanded={open === idx}
                aria-controls={`faq-content-${idx}`}
                onClick={() => setOpen(open === idx ? null : idx)}
              >
                <span className="text-lg font-semibold text-gray-900">
                  {item.q}
                </span>
                <span className="ml-2 flex-shrink-0">
                  {open === idx ? (
                    <Minus className="w-6 h-6 text-gray-400" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-400" />
                  )}
                </span>
              </button>

              <div
                id={`faq-content-${idx}`}
                className={`px-6 pb-4 text-gray-700 text-base transition-all duration-300 ease-in-out ${
                  open === idx
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
                aria-hidden={open !== idx}
              >
                {item.a}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQSection;
