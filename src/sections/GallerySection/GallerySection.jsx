import React, {
  memo,
  useCallback,
  useMemo,
  useState
} from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import {
  IoChevronBack,
  IoChevronForward,
  IoClose
} from 'react-icons/io5';

import weddingData from '../../data/weddingData';

import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import LazyImage from '../../components/ui/LazyImage';

const GallerySection = memo(() => {
  const [selectedIndex, setSelectedIndex] =
    useState(null);

  const [touchStart, setTouchStart] =
    useState(null);

  const [touchEnd, setTouchEnd] =
    useState(null);

  const images = useMemo(() => {
    return weddingData.gallery;
  }, []);

  const openImage = useCallback((index) => {
    setSelectedIndex(index);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const nextImage = useCallback(() => {
    setSelectedIndex((prev) => {
      if (prev === null) return null;

      return (prev + 1) % images.length;
    });
  }, [images.length]);

  const prevImage = useCallback(() => {
    setSelectedIndex((prev) => {
      if (prev === null) return null;

      return prev === 0
        ? images.length - 1
        : prev - 1;
    });
  }, [images.length]);

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(
      e.targetTouches[0].clientX
    );
  };

  const handleTouchMove = (e) => {
    setTouchEnd(
      e.targetTouches[0].clientX
    );
  };

  const handleTouchEnd = () => {
    if (
      touchStart === null ||
      touchEnd === null
    ) {
      return;
    }

    const distance =
      touchStart - touchEnd;

    if (distance > 75) {
      nextImage();
    }

    if (distance < -75) {
      prevImage();
    }
  };

  return (
    <section
      id="gallery"
      className="
        py-24
        bg-white
      "
    >
      <Container>
        <SectionTitle
          title="Galeri"
          subtitle="Our Moments"
        />

        <div
          className="
            columns-2
            md:columns-3
            gap-4
            space-y-4
          "
        >
          {images.map(
            (item, index) => (
              <motion.button
                key={item.id}
                whileHover={{
                  scale: 1.02
                }}
                whileTap={{
                  scale: 0.98
                }}
                onClick={() =>
                  openImage(index)
                }
                className="
                  w-full
                  overflow-hidden
                  rounded-3xl
                  block
                  mb-4
                "
              >
                <LazyImage
                  src={item.image}
                  alt={`Gallery ${item.id}`}
                  className="
                    w-full
                    object-cover
                    rounded-3xl
                  "
                />
              </motion.button>
            )
          )}
        </div>
      </Container>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            className="
              fixed
              inset-0
              z-[99999]
              bg-black/95
              flex
              items-center
              justify-center
              p-5
            "
            onClick={closeModal}
          >
            <button
              onClick={closeModal}
              className="
                absolute
                top-5
                right-5
                text-white
                text-4xl
                z-20
              "
            >
              <IoClose />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="
                absolute
                left-4
                md:left-8
                text-white
                text-4xl
                z-20
              "
            >
              <IoChevronBack />
            </button>

            <motion.div
              key={selectedIndex}
              initial={{
                opacity: 0,
                scale: 0.95
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              exit={{
                opacity: 0
              }}
              onClick={(e) =>
                e.stopPropagation()
              }
              onTouchStart={
                handleTouchStart
              }
              onTouchMove={
                handleTouchMove
              }
              onTouchEnd={
                handleTouchEnd
              }
              className="
                max-w-5xl
                w-full
              "
            >
              <img
                src={
                  images[
                    selectedIndex
                  ].image
                }
                alt="Preview"
                className="
                  w-full
                  max-h-[85vh]
                  object-contain
                  rounded-3xl
                "
              />
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="
                absolute
                right-4
                md:right-8
                text-white
                text-4xl
                z-20
              "
            >
              <IoChevronForward />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
});

GallerySection.displayName =
  'GallerySection';

export default GallerySection;