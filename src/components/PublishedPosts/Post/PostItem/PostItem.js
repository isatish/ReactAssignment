import React from 'react';
import './PostItem.css';

const PostItem = (props) =>{

    return(
        <div className="card">
            <div className="title">{props.title}</div>
            <div>{props.body}</div>
        </div>
    );
}

export default PostItem;