import { motion } from "framer-motion";

const FadeIn = ({
  delay,
  children,
}: {
  delay?: number;
  children: JSX.Element;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      {children}
    </motion.div>
  );
};
export default FadeIn;
