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
        Mentor.belongsToMany(models.Categories, {
          as: 'categoryid',
          through: models.Mentor_Category,
          foreignKey: 'id',
          onDelete: 'CASACADE'
        });
      }
    }
  });
   return Mentor;
};
