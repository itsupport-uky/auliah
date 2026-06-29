import React, {
  memo,
  useMemo
} from 'react';

import { motion } from 'framer-motion';

import weddingData from '../../data/weddingData';

import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';

const VideoSection = memo(() => {
  const hasYoutube =
    useMemo(
      () =>
        Boolean(
          weddingData.video
            ?.youtube
        ),
      []
    );

  const hasLocalVideo =
    useMemo(
      () =>
        Boolean(
          weddingData.video
            ?.localVideo
        ),
      []
    );

  return (
    <section
      id="video"
      className="
        py-24
        bg-beige
      "
    >
      <Container>
        <SectionTitle
          title="Video"
          subtitle="Special Moments"
        />

        <div
          className="
            max-w-5xl
            mx-auto
            space-y-10
          "
        >
          {hasYoutube && (
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
                bg-white
                p-4
                md:p-6
                rounded-3xl
                shadow-luxury
              "
            >
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  pt-[56.25%]
                "
              >
                <iframe
                  src={
                    weddingData
                      .video
                      .youtube
                  }
                  title="Wedding Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="
                    absolute
                    top-0
                    left-0
                    w-full
                    h-full
                  "
                />
              </div>
            </motion.div>
          )}

          {hasLocalVideo && (
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
                bg-white
                p-4
                md:p-6
                rounded-3xl
                shadow-luxury
              "
            >
              <video
                controls
                preload="metadata"
                className="
                  w-full
                  rounded-2xl
                "
              >
                <source
                  src={
                    weddingData
                      .video
                      .localVideo
                  }
                  type="video/mp4"
                />

                Browser Anda tidak
                mendukung video.
              </video>
            </motion.div>
          )}

          {!hasYoutube &&
            !hasLocalVideo && (
              <div
                className="
                  text-center
                  bg-white
                  rounded-3xl
                  shadow-luxury
                  p-10
                "
              >
                <p
                  className="
                    text-gray-500
                  "
                >
                  Video belum
                  tersedia.
                </p>
              </div>
            )}
        </div>
      </Container>
    </section>
  );
});

VideoSection.displayName =
  'VideoSection';

export default VideoSection;