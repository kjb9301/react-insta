import React from 'react';
import './PostItem.scss';
import item_img from 'images/item.jpg';
import like from 'images/like/like-2.png';
import comment from 'images/comment/comments.png';

const PostItem = ({post}) => {
  console.log(post)
  const {desc, tag_string, title, uri_json} = post;
  console.log(JSON.parse(uri_json).location)
  return (
    <div className="item-box">
      <div className="item-header">
        <div className="item-header-left">
          <div className="item-header-img">
            <img src={item_img}/>
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
          <img src={item_img}/>
        </div>
      </div>
      <div className="item-content">
        <div className="item-icon">
          <div className="icon-like"><img src={like}/></div>
          <div className="icon-comment"><img src={comment}/></div>
        </div>
        <div className="item-title">{title}</div>
        <div className="item-desc">{desc}</div>
        <div className="item-tag">{tag_string}</div>
        <div className="item-comment-btn"><span>view all comments</span></div>
      </div>
    </div>
  );
};

export default PostItem;