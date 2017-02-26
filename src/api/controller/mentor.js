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
			return err ? res.status(500).json({
				message: err
			}) :
			Mentor.findOne({firstname: savedMentor.firstname})
			.populate('categories')
			.exec((err, mentorData) => {
				return err ? res.status(500).json({
					message: err
				}) : res.status(200).json({
					data: mentorData
				});
			});
		});
	},

	updateProfile: (req, res) => {
		Mentor.findById(req.params.id, (err, mentorData) => {
			let newData = Object.assign(mentorData, req.body);
			newData.save((err, savedData) => {
				err ? res.status(500).json({
					message: err
				}) :
				Mentor.findOne({firstname: savedData.firstname})
				.populate('categories')
				.exec((err, data) => {
					return err ? res.status(500).json({
						message: err
					}) : res.status(200).json({
						message: 'Successful update',
						data
					});
				});
			});
		});
	},

	deleteUser: (req, res) => {
		Mentor.remove({_id: req.params.id}, (err, deletedData) => {
			return err ? res.status(500).json({
				message: err
			}) : res.status(200).json({
				message: 'Deleted successfully',
				data: deletedData
			});
		});
	},

	findOne: (req, res) => {
		Mentor.findById(req.params.id, (err, mentorData) => {
			return err ? res.status(500).json({}) :
			Mentor.findOne({firstname: mentorData.firstname})
			.populate('categories')
			.exec((err, populatedData) => {
				return err ? res.status(500).json({
					message: err
				}) : res.status(200).json({
					message: 'Succesful',
					data: populatedData
				});
			});
		});
	}
};

export default mentorController;
