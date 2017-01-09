/**
*
* WeaponEfficiency
*
*/

import React from 'react';
import * as _ from 'lodash';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { calculateWeaponAvgDamage } from '../../logic/unitLogic';

class WeaponEfficiency extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);

    this.renderWeapons = this.renderWeapons.bind(this);
  }

  renderWeapons() {
    var weapons = [];

    _.forEach(this.props.unit.melee, (m) => {
      var rend = m.stats.split('/')[3] * -1;

      var avgDmg = calculateWeaponAvgDamage(m).toFixed(2);
      var manipulator = avgDmg / 6;
      var dmg = (i) => {
        if (i < rend) {
          i = rend;
        }

        return (avgDmg - (manipulator * (i - rend))).toFixed(2);
      }

      weapons.push(<tr key={m.name}>
      <td>{m.name}</td>
      <td>{rend*-1}</td>
      <td>{avgDmg}dmg / turn</td>
      <td>{dmg(1)}dmg / turn</td>
      <td>{dmg(2)}dmg / turn</td>
      <td>{dmg(3)}dmg / turn</td>
      <td>{dmg(4)}dmg / turn</td>
      <td>{dmg(5)}dmg / turn</td></tr>);
    })

    return weapons;
  }

  render() {
    return (
      <table className="ui celled padded table">
        <thead>
          <tr><th className="single line">Weapon Name</th>
            <th>Rend</th>
            <th>No Save</th>
            <th>6+</th>
            <th>5+</th>
            <th>4+</th>
            <th>3+</th>
            <th>2+</th>
          </tr>
        </thead>
        <tbody>
          {this.renderWeapons()}
        </tbody>
      </table>
    );
  }
}

export default WeaponEfficiency;
