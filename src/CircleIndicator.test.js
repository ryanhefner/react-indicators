import React from 'react';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CircleIndicator from './CircleIndicator';

Enzyme.configure({
  adapter: new Adapter(),
});

describe('<CircleIndicator />', () => {
  test('Confirm component renders at the default size', () => {
    const component = render(<CircleIndicator />);
    expect(component.prop('width')).toEqual('30');
    expect(component.prop('height')).toEqual('30');
  });

  test('Confirm component renders with custom size', () => {
    const component = render(<CircleIndicator size={50} />);
    expect(component.prop('width')).toEqual('50');
    expect(component.prop('height')).toEqual('50');
  });
});
