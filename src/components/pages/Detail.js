import React from 'react'
import { TouchableOpacity } from 'react-native'
import Menu from '../Menu'
import Carrousel from '../Carrousel'
import Footer from '../Footer'

import Cover from '../thumbnails/Cover'
import Cross from '../../assets/svg/Cross'

class Detail extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            expended: false,
            thumbnails: props.navigation.getParam('thumbnails')
        }
    }

    _expendedText(){
        this.setState({ expended: true })
    }

    _getMoreText(){
        if(this.state.expended){
            return(
                <p>
                    My extended content
                </p>
            )
        } else {
            return null
        }
        
    }

    render(){
        const { thumbnails } = this.state
        const { state, goBack } = this.props.navigation
        const params = state.params || {}
        console.log(thumbnails)
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
                          <div className="container">
                            <div className="row">
                                <div className="col-6 text-left">
                                    <img className="img-fluid" src={Cover[thumbnails.type]} alt=""/>
                                </div>
                                <div className="col-4 text-left">
                                    <h1 style={{lineHeight: 0}}>{thumbnails.name}</h1>
                                    <small>{thumbnails.type}</small>
                                    <h3>Information</h3>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lorem tortor, feugiat et varius quis, dictum id erat. 
                                    Morbi tincidunt hendrerit lorem, at tincidunt velit. Morbi consectetur non arcu at consectetur.
                                    </p>
                                    <a onClick={this._expendedText}>Read More</a>
                                    {this._getMoreText()}
                                </div>
                                <TouchableOpacity onPress={() => goBack(params.go_back_key)}>
                                    <Cross with="20" height="20" fill="#666666"/>
                                </TouchableOpacity>
                            </div>
                          </div>
                      </section>
                  </main>
                  <Footer/>
              </React.Fragment> 
        )
    }
}

export default Detail