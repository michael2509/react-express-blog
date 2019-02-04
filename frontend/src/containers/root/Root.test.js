import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Root from './Root';
import App from '../../components/app/App';
import configureStore from 'redux-mock-store'

const mockStore = configureStore();

describe('<Root />', () => {
  it('should render <App> wrapped in <Provider store={store}>', () => {
    const wrapper = shallow(<Root />);

    const initialState = {}
    const store = mockStore(initialState);

    expect(wrapper.find(<Provider store={store} ><App /></Provider>)).toBeTruthy();
  })
})