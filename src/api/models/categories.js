module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    name: DataTypes.STRING,
    allowNull: false
  }, {
    classMethods: {
      associate: (models) => {
        Categories.hasMany(models.Mentor, {
          through: models.Mentor_Category,
          onDelete: 'CASCADE'
        })
      }
    }
  });
  return Categories;
};
