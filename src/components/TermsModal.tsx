import React from "react";

const termsText = [
  "ברוכים הבאים לאתר SPEAK UP – תא טלפון מעוצב לאירועים וחתונות.",
  "השימוש באתר זה כפוף לתנאים הבאים. אנא קרא בעיון:",
  "1. המידע באתר נועד לצרכי מידע כללי בלבד ואינו מהווה ייעוץ מקצועי או התחייבות מצד החברה.",
  "2. כל שימוש במידע, קבצים, תמונות או כל תוכן אחר שבאתר הוא באחריות המשתמש בלבד.",
  "3. אין להעתיק, לשכפל, לטפל, להפיץ או לפרסם תוכן מהאתר ללא אישור מפורש ובכתב מ-SPEAK UP.",
  "4. החברה שומרת לעצמה את הזכות לעדכן את תנאי השימוש בכל עת וללא התראה מראש.",
  "5. כל פנייה לשירותים או שירותים תחייב כתיבה אלינו לאחר קריאת סופי התנאים והסכמה מפורשת על הסכם התקשרות אם נדרש.",
  "6. בשימוש באתר הנך מאשר כי קראת, הבנת והסכמת לתנאים אלו.",
  "7. לכל שאלה ניתן לפנות אלינו בטופס יצירת קשר או בוואטסאפ.",
];

const TermsModal: React.FC<{ open: boolean; onClose: () => void }> = ({
  open,
  onClose,
}) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-2 p-6 relative text-right">
        <button
          className="absolute left-4 top-4 text-gray-400 hover:text-gray-700 text-2xl"
          onClick={onClose}
          aria-label="סגור"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center border-b pb-2">
          תנאי שימוש
        </h2>
        <div className="space-y-2 text-gray-800 text-base max-h-[60vh] overflow-y-auto">
          {termsText.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsModal;
