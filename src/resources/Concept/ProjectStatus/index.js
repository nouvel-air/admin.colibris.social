import ProjectStatusList from './ProjectStatusList';
import LanguageIcon from '@material-ui/icons/Language';

export default {
  config: {
    list: ProjectStatusList,
    icon: LanguageIcon,
    options: {
      label: 'Statuts de projets',
      parent: 'Concept'
    }
  },
  dataModel: {
    types: ['pair:ProjectStatus'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'projects-status',
    slugField: 'pair:label'
  },
  translations: {
    fr: {
      name: 'Statuts de projets |||| Statut de projets',
      fields: {
        'pair:label': 'Nom'
      }
    }
  }
};
