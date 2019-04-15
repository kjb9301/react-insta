import React from 'react';
import './PostList.scss';
import PostItem from '../PostItem';

const PostList = ({postList}) => {
  const posts = postList.map(post => {
    return <PostItem key={post.pid_post} post={post}/>
  })
  return (
    <div className="home-wrapper">
      <div className="home-header"></div>
      <div className="home-content">
        <div className="list-box">
          {posts}
        </div>
      </div>
    </div>
  );
};

export default PostList;