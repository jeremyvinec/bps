import React from 'react'
import { FlatList } from 'react-native'
import ThumbnailsItem from './ThumbnailsItem'

export default class Thumbnails extends React.Component{

    _displayDetail = (thumbnails) => {
        console.log(thumbnails)
        const { state, navigate } = this.props.navigation
        navigate('Detail', { thumbnails: thumbnails, go_back_key: state.key })
    }

    render(){
        const { navigation }  = this.props
        return(
            <FlatList
                data={this.props.thumbnails}
                keyExtractor={(item) => item.id}//toString()
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
