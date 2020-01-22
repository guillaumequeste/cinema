import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './Header.css'

class Header extends Component {
    render () {
        return (
            <div className="bodyHeader">
                <Link to="/" className="itemsHeader"><img src={require("../img/ticket.png")} alt="ticket" style={{width: "30px"}}></img></Link>
                <Link to="/liste_films" className="itemsHeader">Films</Link>
                <Link to="/liste_series" className="itemsHeader">Séries</Link>
                <Link to="/realisateurs" className="itemsHeader">Réal<span className="itemReal">isateurs</span></Link>
                <Link to="/repliques" className="itemsHeader">Répliques</Link>
            </div>
        )
    }
}

export default Header