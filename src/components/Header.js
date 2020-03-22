import React from 'react'
import sunset from '../images/sunsetMini.svg'
import moon from '../images/moon.svg'


class Header extends React.Component {
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
        this.header.classList.toggle('headerDarkTheme')
    }

    componentDidMount() {
        this.turnOff.addEventListener('click', this.turnLight)
        this.turnOn.addEventListener('click', this.turnLight)
    }

    render() {
        return (
            <header ref={node => this.header = node}>
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
        )
    }
}

export default Header