import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { WordsPullUp } from '../components/WordsPullUp';

export function Hero() {
  const descRef = useRef(null);
  const buttonRef = useRef(null);
  const descInView = useInView(descRef, { once: true });
  const buttonInView = useInView(buttonRef, { once: true });

  return (
    <section className="relative h-screen bg-black p-4 md:p-6 flex items-center justify-center">
      <div className="w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        />

        <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        <nav className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10 bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 md:py-3">
          <div className="flex gap-3 sm:gap-6 md:gap-12 lg:gap-14 text-[10px] sm:text-xs md:text-sm">
            {['Our story', 'Collective', 'Workshops', 'Programs', 'Inquiries'].map(
              (item, index) => (
                <a
                  key={index}
                  href="#"
                  style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                  className="hover:text-[#E1E0CC] transition-colors duration-300 whitespace-nowrap"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8">
          <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8">
            <div className="col-span-12 lg:col-span-8">
              <WordsPullUp
                text="Prisma"
                className="text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw] font-medium leading-[0.85] tracking-[-0.07em]"
                showAsterisk={true}
              />
            </div>

            <div className="col-span-12 lg:col-span-4 flex flex-col justify-end gap-4 md:gap-6">
              <motion.p
                ref={descRef}
                initial={{ y: 20, opacity: 0 }}
                animate={descInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ color: '#E1E0CC' }}
                className="text-primary/70 text-xs sm:text-sm md:text-base leading-[1.2]"
              >
                Prisma is a worldwide network of visual artists, filmmakers and storytellers
                bound not by place, status or labels but by passion and hunger to unlock
                potential through our unique perspectives.
              </motion.p>

              <motion.button
                ref={buttonRef}
                initial={{ y: 20, opacity: 0 }}
                animate={buttonInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{
                  delay: 0.7,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex items-center gap-1 hover:gap-3 transition-all duration-300 bg-primary rounded-full px-4 py-2 md:px-6 md:py-3 w-fit"
              >
                <span className="text-black font-medium text-sm sm:text-base">Join the lab</span>
                <div className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight size={18} className="text-primary" />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}