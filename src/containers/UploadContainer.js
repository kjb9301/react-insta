import React, { Component } from 'react';
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

  insertPost = async(desc,tag) => {
    const isStorage = storageAvailable();
    if(!isStorage) return null;
    
    const bodyData = {
      desc: desc,
      tag: tag
    }
    const api = getItem('RestAPI');
    console.log(api)
    const res = await Fetch(api.post_insert,bodyData);
    console.log(res)
  }
  
  render() {
    const { handleChange, insertPost } = this;
    const { desc, tag } = this.state;

    return (
      <Upload
        desc={desc}
        tag={tag}
        handleChange={handleChange}
        insertPost={insertPost}
      />
    );
  }
}

export default UploadContainer;