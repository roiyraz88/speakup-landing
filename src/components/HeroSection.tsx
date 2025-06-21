import React from "react";

const HeroSection: React.FC = () => (
  <section
    id="hero"
    className="relative h-screen flex flex-col justify-center items-center bg-cover bg-center"
    style={{ backgroundImage: "url('/hero-image.png')" }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/30 z-0" />
    <div className="relative z-10 flex flex-col items-center text-center px-4">
      <span className="text-white text-lg mb-2 tracking-widest opacity-80">
        ספיק-אפ
      </span>
      <h1 className="text-3xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg leading-tight">
        SPEAK-UP
      </h1>
      <p className="text-lg md:text-2xl mb-8 text-white font-medium opacity-90">
        כמו ברחובות לונדון – רק באירוע שלכם. תא הטלפון שיהפוך כל רגע לקסם.
      </p>
      <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto justify-center">
        <a
          href="https://wa.me/972527345641"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white rounded-full px-8 py-4 text-lg font-bold shadow-lg hover:bg-primary transition"
        >
          להזמנת תא הטלפון
        </a>
        <button
          onClick={() =>
            document
              .getElementById("how")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="border-2 border-white text-white rounded-full px-8 py-4 text-lg font-bold bg-transparent hover:bg-white hover:text-black transition"
        >
          למידע נוסף
        </button>
      </div>
    </div>
  </section>
);

export default HeroSection;
