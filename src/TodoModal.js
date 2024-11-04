import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const TodoModal = ({ isOpen, toggleModal, children }) => {
  const modalContent = (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg p-6 shadow-lg">
        <button 
          onClick={toggleModal}
          className="absolute top-4 right-4"
        >
          <XMarkIcon className="w-6 h-6 text-violet-500 hover:text-violet-700" />
        </button>
        {children}
      </div>
    </div>
  );

  return isOpen ? modalContent : null;
};

export default TodoModal;
