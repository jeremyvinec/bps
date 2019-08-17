import React from 'react'
import Menu from './Menu'
import Carrousel from './Carrousel'
import SavoirFaire from './SavoirFaire'
import Services from './Services'
import Footer from './Footer'

class Bps extends React.Component{
    render(){
        return(
            <React.Fragment>
                <header>
                    <Menu/>
                    <Carrousel/>
                </header>
                <main>
                    <SavoirFaire/>
                    <Services/>
                </main>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default Bps