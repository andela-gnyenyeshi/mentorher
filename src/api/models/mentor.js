import mongoose from 'mongoose';

let Schema = mongoose.Schema;
let MentorSchema = new Schema({
  firstname: {
    type: STRING,
    required: true
  },
  lastname: {
    type: STRING,
    required: true
  },
  email: {
    type: STRING,
    required: true
  },
  region: {
    type: STRING,
    required: true
  },
  description: {
    type: STRING,
    required: true
  },
  workDescription: {
    type: STRING,
    required: true
  },
  hobbies: {
    type: STRING,
    required: true
  }
});

export default mongoose.model('Mentor', MentorSchema);
