import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainPage, LoginPage, RegPage, HomePage, SearchPage, UploadPage, LikePage, ProfilePage } from 'pages'
import './App.scss';
class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/register" component={RegPage}/>
          <Route path="/home" component={HomePage}/>
          <Route path="/search" component={SearchPage}/>
          <Route path="/upload" component={UploadPage}/>
          <Route path="/activity" component={LikePage}/>
          <Route path="/profile" component={ProfilePage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
