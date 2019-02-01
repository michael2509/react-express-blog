import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import Posts from './components/posts/Posts';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Posts />
      </div>
    );
  }
}

export default App;
