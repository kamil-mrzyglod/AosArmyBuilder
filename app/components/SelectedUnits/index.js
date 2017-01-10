/**
*
* SelectedUnits
*
*/

import React from 'react';
import * as _ from 'lodash';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { calculateAvgDamage, calculateMaxDamage } from '../../logic/unitLogic';
import WeaponEfficiency from '../WeaponEfficiency';

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
          <hr />
          <b>Type:</b> {u[0].type}<br />
    <b>Avg. damage:</b> {calculateAvgDamage(u[0]) * u.length}dmg / turn({calculateAvgDamage(u[0])}dmg per model)<br />
          <b>Max. damage:</b> {calculateMaxDamage(u[0]) * u.length}dmg / turn({calculateMaxDamage(u[0])}dmg per model)
          <div className="ui small header center aligned">Weapon Efficiency</div>
          <WeaponEfficiency unit={u[0]} />
        </div>
        <div className="ui divider"></div>
      </div>);
    })

    return (
      <div className="ui middle aligned list">{elements}</div>
    );
  }

  render() {
    return this.renderUnits();
  }
}

export default SelectedUnits;
