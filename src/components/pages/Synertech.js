import React from 'react'
import Menu from '../Menu'
import Carrousel from '../Carrousel'
import Footer from '../Footer'

export default class Synertech extends React.Component{
    render(){
        return(
            <React.Fragment>
                <header>
                    <Menu/>
                    <Carrousel/>
                </header>
                <main>
                    <section className="synertech">
                        <div className="container">
                            <div className="banner">
                                <h1>Synertech</h1>
                                <ul className="list-inline"> 
                                    <li className="list-inline-item">Lignage Laser</li>
                                    <li className="list-inline-item">Mesure Vibration</li>
                                    <li className="list-inline-item">Expertise Technique</li>
                                </ul>
                            </div>
                                <div className="" style={{textAlign: 'left'}}>
                                    <div>
                                        <h2>Actions préventives :</h2>
                                        <h3>→ Identifier, anticiper et corriger les défauts sur machines tournantes.</h3>
                                        <img src="" alt=""/><img src="" alt=""/><img src="" alt=""/>
                                    </div>
                                    <div>
                                        <h3>→ Lignage laser</h3>
                                        <p>Aligner correctement les machine réduit les risques de panne et de rupture.<br/>
                                        Les conséquences d'un mauvais alignement sont :<br/></p>
                                        <ul>
                                            <li>Détérioration des roulements</li>
                                            <li>Échauffement</li>
                                            <li>Fuites de joints</li>
                                            <li>Vibrations</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3>→ Analyse vibratoire</h3>
                                        <ul>
                                            <li>Contrôle du niveau vibratoire global.</li>
                                            <li>Mesure de vibration filtrée (balourd).</li>
                                            <li>Analyse Fréquentielle</li>
                                            <li>Contrôle de l'état des roulements.</li>
                                            <li>Identification de l'origine des vibretions</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2>Actions correctives :</h2>
                                        <h3>→ Équilibrage sur site dans les conditions de fonctionnement.</h3>
                                        <h3>→ Reprise du lignage : correction des machines avec l'ajustement LASER en temps réel en vertical et horizontal.</h3>
                                        <h3>→ Identification des zones de résonnance et préconisation de modification de rigidité.</h3>
                                    </div>
                                </div>
                            </div>
                    </section>
                </main>
                <Footer/>
            </React.Fragment>
        )
    }
}