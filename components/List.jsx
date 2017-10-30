import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class List extends Component {
   static defaultPropTypes = {
      // items: []
   }

   static propTypes = {
      items: PropTypes.arrayOf(PropTypes.string).isRequired
   }

   render() {
      let key = 0;
      const itemsElements = this.props.items.map((item) => {
         key += 1;
         return (
            <li
               // key={this.props.items.lastIndexOf(item)}
               key={key}
            >{item}
            </li>
         );
      });
      return (
         <ol
            className="results"
         >{itemsElements}
         </ol>
      );
   }
}
