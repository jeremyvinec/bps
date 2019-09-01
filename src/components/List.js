import React from 'react'
import Motor from '../assets/svg/Motor'
import Bobinage from '../assets/svg/Bobinage'
import DrumMotor from '../assets/svg/DrumMotor'
import Pump from '../assets/svg/Pump'

export default class List extends React.Component{

    render(){
        return(
            <div className="container">
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
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
                        Moteur - Réducteurs
                        <span className="badge badge-primary badge-pill">1</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <DrumMotor fill="#27e29b" width="40" height="30"/>
                        Tombours moteurs
                        <span className="badge badge-primary badge-pill">1</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <Pump fill="#27e29b" width="40" height="30"/>
                        Pompes
                        <span className="badge badge-primary badge-pill">1</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Variateur mécanique
                        <span className="badge badge-primary badge-pill">1</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Vibrant
                        <span className="badge badge-primary badge-pill">1</span>
                    </li>
                </ul>
            </div>
        )
    }
}