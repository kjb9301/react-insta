import React from 'react';
import './PostItem.scss';
import item_img from 'images/item.jpg';

const PostItem = ({post,likeOn,getComment,handleLike,handleLikeOn,handleLikeOff}) => {
  const likeOnClass = likeOn? "likeOn": "icon-like";
  const {pid_post,pid_user,desc, tag_string, title } = post;
  return (
    <div className="item-box">
      <div className="item-header">
        <div className="item-header-left">
          <div className="item-header-img">
            <img src={item_img} alt="img"/>
          </div>
        </div>
        <div className="item-header-center">
          <div className="item-header-title">{title}</div>
          <div className="item-header-place">Kauai, Hawaii</div>
        </div>
        <div className="item-header-right">
          <span>···</span>
        </div>
      </div>
      <div className="item-img">
        <div className="image">
          <img src={item_img} alt="img"/>
        </div>
      </div>
      <div className="item-content">
        <div className="item-icon">
          <div className={likeOnClass} onClick={handleLike}></div>
          <div className="icon-comment"></div>
        </div>
        <div className="item-title">{title}</div>
        <div className="item-desc">{desc}</div>
        <div className="item-tag">{tag_string}</div>
        <div className="item-comment-btn">
          <span onClick={() => getComment(post.pid_post)}>view all comments</span>
        </div>
      </div>
    </div>
  );
};

export default PostItem;