import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PostItem from './PostItem';

configure({adapter: new Adapter()});

const setUp = (props={}) =>{
    const component = shallow(<PostItem {...props}></PostItem>);
    return component;
}

describe('<PostItem/>',()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper = setUp();
    });

    it('Should have class card',()=>{
        const component = wrapper.find('.card');
        expect(component.length).toBe(1);
    });

    it('Should have class title',()=>{
        const component = wrapper.find('.title');
        expect(component.length).toBe(1);
    });
});