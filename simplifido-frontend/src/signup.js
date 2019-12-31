import React from 'react';

const Signup = () => {

    const statesArray = [
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

    const selectStates = (statesArray) => {
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

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3001/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                user: {
                    username: event.target.username.value,
                    password: event.target.password.value,
                    email: event.target.email.value,
                    city: event.target.city.value,
                    state: event.target.state.value,
                    img_url: event.target.img_url.value
                }
            })
        })
        .then(res => res.json())
        .then(console.log);
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <h1>Sign Up</h1>
            <div>
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" placeholder="Username" />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" placeholder="Password" />
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" placeholder="example@gmail.com" />
            </div>
            <div>
                <label htmlFor="city">City: </label>
                <input type="text" name="city" placeholder="City" />
            </div>
            <div>
                <label htmlFor="state">State: </label>
                <select name='state'>
                    {selectStates(statesArray)}
                </select>
            </div>
            <div>
                <label htmlFor="img_url">Image URL: </label>
                <input type="text" name="img_url" placeholder="Image URL" />
                <p>(Use <a href='https://imgur.com/'
                target='_blank'
                rel='noopener noreferrer'>
                imgur</a> to get a link)</p>
            </div>
            
            <input type="submit" value="Submit" />
        </form>
    );
}

export default Signup;