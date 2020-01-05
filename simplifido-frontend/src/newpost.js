import React from 'react';
import { api } from './services/api'

class NewPost extends React.Component {

    constructor(){
        super();
        this.state = {
            user: {},
            title: '',
            activity: '',
            description: '',
            when: ''
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
        fetch(`http://localhost:3001/users/${this.state.user.id}/post/new`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                post: {
                    title: this.state.title,
                    activity: this.state.activity,
                    description: this.state.description,
                    when: this.state.when,
                    user_id: this.state.user.id
                }
            })
        })
        .then(res => res.json())
        .then(this.props.history.push("/"))
        .then(window.location.reload(false));
    }

    render(){
        return(
            <>
                <h1>New Post</h1>
                <form onSubmit={(event) => {this.handleSubmit(event)}}>
                <div>
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" placeholder="Title" onChange={(event) => this.handleChange(event)}/>
                </div>
                <div>
                    <label htmlFor="activity">Activity: </label>
                    <input type="text" name="activity" placeholder="Activity" onChange={(event) => this.handleChange(event)}/>
                </div>
                <div>
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" placeholder="Description" onChange={(event) => this.handleChange(event)}/>
                </div>
                <div>
                    <label htmlFor="when">When: </label>
                    <input type="text" name="when" placeholder="When" onChange={(event) => this.handleChange(event)}/>
                </div>
                
                <input type="submit" value="Submit" />
            </form>
            </>
        );
    }
}

export default NewPost;