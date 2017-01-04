/**
*
* PpcRulesheet
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Faction from '../Faction';

class PpcRulesheet extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);

    this.state = {
      version: "",
      allegiance: ""
    };

    this.versionChange = this.versionChange.bind(this);
    this.renderArmyOptions = this.renderArmyOptions.bind(this);
    this.allegianceSelected = this.allegianceSelected.bind(this);
  }

  versionChange(e) {
    var options = e.target.options;
    var value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }

    var state = this.state;
    state.version = value[0];
    this.setState(state);
  }

  renderArmyOptions() {
    if (this.state.version !== '') {
      return (
        <div className="three fields">
          <div className="field">
            <label>
              <FormattedMessage {...messages.allegiance} />
            </label>
            <div className="ui middle aligned selection list">
              <div className="item">
                <div className="content">
                  <div className="header" onClick={() => this.allegianceSelected('order')}>Order</div>
                </div>
              </div>
              <div className="item">
                <div className="content">
                  <div className="header" onClick={() => this.allegianceSelected('chaos')}>Chaos</div>
                </div>
              </div>
              <div className="item">
                <div className="content">
                  <div className="header" onClick={() => this.allegianceSelected('death')}>Death</div>
                </div>
              </div>
              <div className="item">
                <div className="content">
                  <div className="header" onClick={() => this.allegianceSelected('destruction')}>Destruction</div>
                </div>
              </div>
            </div>
          </div>
          <div className="field">
            <label>
              <FormattedMessage {...messages.faction} />
            </label>
            <Faction allegiance={this.state.allegiance} />
          </div>
          <div className="field">
            <label>
              <FormattedMessage {...messages.unit} />
            </label>
          </div>
        </div>
      );
    }
  }

  allegianceSelected(allegiance) {
    var state = this.state;
    state.allegiance = allegiance;
    this.setState(state);
  }

  render() {
    return (
      <div>
        <h4 className="ui dividing header">
          <FormattedMessage {...messages.version} />
        </h4>
        <div className="field">
          <select className="ui fluid dropdown" onChange={this.versionChange} defaultValue={this.state.version}>
            <option value="">--- Select ---</option>
            <option value="v2016.10">v2016.10</option>
          </select>
        </div>
        {this.renderArmyOptions()}
      </div>
    );
  }
}

export default PpcRulesheet;
