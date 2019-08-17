import { Svg, Circle, Path } from 'react-native-svg'
import React from 'react'

export default class Line1 extends React.Component {
    render(){
        return(
            <Svg width="699" height="118" viewBox="0 0 699 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Circle cx="691.5" cy="7.5" r="7" stroke="#32E3A0"/>
                <Circle cx="7.5" cy="110.5" r="7" stroke="#32E3A0"/>
                <Path d="M691 15V31C691 47.5685 677.569 61 661 61H37C20.4315 61 7 74.4315 7 91V103" stroke="#32E3A0"/>
            </Svg>
        )
    }
}