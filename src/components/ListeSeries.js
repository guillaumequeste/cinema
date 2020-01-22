import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Header from './Header'
import Footer from './Footer'
import series from '../series.json'
import './ListeSeries.css'
import {Helmet} from "react-helmet"

class ListeSeries extends Component {
    state = {
        search : ""
    }
    renderSerie = serie =>{
        return (
            <div>
                { serie.name }
            </div>
        )
    }
    onchange = e =>{
        this.setState({ search : e.target.value });
    }
  
    render () {
        const {search} = this.state;
        const filteredSeries = series.filter( serie =>{
                return serie.name.toLowerCase().indexOf( search.toLowerCase() ) !== -1
        })
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Liste de séries</title>
                    <link rel="canonical" href="http://cinema.guillaumequeste.fr/liste_series" />
                    <meta name="keywords" content="Guillaume Queste developpeur web portfolio projet react liste series" />
                    <meta name="description" content="Liste de series" />
                    <meta property="og:title" content="Liste de series" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="http://cinema.guillaumequeste.fr/liste_series" />
                    <meta property="og:image" content="http://www.guillaumequeste.fr/img/cinema.png" />
                    <meta property="og:locale" content="fr_FR" />
                    <meta property="og:title" content="Liste de series" />
                    <meta property="og:description" content="Liste de series" />
                    <meta property="og:site_name" content="Liste de series" />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:title" content="Liste de series" />
                    <meta name="twitter:description" content="Liste de series" />
                    <meta name="twitter:image" content="http://www.guillaumequeste.fr/img/cinema.png" />
                </Helmet>
                <Header />
                <div className="searchBar">
                    <input placeholder="Rechercher une série" onChange={this.onchange} className="inputSearchBar"/>
                </div>
                <div className="bodyListeSeries">
                    {filteredSeries.map(({id, name}) => (
                        <Link to={`/serie/${id}`} 
                                key={id}
                                className="itemListeSeries lien">{name}</Link>
                    ))}
                </div>
                <Footer />
            </div>
        )
    }
}

export default ListeSeries