import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Gallery from '../Gallery/Gallery.jsx'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import imagesData from '../json/images.json'
import servicesData from '../json/services.json'
import './Services.css'

export default function Servis() {
	return (
		<section className='services'>
			<Swiper
				modules={[Navigation, Autoplay]}
				spaceBetween={0}
				slidesPerView={1}
				navigation
				pagination={{ clickable: false }}
				autoplay={{ delay: 5000 }}
				loop={true}
				className='services__slider'
			>
				{servicesData.uslugi_serwisowe.map((category, index) => {
					const imageUrl =
						category.image ||
						(imagesData.actualImages &&
							imagesData.actualImages[
								index % imagesData.actualImages.length
							]) ||
						'https://via.placeholder.com/1200x600'

					return (
						<SwiperSlide key={index}>
							<div
								className='service-slide'
								style={{
									backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${imageUrl})`
								}}
							>
                <h3 className='slide__title'>{category.kategoria}</h3>
								<div className='container slide__content'>
									
									<ul className='slide__list'>
										{category.lista.map((item, itemIndex) => (
											<li key={itemIndex} className='slide__item'>
												{item}
											</li>
										))}
									</ul>
								</div>
							</div>
						</SwiperSlide>
					)
				})}
			</Swiper>

			<div className='container__services'>
				{servicesData.uslugi_serwisowe.map((category, index) => (
					<div key={index} className='services__category'>
						<h3 className='services__category-title'>{category.kategoria}</h3>
						<ul className='services__category-list'>
							{category.lista.map((item, itemIndex) => (
								<li key={itemIndex} className='services__category-item'>
									{item}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>

			<Gallery />
		</section>
	)
}
