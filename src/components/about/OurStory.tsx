import React from 'react';
import { motion } from 'motion/react';
import { STORY_TIMELINE } from '../../data/aboutData';

export const OurStory: React.FC = () => {
  return (
    <section
      id="our-story"
      className="py-20 sm:py-28 bg-[#F7F5F0] text-[#17202A] relative border-b border-black/10"
      aria-labelledby="story-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative Content */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <span className="text-[#C99A4A] text-xs font-bold tracking-[0.25em] uppercase block mb-3">
              OUR STORY
            </span>

            <h2
              id="story-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071A2B] tracking-tight mb-8 leading-tight"
            >
              Built to Think Beyond the Law.
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-[#17202A]/80 font-sans leading-relaxed">
              <p>
                Veritas Law Group was founded around a simple idea: clients need more than legal answers. They need counsel that understands the commercial realities behind their decisions.
              </p>
              <p>
                From growing businesses to established organizations, our approach combines legal insight, commercial awareness, and clear communication.
              </p>
              <p>
                We focus on understanding where our clients want to go, identifying what could stand in their way, and helping them make confident decisions.
              </p>
            </div>

            {/* Subtle Brand Quote Accent */}
            <div className="mt-10 p-6 bg-white border-l-4 border-[#C99A4A] shadow-sm">
              <p className="font-serif text-base text-[#071A2B] italic mb-2">
                &ldquo;True legal strategy does not merely react to risk—it illuminates commercial opportunity.&rdquo;
              </p>
              <span className="text-xs font-mono uppercase tracking-widest text-[#C99A4A] font-semibold">
                Veritas Founding Principle
              </span>
            </div>
          </div>

          {/* Right Column: Progressive Drawing Vertical Timeline */}
          <div className="lg:col-span-6 relative pl-4 sm:pl-8">
            {/* Animated Vertical Gold Connecting Line */}
            <div className="absolute top-4 bottom-4 left-4 sm:left-8 w-[2px] bg-[#17202A]/10">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: 'easeOut' }}
                className="w-full bg-[#C99A4A] origin-top"
              />
            </div>

            {/* Timeline Items */}
            <div className="space-y-12 sm:space-y-14">
              {STORY_TIMELINE.map((item, idx) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="relative pl-8 sm:pl-10 group"
                >
                  {/* Timeline Node Point */}
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-none bg-[#F7F5F0] border-2 border-[#C99A4A] group-hover:bg-[#C99A4A] transition-colors" />

                  {/* Year Tag */}
                  <div className="inline-block px-2.5 py-0.5 bg-[#071A2B] text-[#E0B86A] text-xs font-mono font-bold tracking-wider mb-2">
                    {item.year}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#071A2B] mb-2 group-hover:text-[#8E6B2D] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#17202A]/70 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
