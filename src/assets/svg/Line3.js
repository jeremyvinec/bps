import { Svg, Path, Circle } from 'react-native-svg'
import React from 'react'

export default class Line3 extends React.Component {
    render(){
        return(
                <Svg width="614" height="118" viewBox="0 0 614 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Circle cx="606.5" cy="7.5" r="7" stroke="#32E3A0"/>
                    <Circle cx="7.5" cy="110.5" r="7" stroke="#32E3A0"/>
                    <Path d="M607 15V31C607 47.5685 593.569 61 577 61H37C20.4315 61 7 74.4315 7 91V103" stroke="#32E3A0"/>
                </Svg>
        )
    }
}