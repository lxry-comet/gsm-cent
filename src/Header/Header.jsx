import { useState } from 'react'
import brandsData from '../json/brands.json'
import servicesData from '../json/services.json'

import './Header.css'
import { FaPhone } from 'react-icons/fa6'
import { FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import { RxHamburgerMenu } from 'react-icons/rx'

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showBrands, setShowBrands] = useState(false)
  const [showServices, setShowServices] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
    setShowBrands(false)
    setShowServices(false)
  }
  const openSection = (section) => {
    setIsModalOpen(true);
    if (section === 'brands') {
      setShowBrands(true);
      setShowServices(false);
    } else {
      setShowServices(true);
      setShowBrands(false);
    }
  }

  return (
    <header className='header'>
      <div className='container header__container'>
        <div className='header__title--container'>
          <a href='#' className='header__title'>GSM-CENT</a>
          <span className='header__title--after'>IPHONE SZCZECIN</span>
        </div>
        <nav className='header__nav'>
          <button 
            className='header__nav-link-btn' 
            onClick={() => openSection('brands')}
          >
            Modele telefonów
          </button>
          <button 
            className='header__nav-link-btn' 
            onClick={() => openSection('services')}
          >
            Usługi
          </button>
        </nav>

        <div className='header__kontakt'>
          <a className='header__kontakt--tel' href='tel:+48 697 020 972'>
            <FaPhone /> +48 697 020 972
          </a>
          <a className='header__kontakt--email' href='mailto:gsmcentserwis@gmail.com'>
            <IoIosMail /> gsmcentserwis@gmail.com
          </a>
        </div>

        <button className='header__burger' onClick={toggleModal}>
          <RxHamburgerMenu />
        </button>
      </div>

      {isModalOpen && (
  <div className='modal__overlay' onClick={toggleModal}>
    <div className='modal__window' onClick={e => e.stopPropagation()}>
      
      {/* Przycisk zamknięcia */}
      <button className='modal__close' onClick={toggleModal}>
        <FaTimes />
      </button>

      <nav className='modal__nav'>
        
        {/* SEKCJA MODELE */}
        <div className='modal__dropdown'>
          <a 
            href='#' 
            onClick={(e) => { e.preventDefault(); setShowBrands(!showBrands); setShowServices(false); }} 
            className='modal__link-main'
          >
            Modele telefonów {showBrands ? <FaChevronUp /> : <FaChevronDown />}
          </a>

          {showBrands && (
            <ul className='modal__brands-list'>
              {brandsData.brands.map(brand => (
                <li key={brand.id}>
                  <a href={`#${brand.brand.toLowerCase()}`} onClick={toggleModal}>
                    {brand.brand} {brand.model_series || ''}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className='modal__dropdown'>
          <a 
            href='#' 
            onClick={(e) => { e.preventDefault(); setShowServices(!showServices); setShowBrands(false); }} 
            className='modal__link-main'
          >
            Usługi {showServices ? <FaChevronUp /> : <FaChevronDown />}
          </a>
          
          {showServices && (
            <ul className='modal__brands-list modal__services-list'>
              {servicesData.uslugi_serwisowe.map((kat, index) => (
                <li key={index} className='modal__service-category'>
                  <strong className="modal__service-title">
                    {kat.kategoria}
                  </strong>
                  <ul className="modal__service-sublist">
                    {kat.lista.map((usluga, i) => (
                      <li key={i} className="modal__service-item">
                        {usluga}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="modal__mobile-contact">
            <a href='tel:+48 697 020 972'><FaPhone /> +48 697 020 972</a>
            <a href='mailto:gsmcentserwis@gmail.com'><IoIosMail /> gsmcentserwis@gmail.com</a>
        </div>
      </nav>
    </div>
  </div>
)}
    </header>
  )
}