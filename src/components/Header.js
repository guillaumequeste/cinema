import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './Header.css'

class Header extends Component {
    render () {
        return (
            <div className="bodyHeader">
                <Link to="/" className="itemsHeader"><img src={require("../img/ticket.png")} alt="ticket" style={{width: "30px"}}></img></Link>
                <Link to="/liste_films" className="linkTextDecoration"><span className="grand">Films</span><div className="petitFilms"></div></Link>
                <Link to="/liste_series" className="linkTextDecoration"><span className="grand">Séries</span><div className="petitSeries"></div></Link>
                <Link to="/realisateurs" className="linkTextDecoration"><span className="petit"><img src={require("../img/camera.png")} alt="camera" style={{width: "30px"}}></img></span><span className="grand">Réalisateurs</span></Link>
                <Link to="/compositeurs" className="linkTextDecoration"><span className="petit"><img src={require("../img/note.png")} alt="camera" style={{width: "30px"}}></img></span><span className="grand">Compositeurs</span></Link>
                <Link to="/repliques" className="linkTextDecoration"><span className="grand">Répliques</span><span className="petit">"Abc"</span></Link>
                <Link to="/contact" className="linkTextDecoration"><span className="petit"><img src={require("../img/contact.png")} alt="contact" style={{width: "30px"}}></img></span><span className="grand"></span></Link>
            </div>
        )
    }
}

export default Header