import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { PROJECT_NAME, SERVER_URL } from "common/Constants";
import FireAuthUser from "api/FireAuthUser";
import Fetch from 'common/Fetch';
import { storageAvailable, getItem } from 'common/StorageUtils';

import PostList from 'components/home/PostList';

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

  getPost = async () => {
    const isStorage = storageAvailable();
    if(!isStorage) return null;
    const api = getItem('RestAPI');
    const pid_user = JSON.parse(sessionStorage.userData).user.pid_user;
    const query = `?seq=0&interval=100&pid_target=${pid_user}`;
    const postData = await Fetch(api.post_get_seq_public_user,query);
    console.log(postData)
    this.setState({
      postList: postData
    })
  }

  getComment = (id) => {
    const { history } = this.props;
    history.push(`/comment/${id}`)
  }

  componentDidMount(){
    this.getPost();
  }

  render() {
    const { postList } = this.state;
    const { getComment } = this;
    return (
      <PostList postList={postList} getComment={getComment}/>
    );
  }
}

export default withRouter(HomeContainer);