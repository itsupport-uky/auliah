import React, {
  memo,
  useEffect,
  useMemo,
} from 'react';

import { motion } from 'framer-motion';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';

import {
  fetchPesan,
} from '../../store/slices/rsvpSlice';

const WishesSection = memo(() => {
  const dispatch = useDispatch();

  const {
    wishes,
    loading,
    error,
  } = useSelector(
    (state) => state.rsvp
  );

  useEffect(() => {
    dispatch(fetchPesan());
  }, [dispatch]);

  const sortedWishes = useMemo(() => {
    if (!Array.isArray(wishes))
      return [];

    return [...wishes].sort(
      (a, b) =>
        new Date(
          b.date || b.createdAt
        ) -
        new Date(
          a.date || a.createdAt
        )
    );
  }, [wishes]);
  // console.log(sortedWishes);
  // console.log('wish');

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

        {loading && (
          <div
            className="
              text-center
              text-gray-500
            "
          >
            Memuat ucapan...
          </div>
        )}

        {error && (
          <div
            className="
              text-center
              text-red-500
            "
          >
            {error}
          </div>
        )}

        {!loading && (
          <div
            className="
              max-w-4xl
              mx-auto
              space-y-5
            "
          >
            {sortedWishes.length ===
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

            {sortedWishes.map(
              (wish) => (
                <motion.div
                  key={wish.id}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
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
                      {wish.nama}
                    </h3>

                    <span
                      className="
                        text-sm
                        text-gray-500
                      "
                    >
                      {
                        wish.kehadiran
                      }
                    </span>
                  </div>

                  <p
                    className="
                      text-gray-700
                      mb-3
                    "
                  >
                    {wish.pesan}
                  </p>

                  <small
                    className="
                      text-gray-500
                    "
                  >
                    {new Date(
                      wish.date
                    ).toLocaleString(
                      'id-ID'
                    )}
                  </small>
                </motion.div>
              )
            )}
          </div>
        )}
      </Container>
    </section>
  );
});

WishesSection.displayName =
  'WishesSection';

export default WishesSection;