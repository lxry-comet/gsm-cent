import price from '../json/price.json'
import './Price.css'

export default function Price() {
	return (
		<section className='price'>
			<div className='container price__container'>
					<div className='price__list-wrapper'>
						<h2 className='price__title'>{price.usluga}</h2>

						<ul className='price__list'>
							{price.cennik.map((pozycja, index) => (
								<li key={index} className='price__item'>
									<div className='price__card'>
										<h3 className='price__name'>{pozycja.modele}</h3>
										<p className='price__model'>
											{pozycja.cena} {pozycja.waluta}
										</p>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
		</section>
	)
}
