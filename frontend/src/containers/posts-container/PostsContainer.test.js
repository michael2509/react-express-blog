import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Posts } from './PostsContainer';
import PostList from '../../components/postList/PostList';

describe('<Posts />', () => {
    const props = {
        posts: {status: 'empty', posts: []},
        getPost: () => {}
    }

    it('should render <Postlist /> and pass it posts', () => {
        const wrapper = shallow(<Posts {...props} />);
        const postList = wrapper.find(PostList);

        expect(postList.exists()).toBeTruthy();
        expect(postList.props()).toEqual(props.posts);
    })

    describe('componentDidMount', () => {
        it('should call this.props.getPost', () => {
            // create a stub before shallow and inject props
            const getPostStub = sinon.stub(props, 'getPost');

            const wrapper = shallow(<Posts {...props} />);

            // reset stub history
            getPostStub.reset();
            expect(getPostStub.called).toBe(false);

            // create an instance of componentDidMount
            // and expect stub function to be called
            wrapper.instance().componentDidMount();
            expect(getPostStub.called).toBeTruthy();
        })
    })
})