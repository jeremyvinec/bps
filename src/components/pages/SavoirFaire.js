import React from 'react'

import Remote from '../../assets/svg/Remote'
import Pump from '../../assets/svg/Pump'
import Motor from '../../assets/svg/Motor'

export default class Services extends React.Component{
    render(){
        return(
                <section class="container">
                    <div class='title'><h2>Services</h2></div>
                    <div class="row">
                        <div class="bloc col">
                            <Remote/>
                            <h4>Élevage</h4>
                            <hr class="bar"/>
                            <p>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                                Proin vulputate massa id mi
                                commodo posuere. Integer. 
                            </p>
                        </div><div class="bloc_1 col">
                            <Motor/>
                            <h4>Industriel</h4>
                            <hr class="bar"/>
                            <p>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                                Proin vulputate massa id mi
                                commodo posuere. Integer. 
                            </p>
                        </div><div class="bloc col">
                            <Pump/>
                            <h4>Synertech</h4>
                            <hr class="bar"/>
                            <p>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                                Proin vulputate massa id mi
                                commodo posuere. Integer. 
                            </p>
                        </div><div class="bloc_1 col">
                            <Motor/>
                            <h4>Maintenance</h4>
                            <hr class="bar"/>
                            <p>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                                Proin vulputate massa id mi
                                commodo posuere. Integer. 
                            </p>
                        </div>
                    </div>
                </section>
        )
    }
}