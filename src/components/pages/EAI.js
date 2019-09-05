import React from 'react'
import Menu from '../Menu'
import Carrousel from '../Carrousel'
import Footer from '../Footer'
import ThumbnailsList from '../thumbnails/ThumbnailsList'
import ListEAI from '../ListEAI'
import { connect} from 'react-redux'

class EAI extends React.Component{
    render(){
        const { data, navigation, filter } = this.props
        console.log(this.props)
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
                                <ListEAI
                                    thumbnails={data}
                                />
                            </div>
                            <div className='col-9'>
                                <ThumbnailsList
                                    thumbnails={filter}
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
        data: state.data.EAI,
        filter: state.filter
    }
}

export default connect(mapStateToProps)(EAI)