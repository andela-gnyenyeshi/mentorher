const Mentor = require('../models').Mentor;
// import Mentor from '../models/mentor';


const mentorController = {
  create: (req, res) => {
    console.log('OLAAAAA', req.body);
    return Mentor.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      region: req.body.region,
      workdescripton: req.body.workdescription,
      decription: req.body.description,
      hobbies: req.body.hobbies,
      categories: req.body.categories
    })
    .then((mentor) => res.status(200).send(mentor))
    .catch((err) => res.status(500).send(err));
  }
};

export default mentorController;
