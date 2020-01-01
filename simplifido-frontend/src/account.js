import React from 'react';
import { api } from './services/api'

class Account extends React.Component {
    
    constructor(){
        super();
        this.state = {
            user: {}
        }
    }

    componentDidMount(){
        api.auth.getCurrentUser()
        .then(data => {
            this.setState({
                user: data
            })
            // console.log(this.state.user);
        })
    }

    render(){
        const {id, username, city, state, img_url} = this.state.user;
        return(
            <h1>Welcome {username}</h1>
        )
    }
}

export default Account;