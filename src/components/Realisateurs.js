import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import './Realisateurs.css'
import {Helmet} from "react-helmet"

class Realisateurs extends Component {
  
    render () {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Liste de réalisateurs</title>
                    <link rel="canonical" href="http://cinema.guillaumequeste.fr/realisateurs" />
                    <meta name="keywords" content="Guillaume Queste developpeur web portfolio projet react realisateurs" />
                    <meta name="description" content="Realisateurs" />
                    <meta property="og:title" content="Realisateurs" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="http://cinema.guillaumequeste.fr/realisateurs" />
                    <meta property="og:image" content="http://www.guillaumequeste.fr/img/cinema.png" />
                    <meta property="og:locale" content="fr_FR" />
                    <meta property="og:title" content="Realisateurs" />
                    <meta property="og:description" content="Realisateurs" />
                    <meta property="og:site_name" content="Realisateurs" />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:title" content="Realisateurs" />
                    <meta name="twitter:description" content="Realisateurs" />
                    <meta name="twitter:image" content="http://www.guillaumequeste.fr/img/cinema.png" />
                </Helmet>
                <Header />
                <div className="titrePageRealisateurs">Réalisateurs</div>
                <div className="bodyRealisateurs">
                    <div className="bodyReal">
                        <div className="real">
                            <div>
                                <img src={require("../img/realisateurs/alain_chabat.jpg")} className="imageReal" alt="alain_chabat"/>
                            </div>
                            <div className="nomReal">
                                Alain Chabat
                            </div>
                        </div>
                        <div className="real">
                            <div>
                                <img src={require("../img/realisateurs/alejandro_gonzalez_inarritu.jpg")} className="imageReal" alt="alejandro_gonzalez_inarritu"/>
                            </div>
                            <div className="nomReal">
                                Alejandro Gonzalez Inarritu
                            </div>
                        </div>
                        <div className="real">
                            <div>
                                <img src={require("../img/realisateurs/alfred_hitchcock.jpg")} className="imageReal" alt="alfred_hitchcock"/>
                            </div>
                            <div className="nomReal">
                                Alfred Hitchcock
                            </div>
                        </div>
                        <div className="real">
                            <div>
                                <img src={require("../img/realisateurs/brian_de_palma.jpg")} className="imageReal" alt="brian_de_palma"/>
                            </div>
                            <div className="nomReal">
                                Brian De Palma
                            </div>
                        </div>
                        <div className="real">
                            <div>
                                <img src={require("../img/realisateurs/christopher_nolan.jpg")} className="imageReal" alt="christopher_nolan"/>
                            </div>
                            <div className="nomReal">
                                Christopher Nolan
                            </div>
                        </div>
                        <div className="real">
                            <div>
                                <img src={require("../img/realisateurs/claude_chabrol.jpg")} className="imageReal" alt="claude_chabrol"/>
                            </div>
                            <div className="nomReal">
                                Claude Chabrol
                            </div>
                        </div>
                        <div className="real">
                            <div>
                                <img src={require("../img/realisateurs/david_fincher.jpg")} className="imageReal" alt="david_fincher"/>
                            </div>
                            <div className="nomReal">
                                David Fincher
                            </div>
                        </div>
                        <div className="real">
                            <div>
                                <img src={require("../img/realisateurs/david_lynch.jpg")} className="imageReal" alt="david_lynch"/>
                            </div>
                            <div className="nomReal">
                                David Lynch
                            </div>
                        </div>
                        <div className="real">
                            <div>
                                <img src={require("../img/realisateurs/francois_ozon.jpg")} className="imageReal" alt="francois_ozon"/>
                            </div>
                            <div className="nomReal">
                                François Ozon
                            </div>
                        </div>
                        <div className="real">
                            <div>
                                <img src={require("../img/realisateurs/fritz_lang.jpg")} className="imageReal" alt="fritz_lang"/>
                            </div>
                            <div className="nomReal">
                                Fritz Lang
                            </div>
                        </div>
                        <div className="real">
                            <div>
                                <img src={require("../img/realisateurs/georges_lautner.jpg")} className="imageReal" alt="georges_lautner"/>
                            </div>
                            <div className="nomReal">
                                Georges Lautner
                            </div>
                        </div>
                        <div className="real">
                            <div>
                                <img src={require("../img/realisateurs/georges_lucas.jpg")} className="imageReal" alt="georges_lucas"/>
                            </div>
                            <div className="nomReal">
                                Georges Lucas
                            </div>
                        </div>
                        <div className="real">
                            <div>
                                <img src={require("../img/realisateurs/henri_georges_clouzot.jpg")} className="imageReal" alt="henri_georges_clouzot"/>
                            </div>
                            <div className="nomReal">
                                Henri-Georges Clouzot
                            </div>
                        </div>
                        <div className="real">
                            <div>
                                <img src={require("../img/realisateurs/j_j_abrams.jpg")} className="imageReal" alt="j_j_abrams"/>
                            </div>
                            <div className="nomReal">
                                J. J. Abrams
                            </div>
                        </div>
                        <div className="real">
                            <div>
                                <img src={require("../img/realisateurs/julien_duvivier.jpg")} className="imageReal" alt="julien_duvivier"/>
                            </div>
                            <div className="nomReal">
                                Julien Duvivier
                            </div>
                        </div>
                        <div className="real">
                            <div>
                                <img src={require("../img/realisateurs/luc_besson.jpg")} className="imageReal" alt="luc_besson"/>
                            </div>
                            <div className="nomReal">
                                Luc Besson
                            </div>
                        </div>
                        <div className="real">
                            <div>
                                <img src={require("../img/realisateurs/luis_bunuel.jpg")} className="imageReal" alt="luis_bunuel"/>
                            </div>
                            <div className="nomReal">
                                Luis Bunuel
                            </div>
                        </div>
                        <div className="real">
                            <div>
                                <img src={require("../img/realisateurs/marcel_carne.jpg")} className="imageReal" alt="marcel_carne"/>
                            </div>
                            <div className="nomReal">
                                Marcel Carné
                            </div>
                        </div>
                        <div className="real">
                            <div>
                                <img src={require("../img/realisateurs/patrice_leconte.jpg")} className="imageReal" alt="patrice_leconte"/>
                            </div>
                            <div className="nomReal">
                                Patrice Leconte
                            </div>
                        </div>
                        <div className="real">
                            <div>
                                <img src={require("../img/realisateurs/peter_jackson.jpg")} className="imageReal" alt="peter_jackson"/>
                            </div>
                            <div className="nomReal">
                                Peter Jackson
                            </div>
                        </div>
                        <div className="real">
                            <div>
                                <img src={require("../img/realisateurs/quentin_tarantino.jpg")} className="imageReal" alt="quentin_tarantino"/>
                            </div>
                            <div className="nomReal">
                                Quentin Tarantino
                            </div>
                        </div>
                        <div className="real">
                            <div>
                                <img src={require("../img/realisateurs/robert_zemeckis.jpg")} className="imageReal" alt="robert_zemeckis"/>
                            </div>
                            <div className="nomReal">
                                Robert Zemeckis
                            </div>
                        </div>
                        <div className="real">
                            <div>
                                <img src={require("../img/realisateurs/sergio_leone.jpg")} className="imageReal" alt="sergio_leone"/>
                            </div>
                            <div className="nomReal">
                                Sergio Leone
                            </div>
                        </div>
                        <div className="real">
                            <div>
                                <img src={require("../img/realisateurs/spike_lee.jpg")} className="imageReal" alt="spike_lee"/>
                            </div>
                            <div className="nomReal">
                                Spike Lee
                            </div>
                        </div>
                        <div className="real">
                            <div>
                                <img src={require("../img/realisateurs/steven_spielberg.jpg")} className="imageReal" alt="steven_spielberg"/>
                            </div>
                            <div className="nomReal">
                                Steven Spielberg
                            </div>
                        </div>
                        <div className="real">
                            <div>
                                <img src={require("../img/realisateurs/tim_burton.jpg")} className="imageReal" alt="tim_burton"/>
                            </div>
                            <div className="nomReal">
                                Tim Burton
                            </div>
                        </div>
                        <div className="real">
                            <div>
                                <img src={require("../img/realisateurs/wes_craven.jpg")} className="imageReal" alt="wes_craven"/>
                            </div>
                            <div className="nomReal">
                                Wes Craven
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Realisateurs