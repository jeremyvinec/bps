import React from 'react'
import Menu from '../Menu'
import Carrousel from '../Carrousel'
import ThumbnailsList from '../thumbnails/ThumbnailsList'
import ListEAE from '../listEAE'
import Footer from '../Footer'
import { connect } from 'react-redux'

import links from '../../data/list'

class EAE extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            filter: false
        }
    }

    _thumbnails = (thumbnails, filter) => {
        if(filter === ''){
            return thumbnails
        } else{
            return filter
        }
    }

    _filter = () => {
        this.setState({ filter: !this.state.filter })
    }

    render(){
        const { thumbnails, filter, navigation } = this.props
        const displayFilter = this.state.filter ? '' : 'displayFilter'
        return(
            <React.Fragment>
                <header>
                    <Menu/>
                    <Carrousel/>
                </header>
                <main>
                    <section className='container'>
                        <div className='banner'>
                            <h1>Équipement & automatisme industriel</h1>
                        </div>
                        <div className='row'>
                            <button className="contact1-form-btn filter" onClick={this._filter}>Filtre</button>
                            <div className={`col-3 ${displayFilter}`}>
                                <ListEAE links={links.EAE}/>
                            </div>
                            <div className='col-9'>
                                <ThumbnailsList
                                    thumbnails={this._thumbnails(thumbnails, filter)}
                                    navigation={navigation}
                                />
                            </div>
                        </div>
                    </section>
                </main>
                <Footer/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        thumbnails: state.data.EAE,
        filter: state.filter
    }
}

export default connect(mapStateToProps)(EAE)

