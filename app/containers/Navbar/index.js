/*
 *
 * Navbar
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import messages from './messages';

export class Navbar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="ui menu">
        <div className="header item">
          Army Builder
        </div>
        <a className="item">
          About
        </a>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Navbar);
