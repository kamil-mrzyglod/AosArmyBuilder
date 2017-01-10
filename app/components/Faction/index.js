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
        <div className="ui six stackable cards">
          <div className="blue card" onClick={() => this.factionSelected('aelves')}>
            <div className="content">
              <div className="header">Aelves</div>
              <div className="meta">
                <span className="category">Animals</span>
              </div>
              <div className="description">
                <p></p>
              </div>
            </div>
          </div>
          <div className="blue card" onClick={() => this.factionSelected('aelves_legacy')}>
            <div className="content">
              <div className="header">Aelves Legacy</div>
              <div className="meta">
                <span className="category">Animals</span>
              </div>
              <div className="description">
                <p></p>
              </div>
            </div>
          </div>
          <div className="blue card" onClick={() => this.factionSelected('brettonia')}>
            <div className="content">
              <div className="header">Brettonia</div>
              <div className="meta">
                <span className="category">Animals</span>
              </div>
              <div className="description">
                <p></p>
              </div>
            </div>
          </div>
          <div className="blue card" onClick={() => this.factionSelected('duardin')}>
            <div className="content">
              <div className="header">Duardin</div>
              <div className="meta">
                <span className="category">Animals</span>
              </div>
              <div className="description">
                <p></p>
              </div>
            </div>
          </div>
          <div className="blue card" onClick={() => this.factionSelected('fyreslayers')}>
            <div className="content">
              <div className="header">Fyreslayers</div>
              <div className="meta">
                <span className="category">Animals</span>
              </div>
              <div className="description">
                <p></p>
              </div>
            </div>
          </div>
          <div className="blue card" onClick={() => this.factionSelected('humans')}>
            <div className="content">
              <div className="header">Humans</div>
              <div className="meta">
                <span className="category">Animals</span>
              </div>
              <div className="description">
                <p></p>
              </div>
            </div>
          </div>
          <div className="blue card" onClick={() => this.factionSelected('seraphon')}>
            <div className="content">
              <div className="header">Seraphon</div>
              <div className="meta">
                <span className="category">Animals</span>
              </div>
              <div className="description">
                <p></p>
              </div>
            </div>
          </div>
          <div className="blue card" onClick={() => this.factionSelected('stormcast')}>
            <div className="content">
              <div className="header">Stormcast</div>
              <div className="meta">
                <span className="category">Animals</span>
              </div>
              <div className="description">
                <p></p>
              </div>
            </div>
          </div>
          <div className="blue card" onClick={() => this.factionSelected('sylvaneth')}>
            <div className="content">
              <div className="header">Sylvaneth</div>
              <div className="meta">
                <span className="category">Animals</span>
              </div>
              <div className="description">
                <p></p>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.props.allegiance === 'chaos') {
      return (
        <div className="ui six stackable cards">
          <div className="red card" onClick={() => this.factionSelected('herds_and_monsters')}>
            <div className="content">
              <div className="header">Herds & Monsters</div>
              <div className="meta">
                <span className="category">Animals</span>
              </div>
              <div className="description">
                <p></p>
              </div>
            </div>
          </div>
          <div className="red card" onClick={() => this.factionSelected('khorne')}>
            <div className="content">
              <div className="header">Khorne</div>
              <div className="meta">
                <span className="category">Animals</span>
              </div>
              <div className="description">
                <p></p>
              </div>
            </div>
          </div>
          <div className="red card" onClick={() => this.factionSelected('legion_of_azgorth')}>
            <div className="content">
              <div className="header">Legion of Azgorth</div>
              <div className="meta">
                <span className="category">Animals</span>
              </div>
              <div className="description">
                <p></p>
              </div>
            </div>
          </div>
          <div className="red card" onClick={() => this.factionSelected('nurgle')}>
            <div className="content">
              <div className="header">Nurgle</div>
              <div className="meta">
                <span className="category">Animals</span>
              </div>
              <div className="description">
                <p></p>
              </div>
            </div>
          </div>
          <div className="red card" onClick={() => this.factionSelected('skaven')}>
            <div className="content">
              <div className="header">Skaven</div>
              <div className="meta">
                <span className="category">Animals</span>
              </div>
              <div className="description">
                <p></p>
              </div>
            </div>
          </div>
          <div className="red card" onClick={() => this.factionSelected('slaneesh')}>
            <div className="content">
              <div className="header">Slaneesh</div>
              <div className="meta">
                <span className="category">Animals</span>
              </div>
              <div className="description">
                <p></p>
              </div>
            </div>
          </div>
          <div className="red card" onClick={() => this.factionSelected('tamurkhans_horde')}>
            <div className="content">
              <div className="header">Tamurkhan's Horde</div>
              <div className="meta">
                <span className="category">Animals</span>
              </div>
              <div className="description">
                <p></p>
              </div>
            </div>
          </div>
          <div className="red card" onClick={() => this.factionSelected('tzeentch')}>
            <div className="content">
              <div className="header">Tzeentch</div>
              <div className="meta">
                <span className="category">Animals</span>
              </div>
              <div className="description">
                <p></p>
              </div>
            </div>
          </div>
          <div className="red card" onClick={() => this.factionSelected('undivided')}>
            <div className="content">
              <div className="header">Undivided</div>
              <div className="meta">
                <span className="category">Animals</span>
              </div>
              <div className="description">
                <p></p>
              </div>
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
