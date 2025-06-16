import React, { useState } from "react";
import { Phone } from "lucide-react";
import TermsModal from "./TermsModal";
import PrivacyModal from "./PrivacyModal";

const Footer: React.FC = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  

  return (
    <footer
      className="bg-[#151a22] text-white pt-8 pb-4 px-2 md:px-0"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        {/* לוגו + תיאור */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 text-2xl font-bold mb-1">
            <Phone className="w-6 h-6" />
            <span>SPEAK UP</span>
          </div>
          <div className="text-lg text-gray-300">
            תא טלפון מעוצב לאירועים וחתונות
          </div>
        </div>

        {/* ניווט */}
        <nav className="flex flex-wrap justify-center md:justify-end gap-6 text-lg font-medium mt-4 md:mt-0">
          <button
            onClick={() => scrollToSection("hero")}
            className="hover:underline bg-transparent text-inherit border-none cursor-pointer"
          >
            דף הבית
          </button>
          <button
            onClick={() => scrollToSection("how")}
            className="hover:underline bg-transparent text-inherit border-none cursor-pointer"
          >
            איך זה עובד
          </button>
          <button
            onClick={() => scrollToSection("order")}
            className="hover:underline bg-transparent text-inherit border-none cursor-pointer"
          >
            הזמנה
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:underline bg-transparent text-inherit border-none cursor-pointer"
          >
            צור קשר
          </button>
          <button
            onClick={() => setShowTerms(true)}
            className="hover:underline bg-transparent text-inherit border-none cursor-pointer"
          >
            תנאי שימוש
          </button>
          <button
            onClick={() => setShowPrivacy(true)}
            className="hover:underline bg-transparent text-inherit border-none cursor-pointer"
          >
            מדיניות פרטיות
          </button>
        </nav>
      </div>

      {/* קו מפריד */}
      <hr className="my-6 border-gray-700" />

      {/* טקסט תחתון */}
      <div className="max-w-7xl mx-auto text-center text-gray-400 space-y-2 text-sm">
        <div>© 2025 SPEAK UP. כל הזכויות שמורות.</div>
        <div>
          <button
            onClick={() => setShowTerms(true)}
            className="hover:underline bg-transparent text-inherit border-none cursor-pointer p-0 m-0"
          >
            תנאי שימוש
          </button>
          {" | "}
          <button
            onClick={() => setShowPrivacy(true)}
            className="hover:underline bg-transparent text-inherit border-none cursor-pointer p-0 m-0"
          >
            מדיניות פרטיות
          </button>
        </div>
        <div>
          האתר פועל בהתאם להוראות הדין בישראל. המידע באתר אינו מהווה ייעוץ משפטי
          או תחליף לייעוץ מקצועי. השימוש באתר כפוף לתנאי השימוש ומדיניות
          הפרטיות.
        </div>
      </div>

      {/* מודלים */}
      <TermsModal open={showTerms} onClose={() => setShowTerms(false)} />
      <PrivacyModal open={showPrivacy} onClose={() => setShowPrivacy(false)} />
    </footer>
  );
};

export default Footer;
