import ProductList from './ProductList';
import ProductShow from "./ProductShow";
import MenuBookIcon from '@material-ui/icons/MenuBook';

export default {
  config: {
    list: ProductList,
    show: ProductShow,
    icon: MenuBookIcon,
    options: {
      label: 'Produits',
      parent: 'LaBoutique'
    }
  },
  dataModel: {
    types: ['pair:Resource'],
  },
  translations: {
    fr: {
      name: 'Produit |||| Produits',
      fields: {
        'pair:label': 'Nom',
        'pair:comment': 'Résumé',
        'pair:description': 'Contenu',
        'pair:depictedBy': 'Image',
        'pair:aboutPage': 'Page originale',
        'pair:webPage': 'Site web',
        'pair:hasTopic': 'Thématiques'
      }
    }
  }
};
