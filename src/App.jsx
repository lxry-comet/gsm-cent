import React from 'react'

import Header from './Header/Header.jsx'
import Hero from './Hero/Hero.jsx'
import Servis from './Servis/Servis.jsx'
import About from './About/About.jsx'
import Reviews from './Reviews/Reviews.jsx'
import Footer from './Footer/Footer.jsx'

import './App.css'

export default function App() {
	return (
		<div className='App'>
			<Header />
			<Hero />
			<About />
			<Servis />
			<Reviews />
			<Footer/>
		</div>
	)
}