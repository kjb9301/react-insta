import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { PROJECT_NAME, SERVER_URL } from "common/Constants";
import FireAuthUser from "api/FireAuthUser";
import { storageAvailable, getItem } from 'common/StorageUtils';
import Fetch from 'common/Fetch';

import Upload from 'components/upload/Upload';

class UploadContainer extends Component {
  constructor(props){
    super(props);

    this.userManager = new FireAuthUser(
      SERVER_URL,
      PROJECT_NAME,
    );
  }

  state = {
    desc: '',
    tag: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  uploadPost = async(desc,tag) => {
    const isStorage = storageAvailable();
    if(!isStorage) return null;

    const userData = getItem('userData');
    const pid_user = userData.user.pid_user;
    
    const bodyData = {
      post: {
        pid_user: pid_user,
        title: 'none',
        desc: desc,
        tag_string: tag,
        uri_json: '{"location": "https://instagram-sample.s3.ap-northeast-2.amazonaws.com/list/m_run_fin.png"}'
      }
    }
    const api = getItem('RestAPI');
    await Fetch(api.post_insert,'',bodyData);
    alert("게시물이 등록되었습니다.");
    const { history } = this.props;
    history.push('/home');
  }
  
  render() {
    const { handleChange, uploadPost } = this;
    const { desc, tag } = this.state;

    return (
      <Upload
        desc={desc}
        tag={tag}
        handleChange={handleChange}
        uploadPost={uploadPost}
      />
    );
  }
}

export default withRouter(UploadContainer);