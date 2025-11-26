import React, { useEffect } from "react";
import './Modal.css';

export default function Modal({
  isOpen,
  onClose,
  children,
  onNext,
  onPrevious,
}) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
      if (onNext && event.key === 'ArrowRight') {
        onNext();
      }
      if (onPrevious && event.key === 'ArrowLeft') {
        onPrevious();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrevious]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      {onPrevious &&
        <button
          className="modal-nav modal-prev"
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
          aria-label="Previous image">
          &#10094;
        </button>}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          &times;
        </button>
        {children}
      </div>
      {onNext &&
        <button className="modal-nav modal-next" onClick={(e) => { e.stopPropagation(); onNext(); }} aria-label="Next image">
          &#10095;
        </button>}
    </div>
  );
}