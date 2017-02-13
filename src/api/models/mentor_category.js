module.exports = (sequelize, DataTypes) => {
  const Mentor_Category = sequelize.define('Mentor_Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    mentorId: {
      type: DataTypes.INTEGER,
      reference: 'Mentors',
      referencesKey: 'id',
      allowNull: false
    },
    categoryId: {
      type: DataTypes.INTEGER,
      reference: 'Categories',
      referencesKey: 'id',
      allowNull: false
    }
  }, {
    classMethods: {
      associate: (models) => {
        Mentor_Category.belongsTo(models.Mentor)
        Mentor_Category.belngsTo(models.Categories)
      }
    }
  });
  return Mentor_Category;
};
