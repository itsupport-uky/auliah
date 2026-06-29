import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = memo(
  ({
    title,
    description,
    keywords
  }) => {
    return (
      <Helmet>
        <title>{title}</title>

        <meta
          name="description"
          content={description}
        />

        <meta
          name="keywords"
          content={keywords}
        />

        <meta
          property="og:title"
          content={title}
        />

        <meta
          property="og:description"
          content={description}
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content={title}
        />

        <meta
          name="twitter:description"
          content={description}
        />
      </Helmet>
    );
  }
);

SEO.displayName = 'SEO';

export default SEO;