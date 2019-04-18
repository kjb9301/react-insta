import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { PROJECT_NAME, SERVER_URL } from "common/Constants";
import FireAuthUser from "api/FireAuthUser";
import Fetch from 'common/Fetch';
import { storageAvailable, getItem } from 'common/StorageUtils';

import PostItem from 'components/home/PostItem';

class PostItemContainer extends Component {
	state = {
		likeOn: false,
		like_id: ''
	}

	handleLike = () => {
		const { likeOn } = this.state;
		console.log(likeOn)
		this.setState({
			likeOn: !likeOn
		})
		console.log(this.state.likeOn)
	}

	handleLikeOn = async(pid_target,pid_post) => {
		const userData = getItem('userData');
		const pid_user = userData.user.pid_user;
		const api = getItem('RestAPI');


		const bodyData = {
			log_like: {
				pid_user: pid_user,
				pid_target: pid_target,
				pid_post: pid_post
			}
		}
		console.log(api)
		const like_id = await Fetch(api.log_like_do_like,'',bodyData);
		this.setState({
			like_id: like_id
		})
	}
		

	handleLikeOff = async() => {
		const userData = getItem('userData');
		const pid_user = userData.user.pid_user;
		const api = getItem('RestAPI');
		console.log(api)
		const { like_id } = this.state;
		const bodyData = {
			log_like: {
				pid_user: pid_user,
				pid_log_like: like_id
			}
		}
		const test = await Fetch(api.log_like_delete,'',bodyData);
		console.log(test)
	}

	componentDidMount(){
		if(this.state.likeOn){
			this.handleLikeOn();
		}else{
			this.handleLikeOff();
		}
	}

  render() {
		const { post, getComment } = this.props;
		const { likeOn } = this.state;
		const { handleLike, handleLikeOn, handleLikeOff } = this;
		console.log(likeOn)
    return (
			<PostItem
				post={post}
				likeOn={likeOn}
				getComment={getComment}
				handleLike={handleLike}
				handleLikeOn={handleLikeOn}
				handleLikeOff={handleLikeOff}
			/>
    );
  }
}

export default withRouter(PostItemContainer);