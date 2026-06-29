import React, {
  memo,
  useEffect
} from 'react';

const Toast = memo(
  ({ message, show, onClose }) => {
    useEffect(() => {
      if (!show) return;

      const timer = setTimeout(() => {
        onClose();
      }, 2500);

      return () => clearTimeout(timer);
    }, [show, onClose]);

    if (!show) return null;

    return (
      <div
        className="
          fixed
          top-5
          left-1/2
          -translate-x-1/2
          z-[9999]
          bg-dark
          text-white
          px-5
          py-3
          rounded-xl
          shadow-xl
        "
      >
        {message}
      </div>
    );
  }
);

Toast.displayName = 'Toast';

export default Toast;