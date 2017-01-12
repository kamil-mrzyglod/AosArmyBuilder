/**
*
* FactionUnit
*
*/

import React from 'react';
import { Popup, Card, Image } from 'semantic-ui-react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import ppcData from '../../data/ppc.json';
import { calculateAvgDamage, calculateMaxDamage } from '../../logic/unitLogic';

class FactionUnit extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);

    this.selectUnit = this.selectUnit.bind(this);
  }

  renderUnits() {
    if (this.props.faction === 'aelves' || this.props.faction === 'nurgle') {
      return (
        <div className="ui six stackable cards">
          {this.getNamesOfUnits()}
        </div>
      );
    } else {
      return (<div></div>);
    }
  }

  getNamesOfUnits() {
    var unitNames = [];
    var units = ppcData[this.props.faction];
    if (typeof units === 'undefined') return;
    units = units[0];

    for (var unit in units) {
      for (var i = 0; i <= units[unit].length - 1; i++) {
        unitNames.push(<div key={units[unit][i].name} className="card">
          <div className="content">
            <Popup trigger={<div className="header" onClick={this.selectUnit.bind(this, units[unit][i])}>{units[unit][i].name}</div>}>
              <Popup.Content>
                <Card>
                  <Image src={units[unit][i].image} />
                  <Card.Content>
                    <Card.Header>
                      {units[unit][i].name}
                    </Card.Header>
                    <Card.Description>
                      <b>Type:</b> {units[unit][i].type}<br />
                      <b>Cost:</b> {units[unit][i].cost}pts<br />
                      <b>Avg. damage:</b> {calculateAvgDamage(units[unit][i])}dmg / turn<br />
                      <b>Max. damage:</b> {calculateMaxDamage(units[unit][i])}dmg / turn
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Popup.Content>
            </Popup>
          </div>
        </div>);
      }
    }

    return unitNames;
  }

  selectUnit(unit) {
    this.props.unitSelected(unit);
  }

  render() {
    return this.renderUnits();
  }
}

export default FactionUnit;
