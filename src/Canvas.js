import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cleanProps from 'clean-react-props';

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

    this.props.draw(this.canvas);
  }

  render() {
    const {
      canvasRef,
      width,
      height,
    } = this.props;

    const pixelRatio = window.devicePixelRatio || 1;
    const ref = canvasRef
      ? canvasRef
      : (element) => { this.canvas = element; };

    return (
      <canvas
        {...cleanProps(this.props)}
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
};

Canvas.defaultProps = {
  draw: () => {},
  width: 30,
  height: 30,
};

export default Canvas;
