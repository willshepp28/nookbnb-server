"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Addresses", "listingId", {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: "Listings",
        key: "id",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Addresses", "listingId");
  },
};
