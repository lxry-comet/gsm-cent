import { useEffect, useState } from 'react'
import images from '../json/images.json'

import './Hero.css'
import { FaPhone } from 'react-icons/fa6'
import { FaApple } from "react-icons/fa";
export default function Hero() {
	const [currentIndex, setCurrentIndex] = useState(0)
	const photoArray = images.actualImages

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % photoArray.length)
		}, 5000)
		return () => clearInterval(interval)
	}, [photoArray.length])

	return (
		<section
			className='hero'
			style={{
				backgroundImage: `linear-gradient(rgba(27, 27, 29, 0.8), rgba(16, 16, 18, 0.6)), url(${photoArray[currentIndex]})`,
			}}
		>
			<div className='hero__overlay'></div>
			<div className='container hero__container'>
				<h2 className='hero__title'>
					SERWIS <span>apple<FaApple /></span> GSM
				</h2>
				<p className='hero__discription'>
					Serwis telefonów, komputerów, laptopów,nawigacji oraz konsoli.
				</p>
				<p className='hero__slogan'>MAMY TĘ MOC!</p>
				<a className='numberButton' href='tel:+48 697 020 972'>
					<FaPhone style={{display: 'block'}}/> +48 697 020 972
				</a>
			</div>
		</section>
	)
}
