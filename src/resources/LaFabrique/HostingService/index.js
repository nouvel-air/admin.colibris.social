import HostingServiceCreate from './HostingServiceCreate';
import HostingServiceEdit from './HostingServiceEdit';
import HostingServiceList from './HostingServiceList';
import HotelIcon from '@material-ui/icons/Hotel';

export default {
  config: {
    list: HostingServiceList,
    create: HostingServiceCreate,
    edit: HostingServiceEdit,
    icon: HotelIcon,
    options: {
      label: "Offres d'hébergement",
      parent: 'LaFabrique'
    }
  },
  dataModel: {
    types: ['oasis:HostingService'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'lafabrique/hosting-services'
  },
  translations: {
    fr: {
      name: "Offre d'hébergement |||| Offres d'hébergement",
      fields: {
        'pair:label': "Titre de l'annonce",
        'pair:offeredBy': "Oasis",
        'pair:description': "Description",
        'oasis:image': "Photos",
        'pair:hasType': 'Catégories',
        'oasis:minCapacity': "Capacité minimale",
        'oasis:maxCapacity': "Capacité maximale",
        'oasis:price': "Prix",
        'oasis:bookingUrl': "Lien d'inscription"
      }
    }
  }
};
