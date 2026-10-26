
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Gallery from '../Gallery/Gallery.jsx'
import imagesData from '../json/images.json'
import servicesData from '../json/services.json'

import 'swiper/css'
import 'swiper/css/navigation'
import './Services.css'

export default function Services() {
  const categories = servicesData.uslugi_serwisowe ?? []
  const images = imagesData.actualImages ?? []

  return (
    <main className="services">
      <header className="services__intro">
        <h1 className="services__title">
          Usługi serwisu telefonów w Szczecinie
        </h1>

        <p className="services__description">
          Sprawdź zakres usług serwisowych, diagnostyki i pomocy
          z oprogramowaniem. Skontaktuj się z nami, aby potwierdzić
          możliwość naprawy konkretnego urządzenia.
        </p>
      </header>

      {categories.length > 0 && (
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          loop={categories.length > 1}
          className="services__slider"
        >
          {categories.map((category, index) => {
            const imageUrl =
              category.image || images[index % (images.length || 1)]

            return (
              <SwiperSlide key={category.kategoria}>
                <div
                  className="service-slide"
                  style={
                    imageUrl
                      ? {
                          backgroundImage: `linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url("${imageUrl}")`,
                        }
                      : undefined
                  }
                >
                  <h2 className="slide__title">
                    {category.kategoria}
                  </h2>

                  <ul className="slide__list">
                    {category.lista.map((item) => (
                      <li key={item} className="slide__item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      )}

      <div className="container__services">
        {categories.map((category) => (
          <section
            key={category.kategoria}
            className="services__category"
          >
            <h2 className="services__category-title">
              {category.kategoria}
            </h2>

            <ul className="services__category-list">
              {category.lista.map((item) => (
                <li key={item} className="services__category-item">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <Gallery />
    </main>
  )
}
