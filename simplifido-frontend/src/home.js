import React from 'react';

const Home = () => {

  const getPosts = () => {
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
          return json.forEach(post => {
            return (
              <h1>{post.title}</h1>
            )
          });
        })
  }

  return (
    <div>
      <h1>Simplifido Home</h1>
      {getPosts()}
    </div>
  )
}

export default Home;