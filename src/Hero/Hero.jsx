import { useEffect, useState } from 'react'
import images from '../json/images.json'

import { FaApple } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa6'
import './Hero.css'
export default function Hero() {
	const [currentIndex, setCurrentIndex] = useState(0)
	const photoArray = images.actualImages

	useEffect(() => {
		photoArray.forEach(src => {
			const img = new Image()
			img.src = src
		})
	}, [photoArray])

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex(prev => (prev + 1) % photoArray.length)
		}, 5000)
		return () => clearInterval(interval)
	}, [photoArray.length])

	return (
		<section className='hero'>
			<div className='hero__bg'>
				{photoArray.map((src, index) => (
					<img
						key={src}
						src={src}
						alt='Hero background'
						className={`hero__image ${index === currentIndex ? 'hero__image--active' : ''}`}
					/>
				))}
			</div>
			<div className='hero__overlay'></div>
			<div className='container hero__container'>
				<h2 className='hero__title'>
					SERWIS{' '}
					<span>
						apple
						<FaApple />
					</span>{' '}
					GSM
				</h2>
				<p className='hero__discription'>
					Serwis telefonów, komputerów, laptopów,nawigacji oraz konsoli.
				</p>
				<p className='hero__slogan'>MAMY TĘ MOC!</p>
				<a className='numberButton' href='tel:+48 697 020 972'>
					<FaPhone style={{ display: 'block' }} /> +48 697 020 972
				</a>
			</div>
		</section>
	)
}
