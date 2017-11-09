import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import StopWatch from './StopWatch';

String.prototype.capitalize = function () {
  return this.slice(0, 1).toUpperCase() + this.slice(1, this.length);
};

class Button extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }

  render() {
    return (
      <div
        className="button"
      >
        <a
          id={this.props.label}
          label={this.props.label}
          href="#"
          onClick={this.props.onClick}
        >{this.props.label.capitalize()}
        </a>
      </div>
    );
  }
}

const Nav = ({ onStart, onStop, onReset, onSubmit }) => (
  <div
    className="buttons"
  >
    <Button label="start" onClick={onStart} />
    <Button label="stop" onClick={onStop} />
    <Button label="reset" onClick={onReset} />
    <Button label="submit" onClick={onSubmit} />
  </div>
);

Nav.propTypes = {
  onStart: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Nav;
