/**
*
* SelectedUnits
*
*/

import React from 'react';
import * as _ from 'lodash';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class SelectedUnits extends React.Component { // eslint-disable-line react/prefer-stateless-function

  renderUnits() {
    var elements = [];

    var units = _.groupBy(this.props.units, 'name');
    _.forIn(units, (u, key) => {
      elements.push(<div key={key} className="item">
        <div className="right floated content">
          <div className="ui button">Remove</div>
        </div>
        <div className="content">
          <div className="header">{u.length} {u[0].name} {u[0].cost * u.length}pts</div>
        </div>
      </div>);
    })

    return (
      <div className="ui middle aligned divided list">{elements}</div>
    );
  }

  render() {
    return this.renderUnits();
  }
}

export default SelectedUnits;
