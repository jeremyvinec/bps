import React from 'react'
import { TouchableOpacity } from 'react-native'

import bobinage from '../../assets/img/equipment/bobinage.jpg'
import pompes from '../../assets/img/equipment/pompes.png'
import moteurs_reducteurs from '../../assets/img/equipment/moteurs_reducteurs.jpg'
import tambour_moteur from '../../assets/img/equipment/tambour_moteur.jpg'
import variateur_mecanique from '../../assets/img/equipment/variateur_mecanique.jpg'
import vibrant from '../../assets/img/equipment/vibrant.jpg'

class Thumbnails extends React.Component{

    _imgCard(){
        const type = this.props.thumbnails.type
        switch(true){
            case /bobinage/.test(type):
                return bobinage
            case /pompes/.test(type):
                return pompes
            case /moteurs_reducteurs/.test(type):
                return moteurs_reducteurs
            case /tambour_moteur/.test(type):
                return tambour_moteur
            case /variateur_mecanique/.test(type):
                return variateur_mecanique
            case /vibrant/.test(type):
                return vibrant
        }
    }

    render(){
        const { thumbnails, displayDetail } = this.props
        return(
                <TouchableOpacity onPress={() => displayDetail(thumbnails)}>
                    <div className="card">
                        <img className="card-img-top" style={{width: '100px'}} src={this._imgCard()} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{thumbnails.name}</h5>
                            <p className="card-text">{thumbnails.description}</p>
                            <a href="#" className="btn">Voir le produit</a>
                        </div>
                    </div>
                </TouchableOpacity>
        )
    }
}

export default Thumbnails