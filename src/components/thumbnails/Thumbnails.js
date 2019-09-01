import React from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import ThumbnailsList from './ThumbnailsList'

class Thumbnails extends React.Component{
    render(){
        const { thumbnails } = this.props
        return(
            <View style={styles.ThumbnailsList}>
                <ThumbnailsList
                    thumbnails={this.props.thumbnails}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({

})

const mapStateToProps = (state) => {
    return{
        data: state.data
    }
}

export default connect(mapStateToProps)(Thumbnails)