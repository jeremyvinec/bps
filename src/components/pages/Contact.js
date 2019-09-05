import React from 'react'
import Menu from '../Menu'
import Carrousel from '../Carrousel'
import Footer from '../Footer'

export default class Contact extends React.Component{
    render(){
        return(
            <React.Fragment>
                <header>
                    <Menu/>
                    <Carrousel/>
                </header>
                <main>
                    <section className="container">
                        <div className="container-contact1">
                            <div className="contact1-pic js-tilt" data-tilt>
                                <h3>Informations générals</h3>
                                <div>
                                    <h4>Adresse</h4>
                                    <p>
                                        ZA de Kermat
                                        29410 GUICLAN
                                    </p>
                                    <h4>Coordonnées</h4>
                                    <p>
                                        Tél : 02 98 68 48 76 | Fax : 02 98 68 48 77
                                    </p>
                                    <h4>Email</h4> 
                                    <p>
                                        <a href="contact@bps29.fr">contact@bps29.fr</a>
                                    </p>
                                </div>
                            </div>

                            <form className="contact1-form validate-form">
                                <span className="contact1-form-title">
                                    Contact
                                </span>

                                <div className="wrap-input1 validate-input" data-validate = "Name is required">
                                    <input className="input1" type="text" name="name" placeholder="Nom"/>
                                    <span className="shadow-input1"></span>
                                </div>

                                <div className="wrap-input1 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                                    <input className="input1" type="text" name="email" placeholder="Email"/>
                                    <span className="shadow-input1"></span>
                                </div>

                                <div className="wrap-input1 validate-input" data-validate = "Subject is required">
                                    <input className="input1" type="text" name="subject" placeholder="Sujet"/>
                                    <span className="shadow-input1"></span>
                                </div>

                                <div className="wrap-input1 validate-input" data-validate = "Message is required">
                                    <textarea className="input1" name="message" placeholder="Message"></textarea>
                                    <span className="shadow-input1"></span>
                                </div>

                                <div className="container-contact1-form-btn">
                                    <button className="contact1-form-btn">
                                        <span>
                                            Envoyer
                                            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </section>
                </main>
                <Footer/>
            </React.Fragment>
        )
    }
}