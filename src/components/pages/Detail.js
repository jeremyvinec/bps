import React from 'react'
import { TouchableOpacity } from 'react-native'
import Menu from '../Menu'
import Carrousel from '../Carrousel'
import Footer from '../Footer'

import Cover from '../thumbnails/Cover'
import Cross from '../../assets/svg/Cross'

export default class Detail extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            expended: false,
            read: false,
            thumbnails: props.navigation.getParam('thumbnails')
        }
    }

    _expendedText = () => {
        this.setState({ 
            expended: !this.state.expended,
            read: !this.state.read 
        })
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
        const { state, navigate } = this.props.navigation
        const Read = this.state.read ? 'Read Less' : 'Read More'
        const params = state.params || {}
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
                                    <div>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lorem tortor, feugiat et varius quis, dictum id erat. 
                                    Morbi tincidunt hendrerit lorem, at tincidunt velit. Morbi consectetur non arcu at consectetur.
                                    {this._getMoreText()}
                                    </div>
                                    <a className="btn" onClick={this._expendedText}>{Read}</a>
                                </div>
                                <TouchableOpacity onPress={() => navigate(params.go_back_key)}>
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