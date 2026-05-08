export default function Footer() {
	return (
		<footer className='footer'>
			<div className='footer__container'>
				<div className="footer__title--container">
									<h2 className='footer__title'>GSM-CENT</h2>
			<span className='footer__title--after'>IPHONE SZCZECIN</span>
				</div>


				<div className='footer__container--elemetns'>
					<div className='footer__content--contact'>
						<a className='footer__contact--tel' href='tel:+48 697 020 972'>+48 697 020 972</a>
						<a className='footer__contact--email' href='mailto:gsmcentserwis@gmail.com'>gsmcentserwis@gmail.com</a>
						<a className='footer__contact--address' href='https://maps.app.goo.gl/Rd7J6YCVA3ewDgLV9'>
							Bolesława Krzywoustego 54/U4, 70-315 Szczecin
						</a>
						<p className='footer__whenopenned'>Pon-Pt: 09:00 - 17:00 | Sob: Na telefon</p>
						
					</div>
					<div className='footer__content'>
						<p className='footer__media'>BĄDŹ NA BIEŻĄCO</p>
						{/* <a href="" className="instagram"></a> */}
						<a href="https://www.facebook.com/gsmceent/directory_contact_info" className="facebook">F</a>
						<a href="https://wa.me/48697020972" className="whatsapp">W</a>
					</div>
					<div className='footer__content'>
						<p className='footer__whereyoucanfindus'>GDZIE NAZ ZNALEŹĆ</p>
						<a href='./' className='googlephotomaps'>
						<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d594.3248261858496!2d14.5337807!3d53.4273565!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa093cb92796d1%3A0x97a1ea3ad805fc7d!2siPhone%20Serwis%20Szczecin!5e0!3m2!1suk!2spl!4v1778245590197!5m2!1suk!2spl" width="400" height="300" allowFullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
						</a>

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
