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
                <img className="logo" alt="" src={Logo} />
            </footer>
        )
    }
}

export default Footer