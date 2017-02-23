module.exports = (sequelize, DataTypes) => {
  const Mentor = sequelize.define('Mentor', {
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
      associate: (models) => {
        Mentor.hasMany(models.Categories, {
          onDelete: 'CASACADE'
        });
      }
    }
  });
   return Mentor;
};


module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    name: DataTypes.STRING,
    allowNull: false
  }, {
    classMethods: {
      associate: (models) => {
        Categories.hasMany(models.Mentor, {
          onDelete: 'CASCADE'
        })
      }
    }
  });
  return Categories;
};
