import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import imagesData from '../json/images.json'
import './Galley.css'

export default function Gallery() {
	const [selectedImg, setSelectedImg] = useState(null)

	return (
		<section className='gallery'>
			<div className='container gallery__container'>
				<ul className='gallery__list'>
					{imagesData.actualImages.map((imgUrl, index) => (
						<li
							key={index}
							className='gallery__item'
							onClick={() => setSelectedImg(imgUrl)}
						>
							<img
								loading='lazy'
								src={imgUrl}
								alt={`Zdjęcie z galerii ${index + 1}`}
								className='gallery__img'
							/>
						</li>
					))}
				</ul>
			</div>

			{/* Modal (Lightbox) */}
			{selectedImg && (
				<div className='gallery__modal' onClick={() => setSelectedImg(null)}>
					<button className='gallery__modal-close'>
						<FaTimes />
					</button>
					<img
						src={selectedImg}
						alt='Powiększone zdjęcie'
						className='gallery__modal-img'
						onClick={e => e.stopPropagation()}
					/>
				</div>
			)}
		</section>
	)
}
