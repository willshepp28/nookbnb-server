'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Amenity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Listing, { through: models.ListingAmenity, foreignKey: 'amenityId', as: 'listings' });
    }
  }
  Amenity.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Amenity',
  });
  return Amenity;
};