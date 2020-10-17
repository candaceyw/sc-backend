const db = require('../database/config');

module.exports = {
	find,
	// findById,
	add,
	// update,
	// remove,
};

function find() {
	return db('registration');
}

function add(registration) {
	return db('registration').insert(registration);
}
