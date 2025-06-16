import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, X } from "lucide-react";

const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          form.current?.reset();
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <section
      className="w-full py-16 px-4 md:px-12 bg-gray-50 font-rubik"
      id="contact"
      dir="rtl"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        <div className="flex-1 space-y-4 md:pr-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            צרו איתנו קשר
          </h2>
          <p className="text-gray-700 text-lg mb-2">
            רוצים לשמוע עוד? יש לכם שאלות? מעוניינים לבדוק תאריכים פנויים?
            השאירו פרטים ונחזור אליכם בהקדם.
          </p>
          <div className="space-y-1">
            <p>
              <strong>טלפון:</strong>{" "}
              <a href="tel:0535428856" className="text-primary hover:underline">
                053-5428856
              </a>
            </p>
            <p>
              <strong>אימייל:</strong>{" "}
              <a
                href="mailto:speakup.phone@gmail.com"
                className="text-primary hover:underline"
              >
                speakup.phone@gmail.com
              </a>
            </p>
          </div>
          <div className="flex gap-6 mt-6 text-gray-600">
            <a
              href="https://www.tiktok.com/@speakup_phone"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
              aria-label="TikTok"
            >
              <i className="fa-brands fa-tiktok text-2xl"></i>
            </a>
            <a
              href="https://www.instagram.com/speakup_phone/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-600 transition"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram text-2xl"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61576313061188"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook text-2xl"></i>
            </a>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white rounded-2xl shadow-2xl p-8 w-full md:w-1/2 space-y-4 border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            השאירו פרטים
          </h3>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-bold text-right mb-1"
            >
              שם מלא
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="השם שלך"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-bold text-right mb-1"
            >
              אימייל
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="האימייל שלך"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-bold text-right mb-1"
            >
              טלפון
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="מספר טלפון"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
            />
          </div>
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-bold text-right mb-1"
            >
              תאריך האירוע (אם ידוע)
            </label>
            <input
              id="date"
              type="text"
              name="date"
              placeholder="תאריך האירוע (אם ידוע)"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-bold text-right mb-1"
            >
              איך נוכל לעזור לך?
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="איך נוכל לעזור לך?"
              rows={4}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white rounded-lg py-3 flex items-center justify-center gap-2 hover:bg-primary transition font-bold text-lg"
          >
            <Send className="w-5 h-5" />
            שליחה
          </button>

          {/* הודעה אחרי שליחה */}
          {status === "success" && (
            <div className="mt-4 px-4 py-3 bg-green-100 text-green-800 rounded-md relative flex items-center justify-between">
              ההודעה נשלחה בהצלחה!
              <button
                onClick={() => setStatus(null)}
                className="text-green-500 hover:text-green-800"
              >
                <X size={18} />
              </button>
            </div>
          )}
          {status === "error" && (
            <div className="mt-4 px-4 py-3 bg-red-100 text-red-800 rounded-md relative flex items-center justify-between">
              שגיאה בשליחה. נסה שוב.
              <button
                onClick={() => setStatus(null)}
                className="text-red-500 hover:text-red-800"
              >
                <X size={18} />
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
