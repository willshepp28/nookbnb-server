'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      firstName: Sequelize.STRING,
      lastName: Sequelize.STRING,
      phoneNumber: Sequelize.STRING,
      language: {
        type: Sequelize.STRING,
        defaultValue: 'English',
      },
      currency: {
        type: Sequelize.STRING,
        defaultValue: 'USD',
      },
      dateOfBirth: Sequelize.DATE,
      age: Sequelize.INTEGER,
      verified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      profilePhoto: Sequelize.STRING,
      city: Sequelize.STRING,
      state: Sequelize.STRING,
      country: Sequelize.STRING,
      bio: Sequelize.TEXT,
      isSuspended: Sequelize.BOOLEAN,
      preferredContactMethod: Sequelize.ENUM('Email', 'Phone', 'SMS'),
      lastLogin: Sequelize.DATE,
      termsAccepted: Sequelize.BOOLEAN,
      externalIds: Sequelize.JSON,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};