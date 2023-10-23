"use client";
import { motion } from "framer-motion";

interface IFadeInMotionProps {
  children: React.ReactNode;
  delay?: number;
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const FadeInMotion = ({ children, delay = 0 }: IFadeInMotionProps) => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={item}
      transition={{
        delay: delay,
        easings: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};
export default FadeInMotion;
