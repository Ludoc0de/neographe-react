import React, { Component } from 'react'
import DarkLogo from '../images/logo-black.png'

class MainContent extends Component {
    constructor(){
        super()
        this.state = {
            mainLog:'bloc',
            anime: '',
            LogoMirror:'none' 
        }
        this.handleLoad = this.handleLoad.bind(this)
    }

    componentDidMount(){
        window.addEventListener('load', this.handleLoad)
        console.log('1')
    }

    componentWillUnmount(){
        window.removeEventListener('load', this.handleLoad)
        console.log('awA')
    }

    handleLoad(){
        setTimeout(() => {
        this.setState(prevState => {
            return {
                anime: 'none',
                LogoMirror: 'bloc'  
            }
        })
        }, 3000)
    }

    render(){
        return(
            <div className='mainContent'>
                <img className='mainLogo' src={DarkLogo}  
                    style={{ display: this.state.mainLog, animation:this.state.anime}}
                />
                {
                    this.state.anime && 
                    <img className='mainLogoMirror' src={DarkLogo}
                        style={{ display: this.state.LogoMirror }}
                    />
                }
                
            </div>
        )
    }
}

export default MainContent