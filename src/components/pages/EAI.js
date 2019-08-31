import React from 'react'
import Menu from '../Menu'
import Carrousel from '../Carrousel'
import Footer from '../Footer'
import Thumbnails from '../thumbnails/Thumbnails'
import { connect} from 'react-redux'

class EAI extends React.Component{
    render(){
        console.log(this.props.data)
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
                            <div className='col-4'>
                                Menu
                            </div>
                            <div className='col-8'>
                                <div className='row'>
                                    <Thumbnails/>
                                </div>
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
        data: state.data
    }
}

export default connect(mapStateToProps)(EAI)