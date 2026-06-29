import React, {
  memo,
  useMemo
} from 'react';

import {
  IoPause,
  IoPlay
} from 'react-icons/io5';

import useAudio from '../../hooks/useAudio';

const AudioPlayer = memo(() => {
  console.log('AudioPlayer Rendered');
  const {
    isPlaying,
    toggle
  } = useAudio();

  const icon = useMemo(() => {
    return isPlaying ? (
      <IoPause />
    ) : (
      <IoPlay />
    );
  }, [isPlaying]);

  return (
    <button
      onClick={toggle}
      aria-label="Music Player"
      className="
        fixed
        bottom-5
        right-5
        z-[9999]
        w-14
        h-14
        rounded-full
        bg-gold
        text-white
        text-2xl
        flex
        items-center
        justify-center
        shadow-xl
        hover:scale-105
        transition-all
        duration-300
      "
    >
      {icon}
    </button>
  );
});

AudioPlayer.displayName =
  'AudioPlayer';

export default AudioPlayer;