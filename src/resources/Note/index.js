import NoteEdit from './NoteEdit';
import NoteList from './NoteList';
import InsertCommentIcon from '@material-ui/icons/InsertComment';

export default {
  config: {
    list: NoteList,
    edit: NoteEdit,
    icon: InsertCommentIcon,
    options: {
      label: 'Actualités'
    }
  },
  dataModel: {
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'notes',
    slugField: 'pair:label'
  },
  translations: {
    fr: {
      name: 'Actualité |||| Actualités',
      fields: {
        name: 'Titre',
        content: 'Contenu',
        attributedTo: 'Auteur',
        image: 'Image',
        published: 'Publié le',
        updated: 'Mis à jour le'
      }
    }
  }
};
