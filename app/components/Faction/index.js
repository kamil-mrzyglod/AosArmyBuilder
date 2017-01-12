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
                <span className="category">Eldritch Council, Phoenix Temple, Lion Rangers, Order Draconis, Swifthawk Agents, Order Serpentis, Shadowblades, Darkling Covens, Daughters of Khaine, Scourge Privateers, Wanderers, Aelf</span>
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
                <span className="category">Dark Elves Legacy Units, High Elves Legacy Units, Wood Elf Legacy Units</span>
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
                <span className="category">Bretonnia</span>
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
                <span className="category">Dispossessed, Ironweld Arsenal, Legacy Units</span>
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
                <span className="category">Fyreslayers</span>
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
                <span className="category">Devoted of Sigmar, Free Peoples, Collegiate Arcane, Ironweld Arsenal, Empire Legacy Units</span>
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
                <span className="category">Seraphon, Lizardmen Legacy Units</span>
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
                <span className="category">Stormcast Eternals, Stormcast Extremis</span>
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
                <span className="category">Sylvaneth, Sylvaneth Legacy Units</span>
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
                <span className="category">Brayherds, Warherds & Monsters, Legacy Units</span>
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
                <span className="category">Khorne Bloodbound, Daemons of Khorne</span>
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
                <span className="category">Legion of Azgorh</span>
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
                <span className="category">Nurgle Rotbringers, Daemons of Nurgle</span>
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
                <span className="category">The Clans Eshin, Masterclan, The Clans Moulder, The Clans Pestilens, The Clans Skryre, The Clans Verminus, Skaven Legacy Units</span>
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
                <span className="category">Host of Slaanesh, Legacy Units</span>
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
                <span className="category">Tamurkhan’s Horde</span>
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
                <span className="category">Tzeentch Arcanites, Daemons of Tzeentch, Legacy Units</span>
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
                <span className="category">Everchosen, Slaves to Darkness, Daemons of Chaos, Legacy Units</span>
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
        <div className="ui six stackable cards">
          <div className="black card" onClick={() => this.factionSelected('death')}>
            <div className="content">
              <div className="header">Death</div>
              <div className="meta">
                <span className="category">Deathlords, Deathmages, Deathrattle, Deadwalkers, Flesh-Eater Courts, Nighthaunt, Soulblight, Vampire Counts Legacy Units</span>
              </div>
              <div className="description">
                <p></p>
              </div>
            </div>
          </div>
          <div className="black card" onClick={() => this.factionSelected('tomb_kings')}>
            <div className="content">
              <div className="header">Tomb Kings</div>
              <div className="meta">
                <span className="category">Tomb Kings</span>
              </div>
              <div className="description">
                <p></p>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.props.allegiance === 'destruction') {
      return (
        <div className="ui six stackable cards">
          <div className="green card" onClick={() => this.factionSelected('grots')}>
            <div className="content">
              <div className="header">Grots</div>
              <div className="meta">
                <span className="category">Gitmob Grots, Moonclan Grots, Spiderfang Grots, Grots, Grots Legacy Units</span>
              </div>
              <div className="description">
                <p></p>
              </div>
            </div>
          </div>
          <div className="green card" onClick={() => this.factionSelected('monsters_and_troggoths')}>
            <div className="content">
              <div className="header">Monsters & Troggoths</div>
              <div className="meta">
                <span className="category">Grand Alliance: Destruction Monstrous Arcanum, Troggoths & Gargants</span>
              </div>
              <div className="description">
                <p></p>
              </div>
            </div>
          </div>
          <div className="green card" onClick={() => this.factionSelected('ogors')}>
            <div className="content">
              <div className="header">Ogors</div>
              <div className="meta">
                <span className="category">Gutbusters, Firebellies, Maneaters, Beastclaw Riders, Ogre Kingdoms Legacy Units</span>
              </div>
              <div className="description">
                <p></p>
              </div>
            </div>
          </div>
          <div className="green card" onClick={() => this.factionSelected('orruks')}>
            <div className="content">
              <div className="header">Orruks</div>
              <div className="meta">
                <span className="category">Greenskinz, Bonesplitterz, Ironjawz, Orcs Legacy Units</span>
              </div>
              <div className="description">
                <p></p>
              </div>
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
