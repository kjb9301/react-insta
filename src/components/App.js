import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { MainPage, HomePage, SearchPage, UploadPage, LikePage, ProfilePage } from 'pages'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/home" component={HomePage}/>
        <Route exact path="/search" component={SearchPage}/>
        <Route exact path="/upload" component={UploadPage}/>
        <Route exact path="/like" component={LikePage}/>
        <Route exact path="/profile" component={ProfilePage}/>
      </div>
    );
  }
}

export default App;
