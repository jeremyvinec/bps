import React from 'react'
import { TouchableOpacity } from 'react-native'

import Cover from './Cover'

class Thumbnails extends React.Component{

    render(){
        const { thumbnails, displayDetail } = this.props
        return(
                <TouchableOpacity onPress={() => displayDetail(thumbnails)}>
                    <div className="card">
                        <img className="card-img-top" src={Cover[thumbnails.type]} alt="Card image cap"/>
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