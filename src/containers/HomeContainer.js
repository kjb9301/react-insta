import React, { Component } from 'react';
import {
  PROJECT_NAME,
  SERVER_URL
} from "common/Constants";
import FireAuthUser from "api/FireAuthUser";
import RestAPI from 'common/RestAPI';
import Fetch from 'common/Fetch';
import PostList from 'components/home/PostList';
import { storageAvailable, getItem } from 'common/StorageUtils';

class HomeContainer extends Component {
  constructor(props){
    super(props);

    this.userManager = new FireAuthUser(
      SERVER_URL,
      PROJECT_NAME,
    );
  }

  state = {
    postList: []
  }

  // getRestAPI = async () => {
  //   const res = await RestAPI();
  //   console.log('res', res);
  //   if (!res) return null;
  // }

  getPost = async () => {
    const isStorage = storageAvailable();
    if(!isStorage) return null;
    const api = getItem('RestAPI');
    const res = await Fetch(api.post_get_my);
    this.setState({
      postList: res
    })
  }

  componentDidMount(){
    //this.getRestAPI();
    this.getPost();
  }

  render() {
    const { postList } = this.state;
    return (
      <PostList postList={postList}/>
    );
  }
}

export default HomeContainer;