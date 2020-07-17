import React from 'react';

import PostItem from './PostItem/PostItem';

export const Post = (props) => {

    return(
        <PostItem
        title={props.title}
        body={props.body}
        />
    );
}

export default Post;