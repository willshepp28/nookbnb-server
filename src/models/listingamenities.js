'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ListingAmenities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ListingAmenities.init({
    listingId: {
      type: DataTypes.UUID,
      references: {
        model: 'Listings',
        key: 'id',
      },
    },
    amenityId: {
      type: DataTypes.UUID,
      references: {
        model: 'Amenities',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'ListingAmenities',
  });
  return ListingAmenities;
};