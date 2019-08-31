import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPhone, faFax, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default class Footer extends React.Component{
    render(){
        return(
            <footer className="page-footer font-small" style={{ backgroundColor: '#1c2331', color:'white', marginTop:100 }}>
                <div style={{backgroundColor: '#6351ce'}}>
                <div className="container">
                    <div className="row py-4 d-flex align-items-center">
                    <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                        <p className="mb-0">Connectez-vous avec nous sur les réseaux sociaux !</p>
                    </div>
                    <div className="col-md-6 col-lg-7 text-center text-md-right">
                        <a href='#' className="fb-ic">
                            <FontAwesomeIcon icon={faFacebook} color='white' style={{ marginRight: 14 }}/>
                        </a>
                        <a href='#' className="tw-ic">
                            <FontAwesomeIcon icon={faTwitter} color='white' style={{ marginRight: 14 }}/>
                        </a>
                        <a href='#' className="li-ic">
                            <FontAwesomeIcon icon={faLinkedin} color='white'/>
                        </a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="container text-center text-md-left mt-5">
                <div className="row mt-3">
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase font-weight-bold text-white">Société</h6>
                    <hr className="accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: 60, backgroundColor: '#7c4dff'}}/>
                    <p>
                        <a href="#!">Entreprise</a>
                    </p>
                    <p>
                        <a href="#!">Historique</a>
                    </p>
                    <p>
                        <a href="#!">Activités</a>
                    </p>
                    <p>
                        <a href="#!">Partenaires</a>
                    </p>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase font-weight-bold text-white">Services</h6>
                    <hr className="accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: 60, backgroundColor: '#7c4dff'}}/>
                    <p>
                        <a href="#!">Élevage</a>
                    </p>
                    <p>
                        <a href="#!">Industriel</a>
                    </p>
                    <p>
                        <a href="#!">Synertech</a>
                    </p>
                    <p>
                        <a href="#!">Maintenance</a>
                    </p>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase font-weight-bold text-white">Savoir-Faire</h6>
                    <hr className="accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: 60, backgroundColor: '#7c4dff'}}/>
                    <p>
                        <a href="#!">Automatisme</a>
                    </p>
                    <p>
                        <a href="#!">Bobinage</a>
                    </p>
                    <p>
                        <a href="#!">Pompage</a>
                    </p>
                    <p>
                        <a href="#!">Ventilation</a>
                    </p>
                    </div>
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <h6 className="text-uppercase font-weight-bold text-white">Contact</h6>
                    <hr className="accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: 60, backgroundColor: '#7c4dff'}}/>
                    <p>
                        <FontAwesomeIcon icon={faHome} color='white'/> ZA de Kermat, 29410 GUICLAN</p>
                    <p>
                        <FontAwesomeIcon icon={faPhone} color='white'/> Tél: 02 98 68 48 76</p>
                    <p>
                        <FontAwesomeIcon icon={faFax} color='white'/> Fax: 02 98 68 48 77</p>
                    <p>
                        <FontAwesomeIcon icon={faEnvelope} color='white'/> contact@bps29.fr</p>
                    </div>
                </div>
                </div>
                <div className="footer-copyright text-center py-3" style={{ backgroundColor: 'rgba(0,0,0,.2)', color: 'rgba(255,255,255,.6)'}}>© 2019 Copyright :
                <a className="signature" href="https://jeremyvinec.dev/" target='_blanck'>Jeremyvinec.dev</a>
                </div>
            </footer>
        )
    }
}