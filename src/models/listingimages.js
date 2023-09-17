"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ListingImages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ListingImages.init(
    {
      imageUrl: DataTypes.STRING,
      isFeatured: DataTypes.BOOLEAN,
      listingId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "ListingImages",
    },
  );
  return ListingImages;
};
