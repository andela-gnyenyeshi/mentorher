module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    name: DataTypes.STRING,
    allowNull: false
  }, {
    classMethods: {
      associate: (models) => {
        Categories.belongsToMany(models.Mentor, {
          through: models.Mentor_Category,
          onDelete: 'CASCADE'
        })
      }
    }
  });
  return Categories;
};
