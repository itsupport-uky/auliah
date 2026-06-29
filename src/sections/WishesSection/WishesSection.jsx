import React, {
  memo,
  useEffect,
  useState
} from 'react';

import { motion } from 'framer-motion';

import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';

const STORAGE_KEY =
  'wedding-rsvp-data';

const WishesSection = memo(() => {
  const [wishes, setWishes] =
    useState([]);

  useEffect(() => {
    const loadData = () => {
      const data =
        JSON.parse(
          localStorage.getItem(
            STORAGE_KEY
          ) || '[]'
        );

      const sorted =
        [...data].sort(
          (a, b) =>
            new Date(
              b.createdAt
            ) -
            new Date(
              a.createdAt
            )
        );

      setWishes(sorted);
    };

    loadData();

    window.addEventListener(
      'wedding-rsvp-updated',
      loadData
    );

    return () => {
      window.removeEventListener(
        'wedding-rsvp-updated',
        loadData
      );
    };
  }, []);

  return (
    <section
      id="wishes"
      className="
        py-24
        bg-white
      "
    >
      <Container>
        <SectionTitle
          title="Ucapan & Doa"
          subtitle="Best Wishes"
        />

        <div
          className="
            max-w-4xl
            mx-auto
            space-y-5
          "
        >
          {wishes.length ===
            0 && (
            <div
              className="
                text-center
                text-gray-500
              "
            >
              Belum ada ucapan.
            </div>
          )}

          {wishes.map(
            (wish) => (
              <motion.div
                key={wish.id}
                initial={{
                  opacity: 0,
                  y: 20
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                className="
                  bg-beige
                  rounded-3xl
                  p-6
                  shadow-luxury
                "
              >
                <div
                  className="
                    flex
                    justify-between
                    gap-4
                    flex-wrap
                    mb-3
                  "
                >
                  <h3
                    className="
                      font-semibold
                    "
                  >
                    {wish.name}
                  </h3>

                  <span
                    className="
                      text-sm
                      text-gray-500
                    "
                  >
                    {
                      wish.attendance
                    }
                  </span>
                </div>

                <p
                  className="
                    text-gray-700
                    mb-3
                  "
                >
                  {
                    wish.message
                  }
                </p>

                <small
                  className="
                    text-gray-500
                  "
                >
                  {new Date(
                    wish.createdAt
                  ).toLocaleString(
                    'id-ID'
                  )}
                </small>
              </motion.div>
            )
          )}
        </div>
      </Container>
    </section>
  );
});

WishesSection.displayName =
  'WishesSection';

export default WishesSection;