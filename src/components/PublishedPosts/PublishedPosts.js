import React, { Component } from 'react';

import Post from './Post/Post';
import parse from 'html-react-parser';

// const PublishedPosts = (props) => props.posts.map((post,index)=>{
//     return (
//     <Post
//     title={post.pTitle}
//     body={post.pBody}
//     key={index}
//     ></Post>
//     );
// });

export class PublishedPosts extends Component
{
    render(){
        //console.log("PublishedPosts:",this.props.posts );
       let filterdPosts = this.props.posts.filter(
           (post)=>{
               return (post.postTitle.toLowerCase().indexOf(this.props.searchText.toLowerCase()) !==-1 ||
               post.postBody.toLowerCase().indexOf(this.props.searchText.toLowerCase()) !==-1);
           }
       );
        return(
            <div>
                {filterdPosts.map((post,index)=>{
                    return <Post
                         title={post.postTitle}
                         body={parse(post.postBody) }
                         key={index}
                         ></Post>
                })}
            </div>
        );
    }
}

export default PublishedPosts;