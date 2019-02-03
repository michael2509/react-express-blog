import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import PostsContainer from '../../containers/posts-container/PostsContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <PostsContainer />
      </div>
    );
  }
}

export default App;
