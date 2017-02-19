module.exports = (sequelize, DataTypes) => {
  const Mentor_Category = sequelize.define('Mentor_Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
  }, {
    classMethods: {
      associate: () => {

      }
    }
  });
  return Mentor_Category;
};
