import React from 'react'
import Menu from '../Menu'
import Carrousel from '../Carrousel'
import Footer from '../Footer'


// Savoir-Faire
import Remote from '../../assets/svg/Remote'
import Pump from '../../assets/svg/Pump'
import Motor from '../../assets/svg/Motor'

import Services from '../../assets/svg/Services'

class Bps extends React.Component{
    render(){
        return(
            <React.Fragment>
                <header>
                    <Menu/>
                    <Carrousel/>
                </header>
                <main className="container">
                    <section>
                        <div className='title'><h2>Savoir-Faire</h2></div>
                        <div className="row">
                            <div className="bloc col">
                                <Remote/>
                                <h4>Équipements &<br/> Automatisme d'Élevage</h4>
                                <hr className="bar"/>
                                <p>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.
                                    Proin vulputate massa id mi
                                    commodo posuere. Integer. 
                                </p>
                            </div><div className="bloc_1 col">
                                <Motor fill="#fff" width="93" height="68"/>
                                <h4>Équipements &<br/> Automatisme Industriel</h4>
                                <hr className="bar"/>
                                <p>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.
                                    Proin vulputate massa id mi
                                    commodo posuere. Integer. 
                                </p>
                            </div><div className="bloc col">
                                <Pump fill="#fff" width="46" height="62"/>
                                <h4>Maintenance des<br/>Équipements Industriel</h4>
                                <hr className="bar"/>
                                <p>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.
                                    Proin vulputate massa id mi
                                    commodo posuere. Integer. 
                                </p>
                            </div><div className="bloc_1 col">
                                <Motor fill="#fff" width="93" height="68"/>
                                <h4>Synertech</h4>
                                <hr className="bar"/>
                                <p>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.
                                    Proin vulputate massa id mi
                                    commodo posuere. Integer. 
                                </p>
                            </div>
                        </div>
                    </section>
                    <section style={{height: 1000}}>
                        <div className="title">
                            <h2>La complémentarité de services <br/> au coeur de l’entreprise</h2>
                        </div>
                        <Services width="1140" height="1000" />
                        <div className="services_text">
                            <h3>Prescription -Vente</h3>
                            <ul>
                                <li><a href="#">Pompes industrielles</a></li>
                                <li><a href="#">Moteurs électriques</a></li>
                                <li><a href="#">Transmissions mécanique</a></li>
                                <li><a href="#">Variation de fréquence</a></li>
                                <li><a href="#">Systèmes de ventilation</a></li>
                            </ul>
                        </div>
                        <div className="services_text2">
                            <h3>Installation - Réalisation</h3>
                            <ul>
                                <li><a href="#">Systèmes automatisés</a></li>
                                <li><a href="#">Systèmes de pompage</a></li>
                                <li><a href="#">Electricité / Plomberie</a></li>
                                <li><a href="#">Soudure gaz (PGP / PGN)</a></li>
                                <li><a href="#">Systèmes de ventilation</a></li>
                            </ul>
                        </div>
                        <div className="services_text3">
                            <h3>Réparation - Maintenance</h3>
                            <ul>
                                <li><a href="#">Atelier de bobinage agrée</a></li>
                                <li><a href="#">Réparation de pompes (toutes marques)</a></li>
                                <li><a href="#">Réfection d'arbre et d'usinage</a></li>
                                <li><a href="#">Maintenance sur site</a></li>
                                <li><a href="#">Contrat d'entrtien</a></li>
                            </ul>
                        </div>
                    </section>
                </main>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default Bps