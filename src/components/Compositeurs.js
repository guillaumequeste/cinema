import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import './Compositeurs.css'
import {Helmet} from "react-helmet"

class Compositeurs extends Component {
  
    render () {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Liste de réalisateurs</title>
                    <link rel="canonical" href="http://cinema.guillaumequeste.fr/compositeurs" />
                    <meta name="keywords" content="Guillaume Queste developpeur web portfolio projet react compositeurs" />
                    <meta name="description" content="Compositeurs" />
                    <meta property="og:title" content="Compositeurs" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="http://cinema.guillaumequeste.fr/compositeurs" />
                    <meta property="og:image" content="http://www.guillaumequeste.fr/img/cinema.png" />
                    <meta property="og:locale" content="fr_FR" />
                    <meta property="og:title" content="Compositeurs" />
                    <meta property="og:description" content="Compositeurs" />
                    <meta property="og:site_name" content="Compositeurs" />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:title" content="Compositeurs" />
                    <meta name="twitter:description" content="Compositeurs" />
                    <meta name="twitter:image" content="http://www.guillaumequeste.fr/img/cinema.png" />
                </Helmet>
                <Header />
                <div className="titrePageCompositeurs">Compositeurs</div>
                <div className="bodyCompositeurs">
                    <div className="bodyComp">
                        <div className="comp">
                            <div>
                                <img src={require("../img/compositeurs/alexandre_desplat.jpg")} className="imageComp" alt="alexandre_desplat"/>
                            </div>
                            <div className="nomComp">
                                    Alexandre Desplat
                            </div>
                        </div>
                        <div className="comp">
                            <div>
                                <img src={require("../img/compositeurs/claude_bolling.png")} className="imageComp" alt="claude_bolling"/>
                            </div>
                            <div className="nomComp">
                                    Claude Bolling
                            </div>
                        </div>
                        <div className="comp">
                            <div>
                                <img src={require("../img/compositeurs/danny_elfman.jpg")} className="imageComp" alt="danny_elfman"/>
                            </div>
                            <div className="nomComp">
                                Danny Elfman
                            </div>
                        </div>
                        <div className="comp">
                            <div>
                                <img src={require("../img/compositeurs/ennio_morricone.jpg")} className="imageComp" alt="ennio_morricone"/>
                            </div>
                            <div className="nomComp">
                                Ennio Morricone
                            </div>
                        </div>
                        <div className="comp">
                            <div>
                                <img src={require("../img/compositeurs/eric_serra.jpg")} className="imageComp" alt="eric_serra"/>
                            </div>
                            <div className="nomComp">
                                Eric Serra
                            </div>
                        </div>
                        <div className="comp">
                            <div>
                                <img src={require("../img/compositeurs/francis_lai.jpeg")} className="imageComp" alt="francis_lai"/>
                            </div>
                            <div className="nomComp">
                                Francis Lai
                            </div>
                        </div>
                        <div className="comp">
                            <div>
                                <img src={require("../img/compositeurs/georges_delerue.jpg")} className="imageComp" alt="georges_delerue"/>
                            </div>
                            <div className="nomComp">
                                Georges Delerue
                            </div>
                        </div>
                        <div className="comp">
                            <div>
                                <img src={require("../img/compositeurs/giorgio_moroder.jpg")} className="imageComp" alt="giorgio_moroder"/>
                            </div>
                            <div className="nomComp">
                                Giorgio Moroder
                            </div>
                        </div>
                        <div className="comp">
                            <div>
                                <img src={require("../img/compositeurs/gustavo_santaolalla.jpg")} className="imageComp" alt="gustavo_santaolalla"/>
                            </div>
                            <div className="nomComp">
                                Gustavo Santaolalla
                            </div>
                        </div>
                        <div className="comp">
                            <div>
                                <img src={require("../img/compositeurs/hans_zimmer.jpg")} className="imageComp" alt="hans_zimmer"/>
                            </div>
                            <div className="nomComp">
                                Hans Zimmer
                            </div>
                        </div>
                        <div className="comp">
                            <div>
                                <img src={require("../img/compositeurs/henry_mancini.jpeg")} className="imageComp" alt="henry_mancini"/>
                            </div>
                            <div className="nomComp">
                                Henry Mancini
                            </div>
                        </div>
                        <div className="comp">
                            <div>
                                <img src={require("../img/compositeurs/john_williams.jpg")} className="imageComp" alt="john_williams"/>
                            </div>
                            <div className="nomComp">
                                John Williams
                            </div>
                        </div>
                        <div className="comp">
                            <div>
                                <img src={require("../img/compositeurs/maurice_jarre.jpg")} className="imageComp" alt="maurice_jarre"/>
                            </div>
                            <div className="nomComp">
                                Maurice Jarre
                            </div>
                        </div>
                        <div className="comp">
                            <div>
                                <img src={require("../img/compositeurs/michael_giacchino.jpeg")} className="imageComp" alt="michael_giacchino"/>
                            </div>
                            <div className="nomComp">
                                Michael Giacchino
                            </div>
                        </div>
                        <div className="comp">
                            <div>
                                <img src={require("../img/compositeurs/michel_magne.jpg")} className="imageComp" alt="michel_magne"/>
                            </div>
                            <div className="nomComp">
                                Michel Magne
                            </div>
                        </div>
                        <div className="comp">
                            <div>
                                <img src={require("../img/compositeurs/philippe_rombi.jpeg")} className="imageComp" alt="philippe_rombi"/>
                            </div>
                            <div className="nomComp">
                                Philippe Rombi
                            </div>
                        </div>
                        <div className="comp">
                            <div>
                                <img src={require("../img/compositeurs/philippe_sarde.jpg")} className="imageComp" alt="philippe_sarde"/>
                            </div>
                            <div className="nomComp">
                                Philippe Sarde
                            </div>
                        </div>
                        <div className="comp">
                            <div>
                                <img src={require("../img/compositeurs/vladimir_cosma.jpg")} className="imageComp" alt="vladimir_cosma"/>
                            </div>
                            <div className="nomComp">
                                Vladimir Cosma
                            </div>
                        </div>
                        <div className="comp">
                            <div>
                                <img src={require("../img/compositeurs/yann_tiersen.jpeg")} className="imageComp" alt="yann_tiersen"/>
                            </div>
                            <div className="nomComp">
                                Yann Tiersen
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Compositeurs