import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native'

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
        const { thumbnails } = this.props
        console.log(this.props)
        return(
                <TouchableOpacity>
                    <View className="card" style={{width: '18rem', alignItems: 'center'}}>
                        <Image className="card-img-top" source={{ uri: this._imgCard() }} style={{ width: 100, height: 100 }} alt="Card image cap"/>
                        <View className="card-body">
                            <h5 className="card-title">{thumbnails.name}</h5>
                            <Text className="card-text">{thumbnails.description}</Text>
                            <a href="#" className="btn">Voir le produit</a>
                        </View>
                    </View>
                </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    content_container: {
        flex: 1
    },
    header:{

    },
    title: {

    },
    desc: {

    },
    price: {

    }
})

export default Thumbnails