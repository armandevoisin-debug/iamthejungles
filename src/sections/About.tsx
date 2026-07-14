import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { WordsPullUpMultiStyle } from '../components/WordsPullUpMultiStyle';
import { AnimatedLetter } from '../components/AnimatedLetter';

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const bodyText =
    'Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals.';

  const bodyTextChars = bodyText.replace(/\s/g, '').length;
  const scrollProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="bg-black py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-8 md:mb-12">
          <p className="text-primary text-[10px] sm:text-xs uppercase tracking-wider">Visual arts</p>
        </div>

        <div className="flex justify-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9]">
            <WordsPullUpMultiStyle
              segments={[
                { text: 'I am Marcus Chen,', className: 'font-normal' },
                { text: 'a self-taught director.', className: 'italic font-serif' },
                {
                  text: 'I have skills in color grading, visual effects, and narrative design.',
                  className: 'font-normal',
                },
              ]}
              containerClassName="justify-center"
            />
          </h2>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs sm:text-sm md:text-base leading-relaxed">
            {bodyText.split('').map((char, index) => {
              const currentProgress = (scrollProgress.get?.() as number) || 0;
              return (
                <AnimatedLetter
                  key={index}
                  letter={char}
                  progress={currentProgress}
                  index={index}
                  totalChars={bodyTextChars}
                />
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}