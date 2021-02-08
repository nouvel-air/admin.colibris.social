import ServiceList from './ServiceList';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';

export default {
  config: {
    list: ServiceList,
    icon: PermContactCalendarIcon,
    options: {
      label: 'Services',
      parent: 'Actor'
    }
  },
  dataModel: {
    types: ['as:Service'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'services',
    slugField: 'pair:label'
  },
  translations: {
    fr: {
      name: 'Service |||| Services',
      fields: {
        'name': 'Nom',
        'preferredUsername': 'Username'
      }
    }
  }
};
