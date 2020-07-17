import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Post from './Post';
import PostItem from './PostItem/PostItem';

configure({adapter: new Adapter()});

describe('<Post/>',()=>{
    let wrapper;
    
    beforeEach(()=>{
        wrapper = shallow(<Post/>);
    });

    it('Should render post title and post body',()=>{
        expect(wrapper.find(PostItem));
    });
});