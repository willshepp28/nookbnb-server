"use strict";

// Import necessary dependencies and data
const listingsMockData = require("../mocks/listing");
const locations = require("../mocks/locations");
const { v4: uuidv4 } = require("uuid");
const { faker } = require("@faker-js/faker");

module.exports = {
  async up(queryInterface, Sequelize) {
    const generatedListings = [];
    const generatedListingImages = [];
    const generatedAddresses = [];

    for (let index = 0; index < locations.length; index++) {
      const location = locations[index];
      const listingMock = listingsMockData[index % listingsMockData.length];

      const listing = {
        id: uuidv4(),
        title: listingMock.title,
        description: listingMock.description,
        checkIn: faker.date.future(),
        checkOut: faker.date.future(),
        maxGuests: faker.number.int({ min: 1, max: 10 }),
        bedrooms: faker.number.int({ min: 1, max: 5 }),
        bathrooms: faker.number.int({ min: 1, max: 4 }),
        minAmount: faker.number.int({ min: 50, max: 300 }),
        maxAmount: faker.number.int({ min: 300, max: 600 }),
        cancellationPolicy: faker.helpers.arrayElement([
          "Flexible",
          "Moderate",
          "Strict",
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      generatedListings.push(listing);

      const listingImage = {
        id: uuidv4(),
        imageUrl: `https://nookbnb.s3.us-east-2.amazonaws.com/listings/house-${
          index + 1
        }.png`,
        listingId: listing.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      generatedListingImages.push(listingImage);

      const address = {
        id: uuidv4(),
        street: location.street,
        city: location.city,
        state: location.state,
        zipCode: location.zipCode,
        longitude: location.longitude,
        latitude: location.latitude,
        country: "United States",
        geolocation: location.geolocation,
        listingId: listing.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      generatedAddresses.push(address);
    }

    // Insert the generated data into the database
    await queryInterface.bulkInsert("Listings", generatedListings, {});
    await queryInterface.bulkInsert(
      "ListingImages",
      generatedListingImages,
      {},
    );
    await queryInterface.bulkInsert("Addresses", generatedAddresses, {});
  },

  async down(queryInterface, Sequelize) {
    // Rollback the database by deleting all entries
    await queryInterface.bulkDelete("Listings", null, {});
    await queryInterface.bulkDelete("ListingImages", null, {});
    await queryInterface.bulkDelete("Addresses", null, {});
  },
};
