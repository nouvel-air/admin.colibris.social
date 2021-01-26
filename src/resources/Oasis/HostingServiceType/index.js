import LocalFloristIcon from "@material-ui/icons/LocalFlorist";

export default {
  config: {
    icon: LocalFloristIcon,
    options: {
      label: "Types d'hébergement"
    }
  },
  dataModel: {
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'hosting-services-types'
  }
};
