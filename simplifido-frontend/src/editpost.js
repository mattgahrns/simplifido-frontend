import React from 'react';

class EditPost extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            post: {},
            postId: props.match.params.id,
            title: '',
            activity: '',
            description: '',
            when: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        fetch(`http://localhost:3001/posts/${this.state.postId}`, {
            method: 'PUT',
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
                    when: this.state.when
                }
            })
        })
        .then(this.props.history.push('/myposts'));
    }

    componentDidMount() {
        fetch(`http://localhost:3001/posts/${this.state.postId}`, {
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
                post: json
            });
            // console.log(json);
        });
    }

    displayPost = () => {
        return (
            <div>
              <h2>{this.state.post.title}</h2>
              <h3>{this.state.post.activity}</h3>
              <h3>{this.state.post.user.city}, {this.state.post.user.state}</h3>
              <h4>{this.state.post.when}</h4>
              <p>{this.state.post.description}</p>
              <p>By {this.state.post.user.username}</p>
              <p><strong>Contact info: </strong>{this.state.post.user.email}</p>
              <br/>
            </div>
        )
    }
    

    render(){
        return(
            <>
                <h1>Edit Post</h1>
                <hr/>
                {this.state.post.user ? this.displayPost() : <p>Loading...</p>}
                {/* WHEN I WAS DOING value={this.state.post.title} FOR EACH INPUT WAS GETTING WARNING THAT I WAS CHANGING FROM
                UNCONTROLLED TO CONTROLLED AND WOULDNT LET ME EDIT THE VALUES IN THE INPUTS SO I DONT HAVE THE FORM PREPOPULATED AT THE MOMENT*/}
                <form onSubmit={(event) => {this.handleSubmit(event)}}>
                    <div>
                        <label htmlFor="title">Title: </label>
                        <input type="text" name="title" onChange={(event) => this.handleChange(event)}/>
                    </div>
                    <div>
                        <label htmlFor="activity">Activity: </label>
                        <input type="text" name="activity" onChange={(event) => this.handleChange(event)}/>
                    </div>
                    <div>
                        <label htmlFor="description">Description: </label>
                        <input type="text" name="description" onChange={(event) => this.handleChange(event)}/>
                    </div>
                    <div>
                        <label htmlFor="when">When: </label>
                        <input type="text" name="when" onChange={(event) => this.handleChange(event)}/>
                    </div>
                    
                    <input type="submit" value="Submit" />
                </form>
            </>
        )
    }
}

export default EditPost;