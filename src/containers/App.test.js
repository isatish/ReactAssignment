import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {App} from './App';
import Header from '../components/Header/Header';
import NewPost from '../components/NewPost/NewPost';
import PublishedPosts from '../components/PublishedPosts/PublishedPosts';

configure({adapter: new Adapter()});

const setUp = (props={}) =>{
    const component = shallow(<App {...props}></App>);
    return component;
}
describe('<App/>',()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper = setUp();
    });

    it('Should have Header component',()=>{
        expect(wrapper.find(<Header></Header>));
    });

    it('Should have NewPost component',()=>{
        expect(wrapper.find(<NewPost></NewPost>));
    });

    it('should render <PublishedPosts/> when recieving posts',()=>{
        wrapper.setProps({posts:[{postTitle:'Post Title',postBody:'post body'}]});
        expect(wrapper.find(PublishedPosts)).toHaveLength(1);
    });

});