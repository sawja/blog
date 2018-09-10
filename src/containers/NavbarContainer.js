import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar';

import PostsService from '../services/PostsService';

class NavbarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appTitle: "Blog app",
            numberOfPosts: 0
        };
        this.fetchNumberOfPosts = this.fetchNumberOfPosts.bind(this);
    }

    componentDidMount() {
        this.fetchNumberOfPosts();
    }

    fetchNumberOfPosts() {
        PostsService.getPostsLength().then(length => {
            this.setState({
                numberOfPosts: length
            })
        })
    }

    render() {
        return (
            <Navbar {...this.state} />
        )
    }
    
}

export default NavbarContainer;