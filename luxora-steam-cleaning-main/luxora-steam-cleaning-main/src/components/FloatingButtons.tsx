import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { WhatsAppIcon } from "./Icons";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingButtons() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            href="https://wa.me/447543958332?text=Hi%20Luxora%20Steam%20Cleaning!%20I%27m%20interested%20in%20your%20cleaning%20services.%20Could%20you%20please%20provide%20me%20with%20a%20quote%3F%20Thank%20you!"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
            style={{ backgroundColor: "#25D366" }}
          >
            <WhatsAppIcon className="w-7 h-7 text-white" />
          </motion.a>
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
}
