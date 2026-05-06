export default function Footer() {
	return (
		<footer className='footer'>
			<div className='footer__container'>
				<h2 className='footer__title'>GSM-CENT</h2>

				<div className='footer__container--elemetns'>
					<div className='footer__content--contact'>
						<a href='tel:+48 697 020 972'>+48 697 020 972</a>
						<a href='mailto:gsmcent@tlen.pl'>gsmcent@tlen.pl</a>
						<a href='https://maps.app.goo.gl/Rd7J6YCVA3ewDgLV9'>
							Bolesława Krzywoustego 54/U4, 70-315 Szczecin
						</a>
						<p className='footer__whenopenned'>Pon-Pt: 09:00 - 17:00</p>
					</div>
					<div className='footer__content'>
						<p className='footer__media'>BĄDŹ NA BIEŻĄCO</p>
						{/* <a href="" className="instagram"></a> */}
						{/* <a href="" className="facebook"></a> */}
					</div>
					<div className='footer__content'>
						<p className='footer__whereyoucanfindus'>GDZIE NAZ ZNALEŹĆ</p>
						<a href='./' className='googlephotomaps'></a>
					</div>
				</div>
			</div>
			<p className='footer__text'>
				© 2026 GSM-cent | Serwis iPhone | Naprawa Telefonów i Laptopów | Skup
				Złota i Lombard
			</p>
		</footer>
	)
}
