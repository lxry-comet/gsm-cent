import './About.css'
export default function About() {
	return (
		<section className='about'>
			<h2 className='about__title'>W CZYM TKWI NASZA MOC?</h2>
			<div className='container about__container'>
				<div className='about__content'>
					{/* <img src="" alt="" /> */}
					<h3 className='about__content--title'>Gwarancja i bezpieczeństwo</h3>
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
						rynkowych. Gotówkę wypłacamy natychmiast, bez zbędnych formalności.
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
		</section>
	)
}
