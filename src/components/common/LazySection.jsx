import React, {
  memo,
  Suspense
} from 'react';

import PageLoader from './PageLoader';

const LazySection = memo(
  ({ children }) => {
    return (
      <Suspense
        fallback={<PageLoader />}
      >
        {children}
      </Suspense>
    );
  }
);

LazySection.displayName =
  'LazySection';

export default LazySection;