import React, {
  memo,
  useCallback,
  useState
} from 'react';

import { motion } from 'framer-motion';

import weddingData from '../../data/weddingData';
import { copyToClipboard } from '../../utils/clipboard';

import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Toast from '../../components/ui/Toast';

const GiftSection = memo(() => {
  const [showToast, setShowToast] =
    useState(false);

  const [toastMessage, setToastMessage] =
    useState('');

  const handleCopy = useCallback(
    async (accountNumber) => {
      const result =
        await copyToClipboard(
          accountNumber
        );

      setToastMessage(
        result.message
      );

      setShowToast(true);
    },
    []
  );

  return (
    <>
      <Toast
        show={showToast}
        message={toastMessage}
        onClose={() =>
          setShowToast(false)
        }
      />

      <section
        id="gift"
        className="
          py-24
          bg-white
        "
      >
        <Container>
          <SectionTitle
            title="Wedding Gift"
            subtitle="Tanda Kasih"
          />

          <div
            className="
              max-w-4xl
              mx-auto
              grid
              md:grid-cols-2
              gap-8
            "
          >
            {weddingData.gifts.map(
              (gift) => (
                <motion.div
                  key={gift.id}
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
                    bg-beige
                    rounded-3xl
                    p-8
                    shadow-luxury
                  "
                >
                  <h3
                    className="
                      font-heading
                      text-3xl
                      mb-4
                    "
                  >
                    {gift.bank}
                  </h3>

                  <p className="mb-2">
                    Nomor Rekening
                  </p>

                  <h4
                    className="
                      text-2xl
                      font-semibold
                      mb-4
                    "
                  >
                    {
                      gift.accountNumber
                    }
                  </h4>

                  <p
                    className="
                      text-gray-600
                      mb-6
                    "
                  >
                    {
                      gift.accountHolder
                    }
                  </p>

                  <button
                    onClick={() =>
                      handleCopy(
                        gift.accountNumber
                      )
                    }
                    className="
                      bg-gold
                      text-white
                      px-6
                      py-3
                      rounded-full
                    "
                  >
                    Copy Nomor
                    Rekening
                  </button>
                </motion.div>
              )
            )}
          </div>
{/* 
          <motion.div
            initial={{
              opacity: 0
            }}
            whileInView={{
              opacity: 1
            }}
            viewport={{
              once: true
            }}
            className="
              mt-12
              max-w-md
              mx-auto
              text-center
            "
          >
            <h3
              className="
                font-heading
                text-3xl
                mb-5
              "
            >
              QRIS
            </h3>

            <img
              src={weddingData.qris}
              alt="QRIS"
              className="
                rounded-3xl
                shadow-luxury
                mx-auto
              "
            />
          </motion.div> */}
        </Container>
      </section>
    </>
  );
});

GiftSection.displayName =
  'GiftSection';

export default GiftSection;