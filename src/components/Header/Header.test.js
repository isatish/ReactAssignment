import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Header} from './Header';

configure({adapter: new Adapter()});

const setUp = (props={}) =>{
    const component = shallow(<Header {...props}/>);
    return component;
};

describe('<Header/>',()=>{
    let wrapper;
    
    beforeEach(()=>{
        wrapper = setUp();
    });

    it('Should render head-container',()=>{
        const component = wrapper.find(`[data-test='head-container']`);
        expect(component.length).toBe(1);
    });

    it('Should render customSearch',()=>{
        const component = wrapper.find(`[data-test='customSearch']`);
        expect(component.length).toBe(1);
    });

    it('Should render customSearch-img-left',()=>{
        const component = wrapper.find(`[data-test='customSearch-img-left']`);
        expect(component.length).toBe(1);
    });

    it('Should render customSearch-img-right',()=>{
        const component = wrapper.find(`[data-test='customSearch-img-right']`);
        expect(component.length).toBe(1);
    });

    it('Should render searchInput',()=>{
        const component = wrapper.find(`[data-test='searchInput']`);
        expect(component.length).toBe(1);
    });
});