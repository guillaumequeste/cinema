import React, { Component } from 'react'
import './ErrorNotFound.css'
import Header from './Header'
import Footer from './Footer'
import {Helmet} from "react-helmet"

class ErrorNotFound extends Component {
    render () {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Contact</title>
                    <link rel="canonical" href="http://cinema.guillaumequeste.fr/" />
                    <meta name="keywords" content="Guillaume Queste developpeur web portfolio projet react erreur" />
                    <meta name="description" content="Erreur" />
                    <meta property="og:title" content="Erreur" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="http://cinema.guillaumequeste.fr/" />
                    <meta property="og:image" content="http://www.guillaumequeste.fr/img/cinema.png" />
                    <meta property="og:locale" content="fr_FR" />
                    <meta property="og:title" content="Erreur" />
                    <meta property="og:description" content="Erreur" />
                    <meta property="og:site_name" content="Erreur" />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:title" content="Erreur" />
                    <meta name="twitter:description" content="Erreur" />
                    <meta name="twitter:image" content="http://www.guillaumequeste.fr/img/cinema.png" />
                </Helmet>
                <Header />
                <div className="bodyError">
                    <div className="error">
                        <h1 className="msgError">Il n'y a rien ici...</h1>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ErrorNotFound