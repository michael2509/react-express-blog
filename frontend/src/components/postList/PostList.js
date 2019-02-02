import React from 'react';
import './PostList.css';
import Post from '../post/Post';
import Typography from '@material-ui/core/Typography';

const PostList = ({ status, posts }) => {

    return (
        <div className="posts-wrapper">
            <Typography variant="h4" component="h1" style={{marginTop: 20, marginBottom: 20}}>
                Liste des posts
            </Typography>

            {posts.length > 0 && (
                posts.map((post) => (
                    <Post key={post.id} post={post} />
                ))
            )}

            {status === 'empty' && <p>No posts found</p>}
            {status === 'fetching' && <p>Post loading...</p>}
            {status === 'success' && <p>Post successfully found</p>}
        </div>
    )
}

export default PostList;