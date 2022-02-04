import SubscriberList from './SubscriberList';
import MailIcon from "@material-ui/icons/Mail";

export default {
  config: {
    list: SubscriberList,
    icon: MailIcon,
    options: {
      label: 'Abonnés Mailer',
      parent: 'LaFabrique'
    }
  },
  dataModel: {
    types: ['as:Person'],
    list: {
      fetchContainer: true
    }
  },
  translations: {
    fr: {
      name: 'Abonné Mailer |||| Abonnés Mailer',
      fields: {
        'pair:e-mail': 'Adresse e-mail',
        'location.name': 'Localisation',
        'location.radius': 'Distance',
        'published': 'Inscription',
        'pair:hasTopic': 'Intérêts',
        'semapps:mailFrequency': 'Fréquence désirée'
      }
    }
  }
};
