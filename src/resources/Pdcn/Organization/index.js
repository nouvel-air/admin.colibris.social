import OrganizationList from './OrganizationList';
import OrganizationShow from "./OrganizationShow";
import HomeIcon from '@material-ui/icons/Home';

export default {
  config: {
    list: OrganizationList,
    show: OrganizationShow,
    icon: HomeIcon,
    options: {
      label: 'Organisations',
      parent: 'Pdcn'
    }
  },
  dataModel: {
    types: ['pair:Organization']
  },
  translations: {
    fr: {
      name: 'Organisation |||| Organisations',
      fields: {
        'pair:label': 'Nom',
        'pair:description': 'Description',
        'pair:aboutPage': 'Page originale',
        'pair:webPage': 'Site web',
        'pair:hasTopic': 'Thématiques'
      }
    }
  }
};
