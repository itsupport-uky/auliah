import React, {
  memo,
  useCallback
} from 'react';

import {
  FaLocationDot
} from 'react-icons/fa6';

import { motion } from 'framer-motion';

import weddingData from '../../data/weddingData';

import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';

const EventSection = memo(() => {
  const openMaps =
    useCallback((url) => {
      window.open(
        url,
        '_blank',
        'noopener,noreferrer'
      );
    }, []);

  return (
    <section
      className="
        py-24
        bg-white
      "
    >
      <Container>
        <SectionTitle
          title="Acara Pernikahan"
          subtitle="Wedding Event"
        />

        <div
          className="
            grid
            md:grid-cols-2
            gap-8
          "
        >
          {weddingData.events.map(
            (event) => (
              <motion.div
                key={event.id}
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
                  shadow-luxury
                  rounded-[32px]
                  p-8
                "
              >
                <h3
                  className="
                    font-heading
                    text-3xl
                    mb-5
                  "
                >
                  {event.type}
                </h3>

                <div className="space-y-3">
                  <p>
                    <strong>
                      Tanggal:
                    </strong>{' '}
                    {
                      event.date
                    }
                  </p>

                  <p>
                    <strong>
                      Waktu:
                    </strong>{' '}
                    {
                      event.time
                    }
                  </p>

                  <p>
                    <strong>
                      Lokasi:
                    </strong>{' '}
                    {
                      event.location
                    }
                  </p>

                  <p>
                    <strong>
                      Alamat:
                    </strong>{' '}
                    {
                      event.address
                    }
                  </p>
                </div>

                <button
                  onClick={() =>
                    openMaps(
                      event.maps
                    )
                  }
                  className="
                    mt-6
                    bg-gold
                    text-white
                    px-6
                    py-3
                    rounded-full
                    flex
                    items-center
                    gap-2
                  "
                >
                  <FaLocationDot />

                  Lihat Lokasi
                </button>
              </motion.div>
            )
          )}
        </div>
      </Container>
    </section>
  );
});

EventSection.displayName =
  'EventSection';

export default EventSection;