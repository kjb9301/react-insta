import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Fetch from 'common/Fetch';
import { storageAvailable, getItem } from 'common/StorageUtils';

import CommentList from 'components/comment/CommentList';

class CommentContainer extends Component {

  state = {
    commentList: []
  }

  getComment = async() => {
    const { match } = this.props;
    const api = getItem('RestAPI');
    const query = `?pid=${match.params.id}`;
    const commentData = await Fetch(api.post_get_comment,query);
    
    this.setState({
      commentList: commentData.post_cmt
    })
  }

  componentDidMount(){
    this.getComment();
  }

  render() {
    const { commentList } = this.state;
    return (
      <CommentList commentList={commentList}/>
    );
  }
}

export default withRouter(CommentContainer);