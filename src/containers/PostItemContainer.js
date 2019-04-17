import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { PROJECT_NAME, SERVER_URL } from "common/Constants";
import FireAuthUser from "api/FireAuthUser";
import Fetch from 'common/Fetch';
import { storageAvailable, getItem } from 'common/StorageUtils';

import PostItem from 'components/home/PostItem';

class PostItemContainer extends Component {
	state = {
		likeOn: false
	}

	handleLikeOn = () => {
		const { likeOn } = this.state;
		this.setState({
			likeOn: !likeOn
		})
	}

	handleLike = async(pid_target,pid_post) => {
		const userData = getItem('userData');
		const pid_user = userData.user.pid_user;

		const bodyData = {
			log_like: {
				pid_user: pid_user,
				pid_target: pid_target,
				pid_post: pid_post
			}
		}

		const api = getItem('RestAPI');
		console.log(api)
		await Fetch(api.log_like_do_like,'',bodyData);

		const { likeOn } = this.state;
		this.setState({
			likeOn: !likeOn
		})
	}

  render() {
		const { post, getComment } = this.props;
		const { likeOn } = this.state;
		const { handleLike } = this;
    return (
      <PostItem post={post} likeOn={likeOn} getComment={getComment} handleLike={handleLike}/>
    );
  }
}

export default withRouter(PostItemContainer);