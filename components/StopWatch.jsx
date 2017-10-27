import React, { Component } from 'react';
import PropTypes from 'prop-types';


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
      // times: PropTypes.object.isRequired
      times: PropTypes.string.isRequired
   }


   render() {
      return (
         <div
            className="stopwatch"
         // >{format(this.props.times)}
         >{this.props.times}
         </div>
      );
   }
}
