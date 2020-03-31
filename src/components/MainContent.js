import React, { Component } from 'react'
import DarkLogo from '../images/logo-black.png'
import LoaderImage from '../images/loader.svg'

class MainContent extends Component {
    constructor(){
        super()
        this.state = {
            loaderImage:'',
            loader: '',
            mainLog:'none',
            anime: 'none',
            LogoMirror:'none' 
        }
        this.handleLoad = this.handleLoad.bind(this)
    }

    
    componentDidMount(){
        window.addEventListener('load', this.handleLoad)
    }

    componentWillUnmount(){
        window.removeEventListener('load', this.handleLoad)
    }



    handleLoad(){
        setTimeout(() => {
        this.setState(prevState => {
            return {
                loaderImage: 'none',
                loader: 'none',
                mainLog: '',
                anime: '',
                LogoMirror: 'bloc'
            }
        })
        }, 1000)
    }

    render(){
        return(
            <div className='mainContent'>
                <img className='loaderImage' src={LoaderImage} 
                    style={{ display: this.state.loaderImage }} />
                <svg className='loader'>
                    <circle cx="80" cy="80" r="65" style={{animation: this.state.loader}}></circle>
                </svg>

                <img className='mainLogo' src={DarkLogo}  
                    style={{ display: this.state.mainLog, animation:this.state.anime}}
                />

                {
                    !this.state.anime &&
                    <img className='mainLogoMirror' src={DarkLogo}
                        style={{ display: this.state.LogoMirror }}
                    />
                }
                <section className='services'>
                    <h2 className='vertical'>Services</h2>
                </section>
                
            </div>
        )
    }
}

export default MainContent