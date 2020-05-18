import React from 'react';
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { shallow, mount, render } from 'enzyme';


import { Cart } from './index';
import { CartFooter } from './style'

describe('Cart Component', () => {

  let props;
  beforeEach(() => {
    props = {
      theme: {
        theme: 'grass',
        color: 'green'
      },
      cart:[],
      total: 'R$ 109,90'
    }
  });

  it('Should render without errors', () => {
    const component = shallow(<Cart {...props}/>)
    expect(component).toMatchSnapshot()
  })

  it('Should render no items', () => {
    const component = mount(<Cart {...props}/>)
    expect(component.find('li')).toHaveLength(0)
  })

  // it('Should render total', () => {
  //   const component = mount(<Cart {...props}/>)
  //   console.log(component.find('span').at(2).debug())
  //   expect(component.find('span').at(2)).toBe(props.total)
  // })
});
