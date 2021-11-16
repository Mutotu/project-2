'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user.init({
    name: DataTypes.TEXT,
    email: {type: DataTypes.STRING, validate: {
      isEmail: true
    }},
    password: {type: DataTypes.STRING, validate: {
      min: 8
    }},
    location: DataTypes.STRING,
    phone: DataTypes.STRING,
    dob: DataTypes.STRING,
    image: {type: DataTypes.STRING, validate: {
      isUrl: true
    }}
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};