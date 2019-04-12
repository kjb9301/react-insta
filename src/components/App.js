import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainPage, HomePage, SearchPage, UploadPage, LikePage, ProfilePage } from 'pages'
import './App.scss';
class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route path="/home" component={HomePage}/>
          <Route path="/search" component={SearchPage}/>
          <Route path="/upload" component={UploadPage}/>
          <Route path="/like" component={LikePage}/>
          <Route path="/profile" component={ProfilePage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
