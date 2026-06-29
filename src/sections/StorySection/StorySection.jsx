import React, { memo } from 'react';
import { motion } from 'framer-motion';

import weddingData from '../../data/weddingData';

import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';

const StorySection = memo(() => {
  return (
    <section
      className="
        py-24
        bg-white
      "
    >
      <Container>
        <SectionTitle
          title="Cerita Kami"
          subtitle="Love Story"
        />

        <div
          className="
            relative
            max-w-3xl
            mx-auto
          "
        >
          <div
            className="
              absolute
              left-4
              top-0
              bottom-0
              w-[2px]
              bg-gold
            "
          />

          {weddingData.story.map(
            (item) => (
              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  x: -30
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true
                }}
                className="
                  relative
                  pl-14
                  mb-10
                "
              >
                <div
                  className="
                    absolute
                    left-0
                    top-2
                    w-8
                    h-8
                    rounded-full
                    bg-gold
                  "
                />

                <div
                  className="
                    bg-white
                    rounded-3xl
                    p-6
                    shadow-luxury
                  "
                >
                  <p
                    className="
                      text-gold
                      mb-2
                    "
                  >
                    {item.date}
                  </p>

                  <h3
                    className="
                      font-heading
                      text-2xl
                      mb-2
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      text-gray-600
                    "
                  >
                    {
                      item.description
                    }
                  </p>
                </div>
              </motion.div>
            )
          )}
        </div>
      </Container>
    </section>
  );
});

StorySection.displayName =
  'StorySection';

export default StorySection;