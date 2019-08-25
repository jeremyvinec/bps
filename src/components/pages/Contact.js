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
                    <section>
                        <div>
                            <h1>Contact</h1>
                        </div>
                        <div class='container'>
                        <div class="row">
                            <div class="col">
                            1 of 2
                            </div>
                            <div class="col">
                            2 of 2
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