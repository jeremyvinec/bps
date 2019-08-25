import { Svg, Path } from 'react-native-svg'
import React from 'react'

export default class Pump extends React.Component {
    render(){
        return(
            <Svg width="46" height="62" viewBox="0 0 46 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M35 54C37.757 54 40 51.757 40 49C40 46.243 37.757 44 35 44C32.243 44 30 46.243 30 49C30 51.757 32.243 54 35 54ZM35 46C36.654 46 38 47.346 38 49C38 50.654 36.654 52 35 52C33.346 52 32 50.654 32 49C32 47.346 33.346 46 35 46Z" fill="white"/>
                <Path d="M46 32V22H37V18H39V14.123C39 10.643 38.572 7.165 37.728 3.788C37.17 1.558 35.176 0 32.877 0H27.123C24.824 0 22.83 1.558 22.272 3.787C21.6 6.478 21.204 9.232 21.065 12H13C8.038 12 4 16.038 4 21C4 25.962 8.038 30 13 30H14V32H18V34H7C3.14 34 0 37.14 0 41V51C0 54.86 3.14 58 7 58H16V62H26V58H30V62H40V58H46V34H42V32H46ZM35 19H33V21H35V22H25V21H31V19H25V18H35V19ZM23 14.123C23 10.806 23.408 7.492 24.213 4.272C24.547 2.935 25.744 2 27.123 2H32.877C34.256 2 35.453 2.935 35.787 4.272C36.592 7.492 37 10.806 37 14.123V16H23V14.123ZM23 18V22H14V24H13C11.346 24 10 22.654 10 21C10 19.346 11.346 18 13 18H21H22H23ZM13 28C9.14 28 6 24.86 6 21C6 17.14 9.14 14 13 14H21.004C21.004 14.041 21 14.082 21 14.123V16H13C10.243 16 8 18.243 8 21C8 23.757 10.243 26 13 26H14V28H13ZM16 24H44V30H16V24ZM2 51V41C2 38.243 4.243 36 7 36H8V56H7C4.243 56 2 53.757 2 51ZM24 60H18V58H24V60ZM38 60H32V58H38V60ZM44 56H16V54H14V56H10V36H14V52H16V36H44V56ZM40 34H20V32H40V34Z" fill="white"/>
            </Svg>

        )
    }
}