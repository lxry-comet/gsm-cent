import React from 'react'

import Header from './Header/Header.jsx'
import Hero from './Hero/Hero.jsx'
import Servis from './Servis/Servis.jsx'
import About from './About/About.jsx'
import Reviews from './Reviews/Reviews.jsx'
import Footer from './Footer/Footer.jsx'
import Services from './Services/Services.jsx' 
import Brands from './Brands/Brands.jsx'

import useFilter from './Filter/Filter.jsx'; 
import './App.css'

export default function App() {
  const { state, setView } = useFilter();

  return (
    <div className='App'>
      <Header 
        onSelectUslugi={() => setView('uslugi')} 
        onSelectRepair={() => setView('repair')}
        onSelectHome={() => setView('home')} 
      />

      {state.currentView === 'uslugi' ? (
        <>
          <Services models={state.modeleTel} />
          <Servis services={state.uslugi} />
        </>
      ) : state.currentView === 'repair' ? (
        <>
          <Brands />
        </>
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
    </div>
  )
}