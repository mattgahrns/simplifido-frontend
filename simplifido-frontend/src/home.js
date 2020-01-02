import React from 'react';

class Home extends React.Component{

  constructor(){
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    fetch(`http://localhost:3001/posts`, {
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
      });
  }

  getPosts = () => {
    return this.state.posts.map(post => {
      return (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <h3>{post.activity}</h3>
          <h4>{post.when}</h4>
          <p>{post.description}</p>
          <p>By {post.user.username}</p>
          <p><strong>Contact info: </strong>{post.user.email}</p>
          <br/>
        </div>
      )
    })
  }

  render(){
    return (
      <div>
        <h1>Simplifido Home</h1>
        <hr/>
        {this.getPosts()}
      </div>
    )
  }
}

export default Home;