import { Svg, Line, Circle } from 'react-native-svg'
import React from 'react'

export default class Line2 extends React.Component {
    render(){
        return(
                <Svg width="349" height="15" viewBox="0 0 349 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Circle cx="7.5" cy="7.5" r="7" stroke="#32E3A0"/>
                    <Circle cx="341.5" cy="7.5" r="7" stroke="#32E3A0"/>
                    <Line x1="15" y1="6.5" x2="334" y2="6.5" stroke="#32E3A0"/>
                </Svg>
        )
    }
}