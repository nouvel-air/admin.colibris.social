import ProjectList from './ProjectList';
import ProjectEdit from './ProjectEdit';
import ProjectShow from './ProjectShow';
import FireplaceIcon from '@material-ui/icons/Fireplace';

export default {
  config: {
    list: ProjectList,
    edit: ProjectEdit,
    show: ProjectShow,
    icon: FireplaceIcon,
    options: {
      label: 'Projets',
      parent: 'Activity'
    }
  },
  dataModel: {
    types: ['pair:Project'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'projects',
    dereference: ['as:location/schema:address'],
    slugField: 'pair:label'
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
        'image': 'Image',
        'published': 'Publié le',
        'updated': 'Mis à jour le',
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
