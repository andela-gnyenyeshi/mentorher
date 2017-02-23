const Mentor = require('../models').Mentor;
const Category = require('../models').Category;
// import Mentor from '../models/mentor';
 console.log(Mentor.Instance.prototype);
 console.log(Category.Instance.prototype);

const mentorController = {
  create: (req, res) => {
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
    .then((mentor, err) => {
      Category.findAll({where: { title: req.body.categories}}).then((categ, err) => {
        mentor.setCategories(categ).then(() => {
          mentor.getCategories().then((data) => {
            console.log('DATTT', data);
          })
        })
      });
    });
  }
};

export default mentorController;
