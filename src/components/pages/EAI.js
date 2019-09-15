import React from 'react'
import Menu from '../Menu'
import Carrousel from '../Carrousel'
import Footer from '../Footer'
import ThumbnailsList from '../thumbnails/ThumbnailsList'
import ListEAI from '../ListEAI'
import { connect} from 'react-redux'

import links from '../../data/list'

class EAI extends React.Component{

    _thumbnails = (thumbnails, filter) => {
        if(filter === ''){
            return thumbnails
        } else{
            return filter
        }
    }

    render(){
        const { thumbnails, filter, navigation } = this.props
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
                            <div className='col-3'>
                                <ListEAI links={links.EAI}/>
                            </div>
                            <div className='col-9'>
                                <ThumbnailsList
                                    thumbnails={this._thumbnails(thumbnails, filter)}
                                    filter={filter}
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
        thumbnails: state.data.EAI,
        filter: state.filter
    }
}

export default connect(mapStateToProps)(EAI)
