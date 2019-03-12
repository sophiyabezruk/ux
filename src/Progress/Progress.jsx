
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nanobar from 'nanobar';
import get from 'lodash/get';
import { withTheme } from 'emotion-theming';

@withTheme
class Progress extends Component {
  static propTypes = {
    global: PropTypes.bool,
    speed: PropTypes.number,
    value: PropTypes.number,
    height: PropTypes.number,
    color: PropTypes.string,
    isLoading: PropTypes.bool,
  };

  static defaultProps = {
    isLoading: false,
    global: false,
    speed: 2,
    height: 2,
    value: null,
    shadow: true,
    // color: null,
  }


  state = {
    valueProgress: this.props.value,
  };

  componentDidMount() {
    this.nanobar = new Nanobar({
      target: this.bar.current,
    });
    this.int();
  }

  componentWillUnmount() {
    const { el } = this.nanobar;
    el.parentNode.removeChild(el);
    clearInterval(this.timeout);
  }


  bar = React.createRef();

  int() {
    const { global, isLoading } = this.props;
    this.styleSetting();
    this.nanobar.go(this.state.valueProgress);
    this.nanobar.el.style.cssText = 'position: absolute; left: 0; top: 0;';
    this.timeout = setInterval(() => {
      this.styleSetting();
      if (isLoading) { this.setState({ valueProgress: this.state.valueProgress + this.props.speed }); }
      this.nanobar.go(this.state.valueProgress);
    }, 1000);
    if (global) { this.nanobar.el.style.cssText = 'position: fixed; left: 0; top: 0;'; }
  }

  foo = () => {
    this.nanobar.el.style.cssText = 'border: 1px solid red;';
  }

  styleSetting() {
<<<<<<< HEAD
    const { height, color } = this.props;
    this.nanobar.el.children[0].style.cssText = `
      height: ${height}px;
      background: black;
      box-shadow: 0 0 12px ${color}, 0 0 5px ${color};
      overflow: hidden;
      max-width: 100%; 
      position: absolute !important;
      background-color: ${color};
      top: 0;
      left: 0;`;
=======
    const { theme } = this.props;
    const { color = get(theme, 'colors.primary', '#1890ff'), shadow } = this.props;
    // console.log({color});

    this.nanobar.el.children[0].style.cssText = `height: ${this.props.height}px;
                                                 background: black;
                                                 ${shadow ? `box-shadow: 0 0 12px ${color}, 0 0 5px ${color};` : ''}
                                                 overflow: hidden;
                                                 max-width: 100%; 
                                                 position: absolute !important;
                                                 background-color: ${color};
                                                 top: 0;
                                                 left: 0;`;
>>>>>>> origin
  }

  render() {
    return (
      <div
        id="nano"
        style={{
          position: 'absolute !important',
          top: '0',
          left: '0',
          width: '100%',
        }}
      >
        <span ref={this.bar} />
      </div>
    );
  }
}

export default Progress;
