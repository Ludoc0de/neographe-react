import React from 'react'
import Logo from '../images/logo-black.png'

class Footer extends React.Component {
    /*
    constructor() {
        super()
    }
    */
    render() {
        return (
            <footer>
                <img className="logo" alt="logo" src={Logo} />
            </footer>
        )
    }
}

export default Footer