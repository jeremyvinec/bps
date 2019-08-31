import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { connect } from 'react-redux'
import ThumbnailsItem from './ThumbnailsItem'

class Thumbnails extends React.Component{
    render(){
        return(
            <FlatList
                style={styles.list}
                data={this.props.thumbnails}
                extraData={this.state}
                keyExtractor={(item) => item.id}
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
        flex: 1
    }
})

const mapStateToProps = (state) => {
    return{
        data: state.data
    }
}

export default connect(mapStateToProps)(Thumbnails)