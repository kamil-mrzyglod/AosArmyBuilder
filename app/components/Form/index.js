/**
*
* Form
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import PpcRulesheet from '../../components/PpcRulesheet';

class Form extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);

    this.state = {
      rulesheet: ""
    };

    this.rulesheetChange = this.rulesheetChange.bind(this);
    this.renderRulesheet = this.renderRulesheet.bind(this);
  }

  rulesheetChange(e) {
    var options = e.target.options;
    var value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }

    var state = this.state;
    state.rulesheet = value[0];
    this.setState(state);
  }

  renderRulesheet() {
    if(this.state.rulesheet === 'ppc') {
      return <PpcRulesheet />
    }
  }

  render() {
    return (
      <form className="ui form">
        <h3 className="ui dividing header">
          <FormattedMessage {...messages.rulesheet} />
        </h3>
        <div className="field">
          <select className="ui fluid dropdown" onChange={this.rulesheetChange} defaultValue={this.state.rulesheet}>
            <option value="">--- Select ---</option>
            <option value="ppc">PPC</option>
          </select>
        </div>
        {this.renderRulesheet()}
      </form>
    );
  }
}

export default Form;
