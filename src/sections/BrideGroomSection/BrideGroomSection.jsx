import React, { memo } from 'react';
import { motion } from 'framer-motion';

import weddingData from '../../data/weddingData';

import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';

const PersonCard = ({
  photo,
  name,
  father,
  mother,
  description
}) => {
  return (
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
        rounded-[32px]
        p-8
        shadow-luxury
      "
    >
      <img
        src={photo}
        alt={name}
        className="
          w-52
          h-52
          rounded-full
          object-cover
          mx-auto
        "
      />

      <h3
        className="
          text-center
          mt-6
          font-heading
          text-3xl
        "
      >
        {name}
      </h3>

      <p
        className="
          text-center
          mt-3
          text-gray-600
        "
      >
        {description}
      </p>

      <div className="mt-6">
        <p>
          <strong>
            Ayah:
          </strong>{' '}
          {father}
        </p>

        <p>
          <strong>
            Ibu:
          </strong>{' '}
          {mother}
        </p>
      </div>
    </motion.div>
  );
};

const BrideGroomSection =
  memo(() => {
    return (
      <section
        className="
          py-24
          bg-beige
        "
      >
        <Container>
          <SectionTitle
            title="Mempelai"
            subtitle="Bride & Groom"
          />

          <div
            className="
              grid
              md:grid-cols-2
              gap-8
            "
          >
            <PersonCard
              photo={
                weddingData
                  .groom.photo
              }
              name={
                weddingData
                  .groom.name
              }
              father={
                weddingData
                  .groom.father
              }
              mother={
                weddingData
                  .groom.mother
              }
              description={
                weddingData
                  .groom
                  .description
              }
            />

            <PersonCard
              photo={
                weddingData
                  .bride.photo
              }
              name={
                weddingData
                  .bride.name
              }
              father={
                weddingData
                  .bride.father
              }
              mother={
                weddingData
                  .bride.mother
              }
              description={
                weddingData
                  .bride
                  .description
              }
            />
          </div>
        </Container>
      </section>
    );
  });

BrideGroomSection.displayName =
  'BrideGroomSection';

export default BrideGroomSection;