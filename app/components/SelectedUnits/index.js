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

  constructor(props) {
    super(props);

    this.removeUnit = this.removeUnit.bind(this);
  }

  renderUnits() {
    var elements = [];

    var units = _.groupBy(this.props.units, 'name');
    _.forIn(units, (u, key) => {
      elements.push(<div key={key} className="item">
        <div className="right floated content">
          <div className="ui button" onClick={this.removeUnit.bind(this, key)}>Remove</div>
        </div>
        <div className="content">
          <div className="header">
            <div className="ui six mini statistics">
              <div className="statistic">
                <div className="text value">
                  {u.length} {u[0].name}
                </div>
                <div className="label">
                  {u[0].type}
                </div>
              </div>
              <div className="statistic">
                <div className="value">
                  {u[0].cost * u.length}
                </div>
                <div className="label">
                  points
                </div>
              </div>
              <div className="statistic">
                <div className="value">
                  <i className="heart icon"></i> {u[0].wounds}
                </div>
                <div className="label">
                  Wounds
                </div>
              </div>
              <div className="statistic">
                <div className="value">
                  <i className="move icon"></i> {u[0].move}
                </div>
                <div className="label">
                  Move
                </div>
              </div>
              <div className="statistic">
                <div className="value">
                  <i className="universal access icon"></i> {u[0].save}
                </div>
                <div className="label">
                  Save
                </div>
              </div>
              <div className="statistic">
                <div className="value">
                  <i className="flag icon"></i> {u[0].bravery}
                </div>
                <div className="label">
                  Bravery
                </div>
              </div>
            </div>
          </div>
          <hr />
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

  removeUnit(key) {
    this.props.unitRemoved(key);
  }

  render() {
    return this.renderUnits();
  }
}

export default SelectedUnits;
