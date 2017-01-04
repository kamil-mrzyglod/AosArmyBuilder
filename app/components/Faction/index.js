/**
*
* Faction
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class Faction extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);

    this.state = {
      faction: ""
    }

    this.factionSelected = this.factionSelected.bind(this);
  }

  factionSelected(faction) {
    var state = this.state;
    state.faction = faction;
    this.setState(state);
    this.props.factionChanged(faction);
  }

  renderFactions() {
    if (this.props.allegiance === 'order') {
      return (
        <div className="ui middle aligned selection list">
          <div className="item">
            <div className="content">
              <div className="header" onClick={() => this.factionSelected('aelves')}>Aelves</div>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <div className="header" onClick={() => this.factionSelected('aelves_legacy')}>Aelves Legacy</div>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <div className="header" onClick={() => this.factionSelected('brettonia')}>Brettonia</div>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <div className="header" onClick={() => this.factionSelected('duardin')}>Duardin</div>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <div className="header" onClick={() => this.factionSelected('fyreslayers')}>Fyreslayers</div>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <div className="header" onClick={() => this.factionSelected('humans')}>Humans</div>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <div className="header" onClick={() => this.factionSelected('seraphon')}>Seraphon</div>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <div className="header" onClick={() => this.factionSelected('stormcast')}>Stormcast</div>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <div className="header" onClick={() => this.factionSelected('sylvaneth')}>Sylvaneth</div>
            </div>
          </div>
        </div>
      );
    } else if (this.props.allegiance === 'chaos') {
      return (
        <div className="ui middle aligned selection list">
          <div className="item">
            <div className="content">
              <div className="header" onClick={() => this.factionSelected('herds_and_monsters')}>Herds & Monsters</div>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <div className="header" onClick={() => this.factionSelected('khorne')}>Khorne</div>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <div className="header" onClick={() => this.factionSelected('legion_of_azgorth')}>Legion of Azgorth</div>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <div className="header" onClick={() => this.factionSelected('nurgle')}>Nurgle</div>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <div className="header" onClick={() => this.factionSelected('skaven')}>Skaven</div>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <div className="header" onClick={() => this.factionSelected('slaneesh')}>Slaneesh</div>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <div className="header" onClick={() => this.factionSelected('tamurkhans_horde')}>Tamurkhan's Horde</div>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <div className="header" onClick={() => this.factionSelected('tzeentch')}>Tzeentch</div>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <div className="header" onClick={() => this.factionSelected('undivided')}>Undivided</div>
            </div>
          </div>
        </div>
      );
    } else if (this.props.allegiance === 'death') {
      return (
        <div className="ui middle aligned selection list">
          <div className="item">
            <div className="content">
              <div className="header" onClick={() => this.factionSelected('death')}>Death</div>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <div className="header" onClick={() => this.factionSelected('tomb_kings')}>Tomb Kings</div>
            </div>
          </div>
        </div>
      );
    } else if (this.props.allegiance === 'destruction') {
      return (
        <div className="ui middle aligned selection list">
          <div className="item">
            <div className="content">
              <div className="header" onClick={() => this.factionSelected('grots')}>Grots</div>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <div className="header" onClick={() => this.factionSelected('monsters_and_troggoths')}>Monsters & Troggoths</div>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <div className="header" onClick={() => this.factionSelected('ogors')}>Ogors</div>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <div className="header" onClick={() => this.factionSelected('orruks')}>Orruks</div>
            </div>
          </div>
        </div>);
    } else {
      return (<div></div>);
    }
  }

  render() {
    return this.renderFactions();
  }
}

export default Faction;
