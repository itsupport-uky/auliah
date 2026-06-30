import React, { memo } from 'react';

import weddingData from '../../data/weddingData';

const FooterSection = memo(() => {
  return (
    <footer
      className="
        py-16
        bg-dark
        text-white
      "
    >
      <div
        className="
          max-w-4xl
          mx-auto
          text-center
          px-5
        "
      >
        <h3
          className="
            font-heading
            text-4xl
            mb-4
          "
        >
          Terima Kasih
        </h3>
        <p
          className="
            text-white/80
            mb-4
          "
        >
          Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do'a restu kepada kami.
        </p>
        <h3
          className="
            font-heading
            text-4xl
            mb-4
          "
        >
          {
            weddingData.groom
              .nickname
          }
          {' & '}
          {
            weddingData.bride
              .nickname
          }
        </h3>

        {/* <p
          className="
            text-white/80
          "
        >
          Dibuat dengan cinta
          untuk hari bahagia
          kami
        </p> */}

        <div
          className="
            mt-8
            text-sm
            text-white/60
          "
        >
          ©{' '}
          {new Date().getFullYear()}
          {' '}
          Kompas Outdoor
        </div>
      </div>
    </footer>
  );
});

FooterSection.displayName =
  'FooterSection';

export default FooterSection;