import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import ThumbnailsItem from './ThumbnailsItem'

class Thumbnails extends React.Component{

    _displayDetail = (thumbnails) => {
        this.props.navigation.navigate('Detail', { thumbnails: thumbnails })
    }

    render(){
        const { navigation }  = this.props
        return(
            <FlatList
                style={styles.list}
                data={this.props.thumbnails}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                renderItem={({item}) => (
                    <ThumbnailsItem
                        thumbnails={item}
                        navigation={navigation}
                        displayDetail={this._displayDetail}
                    />
                )}
            />
        )
    }
}

const styles = StyleSheet.create({
    list: {
        //flexFlow: 'column wrap !important',
    }
})

export default Thumbnails