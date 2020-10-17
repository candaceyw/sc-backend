const express = require('express');

const Registration = require('./registration-model');

const router = express.Router();

router.get('/', (req, res) => {
	Registration.find()
		.then((registration) => {
			res.json(registration);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to return registered people' });
		});
});

router.post('/', (req, res) => {
	const regData = req.body;

	Registration.add(regData)
		.then((registration) => {
			res.status(201).json(registration);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to create new registration' });
		});
});

module.exports = router;
