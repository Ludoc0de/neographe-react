import React from 'react'


class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'NEOGRAPHE',
            moonLight: true
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        setTimeout(() => {
            this.setState(prevState => ({
                moonLight: !prevState.moonLight
            }))
        }, 1000)
    }

    render() {
        return (
            <header>
                <p className='header-p'>{this.state.title}</p>
                <div>
                    <i className="blackMoon fas fa-moon" onClick={this.handleClick}
                        style={{ display: this.state.moonLight ? 'none' : 'inline-block' }}>
                    </i>
                    <i className="clearMoon far fa-moon" onClick={this.handleClick}
                        style={{ display: this.state.moonLight ? 'inline-block' : 'none' }}>

                    </i>
                </div>
            </header>
        )
    }
}

export default Header