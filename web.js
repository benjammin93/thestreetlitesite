var keystone = require('keystone');
keystone.init({

  'name': 'The StreetLite Company',
  'brand': 'The StreetLite Company',

  'favicon': 'public/favicon.ico',
  'less': 'public',
  'static': ['public'],

  /*'views': 'templates/views',
  'view engine': 'jade',*/

  'auto update': true,
  'mongo': 'mongodb://localhost:27017',

  'session': true,
  'auth': true,
  'user model': 'User',
  'cookie secret': 'wowieamightyfinesecret',

  'port': 8080

});

require('./models');

keystone.set('routes', require('./routes'));

keystone.start();
