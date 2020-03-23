import React from 'react'
import Logo from '../images/logo-black.png'
import Linkedin from '../images/linkedinMini.svg'
import Twitter from '../images/twitteMini.svg'
import Contact from '../images/contactMini.svg'
import About from '../images/About.svg'

class Footer extends React.Component {
    /*
    constructor() {
        super();
        this.state = {

        }

    }
*/

    render() {
        return (
            <footer>
                <a href='#'>
                    <img className="logo2" alt="linkedin" src={Linkedin} />
                </a>
                <a href='#'>
                    <img className="logo2" alt="twitter" src={Twitter} />
                </a>
                <img className="logo" alt="logo" src={Logo} />
                <a href='#'>
                    <img className="logo2" alt="contact" src={Contact} />
                </a>
                <a href='#'>
                    <img className="logo2" alt="about" src={About} />
                </a>
            </footer>
        )
    }
}

export default Footer