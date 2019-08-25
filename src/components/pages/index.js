import React from 'react'
import Accueil from './Accueil'
import Services from './Services'
import SavoirFaire from './SavoirFaire'
import Societe from './Societe'
import Contact from './Contact'

interface IProps {
    activeViewIndex: number;
}

// Composant "Home" rendu sur la route "/" par le routeur de next.
// Le composant adéquat sera rendu en fonction du bouton actif dans le header.
export default class Home extends React<IProps>{
    render(){
        switch(this.props.activeViewIndex){
            case 0: return <Accueil/>;
            case 1: return <Societe/>;
            case 2: return <SavoirFaire/>;
            case 3: return <Services/>;
            case 4: return <Contact/>;
            default: return <Accueil/>;
        }
    }
}