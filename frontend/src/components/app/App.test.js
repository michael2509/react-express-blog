import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Navbar from '../navbar/Navbar';
import PostsContainer from '../../containers/posts-container/PostsContainer';

describe('<App />', () => {
    it('should render a <Navbar> and <PostsContainer>', () => {
        const wrapper = shallow(<App />);
        
        expect(wrapper.find(Navbar, PostsContainer)).toBeTruthy();
    })
})