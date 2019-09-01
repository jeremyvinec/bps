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
                        <div class="container-contact1">
                            <div class="contact1-pic js-tilt" data-tilt>
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
                                        <a href="">contact@bps29.fr</a>
                                    </p>
                                </div>
                            </div>

                            <form class="contact1-form validate-form">
                                <span class="contact1-form-title">
                                    Contact
                                </span>

                                <div class="wrap-input1 validate-input" data-validate = "Name is required">
                                    <input class="input1" type="text" name="name" placeholder="Nom"/>
                                    <span class="shadow-input1"></span>
                                </div>

                                <div class="wrap-input1 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                                    <input class="input1" type="text" name="email" placeholder="Email"/>
                                    <span class="shadow-input1"></span>
                                </div>

                                <div class="wrap-input1 validate-input" data-validate = "Subject is required">
                                    <input class="input1" type="text" name="subject" placeholder="Sujet"/>
                                    <span class="shadow-input1"></span>
                                </div>

                                <div class="wrap-input1 validate-input" data-validate = "Message is required">
                                    <textarea class="input1" name="message" placeholder="Message"></textarea>
                                    <span class="shadow-input1"></span>
                                </div>

                                <div class="container-contact1-form-btn">
                                    <button class="contact1-form-btn">
                                        <span>
                                            Envoyer
                                            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
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