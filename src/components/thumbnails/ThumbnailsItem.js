import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image, Text, H5 } from 'react-native'

class Thumbnails extends React.Component{

    render(){
        const { thumbnails } = this.props
        console.log(this.props)
        return(
                <TouchableOpacity>
                    <View className="card" style={{width: '18rem'}}>
                        <Image className="card-img-top" source="..." alt="Card image cap"/>
                        <View className="card-body">
                            <h5 className="card-title">{thumbnails.name}</h5>
                            <Text className="card-text">{thumbnails.description}</Text>
                            <a href="#" className="btn btn-primary">Voir le produit</a>
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