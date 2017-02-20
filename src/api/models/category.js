import mongoose from 'mongoose';

let Schema = mongoose.Schema;
let CategorySchema = new Schema({
	name: {
		type: String,
		enum: ['Tech', 'Business', 'HR and Marketing'],
		required: true
	}
});

export default mongoose.model('Category', CategorySchema);
