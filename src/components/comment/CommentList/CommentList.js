import React from 'react';
import './CommentList.scss';
import backImg from 'images/back.png';
import CommentItemContainer from 'containers/CommentItemContainer';

const CommentList = ({commentList,comment,handleBack,insertComment,handleChange,getComment}) => {
  console.log(commentList)
  const comments = commentList.map(comment => {
    return (<CommentItemContainer
              key={comment.pid_post_cmt}
              comment={comment}
              getComment={getComment}
            />
  )})
  return (
    <div className="comment-wrapper">
      <div className="comment-header">
        <div className="header-left">
          <span onClick={handleBack}>
            <img src={backImg} alt="back"/>
          </span>
        </div>
        <div className="header-center">
          <span>댓글</span>
        </div>
        <div className="header-right"></div>
      </div>
      <div className="comment-content">
        <div className="content-wrapper">
          {comments}
        </div>
      </div>
      <div className="comment-footer">
        <div className="footer-left">
          <input type="text" name="comment" value={comment} placeholder="댓글 달기..." onChange={handleChange}/>
        </div>
        <div className="footer-right">
          <span onClick={insertComment}>send</span>
        </div>
      </div>
    </div>
  );
};

export default CommentList;