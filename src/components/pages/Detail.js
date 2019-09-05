import React from 'react'
import Menu from '../Menu'
import Carrousel from '../Carrousel'
import Footer from '../Footer'

class Detail extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            thumbnails: props.navigation.getParam('thumbnails')
        }
    }

    render(){
        const { thumbnails } = this.state
        console.log(this.state.thumbnails)
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
                          <h1 className="my-4">{thumbnails.name}</h1>
                          <div className="row">
                              <div className="col-md-8">
                              <img className="img-fluid" src="http://placehold.it/750x500" alt=""/>
                              </div>
                              <div className="col-md-4">
                              <h3 className="my-3">Description</h3>
                              <p>{thumbnails.description}</p>
                              <h3 className="my-3">Project Details</h3>
                              <ul>
                                  <li>Lorem Ipsum</li>
                                  <li>Dolor Sit Amet</li>
                                  <li>Consectetur</li>
                                  <li>Adipiscing Elit</li>
                              </ul>
                              </div>
                          </div>
                          <h3 className="my-4">Related Projects</h3>
                          <div className="row">
                              <div className="col-md-3 col-sm-6 mb-4">
                              <a href="#">
                                      <img className="img-fluid" src="http://placehold.it/500x300" alt=""/>
                                  </a>
                              </div>
                              <div className="col-md-3 col-sm-6 mb-4">
                              <a href="#">
                                      <img className="img-fluid" src="http://placehold.it/500x300" alt=""/>
                                  </a>
                              </div>
                              <div className="col-md-3 col-sm-6 mb-4">
                              <a href="#">
                                      <img className="img-fluid" src="http://placehold.it/500x300" alt=""/>
                                  </a>
                              </div>
                              <div className="col-md-3 col-sm-6 mb-4">
                              <a href="#">
                                      <img className="img-fluid" src="http://placehold.it/500x300" alt=""/>
                                  </a>
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

export default Detail