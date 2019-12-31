import React from 'react';

class Signup extends React.Component {

    constructor() {
        super();
        this.state = {
          username: '',
          password: '',
          city: '',
          state: '',
          img_url: ''
        }
    }
    
    statesArray = [
        'Alabama',
        'Alaska',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'Florida',
        'Georgia',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Pennsylvania',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming'
    ];

    selectStates = (statesArray) => {
        let count = 0;
        return statesArray.map(state => {
            return (
            <option value={state} 
            key={count++}
            name={state}>
                {state}
            </option>);
        });
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3001/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                user: {
                    username: this.state.username,
                    password: this.state.password,
                    email: this.state.email,
                    city: this.state.city,
                    state: this.state.state,
                    img_url: this.state.img_url
                }
            })
        })
        .then(res => res.json())
        .then(json => {
            // console.log(json)
            // console.log(json.jwt)
            localStorage.setItem('token', json.jwt);
            this.props.handleLogin();
            // console.log(localStorage);
        });
    }

    render(){
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <h1>Sign Up</h1>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input type="text" name="username" placeholder="Username" onChange={(event) => this.handleChange(event)}/>
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" placeholder="Password" onChange={(event) => this.handleChange(event)}/>
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" placeholder="example@gmail.com" onChange={(event) => this.handleChange(event)}/>
                </div>
                <div>
                    <label htmlFor="city">City: </label>
                    <input type="text" name="city" placeholder="City" onChange={(event) => this.handleChange(event)}/>
                </div>
                <div>
                    <label htmlFor="state">State: </label>
                    <select name='state' onChange={(event) => this.handleChange(event)}>
                        {this.selectStates(this.statesArray)}
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
        );
    }
    
}

export default Signup;