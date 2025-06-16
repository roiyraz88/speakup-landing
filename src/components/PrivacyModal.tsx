import React from "react";

const privacyText = [
  "הפרטיות שלך חשובה לנו. להלן עקרונות מדיניות הפרטיות של האתר:",
  '1. בעת יצירת קשר באמצעות טופס באתר, נאספים פרטים כגון שם, טלפון ודוא"ל לצורך טיפול בפנייה בלבד.',
  "2. המידע לא יועבר לצדדים שלישיים אלא אם כן נידרש לכך על פי חוק.",
  '3. ייתכן והשימוש באתר כולל קובצי "עוגיות" (Cookies) לצרכי אבטחה, סטטיסטיקה ושיפור חווית המשתמש.',
  "4. ניתן לבקש לעיין, לתקן או למחוק את פרטי השימוש בכל עת באמצעות פנייה אלינו.",
  "5. האתר מאובטח באמצעים מקובלים, אך השימוש בו נעשה באחריות המשתמש בלבד.",
  "6. פרטיך לא יועברו לשום גורם אחר ללא הסכמתך למדיניות זו.",
  "7. מידע נוסף – ניתן ליצור קשר דרך טופס יצירת הקשר באתר.",
];

const PrivacyModal: React.FC<{ open: boolean; onClose: () => void }> = ({
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
          מדיניות פרטיות
        </h2>
        <div className="space-y-2 text-gray-800 text-base max-h-[60vh] overflow-y-auto">
          {privacyText.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;
