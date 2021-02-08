import NotificationList from './NotificationList';
import NotificationsIcon from '@material-ui/icons/Notifications';

export default {
  config: {
    list: NotificationList,
    icon: NotificationsIcon,
    options: {
      label: 'Notifications',
      parent: 'Push'
    }
  },
  dataModel: {
    types: ['semapps:PushNotification'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'push/devices',
    slugField: 'pair:label'
  },
  translations: {
    fr: {
      name: 'Notification |||| Notifications',
      fields: {
        'semapps:addedAt': 'Envoyée le',
        'semapps:status': 'Statut',
        'semapps:errorMessage': 'Message d\'erreur',
        'semapps:deviceId': 'Appareil'
      }
    }
  }
};
