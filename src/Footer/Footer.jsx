import './Footer.css'
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoTime } from "react-icons/io5";

// social_media
import { FaFacebook } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

export default function Footer() {
	return (
		<footer className='footer'>
			<div className='footer__container'>
				<div className='footer__title--container'>
					<h2 className='footer__title'>GSM-CENT</h2>
					<span className='footer__title--after'>IPHONE SZCZECIN</span>
				</div>

				<div className='footer__container--elemetns'>
					<div className='footer__content--contact'>
						
						<a className='footer__contact--tel' href='tel:+48 697 020 972'>
							<FaPhone /> +48 697 020 972
						</a>
						<a
							className='footer__contact--email'
							href='mailto:gsmcentserwis@gmail.com'
						>
							<IoIosMail /> gsmcentserwis@gmail.com
						</a>
						<a
							className='footer__contact--address'
							href='https://maps.app.goo.gl/Rd7J6YCVA3ewDgLV9'
						>
							<FaMapMarkerAlt /> Bolesława Krzywoustego 54/U4, 70-315 Szczecin
						</a>
						<p className='footer__whenopenned'>
							<IoTime /> Pon-Pt: 09:00 - 17:00 | Sob: Na telefon
						</p>
					</div>
					<div className='footer__content'>
						<p className='footer__media'>BĄDŹ NA BIEŻĄCO</p>
						{/* <a href="" className="instagram"></a> */}
						<div className='footer__media--container'>
							<a
								href='https://www.facebook.com/gsmceent/directory_contact_info'
								className='facebook'
							>
								<FaFacebook size='40'/>
							</a>
							<a href='https://wa.me/48697020972' className='whatsapp'>
								<RiWhatsappFill size='40' />
							</a>
						</div>
					</div>
					<div className='footer__content'>
						<p className='footer__whereyoucanfindus'>GDZIE NAZ ZNALEŹĆ</p>
						<div className='googlephotomaps-wrapper'>
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2377.294484058614!2d14.5344405!3d53.4274427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa093cb92796d1%3A0x97a1ea3ad805fc7d!2siPhone%20Serwis%20Szczecin!5e0!3m2!1spl!2spl!4v1778332618187!5m2!1spl!2spl'
								loading='lazy'
								referrerpolicy='no-referrer-when-downgrade'
							></iframe>
						</div>
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
