import EventList from './EventList';
import EventShow from "./EventShow";
import EventIcon from '@material-ui/icons/Event';

export default {
  config: {
    list: EventList,
    show: EventShow,
    icon: EventIcon,
    options: {
      label: 'Événements',
      parent: 'Colibris'
    }
  },
  dataModel: {
    types: ['pair:Event'],
    list: {
      containers: {
        colibris: ['/lemouvement/events']
      },
      dereference: ['pair:hasLocation/pair:hasPostalAddress'],
    }
  },
  translations: {
    fr: {
      name: 'Événement |||| Événements',
      fields: {
        'pair:label': 'Nom',
        'pair:comment': 'Résumé',
        'pair:description': 'Contenu',
        'pair:depictedBy': 'Image',
        'pair:webPage': 'Site web',
        'pair:hasTopic': 'Thématiques',
        'pair:startDate': 'Date de début',
        'pair:endDate': 'Date de fin'
      }
    }
  }
};
