import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native'

class Thumbnails extends React.Component{

    constructor(props){
        super(props)

    }


    render(){
        const { thumbnails } = this.props
        return(
            <TouchableOpacity>
                <View style={styles.content_container}>
                    <View style={styles.header}>
                        <Image/>
                    </View>
                    <View style={styles.title}>
                        <Text>{thumbnails.name}</Text>
                    </View>
                    <View style={styles.desc}>
                        <Text>{thumbnails.description}</Text>
                    </View>
                    <View style={styles.price}>
                        <Text>10e</Text>
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