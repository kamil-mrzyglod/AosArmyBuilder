/**
*
* SelectedUnits
*
*/

import React from 'react';
import * as _ from 'lodash';
import { Image } from 'semantic-ui-react';

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
      elements.push(<div key={key} className="ui clearing segment">
        <div className="ui segments">
          <div className="ui secondary segment">
            <div className="ui right floated button" onClick={this.removeUnit.bind(this, key)}>Remove</div>
            <h2 className="ui center aligned header">
              <Image src={u[0].image} shape="circular" size="tiny" />
              <div className="content">
                {u.length} {u[0].name}
                <div className="sub header">{u[0].type}</div>
              </div>
            </h2>
            <div className="ui seven mini statistics">
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
              <div className="statistic">
                <div className="value">
                  {calculateAvgDamage(u[0]) * u.length}
                </div>
                <div className="label">
                  Avg. damage
                </div>
              </div>
              <div className="statistic">
                <div className="value">
                  {calculateMaxDamage(u[0]) * u.length}
                </div>
                <div className="label">
                  Max. damage
                </div>
              </div>
            </div>
          </div>
          <div className="ui segment">
            <div className="ui small header center aligned">Weapon Efficiency</div>
            <WeaponEfficiency unit={u[0]} />
            <div className="ui divider"></div>
          </div>
        </div>
      </div>);
    })

    return (
      <div className="ui piled segments">{elements}</div>
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
