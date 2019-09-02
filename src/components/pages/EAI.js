import React from 'react'
import Menu from '../Menu'
import Carrousel from '../Carrousel'
import Footer from '../Footer'
import ThumbnailsList from '../thumbnails/ThumbnailsList'
import List from '../List'
import { connect} from 'react-redux'

class EAI extends React.Component{
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
                                <List/>
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
        data: state.data.EAI
    }
}

export default connect(mapStateToProps)(EAI)