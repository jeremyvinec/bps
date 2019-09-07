import React from 'react'
import { Carousel } from 'react-bootstrap'

import entreprise from '../assets/img/entreprise.jpg'

export default class Carrousel extends React.Component{
    render(){
        return(
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={entreprise} // 800 * 400
                alt="Bretagne Pompes Services"
                />
                <Carousel.Caption>
                <h3>Bretagne Pompes Services</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={entreprise}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={entreprise}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        )
    }
}