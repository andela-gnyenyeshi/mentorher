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
    workdescription: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: (models) => {
        Mentor.hasMany(models.Categories, {
          through: models.Mentor_Category,
          onDelete: 'CASACADE'
        });
      }
    }
  });
   return Mentor;
}
