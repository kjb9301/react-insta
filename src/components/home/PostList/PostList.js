import React from 'react';
import './PostList.scss';
import PostItemContainer from 'containers/PostItemContainer';

const PostList = ({postList,getComment}) => {
  const posts = (postList||[]).map(post => {
    return <PostItemContainer
              key={post.pid_post}
              post={post}
              getComment={getComment}
            />
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