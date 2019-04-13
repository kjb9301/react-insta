import React from 'react';
import './PostList.scss';
import PostItem from '../PostItem';

const PostList = ({postList}) => {
  const posts = postList.map(post => {
    return <PostItem key={post.pid_post} post={post}/>
  })
  return (
    <div className="list-wrapper">
      {posts}
    </div>
  );
};

export default PostList;