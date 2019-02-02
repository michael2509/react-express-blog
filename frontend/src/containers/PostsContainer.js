import { connect } from 'react-redux';
import PostList from '../components/postList/PostList';

const mapStateToProps = state => ({ posts: state.posts });

export default connect(mapStateToProps)(PostList)