import React from 'react';
import { api } from './services/api'
// import { Redirect } from 'react-router-dom';

class Account extends React.Component {
    
    constructor(){
        super();
        this.state = {
            user: {},
            name: '',
            breed: '',
            age: '',
            img_url: '',
            newDog: false
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

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state.user.id);
        fetch(`http://localhost:3001/users/${this.state.user.id}/dog/new`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                dog: {
                    name: this.state.name,
                    breed: this.state.breed,
                    age: this.state.age,
                    img_url: this.state.img_url,
                    user_id: this.state.user.id
                }
            })
        })
        .then(res => res.json())
        .then(console.log);
    }

    getDogs = () => {
        fetch(`http://localhost:3001/users/${this.state.user.id}/dogs`, {

        })
    }

    render(){
        const {username, email, city, state} = this.state.user;
        return(
            <>
                <h1>Welcome {username}</h1>
                {/* <img src={img_url} height='50px' width='50px'/> */}
                <h2>Email: {email}</h2>
                <h2>City: {city}</h2>
                <h2>State: {state}</h2>
                <h1>Your dogs: </h1>
                <h2>(You can add more dogs below)</h2>
                {/*this.getDogs()*/}
                <h1>Add Dog:</h1>
                <form onSubmit={(event) => {this.handleSubmit(event)}}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" placeholder="Name" onChange={(event) => this.handleChange(event)}/>
                </div>
                <div>
                    <label htmlFor="breed">Breed: </label>
                    <input type="text" name="breed" placeholder="Breed" onChange={(event) => this.handleChange(event)}/>
                </div>
                <div>
                    <label htmlFor="age">Age: </label>
                    <select name='age' onChange={(event) => this.handleChange(event)}>
                        <option name='pleaseSelect' value='0'>Please Select</option>
                        <option name='1' value='1'>1</option>
                        <option name='2' value='2'>2</option>
                        <option name='3' value='3'>3</option>
                        <option name='4' value='4'>4</option>
                        <option name='5' value='5'>5</option>
                        <option name='6' value='6'>6</option>
                        <option name='7' value='7'>7</option>
                        <option name='8' value='8'>8</option>
                        <option name='9' value='9'>9</option>
                        <option name='10' value='10'>10</option>
                        <option name='11' value='11'>11</option>
                        <option name='12' value='12'>12</option>
                        <option name='13' value='13'>13</option>
                        <option name='14' value='14'>14</option>
                        <option name='15' value='15'>15</option>
                        <option name='16' value='16'>16</option>
                        <option name='17' value='17'>17</option>
                        <option name='18' value='18'>18</option>
                        <option name='19' value='19'>19</option>
                        <option name='20' value='20'>20</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="img_url">Image URL: </label>
                    <input type="text" name="img_url" placeholder="Image URL" onChange={(event) => this.handleChange(event)}/>
                    <p>(Use <a href='https://imgur.com/'
                    target='_blank'
                    rel='noopener noreferrer'>
                    imgur</a> to get a link)</p>
                </div>
                
                
                <input type="submit" value="Submit" />
            </form>
            </>
        );
    }
}

export default Account;