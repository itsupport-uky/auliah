import React, { memo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

const Modal = memo(
  ({ isOpen, onClose, children }) => {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            onClick={onClose}
            className="
              fixed
              inset-0
              bg-black/80
              z-[9999]
              flex
              items-center
              justify-center
              p-5
            "
          >
            <motion.div
              initial={{
                scale: 0.9
              }}
              animate={{
                scale: 1
              }}
              exit={{
                scale: 0.9
              }}
              onClick={(e) =>
                e.stopPropagation()
              }
              className="
                relative
                max-w-4xl
                w-full
              "
            >
              <button
                onClick={onClose}
                className="
                  absolute
                  top-3
                  right-3
                  text-white
                  text-3xl
                  z-10
                "
              >
                <IoClose />
              </button>

              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);

Modal.displayName = 'Modal';

export default Modal;