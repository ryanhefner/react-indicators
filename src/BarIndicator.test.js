import React from 'react';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BarIndicator from './BarIndicator';

Enzyme.configure({
  adapter: new Adapter(),
});

describe('<BarIndicator />', () => {
  test('Confirm component renders at the default width', () => {
    const component = render(<BarIndicator />);
    expect(component.prop('width')).toEqual('45');
  });

  test('Confirm component renders at the default height', () => {
    const component = render(<BarIndicator />);
    expect(component.prop('height')).toEqual('5');
  });

  test('Confirm component renders with custom width', () => {
    const component = render(<BarIndicator width={50} />);
    expect(component.prop('width')).toEqual('50');
  });

  test('Confirm component renders with custom height', () => {
    const component = render(<BarIndicator height={10} />);
    expect(component.prop('height')).toEqual('10');
  });
});
