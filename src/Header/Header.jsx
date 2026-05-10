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

  // Funkcja do otwierania konkretnej sekcji w modalu z poziomu paska Header
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

        {/* POPRAWIONA NAWIGACJA DESKTOPOWA */}
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
          {/* ... linki do tel i mail ... */}
        </div>

        <button className='header__burger' onClick={toggleModal}>
          <RxHamburgerMenu />
        </button>
      </div>

      {/* Modal Window (zostaje bez zmian, upewnij się tylko że brandsData.brands istnieje w Twoim JSONie) */}
      {/* ... kod modala ... */}
    </header>
  )
}