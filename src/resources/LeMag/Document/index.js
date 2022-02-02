import DocumentList from './DocumentList';
import DocumentShow from "./DocumentShow";
import DescriptionIcon from '@material-ui/icons/Description';

export default {
  config: {
    list: DocumentList,
    show: DocumentShow,
    icon: DescriptionIcon,
    options: {
      label: 'Articles',
      parent: 'LeMag'
    }
  },
  dataModel: {
    types: ['pair:Document'],
  },
  translations: {
    fr: {
      name: 'Article |||| Articles',
      fields: {
        'pair:label': 'Nom',
        'pair:comment': 'Résumé',
        'pair:description': 'Contenu',
        'pair:depictedBy': 'Image',
        'pair:aboutPage': 'Page originale',
        'pair:webPage': 'Site web',
        'pair:hasTopic': 'Thématiques'
      }
    }
  }
};
