/**
*
* SelectedUnits
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class SelectedUnits extends React.Component { // eslint-disable-line react/prefer-stateless-function

  renderUnits() {
    var elements = [];

    for (var i = 0; i <= this.props.units.length - 1; i++) {
      elements.push(<div key={i} className="item">
        <div className="right floated content">
          <div className="ui button">Remove</div>
        </div>
        <div className="content">
          <div className="header">{this.props.units[i].name}</div>
          {this.props.units[i].cost} pts
        </div>
      </div>);
    }

    return (
      <div className="ui middle aligned divided list">{elements}</div>
    );
  }

  render() {
    return this.renderUnits();
  }
}

export default SelectedUnits;
