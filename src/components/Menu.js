import React from 'react'

class Menu extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" href='/'>Accueil</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link"  href='/Societe'>Société</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='/SavoirFaire'>Savoir-Faire</a>
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