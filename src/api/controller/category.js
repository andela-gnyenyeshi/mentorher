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
	}
};

export default categoryController;
