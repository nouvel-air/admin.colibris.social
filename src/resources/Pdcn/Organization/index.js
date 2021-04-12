import OrganizationList from './OrganizationList';
import HomeIcon from '@material-ui/icons/Home';

export default {
  config: {
    list: OrganizationList,
    icon: HomeIcon,
    options: {
      label: 'Organisations',
      parent: 'Pdcn'
    }
  },
  dataModel: {
    types: ['pair:Organization'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'organizations',
    dereference: ['pair:hasLocation/pair:hasPostalAddress'],
    slugField: 'pair:label'
  },
  translations: {
    fr: {
      name: 'Organisation |||| Organisations',
      fields: {
        'name': 'Nom',
        'preferredUsername': 'Username'
      }
    }
  }
};
