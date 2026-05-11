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


        <nav className="header__nav">
          <div onClick={onSelectHome}>Strona Główna</div>
          <div onClick={onSelectUslugi}>Usługi</div>
          <div onClick={onSelectRepair}>Co naprawiamy</div>
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
    </header>
  )
}