import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';

const AudioContext = createContext(null);

const STORAGE_KEY =
  'wedding-audio-state';

export const AudioProvider = ({
  children,
  src
}) => {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] =
    useState(false);

  useEffect(() => {
    if (!src) return;

    const audio = new Audio(src);

    audio.loop = true;

    audioRef.current = audio;

    return () => {
      audio.pause();
    };
  }, [src]);

  const play = useCallback(async () => {
    if (!audioRef.current) return;

    try {
      await audioRef.current.play();

      setIsPlaying(true);

      localStorage.setItem(
        STORAGE_KEY,
        'playing'
      );
    } catch {}
  }, []);

  const pause = useCallback(() => {
    if (!audioRef.current) return;

    audioRef.current.pause();

    setIsPlaying(false);

    localStorage.setItem(
      STORAGE_KEY,
      'paused'
    );
  }, []);

  const toggle = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }, [
    isPlaying,
    pause,
    play
  ]);

  const value = useMemo(
    () => ({
      isPlaying,
      play,
      pause,
      toggle
    }),
    [
      isPlaying,
      play,
      pause,
      toggle
    ]
  );

  return (
    <AudioContext.Provider
      value={value}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudioContext =
  () => {
    const ctx =
      useContext(AudioContext);

    if (!ctx) {
      throw new Error(
        'AudioProvider missing'
      );
    }

    return ctx;
  };

export default AudioContext;