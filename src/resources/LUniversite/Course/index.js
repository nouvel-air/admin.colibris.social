import CourseList from './CourseList';
import CourseShow from "./CourseShow";
import MenuBookIcon from '@material-ui/icons/MenuBook';

export default {
  config: {
    list: CourseList,
    show: CourseShow,
    icon: MenuBookIcon,
    options: {
      label: 'Formations',
      parent: 'LUniversite'
    }
  },
  dataModel: {
    types: ['pair:Event'],
    list: {
      containers: {
        colibris: ['/universite/courses']
      }
    }
  },
  translations: {
    fr: {
      name: 'Formation |||| Formations',
      fields: {
        'pair:label': 'Nom',
        'pair:comment': 'Résumé',
        'pair:description': 'Contenu',
        'pair:depictedBy': 'Image',
        'pair:webPage': 'Page de la formation',
        'pair:hasTopic': 'Thématiques',
        'pair:startDate': 'Date de début',
        'pair:endDate': 'Date de fin'
      }
    }
  }
};
