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
                    <section>
                        <div class='banner'>
                            <h1>Notre expérience à votre service</h1>
                        </div>
                    </section>
                </main>
                <Footer/>
            </React.Fragment>
        )
    }
}