import React, { memo } from 'react';

const Button = memo(
  ({
    children,
    onClick,
    type = 'button',
    className = ''
  }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`
          bg-gold
          text-white
          px-6
          py-3
          rounded-full
          font-medium
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-lg
          active:scale-95
          ${className}
        `}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;