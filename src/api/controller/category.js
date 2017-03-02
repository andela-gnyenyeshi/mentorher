import mongoose from 'mongoose';
import Category from '../models/category';

const categoryController = {
	create: (req, res) => {
		let category = new Category({
			name: req.body.name
		});

		category.save((err, savedCategory) => {
			return err ? res.status(500).json({
				message: err.message
			}) : res.status(200).json({
				message: 'Successfully deleted',
				data: savedCategory
			});
		});
	},
	delete: (req, res) => {
		Category.remove({
			_id: req.params.id
		}, (err, deletedCategory) => {
			return err ? res.status(500).json({
				message: err.message
			}) : res.status(200).json({
				message: 'Successfully deleted',
				data: deletedCategory
			});
		});
	},
	update: (req, res) => {
		Category.findById(req.params.id, (err, categoryData) => {
			let newCategory = Object.assign(categoryData, req.body);
			newCategory.save((err, savedCategory) => {
				return err ? res.status(500).json({
					message: err.message
				}) : res.status(200).json({
					message: 'Successfully updated',
					data: savedCategory
				});
			});
		});
	}
};

export default categoryController;
