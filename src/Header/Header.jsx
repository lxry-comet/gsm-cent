import { useState } from 'react'
import brandsData from '../json/brands.json'
import servicesData from '../json/services.json'

import './Header.css'
import { FaPhone } from 'react-icons/fa6'
import { FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import { RxHamburgerMenu } from 'react-icons/rx'

export default function Header({ onSelectHome, onSelectUslugi, onSelectRepair }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showBrands, setShowBrands] = useState(false)
  const [showServices, setShowServices] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
    setShowBrands(false)
    setShowServices(false)
  }

  // Funkcja pomocnicza do nawigacji zamykająca modal
  const handleNavClick = (navFunction) => {
    navFunction(); // Wywołuje funkcję z propsów (zmiana widoku w App.js)
    setIsModalOpen(false); // Zamyka burger menu
  }

  return (
    <header className='header'>
      <div className='container header__container'>
        <div className='header__title--container' onClick={() => handleNavClick(onSelectHome)} style={{cursor: 'pointer'}}>
          {/* <span className='header__title'>GSM-CENT</span> */}
          <span className='header__title'>APPLE-GSM</span>

          <span className='header__title--after'>IPHONE SZCZECIN</span>
        </div>

        {/* Nawigacja desktopowa */}
        <nav className="header__nav">
          <div className="header__nav-link-btn" onClick={onSelectHome}>Strona Główna</div>
          <div className="header__nav-link-btn" onClick={onSelectUslugi}>Usługi</div>
          <div className="header__nav-link-btn" onClick={onSelectRepair}>Co naprawiamy</div>
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

      {/* MODAL MENU - TO TEGO BRAKOWAŁO */}
      {isModalOpen && (
        <div className='modal__overlay' onClick={toggleModal}>
          <div className='modal__window' onClick={e => e.stopPropagation()}>
            
            <button className='modal__close' onClick={toggleModal}>
              <FaTimes />
            </button>

            <nav className='modal__nav'>
              {/* Opcje główne w burgerze */}
              <div className="modal__link-main" onClick={() => handleNavClick(onSelectHome)}>
                Strona Główna
              </div>

              {/* Rozwijane Modele Telefonów */}
              <div className='modal__dropdown'>
                <div 
                  onClick={() => setShowBrands(!showBrands)} 
                  className='modal__link-main'
                  style={{cursor: 'pointer'}}
                >
                  Marki telefonów które naprawiamy {showBrands ? <FaChevronUp /> : <FaChevronDown />}
                </div>

                {showBrands && (
                  <ul className='modal__brands-list'>
                    {brandsData.brands.map(brand => (
                      <li key={brand.id}>
                        <a href={`#${brand.brand.toLowerCase()}`} onClick={() => {handleNavClick(onSelectRepair)}}>
                          {brand.brand} {brand.model_series || ''}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Rozwijane Usługi */}
              <div className='modal__dropdown'>
                <div 
                  onClick={() => setShowServices(!showServices)} 
                  className='modal__link-main'
                  style={{cursor: 'pointer'}}
                >
                  Usługi {showServices ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                
                {showServices && (
                  <div className="modal__brands-list">
                    <div onClick={() => handleNavClick(onSelectUslugi)} style={{padding: '12px', color: 'var(--orange)', fontWeight: 'bold', cursor: 'pointer'}}>
                      Zobacz wszystkie usługi →
                    </div>
                  </div>
                )}
              </div>

              {/* Kontakt w wersji mobilnej */}
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