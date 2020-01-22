import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <div className="bodyFooter">
        <Link to="/contact" className="itemsHeader">Contact</Link>
        <h3 className="cr">Crédits</h3>
      </div>
    );
  }
}

export default Footer;