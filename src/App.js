import React, { Component, PropTypes } from 'react';
import GlitchImg from './react-glitch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      glitching: false,
      cursorLeft: 0,
      cursorTop: 0
    };
  }

  onMouseMove = ({ screenX, clientY }) => {
    this.setState({
      cursorLeft: screenX,
      cursorTop: clientY,
    });
  }

  render() {
    const { glitching, cursorLeft, cursorTop } = this.state;

    return (
      <div style={{ width: '100vw' }}>
        <h2>Hover over the image to see react-glitch in action.</h2>
        <div
          style={{
            position: 'relative',
            cursor: 'none',
            display: 'inline-block'
          }}
          onMouseMove={this.onMouseMove}>
          <div
            style={{
              pointerEvents: 'none',
              position: 'fixed',
              transform: 'translate(-50px, -50%)',
              display: glitching ? 'block' : 'none',
              top: cursorTop,
              left: cursorLeft
            }}>
            <img
              style={{
                width: 100,
                display: 'inline-block'
              }}
              src={require('./assets/angry-meme.png')}
              alt="angry-meme"/>
            <h1 style={{
              color: '#ff4037',
              display: 'inline-block'
            }}>Please make it stop!</h1>
          </div>

          <GlitchImg
            style={{ width: 400, height: 400 }}
            onMouseOver={() => this.setState({ glitching: true })}
            onMouseLeave={() => this.setState({ glitching: false })}
            glitching={glitching}
            glitchOptions={{
              seed: [0, 60],
              quality: 99,
              amount: 0,
              iterations: [1, 5, 10, 20]
            }}
            speed={[100, 1000, 1000]}
            src={require('./assets/codeeveryday.jpg')}
          />
        </div>
      </div>
    );
  }
}

export default App;
