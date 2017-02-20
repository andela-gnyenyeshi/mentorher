import mongoose from 'mongoose';
import Mentor from '../models/mentor';
import Category from '../models/category';

const mentorController = {
	create: (req, res) => {
		let mentor = new Mentor({
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			email: req.body.email,
			description: req.body.description,
			hobbies: req.body.hobbies,
			workDescription: req.body.workDescription,
			region: req.body.region,
			category: req.body.category
		});

		// Category.find({
		// 	name: req.body.category
		// }).exec((err, categoryResult) => {
		// 	if (err) {
		// 		return res.status(500).send(err);
		// 	} else {

		// 	}
		// })

		mentor.save((err, savedMentor) => {
			if (err) {
				return res.status(500).send(err);
			} else {
				return res.status(200).json({
					message: 'Added new user',
					data: savedMentor
				});
			}
		});
	}
};

export default mentorController;
