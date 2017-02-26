import categoryController from '../controller/category';

export default function(app) {
	app.put('/api/update/:id', categoryController.update);
	app.delete('/api/:id', categoryController.delete);
	app.post('/category', categoryController.create);
}
