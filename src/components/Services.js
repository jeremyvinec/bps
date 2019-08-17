import React from 'react'

import Line1 from '../assets/svg/Line1'
import Line2 from '../assets/svg/Line2'
import Line3 from '../assets/svg/Line3'
import Sale from '../assets/svg/Sale'
import Gear from '../assets/svg/Gear'
import Maintenance from '../assets/svg/Maintenance'

export default class Services extends React.Component{
    render(){
        return(
                <section class="container">
                    <div class="title">
                        <h2>La complémentarité de services <br/> au coeur de l’entreprise</h2>
                    </div>
                    <div class="col-sm line1">
                        <Line1/>
                    </div>
                    <div class="row" style={{ marginTop: 150 }}>
                        <div class="col-sm text-left">
                            <Sale/>
                            <h3>Prescription -Vente</h3>
                            <ul>
                                <li><a href="">Pompes industrielles</a></li>
                                <li><a href="">Moteurs électriques</a></li>
                                <li><a href="">Transmissions mécanique</a></li>
                                <li><a href="">Variation de fréquence</a></li>
                                <li><a href="">Variation de fréquence</a></li>
                            </ul>
                        </div>
                        <div class="col-sm line2">
                            <Line2/>
                        </div>
                        <div class="col-sm text-left" style={{ marginTop: 50 }}>
                            <Gear/>
                            <h3>Installation - Réalisation</h3>
                            <ul>
                                <li><a href="">Systèmes automatisés</a></li>
                                <li><a href="">Systèmes de pompage</a></li>
                                <li><a href="">Electricité / Plomberie</a></li>
                                <li><a href="">Soudure gaz (PGP / PGN)</a></li>
                                <li><a href="">Système de ventilation</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm line3">
                        <Line3/>
                    </div>
                    <div class="row" style={{ marginTop: 150 }}>
                        <div class="col-sm text-left">
                        <Maintenance/>
                        <h3>Réparation - Maintenance</h3>
                            <ul>
                                <li><a href="">Atelier de bobinage agrée</a></li>
                                <li><a href="">Réparation de pompes (toutes marques)</a></li>
                                <li><a href="">Réfection d'arbre et d'usinage</a></li>
                                <li><a href="">Maintenance sur site</a></li>
                                <li><a href="">Maintenance sur site</a></li>
                            </ul>
                        </div>
                        <div class="col-sm"></div>
                        <div class="col-sm arrow3"></div>
                    </div>
                </section>
        )
    }
}