/*
 * PpcRulesheet Messages
 *
 * This contains all the text for the PpcRulesheet component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  version: {
    id: 'app.components.PpcRulesheet.header',
    defaultMessage: 'Select a version',
  },
  allegiance: {
    id: 'app.components.PpcRulesheet.allegiance',
    defaultMessage: 'Allegiance',
  },
  faction: {
    id: 'app.components.PpcRulesheet.faction',
    defaultMessage: 'Faction',
  },
  unit: {
    id: 'app.components.PpcRulesheet.unit',
    defaultMessage: 'Unit',
  },
  selectedUnits: {
    id: 'app.components.PpcRulesheet.selectedUnits',
    defaultMessage: 'Your units',
  },
  maximumNumberOfUnits: {
    id: 'app.components.PpcRulesheet.maximumNumberOfUnits',
    defaultMessage: 'You cannot add more units of this type.',
  },
  gotIt: {
    id: 'app.components.PpcRulesheet.gotIt',
    defaultMessage: 'Got it',
  },
  stats: {
    id: 'app.components.PpcRulesheet.stats',
    defaultMessage: 'Stats',
  }
});
