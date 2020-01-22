import React, { Component } from 'react'
import './Contact.css'
import Header from './Header'
import Footer from './Footer'
import {Helmet} from "react-helmet"

class Contact extends Component {
    render () {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Contact</title>
                    <link rel="canonical" href="http://cinema.guillaumequeste.fr/contact" />
                    <meta name="keywords" content="Guillaume Queste developpeur web portfolio projet react contact" />
                    <meta name="description" content="Contact" />
                    <meta property="og:title" content="Contact" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="http://cinema.guillaumequeste.fr/contact" />
                    <meta property="og:image" content="http://www.guillaumequeste.fr/img/cinema.png" />
                    <meta property="og:locale" content="fr_FR" />
                    <meta property="og:title" content="Contact" />
                    <meta property="og:description" content="Contact" />
                    <meta property="og:site_name" content="Contact" />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:title" content="Contact" />
                    <meta name="twitter:description" content="Contact" />
                    <meta name="twitter:image" content="http://www.guillaumequeste.fr/img/cinema.png" />
                </Helmet>
                <Header />
                <div className="bodyContact">
                    <div className="contact">
                        <h3 className="msgContact">guillaume.queste@laposte.net</h3>
                        <a href="http://www.guillaumequeste.fr" title="portfolio de Guillaume Queste" target="_blank" className="msgContact">http://www.guillaumequeste.fr</a>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Contact