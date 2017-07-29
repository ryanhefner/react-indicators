# react-indicators

Simple, [responsive](#responsive-canvas), canvas-based indicators that
you can use to communicate the progress of loaders, timers or whatever else you
might need a progress indicator for.

In addition to the pre-built indicators, this library includes a generic `Canvas`
component that you can pass a custom `draw` function to, or access the `<canvas>`
element via a `ref`, and go nuts with your own canvas design goodness!

## Install

Using [npm](https://npmjs.com/package/react-indicators):
```
npm install --save react-indicators
```

Using [Yarn](https://yarn.fyi/react-indicators):
```
yarn add react-indicators
```

Once you’ve added `react-indicators` to your project, you can use it just like you
would any other package you have installed.

```
// using ES6 modules
import {CircleIndicator} from 'react-indicators';

// using CommonJS modules
var CircleIndicator = require('react-indicators').CircleIndicator;
```

## Indicators

The library consists of two common indicator components, `BarIndicator` and `CircleIndicator`.
And, a base component that both of these components utilize, `Canvas`. Below are
examples of how you can use each component, along with the properties that they
support.

### `<CircleIndicator />`

**Properties**

* `progress:Number` - Progress to represent in the indicator, `0` to `1`. (Default: `0`)
* `size:Number` - Size, width/height, of the indicator. (Default: `30`)
* `fill:String` - Color used to fill the progress portion indicator. (Default: `'transparent'`)
* `fillBackground:String` - Color used to fill the empty, non-progress, portion of the indicator. (Default: `'transparent'`)
* `stroke:String` - Color for the stroke of the progress portion of the indicator. (Default: `'black'`)
* `strokeBackground:String` - Color for the stroke of the empty, non-progress, portion of the indicator. (Default: `'white'`)
* `strokeWidth:Number` - Width of the stroke. (Default: `2`)

**Example**

```
import {CircleIndicator} from 'react-indicators';

...

  render() {
    const {
      progress,
    } = this.state;

    return (
      <CircleIndicator progress={progress} />
    );
  }

...

```

### `<BarIndicator />`

**Properties**

* `progress:Number` - Progress to represent in the indicator, `0` to `1`. (Default: `0`)
* `width:Number` - Width of the indicator @ 1x. (Default: `45`)
* `height:Number` - Height of the indicator @ 1x. (Default: `5`)
* `color:String` - Color of the progress portion of the indicator. (Default: `'black'`)
* `backgroundColor:String` - Background color of the empty, non-progress, portion of the indicator. (Default: `'transparent'`)

**Example**

```
import {CircleIndicator} from 'react-indicators';

...

  render() {
    const {
      progress,
    } = this.state;

    return (
      <CircleIndicator progress={progress} />
    );
  }

...

```

### `<Canvas />`

**Properties**

* `canvasRef:Function` - Function to set reference to `<canvas>` element. (Default: `(element) => { this.canvas = element; }`)
* `draw:Function` - Callback called when props change on the component. (Default: `(canvas) => {}`)
* `width:Number` - Width of the canvas @ 1x. (Default: `30`)
* `height:Number` - Height of the canvas @ 1x. (Default: `30`)

**Example - Canvas `ref`**

```
import {Canvas} from 'react-indicators';

...

  componentWillReceiveProps(nextProps) {
    this.refreshCanvas();
  }

  refreshCanvas() {
    const canvas = ReactDOM.findDOMNode(this.canvas);
    const context = canvas.getContext('2d');

    /**
     * ...Perform canvas magic here...
     */
  }

  render() {
    return (
      <Canvas canvasRef={(element) => { this.canvas = element; }} />
    );
  }

```

**Example - Custom `draw` method**

```
import {Canvas} from 'react-indicators';

...
  constructor(props) {
    super(props);

    this.draw = this.draw.bind(this);
  }

  draw(canvas) {
    const node = ReactDOM.findDOMNode(canvas);
    const context = node.getContext('2d');

    if (!context) {
      return;
    }

    const {
      progress,
    } = this.props;

    const pixelRatio = window.devicePixelRatio || 1;
    const width = 30 * pixelRatio;
    const height = 30 * pixelRatio;
    const backgroundColor = 'grey';
    const color = 'black';

    context.clearRect(0, 0, width, height);
    context.fillStyle = backgroundColor;
    context.beginPath();
    context.arc(
      (width / 2),
      (height / 2),
      (width / 2),
      0,
      Math.PI * 2
    );
    context.fill();

    context.fillStyle = color;
    context.beginPath();
    context.arc(
      (width / 2),
      (height / 2),
      ((width * progress) / 2),
      0,
      Math.PI * 2
    );
    context.fill();
  }

  render() {
    return (
      <Canvas
        draw={this.draw}
      />
    );
  }

...

```

## Responsive Canvas

All components recognize the `devicePixelRatio` of the device/browser they are running
in, so the canvas is properly sized in order to keep the graphics crisp and clean.
So, feel free to set the size or dimensions based on a `1x` scale and the component
will adjust those accordingly.

Although, keep in mind that if you decide to pass in your own custom `draw` function
you’ll have to account for the `devicePixelRatio` within your drawing commands.

## License

[MIT](LICENSE)
