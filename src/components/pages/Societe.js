import React from 'react'
import Menu from '../Menu'
import Carrousel from '../Carrousel'
import Footer from '../Footer'

import grundfos from '../../assets/img/partners/grundfos.png'
import ebara from '../../assets/img/partners/ebara.jpg'
import schneider from '../../assets/img/partners/schneider.jpg'
import fancom from '../../assets/img/partners/fancom.gif'
import motovario from '../../assets/img/partners/motovario.jpg'
import rotor from '../../assets/img/partners/rotor.jpg'

export default class Societe extends React.Component{
    render(){
        return(
            <React.Fragment>
                <header>
                    <Menu/>
                    <Carrousel/>
                </header>
                <main>
                    <section className='container societe'>
                        <div className='banner'>
                            <h1>Qui Sommes nous ?</h1>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h2>Historique</h2>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Morbi viverra ipsum et metus rutrum, eu viverra turpis accumsan. 
                                In commodo nisi nec nisi tristique suscipit vel ornare lacus. 
                                Aliquam mattis tortor non porttitor euismod. 
                                Sed blandit risus erat, non pellentesque sapien rhoncus sit amet. 
                                Morbi auctor, felis eu venenatis ullamcorper, nulla augue volutpat urna, sit amet lobortis magna risus nec ipsum.
                                </p>
                            </div>
                            <div className="col">
                                <h2>Nos engagements</h2>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Morbi viverra ipsum et metus rutrum, eu viverra turpis accumsan. 
                                In commodo nisi nec nisi tristique suscipit vel ornare lacus. 
                                Aliquam mattis tortor non porttitor euismod. 
                                Sed blandit risus erat, non pellentesque sapien rhoncus sit amet. 
                                Morbi auctor, felis eu venenatis ullamcorper, nulla augue volutpat urna, sit amet lobortis magna risus nec ipsum.
                                </p>
                            </div>
                        </div>
                        <div className='banner'>
                            <h1>Exemple</h1>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h2>Activités</h2>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Morbi viverra ipsum et metus rutrum, eu viverra turpis accumsan. 
                                In commodo nisi nec nisi tristique suscipit vel ornare lacus. 
                                Aliquam mattis tortor non porttitor euismod. 
                                Sed blandit risus erat, non pellentesque sapien rhoncus sit amet. 
                                Morbi auctor, felis eu venenatis ullamcorper, nulla augue volutpat urna, sit amet lobortis magna risus nec ipsum.
                                </p>
                            </div>
                            <div className="col">
                                <h2>Équipe, valeurs, Atouts</h2>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Morbi viverra ipsum et metus rutrum, eu viverra turpis accumsan. 
                                In commodo nisi nec nisi tristique suscipit vel ornare lacus. 
                                Aliquam mattis tortor non porttitor euismod. 
                                Sed blandit risus erat, non pellentesque sapien rhoncus sit amet. 
                                Morbi auctor, felis eu venenatis ullamcorper, nulla augue volutpat urna, sit amet lobortis magna risus nec ipsum.
                                </p>
                            </div>
                        </div>
                        <div className='banner'>
                            <h1>Notre expérience à votre service</h1>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h2>Nos valeurs</h2>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Morbi viverra ipsum et metus rutrum, eu viverra turpis accumsan. 
                                In commodo nisi nec nisi tristique suscipit vel ornare lacus. 
                                Aliquam mattis tortor non porttitor euismod. 
                                Sed blandit risus erat, non pellentesque sapien rhoncus sit amet. 
                                Morbi auctor, felis eu venenatis ullamcorper, nulla augue volutpat urna, sit amet lobortis magna risus nec ipsum.
                                </p>
                            </div>
                            <div className="col">
                                <h2>Nos process</h2>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Morbi viverra ipsum et metus rutrum, eu viverra turpis accumsan. 
                                In commodo nisi nec nisi tristique suscipit vel ornare lacus. 
                                Aliquam mattis tortor non porttitor euismod. 
                                Sed blandit risus erat, non pellentesque sapien rhoncus sit amet. 
                                Morbi auctor, felis eu venenatis ullamcorper, nulla augue volutpat urna, sit amet lobortis magna risus nec ipsum.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2>Nos partenaires</h2>
                        </div>
                        <div className="row">
                            <div className="col-sm"><img src={grundfos} width="150" alt="grundfos"/></div>
                            <div className="col-sm"><img src={ebara} width="150" alt="ebara"/></div>
                            <div className="col-sm"><img src={schneider} width="150" alt="schneider"/></div>
                            <div className="col-sm"><img src={fancom} width="150" alt="fancom"/></div>
                            <div className="col-sm"><img src={motovario} width="150" alt="motovario"/></div>
                            <div className="col-sm"><img src={rotor} width="150" alt="rotor"/></div>
                        </div>
                    </section>
                </main>
                <Footer/>
            </React.Fragment>
        )
    }
}