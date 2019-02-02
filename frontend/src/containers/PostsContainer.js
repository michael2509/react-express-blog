import { connect } from 'react-redux';
import PostList from '../components/postList/PostList';
import React, { Component } from 'react';
import { fetchPosts } from '../actions';

class PostsContainer extends Component {

    componentDidMount() {
        this.props.getPost();
    }

    render() {
        const { status, items } = this.props.posts;

        return (
            <div>
                <PostList status={status} posts={items} />
            </div>
        )
    }
}

const mapStateToProps = state => ({ posts: state.posts });

const mapDispatchToProps = dispatch => {
    return {
        getPost: () => dispatch(fetchPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)