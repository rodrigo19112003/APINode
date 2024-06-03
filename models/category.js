'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    static associate(models) {
      category.belongsToMany(models.movie, {through: 'categorymovie', foreignKey: 'categoryId' });
    }
  }

  category.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    protected: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'category',
  });
  
  return category;
};