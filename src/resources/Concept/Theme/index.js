import ThemeList from './ThemeList';
import LanguageIcon from '@material-ui/icons/Language';

export default {
  config: {
    list: ThemeList,
    icon: LanguageIcon,
    options: {
      label: 'Thèmes',
      parent: 'Concept'
    }
  },
  dataModel: {
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'themes',
    slugField: 'pair:label'
  },
  translations: {
    fr: {
      name: 'Thème |||| Thèmes',
      fields: {
        'pair:label': 'Nom'
      }
    }
  }
};
