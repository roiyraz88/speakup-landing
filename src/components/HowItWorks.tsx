import React from "react";
import { motion } from "framer-motion";
import { Phone, Camera, ListVideo } from "lucide-react";
import { useIsMobile } from "../hooks/useIsMobile"; // נתיב בהתאם לפרויקט שלך

const steps = [
  {
    number: 3,
    title: "ואתם מקבלים מזכרת לנצח",
    icon: <ListVideo className="w-7 h-7" />,
    desc: "אחרי האירוע, אנחנו עורכים את כל ההודעות לסרטון אחד מרגש שישאר איתכם לתמיד.",
  },
  {
    number: 2,
    title: "כל רגע מתועד בווידאו",
    icon: <Camera className="w-7 h-7" />,
    desc: "המערכת שלנו מצלמת את הברכה באיכות גבוהה — גם קול, גם וידאו.",
  },
  {
    number: 1,
    title: "האורחים משאירים הודעה בטלפון",
    icon: <Phone className="w-7 h-7" />,
    desc: "בתוך תא טלפון לונדוני לבן ומעוצב, מחכה להם טלפון וינטג'. הם מרימים את השפופרת ומקליטים ברכה אישית – מפתיעה, מרגשת או מצחיקה.",
  },
];

const HowItWorks: React.FC = () => {
  const isMobile = useIsMobile();
  const orderedSteps = isMobile
    ? [...steps].sort((a, b) => a.number - b.number) // למסך קטן
    : steps; // למסך גדול נשאר 3-2-1

  return (
    <section id="how" className="py-16 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-primary mb-4">
          איך זה עובד?
        </h2>
        <p className="text-xl text-center text-gray-700 mb-12">
          תהליך קליל ומרגש שיהפוך את האורחים שלכם לחלק בלתי נשכח מהזיכרון.
        </p>
        <div className="flex flex-col md:flex-row-reverse gap-8 justify-center items-center md:items-stretch">
          {orderedSteps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col relative min-h-[280px] w-full md:w-1/3 max-w-sm"
            >
              <div className="text-5xl font-bold text-gray-800 mb-2">
                {step.number}
              </div>
              <div className="text-xl font-bold text-gray-900 mb-2">
                {step.title}
              </div>
              <div className="text-gray-700 text-base leading-relaxed">
                {step.desc}
              </div>
              <div className="absolute top-6 left-6 bg-gray-100 rounded-full p-2">
                {step.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
