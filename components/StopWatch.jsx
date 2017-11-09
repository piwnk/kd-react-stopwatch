import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { pad0 } from './tools';

export default class StopWatch extends Component {
  static propTypes = {
    // times: PropTypes.string.isRequired
    times: PropTypes.objectOf(PropTypes.number).isRequired
  }

  render() {
    // const timeDisplay = this.props.times.map(item => (
    //   <p>{item}</p>
    // ));

    return (
      <div
        className="stopwatch"
      >
        <p>{pad0(this.props.times.minutes)}</p>:
        <p>{pad0(this.props.times.seconds)}</p>:
        <p>{pad0(this.props.times.miliseconds)}</p>
      </div>
    );
  }
}
