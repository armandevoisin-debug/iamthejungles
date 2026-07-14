import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { WordsPullUpMultiStyle } from '../components/WordsPullUpMultiStyle';

interface FeatureCard {
  id: number;
  title: string;
  items: string[];
  icon?: string;
  isVideo?: boolean;
  videoUrl?: string;
}

const features: FeatureCard[] = [
  {
    id: 1,
    title: 'Your creative canvas.',
    items: [],
    isVideo: true,
    videoUrl:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4',
  },
  {
    id: 2,
    title: 'Project Storyboard.',
    items: [
      'Organize visual assets',
      'Create mood boards',
      'Annotate and critique',
      'Share with team members',
    ],
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85',
  },
  {
    id: 3,
    title: 'Smart Critiques.',
    items: [
      'AI-powered analysis',
      'Creative feedback notes',
      'Tool integration layer',
    ],
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85',
  },
  {
    id: 4,
    title: 'Immersion Capsule.',
    items: [
      'Silence distracting notifications',
      'Ambient soundscape control',
      'Schedule sync with calendar',
    ],
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85',
  },
];

function FeatureCardComponent({ feature, index }: { feature: FeatureCard; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
      transition={{
        delay: index * 0.15,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative bg-[#212121] rounded-lg overflow-hidden h-full min-h-[300px] md:min-h-[350px] lg:h-[480px]"
    >
      {feature.isVideo ? (
        <>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src={feature.videoUrl}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
            <p style={{ color: '#E1E0CC' }} className="text-sm md:text-base font-medium">
              {feature.title}
            </p>
          </div>
        </>
      ) : (
        <div className="p-6 md:p-8 h-full flex flex-col justify-between">
          <div>
            {feature.icon && (
              <div className="mb-6">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover"
                />
              </div>
            )}
            <h3 className="text-lg md:text-xl font-medium mb-1">
              <span style={{ color: '#E1E0CC' }}>{feature.title.split('.')[0]}.</span>
              <span className="text-gray-500 text-sm md:text-base"> {feature.id.toString().padStart(2, '0')}</span>
            </h3>
            <div className="mt-6 space-y-3">
              {feature.items.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400 text-xs md:text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 text-primary text-sm hover:gap-3 transition-all duration-300 cursor-pointer mt-6">
            <span>Learn more</span>
            <ArrowRight size={14} style={{ transform: 'rotate(-45deg)' }} />
          </div>
        </div>
      )}
    </motion.div>
  );
}

export function Features() {
  return (
    <section className="min-h-screen bg-black px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32 relative">
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12 md:mb-16 lg:mb-20 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mb-2">
            <WordsPullUpMultiStyle
              segments={[
                {
                  text: 'Studio-grade workflows for visionary creators.',
                  className: 'text-primary',
                },
              ]}
              containerClassName="justify-center"
            />
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm md:text-base">
            Built for pure vision. Powered by art.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1">
          {features.map((feature, index) => (
            <FeatureCardComponent key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}