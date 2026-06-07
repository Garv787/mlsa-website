import { motion } from "framer-motion";
import { easeConfident } from "../utils/animations";

const ScrollIndicator = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center mb-6 py-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5, ease: easeConfident }}
    >
      <span className="text-[10px] sm:text-xs font-medium text-white/50 uppercase tracking-[0.2em] mb-3">
        SCROLL
      </span>
      <div className="w-6 h-9 rounded-full border-2 border-white/30 flex justify-center pt-2">
        <motion.div
          className="w-1.5 h-1.5 rounded-full bg-white/70"
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;
