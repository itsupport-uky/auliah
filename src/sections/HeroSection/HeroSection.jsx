import React, {
  memo,
  useMemo
} from 'react';

import { motion } from 'framer-motion';

import weddingData from '../../data/weddingData';
import useCountdown from '../../hooks/useCountdown';

import CountdownItem from '../../components/ui/CountdownItem';

const HeroSection = memo(() => {
  const countdown =
    useCountdown(
      weddingData.weddingDate
    );

  const countdownItems =
    useMemo(
      () => [
        {
          label: 'Hari',
          value:
            countdown.days
        },
        {
          label: 'Jam',
          value:
            countdown.hours
        },
        {
          label: 'Menit',
          value:
            countdown.minutes
        },
        {
          label: 'Detik',
          value:
            countdown.seconds
        }
      ],
      [countdown]
    );

  return (
    <section
      id="hero"
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-luxury
        py-20
      "
    >
      <div
        className="
          max-w-5xl
          mx-auto
          px-5
          text-center
        "
      >
        <motion.img
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{
            once: true
          }}
          src={
            weddingData
              .gallery[1]
              .image
          }
          alt="Couple"
          className="
            w-72
            h-72
            md:w-96
            md:h-96
            rounded-full
            object-cover
            mx-auto
            shadow-2xl
          "
        />

        <motion.h1
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
            mt-10
            font-heading
            text-5xl
            md:text-7xl
            text-dark
          "
        >
          {weddingData.groom.nickname}
          {' & '}
          {
            weddingData.bride
              .nickname
          }
        </motion.h1>

        <p
          className="
            mt-5
            text-gray-600
          "
        >
          4 Juli 2026
        </p>

        <div
          className="
            flex
            justify-center
            gap-3
            flex-wrap
            mt-10
          "
        >
          {countdownItems.map(
            (item) => (
              <CountdownItem
                key={
                  item.label
                }
                {...item}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName =
  'HeroSection';

export default HeroSection;