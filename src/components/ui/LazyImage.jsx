import React, { memo } from 'react';

const LazyImage = memo(
  ({
    src,
    alt,
    className = ''
  }) => {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={className}
      />
    );
  }
);

LazyImage.displayName = 'LazyImage';

export default LazyImage;