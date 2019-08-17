import React from 'react'
import Menu from './Menu'
import Carrousel from './Carrousel'
//import SavoirFaire from './SavoirFaire'
import Footer from './Footer'

class Bps extends React.Component{
    render(){
        return(
            <React.Fragment>
                <header>
                    <Menu/>
                    <Carrousel/>
                </header>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default Bps