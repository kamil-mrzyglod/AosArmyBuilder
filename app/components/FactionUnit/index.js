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

class FactionUnit extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);

    this.selectUnit = this.selectUnit.bind(this);
    this.calculateAvgDamage = this.calculateAvgDamage.bind(this);
  }

  renderUnits() {
    if (this.props.faction === 'aelves') {
      return (
        <div className="ui middle aligned selection list">
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
        unitNames.push(<div key={i} className="item">
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
                      <b>Avg. damage:</b> {this.calculateAvgDamage(units[unit][i])} dmg / turn
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

  calculateAvgDamage(unit) {
    var avgDmg = 0;
    _.map(unit.melee, (weapon) => {
      var stats = weapon.stats.split('/'); // Attacks/H/W/R/Dmg
      var dmg = stats[4];

      if(stats[4].startsWith('D3')) {
        dmg = 2;
      } else if(stats[4].startsWith('D6')) {
        dmg = 3.5;
      } else {
        dmg = parseInt(stats[4]);
      }
      
      avgDmg += parseInt(stats[0]) * ((6-parseInt(stats[1])+1)/6) * ((6-parseInt(stats[2])+1)/6) * dmg;
    });

    return avgDmg.toFixed(2);
  }

  selectUnit(unit) {
    this.props.unitSelected(unit);
  }

  render() {
    return this.renderUnits();
  }
}

export default FactionUnit;
