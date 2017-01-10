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
    this.unitRemoved = this.unitRemoved.bind(this);
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
        <div>
          <div className="ui four stackable cards">
            <div className="blue card" onClick={() => this.allegianceSelected('order')}>
              <div className="content">
                <div className="header">Order</div>
                <div className="meta">
                  <span className="category">Animals</span>
                </div>
                <div className="description">
                  <p></p>
                </div>
              </div>
            </div>
            <div className="red card" onClick={() => this.allegianceSelected('chaos')}>
              <div className="content">
                <div className="header">Chaos</div>
                <div className="meta">
                  <span className="category">Animals</span>
                </div>
                <div className="description">
                  <p></p>
                </div>
              </div>
            </div>
            <div className="black card" onClick={() => this.allegianceSelected('death')}>
              <div className="content">
                <div className="header">Death</div>
                <div className="meta">
                  <span className="category">Animals</span>
                </div>
                <div className="description">
                  <p></p>
                </div>
              </div>
            </div>
            <div className="green card" onClick={() => this.allegianceSelected('destruction')}>
              <div className="content">
                <div className="header">Destruction</div>
                <div className="meta">
                  <span className="category">Animals</span>
                </div>
                <div className="description">
                  <p></p>
                </div>
              </div>
            </div>
          </div>
            <Faction allegiance={this.state.allegiance} factionChanged={this.factionChanged.bind(this)} />
          <div className="ui four stackable cards">
            <FactionUnit faction={this.state.faction} unitSelected={this.unitSelected.bind(this)} />
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
      if (u.type === type) {
        sum += u.cost;
      }
    });

    var result = sum / this.state.total;
    return (result * 100).toFixed(0);
  }

  unitRemoved(key) {
    var state = this.state;
    var units = this.state.units;

    _.remove(units, (u) => {
      return u.name === key;
    });

    state.units = units;
    this.setState(state);
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
        <SelectedUnits units={this.state.units} unitRemoved={this.unitRemoved.bind(this)} />
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
