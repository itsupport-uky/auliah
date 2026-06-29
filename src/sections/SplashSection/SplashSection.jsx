import React, { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import weddingData from '../../data/weddingData';
import useGuestName from '../../hooks/useGuestName';
import useAudio from '../../hooks/useAudio';

const SplashSection = memo(
  ({ isOpen, onOpenInvitation }) => {
    const { guestName } = useGuestName();
    const { play } = useAudio();

    return (
      <AnimatePresence>
        {!isOpen && (
          <motion.section
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.8
              }
            }}
            className="
              fixed
              inset-0
              z-[99999]
              overflow-hidden
              bg-ivory
            "
          >
            <div
              className="
                absolute
                inset-0
              "
            >
              <img
                src={weddingData.gallery[0].image}
                alt="Wedding Cover"
                className="
                  w-full
                  h-full
                  object-cover
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-black/45
                "
              />
            </div>

            <div
              className="
                relative
                z-10
                h-full
                flex
                items-center
                justify-center
                p-6
              "
            >
              <div className="text-center text-white max-w-md">
                <motion.p
                  initial={{
                    opacity: 0,
                    y: 20
                  }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                  transition={{
                    delay: 0.2
                  }}
                  className="
                    uppercase
                    tracking-[6px]
                    text-sm
                    mb-6
                  "
                >
                  Undangan Pernikahan
                </motion.p>

                <motion.h1
                  initial={{
                    opacity: 0,
                    scale: 0.95
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1
                  }}
                  transition={{
                    delay: 0.4
                  }}
                  className="
                    font-heading
                    text-5xl
                    mb-3
                  "
                >
                  {weddingData.groom.nickname}
                </motion.h1>

                <motion.span
                  initial={{
                    opacity: 0
                  }}
                  animate={{
                    opacity: 1
                  }}
                  transition={{
                    delay: 0.6
                  }}
                  className="
                    block
                    text-2xl
                    mb-3
                  "
                >
                  &
                </motion.span>

                <motion.h2
                  initial={{
                    opacity: 0,
                    scale: 0.95
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1
                  }}
                  transition={{
                    delay: 0.8
                  }}
                  className="
                    font-heading
                    text-5xl
                    mb-8
                  "
                >
                  {weddingData.bride.nickname}
                </motion.h2>

                <motion.div
                  initial={{
                    opacity: 0
                  }}
                  animate={{
                    opacity: 1
                  }}
                  transition={{
                    delay: 1
                  }}
                  className="mb-8"
                >
                  <p className="text-sm mb-3">
                    Kepada Yth.
                  </p>

                  <p className="text-sm mb-2">
                    Bapak/Ibu/Saudara/i
                  </p>

                  <h3
                    className="
                      font-heading
                      text-2xl
                    "
                  >
                    {guestName}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-xs
                      opacity-90
                    "
                  >
                    Mohon maaf apabila
                    terdapat kesalahan
                    penulisan nama dan
                    gelar.
                  </p>
                </motion.div>

                <motion.button
                  whileTap={{
                    scale: 0.95
                  }}
                  whileHover={{
                    scale: 1.05
                  }}
                  onClick={() => {
                    play();
                    onOpenInvitation();
                  }}
                  className="
                    bg-gold
                    px-8
                    py-4
                    rounded-full
                    text-white
                    font-semibold
                    shadow-xl
                  "
                >
                  Buka Undangan
                </motion.button>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    );
  }
);

SplashSection.displayName =
  'SplashSection';

export default SplashSection;