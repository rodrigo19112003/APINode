'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class movie extends Model {
    static associate(models) {
      movie.belongsToMany(models.category, {as: 'categories', through: 'categorymovie', foreignKey: 'movieId' });
    }
  }
  movie.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      defaultValue: 'Sin título'
    },
    synopsis: {
      type: DataTypes.STRING,
      defaultValue: 'Sin sinopsis'
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    poster: {
      type: DataTypes.STRING,
      defaultValue: 'N/A'
    }
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'movie',
  });
  
  return movie;
};