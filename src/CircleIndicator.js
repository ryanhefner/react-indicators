import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Canvas from './Canvas';

class CircleIndicator extends Component {
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
      size,
      fill,
      fillBackground,
      stroke,
      strokeBackground,
      strokeWidth,
    } = this.props;

    const pixelRatio = window.devicePixelRatio || 1;
    const responsiveSize = size * pixelRatio;

    context.clearRect(0, 0, responsiveSize, responsiveSize);
    context.lineWidth = (strokeWidth * pixelRatio);
    context.beginPath();
    context.strokeStyle = strokeBackground;
    context.fillStyle = fillBackground;
    context.arc(
      (responsiveSize / 2),
      (responsiveSize / 2),
      (responsiveSize / 2) - ((strokeWidth * pixelRatio) / 2),
      0,
      Math.PI * 2,
      false
    );
    context.stroke();
    context.fill();

    context.fillStyle = fill;
    context.strokeStyle = stroke;
    context.beginPath();
    context.arc(
      (responsiveSize / 2),
      (responsiveSize / 2),
      (responsiveSize / 2) - ((strokeWidth * pixelRatio) / 2),
      -(Math.PI / 2),
      -(Math.PI / 2) + (Math.PI * (Math.max(0.001, (progress * 2)))),
      false
    );

    if (fill !== 'transparent') {
      context.lineTo(responsiveSize / 2, responsiveSize / 2);
      context.fill();
    }

    context.stroke();
  }

  render() {
    const {
      size,
    } = this.props;

    const props = _.omit(this.props, [
      'size',
      'fill',
      'fillBackground',
      'stroke',
      'strokeBackground',
      'strokeWidth',
    ]);

    return (
      <Canvas
        {...props}
        draw={this.draw}
        height={size}
        width={size}
      />
    );
  }
}

CircleIndicator.propTypes = {
  fill: PropTypes.string,
  fillBackground: PropTypes.string,
  progress: PropTypes.number,
  size: PropTypes.number,
  stroke: PropTypes.string,
  strokeBackground: PropTypes.string,
  strokeWidth: PropTypes.number,
};

CircleIndicator.defaultProps = {
  fill: 'transparent',
  fillBackground: 'transparent',
  progress: 0,
  size: 30,
  stroke: 'black',
  strokeBackground: 'white',
  strokeWidth: 2,
};

export default CircleIndicator;
