import React, { Component } from 'react';
import CommentsService from '../services/CommentsService';

import Post from '../components/post/Post';

class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfComments: 0
        };
        this.fetchNumberOfComments = this.fetchNumberOfComments.bind(this);
    }

    componentDidMount() {
        this.fetchNumberOfComments();
    }

    fetchNumberOfComments() {
        CommentsService.getCommentsLengthById(this.props.post.id).then(length => {
            this.setState({
                numberOfComments: length
            });
        })
    }

    render() {
        return (
            <Post post={this.props.post}/>
        )
    }
    
}

export default PostContainer;