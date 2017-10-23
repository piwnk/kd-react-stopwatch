import React, { Component } from 'react';
import PropTypes from 'prop-types';

const pad0 = (value) => {
   const result = value.toString();
   return result.length < 2 ? `0${result}` : result;
};

const format = times => `${times.minutes}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;

export default class StopWatch extends Component {
   // static propTypes = {
   //    display: PropTypes.element.isRequired,
   //    list: PropTypes.element.isRequired
   // }

   // constructor(props) {
   //    super(props);
   //    console.log(this.props);
   //    console.log(props);
   //    this.running = false;
   //    this.reset();
   //    this.print(this.times);
   // }

   static propTypes = {
      times: PropTypes.object.isRequired
   }

   // state = {
   //    times: format(this.props.times)
   // }


   componentWillReceiveProps() {
      // this.forceUpdate();
      // console.log('New props');
   }


   render() {
      return (
         <div
            className="stopwatch"
         >{format(this.props.times)}
         </div>
      );
   }
}
