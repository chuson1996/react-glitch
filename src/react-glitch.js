import React, { Component, PropTypes } from 'react';
import glitch from 'glitch-canvas';
import sample from 'lodash/sample';

export default class GlitchImg extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    glitching: PropTypes.bool,
    glitchOptions: PropTypes.object.isRequired,
    speed: PropTypes.array.isRequired,
  };

  static defaultProps = {
    glitching: false,
    glitchOptions: {
      seed: 0,
      quality: 99,
      amount: 0,
      iterations: [1, 5, 10],
    },
    speed: [10, 10, 1000],
  };

  constructor(props) {
    super(props);
    this.state = {
      outputImgSrc: null,
    };

    this.cachedGlitchImages = {};
  }

  componentDidMount() {
    const { glitching, glitchOptions } = this.props;
    this.variations = this.getGlitchVariation(glitchOptions);
    this._img = new Image();
    this._img.onload = () => {
      this.preload();
      glitching && this.glitchInterval();
    };
    this._img.src = this.props.src;
  }

  preload = () => {
    Promise.all(
      this.variations.map(option =>
        glitch(option)
          .fromImage(this._img)
          .toDataURL()
          .then(dataUrl => ({ dataUrl, option })),
      ),
    ).then(data => {
      data.forEach(({ dataUrl, option }) => {
        this.cachedGlitchImages[JSON.stringify(option)] = dataUrl;
      });
    });
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.glitching && !this.props.glitching) {
      this.glitchInterval();
    }
    if (nextProps.glitchOptions !== this.props.glitchOptions) {
      this.variations = this.getGlitchVariation(nextProps.glitchOptions);
    }
  }

  getGlitchVariation = options => {
    const { glitchOptions } = this.props;
    const _options = options || glitchOptions;
    let result = [];
    const item = {};
    for (const key of Object.keys(_options)) {
      if (Array.isArray(_options[key])) {
        for (const val of _options[key]) {
          result = [
            ...result,
            ...this.getGlitchVariation({
              ..._options,
              [key]: val,
            }),
          ];
        }
        return result;
      } else {
        item[key] = _options[key];
      }
    }
    return [...result, item];
  };

  glitchInterval = () => {
    this.timeout = setTimeout(() => {
      const { glitching } = this.props;
      if (glitching) {
        this.glitch().then(this.glitchInterval);
      }
    }, sample(this.props.speed));
  };

  glitch = () => {
    const newGlitchProps = sample(this.variations);

    if (this.cachedGlitchImages[JSON.stringify(newGlitchProps)]) {
      this.setState({
        outputImgSrc: this.cachedGlitchImages[JSON.stringify(newGlitchProps)],
      });
      return Promise.resolve();
    }
    return glitch(newGlitchProps)
      .fromImage(this._img)
      .toDataURL()
      .then(dataUrl => {
        this.cachedGlitchImages[JSON.stringify(newGlitchProps)] = dataUrl;
        this.setState({
          outputImgSrc: dataUrl,
        });
      });
  };

  render() {
    const { outputImgSrc } = this.state;
    const { src, glitching, glitchOptions, speed, ...others } = this.props;

    return outputImgSrc && glitching ? (
      <img src={outputImgSrc} {...others} alt="" />
    ) : (
      <img src={src} {...others} alt="" />
    );
  }
}
