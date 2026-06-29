import React, { memo } from 'react';

const Container = memo(({ children }) => {
  return (
    <div className="max-w-6xl mx-auto px-5 md:px-8">
      {children}
    </div>
  );
});

Container.displayName = 'Container';

export default Container;