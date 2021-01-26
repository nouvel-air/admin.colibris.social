import PersonList from './PersonList';
import PersonIcon from '@material-ui/icons/Person';

export default {
  config: {
    list: PersonList,
    icon: PersonIcon,
    options: {
      label: 'Individus',
      parent: 'Actor'
    }
  },
  dataModel: {
    types: ['pair:Person'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'users',
    slugField: 'pair:label'
  },
  translations: {
    fr: {
      name: 'Individu |||| Individus',
      fields: {
        'name': 'Nom',
        'preferredUsername': 'Username'
      }
    }
  }
};
