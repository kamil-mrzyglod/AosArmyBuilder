/**
*
* PpcRulesheet
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class PpcRulesheet extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

export default PpcRulesheet;
