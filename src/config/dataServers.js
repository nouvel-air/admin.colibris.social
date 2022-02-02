const dataServers = {
  colibris: {
    name: 'colibris.social',
    baseUrl: process.env.REACT_APP_MIDDLEWARE_URL,
    sparqlEndpoint: process.env.REACT_APP_MIDDLEWARE_URL + 'sparql',
    default: true,
    authServer: true,
    containers: {
      colibris: {
        'as:Service': ['/services'],
        'pair:Group': ['/groupeslocaux/groups'],
        'pair:Project': ['/lafabrique/projects'],
        'pair:HumanBasedResource': ['/lafabrique/needs'],
        'pair:AtomBasedResource': ['/lafabrique/needs'],
        'pair:MoneyBasedResource': ['/lafabrique/needs'],
        'pair:ProjectStatus': ['/status'],
        'pair:GroupType': ['/types'],
        'oasis:HostingServiceType': ['/types'],
        'oasis:HostingService': ['/lafabrique/hosting-services'],
        'pair:Theme': ['/themes'],
        'pair:Organization': ['/presdecheznous/organizations'],
        'pair:Event': ['/universite/courses', '/lemouvement/events'],
        'pair:Document': ['/lemag/articles'],
        'pair:Resource': ['/laboutique/products']
      },
    },
  },
  mailer: {
    name: 'mailer',
    baseUrl: process.env.REACT_APP_MAILER_URL,
    sparqlEndpoint: process.env.REACT_APP_MAILER_URL + 'sparql',
    containers: {
      mailer: {

      },
    },
  },
};

export default dataServers;
