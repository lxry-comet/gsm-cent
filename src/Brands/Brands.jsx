
import brandsData from '../json/brands.json'
import './Brands.css'

export default function Brands() {
  return (
    <main className="brands">
      <div className="container brands__container">
        <div className="serwis">
          <img
            className="brands__serwis--image naprawa"
            src="/images/servis.webp"
            alt="Serwis telefonów Apple-GSM"
            width="250"
            height="300"
          />
        </div>

        <section className="container__naprawa">
          <div className="img__container">
            <img
              className="brands__model--image naprawa"
              src="/images/ip_before.png"
              alt="Telefon przed naprawą"
              width="250"
              height="300"
              loading="lazy"
            />
          </div>

          <div className="brands__content">
            <h1 className="brands__title">
              Jakie marki telefonów naprawiamy w Szczecinie?
            </h1>

            <p className="brands__description">
              Sprawdź marki telefonów obsługiwane przez nasz serwis.
              Skontaktuj się z nami, aby potwierdzić możliwość naprawy
              konkretnego modelu i poznać dostępny zakres usług.
            </p>

            <ul className="brands__list">
              {brandsData.brands.map((brand) => (
                <li key={brand.id} className="brands__item">
                  <div className="brands__card">
                    <h2 className="brands__name">{brand.brand}</h2>

                    {brand.model_series && (
                      <p className="brands__model">
                        {brand.model_series}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="img__container">
            <img
              className="brands__model--image naprawa"
              src="/images/ip_after.webp"
              alt="Telefon po naprawie"
              width="250"
              height="300"
              loading="lazy"
            />
          </div>
        </section>

        <div className="img__container">
          <img
            className="brands__model--image beaforeAfterService"
            src="/images/do_i_po.webp"
            alt="Porównanie telefonu przed naprawą i po naprawie"
            width="600"
            height="400"
            loading="lazy"
          />
        </div>
      </div>
    </main>
  )
}
