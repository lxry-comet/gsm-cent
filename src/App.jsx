
import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'
import useFilter from './Filter/Filter.jsx'

import './App.css'

const Hero = lazy(() => import('./Hero/Hero.jsx'))
const Servis = lazy(() => import('./Servis/Servis.jsx'))
const About = lazy(() => import('./About/About.jsx'))
const Reviews = lazy(() => import('./Reviews/Reviews.jsx'))
const Services = lazy(() => import('./Services/Services.jsx'))
const Brands = lazy(() => import('./Brands/Brands.jsx'))
const Price = lazy(() => import('./Price/Price.jsx'))

const pageMetadata = {
  '/': {
    title: 'Serwis iPhone Szczecin – Apple-GSM',
    description:
      'Serwis telefonów w Szczecinie. Sprawdź dostępne naprawy, cennik i skontaktuj się z Apple-GSM.',
  },
  '/cennik': {
    title: 'Cennik napraw telefonów – Szczecin | Apple-GSM',
    description:
      'Sprawdź cennik napraw telefonów w Apple-GSM w Szczecinie. Zapytaj o koszt naprawy swojego urządzenia.',
  },
  '/uslugi': {
    title: 'Usługi serwisowe telefonów – Szczecin | Apple-GSM',
    description:
      'Poznaj zakres usług serwisowych, diagnostyki i napraw telefonów oferowanych przez Apple-GSM w Szczecinie.',
  },
  '/co-naprawiamy': {
    title: 'Jakie telefony naprawiamy? | Apple-GSM Szczecin',
    description:
      'Sprawdź marki i modele telefonów obsługiwane przez serwis Apple-GSM w Szczecinie.',
  },
}

function NotFound() {
  return (
    <main className="not-found">
      <h1>Nie znaleziono strony</h1>
      <p>Sprawdź adres lub wróć na stronę główną.</p>
      <a href="/">Strona główna</a>
    </main>
  )
}

export default function App() {
  const { state } = useFilter()

  return (
    <div className="App">
      <Header />

      <Suspense fallback={<div className="loading">Ładowanie...</div>}>
        <Routes>
          {Object.entries(pageMetadata).map(([path, metadata]) => (
            <Route
              key={path}
              path={path}
              element={
                <>
                  <Helmet>
                    <title>{metadata.title}</title>
                    <meta name="description" content={metadata.description} />
                    <link rel="canonical" href={`https://apple-gsm.pl${path === '/' ? '/' : path}`} />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="pl_PL" />
                    <meta property="og:site_name" content="Apple GSM" />
                    <meta property="og:title" content={metadata.title} />
                    <meta property="og:description" content={metadata.description} />
                    <meta property="og:url" content={`https://apple-gsm.pl${path}`} />
                    <meta property="og:image" content="https://apple-gsm.pl/images/servis.webp" />
                  </Helmet>

                  {path === '/' && (
                    <>
                      <Hero />
                      <About />
                      <Reviews />
                      <Servis />
                    </>
                  )}

                  {path === '/cennik' && (
                    <>
                      <Price />
                      <Servis />
                    </>
                  )}

                  {path === '/uslugi' && (
                    <>
                      <Services models={state.modeleTel} />
                      <Servis services={state.uslugi} />
                    </>
                  )}

                  {path === '/co-naprawiamy' && <Brands />}
                </>
              }
            />
          ))}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  )
}
