import React, {
  memo,
  Suspense
} from 'react';

import AudioPlayer from '../components/common/AudioPlayer';
import PageLoader from '../components/common/PageLoader';

const MainLayout = memo(
  ({
    children,
    showAudioPlayer = true
  }) => {
    return (
      <div
        className="
          min-h-screen
          bg-ivory
          text-dark
          font-body
          overflow-x-hidden
        "
      >
        <Suspense
          fallback={
            <PageLoader />
          }
        >
          {children}
        </Suspense>

        {showAudioPlayer && (
          <AudioPlayer />
        )}
      </div>
    );
  }
);

MainLayout.displayName =
  'MainLayout';

export default MainLayout;