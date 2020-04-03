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
            openServicesServices:false,
            openServicesProject: false,
            openServicesContact: false,
            borderService:false
        }
        this.handleLoad = this.handleLoad.bind(this)
        this.handleClickServices = this.handleClickServices.bind(this)
        this.handleClickProject = this.handleClickProject.bind(this)
        this.handleClickContact = this.handleClickContact.bind(this)
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

    handleClickServices(){
        this.setState(prevState => {
            return {
                openServices: !prevState.openServices,
                borderService: !prevState.borderService
            }
        })
    }

    handleClickProject() {
        this.setState(prevState => {
            return {
                openProject: !prevState.openProject
            }
        })
    }

    handleClickContact() {
        this.setState(prevState => {
            return {
                openContact: !prevState.openContact
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

                <section className='services' style={{ right: this.state.openServices ? '-'+0.25+'%' : '-'+100+'%'}}>
                    {!this.state.anime &&
                        <h2 className='services-h2' 
                            onClick={this.handleClickServices}
                            style={{ 
                                right: this.state.openServices ? 0+'em' : 2+'em',
                                marginLeft: this.state.openServices ? 0 + 'em' : 0.5+ 'em',
                                writingMode: this.state.openServices && 'horizontal-tb' 
                            }}
                        >
                            Services
                        </h2>
                    }
                
                    <div className='services-illustration'>
                        <div className='border'
                            onClick={this.handleClickServices}
                            style={{ 
                                width: this.state.borderService && 0.3+'em',
                                backgroundColor: this.state.borderService && '#050505'
                            }}
                        > 
                        </div>

                        <img className='services-image' />
                        <div className='services-text'>
                            <h3 className='services-h3'>Bienveue sur Néographe</h3>
                            <p className='services-p'>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                           
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                    </div>
                </section>
                 
                <section className='project' style={{right: this.state.openProject ? '-'+0.25+'%' : '-'+100+'%'}}>
                    {!this.state.anime &&
                        <h2 className='project-h2'
                            onClick={this.handleClickProject}
                            
                            style={{
                                right: this.state.openProject ? 0 + 'em' : 2 + 'em',
                                marginTop: this.state.openProject ? 0 + 'em' : 5.7 + 'em',
                                marginLeft: this.state.openProject ? 0 + 'em' : 0.5 + 'em',
                                writingMode: this.state.openProject && 'horizontal-tb'
                            }}
                            
                        >
                            Projets réalisés
                        </h2>
                    }
                    <p className='project-p'>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                </section>

                <section className='contact' style={{ right: this.state.openContact ? '-'+0.25+'%' : '-' + 100 + '%' }}>
                    {!this.state.anime &&
                        <h2 className='contact-h2'
                            onClick={this.handleClickContact}

                            style={{
                                right: this.state.openContact ? 0 + 'em' : 2 + 'em',
                                marginTop: this.state.openContact ? 0 + 'em' : 16.39 + 'em',
                                marginLeft: this.state.openContact ? 0 + 'em' : 0.5 + 'em',
                                writingMode: this.state.openContact && 'horizontal-tb'
                            }}

                        >
                            Contact
                        </h2>
                    }
                    <p className='contact-p'>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                </section>
            
            </div>
        )
    }
}

export default MainContent