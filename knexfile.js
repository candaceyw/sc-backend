// module.exports = {
// 	client: 'sqlite3',
// 	useNullAsDefault: true,
// 	connection: {
// 		filename: './database/db.db3',
// 	},
// 	migrations: {
// 		directory: './database/migrations',
// 	},
// 	seeds: {
// 		directory: './database/seeds',
// 	},
// 	pool: {
// 		afterCreate: (conn, done) => {
// 			conn.run('PRAGMA foreign_keys = ON', done);
// 		},
// 	},
// };
require('dotenv').config('./.env');

module.exports = {
	development: {
		client: 'pg',
		connection: process.env.DB_URL,
		migrations: {
			directory: './database/migrations',
			tableName: 'knex_migrations',
		},
		seeds: { directory: './database/seeds' },
	},
	production: {
		client: 'pg',
		connection: process.env.DATABASE_URL,
		migrations: {
			directory: './database/migrations',
			// tableName: 'registration',
		},
		seeds: { directory: './database/seeds' },
	},
	// test: {
	//   client: 'pg',
	//   connection: 'postgres://candacewilson:postgres@localhost/test-waterPlants',
	//   migrations: {
	//     directory: './database/migrations',
	//     tableName: 'registration',
	//   },
	//   seeds: { directory: './database/seeds' },
	// },
};
