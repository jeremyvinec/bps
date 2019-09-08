import React from 'react'
import Menu from '../Menu'
import Carrousel from '../Carrousel'
import Footer from '../Footer'


// Savoir-Faire
import Farm from '../../assets/svg/Farm'
import Industry from '../../assets/svg/Industry'
import Maintenance from '../../assets/svg/Maintenance'
import Laser from '../../assets/svg/Laser'

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
                    <section className="savoirFaire">
                        <div className='title'><h2>Savoir-Faire</h2></div>
                        <div className="row">
                            <div className="bloc col">
                                <Farm width="80" height="80" fill="white"/>
                                <h4><a href="/EAE">Équipements &<br/> Automatisme d'Élevage</a></h4>
                                <hr className="bar"/>
                                <p>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.
                                    Proin vulputate massa id mi
                                    commodo posuere. Integer. 
                                </p>
                            </div><div className="bloc_1 col">
                                <Industry fill="#fff" width="80" height="80"/>
                                <h4><a href="/EAI">Équipements &<br/> Automatisme Industriel</a></h4>
                                <hr className="bar"/>
                                <p>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.
                                    Proin vulputate massa id mi
                                    commodo posuere. Integer. 
                                </p>
                            </div><div className="bloc col">
                                <Maintenance width="80" height="80" fill="white"/>
                                <h4><a href="/MEI">Maintenance des<br/>Équipements Industriel</a></h4>
                                <hr className="bar"/>
                                <p>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.
                                    Proin vulputate massa id mi
                                    commodo posuere. Integer. 
                                </p>
                            </div><div className="bloc_1 col">
                                <Laser fill="#fff" width="80" height="80"/>
                                <h4><a href="/Synertech">Synertech</a></h4>
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
                    <section id="services" style={{height: 1000}}>
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