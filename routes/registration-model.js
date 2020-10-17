const db = require('../database/config');

module.exports = {
	find,
	add,
};

function find() {
	return db('registration');
}

function add(registration) {
	return db('registration').insert(registration);
}
