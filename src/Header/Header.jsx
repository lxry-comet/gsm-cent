import { useState, useEffect, useRef, useCallback } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { createPortal } from 'react-dom'

import './Header.css'
import { FaPhone, FaTimes, FaApple } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import { RxHamburgerMenu } from 'react-icons/rx'

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const closeButtonRef = useRef(null)

  const closeModal = useCallback(() => setIsModalOpen(false), [])
  const toggleModal = () => setIsModalOpen((value) => !value)

  useEffect(() => {
    if (!isModalOpen) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeModal()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isModalOpen, closeModal])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 951px)')
    const onChange = (event) => {
      if (event.matches) closeModal()
    }

    mediaQuery.addEventListener('change', onChange)
    return () => mediaQuery.removeEventListener('change', onChange)
  }, [closeModal])

  const navClass = ({ isActive }) =>
    `header__nav-link-btn${isActive ? ' active' : ''}`

  const mobileNavClass = ({ isActive }) =>
    `modal__link-main${isActive ? ' active' : ''}`

  return (
    <header className="header">
      <div className="container header__container">
        <Link
          to="/"
          className="header__title--container"
          aria-label="Apple-GSM — strona główna"
          onClick={closeModal}
        >
          <span className="header__title">
            APPLE<FaApple />GSM
          </span>
          <span className="header__title--after">IPHONE SZCZECIN</span>
        </Link>

        <nav className="header__nav" aria-label="Menu główne">
          <NavLink to="/" end className={navClass}>
            Strona główna
          </NavLink>
          <NavLink to="/uslugi" className={navClass}>
            Usługi
          </NavLink>
          <NavLink to="/co-naprawiamy" className={navClass}>
            Co naprawiamy
          </NavLink>
          <NavLink to="/cennik" className={navClass}>
            Cennik
          </NavLink>
        </nav>

        <div className="header__kontakt">
          <a className="header__kontakt--tel" href="tel:+48697020972">
            <FaPhone /> +48 697 020 972
          </a>
          <a
            className="header__kontakt--email"
            href="mailto:gsmcentserwis@gmail.com"
          >
            <IoIosMail /> gsmcentserwis@gmail.com
          </a>
        </div>

        <button
          className="header__burger"
          type="button"
          onClick={toggleModal}
          aria-label={isModalOpen ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={isModalOpen}
          aria-controls="mobile-navigation"
        >
          {isModalOpen ? <FaTimes /> : <RxHamburgerMenu />}
        </button>
      </div>

      {isModalOpen && (
        <div className="modal__overlay" onClick={closeModal}>
          <div
            className="modal__window"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              className="modal__close"
              type="button"
              onClick={closeModal}
              aria-label="Zamknij menu"
            >
              <FaTimes />
            </button>

            <nav
              className="modal__nav"
              id="mobile-navigation"
              aria-label="Menu mobilne"
            >
              <NavLink
                to="/"
                end
                className={mobileNavClass}
                onClick={closeModal}
              >
                Strona główna
              </NavLink>

              <NavLink
                to="/uslugi"
                className={mobileNavClass}
                onClick={closeModal}
              >
                Usługi
              </NavLink>

              <NavLink
                to="/co-naprawiamy"
                className={mobileNavClass}
                onClick={closeModal}
              >
                Co naprawiamy
              </NavLink>

              <NavLink
                to="/cennik"
                className={mobileNavClass}
                onClick={closeModal}
              >
                Cennik
              </NavLink>

              <div className="modal__mobile-contact">
                <a href="tel:+48697020972">
                  <FaPhone /> +48 697 020 972
                </a>
                <a href="mailto:gsmcentserwis@gmail.com">
                  <IoIosMail /> gsmcentserwis@gmail.com
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}