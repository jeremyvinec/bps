import React from 'react'
import { View } from 'react-native'
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

                    </section>
                </main>
                <Footer/>
            </React.Fragment>
        )
    }
}