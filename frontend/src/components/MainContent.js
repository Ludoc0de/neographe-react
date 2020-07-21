import React, { Component } from 'react'
import sunset from '../images/sunset.svg'
import moon from '../images/moon.svg'

import DarkMail from '../images/darkMail.svg'
import DarkInsta from '../images/darkInsta.svg'
import Logo from '../images/logo-white.png'
import Mail from '../images/mail.svg'
import Insta from '../images/insta.svg'
import DarkLogo from '../images/logo-black.png'
import LoaderImage from '../images/loader.svg'

import Services from '../images/langages.svg'
import ProjectImage1 from '../images/projet1.jpg'
import ProjectImage2 from '../images/projet2.jpg'
import ProjectImage3 from '../images/projet3.jpg'
import ProjectImage4 from '../images/projet4.jpg'
import ProjectImage5 from '../images/projet5.jpg'
import ProjectImage6 from '../images/projet6.jpg'

class MainContent extends Component {
    constructor(){
        super()
        this.state = {
            title: 'NEOGRAPHE',
            moonLight: true,
            loader: '',
            mainLog:'none',
            anime: 'none',
            LogoMirror:'none',
            // openServicesServices:false,
            // openServicesProject: false,
            // openServicesContact: false,
            borderService:false,
            firstName:"",
            lastName:"",
            mail:"",
            subject:"site",
            textArea:"Saisissez ici votre demande"
        }

        this.handleClick = this.handleClick.bind(this)
        this.turnLight = this.turnLight.bind(this)
        this.handleLoad = this.handleLoad.bind(this)
        this.handleClickServices = this.handleClickServices.bind(this)
        this.handleClickProject = this.handleClickProject.bind(this)
        this.handleClickContact = this.handleClickContact.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        this.turnOff.addEventListener('click', this.turnLight)
        this.turnOn.addEventListener('click', this.turnLight)

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
        }, 1000)
    }

        handleClick() {
            setTimeout(() => {
                this.setState(prevState => {
                    return {
                        moonLight: !prevState.moonLight
                    }
                })
            }, 500)
        }

        turnLight() {
            document.body.classList.toggle('darkTheme')
            this.firstSection.classList.toggle('darkTheme')
            this.secondSection.classList.toggle('darkTheme')
            // "for contact zone" this.thirdSection.classList.toggle('darkTheme')
            this.header.classList.toggle('navDarkTheme')
            this.footer.classList.toggle('navDarkTheme')
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

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event){
        fetch('http://localhost:3001/api/form', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                mail: this.state.mail,
                subject: this.state.subject,
                textArea: this.state.textArea
            })
        });
        alert("Formulaire envoyé")
        event.preventDefault()
    }

    render(){ 
        return(
            <>
            <div>
                <header ref={node => this.header = node} >
                    <p className='header-p'>{this.state.title}</p>
                    <div>
                        <img className="moon" src={moon} alt="moon"
                            ref={node => this.turnOn = node}
                            onClick={this.handleClick}
                            style={{ display: this.state.moonLight ? 'none' : 'inline-block' }}
                        />

                        {
                            this.state.anime ?
                            <img className="sun" src={sunset} alt="sun"
                                ref={node => this.turnOff = node}
                                onClick={this.handleClick}
                                style={{ display:'none' }}
                            /> : 
                            <img className="sun" src={sunset} alt="sun"
                                ref={node => this.turnOff = node}
                                onClick={this.handleClick}
                                style={{ display: this.state.moonLight ? 'inline-block' : 'none' }}
                            />
                        }
                        
                    </div>
                </header >

                <footer ref={node => this.footer = node}>
                    <a href='mailto:contact@neographe.org' target='_blank' rel='noopener noreferrer'>
                        {
                            this.state.moonLight ?
                                <img className="logo2" alt="DarkMail" src={DarkMail} /> :
                                <img className="logo2" alt="Mail" src={Mail} />
                        }
                    </a>
                    {
                        this.state.moonLight ?
                            <img className="logo" alt="logo" src={DarkLogo} /> :
                            <img className="logo" alt="logo" src={Logo} />
                    }
                        <a href='https://www.instagram.com/asakura.cl/' target='_blank' rel='noopener noreferrer'>
                        {
                            this.state.moonLight ?
                                <img className="logo2" alt="darkInsta" src={DarkInsta} /> :
                                <img className="logo2" alt="Insta" src={Insta} />
                        }
                    </a>
                    <h4 className='footer-h'>Créateur de site web</h4>
                </footer >
            </div >

            <div className='mainContent'>
                <img className='loaderImage' alt='loaderImage' src={LoaderImage} 
                    style={{ display: this.state.loader}} />
                <svg className='loader' style={{ display: this.state.loader }}>
                    <circle cx="80" cy="80" r="65" style={{animation: this.state.loader}}></circle>
                </svg>

                {
                    this.state.moonLight ?
                        <img className='mainLogo' alt='logo' src={DarkLogo}
                            style={{ display: this.state.mainLog, animation: this.state.anime }} /> :
                        <img className='mainLogo' alt='logo' src={Logo}
                            style={{ display: this.state.mainLog }} />
                }

                {
                    !this.state.anime &&
                    <img className='mainLogoMirror' alt='logo' src={DarkLogo}
                        style={{ display: this.state.LogoMirror }}
                    />
                }

                {
                    this.state.moonLight ?
                        <img className='mainLogoMirror' alt='logo' src={DarkLogo}
                                style={{ display: this.state.LogoMirror, animation: 'none'}} /> :
                        <img className='mainLogoMirror' alt='logo' src={Logo}
                                style={{ animation: 'none', backgroundColor: '#0a1119'}} />
                }

                    <section ref={node => this.firstSection = node} className='services' 
                    style={{ right: this.state.openServices ? '-'+0.25+'%' : '-'+100+'%'}}>
                    {!this.state.anime &&
                        <h2 className='services-h2' 
                            onClick={this.handleClickServices}
                            style={{ 
                                right: this.state.openServices && 0+'em',
                                marginLeft: this.state.openServices ? 0 + 'em' : 0.5+ 'em',
                                writingMode: this.state.openServices && 'horizontal-tb' 
                            }}
                        >
                            Services
                        </h2>
                    }

                    <p className='services-info'> cliquer ici</p>
                       
                    <div className='services-illustration'>
                        <div className='border'
                            onClick={this.handleClickServices}
                            style={{ 
                                width: this.state.borderService && 0.3+'em',
                                backgroundColor: this.state.borderService && '#4175af'
                            }}
                        > 
                        </div>

                        <img className='services-image' alt='services' src={Services}  />
                        <div className='services-text'>
                            <h3 className='services-h3'>Bienvenue sur Néographe</h3>
                            <div className='services-p'>
                                <p>
                                    Néographe, c'est quoi ? Une équipe de <strong>freelance en Guyane !</strong> Nous serons là pour vous aider à conceptualiser vos idées dans le monde du numérique si indispensable à nos vies.
                                </p>
                                <p>
                                        Nous apportons nos services dans la création de site internet avec les derniers langages modernes. Une écoute et un suivi personnalisé  de vos projets, un retour professionnel sur les conseils techniques <b>pour la vie de votre site.</b>
                                </p>
                                <p>
                                    Vous cherchez à vous démarquer ? Nous réalisons aussi des <b>logos à votre image,</b> reflétons les idées même de ce que vous désirez.
                                     <br />
                                    Enfin, il nous est possible d'arrêter le temps avec notre <b>équipe de photographes</b> qui saura satisfaire les moments éternels de votre vie.
                                </p>
                                <h1 className='services-h1'>
                                    Création site web | Création de logo | Shooting photo 
                                    <br/>
                                    Neographe, c'est ca !
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>
                 
                <section ref={node => this.secondSection = node} className='project' 
                    style={{right: this.state.openProject ? '-'+0.25+'%' : '-'+100+'%'}}>
                    {!this.state.anime &&
                        <h2 className='project-h2'
                            onClick={this.handleClickProject}
                            
                            style={{
                                right: this.state.openProject && 0 + 'em',
                                marginTop: this.state.openProject ? 0 + 'em' : 5.7 + 'em',
                                marginLeft: this.state.openProject ? 0 + 'em' : 0.5 + 'em',
                                writingMode: this.state.openProject && 'horizontal-tb'
                            }}
                        >
                            Projets réalisés
                        </h2>
                    }

                    <p className='project-info'> cliquer ici</p>

                    <div className='project-illustration'>
                        <div className='project-portfolio'>
                            <div className='project-1 project-number'>
                                <h3>Projet 1</h3>
                                <img className='project-images' alt='icones agence web' src={ProjectImage1} />
                                <p className='project-p'>Réalisation d'un site vitrine en utilisant HTML5|CSS3 et validation W3C</p>
                                <a className='project-a' href="https://projet1.neographe.org/" rel="noopener noreferrer" target="_blank">
                                    Une agence web !
                                </a>
                            </div>

                            <div className='project-2 project-number'>
                                <h3>Projet 2</h3>
                                <img className='project-images' alt='site touristique' src={ProjectImage2} />
                                <p className='project-p'>Un site touristique avec wordpress, principe de SEO, Validation de la WCAG 2.0 et le responsive design !</p>
                                    <a className='project-a' href="https://projet2.neographe.org/" rel="noopener noreferrer" target="_blank">
                                    Pour du tourisme ?
                                </a>
                            </div>

                            <div className='project-3 project-number'>
                                <h3>Projet 3</h3>
                                <img className='project-images' alt='site location vélo' src={ProjectImage3} />
                                <p className='project-p'>Utilisation de JavaScript, d'une API, d'une carte interactive, d'un formulaire et confirmation par signature.</p>
                                <a className='project-a' href="https://projet3.neographe.org/" rel="noopener noreferrer" target="_blank">
                                    Avec un vélo !
                                </a>
                            </div>

                            <div className='project-4 project-number'>
                                <h3>Projet 4</h3>
                                <img className='project-images' alt='blog écrivain' src={ProjectImage4} />
                                <p className='project-p'>
                                    L'univers du BackEnd avec PHP/MYSQ, blog en CRUD et utilisation de CSS BOOTSTRAP
                                </p>
                                <a className='project-a' href="https://projet4.neographe.org/" rel="noopener noreferrer" target="_blank">
                                    Ou un livre ?!
                                </a>
                            </div>
                            <div className='project-5 project-number'>
                                <h3>Projet 5</h3>
                                    <img className='project-images' alt='blog food' src={ProjectImage5} />
                                <p className='project-p'>HTML5|CSS3|JS|PHP|MySql|GITHUB</p>
                                <a className='project-a' href="https://food.neographe.org/" rel="noopener noreferrer" target="_blank">
                                    Dès qu'on mange !
                                </a>
                            </div>
        
                            <div className='project-6 project-number'>
                                <h3>Projet 6</h3>
                                <img className='project-images' alt='site vitrine' src={ProjectImage6} />
                                <p className='project-p'>Création site vitrine avec HTML5|CSS3|REACTJS</p>
                                <a className='project-a' href="https://neographe.org/" 
                                rel="noopener noreferrer" target="_blank">
                                    Ou prendre contact ?
                                </a>
                            </div>

                        </div>
                    </div>
                </section>

                {/* <section ref={node => this.thirdSection = node} className='contact' 
                    style={{ right: this.state.openContact ? '-'+0.25+'%' : '-' + 100 + '%' }}>
                    {!this.state.anime &&
                        <h2 className='contact-h2'
                            onClick={this.handleClickContact}

                            style={{
                                right: this.state.openContact && 0 + 'em',
                                marginTop: this.state.openContact ? 0 + 'em' : 16.39 + 'em',
                                marginLeft: this.state.openContact ? 0 + 'em' : 0.5 + 'em',
                                writingMode: this.state.openContact && 'horizontal-tb'
                            }}
                        >
                            Contact
                        </h2>
                    }
                    <div className="contact-illustration">
                            <form className="contact-form" onSubmit={this.handleSubmit} action='http://localhost:3001/api/form' method='post'>
                            <p className="contact-input">
                                <input
                                    type="text"
                                    value={this.state.firstName}
                                    name="firstName"
                                    onChange={this.handleChange}
                                    required
                                />
                                <label className="contact-label">
                                    <span className="contact-name">Prénom</span>
                                </label>
                            </p>
                            <p className="contact-input">
                                <input
                                    type="text"
                                    value={this.state.lastName}
                                    name="lastName"
                                    onChange={this.handleChange}
                                    required
                                />
                                <label className="contact-label">
                                    <span className="contact-name">Nom</span>
                                </label>
                            </p>
                            <p className="contact-input">
                                <input
                                    type="email"
                                    value={this.state.mail}
                                    name="mail"
                                    onChange={this.handleChange}
                                    required
                                />
                                <label className="contact-label">
                                    <span className="contact-name">Mail</span>
                                </label>
                            </p>
                            <p className="contact-input"> Objet :
                                <select 
                                    className="contact-select"
                                    value={this.state.subject}
                                    onChange={this.handleChange}
                                    name="subject"
                                    required
                                >
                                    <option value="site">Création de site</option>
                                    <option value="logo">Création de logo</option>
                                    <option value="photo">Shooting photo</option>
                                </select>
                            </p>
                            <textarea 
                                className="contact-textarea"
                                value={this.state.textArea}
                                onChange={this.handleChange}
                                name="textArea"
                                rows={8}
                                cols={40}
                            >
						    </textarea>
                            <input
                                className="contact-button" 
                                value="Envoyer"
                                type="submit" 
                                name="submit"
                            />
                        </form>
                    </div>
                </section> */}
            </div>
            </>
        )
    }
}

export default MainContent