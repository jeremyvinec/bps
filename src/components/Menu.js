import React from 'react'
import logo from '../assets/img/logo/logo.png'

class Menu extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            toggle: false,
            show: true,
            dropdown: false
        }
    }

    _toggle = () => {
        this.setState({ 
            toggle: !this.state.toggle,
            show:  !this.state.show
        })
    }

    _dropdown =() => {
        this.setState({
            dropdown: !this.state.dropdown
        })
    }

    render(){
        const toggle = this.state.toggle ? 'change' : ''
        const show = this.state.show ? 'collapse' : ''
        const dropdown = this.state.dropdown ? 'show' : ''
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
                <div className={`iconMenu ${toggle}`} onClick={this._toggle}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <div className={`navbar-collapse justify-content-md-center ${show}`} id="navbarsExample10">
                <ul className="logo navbar-nav">
                    <li>
                        <a href="/" className="nav-link">
                            <img src={logo} height="35px"/>
                        </a>
                    </li>
                </ul>
                <ul></ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" href='/'>Accueil</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link"  href='/Societe'>Société</a>
                    </li>
                    <li className={`nav-item dropdown ${dropdown}`} onClick={this._dropdown}>
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Savoir-Faire
                        </a>
                        <div className={`dropdown-menu ${dropdown}`} aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="/EAE">Équipements & Automatisme d'Élevage</a>
                        <a className="dropdown-item" href="/EAI">Équipements & Automatisme Industriel</a>
                        <a className="dropdown-item" href="/MEI">Maintenance des Équipements Industriel</a>
                        <a className="dropdown-item" href="/Synertech">Synertech</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='/Services'>Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='/Contact'>Contact</a>
                    </li>
                </ul>
                </div>
            </nav>
        )
    }
}

export default Menu