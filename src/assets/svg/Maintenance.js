import { Svg, Path } from 'react-native-svg'
import React from 'react'

export default class Maintenance extends React.Component {
    render(){
        return(
            <Svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M0.7 19.9C0.3 20 0 20.4 0 20.8V27.1C0 27.5 0.3 27.9 0.7 28.1L5.1 29.4C5.5 30.8 6.1 32.2 6.8 33.5L4.6 37.6C4.4 38 4.5 38.5 4.8 38.8L9.3 43.3C9.6 43.6 10.1 43.7 10.5 43.5L14.6 41.3C15.9 42 17.3 42.6 18.7 43L20 47.4C20.1 47.8 20.5 48.1 21 48.1H27.3C27.7 48.1 28.1 47.8 28.3 47.4L29.6 43C31 42.6 32.4 42 33.7 41.3L37.8 43.5C38.2 43.7 38.7 43.6 39 43.3L43.5 38.8C43.8 38.5 43.9 38 43.7 37.6L41.5 33.5C42.2 32.2 42.8 30.8 43.2 29.4L47.6 28.1C48 28 48.3 27.6 48.3 27.1V20.8C48.3 20.4 48 20 47.6 19.8L43.2 18.5C42.8 17.1 42.2 15.7 41.5 14.4L43.7 10.3C43.9 9.9 43.8 9.4 43.5 9.1L39 4.6C38.7 4.3 38.2 4.2 37.8 4.4L33.7 6.6C32.4 5.9 31 5.3 29.6 4.9L28.3 0.5C28 0.3 27.6 0 27.2 0H20.9C20.5 0 20.1 0.3 19.9 0.7L18.6 5.1C17.2 5.5 15.8 6.1 14.5 6.8L10.4 4.6C10 4.4 9.5 4.5 9.2 4.8L4.8 9.3C4.5 9.6 4.4 10.1 4.6 10.5L6.8 14.6C6.1 15.9 5.5 17.3 5.1 18.7L0.7 19.9ZM6.9 19.6C7.3 18 8 16.5 8.8 15C9 14.7 9 14.3 8.8 14L6.7 10.1L10.1 6.7L14 8.8C14.3 9 14.7 9 15 8.8C16.4 7.9 18 7.3 19.6 6.9C19.9 6.8 20.2 6.6 20.3 6.2L21.6 2H26.4L27.7 6.2C27.8 6.5 28.1 6.8 28.4 6.9C30 7.3 31.5 8 33 8.8C33.3 9 33.7 9 34 8.8L37.9 6.7L41.3 10.1L39.2 14C39 14.3 39 14.7 39.2 15C40.1 16.4 40.7 18 41.1 19.6C41.2 19.9 41.4 20.2 41.8 20.3L46 21.6V26.4L41.8 27.7C41.5 27.8 41.2 28.1 41.1 28.4C40.7 30 40 31.5 39.2 33C39 33.3 39 33.7 39.2 34L41.3 37.9L37.9 41.3L34 39.2C33.7 39 33.3 39 33 39.2C31.6 40.1 30 40.7 28.4 41.1C28.1 41.2 27.8 41.4 27.7 41.8L26.4 46H21.6L20.3 41.8C20.2 41.5 19.9 41.2 19.6 41.1C18 40.7 16.5 40 15 39.2C14.7 39 14.3 39 14 39.2L10.1 41.3L6.7 37.9L8.8 34C9 33.7 9 33.3 8.8 33C7.9 31.6 7.3 30 6.9 28.4C6.8 28.1 6.6 27.8 6.2 27.7L2 26.4V21.6L6.2 20.3C6.6 20.2 6.8 20 6.9 19.6Z" fill="#32E3A0"/>
                <Path d="M24 37.6C31.5 37.6 37.6 31.5 37.6 24C37.6 16.5 31.5 10.4 24 10.4C16.5 10.4 10.4 16.5 10.4 24C10.4 31.5 16.5 37.6 24 37.6ZM12.4 24C12.4 17.6 17.6 12.4 24 12.4C30.4 12.4 35.6 17.6 35.6 24C35.6 30.4 30.4 35.6 24 35.6C22.4 35.6 20.9 35.3 19.5 34.7L23 31.2C25.9 31.9 28.9 31.1 31 29C33 27 33.8 24.2 33.3 21.4C33.2 20.6 32.2 20.3 31.6 20.9L27.6 24.9L23.1 20.4L27.1 16.4C27.7 15.8 27.4 14.9 26.6 14.7C23.8 14.2 21 15 19 17C16.9 19.1 16.1 22.1 16.8 25L13.3 28.5C12.7 27.2 12.4 25.6 12.4 24ZM18.6 26C18.9 25.7 19 25.3 18.8 25C18 22.7 18.6 20.1 20.4 18.4C21.4 17.4 22.7 16.8 24 16.6L21 19.7C20.6 20.1 20.6 20.7 21 21.1L26.9 27C27.5 27.6 28.1 27.2 28.3 27L31.4 23.9C31.2 25.3 30.6 26.5 29.6 27.5C27.9 29.2 25.4 29.8 23 29.1C22.6 29 22.2 29.1 22 29.3L17.7 33.6C16.4 32.7 15.2 31.6 14.4 30.3L18.6 26Z" fill="#32E3A0"/>
            </Svg>

        )
    }
}