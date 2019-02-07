import React from 'react';
import { shallow } from 'enzyme';
import PostList from './PostList';
import Post from '../post/Post';

describe('<PostList />', () => {
    let wrapper;
    let props = { status: 'test', posts: [] }

    describe('When posts are empty', () => {
        it('should not render <Post />', () => {
            const wrapper = shallow(<PostList {...props} />);

            expect(wrapper.find(Post).exists()).toBe(false);
        })
    })

    describe('When posts are not empty', () => {
        it('should render one or multiple <Post />', () => {
            props.posts.push({ id: 1, title: 'test', content: 'test'});

            const wrapper = shallow(<PostList {...props} />);

            expect(wrapper.find(Post).exists()).toBeTruthy();
        })
    })
})