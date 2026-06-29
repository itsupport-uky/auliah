import React, { memo } from 'react';

const CountdownItem = memo(
  ({ value, label }) => {
    return (
      <div
        className="
          bg-white
          rounded-2xl
          shadow-luxury
          p-4
          min-w-[75px]
        "
      >
        <h3 className="font-heading text-3xl text-dark">
          {String(value).padStart(2, '0')}
        </h3>

        <p className="text-sm text-gray-500">
          {label}
        </p>
      </div>
    );
  }
);

CountdownItem.displayName =
  'CountdownItem';

export default CountdownItem;