(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactGlitch"] = factory(require("react"));
	else
		root["ReactGlitch"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "lib/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _glitchCanvas = __webpack_require__(2);
	
	var _glitchCanvas2 = _interopRequireDefault(_glitchCanvas);
	
	var _sample = __webpack_require__(3);
	
	var _sample2 = _interopRequireDefault(_sample);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var GlitchImg = function (_Component) {
	  _inherits(GlitchImg, _Component);
	
	  function GlitchImg(props) {
	    _classCallCheck(this, GlitchImg);
	
	    var _this = _possibleConstructorReturn(this, (GlitchImg.__proto__ || Object.getPrototypeOf(GlitchImg)).call(this, props));
	
	    _this.preload = function () {
	      Promise.all(_this.variations.map(function (option) {
	        return (0, _glitchCanvas2.default)(option).fromImage(_this._img).toDataURL().then(function (dataUrl) {
	          return { dataUrl: dataUrl, option: option };
	        });
	      })).then(function (data) {
	        data.forEach(function (_ref) {
	          var dataUrl = _ref.dataUrl,
	              option = _ref.option;
	
	          _this.cachedGlitchImages[JSON.stringify(option)] = dataUrl;
	        });
	      });
	    };
	
	    _this.getGlitchVariation = function (options) {
	      var glitchOptions = _this.props.glitchOptions;
	
	      var _options = options || glitchOptions;
	      var result = [];
	      var item = {};
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = Object.keys(_options)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var key = _step.value;
	
	          if (Array.isArray(_options[key])) {
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;
	
	            try {
	              for (var _iterator2 = _options[key][Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                var val = _step2.value;
	
	                result = [].concat(_toConsumableArray(result), _toConsumableArray(_this.getGlitchVariation(Object.assign({}, _options, _defineProperty({}, key, val)))));
	              }
	            } catch (err) {
	              _didIteratorError2 = true;
	              _iteratorError2 = err;
	            } finally {
	              try {
	                if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                  _iterator2.return();
	                }
	              } finally {
	                if (_didIteratorError2) {
	                  throw _iteratorError2;
	                }
	              }
	            }
	
	            ;
	            return result;
	          } else {
	            item[key] = _options[key];
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	
	      ;
	      return [].concat(_toConsumableArray(result), [item]);
	    };
	
	    _this.glitchInterval = function () {
	      _this.timeout = setTimeout(function () {
	        var glitching = _this.props.glitching;
	
	        if (glitching) {
	          _this.glitch().then(_this.glitchInterval);
	        }
	      }, (0, _sample2.default)(_this.props.speed));
	    };
	
	    _this.glitch = function () {
	      var newGlitchProps = (0, _sample2.default)(_this.variations);
	      console.log('glitch');
	      if (_this.cachedGlitchImages[JSON.stringify(newGlitchProps)]) {
	        _this.setState({
	          outputImgSrc: _this.cachedGlitchImages[JSON.stringify(newGlitchProps)]
	        });
	        return Promise.resolve();
	      }
	      return (0, _glitchCanvas2.default)(newGlitchProps).fromImage(_this._img).toDataURL().then(function (dataUrl) {
	        _this.cachedGlitchImages[JSON.stringify(newGlitchProps)] = dataUrl;
	        _this.setState({
	          outputImgSrc: dataUrl
	        });
	      });
	    };
	
	    _this.state = {
	      outputImgSrc: null
	    };
	
	    _this.cachedGlitchImages = {};
	    return _this;
	  }
	
	  _createClass(GlitchImg, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      var _props = this.props,
	          glitching = _props.glitching,
	          glitchOptions = _props.glitchOptions;
	
	      this.variations = this.getGlitchVariation(glitchOptions);
	      this._img = new Image();
	      this._img.onload = function () {
	        _this2.preload();
	        glitching && _this2.glitchInterval();
	      };
	      this._img.src = this.props.src;
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.timeout);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.glitching && !this.props.glitching) {
	        this.glitchInterval();
	      }
	      if (nextProps.glitchOptions !== this.props.glitchOptions) {
	        this.variations = this.getGlitchVariation(nextProps.glitchOptions);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var outputImgSrc = this.state.outputImgSrc;
	
	      var _props2 = this.props,
	          src = _props2.src,
	          glitching = _props2.glitching,
	          glitchOptions = _props2.glitchOptions,
	          speed = _props2.speed,
	          others = _objectWithoutProperties(_props2, ['src', 'glitching', 'glitchOptions', 'speed']);
	
	      return outputImgSrc && glitching ? _react2.default.createElement('img', Object.assign({ src: outputImgSrc }, others, { alt: '' })) : _react2.default.createElement('img', Object.assign({ src: src }, others, { alt: '' }));
	    }
	  }]);
	
	  return GlitchImg;
	}(_react.Component);
	
	GlitchImg.propTypes = {
	  src: _react.PropTypes.string.isRequired,
	  glitching: _react.PropTypes.bool,
	  glitchOptions: _react.PropTypes.object.isRequired,
	  speed: _react.PropTypes.array.isRequired
	};
	GlitchImg.defaultProps = {
	  glitching: false,
	  glitchOptions: {
	    seed: 0,
	    quality: 99,
	    amount: 0,
	    iterations: [1, 5, 10]
	  },
	  speed: [10, 10, 1000]
	};
	exports.default = GlitchImg;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;'use strict';
	
	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	(function (f) {
	    if (( false ? 'undefined' : _typeof2(exports)) === 'object' && typeof module !== 'undefined') {
	        module.exports = f();
	    } else {
	        if (true) {
	            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	        } else {
	            var g;
	            if (typeof window !== 'undefined') {
	                g = window;
	            } else {
	                if (typeof global !== 'undefined') {
	                    g = global;
	                } else {
	                    if (typeof self !== 'undefined') {
	                        g = self;
	                    } else {
	                        g = this;
	                    }
	                }
	            }
	            g.glitch = f();
	        }
	    }
	})(function () {
	    var define, module, exports;
	    return function e(t, n, r) {
	        function s(o, u) {
	            if (!n[o]) {
	                if (!t[o]) {
	                    var a = typeof require == 'function' && require;
	                    if (!u && a) {
	                        return require(o, !0);
	                    }
	                    if (i) {
	                        return i(o, !0);
	                    }
	                    var f = new Error('Cannot find module \'' + o + '\'');
	                    throw f.code = 'MODULE_NOT_FOUND', f;
	                }
	                var l = n[o] = {
	                    exports: {}
	                };
	                t[o][0].call(l.exports, function (e) {
	                    var n = t[o][1][e];
	                    return s(n ? n : e);
	                }, l, l.exports, e, t, n, r);
	            }
	            return n[o].exports;
	        }
	        var i = typeof require == 'function' && require;
	        for (var o = 0; o < r.length; o++) {
	            s(r[o]);
	        }
	        return s;
	    }({
	        1: [function (_dereq_, module, exports) {
	            'use strict';
	
	            function _interopRequireDefault(obj) {
	                return obj && obj.__esModule ? obj : {
	                    'default': obj
	                };
	            }
	            Object.defineProperty(exports, '__esModule', {
	                value: !0
	            });
	            var _extends = Object.assign || function (target) {
	                for (var i = 1; i < arguments.length; i++) {
	                    var source = arguments[i];
	                    for (var key in source) {
	                        Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
	                    }
	                }
	                return target;
	            };
	            exports['default'] = function (params) {
	                function getParams() {
	                    return params;
	                }
	                function getInput() {
	                    var result = _extends({}, api);
	                    return inputFn || _extends(result, inputMethods), result;
	                }
	                function getOutput() {
	                    var result = _extends({}, api);
	                    return outputFn || _extends(result, outputMethods), result;
	                }
	                function noTransform(x) {
	                    return x;
	                }
	                function fromImage(inputOptions) {
	                    return setInput(_fromImage2['default'], inputOptions);
	                }
	                function fromImageData(inputOptions) {
	                    return setInput(noTransform, inputOptions);
	                }
	                function toDataURL(outputOptions) {
	                    return setOutput(noTransform);
	                }
	                function toImage(outputOptions) {
	                    return setOutput(_toImage2['default'], outputOptions, !0);
	                }
	                function toImageData(outputOptions) {
	                    return setOutput(_toImageData2['default'], outputOptions, !0);
	                }
	                function setInput(fn, inputOptions, canResolve) {
	                    return inputFn = function inputFn() {
	                        return new Promise(function (resolve, reject) {
	                            if (canResolve) {
	                                fn(inputOptions, resolve, reject);
	                            } else {
	                                if (fn === noTransform) {
	                                    resolve(inputOptions);
	                                } else {
	                                    try {
	                                        resolve(fn(inputOptions, resolve, reject));
	                                    } catch (err) {
	                                        reject(err);
	                                    }
	                                }
	                            }
	                        });
	                    }, isReady() ? getResult() : getOutput();
	                }
	                function setOutput(fn, outputOptions, canResolve) {
	                    return outputFn = function outputFn(base64URL) {
	                        return new Promise(function (resolve, reject) {
	                            canResolve ? fn(base64URL, outputOptions, resolve, reject) : fn === noTransform ? resolve(base64URL) : fn(base64URL, outputOptions).then(resolve, reject);
	                        });
	                    }, isReady() ? getResult() : getInput();
	                }
	                function isReady() {
	                    return inputFn && outputFn;
	                }
	                function getResult() {
	                    return new Promise(function (resolve, reject) {
	                        inputFn().then(function (imageData) {
	                            return glitch(imageData, params);
	                        }, reject).then(function (base64URL) {
	                            outputFn(base64URL).then(resolve, reject);
	                        }, reject);
	                    });
	                }
	                function glitch(imageData, params) {
	                    return new Promise(function (resolve, reject) {
	                        (0, _imageDataToBase2['default'])(imageData, params.quality).then(function (base64URL) {
	                            return glitchInWorker(imageData, base64URL, params);
	                        }, reject).then(resolve, reject);
	                    });
	                }
	                function glitchInWorker(imageData, base64URL, params) {
	                    return new Promise(function (resolve, reject) {
	                        worker.addEventListener('message', function (event) {
	                            event.data && event.data.base64URL ? resolve(event.data.base64URL) : reject(event.data && event.data.err ? event.data.err : event);
	                        }), worker.postMessage({
	                            params: params,
	                            base64URL: base64URL,
	                            imageData: imageData,
	                            imageDataWidth: imageData.width,
	                            imageDataHeight: imageData.height
	                        });
	                    });
	                }
	                params = (0, _sanitizeInput2['default'])(params);
	                var inputFn = void 0,
	                    outputFn = void 0,
	                    worker = (0, _webworkify2['default'])(_glitchWorker2['default']),
	                    api = {
	                    getParams: getParams,
	                    getInput: getInput,
	                    getOutput: getOutput
	                },
	                    inputMethods = {
	                    fromImageData: fromImageData,
	                    fromImage: fromImage
	                },
	                    outputMethods = {
	                    toImage: toImage,
	                    toDataURL: toDataURL,
	                    toImageData: toImageData
	                };
	                return getInput();
	            };
	            var _sanitizeInput = _dereq_('./input/sanitizeInput'),
	                _sanitizeInput2 = _interopRequireDefault(_sanitizeInput),
	                _fromImage = _dereq_('./input/browser/fromImage'),
	                _fromImage2 = _interopRequireDefault(_fromImage),
	                _toImage = _dereq_('./output/browser/toImage'),
	                _toImage2 = _interopRequireDefault(_toImage),
	                _toImageData = _dereq_('./output/toImageData'),
	                _toImageData2 = _interopRequireDefault(_toImageData),
	                _imageDataToBase = _dereq_('./glitch/browser/imageDataToBase64'),
	                _imageDataToBase2 = _interopRequireDefault(_imageDataToBase),
	                _glitchImageData = _dereq_('./glitch/glitchImageData'),
	                _glitchImageData2 = _interopRequireDefault(_glitchImageData),
	                _webworkify = _dereq_('webworkify'),
	                _webworkify2 = _interopRequireDefault(_webworkify),
	                _glitchWorker = _dereq_('./workers/glitchWorker'),
	                _glitchWorker2 = _interopRequireDefault(_glitchWorker);
	            module.exports = exports['default'];
	        }, {
	            './glitch/browser/imageDataToBase64': 4,
	            './glitch/glitchImageData': 7,
	            './input/browser/fromImage': 9,
	            './input/sanitizeInput': 11,
	            './output/browser/toImage': 12,
	            './output/toImageData': 13,
	            './workers/glitchWorker': 20,
	            webworkify: 22
	        }],
	        2: [function (_dereq_, module, exports) {
	            'use strict';
	
	            Object.defineProperty(exports, '__esModule', {
	                value: !0
	            });
	            var base64Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
	                base64Map = base64Chars.split(''),
	                reversedBase64Map = {};
	            base64Map.forEach(function (val, key) {
	                reversedBase64Map[val] = key;
	            }), exports['default'] = {
	                map: base64Map,
	                reverse: reversedBase64Map
	            }, module.exports = exports['default'];
	        }, {}],
	        3: [function (_dereq_, module, exports) {
	            'use strict';
	
	            Object.defineProperty(exports, '__esModule', {
	                value: !0
	            }), exports['default'] = function (base64URL) {
	                for (var digitNum, currrentChar, prev, result = [], i = 23, len = base64URL.length; len > i; i++) {
	                    switch (currrentChar = _base64Map.reverse[base64URL.charAt(i)], digitNum = (i - 23) % 4) {
	                        case 1:
	                            result.push(prev << 2 | currrentChar >> 4);
	                            break;
	
	                        case 2:
	                            result.push((15 & prev) << 4 | currrentChar >> 2);
	                            break;
	
	                        case 3:
	                            result.push((3 & prev) << 6 | currrentChar);
	                    }
	                    prev = currrentChar;
	                }
	                return result;
	            };
	            var _base64Map = _dereq_('./base64Map');
	            module.exports = exports['default'];
	        }, {
	            './base64Map': 2
	        }],
	        4: [function (_dereq_, module, exports) {
	            'use strict';
	
	            function _interopRequireDefault(obj) {
	                return obj && obj.__esModule ? obj : {
	                    'default': obj
	                };
	            }
	            Object.defineProperty(exports, '__esModule', {
	                value: !0
	            }), exports['default'] = function (imageData, quality) {
	                return new Promise(function (resolve, reject) {
	                    if ((0, _isImageData2['default'])(imageData)) {
	                        var canvas = new _canvasBrowserify2['default'](imageData.width, imageData.height),
	                            ctx = canvas.getContext('2d');
	                        ctx.putImageData(imageData, 0, 0);
	                        var base64URL = canvas.toDataURL('image/jpeg', quality / 100);
	                        resolve(base64URL);
	                    } else {
	                        reject(new Error('object is not valid imageData'));
	                    }
	                });
	            };
	            var _canvasBrowserify = _dereq_('canvas-browserify'),
	                _canvasBrowserify2 = _interopRequireDefault(_canvasBrowserify),
	                _isImageData = _dereq_('../../util/isImageData'),
	                _isImageData2 = _interopRequireDefault(_isImageData);
	            module.exports = exports['default'];
	        }, {
	            '../../util/isImageData': 18,
	            'canvas-browserify': 21
	        }],
	        5: [function (_dereq_, module, exports) {
	            'use strict';
	
	            Object.defineProperty(exports, '__esModule', {
	                value: !0
	            }), exports['default'] = function (byteArray) {
	                for (var result = ['data:image/jpeg;base64,'], byteNum = void 0, currentByte = void 0, previousByte = void 0, i = 0, len = byteArray.length; len > i; i++) {
	                    switch (currentByte = byteArray[i], byteNum = i % 3) {
	                        case 0:
	                            result.push(_base64Map.map[currentByte >> 2]);
	                            break;
	
	                        case 1:
	                            result.push(_base64Map.map[(3 & previousByte) << 4 | currentByte >> 4]);
	                            break;
	
	                        case 2:
	                            result.push(_base64Map.map[(15 & previousByte) << 2 | currentByte >> 6]), result.push(_base64Map.map[63 & currentByte]);
	                    }
	                    previousByte = currentByte;
	                }
	                return 0 === byteNum ? (result.push(_base64Map.map[(3 & previousByte) << 4]), result.push('==')) : 1 === byteNum && (result.push(_base64Map.map[(15 & previousByte) << 2]), result.push('=')), result.join('');
	            };
	            var _base64Map = _dereq_('./base64Map');
	            module.exports = exports['default'];
	        }, {
	            './base64Map': 2
	        }],
	        6: [function (_dereq_, module, exports) {
	            'use strict';
	
	            function _interopRequireDefault(obj) {
	                return obj && obj.__esModule ? obj : {
	                    'default': obj
	                };
	            }
	            Object.defineProperty(exports, '__esModule', {
	                value: !0
	            }), exports['default'] = function (byteArray, seed, amount, iterationCount) {
	                for (var headerLength = (0, _jpgHeaderLength2['default'])(byteArray), maxIndex = byteArray.length - headerLength - 4, amountPercent = amount / 100, seedPercent = seed / 100, iterationIndex = 0; iterationCount > iterationIndex; iterationIndex++) {
	                    var minPixelIndex = maxIndex / iterationCount * iterationIndex | 0,
	                        maxPixelIndex = maxIndex / iterationCount * (iterationIndex + 1) | 0,
	                        delta = maxPixelIndex - minPixelIndex,
	                        pixelIndex = minPixelIndex + delta * seedPercent | 0;
	                    pixelIndex > maxIndex && (pixelIndex = maxIndex);
	                    var indexInByteArray = ~~(headerLength + pixelIndex);
	                    byteArray[indexInByteArray] = ~~(256 * amountPercent);
	                }
	                return byteArray;
	            };
	            var _jpgHeaderLength = _dereq_('./jpgHeaderLength'),
	                _jpgHeaderLength2 = _interopRequireDefault(_jpgHeaderLength);
	            module.exports = exports['default'];
	        }, {
	            './jpgHeaderLength': 8
	        }],
	        7: [function (_dereq_, module, exports) {
	            'use strict';
	
	            function _interopRequireDefault(obj) {
	                return obj && obj.__esModule ? obj : {
	                    'default': obj
	                };
	            }
	            Object.defineProperty(exports, '__esModule', {
	                value: !0
	            }), exports['default'] = function (imageData, base64URL, params) {
	                if ((0, _isImageData2['default'])(imageData)) {
	                    var byteArray = (0, _base64ToByteArray2['default'])(base64URL),
	                        glitchedByteArray = (0, _glitchByteArray2['default'])(byteArray, params.seed, params.amount, params.iterations),
	                        glitchedBase64URL = (0, _byteArrayToBase2['default'])(glitchedByteArray);
	                    return glitchedBase64URL;
	                }
	                throw new Error('glitchImageData: imageData seems to be corrupt.');
	            };
	            var _isImageData = _dereq_('../util/isImageData'),
	                _isImageData2 = _interopRequireDefault(_isImageData),
	                _base64ToByteArray = _dereq_('./base64ToByteArray'),
	                _base64ToByteArray2 = _interopRequireDefault(_base64ToByteArray),
	                _glitchByteArray = _dereq_('./glitchByteArray'),
	                _glitchByteArray2 = _interopRequireDefault(_glitchByteArray),
	                _byteArrayToBase = _dereq_('./byteArrayToBase64'),
	                _byteArrayToBase2 = _interopRequireDefault(_byteArrayToBase);
	            module.exports = exports['default'];
	        }, {
	            '../util/isImageData': 18,
	            './base64ToByteArray': 3,
	            './byteArrayToBase64': 5,
	            './glitchByteArray': 6
	        }],
	        8: [function (_dereq_, module, exports) {
	            'use strict';
	
	            Object.defineProperty(exports, '__esModule', {
	                value: !0
	            }), exports['default'] = function (byteArr) {
	                for (var result = 417, i = 0, len = byteArr.length; len > i; i++) {
	                    if (255 === byteArr[i] && 218 === byteArr[i + 1]) {
	                        result = i + 2;
	                        break;
	                    }
	                }
	                return result;
	            }, module.exports = exports['default'];
	        }, {}],
	        9: [function (_dereq_, module, exports) {
	            'use strict';
	
	            function _interopRequireDefault(obj) {
	                return obj && obj.__esModule ? obj : {
	                    'default': obj
	                };
	            }
	            Object.defineProperty(exports, '__esModule', {
	                value: !0
	            }), exports['default'] = function (image) {
	                if (image instanceof HTMLImageElement) {
	                    if (!image.naturalWidth || !image.naturalHeight || image.complete === !1) {
	                        throw new Error('This this image hasn\'t finished loading: ' + image.src);
	                    }
	                    var canvas = new _canvasBrowserify2['default'](image.naturalWidth, image.naturalHeight),
	                        ctx = canvas.getContext('2d');
	                    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
	                    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
	                    return imageData.data && imageData.data.length && ('undefined' == typeof imageData.width && (imageData.width = image.naturalWidth), 'undefined' == typeof imageData.height && (imageData.height = image.naturalHeight)), imageData;
	                }
	                throw new Error('This object does not seem to be an image.');
	            };
	            var _canvasBrowserify = _dereq_('canvas-browserify'),
	                _canvasBrowserify2 = _interopRequireDefault(_canvasBrowserify),
	                Image = _canvasBrowserify2['default'].Image;
	            module.exports = exports['default'];
	        }, {
	            'canvas-browserify': 21
	        }],
	        10: [function (_dereq_, module, exports) {
	            'use strict';
	
	            Object.defineProperty(exports, '__esModule', {
	                value: !0
	            }), exports['default'] = {
	                amount: 35,
	                iterations: 20,
	                quality: 30,
	                seed: 25
	            }, module.exports = exports['default'];
	        }, {}],
	        11: [function (_dereq_, module, exports) {
	            'use strict';
	
	            function _interopRequireDefault(obj) {
	                return obj && obj.__esModule ? obj : {
	                    'default': obj
	                };
	            }
	            Object.defineProperty(exports, '__esModule', {
	                value: !0
	            });
	            var _typeof = 'function' == typeof Symbol && 'symbol' == _typeof2(Symbol.iterator) ? function (obj) {
	                return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
	            } : function (obj) {
	                return obj && 'function' == typeof Symbol && obj.constructor === Symbol ? 'symbol' : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
	            };
	            exports['default'] = function (params) {
	                params = (0, _clone2['default'])(params), 'object' !== ('undefined' == typeof params ? 'undefined' : _typeof(params)) && (params = {});
	                var defaultKeys = Object.keys(_defaultParams2['default']).filter(function (key) {
	                    return 'iterations' !== key;
	                });
	                return defaultKeys.forEach(function (key) {
	                    'number' != typeof params[key] || isNaN(params[key]) ? params[key] = _defaultParams2['default'][key] : params[key] = (0, _clamp2['default'])(params[key], 0, 100), params[key] = Math.round(params[key]);
	                }), ('number' != typeof params.iterations || isNaN(params.iterations) || params.iterations <= 0) && (params.iterations = _defaultParams2['default'].iterations), params.iterations = Math.round(params.iterations), params;
	            };
	            var _clamp = _dereq_('../util/clamp'),
	                _clamp2 = _interopRequireDefault(_clamp),
	                _clone = _dereq_('../util/clone'),
	                _clone2 = _interopRequireDefault(_clone),
	                _defaultParams = _dereq_('./defaultParams'),
	                _defaultParams2 = _interopRequireDefault(_defaultParams);
	            module.exports = exports['default'];
	        }, {
	            '../util/clamp': 15,
	            '../util/clone': 16,
	            './defaultParams': 10
	        }],
	        12: [function (_dereq_, module, exports) {
	            'use strict';
	
	            function _interopRequireDefault(obj) {
	                return obj && obj.__esModule ? obj : {
	                    'default': obj
	                };
	            }
	            Object.defineProperty(exports, '__esModule', {
	                value: !0
	            }), exports['default'] = function (base64URL, opts, resolve, reject) {
	                (0, _loadBase64Image2['default'])(base64URL).then(resolve, reject);
	            };
	            var _loadBase64Image = _dereq_('../../util/loadBase64Image'),
	                _loadBase64Image2 = _interopRequireDefault(_loadBase64Image);
	            module.exports = exports['default'];
	        }, {
	            '../../util/loadBase64Image': 19
	        }],
	        13: [function (_dereq_, module, exports) {
	            'use strict';
	
	            function _interopRequireDefault(obj) {
	                return obj && obj.__esModule ? obj : {
	                    'default': obj
	                };
	            }
	            Object.defineProperty(exports, '__esModule', {
	                value: !0
	            }), exports['default'] = function (base64URL, options, resolve, reject) {
	                (0, _loadBase64Image2['default'])(base64URL).then(function (image) {
	                    var size = (0, _getImageSize2['default'])(image),
	                        imageData = (0, _canvasFromImage2['default'])(image).ctx.getImageData(0, 0, size.width, size.height);
	                    imageData.width || (imageData.width = size.width), imageData.height || (imageData.height = size.height), resolve(imageData);
	                }, reject);
	            };
	            var _loadBase64Image = _dereq_('../util/loadBase64Image'),
	                _loadBase64Image2 = _interopRequireDefault(_loadBase64Image),
	                _canvasFromImage = _dereq_('../util/canvasFromImage'),
	                _canvasFromImage2 = _interopRequireDefault(_canvasFromImage),
	                _getImageSize = _dereq_('../util/getImageSize'),
	                _getImageSize2 = _interopRequireDefault(_getImageSize);
	            module.exports = exports['default'];
	        }, {
	            '../util/canvasFromImage': 14,
	            '../util/getImageSize': 17,
	            '../util/loadBase64Image': 19
	        }],
	        14: [function (_dereq_, module, exports) {
	            'use strict';
	
	            function _interopRequireDefault(obj) {
	                return obj && obj.__esModule ? obj : {
	                    'default': obj
	                };
	            }
	            Object.defineProperty(exports, '__esModule', {
	                value: !0
	            }), exports['default'] = function (image) {
	                var size = (0, _getImageSize2['default'])(image),
	                    canvas = new _canvasBrowserify2['default'](size.width, size.height),
	                    ctx = canvas.getContext('2d');
	                return ctx.drawImage(image, 0, 0, size.width, size.height), {
	                    canvas: canvas,
	                    ctx: ctx
	                };
	            };
	            var _canvasBrowserify = _dereq_('canvas-browserify'),
	                _canvasBrowserify2 = _interopRequireDefault(_canvasBrowserify),
	                _getImageSize = _dereq_('./getImageSize'),
	                _getImageSize2 = _interopRequireDefault(_getImageSize);
	            module.exports = exports['default'];
	        }, {
	            './getImageSize': 17,
	            'canvas-browserify': 21
	        }],
	        15: [function (_dereq_, module, exports) {
	            'use strict';
	
	            Object.defineProperty(exports, '__esModule', {
	                value: !0
	            }), exports['default'] = function (value, min, max) {
	                return min > value ? min : value > max ? max : value;
	            }, module.exports = exports['default'];
	        }, {}],
	        16: [function (_dereq_, module, exports) {
	            'use strict';
	
	            Object.defineProperty(exports, '__esModule', {
	                value: !0
	            }), exports['default'] = function (obj) {
	                var result = !1;
	                if ('undefined' != typeof obj) {
	                    try {
	                        result = JSON.parse(JSON.stringify(obj));
	                    } catch (e) {}
	                }
	                return result;
	            }, module.exports = exports['default'];
	        }, {}],
	        17: [function (_dereq_, module, exports) {
	            'use strict';
	
	            Object.defineProperty(exports, '__esModule', {
	                value: !0
	            }), exports['default'] = function (image) {
	                return {
	                    width: image.width || image.naturalWidth,
	                    height: image.height || image.naturalHeight
	                };
	            }, module.exports = exports['default'];
	        }, {}],
	        18: [function (_dereq_, module, exports) {
	            'use strict';
	
	            Object.defineProperty(exports, '__esModule', {
	                value: !0
	            });
	            var _typeof = 'function' == typeof Symbol && 'symbol' == _typeof2(Symbol.iterator) ? function (obj) {
	                return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
	            } : function (obj) {
	                return obj && 'function' == typeof Symbol && obj.constructor === Symbol ? 'symbol' : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
	            };
	            exports['default'] = function (imageData) {
	                return imageData && 'number' == typeof imageData.width && 'number' == typeof imageData.height && imageData.data && 'number' == typeof imageData.data.length && 'object' === _typeof(imageData.data);
	            }, module.exports = exports['default'];
	        }, {}],
	        19: [function (_dereq_, module, exports) {
	            'use strict';
	
	            Object.defineProperty(exports, '__esModule', {
	                value: !0
	            }), exports['default'] = function (base64URL) {
	                return new Promise(function (resolve, reject) {
	                    var image = new _canvasBrowserify.Image();
	                    image.onload = function () {
	                        resolve(image);
	                    }, image.onerror = function (err) {
	                        reject(err);
	                    }, image.src = base64URL;
	                });
	            };
	            var _canvasBrowserify = _dereq_('canvas-browserify');
	            module.exports = exports['default'];
	        }, {
	            'canvas-browserify': 21
	        }],
	        20: [function (_dereq_, module, exports) {
	            'use strict';
	
	            function _interopRequireDefault(obj) {
	                return obj && obj.__esModule ? obj : {
	                    'default': obj
	                };
	            }
	            function worker(self) {
	                self.addEventListener('message', function (msg) {
	                    var imageData = msg.data.imageData,
	                        params = msg.data.params,
	                        base64URL = msg.data.base64URL;
	                    if (imageData && base64URL && params) {
	                        try {
	                            'undefined' == typeof imageData.width && 'number' == typeof msg.data.imageDataWidth && (imageData.width = msg.data.imageDataWidth), 'undefined' == typeof imageData.height && 'number' == typeof msg.data.imageDataHeight && (imageData.height = msg.data.imageDataHeight);
	                            var glitchedBase64URL = (0, _glitchImageData2['default'])(imageData, base64URL, params);
	                            success(glitchedBase64URL);
	                        } catch (err) {
	                            fail(err);
	                        }
	                    } else {
	                        fail(msg.data.imageData ? 'Parameters are missing.' : 'ImageData is missing.');
	                    }
	                    self.close();
	                });
	            }
	            function fail(err) {
	                self.postMessage({
	                    err: err.message || err
	                });
	            }
	            function success(base64URL) {
	                self.postMessage({
	                    base64URL: base64URL
	                });
	            }
	            Object.defineProperty(exports, '__esModule', {
	                value: !0
	            }), exports['default'] = worker;
	            var _glitchImageData = _dereq_('../glitch/glitchImageData'),
	                _glitchImageData2 = _interopRequireDefault(_glitchImageData);
	            module.exports = exports['default'];
	        }, {
	            '../glitch/glitchImageData': 7
	        }],
	        21: [function (_dereq_, module, exports) {
	            var Canvas = module.exports = function Canvas(w, h) {
	                var canvas = document.createElement('canvas');
	                canvas.width = w || 300;
	                canvas.height = h || 150;
	                return canvas;
	            };
	            Canvas.Image = function () {
	                var img = document.createElement('img');
	                return img;
	            };
	        }, {}],
	        22: [function (_dereq_, module, exports) {
	            var bundleFn = arguments[3];
	            var sources = arguments[4];
	            var cache = arguments[5];
	            var stringify = JSON.stringify;
	            module.exports = function (fn) {
	                var keys = [];
	                var wkey;
	                var cacheKeys = Object.keys(cache);
	                for (var i = 0, l = cacheKeys.length; i < l; i++) {
	                    var key = cacheKeys[i];
	                    var exp = cache[key].exports;
	                    if (exp === fn || exp.default === fn) {
	                        wkey = key;
	                        break;
	                    }
	                }
	                if (!wkey) {
	                    wkey = Math.floor(Math.pow(16, 8) * Math.random()).toString(16);
	                    var wcache = {};
	                    for (var i = 0, l = cacheKeys.length; i < l; i++) {
	                        var key = cacheKeys[i];
	                        wcache[key] = key;
	                    }
	                    sources[wkey] = [Function(['require', 'module', 'exports'], '(' + fn + ')(self)'), wcache];
	                }
	                var skey = Math.floor(Math.pow(16, 8) * Math.random()).toString(16);
	                var scache = {};
	                scache[wkey] = wkey;
	                sources[skey] = [Function(['require'], 'var f = require(' + stringify(wkey) + ');' + '(f.default ? f.default : f)(self);'), scache];
	                var src = '(' + bundleFn + ')({' + Object.keys(sources).map(function (key) {
	                    return stringify(key) + ':[' + sources[key][0] + ',' + stringify(sources[key][1]) + ']';
	                }).join(',') + '},{},[' + stringify(skey) + '])';
	                var URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
	                return new Worker(URL.createObjectURL(new Blob([src], {
	                    type: 'text/javascript'
	                })));
	            };
	        }, {}]
	    }, {}, [1])(1);
	});

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var arraySample = __webpack_require__(4),
	    baseSample = __webpack_require__(6),
	    isArray = __webpack_require__(22);
	
	/**
	 * Gets a random element from `collection`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.0.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to sample.
	 * @returns {*} Returns the random element.
	 * @example
	 *
	 * _.sample([1, 2, 3, 4]);
	 * // => 2
	 */
	function sample(collection) {
	  var func = isArray(collection) ? arraySample : baseSample;
	  return func(collection);
	}
	
	module.exports = sample;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseRandom = __webpack_require__(5);
	
	/**
	 * A specialized version of `_.sample` for arrays.
	 *
	 * @private
	 * @param {Array} array The array to sample.
	 * @returns {*} Returns the random element.
	 */
	function arraySample(array) {
	  var length = array.length;
	  return length ? array[baseRandom(0, length - 1)] : undefined;
	}
	
	module.exports = arraySample;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeFloor = Math.floor,
	    nativeRandom = Math.random;
	
	/**
	 * The base implementation of `_.random` without support for returning
	 * floating-point numbers.
	 *
	 * @private
	 * @param {number} lower The lower bound.
	 * @param {number} upper The upper bound.
	 * @returns {number} Returns the random number.
	 */
	function baseRandom(lower, upper) {
	  return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
	}
	
	module.exports = baseRandom;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var arraySample = __webpack_require__(4),
	    values = __webpack_require__(7);
	
	/**
	 * The base implementation of `_.sample`.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to sample.
	 * @returns {*} Returns the random element.
	 */
	function baseSample(collection) {
	  return arraySample(values(collection));
	}
	
	module.exports = baseSample;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseValues = __webpack_require__(8),
	    keys = __webpack_require__(10);
	
	/**
	 * Creates an array of the own enumerable string keyed property values of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property values.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.values(new Foo);
	 * // => [1, 2] (iteration order is not guaranteed)
	 *
	 * _.values('hi');
	 * // => ['h', 'i']
	 */
	function values(object) {
	  return object == null ? [] : baseValues(object, keys(object));
	}
	
	module.exports = values;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var arrayMap = __webpack_require__(9);
	
	/**
	 * The base implementation of `_.values` and `_.valuesIn` which creates an
	 * array of `object` property values corresponding to the property names
	 * of `props`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} props The property names to get values for.
	 * @returns {Object} Returns the array of property values.
	 */
	function baseValues(object, props) {
	  return arrayMap(props, function (key) {
	    return object[key];
	  });
	}
	
	module.exports = baseValues;

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);
	
	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}
	
	module.exports = arrayMap;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var arrayLikeKeys = __webpack_require__(11),
	    baseKeys = __webpack_require__(32),
	    isArrayLike = __webpack_require__(36);
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}
	
	module.exports = keys;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseTimes = __webpack_require__(12),
	    isArguments = __webpack_require__(13),
	    isArray = __webpack_require__(22),
	    isBuffer = __webpack_require__(23),
	    isIndex = __webpack_require__(26),
	    isTypedArray = __webpack_require__(27);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;
	
	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (
	    // Safari 9 has enumerable `arguments.length` in strict mode.
	    key == 'length' ||
	    // Node.js 0.10 has enumerable non-index properties on buffers.
	    isBuff && (key == 'offset' || key == 'parent') ||
	    // PhantomJS 2 has enumerable non-index properties on typed arrays.
	    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') ||
	    // Skip index properties.
	    isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = arrayLikeKeys;

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	
	module.exports = baseTimes;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIsArguments = __webpack_require__(14),
	    isObjectLike = __webpack_require__(21);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function () {
	    return arguments;
	}()) ? baseIsArguments : function (value) {
	    return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	};
	
	module.exports = isArguments;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseGetTag = __webpack_require__(15),
	    isObjectLike = __webpack_require__(21);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';
	
	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}
	
	module.exports = baseIsArguments;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Symbol = __webpack_require__(16),
	    getRawTag = __webpack_require__(19),
	    objectToString = __webpack_require__(20);
	
	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';
	
	/** Built-in value references. */
	var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
	
	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	    if (value == null) {
	        return value === undefined ? undefinedTag : nullTag;
	    }
	    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
	}
	
	module.exports = baseGetTag;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var root = __webpack_require__(17);
	
	/** Built-in value references. */
	var _Symbol = root.Symbol;
	
	module.exports = _Symbol;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var freeGlobal = __webpack_require__(18);
	
	/** Detect free variable `self`. */
	var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;

