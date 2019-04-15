import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { PROJECT_NAME, SERVER_URL } from "common/Constants";
import FireAuthUser from "api/FireAuthUser";
import RestAPI from 'common/RestAPI';
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

  getRestAPI = async () => {
    const res = await RestAPI();
    console.log('res', res);
    if (!res) return null;
  }

  getPost = async () => {
    const isStorage = storageAvailable();
    if(!isStorage) return null;
    const api = getItem('RestAPI');
    const res = await Fetch(api.post_get_my);
    this.setState({
      postList: res
    })
  }

  getComment = (id) => {
    // const api = getItem('RestAPI');
    // const query = `?pid=${id}`;
    // const res = await Fetch(api.post_get_comment,query);
    // console.log(res)
    const { history } = this.props;
    history.push(`/comment/${id}`)
  }

  componentDidMount(){
    this.getRestAPI();
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