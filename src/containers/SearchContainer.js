import React, { Component } from 'react';
import { getItem } from 'common/StorageUtils';
import Fetch from 'common/Fetch';

import SearchList from 'components/search/SearchList';

class SearchContainer extends Component {
  state = {
    search: '',
    tagList: []
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  getTag = async() => {
    const api = getItem('RestAPI');
    const userData = getItem('userData');
    const user_id = userData.user.pid_user;
    const query = `?seq=0&interval=10&pid_user=${user_id}&pid_tag=1`;
    try{
      const tagList = await Fetch(api.tag_get_tag_by_user,query);
      this.setState({
        tagList: tagList
      })
    }catch(err){
      console.log("getTag error", err);
    }
  }

  componentDidMount(){
    this.getTag();
  }

  render() {
    console.log('searchContainer')
    const { handleChange } = this;
    const { search, tagList } = this.state;
    return (
      <SearchList search={search} tagList={tagList} handleChange={handleChange}/>
    );
  }
}

export default SearchContainer;