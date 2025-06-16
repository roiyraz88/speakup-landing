import HeroSection from "./components/HeroSection";
import ProductExplanation from "./components/ProductExplanation";
import HowItWorks from "./components/HowItWorks";
import Gallery from "./components/Gallery";
import WhyUs from "./components/WhyUs";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";
import FAQSection from './components/FAQSection';
import ContactUs from "./components/ContactUs";
import Footer from './components/Footer';
import { motion } from "framer-motion";
import { easeInOut } from "framer-motion";


const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeInOut,
    }
  }
};

function App() {
  return (
    <div className="font-rubik bg-soft min-h-screen scroll-smooth" dir="rtl">
      <main className="w-full space-y-16">
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <HeroSection />
        </motion.div>
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <HowItWorks />
        </motion.div>
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Gallery />
        </motion.div>
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <ProductExplanation />
        </motion.div>
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <WhyUs />
        </motion.div>
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <FAQSection />
        </motion.div>
        <FloatingWhatsAppButton />
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <ContactUs />
        </motion.div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
