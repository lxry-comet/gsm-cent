import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Gallery from '../Gallery/Gallery.jsx'


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import servicesData from '../json/services.json';
import imagesData from '../json/images.json';
import './Services.css';

export default function Servis() {
  return (
    <section className="services">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: false }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="services__slider"
      >
        {servicesData.uslugi_serwisowe.map((category, index) => {
          const imageUrl = category.image || 
                           (imagesData.actualImages && imagesData.actualImages[index % imagesData.actualImages.length]) || 
                           'https://via.placeholder.com/1200x600';

          return (
            <SwiperSlide key={index}>
              <div 
                className="service-slide" 
                style={{ 
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${imageUrl})` 
                }}
              >
                <div className="container slide__content">
                  <h3 className="slide__title">{category.kategoria}</h3>
                  <ul className="slide__list">
                    {category.lista.map((item, itemIndex) => (
                      <li key={itemIndex} className="slide__item">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ); 
        })}
      </Swiper>
			<Gallery />
    </section> 
  );
}