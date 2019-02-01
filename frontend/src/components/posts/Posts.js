import React, { Component } from 'react';
import './Posts.css';
import { postsData } from '../../data/posts-data';
import Post from '../post/Post';
import Typography from '@material-ui/core/Typography';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ posts: postsData });
        }, 3000)
    }

    render() {
        const posts = this.state.posts;

        return (
            <div className="posts-wrapper">
                <Typography variant="h4" component="h1" style={{marginTop: 20, marginBottom: 20}}>
                    Liste des posts
                </Typography>

                {posts.length > 0 ? (
                    posts.map((post) => (
                        <Post key={post.id} post={post} />
                    ))  
                ) : (
                    <p>posts loading...</p>
                )}
            </div>
        )
    }
}

export default Posts;