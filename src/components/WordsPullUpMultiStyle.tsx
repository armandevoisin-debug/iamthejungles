import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface TextSegment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: TextSegment[];
  containerClassName?: string;
}

export function WordsPullUpMultiStyle({
  segments,
  containerClassName = '',
}: WordsPullUpMultiStyleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const wordSegments = segments.flatMap((segment) => {
    const words = segment.text.split(' ');
    return words.map((word) => ({
      word,
      className: segment.className || '',
    }));
  });

  return (
    <div
      ref={ref}
      className={`inline-flex flex-wrap justify-center ${containerClassName}`}
    >
      {wordSegments.map((item, index) => (
        <motion.span
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{
            delay: index * 0.08,
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`mx-1 ${item.className}`}
        >
          {item.word}
        </motion.span>
      ))}
    </div>
  );
}