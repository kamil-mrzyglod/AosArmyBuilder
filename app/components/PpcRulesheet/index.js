/**
*
* PpcRulesheet
*
*/

import React from 'react';
import * as _ from 'lodash';
import { Modal, Header, Button, Icon, Progress } from 'semantic-ui-react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Faction from '../Faction';
import FactionUnit from '../FactionUnit';
import SelectedUnits from '../SelectedUnits';

class PpcRulesheet extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);

    this.state = {
      version: "",
      allegiance: "",
      faction: "",
      units: [],
      total: 0,
      modalOpen: false
    };

    this.versionChange = this.versionChange.bind(this);
    this.renderArmyOptions = this.renderArmyOptions.bind(this);
    this.allegianceSelected = this.allegianceSelected.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.getPercentage = this.getPercentage.bind(this);
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
            <Faction allegiance={this.state.allegiance} factionChanged={this.factionChanged.bind(this)} />
          </div>
          <div className="field">
            <label>
              <FormattedMessage {...messages.unit} />
              <FactionUnit faction={this.state.faction} unitSelected={this.unitSelected.bind(this)} />
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

  factionChanged(faction) {
    var state = this.state;
    state.faction = faction;
    this.setState(state);
  }

  unitSelected(unit) {
    var state = this.state;
    var dup = _.filter(this.state.units, (u) => {
      return u.name === unit.name;
    });

    if (unit.max !== 0) {
      if (dup.length === unit.max) {
        // Cannot add this unit
        state.modalOpen = true;
        this.setState(state);
        return;
      }
    }

    if (dup.length === 0) {
      if (typeof unit.min !== 'undefined') {
        state.total += unit.cost * unit.min

        for (var i = 0; i < unit.min - 1; i++) {
          state.units.push(unit);
        }
      } else {
        state.total += unit.cost;
      }
    } else {
      state.total += unit.cost;
    }

    state.units.push(unit);
    this.setState(state);
  }

  handleClose() {
    var state = this.state;
    state.modalOpen = false;
    this.setState(state);
  }

  getPercentage(type) {
    var sum = 0;
    _.map(this.state.units, (u) => {
      if(u.type === type) {
        sum += u.cost;
      }
    });

    var result = sum / this.state.total;
    return (result * 100).toFixed(0);
  }

  render() {
    return (
      <div>
        <h3 className="ui dividing header">
          <FormattedMessage {...messages.version} />
        </h3>
        <div className="field">
          <select className="ui fluid dropdown" onChange={this.versionChange} defaultValue={this.state.version}>
            <option value="">--- Select ---</option>
            <option value="v2016.10">v2016.10</option>
          </select>
        </div>
        {this.renderArmyOptions()}
        <h3 className="ui dividing header">
          <FormattedMessage {...messages.selectedUnits} /> ({this.state.total}pts)
        </h3>
        <SelectedUnits units={this.state.units} />
        <h3 className="ui dividing header">
          <FormattedMessage {...messages.stats} />
        </h3>
        <Progress percent={this.getPercentage('Hero')} progress>Hero</Progress>
        <Progress percent={this.getPercentage('Monster')} progress>Monsters</Progress>
        <Progress percent={this.getPercentage('Unit')} progress>Core</Progress>
        <Modal
          open={this.state.modalOpen}
          onClose={this.handleClose}
          basic
          size='small'
          >
          <Header icon='warning sign' content='Maximum reached' />
          <Modal.Content>
            <h3><FormattedMessage {...messages.maximumNumberOfUnits} /></h3>
          </Modal.Content>
          <Modal.Actions>
            <Button color='green' onClick={this.handleClose} inverted>
              <Icon name='checkmark' /> <FormattedMessage {...messages.gotIt} />
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default PpcRulesheet;
