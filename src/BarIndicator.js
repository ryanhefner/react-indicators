import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Canvas from './Canvas';

class BarIndicator extends Component {
  constructor(props) {
    super(props);

    this.draw = this.draw.bind(this);
  }

  draw(progress, canvas) {
    const node = ReactDOM.findDOMNode(canvas);
    const context = node.getContext('2d');

    if (!context) {
      return;
    }

    const {
      width,
      height,
      color,
      backgroundColor,
    } = this.props;

    const pixelRatio = window.devicePixelRatio || 1;
    const responsiveWidth = width * pixelRatio;
    const responsiveHeight = height * pixelRatio;

    context.clearRect(0, 0, responsiveWidth, responsiveHeight);
    context.fillStyle = backgroundColor;
    context.fillRect(0, 0, width, height);
    context.fillStyle = color;
    context.fillRect(0, 0, width * progress, height);
  }

  render() {
    const props = _.omit(this.props, [
      'color',
      'backgroundColor',
    ]);

    return (
      <Canvas
        {...props}
        draw={this.draw}
      />
    );
  }
}

BarIndicator.propTypes = {
  progress: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
};

BarIndicator.defaultProps = {
  progress: 0,
  width: 45,
  height: 5,
  color: 'black',
  backgroundColor: 'transparent',
};

export default BarIndicator;
