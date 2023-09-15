'use strict';
const { User, Role } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const users = await User.findAll();
    const roles = await Role.findAll();

    const userRoles = [];

    for(const user of users) {
      for(const role of roles) {
        userRoles.push({
          userId: user.id,
          roleId: role.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        })
      }
    }

    return queryInterface.bulkInsert('UserRoles', userRoles);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('UserRoles', null, {});
  }
};
