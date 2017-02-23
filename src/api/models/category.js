'use strict';
module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define('Category', {
    title: DataTypes.STRING,

  }, {
    classMethods: {
      associate: function(models) {
        Category.belongsToMany(models.Mentor, { as: 'Mentors', through: 'MentorCategories', foreignKey: 'category_id' });
      }
    }
  });
  return Category;
};
