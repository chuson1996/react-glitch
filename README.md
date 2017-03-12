# React-glitch

Glitch images. This modules is based on https://github.com/snorpey/glitch-canvas

**Note: Install glitch-canvas as it is a peer dependency of react-glitch. I can't bundle glitch-canvas into react-glitch for some problem.**

[Demo](https://chuson1996.github.io/react-glitch/)

Install: `npm install --save glitch-canvas react-glitch`

Example: 
```javascript
import ReactGlitch from 'react-glitch';
//...
// Use it like a normal <img/> tag, except that it has 3 additional required props.
<ReactGlitch
  style={{ width: 400, height: 400 }}
  src={require('./assets/codeeveryday.jpg')} // (Required)
  glitching={true} // (Required)
  glitchOptions={{ // (Required)
    seed: [0, 60], // Number or Array[Number]
    quality: 99, // Number or Array[Number]
    amount: 0, // Number or Array[Number]
    iterations: [1, 5, 10, 20] // Number or Array[Number]
  }}
  speed={[100, 1000, 1000]} // (Required)
/>
```

Props:
1. speed: Array. The time difference between each glitch will be picked randomly from the array after every glitch.

2. glitching: Boolean. If glitching is false, it will just display the original image.

3. glitchOptions: Object. Specifying the props as array will create different variations of options of the glitch.
