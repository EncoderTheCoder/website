import React, { useState, useEffect } from 'react';
import './Gallery.css';
import Modal from './Modal';

// This function uses Webpack's `require.context` to dynamically import all images
// from the specified directory.
function importAll(r) {
  return r.keys().map((fileName) => ({
    id: fileName,
    src: r(fileName),
    alt: `Vedic Hindi School event image: ${fileName.replace('./', '')}`,
  }));
}

// The arguments to require.context are: directory, useSubdirectories, and a matching regex.
const imagesContext = require.context('../assets/events', false, /\.(png|jpe?g|svg|gif|webp|avif|bmp|ico|tiff)$/i);

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const loadedImages = importAll(imagesContext);
    setImages(loadedImages);
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const showNextImage = () => {
    if (!selectedImage) return;
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const showPreviousImage = () => {
    if (!selectedImage) return;
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  return (
    <>
      <div className="gallery-carousel-container">
        <div className="gallery-carousel-track">
          {/* Render the images twice for a seamless loop */}
          {images.map((image) => (
            <figure key={image.id} className="gallery-figure" onClick={() => openModal(image)}>
              <img src={image.src} alt={image.alt} className="gallery-img" loading="lazy" />
            </figure>
          ))}
          {images.map((image) => (
            <figure key={`${image.id}-duplicate`} className="gallery-figure" onClick={() => openModal(image)}>
              <img src={image.src} alt={image.alt} className="gallery-img" loading="lazy" />
            </figure>
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!selectedImage}
        onClose={closeModal}
        onNext={showNextImage}
        onPrevious={showPreviousImage}
      >
        {selectedImage && (
          <img src={selectedImage.src} alt={selectedImage.alt} />
        )}
      </Modal>
    </>
  );
}
