import React from 'react'
import { TouchableOpacity } from 'react-native'
import  { connect } from 'react-redux'

import WaterTreatment from '../assets/svg/WaterTreatment'
import Heating from '../assets/svg/Heating'
import Electricity from '../assets/svg/Electricity'
import Ventilation from '../assets/svg/Ventilation'
import All from '../assets/svg/All'
import Exchange from '../assets/svg/Exchange'
import Weighing from '../assets/svg/Weighing'

class listEAE extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            ventilation: '',
            eclairage : '',
            pesage: '',
            chauffage: '',
            echangeur: '',
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
            eclairage: counts.eclairage,
            pesage: counts.pesage,
            chauffage: counts.chauffage,
            echangeur: counts.echangeur
        })
    }

    _filter(text){
        console.log('filter')
        const newData = this.props.thumbnails.filter(item => {
            const itemData = `${item.type}`
            return itemData.indexOf(text) > -1
        })
        this.props.dispatch({type: 'LOAD_FILTER', value: newData})
    }

    render(){
        const { thumbnails } = this.props
        const { ventilation, eclairage, pesage, chauffage, echangeur } = this.state
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
                    <TouchableOpacity onPress={() => this._filter('eclairage')}>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <Electricity fill="#27e29b" width="40" height="30"/>
                            Éclairage
                            <span className="badge badge-primary badge-pill">{eclairage}</span>
                        </li>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this._filter('pesage')}>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <Weighing fill="#27e29b" width="40" height="30"/>
                            Pesage
                            <span className="badge badge-primary badge-pill">{pesage}</span>
                        </li>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this._filter('chauffage')}>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <Heating fill="#27e29b" width="40" height="30"/>
                            Chauffage
                            <span className="badge badge-primary badge-pill">{chauffage}</span>
                        </li>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this._filter('echangeur')}>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <Exchange fill="#27e29b" width="40" height="30"/>
                            Échangeur
                            <span className="badge badge-primary badge-pill">{echangeur}</span>
                        </li>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this._filter('')}>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <WaterTreatment fill="#27e29b" width="40" height="30"/>
                            Alimentation &<br/>Traitement de l'eau
                            <span className="badge badge-primary badge-pill">1</span>
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
        thumbnails : state.data.EAE,
        filter: state.filter
    }
}

export default connect(mapStateToProps)(listEAE)
