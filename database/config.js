// const knex = require('knex');
// const knexfile = require('../knexfile');

// module.exports = knex(knexfile);

const knex = require('knex');

const knexfile = require('../knexfile');

const env = process.env.NODE_ENV || 'development';
// const configOptions = knexfile[env];

module.exports = knex(knexfile);
