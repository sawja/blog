import React, { Component } from 'react';

import PostsService from '../services/PostsService';
import PostList from '../components/post-list/PostList';

class PostListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
        this.fetchPosts = this.fetchPosts.bind(this);
    }

    componentDidMount() {
        this.fetchPosts();
    }

    fetchPosts() {
        PostsService.getPosts().then(data => {
            this.setState({
                posts: data
            })
        })
    }

    render() {
        return (
            <PostList posts={this.state.posts}/>
        )
    }
    
}

export default PostListContainer;