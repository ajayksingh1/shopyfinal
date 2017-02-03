/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'shop-ycart',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    firebase:'https://books-65c0b.firebaseio.com/',
     
    EmberENV: {
      FEATURES: {
       
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
 
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
