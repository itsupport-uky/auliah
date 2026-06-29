import React, { memo } from 'react';

const Card = memo(({ children, className = '' }) => {
  return (
    <div
      className={`
      bg-white
      rounded-3xl
      shadow-luxury
      p-6
      ${className}
    `}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;