import React from 'react'
import Menu from '../Menu'
import Carrousel from '../Carrousel'
import ThumbnailsList from '../thumbnails/ThumbnailsList'
import ListEAE from '../listEAE'
import Footer from '../Footer'
import { connect } from 'react-redux'

class EAE extends React.Component{
    render(){
        const { data } = this.props
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
                                <ListEAE/>
                            </div>
                            <div className='col-9'>
                                <ThumbnailsList
                                    thumbnails={data}
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
        data: state.data.EAE
    }
}

export default connect(mapStateToProps)(EAE)

