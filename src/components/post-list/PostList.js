import React from 'react';

import PostContainer from '../../containers/PostContainer';


const PostList = (props) => (
    props.posts.map(post => (   
        <PostContainer key={post.id} post={post}/>
    ))
)

export default PostList;