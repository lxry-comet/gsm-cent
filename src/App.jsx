import React from 'react'

import Reviews from './Reviews/Reviews.jsx'

import './App.css'

export default function App() {
	return (
		<div className='App'>
			<div className='header'>
				{/* header */}
				<div className="container header__container">
					<h1 className='header__title'>GSM-CENT</h1>
				<div className='header__kontakt'>
					<a href='tel:+48 697 020 972'>+48 697 020 972</a>
					<a href='mailto:gsmcent@tlen.pl'>gsmcent@tlen.pl</a>
				</div>
				</div>
			</div>{' '}
			{/* header */}
			<div className='hero'>
				{/* hero */}
				<div className="container hero__container">
					<h2 className='hero__title'>SERWIS GSM-CENT</h2>
				<p className='hero__discription'>
					Serwis telefonów, komputerów, laptopów,nawigacji oraz konsoli.
				</p>
				<p className='hero__slogan'>MAMY TĘ MOC!</p>
				<a className='numberButton' href='tel:+48 697 020 972'>
					+48 697 020 972
				</a>
				</div>
			</div>{' '}
			{/* hero */}
			<div className='about'>
				{' '}
				{/* about */}
				<h2 className='about__title'>W CZYM TKWI NASZA MOC?</h2>
				<div className='container about__container'>
					<div className='about__content'>
						{/* <img src="" alt="" /> */}
						<h3 className='about__content--title'>
							Gwarancja i bezpieczeństwo
						</h3>
						<p className='about__content--description'>
							Na każdą naprawę udzielamy pisemnej gwarancji. Działamy legalnie i
							przejrzyście – w naszym lombardzie Twoje przedmioty są bezpieczne.
						</p>
					</div>
					<div className='about__content'>
						{/* <img src="" alt="" /> */}
						<h3 className='about__content--title'>Uczciwa wycena od ręki</h3>
						<p className='about__content--description'>
							Skup złota, srebra i elektroniki opieramy na aktualnych cenach
							rynkowych. Gotówkę wypłacamy natychmiast, bez zbędnych
							formalności.
						</p>
					</div>
					<div className='about__content'>
						{/* <img src="" alt="" /> */}
						<h3 className='about__content--title'>Jakości</h3>
						<p className='about__content--description'>
							Na każdą naprawę udzielamy pisemnej gwarancji. Działamy legalnie i
							przejrzyście – w naszym lombardzie Twoje przedmioty są bezpieczne.
						</p>
					</div>
				</div>
			</div>{' '}
			{/* whatwedo */}
			<div className='whatwedo'>
				{' '}
				<div className="container whatwedo__container">
									<h2 className='whatwedo__title'>KIM JESTEŚMY</h2>
				<p className='whatwedo__discription'>
					Serwis telefonów, komputerów, laptopów,nawigacji oraz konsoli.
				</p>
				<p className='whatwedo__slogan'>MAMY TĘ MOC!</p>
				<a className='numberButton' href='tel:+48 697 020 972'>
					+48 697 020 972
				</a>
				</div>
			</div>
			{/* whatwedo */}
			<Reviews />
      <div className="footer">
        <div className="footer__container">
          <h2 className="footer__title">GSM-CENT</h2>

          <div className="footer__container--elemetns">
          <div className="footer__content--contact">

            <a href='tel:+48 697 020 972'>+48 697 020 972</a>
					  <a href='mailto:gsmcent@tlen.pl'>gsmcent@tlen.pl</a>
            <a href="https://maps.app.goo.gl/Rd7J6YCVA3ewDgLV9">Bolesława Krzywoustego 54/U4, 70-315 Szczecin</a>
            <p className="footer__whenopenned">
              Pon-Pt: 09:00 - 17:00
            </p>
          </div>
          <div className="footer__content">
            <p className="footer__media">
              BĄDŹ NA BIEŻĄCO
            </p>
            {/* <a href="" className="instagram"></a> */}
            {/* <a href="" className="facebook"></a> */}
          </div>
          <div className="footer__content">
            <p className="footer__whereyoucanfindus">
              GDZIE NAZ ZNALEŹĆ
            </p>
            <a href="./" className="googlephotomaps"></a>
          </div>
          </div>
        </div>
        <p className="footer__text">© 2026 GSM-cent | Serwis iPhone | Naprawa Telefonów i Laptopów | Skup Złota i Lombard</p>
      </div>
		</div>
	)
}
