import mongoose from 'mongoose';

let Schema = mongoose.Schema;
let MentorSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  region: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  workDescription: {
    type: String,
    required: true
  },
  hobbies: {
    type: String,
    required: true
  },
  category: {
    type: Array,
    required: true
  }
});

export default mongoose.model('Mentor', MentorSchema);
