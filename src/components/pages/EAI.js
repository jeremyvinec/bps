import React from 'react'
import Menu from '../Menu'
import Carrousel from '../Carrousel'
import Footer from '../Footer'

export default class EAI extends React.Component{
    render(){
        return(
            <React.Fragment>
                <header>
                    <Menu/>
                    <Carrousel/>
                </header>
                <main>
                    <section class='container'>
                        <div class='banner'>
                            <h1>Équipement & automatisme industriel</h1>
                        </div>
                        <div class='row'>
                            <div class='col-4'>
                                menu
                            </div>
                            <div class='col-8'>
                                <div class='row'>
                                    equipements
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