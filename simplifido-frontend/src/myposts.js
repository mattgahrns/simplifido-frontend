import React from 'react';
import { api } from './services/api'

class MyPosts extends React.Component {

    constructor(){
        super();
        this.state = {
            user: {},
            posts: {}
        }
    }


    componentDidMount(){
        api.auth.getCurrentUser()
        .then(data => {
            this.setState({
                user: data
            }, () => this.fetchPosts())
            // console.log(this.state.user);
        })
    }

    fetchPosts = () => {
        fetch(`http://localhost:3001/users/${this.state.user.id}/posts`, {
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
                posts: json
            })
            // console.log(this.state.posts);
        })
    }

    getPosts = () => {
        return this.state.posts.map(post => {
          return (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <h3>{post.activity}</h3>
              <h3>{post.user.city}, {post.user.state}</h3>
              <h4>{post.when}</h4>
              <p>{post.description}</p>
              <p>By {post.user.username}</p>
              <p><strong>Contact info: </strong>{post.user.email}</p>
              <button id={post.id} onClick={(event) => this.handleEdit(event)}>Edit</button><button id={post.id} onClick={(event) => this.handleDelete(event)}>Delete</button>
              <br/>
            </div>
          )
        })
    }

    handleEdit = (event) => {
        console.log(event.target.id);
        // fetch(`http://localhost:3001/posts/${event.target.id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Accept: 'application/json',
        //         Authorization: `Bearer ${localStorage.getItem('token')}`
        //     }
        // });
    }

    handleDelete = (event) => {
        // console.log(event.target.id);
        fetch(`http://localhost:3001/posts/${event.target.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(window.location.reload(false));
    }


    render(){
        return(
            <>
                <h1>My Posts</h1>
                <hr/>
                {this.state.user.id && this.state.posts.length > 0 ? this.getPosts() : <p>Loading...</p>}
            </>
        )
    }

}

export default MyPosts;