import ProjectList from './ProjectList';
import ProjectShow from './ProjectShow';
import FireplaceIcon from '@material-ui/icons/Fireplace';

export default {
  config: {
    list: ProjectList,
    show: ProjectShow,
    icon: FireplaceIcon,
    options: {
      label: 'Projets',
      parent: 'LaFabrique'
    }
  },
  dataModel: {
    types: ['pair:Project'],
    list: {
      dereference: ['pair:hasLocation/pair:hasPostalAddress'],
    }
  },
  translations: {
    fr: {
      name: 'Projet |||| Projets',
      fields: {
        'pair:label': 'Nom',
        'pair:comment': 'Courte description',
        'pair:description': 'Description',
        'pair:aboutPage': 'Site web',
        'pair:hasTopic': 'Thèmes',
        'pair:supportedBy': 'Soutenu par',
        'pair:hasStatus': 'Statut',
        'pair:depictedBy': 'Image',
        'pair:needs': 'Besoins',
        'location.latitude': 'Latitude',
        'location.longitude': 'Longitude',
        'location[schema:address][schema:streetAddress]': 'Adresse',
        'location[schema:address][schema:postalCode]': 'Code postal',
        'location[schema:address][schema:addressLocality]': 'Ville',
        'location[schema:address][schema:addressRegion]': 'Région',
        'location[schema:address][schema:addressCountry]': 'Code pays',
      }
    }
  }
};
