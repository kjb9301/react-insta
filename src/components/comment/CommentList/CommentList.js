import React from 'react';
import './CommentList.scss';
import backImg from 'images/back.png';
import CommentItem from 'components/comment/CommentItem';

const CommentList = ({commentList,handleBack}) => {
  const comments = commentList.map(comment => {
    return <CommentItem key={comment.pid_post_cmt} comment={comment}/>
  })

  return (
    <div className="comment-wrapper">
      <div className="comment-header">
        <div className="header-left"><span onClick={handleBack}><img src={backImg} alt="back"/></span></div>
        <div className="header-center"><span>댓글</span></div>
        <div className="header-right"></div>
      </div>
      <div className="comment-content">
        <div className="content-wrapper">
          {comments}
        </div>
      </div>
      <div className="comment-footer">
        <div className="footer-left">
          <input type="text" name="comment" placeholder="댓글 달기..."/>
        </div>
        <div className="footer-right">
          <span>send</span>
        </div>
      </div>
    </div>
  );
};

export default CommentList;