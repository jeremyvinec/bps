import React from 'react'
import Menu from '../Menu'
import Carrousel from '../Carrousel'
import Footer from '../Footer'

export default class Societe extends React.Component{
    render(){
        return(
            <React.Fragment>
                <header>
                    <Menu/>
                    <Carrousel/>
                </header>
                <main>
                    <section class='container'>
                        <div class='container'>
                        <div class='banner'>
                            <h1>Qui Sommes nous ?</h1>
                        </div>
                        <div class="row">
                            <div class="col">
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
                            <div class="col">
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
                        <div class='banner'>
                            <h1>Exemple</h1>
                        </div>
                        <div class="row">
                            <div class="col">
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
                            <div class="col">
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
                        <div class='banner'>
                            <h1>Notre expérience à votre service</h1>
                        </div>
                        <div class="row">
                            <div class="col">
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
                            <div class="col">
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
                        <div class="row">
                            <div class="col-sm">col-sm</div>
                            <div class="col-sm">col-sm</div>
                            <div class="col-sm">col-sm</div>
                            <div class="col-sm">col-sm</div>
                            <div class="col-sm">col-sm</div>
                            <div class="col-sm">col-sm</div>
                        </div>
                    </div>
                    </section>
                </main>
                <Footer/>
            </React.Fragment>
        )
    }
}