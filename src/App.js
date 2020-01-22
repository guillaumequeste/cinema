import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import {Helmet} from "react-helmet"

const App = () => (
  <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Projet React cinema series</title>
        <link rel="canonical" href="http://cinema.guillaumequeste.fr" />
        <meta name="keywords" content="Guillaume Queste developpeur web portfolio projet react cinema series" />
        <meta name="description" content="Projet React cinema series" />
        <meta property="og:title" content="Projet React cinema series" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://cinema.guillaumequeste.fr" />
        <meta property="og:image" content="http://www.guillaumequeste.fr/img/cinema.png" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:title" content="Projet React cinema series" />
        <meta property="og:description" content="Projet React cinema series" />
        <meta property="og:site_name" content="Projet React cinema series" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Projet React cinema series" />
        <meta name="twitter:description" content="Projet React cinema series" />
        <meta name="twitter:image" content="http://www.guillaumequeste.fr/img/cinema.png" />
      </Helmet>
    <Header />
    <div className="app">
      <h2 className="intro">La liste de films présente sur ce site est purement subjective. De plus, il n'y a aucun classement car celui-ci varie en fonction de l'humeur du jour.</h2>
    </div>
    <Footer />
  </>
)

export default App;