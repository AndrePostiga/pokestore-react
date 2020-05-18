import React from 'react';
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { shallow, mount, render } from 'enzyme';


import { ProductList } from './index';
import { List } from './style'

describe('ProductList Component', () => {

  let props;
  beforeEach(() => {
    props = {
      theme: {
        theme: 'grass',
        color: 'green'
      },
      pokemons: [
        {
          id: 1,
          name: 'Test Name',
          urlImage: 'https://test.test',
          price: 23.9,
          formatedPrice: 'R$ 23,90',
          amount: 1
        },
        {
          id: 2,
          name: 'Test Name',
          urlImage: 'https://test.test',
          price: 23.9,
          formatedPrice: 'R$ 23,90',
          amount: 1
        },
      ]
    }
  });

  it('Should render without errors', () => {
    const component = shallow(<ProductList {...props}/>)
    expect(component).toMatchSnapshot()
  })

  it('Should render two items', () => {
    const component = mount(<ProductList {...props}/>)
    expect(component.find('li')).toHaveLength(2)
  })

  // it('Should render item with right color', () => {
  //   const component = mount(<ProductList {...props}/>)
  //   expect(component.find('button').at(1)).toHaveStyleRule('background', props.theme.color)
  // })

});
