var keystone = require('keystone'),
    User = keystone.list('User');

exports = module.exports = function(done) {

    new User.model({
        name: { first: 'Ben', last: 'Rabin' },
        email: 'benjaminrabin@gmail.com',
        password: '\'',
        canAccessKeystone: true
    }).save(done);

};
