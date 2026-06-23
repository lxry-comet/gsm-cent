import { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { LuSend } from 'react-icons/lu'
import './Servis.css'
// npm install @emailjs/browser

import emailjs from '@emailjs/browser'

export default function Whatwedo() {
	const [notification, setNotification] = useState({
		show: false,
		message: '',
		type: ''
	})
	const [isModalOpen, setIsModalOpen] = useState(false)

	const [formData, setFormData] = useState({
		message: '',
		user_email: '',
		user_phone: '',
		phone_prefix: '+48'
	})

	const handleInputChange = e => {
		const { name, value } = e.target
		setFormData(prev => ({
			...prev,
			[name]: name === 'user_phone' ? value.replace(/\D/g, '') : value
		}))
	}

	const sendEmail = e => {
		e.preventDefault()

		const templateParams = {
			message: formData.message,
			user_email: formData.user_email,
			user_phone: `${formData.phone_prefix}${formData.user_phone}`,
			to_email: 'gsmcentserwis@gmail.com'
		}

		emailjs
			.send(
				'service_35igr38',
				'template_9qu188j',
				templateParams,
				'Vrc6GzB9CCg7sIjqJ' //pabic key
			)
			.then(
				result => {
					setNotification({
						show: true,
						message: 'Wiadomość wysłana pomyślnie!',
						type: 'success'
					})
					setIsModalOpen(false)
					setFormData({ message: '', user_email: '', user_phone: '' }) // Reset
				},
				error => {
					setNotification({
						show: true,
						message: 'Błąd wysyłki: ' + error.text,
						type: 'error'
					})
				}
			)
	}

	useEffect(() => {
		if (!notification.show) return
		const timer = setTimeout(
			() => setNotification({ show: false, message: '', type: '' }),
			4200
		)
		return () => clearTimeout(timer)
	}, [notification])

	const closeNotification = () =>
		setNotification({ show: false, message: '', type: '' })

	return (
		<section className='servis'>
			{notification.show && (
				<div
					className={`servis-notification servis-notification--${notification.type}`}
					role='status'
				>
					<span>{notification.message}</span>
					<button
						type='button'
						className='servis-notification__close'
						onClick={closeNotification}
						aria-label='Zamknij powiadomienie'
					>
						×
					</button>
				</div>
			)}
			<div className='container servis__container'>
				<h2 className='servis__title'>SKONTAKTUJ SIĘ Z NAMI</h2>
				<textarea
					name='message'
					value={formData.message}
					onChange={handleInputChange}
					placeholder='Opisz tutaj swój problem...'
				/>
				<button
					className='servis__btn-open'
					onClick={() => setIsModalOpen(true)}
				>
					WYŚLIJ ZAPYTANIE <LuSend size='20' />
				</button>
			</div>

			{isModalOpen && (
				<div
					className='servis-modal__overlay'
					onClick={() => setIsModalOpen(false)}
				>
					<div
						className='servis-modal__window'
						onClick={e => e.stopPropagation()}
					>
						<button
							className='servis-modal__close'
							onClick={() => setIsModalOpen(false)}
						>
							<FaTimes />
						</button>

						<form className='servis-modal__form' onSubmit={sendEmail}>
							<h3>Podaj dane kontaktowe</h3>
							<div className='servis-modal__phone-wrapper'>
								<select
									name='phone_prefix'
									value={formData.phone_prefix}
									onChange={handleInputChange}
									className='servis-modal__select'
								>
									<option value='+48'>+48</option>
									<option value='+49'>+49</option>
									<option value='+43'>+43</option>
									<option value='+41'>+41</option>
								</select>
								<input
									type='tel'
									name='user_phone'
									value={formData.user_phone}
									onChange={handleInputChange}
									placeholder='Numer telefonu'
									required
									className='servis-modal__input servis-modal__input--phone'
									inputMode='tel'
									pattern='[0-9]*'
									maxLength={15}
								/>
							</div>
							<input
								type='email'
								name='user_email'
								value={formData.user_email}
								onChange={handleInputChange}
								placeholder='Adres e-mail'
								required
								className='servis-modal__input servis-modal__input--email'
							/>
							<button type='submit' className='servis-modal__submit'>
								POTWIERDŹ I WYŚLIJ
							</button>
						</form>
					</div>
				</div>
			)}
		</section>
	)
}
