import React, { Component } from 'react'
import DarkLogo from '../images/logo-black.png'

class MainContent extends Component {
    /*
    constructor(){
        super()
    }
    */
    render(){
        return(
            <div className='mainContent'>
                <img className='mainLogo' src={DarkLogo}/>
                <img className='mainLogoMirror' src={DarkLogo} />
            </div>
        )
    }
}

export default MainContent