import LocalFloristIcon from "@material-ui/icons/LocalFlorist";

export default {
  config: {
    icon: LocalFloristIcon,
    options: {
      label: 'Oasis'
    }
  },
  dataModel: {
    types: ['pair:Project'],
    query: {
      'pair:involves': process.env.REACT_APP_MIDDLEWARE_URL + 'services/lafabrique',
      'pair:interestOf': process.env.REACT_APP_MIDDLEWARE_URL + 'themes/oasis'
    }
  }
};
