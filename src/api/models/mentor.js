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
    workDescription: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
   return Mentor;
}
