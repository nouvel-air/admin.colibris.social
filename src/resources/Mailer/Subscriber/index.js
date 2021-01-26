import SubscriberList from './SubscriberList';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

export default {
  config: {
    list: SubscriberList,
    icon: PersonAddIcon,
    options: {
      label: 'Abonnés Mailer',
      parent: 'Mailer'
    }
  },
  dataModel: {
    containerUri: process.env.REACT_APP_MAILER_URL + 'actors'
  },
  translations: {
    fr: {
      name: 'Abonné Mailer |||| Abonnés Mailer',
      fields: {
        'pair:e-mail': 'Adresse e-mail',
        'location.name': 'Localisation',
        'location.radius': 'Distance',
        'published': 'Inscription',
        'pair:hasInterest': 'Intérêts',
        'semapps:mailFrequency': 'Fréquence désirée'
      }
    }
  }
};
