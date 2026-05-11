import { useState } from 'react';
import './Servis.css';
import { LuSend } from "react-icons/lu";
import { FaTimes } from "react-icons/fa";
// npm install @emailjs/browser
import emailjs from '@emailjs/browser';

export default function Whatwedo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Jeden stan dla całego formularza
  const [formData, setFormData] = useState({
    message: '',
    user_email: '',
    user_phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Parametry zgodne z Twoim szablonem w EmailJS
    const templateParams = {
      message: formData.message,
      user_email: formData.user_email,
      user_phone: formData.user_phone,
      // to_email: 'twoj-email@gmail.com' 
    };

    emailjs.send(
      'service_fqjjv0y', 
      'template_unttv7r', 
      templateParams, 
      'bAWwmQSlDI8u-O5Gs'
    )
    .then((result) => {
        alert("Wiadomość wysłana pomyślnie!");
        setIsModalOpen(false);
        setFormData({ message: '', user_email: '', user_phone: '' }); // Reset
    }, (error) => {
        alert("Błąd wysyłki: " + error.text);
    });
  };
  return (
    <section className='servis'>
      <div className='container servis__container'>
        <h2 className='servis__title'>SKONTAKTUJ SIĘ Z NAMI</h2>
        <textarea 
          name="message" 
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Opisz tutaj swój problem..." 
        />
        <button className="servis__btn-open" onClick={() => setIsModalOpen(true)}>
          WYŚLIJ ZAPYTANIE  <LuSend size='20'/>
        </button>
      </div>

      {isModalOpen && (
        <div className="servis-modal__overlay" onClick={() => setIsModalOpen(false)}>
          <div className="servis-modal__window" onClick={(e) => e.stopPropagation()}>
            <button className="servis-modal__close" onClick={() => setIsModalOpen(false)}>
              <FaTimes />
            </button>
            
            <form className="servis-modal__form" onSubmit={sendEmail}>
              <h3>Podaj dane kontaktowe</h3>
              <input 
                type="tel" 
                name="user_phone"
                value={formData.user_phone}
                onChange={handleInputChange}
                placeholder="Numer telefonu" 
                required 
                className="servis-modal__input"
              />
              <input 
                type="email" 
                name="user_email"
                value={formData.user_email}
                onChange={handleInputChange}
                placeholder="Adres e-mail" 
                required 
                className="servis-modal__input"
              />
              <button type="submit" className="servis-modal__submit">
                POTWIERDŹ I WYŚLIJ
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}