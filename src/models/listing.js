"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Listing extends Model {
    static associate(models) {
      // Associations
      this.hasOne(models.Address, { foreignKey: "listingId", as: "address" });
      this.belongsToMany(models.Amenity, {
        through: models.ListingAmenity,
        foreignKey: "listingId",
        as: "amenities",
      });
    }
  }
  Listing.init(
    {
      title: DataTypes.STRING,
      checkIn: DataTypes.DATE,
      checkOut: DataTypes.DATE,
      maxGuests: DataTypes.INTEGER,
      bedrooms: DataTypes.INTEGER,
      bathrooms: DataTypes.INTEGER,
      minAmount: DataTypes.FLOAT,
      maxAmount: DataTypes.FLOAT,
      cancellationPolicy: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Listing",
    },
  );
  return Listing;
};
