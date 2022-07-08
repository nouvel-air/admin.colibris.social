import GroupList from './GroupList';
import GroupShow from './GroupShow';
import GroupIcon from '@material-ui/icons/Group';

export default {
  config: {
    list: GroupList,
    show: GroupShow,
    icon: GroupIcon,
    options: {
      label: 'Groupes',
      parent: 'GroupesLocaux'
    }
  },
  dataModel: {
    types: ['pair:Group'],
  },
  translations: {
    fr: {
      name: 'Groupe |||| Groupes',
      fields: {
        'pair:label': 'Nom',
        'pair:e-mail': 'Adresse mail',
        'pair:webPage': 'Site web'
      }
    }
  }
};
