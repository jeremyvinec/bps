import React from 'react'
import { TouchableOpacity } from 'react-native'
import  { connect } from 'react-redux'

import Motor from '../assets/svg/Motor'
import Winding from '../assets/svg/Winding'
import Pump from '../assets/svg/Pump'
import Electricity from '../assets/svg/Electricity'
import Ventilation from '../assets/svg/Ventilation'
import Transmission from '../assets/svg/Transmission'
import All from '../assets/svg/All'

class listEAI extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            bobinage: '',
            pompes : '',
            moteur_reducteur: '',
            transmission: '',
            electricite: '',
            ventilation: '',
        }
    }

    componentDidMount(){
        this._badge()
    }

    _badge(){
        const type = this.props.thumbnails.map((data) => data.type)
        const counts = Object.create(null)
        type.forEach(element => {
            counts[element] = counts[element] ? counts[element] + 1 : 1;
        });
        this.setState({
            ventilation : counts.ventilation,
            electricite: counts.electricite,
            transmission: counts.transmission,
            moteur_reducteur: counts.moteur_reducteur,
            pompes: counts.pompes,
            bobinage: counts.bobinage
        })
    }

    _filter(text){
        const newData = this.props.thumbnails.filter(item => {
            const itemData = `${item.type}`
            return itemData.indexOf(text) > -1
        })
        this.props.dispatch({type: 'LOAD_FILTER', value: newData})
    }

    render(){
        const { thumbnails } = this.props
        const { ventilation, electricite, transmission, moteur_reducteur, pompes, bobinage } = this.state
        return(
            <div className="container">
                <ul className="list-group">
                    <TouchableOpacity onPress={() => this._filter('')}>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <All fill="#27e29b" width="40" height="30"/>
                            Tous
                            <span className="badge badge-primary badge-pill">{thumbnails.length}</span>
                        </li>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this._filter('bobinage')}>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <Winding fill="#27e29b" width="40" height="30"/>
                            Bobinage
                            <span className="badge badge-primary badge-pill">{bobinage}</span>
                        </li>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this._filter('bobinage')}>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <Motor fill="#27e29b" width="40" height="30"/>
                            Moteur Réducteurs
                            <span className="badge badge-primary badge-pill">{moteur_reducteur}</span>
                        </li>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this._filter('transmission')}>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <Transmission fill="#27e29b" width="40" height="30"/>
                            Transmission
                            <span className="badge badge-primary badge-pill">{transmission}</span>
                        </li>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this._filter('pompes')}>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <Pump fill="#27e29b" width="40" height="30"/>
                            Pompes
                            <span className="badge badge-primary badge-pill">{pompes}</span>
                        </li>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this._filter('electricite')}>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <Electricity fill="#27e29b" width="40" height="30"/>
                            Électricité
                            <span className="badge badge-primary badge-pill">{electricite}</span>
                        </li>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this._filter('ventilation')}>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <Ventilation fill="#27e29b" width="40" height="30"/>
                            Ventilation
                            <span className="badge badge-primary badge-pill">{ventilation}</span>
                        </li>
                    </TouchableOpacity>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        thumbnails : state.data.EAI
    }
}

export default connect(mapStateToProps)(listEAI)
