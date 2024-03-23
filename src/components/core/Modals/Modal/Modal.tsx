import React, { ReactNode } from "react";

type TModal = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
};

const Modal: React.FC<TModal> = ({ isOpen, onClose, children, className }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="absolute top-0 right-0 p-4">
            <button
              onClick={onClose}
              type="button"
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              x
            </button>
          </div>
          <div
            className={`bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ${className}`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
