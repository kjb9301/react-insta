import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Fetch from 'common/Fetch';
import { getItem } from 'common/StorageUtils';

import CommentList from 'components/comment/CommentList';

class CommentContainer extends Component {

  state = {
    commentList: [],
    comment: ''
  }

  getComment = async() => {
    const { match } = this.props;
    const api = getItem('RestAPI');
    console.log(api)
    const query = `?pid=${match.params.id}`;
    try{
      const commentData = await Fetch(api.post_get_comment,query);
      if(commentData.post_cmt.code === "data/no_data") return null;
      this.setState({
        commentList: commentData.post_cmt
      })
    }catch(err){
      console.log("getComment error", err);
    }
  }

  handleChange = (e) => {
    this.setState({
      comment: e.target.value
    })
  }

  insertComment = async() => {
    const { comment } = this.state;
    if(!comment) return alert("댓글을 입력하세요.");

    const { match } = this.props;
    const post_id = match.params.id;
    const userData = getItem('userData');
    const user_id = userData.user.pid_user;
    const user_name = userData.user.user_name;

    const bodyData = {
      post_cmt: {
        pid_user: user_id,
        user_name: user_name,
        pid_parent: post_id,
        body: comment
      }
    }

    const api = getItem('RestAPI');
    try{
      await Fetch(api.post_cmt_insert,'',bodyData);
      alert("댓글이 등록되었습니다.");
      this.setState({comment: ''})
      this.getComment();
    }catch(err){
      console.log("insertComment erorr", err);
    }
  }

  handleBack = () => {
    const { history } = this.props;
    history.goBack();
  }

  componentDidMount(){
    this.getComment();
  }

  render() {
    const { commentList, comment } = this.state;
    const { handleBack,insertComment,handleChange,getComment } = this;
    return (
      <CommentList
        commentList={commentList}
        comment={comment}
        handleBack={handleBack}
        insertComment={insertComment}
        handleChange={handleChange}
        getComment={getComment}
      />
    );
  }
}

export default withRouter(CommentContainer);