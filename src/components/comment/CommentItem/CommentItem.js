import React from 'react';
import './CommentItem.scss';

const CommentItem = ({comment}) => {
  return (
    <div className="comment-box">
      <div className="comment-img">
        <div className="user-img"></div>
      </div>
      <div className="comment-text">
        <div className="comment-top">
          <div className="comment-user">{comment.user_name}</div>
        </div>
        <div className="comment-bottom">
          <div className="comment-desc">{comment.body}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;