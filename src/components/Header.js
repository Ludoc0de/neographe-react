import React from 'react'


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
            //document.body.classList.add('darkTheme')
        }, 500)
    }

    turnLight() {
        document.body.classList.toggle('darkTheme')
    }

    componentDidMount() {
        this.turnOff.addEventListener('click', this.turnLight)
        this.turnOn.addEventListener('click', this.turnLight)
    }

    render() {
        return (
            <header>
                <p className='header-p'>{this.state.title}</p>
                <div>
                    <i ref={node => this.turnOn = node} className="blackMoon fas fa-moon" onClick={this.handleClick}
                        style={{ display: this.state.moonLight ? 'none' : 'inline-block' }}>
                    </i>
                    <i ref={node => this.turnOff = node} className="clearMoon far fa-moon" onClick={this.handleClick}
                        style={{ display: this.state.moonLight ? 'inline-block' : 'none' }}>
                    </i>
                </div>
            </header>
        )
    }
}

export default Header