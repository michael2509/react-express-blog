import React from 'react';
import './PostList.css';
import Post from '../post/Post';
import Typography from '@material-ui/core/Typography';

const PostList = ({ status, posts }) => {
    let showPost;
    posts === null || posts === undefined || !posts.length > 0 ? showPost = false : showPost = true;

    return (
        <div className="posts-wrapper">
            <Typography variant="h4" component="h1" style={{marginTop: 20, marginBottom: 20}}>
                Liste des posts
            </Typography>

            <p>Fetch post status: {status}</p>

            {showPost === true && posts.map((post) => {
                const { id, title, content } = post;
                return <Post key={id} title={title} content={content} />
            })}
        </div>
    )
}


export default PostList;