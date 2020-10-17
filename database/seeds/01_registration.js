exports.seed = function (knex) {
	return knex('registration')
		.truncate()
		.then(function () {
			return knex('registration').insert([
				{
					firstName: 'Jon',
					lastName: 'Doe',
					email: 'jon@email.com',
					institution: 'First Bank',
					title: 'CAO',
					state: 'CA',
				},
				{
					firstName: 'Jill',
					lastName: 'Smith',
					email: 'jill@email.com',
					institution: 'Century Bank',
					title: 'Owner',
					state: 'NY',
				},
				{
					firstName: 'Alan',
					lastName: 'Brown',
					email: 'alan@email.com',
					institution: 'South Bank',
				},
				{
					firstName: 'Brandy',
					lastName: 'Lowe',
					email: 'brandy@email.com',
					institution: 'North Bank',
					title: 'Banker',
					state: 'NC',
				},
			]);
		});
};
