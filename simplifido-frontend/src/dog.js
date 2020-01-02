import React from 'react';

class Dog extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dogs: {}
        }
    }

    getDogs = () => {
        fetch(`http://localhost:3001/users/${this.props.user_id}/dogs`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
        })
        .then(res => res.json())
        .then(json => {
            this.setState({
                dogs: json
            })
        })
        .then(console.log('called getDogs'))
    }

    render(){
        return(
            <div>
                
            </div>
        );
    }
}

export default Dog;