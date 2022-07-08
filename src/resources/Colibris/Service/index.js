import ServiceEdit from './ServiceEdit';
import ServiceList from './ServiceList';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';

export default {
  config: {
    edit: ServiceEdit,
    list: ServiceList,
    icon: PermContactCalendarIcon,
    options: {
      label: 'Services',
      parent: 'Colibris'
    }
  },
  dataModel: {
    types: ['Service']
  },
  translations: {
    fr: {
      name: 'Service |||| Services',
      fields: {
        'name': 'Nom',
        'preferredUsername': 'Username',
        'pair:label': 'Nom',
        'pair:comment': 'Description courte',
        'pair:description': 'Description',
        'pair:webPage': 'Site web'
      }
    }
  }
};
