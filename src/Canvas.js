import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

class Canvas extends Component {
  componentDidMount() {
    this.draw();
  }

  componentWillReceiveProps(nextProps) {
    this.draw();
  }

  shouldComponentUpdate() {
    return false;
  }

  draw() {
    if (!this.canvas) {
      return;
    }

    const {
      draw,
      progress,
    } = this.props;

    draw(progress, this.canvas);
  }

  render() {
    const {
      canvasRef,
      width,
      height,
    } = this.props;

    const pixelRatio = window.devicePixelRatio || 1;
    const props = _.omit(this.props, [
      'canvasRef',
      'draw',
      'progress',
      'width',
      'height',
    ]);

    const ref = canvasRef
      ? canvasRef
      : (element) => { this.canvas = element; };

    return (
      <canvas
        {...props}
        ref={ref}
        width={width * pixelRatio}
        height={height * pixelRatio}
      />
    );
  }
}

Canvas.propTypes = {
  canvasRef: PropTypes.func,
  draw: PropTypes.func,
  width: PropTypes.number,
  height: PropTypes.number,
  progress: PropTypes.number,
};

Canvas.defaultProps = {
  draw: () => {},
  width: 30,
  height: 30,
  progress: 0,
};

export default Canvas;
