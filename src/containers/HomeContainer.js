import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Fetch from 'common/Fetch';
import { getItem } from 'common/StorageUtils';

import PostList from 'components/home/PostList';

class HomeContainer extends Component {

  state = {
    postList: []
  }

  getPost = async () => {
    const api = getItem('RestAPI');
    const pid_user = JSON.parse(sessionStorage.userData).user.pid_user;
    const query = "?seq=0&interval=30";
    const postData = await Fetch(api.post_get_seq,query);
    const postList = postData.filter(post => post.pid_user !== pid_user);
    
    this.setState({
      postList: postList
    })
  }

  getComment = (id) => {
    const { history } = this.props;
    history.push(`/comment/${id}`);
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