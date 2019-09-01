import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import ThumbnailsItem from './ThumbnailsItem'

class Thumbnails extends React.Component{

    render(){
        return(
            <FlatList
                style={styles.list}
                data={this.props.thumbnails}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <ThumbnailsItem
                        thumbnails={item}
                    />
                )}
            />
        )
    }
}

const styles = StyleSheet.create({
    list: {
        flexFlow: 'row wrap !important'
    }
})

export default Thumbnails