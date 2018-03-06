# react-indicators

Simple, [responsive](#responsive-canvas), canvas-based indicators that
you can use to communicate the progress of loaders, timers or whatever else you
might need a progress indicator for.

~~In addition to the pre-built indicators, this library includes a generic `Canvas`
component that you can pass a custom `draw` function to, or access the `<canvas>`
element via a `ref`, and go nuts with your own canvas design goodness!~~

**Update:** I’ve moved the `Canvas` component to its own repo/package because I was finding myself needing it for cases where I didn’t need the indicators. This package now relies on `react-canvas-wrapper` as a dependency. You can check it out here: [react-canvas-wrapper](https://github.com/ryanhefner/react-canvas-wrapper)

## Install

Using [npm](https://npmjs.com/package/react-indicators):

```sh
npm install --save react-indicators
```

Using [Yarn](https://yarn.fyi/react-indicators):

```sh
yarn add react-indicators
```

Once you’ve added `react-indicators` to your project, you can use it just like you
would any other package you have installed.

```js
// using ES6 modules
import { CircleIndicator } from 'react-indicators';

// using CommonJS modules
var CircleIndicator = require('react-indicators').CircleIndicator;
```

## Indicators

The library consists of two common indicator components, `BarIndicator` and `CircleIndicator`. Below are examples of how you can use each component, along with the properties that they support.

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

```js
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

* `progress:Number` - Progress to represent in the indicator, `0` to `1`. (Default: `0`)
* `width:Number` - Width of the indicator @ 1x. (Default: `45`)
* `height:Number` - Height of the indicator @ 1x. (Default: `5`)
* `color:String` - Color of the progress portion of the indicator. (Default: `'black'`)
* `backgroundColor:String` - Background color of the empty, non-progress, portion of the indicator. (Default: `'transparent'`)

**Example**

```js
import { BarIndicator } from 'react-indicators';

...

  render() {
    const {
      progress,
    } = this.state;

    return (
      <BarIndicator progress={progress} />
    );
  }

...

```

## Responsive Canvas

All components recognize the `devicePixelRatio` of the device/browser they are running
in, so the canvas is properly sized in order to keep the graphics crisp and clean.
So, feel free to set the size or dimensions based on a `1x` scale and the component
will adjust those accordingly.

## License

[MIT](LICENSE) © [Ryan Hefner](https://www.ryanhefner.com)
