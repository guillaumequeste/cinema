import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Header from './Header'
import Footer from './Footer'
import films from '../films.json'
import './ListeFilms.css'
import {Helmet} from "react-helmet"

class ListeFilms extends Component {
    state = {
        search : ""
    }
    renderFilm = film =>{
        return (
            <div>
                { film.name }
            </div>
        )
    }
    onchange = e =>{
        this.setState({ search : e.target.value });
    }
  
    render () {
        const {search} = this.state;
        const filteredFilms = films.filter( film =>{
                return film.name.toLowerCase().indexOf( search.toLowerCase() ) !== -1
        })
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Liste de films</title>
                    <link rel="canonical" href="http://cinema.guillaumequeste.fr/liste_films" />
                    <meta name="keywords" content="Guillaume Queste developpeur web portfolio projet react liste films" />
                    <meta name="description" content="Liste de films" />
                    <meta property="og:title" content="Liste de films" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="http://cinema.guillaumequeste.fr/liste_films" />
                    <meta property="og:image" content="http://www.guillaumequeste.fr/img/cinema.png" />
                    <meta property="og:locale" content="fr_FR" />
                    <meta property="og:title" content="Liste de films" />
                    <meta property="og:description" content="Liste de films" />
                    <meta property="og:site_name" content="Liste de films" />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:title" content="Liste de films" />
                    <meta name="twitter:description" content="Liste de films" />
                    <meta name="twitter:image" content="http://www.guillaumequeste.fr/img/cinema.png" />
                </Helmet>
                <Header />
                <div className="titrePageFilms">Films</div>
                <div className="searchBarFilm">
                    <input placeholder="Rechercher un film" onChange={this.onchange} className="inputSearchBar"/>
                </div>
                <div className="bodyListeFilms">
                    {filteredFilms.map(({id, name, image}) => (
                        <Link to={`/film/${id}`} 
                                key={id}><img src={require(`../img/${image}`)} alt={name} className="imgListeFilms"/></Link>
                    ))}
                </div>
                <Footer />
            </div>
        )
    }
}

export default ListeFilms