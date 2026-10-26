
import { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import imagesData from '../json/images.json'
import './Galley.css'

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null)
  const images = imagesData.actualImages ?? []

  useEffect(() => {
    if (!selectedImg) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedImg(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImg])

  return (
    <section className="gallery" aria-label="Galeria zdjęć serwisu">
      <div className="container gallery__container">
        <h2 className="gallery__title">Galeria serwisu</h2>

        <ul className="gallery__list">
          {images.map((imgUrl, index) => (
            <li key={imgUrl} className="gallery__item">
              <button
                type="button"
                className="gallery__open"
                onClick={() => setSelectedImg(imgUrl)}
                aria-label={`Powiększ zdjęcie ${index + 1}`}
              >
                <img
                  loading="lazy"
                  src={imgUrl}
                  alt={`Zdjęcie ${index + 1} z serwisu`}
                  className="gallery__img"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {selectedImg && (
        <div
          className="gallery__modal"
          role="dialog"
          aria-modal="true"
          aria-label="Powiększone zdjęcie"
          onClick={() => setSelectedImg(null)}
        >
          <button
            type="button"
            className="gallery__modal-close"
            onClick={() => setSelectedImg(null)}
            aria-label="Zamknij zdjęcie"
          >
            <FaTimes aria-hidden="true" />
          </button>

          <img
            src={selectedImg}
            alt="Powiększone zdjęcie z galerii serwisu"
            className="gallery__modal-img"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
