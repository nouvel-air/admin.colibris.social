import TypeList from './TypeList';
import StyleIcon from '@material-ui/icons/Style';

export default {
  config: {
    list: TypeList,
    icon: StyleIcon,
    options: {
      label: 'Types',
      parent: 'Colibris'
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
