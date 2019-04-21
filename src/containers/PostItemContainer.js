import React, { Component } from 'react';
import Fetch from 'common/Fetch';
import { getItem } from 'common/StorageUtils';

import PostItem from 'components/home/PostItem';

class PostItemContainer extends Component {
	state = {
		likeOn: false,
		like_id: '',
		pid_target: '',
		pid_post: ''
	}

	handleLike = (pid_target,pid_post) => {
		this.setState({
			likeOn: !this.state.likeOn,
			pid_target: pid_target,
			pid_post: pid_post
		})
	}

	handleLikeOn = async() => {
		const userData = getItem('userData');
		const pid_user = userData.user.pid_user;
		const api = getItem('RestAPI');
		const bodyData = {
			log_like: {
				pid_user: pid_user,
				pid_target: this.state.pid_target,
				pid_post: this.state.pid_post
			}
		}
		try{
			const like_id = await Fetch(api.log_like_do_like,'',bodyData);
			this.setState({
				like_id: like_id
			})
		}catch(err){
			console.log("handleLikeOn error", err);
		}
	}
		
	handleLikeOff = async() => {
		const userData = getItem('userData');
		const pid_user = userData.user.pid_user;
		const api = getItem('RestAPI');
		const bodyData = {
			log_like: {
				pid_user: pid_user,
				pid_log_like: this.state.like_id
			}
		}
		try{
			await Fetch(api.log_like_delete,'',bodyData);
		}catch(err){
			console.log("handleLikeOff error", err);
		}
	}

	componentDidUpdate(){
		if(this.state.likeOn){
			this.handleLikeOn();
		}else{
			this.handleLikeOff();
		}
	}

  render() {
		const { post, getComment } = this.props;
		const { likeOn } = this.state;
		const { handleLike } = this;

    return (
			<PostItem
				post={post}
				likeOn={likeOn}
				getComment={getComment}
				handleLike={handleLike}
			/>
    );
  }
}

export default PostItemContainer;