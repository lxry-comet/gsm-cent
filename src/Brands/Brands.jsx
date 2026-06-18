import brandsData from '../json/brands.json'
import './Brands.css'

export default function Brands() {
	return (
		<section className='brands'>
			<div className='container brands__container'>
				<div className='serwis'>
					<img
						loading='lazy'
						className='brands__serwis--image naprawa'
						src='/images/servis.webp'
						alt='Naprawa'
					/>
				</div>
				<div className='img__container'>
					<img
						loading='lazy'
						className='brands__model--image beaforeAfterService'
						src='/images/do_i_po.webp'
						alt='Do i po naprawie'
					/>
				</div>
				<div className='container__naprawa'>
					<div className='img__container'>
						<img
							loading='lazy'
							className='brands__model--image naprawa'
							src='/images/ip_before.png'
							alt='Naprawa'
						/>
					</div>
					<ul className='brands__list'>
						<h2 className='brands__title'>Marki telefonów które naprawiamy</h2>

						{brandsData.brands.map(brand => (
							<li key={brand.id} className='brands__item'>
								<div className='brands__card'>
									<h3 className='brands__name'>{brand.brand}</h3>
									{brand.model_series && (
										<p className='brands__model'>{brand.model_series}</p>
									)}
								</div>
							</li>
						))}
					</ul>
					<div className='img__container'>
						<img
							loading='lazy'
							className='brands__model--image naprawa'
							src='/images/ip_after.webp'
							alt='Serwis'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
