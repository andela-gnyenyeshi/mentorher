import mongoose from 'mongoose';
import Category from '../models/category';

const categoryController = {
	create: (req, res) => {
		let category = new Category({
			name: req.body.name
		});

		category.save((err, savedCategory) => {
			if (err) {
				return res.status(500).json({
					message: 'Error creating category',
					data: err
				});
			} else {
				return res.status(200).json({
					message: 'Created successfully',
					data: savedCategory
				});
			}
		});
	},
	delete: (req, res) => {
		Category.remove({
			_id: req.params.id
		}, (err, deletedCategory) => {
			if (err) {
				return res.status(500).json({
					error: err
				});
			} else {
				return res.status(200).json({
					message: 'Category successfully deleted'
				});
			}
		})
	},
	update: (req, res) => {
		Category.findById(req.params.id, (err, categoryData) => {
			let newCategory = Object.assign(categoryData, req.body);
			newCategory.save((err, savedCategory) => {
				if (err) {
					return res.status(500).json({
						message: err
					});
				} else {
					return res.status(200).json({
						message: 'Successfully updated',
						data: savedCategory
					});
				}
			});
		});
	}
};

export default categoryController;
