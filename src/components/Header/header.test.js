import React from 'react';
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { shallow, mount, render } from 'enzyme';


import { Header } from './index';
import { Navigation } from './style'

describe('Header Component', () => {

  let props;
  beforeEach(() => {
    props = {
      theme: {
        theme: 'grass',
        color: 'green'
      }
    }
  });

  it('Should render without errors', () => {
    const component = mount(<Header theme={props}/>)
    expect(component).toMatchSnapshot()
  })

  it('Should render item with right color', () => {
    const component = mount(<Navigation theme={props.theme.color}/>)
    expect(component).toHaveStyleRule('background', props.theme.color)
  })

  it('Should render item with empty initial string', () => {
    const component = render(<Navigation theme={props.theme.color}/>)
    const text = component.find('input').text()
    expect(text).toBe('')
  })

  // it('should call props.onChange when text is typed', () => {
  //   const mockFunction = jest.fn() // In-built Jest function mocker
  //   const component = mount(<Navigation theme={props.theme.color}/>)
  //   console.log(component)
  
  //   // Test before event
  //   expect(mockFunction).not.toHaveBeenCalled()
  
  //   // simulate the click event
  //   component.find('input').simulate('change')
  
  //   // Test after event
  //   expect(mockFunction).toHaveBeenCalled()
  
  //   // Can also test inner text of button
  //   expect(component.find('input').text()).toContain('Do Something')
  // })
});
