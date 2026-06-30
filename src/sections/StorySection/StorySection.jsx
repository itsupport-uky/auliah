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
        {/* <SectionTitle
          title="Love Story"
          subtitle="Our Journey"
        /> */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="
            max-w-4xl
            mx-auto
            text-center
          "
        >
          <div
            className="
              w-20
              h-px
              bg-gold
              mx-auto
              mb-10
            "
          />

          <span
            className="
              block
              font-heading
              text-6xl
              md:text-7xl
              text-gold
              leading-none
              mb-6
            "
          >
            "
          </span>

          <p
            className="
              text-center
              mt-3
              text-gray-600
            "
          >
            {weddingData.quote?.text}
          </p>

          {weddingData.quote?.author && (
            <>
              <div
                className="
                  w-20
                  h-px
                  bg-gold
                  mx-auto
                  my-10
                "
              />

              <p
                className="
                  text-gold
                  uppercase
                  tracking-[0.3em]
                  text-sm
                  font-medium
                "
              >
                {weddingData.quote.author}
              </p>
            </>
          )}
        </motion.div>
      </Container>
    </section>
  );
});

StorySection.displayName =
  'StorySection';

export default StorySection;