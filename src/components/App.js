import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainPage, LoginPage, RegisterPage, HomePage, SearchPage, UploadPage, FollowPage, ProfilePage, CommentPage } from 'pages'
import './App.scss';
class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/register" component={RegisterPage}/>
          <Route path="/home" component={HomePage}/>
          <Route path="/search" component={SearchPage}/>
          <Route path="/upload" component={UploadPage}/>
          <Route path="/activity" component={FollowPage}/>
          <Route path="/profile" component={ProfilePage}/>
          <Route path="/comment/:id" component={CommentPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
