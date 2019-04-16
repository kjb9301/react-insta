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
    const isStorage = storageAvailable();
    if(!isStorage) return null;
    const { match } = this.props;
    const api = getItem('RestAPI');
    const query = `?pid=${match.params.id}`;
    const commentData = await Fetch(api.post_get_comment,query);
    if(commentData.post_cmt.code === "data/no_data") return null;
    this.setState({
      commentList: commentData.post_cmt
    })
  }

  handleBack = () => {
    const { history } = this.props;
    history.goBack();
  }

  componentDidMount(){
    this.getComment();
  }

  render() {
    const { commentList } = this.state;
    const { handleBack } = this;

    return (
      <CommentList
        commentList={commentList}
        handleBack={handleBack}
      />
    );
  }
}

export default withRouter(CommentContainer);