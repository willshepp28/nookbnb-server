'use strict';
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Roles', [
      { id: uuidv4(), name: 'Guest', createdAt: new Date(), updatedAt: new Date() },
      { id: uuidv4(), name: 'Host', createdAt: new Date(), updatedAt: new Date() },
      { id: uuidv4(), name: 'Admin', createdAt: new Date(), updatedAt: new Date() }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Roles', null, {});
  }
};
