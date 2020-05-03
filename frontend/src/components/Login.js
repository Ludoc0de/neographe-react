import React from 'react'


class Login extends React.Component {
    constructor() {
    super();
        this.state ={
            user: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        
    }
    

    render() {
        return (
            <form className="login-form" onSubmit={this.handleSubmit} action='http://localhost:3001/api/auth' method='post'>
                <p className="contact-input">
                    <input
                        type="text"
                        value={this.state.firstName}
                        name="user"
                        onChange={this.handleChange}
                        required
                    />
                    <label className="contact-label">
                        <span className="contact-name">Utilisateur</span>
                    </label>
                </p>
                <p className="contact-input">
                    <input
                        type="password"
                        value={this.state.lastName}
                        name="password"
                        onChange={this.handleChange}
                        required
                    />
                    <label className="contact-label">
                        <span className="contact-name">mot de passe</span>
                    </label>
                </p>
                <input
                    className="login-button"
                    value="Envoyer"
                    type="submit"
                    name="submit"
                />
                <br />
                <button
                    className="back-button"
                    value="Retour"
                    type="button"
                    name="submit"
                >
                    <a style={{textDecoration: 'none', color: 'black'}} href="/">Retour</a>
                </button>
        </form>
        )
    }
}

export default Login