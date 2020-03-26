import React from 'react'
import sunset from '../images/sunset.svg'
import moon from '../images/moon.svg'

import DarkLogo from '../images/logo-black.png'
import DarkLinkedin from '../images/darkLinkedin.svg'
import DarkTwitter from '../images/darkTwitter.svg'
import DarkContact from '../images/darkPhone.svg'
import DarkAbout from '../images/darkAbout.svg'

import Logo from '../images/logo-white.png'
import Linkedin from '../images/linkedin.svg'
import Twitter from '../images/twitter.svg'
import Contact from '../images/phone.svg'
import About from '../images/About.svg'

class HeaderFooter extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'NEOGRAPHE',
            moonLight: true
        }
        this.handleClick = this.handleClick.bind(this)
        this.turnLight = this.turnLight.bind(this)
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
        this.header.classList.toggle('navDarkTheme')
        this.footer.classList.toggle('navDarkTheme')
    }

    componentDidMount() {
        this.turnOff.addEventListener('click', this.turnLight)
        this.turnOn.addEventListener('click', this.turnLight)
    }

    render() {
        return (
            <div>
                <header ref={node => this.header = node} >
                    <p className='header-p'>{this.state.title}</p>
                    <div>
                        <img className="moon" src={moon} alt="moon"
                            ref={node => this.turnOn = node}
                            onClick={this.handleClick}
                            style={{ display: this.state.moonLight ? 'none' : 'inline-block' }}
                        />

                        <img className="sun" src={sunset} alt="sun"
                            ref={node => this.turnOff = node}
                            onClick={this.handleClick}
                            style={{ display: this.state.moonLight ? 'inline-block' : 'none' }}
                        />
                    </div>
                </header >

                <footer ref={node => this.footer = node}>
                    <a href='#'>
                        { 
                            this.state.moonLight ?
                            <img className="logo2" alt="darkLinkedin" src={DarkLinkedin} /> : 
                            <img className="logo2" alt="linkedin" src={Linkedin} />
                        }
                    </a>
                    <a href='#'>
                        { 
                            this.state.moonLight ?
                            <img className="logo2" alt="darkTwitter" src={DarkTwitter} /> :
                            <img className="logo2" alt="darkTwitter" src={Twitter} />
                        }
                    </a>
                    {
                        this.state.moonLight ?
                        <img className="logo" alt="logo" src={DarkLogo} /> :
                        <img className="logo" alt="logo" src={Logo} />
                    }
                    <a href='#'>
                        {
                            this.state.moonLight ?
                            <img className="logo2" alt="contact" src={DarkContact} /> :
                            <img className="logo2" alt="contact" src={Contact} />
                        }
                    </a>
                    <a href='#'>
                        {
                            this.state.moonLight ?
                            <img className="logo2" alt="about" src={DarkAbout} /> :
                            <img className="logo2" alt="about" src={About} />
                        }
                    </a>
                </footer >
            </div >
        )
    }
}

export default HeaderFooter