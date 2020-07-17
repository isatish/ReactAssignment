import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header/Header';
import NewPost from '../components/NewPost/NewPost';
import PublishedPosts from '../components/PublishedPosts/PublishedPosts';

import './App.css';

export class App extends Component {
  //scrollable post list
   style = {
    height: '300px',
    overflowY: 'scroll'
    }

  render() {
    return(
    <div className="App">
      <Header
      btnActive = {this.props.showNewPostForm}
      clearClicked = {this.clearSearchHandler}
      btnClick = {this.headerButtonClickHandler}>
      </Header>
     {
     this.props.showNewPostForm?
      <NewPost>
       </NewPost>
       :
       <div style={this.style}>
        <PublishedPosts
        searchText={this.props.search}
        posts={this.props.posts}>
        </PublishedPosts>
      </div>
    }
    </div>
    );
  };
}

const mapStateToProps = state =>{
  return{
    posts: state.posts,
    search: state.search,
    showNewPostForm: state.showNewPostForm
  };
};

export default connect(mapStateToProps) (App);
