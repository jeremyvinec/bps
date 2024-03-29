import React from 'react'
import Menu from '../Menu'
import Carrousel from '../Carrousel'
import Footer from '../Footer'

import bobinage from '../../assets/img/workshop/bobinage.png'
import pompes from '../../assets/img/workshop/pompes.png'
import intervantion from '../../assets/img/workshop/intervantion.png'
import electromecanique from '../../assets/img/workshop/electromecanique.png'

export default class MEI extends React.Component{
    render(){
        return(
            <React.Fragment>
                <header>
                    <Menu/>
                    <Carrousel/>
                </header>
                <main className='container'>
                    <section>
                        <div className='banner'>
                            <h1>Atelier de bobinage</h1>
                        </div>
                        <div className='row'>
                            <div className="col-4">
                                <img src={bobinage} alt='bobinage' height="300px"/>
                            </div>
                            <div className="col-6 text-left">
                                <p>
                                <b>Nous assurons la maintenance, la réparation et le bobinage de tous types, toutes marques et puissances de moteurs électriques, pompes et motoréducteurs.</b> 
                                <br/><br/>Notre service va de la simple révision standard à la réparation et au rebobinage complet de votre machine tournante. 
                                Nous confectionnons nos propres bobines, équilibrons toutes les pièces tournantes sur site ou en atelier, assurons l'alignement laser et autres interventions de maintenances. 
                                Nous prenons en charge la dépose et la repose sur site de vos équipements (transport compris).
                                </p>
                            </div>
                        </div>
                        <div className='banner'>
                            <h1>Atelier de réparation électromécanique</h1>
                        </div>
                        <div className='row'>
                            <div className="col-4">
                                <img src={electromecanique} alt='electromecanique' height="300px"/>
                            </div>
                            <div className="col-6 text-left">
                                <p>
                                <b>Nous assurons la maintenance, la réparation de tous types, toutes marques et puissances de moteurs électriques, motoréducteurs et ensembles électromécaniques.</b> 
                                <br/><br/>Notre service va de la simple révision standard à la réparation complète de votre système. 
                                Nous confectionnons nos propres bobines, équilibrons toutes les pièces tournantes sur site ou en atelier, assurons l'alignement laser et autres interventions de maintenances. 
                                Nous prenons en charge la dépose et la repose sur site de vos équipements (transport compris).
                                </p>
                            </div>
                        </div>
                        <div className='banner'>
                            <h1>Atelier de réparation de pompes</h1>
                        </div>
                        <div className='row'>
                            <div className="col-4">
                                <img src={pompes} alt='pompes' height="300px"/>
                            </div>
                            <div className="col-6 text-left">
                                <p>
                                <b>Nous assurons la maintenance, la réparation de tous types, toutes marques de pompe centrifuge, de relevage et alimentaire. </b>
                                <br/><br/>Notre service va de la simple révision standard à la réparation complète ou au remplacement de votre système. 
                                Nous possédons un stock important de pièces détachées (joints, garnitures mécaniques et pièces d’usures) permettant un délai de réalisation très court.
                                Nous prenons en charge la dépose et la repose sur site de vos équipements (transport compris).
                                </p>
                            </div>
                        </div>
                        <div className='banner'>
                            <h1>Intervantion sur site et contrat de maintenance</h1>
                        </div>
                        <div className='row'>
                            <div className="col-4">
                                <img src={intervantion} alt='intervention' height="300px"/>
                            </div>
                            <div className="col-6 text-left">
                                <p>
                                <b>Nous assurons la maintenance sur site, les démontages et remontages, et proposons des contrats de maintenance adaptés.</b> 
                                <br/><br/>Nous faisons intervenir sur vos sites des techniciens dont la compétence et l’expéri ence correspondent à la nature de la demande de service :
                                (pompes, électromécanique, électricité, motorisation , automatisme ….)
                                Nos techniciens disposent des habilitations utiles (électrique, gaz, risque chimique …)
                                Nos matériels de transport et, manutention son un atout non négligeable.
                                </p>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer/>
            </React.Fragment>
        )
    }
}