/***/ },
/* 18 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Symbol = __webpack_require__(16);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/** Built-in value references. */
	var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
	
	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];
	
	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}
	
	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}
	
	module.exports = getRawTag;

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}
	
	module.exports = objectToString;

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
	}
	
	module.exports = isObjectLike;

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	module.exports = isArray;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var root = __webpack_require__(17),
	    stubFalse = __webpack_require__(25);
	
	/** Detect free variable `exports`. */
	var freeExports = ( false ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && ( false ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
	
	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;
	
	module.exports = isBuffer;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)(module)))

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}
	
	module.exports = stubFalse;

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';
	
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
	}
	
	module.exports = isIndex;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIsTypedArray = __webpack_require__(28),
	    baseUnary = __webpack_require__(30),
	    nodeUtil = __webpack_require__(31);
	
	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
	
	module.exports = isTypedArray;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseGetTag = __webpack_require__(15),
	    isLength = __webpack_require__(29),
	    isObjectLike = __webpack_require__(21);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
	
	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}
	
	module.exports = baseIsTypedArray;

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';
	
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;

/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function (value) {
	    return func(value);
	  };
	}
	
	module.exports = baseUnary;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var freeGlobal = __webpack_require__(18);
	
	/** Detect free variable `exports`. */
	var freeExports = ( false ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && ( false ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;
	
	/** Used to access faster Node.js helpers. */
	var nodeUtil = function () {
	  try {
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}();
	
	module.exports = nodeUtil;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)(module)))

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isPrototype = __webpack_require__(33),
	    nativeKeys = __webpack_require__(34);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = baseKeys;

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
	
	  return value === proto;
	}
	
	module.exports = isPrototype;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var overArg = __webpack_require__(35);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);
	
	module.exports = nativeKeys;

/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function (arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isFunction = __webpack_require__(37),
	    isLength = __webpack_require__(29);
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}
	
	module.exports = isArrayLike;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseGetTag = __webpack_require__(15),
	    isObject = __webpack_require__(38);
	
	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	    if (!isObject(value)) {
	        return false;
	    }
	    // The use of `Object#toString` avoids issues with the `typeof` operator
	    // in Safari 9 which returns 'object' for typed arrays and other constructors.
	    var tag = baseGetTag(value);
	    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}
	
	module.exports = isFunction;

/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  return value != null && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-glitch.map