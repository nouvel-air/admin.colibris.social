import NeedList from './NeedList';
import NeedShow from './NeedShow';
import SearchIcon from '@material-ui/icons/Search';

export default {
  config: {
    list: NeedList,
    show: NeedShow,
    icon: SearchIcon,
    options: {
      label: 'Besoins',
      parent: 'LaFabrique'
    }
  },
  dataModel: {
    types: ['pair:HumanBasedResource', 'pair:AtomBasedResource', 'pair:MoneyBasedResource'],
  },
  translations: {
    fr: {
      name: 'Besoin |||| Besoins',
      fields: {
        'pair:label': 'Nom',
        'pair:description': 'Description',
        'pair:aboutPage': 'Site web',
        'pair:hasTopic': 'Thèmes',
        'pair:supportedBy': 'Soutenu par',
        'pair:hasStatus': 'Statut',
        'pair:depictedBy': 'Image',
        'pair:webPage': 'Page de contact',
        'pair:neededBy': 'Projet',
        'dc:created': 'Publié le',
        'dc:modified': 'Mis à jour le',
      }
    }
  }
};
