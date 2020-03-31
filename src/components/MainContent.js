import React, { Component } from 'react'
import DarkLogo from '../images/logo-black.png'
import LoaderImage from '../images/loader.svg'

class MainContent extends Component {
    constructor(){
        super()
        this.state = {
            loader: '',
            mainLog:'none',
            anime: 'none',
            LogoMirror:'none',
            open:false
        }
        this.handleLoad = this.handleLoad.bind(this)
        this.handleClick = this.handleClick.bind(this)
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
                loader: 'none',
                mainLog: '',
                anime: '',
                LogoMirror: 'bloc'
            }
        })
        }, 2000)
    }

    handleClick(){
        this.setState(prevState => {
            return {
                open: !prevState.open
            }
        })
    }

    render(){
        return(
            <div className='mainContent'>
                <img className='loaderImage' src={LoaderImage} 
                    style={{ display: this.state.loader}} />
                <svg className='loader' style={{ display: this.state.loader }}>
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
                <section className='services' style={{right: this.state.open ? 0 : '-'+100+'%'}}>
                    <h2 className='vertical' 
                        onClick={this.handleClick}
                        style={{ 
                            right: this.state.open ? 0+'em' : 2+'em',
                            marginLeft: this.state.open ? 0 + 'em' : 0.5+ 'em',
                            writingMode: this.state.open && 'horizontal-tb' 
                        }}
                    >
                        Services
                    </h2>
                </section>
                
            </div>
        )
    }
}

export default MainContent