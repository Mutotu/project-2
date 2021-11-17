'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class save extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.save.belongsToMany(models.user, {through: 'saves'})
    }
  };
  save.init({
    userId: DataTypes.INTEGER,
    eventId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'save',
  });
  return save;
};