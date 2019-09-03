import React from 'react'
import Menu from '../Menu'
import Carrousel from '../Carrousel'
import Footer from '../Footer'

export default class Services extends React.Component{
    render(){
        return(
            <React.Fragment>
                <header>
                    <Menu/>
                    <Carrousel/>
                </header>
                <main>
                    <section className="container services">
                        <div className='banner'>
                            <h1>Notre expérience à votre service</h1>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h2>Compétence et expérience</h2>
                                <p>
                                    BPS fait intervenir sur vos sites des techniciens 
                                    dont la compétence et l'expérience correspondent à la nature de la demande de service :
                                    Ventilation, éclairage, alimentation, maintenance, dépannage...
                                    Nos tehnicien disposent des habilitations utilies (Électrique, gaz, risque chimique)
                                </p>
                            </div>
                            <div className="col">
                                <h2>Polyvalence et flexibilité</h2>
                                <p>
                                    BPS intervient sur tout type d'installation éléectrique, gaz ou pompage.
                                    Le personnel bps est formé pour intervenir sur les différentes technologies et les marques du secteur d'activité.
                                </p>
                            </div>
                        </div>
                        <div className='banner'>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h2>Dépannage : forte réactivité</h2>
                                <p>
                                    Le dépannage peut être réalisé sous contrat nous objectivons à intervenir très rapidement après votre appel téléphonique.
                                </p>
                            </div>
                            <div className="col">
                                <h2>Rigeur et traçabilité</h2>
                                <p>
                                    BPS vous garantit un suivie rigoureux avec historique des différentes interventions réalisées.
                                    des rapports détaillés vous sont transmis après chaque intervention.
                                </p>
                            </div>
                        </div>
                        <div className='banner'>
                        </div>
                        <div>
                            <h2>Fourniture rapide de pièces de rechange</h2>
                            <p>
                                nous disposons d'un stock important de pièces de rechange quelle que soit la marques des équipements composant votre installation.
                            </p>
                        </div>
                        <div className='banner'>
                        </div>
                        <div>
                            <h2>Astreinte : disponibilité 24/24 et 7j/7</h2>
                            <p>
                                *suivant conditions de contrat
                            </p>
                        </div>
                    </section>
                </main>
                <Footer/>
            </React.Fragment>
        )
    }
}