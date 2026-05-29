import { Suspense, lazy } from 'react'

import Header from './Header/Header.jsx'
const Hero = lazy(() => import('./Hero/Hero.jsx'))
const Servis = lazy(() => import('./Servis/Servis.jsx'))
const About = lazy(() => import('./About/About.jsx'))
const Reviews = lazy(() => import('./Reviews/Reviews.jsx'))
const Footer = lazy(() => import('./Footer/Footer.jsx'))
const Services = lazy(() => import('./Services/Services.jsx'))
const Brands = lazy(() => import('./Brands/Brands.jsx'))

import './App.css'
import useFilter from './Filter/Filter.jsx'

export default function App() {
	const { state, setView } = useFilter()

	return (
		<div className='App'>
			<Header
				onSelectUslugi={() => setView('uslugi')}
				onSelectRepair={() => setView('repair')}
				onSelectHome={() => setView('home')}
			/>

			<Suspense fallback={<div className='loading'>Ładowanie...</div>}>
				{state.currentView === 'uslugi' ? (
					<>
						<Services models={state.modeleTel} />
						<Servis services={state.uslugi} />
					</>
				) : state.currentView === 'repair' ? (
					<Brands />
				) : (
					/* WIDOK: STRONA GŁÓWNA */
					<>
						<Hero />
						<About />
						<Reviews />
						<Servis />
					</>
				)}

				<Footer />
			</Suspense>
		</div>
	)
}
