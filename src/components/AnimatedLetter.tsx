import { motion } from 'framer-motion';

interface AnimatedLetterProps {
  letter: string;
  progress: number;
  index: number;
  totalChars: number;
}

export function AnimatedLetter({
  letter,
  progress,
  index,
  totalChars,
}: AnimatedLetterProps) {
  const charProgress = index / totalChars;
  const rangeStart = charProgress - 0.1;
  const rangeEnd = charProgress + 0.05;

  let opacity = 0.2;
  if (progress >= rangeStart && progress <= rangeEnd) {
    opacity = 0.2 + ((progress - rangeStart) / (rangeEnd - rangeStart)) * 0.8;
  } else if (progress > rangeEnd) {
    opacity = 1;
  }

  return (
    <motion.span
      animate={{ opacity }}
      transition={{ duration: 0.1 }}
      style={{ color: '#DEDBC8' }}
    >
      {letter}
    </motion.span>
  );
}