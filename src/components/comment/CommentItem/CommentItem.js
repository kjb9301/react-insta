import React, {Fragment} from 'react';
import './CommentItem.scss';

const CommentItem = ({user_id,comment,newComment,updateTF,toggleUpdate,updateComment,deleteComment,handleChange,cancelUpdate}) => {
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
          {!updateTF?
            <div className="comment-desc">{comment.body}</div>
          :
            <div className="comment-desc">
              <input type="text" name="comment" value={newComment} onChange={handleChange}/>
            </div>
          }
        </div>
      </div>
      {user_id === comment.pid_user?
        <div className="comment-btn">
          {!updateTF?
            <Fragment>
              <div className="modify-btn">
                <button onClick={() => toggleUpdate(comment.body)}>수정</button>
              </div>
              <div className="delete-btn">
                <button onClick={() => deleteComment(comment.pid_post_cmt)}>삭제</button>
              </div>
            </Fragment>
          :
            <Fragment>
              <div className="modify-btn">
                <button onClick={() => updateComment(comment.pid_post_cmt)}>완료</button>
              </div>
              <div className="delete-btn">
                <button onClick={cancelUpdate}>취소</button>
              </div>
            </Fragment>
          }
        </div>
      :
        <Fragment/>
      }
    </div>
  );
};

export default CommentItem;