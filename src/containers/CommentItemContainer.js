import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Fetch from 'common/Fetch';
import { storageAvailable, getItem } from 'common/StorageUtils';

import CommentItem from 'components/comment/CommentItem';

class CommentItemContainer extends Component {
  state = {
    updateTF: false,
    newComment: ''
  }

  toggleUpdate = (comment) => {
    this.setState({
      updateTF: !this.state.updateTF,
      newComment: comment
    })
  }

  handleChange = (e) => {
    this.setState({
      newComment: e.target.value
    })
  }

  cancelUpdate = () => {
    this.setState((prevState) => ({
      updateTF: !prevState
    }))
  }

  updateComment = async(cmt_id) => {
    const { newComment } = this.state;
    if(!newComment) return alert("댓글을 입력하세요.");

    const userData = getItem('userData');
    const user_id = userData.user.pid_user;

    const bodyData = {
      post_cmt: {
        pid_post_cmt: cmt_id,
        pid_user: user_id,
        body: newComment
      }
    }

    const api = getItem('RestAPI');
    try{
      await Fetch(api.post_cmt_update,'',bodyData);
      alert("댓글이 수정되었습니다.");
      this.setState((prevState) => ({
        updateTF: !prevState
      }))
      this.props.getComment();
    }catch(err){
      console.log("erorr",err);
    }
  }

  deleteComment = async(cmt_id) => {
    const userData = getItem('userData');
    const user_id = userData.user.pid_user;

    const bodyData = {
      post_cmt: {
        pid_post_cmt: cmt_id,
        pid_user: user_id,
      }
    }

    const api = getItem('RestAPI');
    console.log(api)
    try{
      await Fetch(api.post_cmt_delete,'',bodyData);
      alert("댓글이 삭제되었습니다.");
      this.props.getComment();
    }catch(err){
      console.log("erorr",err);
    }
  }

  render() {
    const { comment } = this.props;
    const { updateTF,newComment } = this.state;
    const { toggleUpdate, cancelUpdate, updateComment, deleteComment, handleChange } = this;
    const userData = getItem('userData');
    const user_id = userData.user.pid_user;
    return (
      <CommentItem
        user_id={user_id}
        comment={comment}
        newComment={newComment}
        updateTF={updateTF}
        toggleUpdate={toggleUpdate}
        updateComment={updateComment}
        deleteComment={deleteComment}
        handleChange={handleChange}
        cancelUpdate={cancelUpdate}
      />
    );
  }
}

export default withRouter(CommentItemContainer);