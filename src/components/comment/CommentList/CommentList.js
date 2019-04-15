import React from 'react';
import './CommentList.scss';

const CommentList = ({commentList}) => {
  console.log(commentList)
  return (
    <div className="comment-wrapper">
      <div className="comment-header"></div>
      <div className="comment-content"></div>
    </div>
  );
};

export default CommentList;