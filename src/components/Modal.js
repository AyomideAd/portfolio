import React from 'react';

const Modal = ({ isOpen, onClose, achievement }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-2">{achievement.title}</h2>
        <p className="text-gray-700 mb-4">{achievement.description}</p>
        <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold" style={{ backgroundColor: `${achievement.color}20`, color: achievement.color }}>
          {achievement.year}
        </span>
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-gray-800 text-white rounded">Close</button>
      </div>
    </div>
  );
};

export default Modal;
