import GroupList from './GroupList';
import GroupIcon from '@material-ui/icons/Group';

export default {
  config: {
    list: GroupList,
    icon: GroupIcon,
    options: {
      label: 'Groupes',
      parent: 'Actor'
    }
  },
  dataModel: {
    types: ['pair:Group'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'groups',
    slugField: 'pair:label'
  },
  translations: {
    fr: {
      name: 'Groupe |||| Groupes',
      fields: {
        'name': 'Nom',
        'preferredUsername': 'Username'
      }
    }
  }
};
