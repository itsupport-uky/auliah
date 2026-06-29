import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../animations/motionVariants';

const SectionTitle = memo(
  ({ title, subtitle }) => {
    return (
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <p className="text-gold uppercase tracking-[6px] text-sm mb-3">
          {subtitle}
        </p>

        <h2 className="font-heading text-4xl md:text-5xl text-dark">
          {title}
        </h2>
      </motion.div>
    );
  }
);

SectionTitle.displayName = 'SectionTitle';

export default SectionTitle;