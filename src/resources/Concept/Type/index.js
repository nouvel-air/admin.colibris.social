import TypeList from './TypeList';
import LanguageIcon from '@material-ui/icons/Language';

export default {
  config: {
    list: TypeList,
    icon: LanguageIcon,
    options: {
      label: 'Types',
      parent: 'Concept'
    }
  },
  dataModel: {
    types: ['pair:GroupType', 'oasis:HostingServiceType'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'types',
    slugField: 'pair:label'
  },
  translations: {
    fr: {
      name: 'Types |||| Type',
      fields: {
        'pair:label': 'Nom'
      }
    }
  }
};
