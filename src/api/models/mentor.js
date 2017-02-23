'use strict';
module.exports = function(sequelize, DataTypes) {
  var Mentor = sequelize.define('Mentor', {
     firstname: {
       type: DataTypes.STRING,
       allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    available: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hobbies: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
    },
    workdescription: {
      type: DataTypes.STRING,
    }
  }, {
    classMethods: {
      associate: function(models) {
        Mentor.belongsToMany(models.Category, { as: 'Categories', through: 'MentorCategories', foreignKey: 'mentor_id' });
      }
    }
  });
  return Mentor;
};
