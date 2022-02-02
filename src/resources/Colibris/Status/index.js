import StatusList from './StatusList';
import VisibilityIcon from '@material-ui/icons/Visibility';

export default {
  config: {
    list: StatusList,
    icon: VisibilityIcon,
    options: {
      label: 'Statuts',
      parent: 'Colibris'
    }
  },
  dataModel: {
    types: ['pair:ProjectStatus']
  },
  translations: {
    fr: {
      name: 'Statuts |||| Statut',
      fields: {
        'pair:label': 'Nom'
      }
    }
  }
};
