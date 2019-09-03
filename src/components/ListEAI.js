import React from 'react'
import Motor from '../assets/svg/Motor'
import Bobinage from '../assets/svg/Bobinage'
import Pump from '../assets/svg/Pump'
import Electricity from '../assets/svg/Electricity'
import Ventilation from '../assets/svg/Ventilation'
import Transmission from '../assets/svg/Transmission'
import All from '../assets/svg/All'

export default class ListEAI extends React.Component{

    render(){
        return(
            <div className="container">
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <All fill="#27e29b" width="40" height="30"/>
                        Tous
                        <span className="badge badge-primary badge-pill">14</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <Bobinage fill="#27e29b" width="40" height="30"/>
                        Bobinage
                        <span className="badge badge-primary badge-pill">2</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <Motor fill="#27e29b" width="40" height="30"/>
                        Moteur Réducteurs
                        <span className="badge badge-primary badge-pill">1</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <Transmission fill="#27e29b" width="40" height="30"/>
                        Transmission
                        <span className="badge badge-primary badge-pill">1</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <Pump fill="#27e29b" width="40" height="30"/>
                        Pompes
                        <span className="badge badge-primary badge-pill">1</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <Electricity fill="#27e29b" width="40" height="30"/>
                        Électricité
                        <span className="badge badge-primary badge-pill">1</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <Ventilation fill="#27e29b" width="40" height="30"/>
                        Ventilation
                        <span className="badge badge-primary badge-pill">1</span>
                    </li>
                </ul>
            </div>
        )
    }
}