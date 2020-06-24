const resources = {
  Actor: {
    types: ['as:Person', 'as:Organization']
  },
  Tag: {
    types: ['pair:Thema', 'semapps:ProjectState']
  },
  Activity: {
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'activities'
  },
  Subscriber: {
    containerUri: process.env.REACT_APP_MAILER_URL + 'actors'
  },
  Action: {
    types: ['as:Group'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'actors'
  },
  Project: {
    types: ['pair:Project'],
    query: { 'pair:involves': process.env.REACT_APP_MIDDLEWARE_URL + 'actors/lafabrique' },
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'objects'
  },
  Note: {
    types: ['as:Note'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'objects'
  },
  Theme: {
    types: ['pair:Thema'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'themes'
  },
  Device: {
    types: ['semapps:Device'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'push/devices'
  },
  Notification: {
    types: ['semapps:PushNotification'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'push/notifications'
  }
};

export default resources;
