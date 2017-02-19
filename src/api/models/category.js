import mongoose from 'mongoose';

let Schema = mongoose.Schema;
let CategorySchema = new Schema({
	name: {
		type: STRING,
		required: true
	}
});

export default mongoose.model('Category', CategorySchema);
