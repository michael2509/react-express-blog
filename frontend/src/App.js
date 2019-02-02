import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import PostsContainer from './containers/PostsContainer';

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
