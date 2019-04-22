import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { getItem } from 'common/StorageUtils';
import Fetch from 'common/Fetch';

import Upload from 'components/upload/Upload';

class UploadContainer extends Component {

  state = {
    desc: '',
    tag: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  uploadPost = async(desc,tag) => {
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
    try{
      const post_id = await Fetch(api.post_insert,'',bodyData);
      const tagInfo = {post_id,pid_user,tag};
      this.insertTag(tagInfo);
      return;
      alert("게시물이 등록되었습니다.");
      const { history } = this.props;
      history.push('/home');
    }catch(err){
      console.log("uploadPost error",err);
    }
  }

  insertTag = async(tagInfo) => {
    const { post_id, pid_user, tag } = tagInfo;
    console.log(tagInfo)
    const body = {
      typ_item: 1,
      tag_string: "[태그]||[태그1}||",
      pid_user: pid_user,
      pid_post: post_id
    }
    const api = getItem('RestAPI');
    console.log(api)
    try{
      await Fetch(api.tag_tag_insert,'',body);
    }catch(err){
      console.log("insertTag error", err);
    }
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