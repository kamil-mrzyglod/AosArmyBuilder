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

    this.factionSelected = this.factionSelected.bind(this);
  }

  factionSelected() {
    //console.log(this.props.allegiance);
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
    } else {
      return (<div></div>);
    }
  }

  render() {
    return this.renderFactions();
  }
}

export default Faction;
