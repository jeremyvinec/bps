import React from 'react'
import ArrowLeft from '../assets/svg/ArrowLeft'
import ArrowRight from '../assets/svg/ArrowRight'
import ArrowUp from '../assets/svg/ArrowUp'

export default class Services extends React.Component{
    render(){
        return(
                <section class="container">
                    <div class="row">
                        <div class="col-sm text-left">
                            <h3>Prescription -Vente</h3>
                            <ul>
                                <li><a href="">Pompes industrielles</a></li>
                                <li><a href="">Moteurs électriques</a></li>
                                <li><a href="">Transmissions mécanique</a></li>
                                <li><a href="">Variation de fréquence</a></li>
                                <li><a href="">Variation de fréquence</a></li>
                            </ul>
                        </div>
                        <div class="col-sm arrow1">
                            <ArrowRight/>
                        </div>
                        <div class="col-sm text-left">
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
                    <div class="title">
                        <h2>La complémentarité de services <br/> au coeur de l’entreprise</h2>
                    </div>
                    <div class="row">
                        <div class="col-sm arrow2">
                            <ArrowUp/>
                        </div>
                        <div class="col-sm text-left">
                            <h3>Réparation - Maintenance</h3>
                            <ul>
                                <li><a href="">Atelier de bobinage agrée</a></li>
                                <li><a href="">Réparation de pompes (toutes marques)</a></li>
                                <li><a href="">Réfection d'arbre et d'usinage</a></li>
                                <li><a href="">Maintenance sur site</a></li>
                                <li><a href="">Maintenance sur site</a></li>
                            </ul>
                        </div>
                        <div class="col-sm arrow3">
                            <ArrowLeft/>
                        </div>
                    </div>
                </section>
        )
    }
}