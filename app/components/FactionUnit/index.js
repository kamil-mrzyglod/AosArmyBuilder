/**
*
* FactionUnit
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import ppcData from '../../data/ppc.json';

class FactionUnit extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);



    this.selectUnit = this.selectUnit.bind(this);
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
            <div className="header" onClick={this.selectUnit.bind(this, units[unit][i])}>{units[unit][i].name}</div>
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
