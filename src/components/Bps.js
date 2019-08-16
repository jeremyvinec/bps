import React from 'react'
import Menu from './Menu'
import SavoirFaire from './SavoirFaire'
import Footer from './Footer'

class Bps extends React.Component{
    render(){
        return(
            <header>
                <Menu/>
                <div>
                    <h1>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit. </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                        Ut metus risus, lobortis id tempus vel, facilisis in tellus. <br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div>
                        <button>
                            services
                        </button>
                    </div>
		        </div>
            </header>
            <main>
                <SavoirFaire/>
            </main>
            <footer>
                <Footer/>
            </footer>
        )
    }
}

export default Bps