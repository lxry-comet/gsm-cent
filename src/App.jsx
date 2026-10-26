import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './Header/Header.jsx'
const Hero = lazy(() => import('./Hero/Hero.jsx'))
const Servis = lazy(() => import('./Servis/Servis.jsx'))
const About = lazy(() => import('./About/About.jsx'))
const Reviews = lazy(() => import('./Reviews/Reviews.jsx'))
const Footer = lazy(() => import('./Footer/Footer.jsx'))
const Services = lazy(() => import('./Services/Services.jsx'))
const Brands = lazy(() => import('./Brands/Brands.jsx'))
const Price = lazy(() => import('./Price/Price.jsx'))

import './App.css'
import useFilter from './Filter/Filter.jsx'

export default function App() {
	const { state } = useFilter()

	return (
		<div className='App'>
			<Header />

			<Suspense fallback={<div className='loading'>Ładowanie...</div>}>
				<Routes>
					<Route
						path='/'
						element={
							<>
								<Hero />
								<About />
								<Reviews />
								<Servis />
							</>
						}
					/>
					<Route
						path='/cennik'
						element={
							<>
								<Price />
								<Servis />
							</>
						}
					/>
					<Route
						path='/uslugi'
						element={
							<>
								<Services models={state.modeleTel} />
								<Servis services={state.uslugi} />
							</>
						}
					/>
					<Route path='/co-naprawiamy' element={<Brands />} />
					<Route path='*' element={<h1>Nie znaleziono strony</h1>} />
				</Routes>

				<Footer />
			</Suspense>
		</div>
	)
}