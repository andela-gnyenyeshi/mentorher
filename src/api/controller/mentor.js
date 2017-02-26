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
			categories: req.body.categories
		});

		mentor.save((err, savedMentor) => {
			Mentor.findOne({firstname: req.body.firstname})
			.populate('categories')
			.exec((err, mentorData) => {
				if (err) {
					return res.status(500).json({message: err});
				} else {
					return res.status(200).json({data: mentorData});
				}
			});
		});
	},

	updateProfile: (req, res) => {

	},

	deleteUser: (req, res) => {

	}
};

export default mentorController;
