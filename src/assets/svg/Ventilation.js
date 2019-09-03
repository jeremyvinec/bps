import { Svg, Path } from 'react-native-svg'
import React from 'react'

const Ventilation = props => (
    <Svg width={props.width} height={props.height} viewBox="0 0 87 74" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M86.842 33.51H73.16L72.273 31.199C72.226 31.07 67.759 18.67 73.398 11.526L77.015 19.274L79.977 0.00699997L60.709 2.97L68.64 6.669C59.928 16.626 65.415 32.182 65.902 33.505H46.234L45.354 31.195C45.301 31.066 40.834 18.666 46.472 11.521L50.09 19.269L53.048 0.00300026L33.787 2.965L41.713 6.665C33.003 16.622 38.487 32.178 38.978 33.502H19.306L18.425 31.191C18.375 31.063 13.908 18.662 19.55 11.518L23.166 19.266L26.129 0L6.866 2.962L14.794 6.661C6.083 16.618 11.567 32.173 12.059 33.498H0V40.274H14.639L17.524 47.838C17.575 47.974 22.565 61.5 15.583 68.49L20.375 73.281C30.47 63.181 24.133 46.149 23.861 45.428L21.893 40.273H41.561L44.446 47.837C44.496 47.973 49.485 61.499 42.503 68.489L47.294 73.28C57.391 63.18 51.055 46.148 50.782 45.427L48.813 40.272H68.481L71.37 47.836C71.426 47.972 76.41 61.498 69.428 68.488L74.22 73.279C84.314 63.179 77.98 46.147 77.704 45.426L75.739 40.271H86.835V33.505H86.842V33.51Z" fill={props.fill}/>
    </Svg>
)

export default Ventilation