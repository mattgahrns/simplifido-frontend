import React from 'react';

class Login extends React.Component {

    constructor() {
        super();
        this.state = {
          username: '',
          password: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    login = () => {
        this.props.handleLogin();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                user: {
                    username: this.state.username,
                    password: this.state.password
                }
            })
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            localStorage.setItem('token', json.jwt);
            this.login()
        });
        this.props.history.push("/")
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <h1>Login</h1>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input type="text" name="username" placeholder="Username" 
                    onChange={(event) => this.handleChange(event)}/>
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" placeholder="Password" 
                    onChange={(event) => this.handleChange(event)}/>
                </div>
                <input type="submit" value="Login" />
            </form>
        );
    }
    
}

export default Login;