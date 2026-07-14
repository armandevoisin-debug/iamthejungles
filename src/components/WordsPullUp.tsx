import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
}

export function WordsPullUp({ text, className = '', showAsterisk = false }: WordsPullUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(' ');

  return (
    <div ref={ref} className={`flex flex-wrap justify-center ${className}`}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{
            delay: index * 0.08,
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mx-1 relative"
        >
          {word}
          {showAsterisk && index === words.length - 1 && word.endsWith('a') && (
            <sup className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">*</sup>
          )}
        </motion.span>
      ))}
    </div>
  );
}