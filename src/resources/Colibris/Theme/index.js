import ThemeList from './ThemeList';
import ThemeShow from './ThemeShow';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

export default {
  config: {
    list: ThemeList,
    show: ThemeShow,
    icon: LocalOfferIcon,
    options: {
      label: 'Thèmes',
      parent: 'Colibris'
    }
  },
  dataModel: {
    types: ['pair:Theme']
  },
  translations: {
    fr: {
      name: 'Thème |||| Thèmes',
      fields: {
        'pair:label': 'Nom'
      }
    }
  }
};
