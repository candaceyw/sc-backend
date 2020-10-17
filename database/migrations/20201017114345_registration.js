exports.up = async function (knex) {
	await knex.schema.createTable('registration', (tbl) => {
		tbl.increments();
		tbl.text('firstName').notNull();
		tbl.text('lastName').notNull();
		tbl.text('email').notNull();
		tbl.text('institution').notNull();
		tbl.text('title');
		tbl.text('state');
	});
};

exports.down = async function (knex) {
	await knex.schema.dropTableIfExists('registration');
};
