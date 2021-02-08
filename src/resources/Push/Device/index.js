import DeviceList from './DeviceList';
import PhonelinkRingIcon from '@material-ui/icons/PhonelinkRing';

export default {
  config: {
    list: DeviceList,
    icon: PhonelinkRingIcon,
    options: {
      label: 'Appareils',
      parent: 'Push'
    }
  },
  dataModel: {
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'push/devices',
    slugField: 'pair:label'
  },
  translations: {
    fr: {
      name: 'Appareil |||| Appareils',
      fields: {
        'semapps:addedAt': 'Ajouté le',
        'semapps:ownedBy': 'Utilisateur',
        'semapps:name': 'Modèle',
        'semapps:yearClass': 'Année de référence',
        'semapps:errorMessage': 'Message d\'erreur'
      }
    }
  }
};
