"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    static associate(models) {
      this.belongsTo(models.Listing, {
        foreignKey: "listingId",
        as: "listing",
      });
    }
  }
  Address.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlpha: true, // only allow letters
          notNull: true,
        },
      },
      street: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 255], // minimum 3 characters and maximum 255
          notNull: true,
        },
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlpha: true,
          notNull: true,
        },
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlpha: true,
          notNull: true,
        },
      },
      zipCode: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isNumeric: true,
          len: [5, 10], // minimum 5 characters and maximum 10
          notNull: true,
        },
      },
      longitude: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        validate: {
          isFloat: true,
          min: -180,
          max: 180,
        },
      },
      latitude: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        validate: {
          isFloat: true,
          min: -90,
          max: 90,
        },
      },
      geolocation: {
        type: DataTypes.GEOMETRY("POINT", 4326),
        allowNull: true,
      },
      locality: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [2, 100],
        },
      },
      listingId: {
        type: Sequelize.UUID,
        references: {
          model: "Listings",
          key: "id",
        },
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Address",
      timestamps: true,
    },
  );
  return Address;
};
