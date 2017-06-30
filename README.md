# React Indicators

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

Using [Yarn](https://yarnpkg.com/en/package/react-indicators):
```
yarn add react-indicators
```

**Requirements**

These components rely on the following packages to work properly within your project.
Most of these are pretty common if you’re working within a React app, but just in case,
these are what you’ll need to include in your project for the indicators to work.

* [react](https://www.npmjs.com/package/react)
* [react-dom](https://www.npmjs.com/package/react-dom)
* [prop-types](https://www.npmjs.com/package/prop-types)
* [lodash](https://www.npmjs.com/package/lodash)

**Install the whole kit and kaboodle**

Using npm:
```
npm install --save react react-dom prop-types lodash react-indicators
```

Using Yarn:
```
yarn add react react-dom prop-types lodash react-indicators
```

Once you’ve added `react-indicators` to your project, you can use it just like you
would any other package you have installed.

```
// using ES6 modules
import { CircleIndicator } from 'react-indicators';

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

* `progress` - Number (Default: `0`)
* `size` - Number (Default: `30`)
* `fill` - String (Default: `'transparent'`)
* `fillBackground` - String (Default: `'transparent'`)
* `stroke` - String (Default: `'black'`)
* `strokeBackground` - String (Default: `'white'`)
* `strokeWidth` - Number (Default: `2`)


**Example**

```
import { CircleIndicator } from 'react-indicators';

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

* `progress` - Number (Default: `0`)
* `width` - Number (Default: `45`)
* `height` - Number (Default: `5`)
* `color` - String (Default: `'black'`)
* `backgroundColor` - String (Default: `'transparent'`)


**Example**

```
import { CircleIndicator } from 'react-indicators';

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

* `canvasRef` - Function (Default: `(element) => { this.canvas = element; }`)
* `draw` - Function (Default: `() => {}`)
* `width` - Number (Default: `30`)
* `height` - Number (Default: `30`)

**Example - Canvas `ref`**

```
import { Canvas } from 'react-indicators';

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
import { Canvas } from 'react-indicators';

...
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
    const {
      progress,
    } = this.state;

    return (
      <Canvas
        draw={this.draw}
        progress={progress}
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
